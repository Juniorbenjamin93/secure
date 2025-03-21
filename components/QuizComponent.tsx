'use client';
import { useEffect, useState } from 'react';

interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface Question {
  id: string;
  question: string;
  type: string;
  options: Option[];
  dificuldade: 'basica' | 'intermediaria' | 'dificil'; // Novo campo de dificuldade
}

interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: Question[];
}

export default function QuizComponent({ segmento }: { segmento: string }) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ correct: string[]; incorrect: string[] }>({ correct: [], incorrect: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dificuldade, setDificuldade] = useState<'basica' | 'intermediaria' | 'dificil'>('basica'); // Estado de dificuldade

  // Buscar quizzes por segmento
  useEffect(() => {
    if (!segmento) return;
    setLoading(true);
    fetch(`/api/quizzes?segmento=${segmento}`)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data.data);
        if (data.data.length > 0) {
          setSelectedQuiz(data.data[0]); // Seleciona o primeiro quiz automaticamente
        }
      })
      .catch((err) => setError('Erro ao carregar quizzes.'))
      .finally(() => setLoading(false));
  }, [segmento]);

  // Seleciona questões com base na dificuldade
  const getQuestionsByDifficulty = (questions: Question[], dificuldade: 'basica' | 'intermediaria' | 'dificil', count: number) => {
    const filteredQuestions = questions.filter((q) => q.dificuldade === dificuldade);
    const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = async () => {
    if (!selectedQuiz) return;

    // Verifica respostas corretas e incorretas
    const correct: string[] = [];
    const incorrect: string[] = [];

    selectedQuiz.questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        const correctOption = q.options.find((opt) => opt.isCorrect);
        if (correctOption && correctOption.id === answer) {
          correct.push(q.id);
        } else {
          incorrect.push(q.id);
        }
      }
    });

    setResult({ correct, incorrect });
    setSubmitted(true);

    // Atualiza a dificuldade com base no desempenho
    if (correct.length >= 3 && dificuldade !== 'dificil') {
      setDificuldade('intermediaria');
    } else if (correct.length >= 4 && dificuldade !== 'dificil') {
      setDificuldade('dificil');
    }
  };

  if (loading) return <p>Carregando quizzes...</p>;
  if (error) return <p>{error}</p>;

  if (selectedQuiz) {
    const filteredQuestions = getQuestionsByDifficulty(selectedQuiz.questions, dificuldade, 5); // Seleciona 5 questões com base na dificuldade

    return (
      <div className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-blue-800">{selectedQuiz.title}</h2>
        <p className="mb-4 text-gray-600">{selectedQuiz.description}</p>

        {filteredQuestions.map((q) => {
          const isCorrect = result.correct.includes(q.id);
          const isIncorrect = result.incorrect.includes(q.id);

          return (
            <div key={q.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-lg text-gray-800">{q.question}</p>
              <div className="ml-4 space-y-2 mt-2">
                {q.options.map((o) => (
                  <label key={o.id} className="block">
                    <input
                      type="radio"
                      name={q.id}
                      value={o.id}
                      onChange={() => handleAnswer(q.id, o.id)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    <span className="text-gray-700">{o.text}</span>
                  </label>
                ))}
              </div>
              {submitted && (
                <div className="mt-2">
                  {isCorrect && <span className="text-green-600">✅ Resposta correta!</span>}
                  {isIncorrect && <span className="text-red-600">❌ Resposta incorreta.</span>}
                </div>
              )}
            </div>
          );
        })}

        {!submitted && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Enviar Respostas
          </button>
        )}

        {submitted && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="font-bold text-xl text-green-800">
              Você acertou {result.correct.length} de {filteredQuestions.length} questões.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Escolha um Quiz</h1>
      {quizzes.length === 0 && <p>Não há quizzes disponíveis para este segmento.</p>}
      {quizzes.map((quiz) => (
        <button
          key={quiz._id}
          onClick={() => setSelectedQuiz(quiz)}
          className="block w-full text-left p-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          <h3 className="font-semibold">{quiz.title}</h3>
          <p className="text-gray-600">{quiz.description}</p>
        </button>
      ))}
    </div>
  );
}