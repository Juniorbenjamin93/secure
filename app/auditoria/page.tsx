import Link from "next/link";

export default function AuditoriaPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Título com destaque */}
      <h2 className="text-3xl font-bold mb-6 text-whitenp">
        <span className="block">Auditoria e Consultoria</span>
        <span className="block">em Bancos de Dados</span>
      </h2>

      {/* Introdução */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          Nossos serviços especializados garantem a <strong>segurança</strong>, <strong>eficiência</strong> e <strong>integridade</strong> de bancos de dados, alinhados aos objetivos estratégicos da sua empresa.
        </p>
      </div>

      {/* Auditoria */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Auditoria</h3>
        <ul className="space-y-4">
          {[
            "Avaliação de Segurança: Verificar vulnerabilidades, riscos e conformidade com normas de proteção de dados.",
            "Integridade de Dados: Avaliar a precisão, consistência e confiabilidade dos dados armazenados.",
            "Desempenho: Examinar o desempenho do banco de dados para identificar problemas de eficiência.",
            "Relatórios e Recomendações: Sugerir ações corretivas como otimização e controles de acesso."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">✓</span>
              <p className="text-gray-700 text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Consultoria */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Consultoria</h3>
        <ul className="space-y-4">
          {[
            "Planejamento e Design: Estruturação do banco de dados para atender necessidades específicas.",
            "Otimização: Melhorias de desempenho com ajuste de consultas e indexação.",
            "Implementação de Tecnologias: Recomendação de soluções avançadas como automação.",
            "Treinamento e Suporte: Capacitação para uso eficaz e seguro dos sistemas."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">✓</span>
              <p className="text-gray-700 text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão centralizado */}
      <div className="text-center mt-8">
        <Link
          href="/auditoria/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-md inline-block"
        >
          Iniciar Avaliação
        </Link>
      </div>
    </div>
  );
}