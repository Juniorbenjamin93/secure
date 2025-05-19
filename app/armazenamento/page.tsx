import Link from "next/link";

export default function ArmazenamentoPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Título com destaque */}
      <h2 className="text-3xl font-bold mb-6 text-white">
        <span className="block">Armazenamento</span>
        <span className="block">de Dados</span>
      </h2>

      {/* Conteúdo com formatação melhorada */}
      <div className="space-y-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            <span className="text-blue-600">Solução Completa:</span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            O <strong>armazenamento</strong> em uma empresa de consultoria envolve organizar e proteger dados essenciais, como documentos, relatórios, informações de clientes e projetos. Utilizamos ferramentas digitais avançadas (como sistemas de gestão documental, <strong>nuvem</strong> e <strong>CRMs</strong>) para armazenar e acessar essas informações de forma <strong>eficiente</strong> e <strong>segura</strong>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            <span className="text-blue-600">Segurança e Práticas:</span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            A <strong>segurança dos dados</strong> é fundamental, com práticas como:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Backup</strong> automatizado</li>
              <li><strong>Criptografia</strong> de arquivos sensíveis</li>
              <li>Controle de <strong>acesso hierárquico</strong></li>
              <li>Repositórios internos para <strong>conhecimento institucional</strong></li>
            </ul>
          </p>
        </div>
      </div>

      {/* Botão centralizado e com mais destaque */}
      <div className="text-center mt-8">
        <Link
          href="/armazenamento/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-md inline-block"
        >
          Teste Seu Conhecimento
        </Link>
      </div>
    </div>
  );
}