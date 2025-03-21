import 'dotenv/config';
import { connectToDatabase } from './mongodb.ts';
import { ObjectId } from 'mongodb';

async function seed() {
  const { db } = await connectToDatabase();

  console.log('⚙️ Limpando quizzes antigos...');
  await db.collection('quizzes').deleteMany({});

  console.log('🚀 Inserindo novos quizzes...');
  const quizzes = [
    {
      segmento: 'auditoria', // Segmento de auditoria
      title: 'Quiz de Auditoria e Consultoria',
      description: 'Teste seus conhecimentos em auditoria e consultoria.',
      questions: [
        // Questões básicas
        {
          id: new ObjectId().toString(),
          question: 'Qual é o objetivo principal de mapear processos durante uma auditoria interna?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Identificar e corrigir gargalos nos fluxos de trabalho', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Reduzir os custos operacionais diretamente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Substituir controles internos por sistemas automatizados', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Avaliar somente os riscos financeiros', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual ferramenta é frequentemente usada para identificar gargalos operacionais?',
          type: 'multiple_choice',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Brainstorming não estruturado', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Diagramas de Ishikawa (Espinha de Peixe)', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Revisão de documentos jurídicos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Análise de fluxo de caixa', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Uma análise ineficaz de indicadores de desempenho pode mascarar gargalos operacionais.',
          type: 'true_false',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Os gargalos identificados por uma auditoria devem ser resolvidos exclusivamente pela equipe de auditoria.',
          type: 'true_false',
          dificuldade: 'basica',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },

        // Questões intermediárias
        {
          id: new ObjectId().toString(),
          question: 'Qual das opções abaixo exemplifica uma recomendação consultiva para resolver gargalos?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Ajustar processos com base em análise de dados e tendências', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Suspender as operações críticas temporariamente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Evitar mudanças até que novos gargalos apareçam', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Criar relatórios descritivos sem propor ações', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Durante uma auditoria de um processo de produção, foi identificado que uma etapa específica está acumulando trabalho devido a falhas em equipamentos. O que seria mais apropriado recomendar?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Revisar o cronograma de manutenção preventiva dos equipamentos', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Aumentar a força de trabalho nesta etapa específica', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Desconsiderar o problema, pois ele não afeta diretamente os lucros', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Criar relatórios sem propor mudanças imediatas', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Em uma auditoria interna, você percebe que as etapas para aprovação de pedidos estão causando atrasos. Qual seria o próximo passo para identificar a raiz do problema?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Aplicar fluxogramas para analisar o processo', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Confiar exclusivamente na opinião dos gestores', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Aumentar o número de aprovadores sem análise prévia', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Reduzir a quantidade de controles internos no processo', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Qual é o principal objetivo dos controles internos em uma organização?',
          type: 'multiple_choice',
          dificuldade: 'intermediaria',
          options: [
            { id: new ObjectId().toString(), text: 'Garantir conformidade com regulamentos externos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Melhorar a comunicação entre departamentos', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Prevenir fraudes e promover eficiência operacional', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Automatizar todas as operações manuais', isCorrect: false },
          ],
        },

        // Questões difíceis
        {
          id: new ObjectId().toString(),
          question: 'Auditorias internas que focam em eficiência operacional avaliam principalmente indicadores financeiros.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: true },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'A segregação de funções é um controle interno fundamental para minimizar riscos operacionais e aumentar a eficiência.',
          type: 'true_false',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Verdadeiro', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Falso', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Situação: Em uma auditoria, você identificou que um mesmo funcionário é responsável por aprovar e registrar transações financeiras. O que você recomendaria?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Automatizar todas as transações financeiras imediatamente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Implementar a segregação de funções, dividindo responsabilidades', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Treinar o funcionário para evitar erros futuros', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Ignorar o problema, pois ele não envolve fraude comprovada', isCorrect: false },
          ],
        },
        {
          id: new ObjectId().toString(),
          question: 'Situação: Um gargalo foi detectado em um processo de atendimento ao cliente devido à falta de treinamento da equipe. Como consultor interno, qual seria a solução mais indicada?',
          type: 'multiple_choice',
          dificuldade: 'dificil',
          options: [
            { id: new ObjectId().toString(), text: 'Contratar mais funcionários imediatamente', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Desenvolver um programa de capacitação contínua para a equipe', isCorrect: true },
            { id: new ObjectId().toString(), text: 'Reduzir os controles de qualidade no processo', isCorrect: false },
            { id: new ObjectId().toString(), text: 'Delegar todas as decisões aos gestores de área', isCorrect: false },
          ],
        },
      ],
    },
  ];

  const result = await db.collection('quizzes').insertMany(quizzes);
  console.log(`✅ ${result.insertedCount} quizzes inseridos com sucesso!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Erro ao popular o banco:', err);
  process.exit(1);
});