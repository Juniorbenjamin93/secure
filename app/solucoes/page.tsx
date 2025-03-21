import Link from 'next/link';

export default function SolucoesPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Soluções</h2>
      <p className="mb-6">
        Desenvolvemos soluções personalizadas para otimizar processos e aumentar a eficiência operacional da sua empresa.
      </p>
      <Link href="/solucoes/quiz" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Faça o Quiz
      </Link>
    </div>
  );
}