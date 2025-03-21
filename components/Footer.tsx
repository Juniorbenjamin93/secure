import Link from 'next/link';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-950 bg-opacity-90 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">SecureTI</span>
            </div>
            <p className="text-gray-300 mb-6">
              Especialistas em segurança de dados e soluções corporativas de T.I. Protegendo seu negócio no mundo digital.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/auditoria" className="text-gray-300 hover:text-white transition-colors">
                  Auditoria e Consultoria
                </Link>
              </li>
              <li>
                <Link href="/armazenamento" className="text-gray-300 hover:text-white transition-colors">
                  Venda de Armazenamento
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-gray-300 hover:text-white transition-colors">
                  Soluções de Desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="/gerenciamento" className="text-gray-300 hover:text-white transition-colors">
                  Gerenciamento e Backup
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">contato@secureti.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(11) 4002-8922</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} SecureTI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}