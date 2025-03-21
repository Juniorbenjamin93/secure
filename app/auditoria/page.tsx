import Link from 'next/link';

export default function AuditoriaPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Auditoria e Consultoria</h2>
      <p className="mb-6">
        Oferecemos serviços completos de auditoria de segurança em T.I, garantindo que sua empresa siga as melhores práticas do mercado.
      </p>
      <Link href="/auditoria/quiz" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Faça o Quiz
      </Link>
    </div>
  );
}
