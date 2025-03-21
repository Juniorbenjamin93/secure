import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const quizId = searchParams.get('quizId');
  const userId = searchParams.get('userId');
  const { db } = await connectToDatabase();

  const query: any = {};
  if (quizId) query.quizId = quizId;
  if (userId) query.userId = userId;

  const submissions = await db.collection('quiz-submissions').find(query).toArray();
  return NextResponse.json({ success: true, data: submissions });
}

export async function POST(request: NextRequest) {
  const { db } = await connectToDatabase();
  const submission = await request.json();

  if (submission.quizId) {
    const quiz = await db.collection('quizzes').findOne({ _id: new ObjectId(submission.quizId) });
    if (quiz) {
      const correct: string[] = [];
      const incorrect: string[] = [];

      quiz.questions.forEach((question: any) => {
        const answer = submission.answers.find((a: any) => a.questionId === question.id);
        if (!answer) return;
        const correctOption = question.options.find((opt: any) => opt.isCorrect);
        if (correctOption && correctOption.id === answer.selectedOptionId) {
          correct.push(question.id);
        } else {
          incorrect.push(question.id);
        }
      });

      submission.correct = correct;
      submission.incorrect = incorrect;
    }
  }

  const result = await db.collection('quiz-submissions').insertOne({ ...submission, createdAt: new Date() });
  return NextResponse.json({ success: true, data: result }, { status: 201 });
}
