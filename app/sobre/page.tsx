import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Cabeçalho */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Sobre Nós</h1>
        <p className="text-gray-600 mt-2">Conheça mais sobre nossa empresa e nossa missão.</p>
      </header>

      {/* Seção Missão, Visão e Valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Nossa Essência</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Missão</h3>
            <p className="text-gray-600">
              Oferecer soluções de banco de dados inovadoras e seguras, ajudando empresas a otimizar seus processos e tomar decisões baseadas em dados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser referência no mercado de serviços de banco de dados, reconhecidos pela excelência e confiabilidade em nossas soluções.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Valores</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Inovação</li>
              <li>Transparência</li>
              <li>Comprometimento</li>
              <li>Qualidade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Consultoria em Banco de Dados</h3>
            <p className="text-gray-600">
              Oferecemos consultoria especializada para ajudar sua empresa a escolher e implementar a melhor solução de banco de dados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Migração de Dados</h3>
            <p className="text-gray-600">
              Realizamos migrações seguras e eficientes de dados, garantindo a integridade e disponibilidade das informações.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Otimização de Desempenho</h3>
            <p className="text-gray-600">
              Melhoramos o desempenho dos seus bancos de dados, garantindo consultas rápidas e operações eficientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Backup e Recuperação</h3>
            <p className="text-gray-600">
              Implementamos soluções de backup e recuperação de dados para garantir a segurança e continuidade dos negócios.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Auditoria de Segurança</h3>
            <p className="text-gray-600">
              Realizamos auditorias de segurança para identificar vulnerabilidades e garantir a proteção dos seus dados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Treinamento e Capacitação</h3>
            <p className="text-gray-600">
              Oferecemos treinamentos para equipes, garantindo que sua empresa utilize os bancos de dados com máxima eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Equipe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-800">João Silva</h3>
            <p className="text-gray-600">Especialista em Banco de Dados</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-800">Maria Souza</h3>
            <p className="text-gray-600">Consultora de Segurança</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-800">Pedro Costa</h3>
            <p className="text-gray-600">Arquiteto de Soluções</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-800">Ana Lima</h3>
            <p className="text-gray-600">Analista de Desempenho</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center mt-12">
        <p className="text-gray-600">
          © 2023 Empresa de Banco de Dados. Todos os direitos reservados.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Voltar para a página inicial
        </Link>
      </footer>
    </div>
  );
}