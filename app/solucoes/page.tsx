import Link from "next/link";

export default function SolucoesPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Título com destaque */}
      <h2 className="text-3xl font-bold mb-6 text-white">
        <span className="block">Soluções de Segurança</span>
        <span className="block">para Empresas</span>
      </h2>

      {/* Introdução */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Nossa empresa oferece <strong>soluções completas</strong> para proteger sistemas e dados contra ameaças cibernéticas, garantindo <strong>integridade</strong>, <strong>confidencialidade</strong> e <strong>disponibilidade</strong> das informações.
        </p>
      </div>

      {/* Lista de Soluções */}
      <div className="space-y-6 mb-8">
        {[
          {
            title: "Firewall e Proteção de Rede",
            content: "Implementação de firewalls e sistemas de detecção de intrusão para proteger a rede contra acessos não autorizados."
          },
          {
            title: "Criptografia de Dados",
            content: "Proteção de dados sensíveis por meio de criptografia avançada, garantindo que informações confidenciais não sejam acessadas indevidamente."
          },
          {
            title: "Monitoramento Contínuo",
            content: "Vigilância 24/7 para identificar e responder a ameaças em tempo real, com alertas automatizados."
          },
          {
            title: "Gestão de Identidades",
            content: "Controle de acessos com autenticação multifatorial e permissões baseadas em funções específicas."
          },
          {
            title: "Testes de Penetração",
            content: "Simulação de ataques cibernéticos para identificar vulnerabilidades antes que sejam exploradas."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-600 mb-3">{item.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Botão centralizado */}
      <div className="text-center mt-8">
        <Link
          href="/solucoes/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-md inline-block"
        >
          Avalie Seu Conhecimento
        </Link>
      </div>
    </div>
  );
}