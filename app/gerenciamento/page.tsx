import Link from 'next/link';

export default function GerenciamentoPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Gerenciamento</h2>
      <p className="mb-6">
        Oferecemos serviços de gerenciamento de projetos e processos, garantindo a entrega de resultados com qualidade e eficiência.
      </p>
      <Link href="/gerenciamento/quiz" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Faça o Quiz
      </Link>
    </div>
  );
}