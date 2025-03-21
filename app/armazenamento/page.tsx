import Link from 'next/link';

export default function ArmazenamentoPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Armazenamento</h2>
      <p className="mb-6">
        Oferecemos soluções de armazenamento de dados seguras e escaláveis, garantindo a integridade e disponibilidade das informações.
      </p>
      <Link href="/armazenamento/quiz" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Faça o Quiz
      </Link>
    </div>
  );
}