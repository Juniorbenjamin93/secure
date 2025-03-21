"use client"

import { CardSegmento } from "../components/CardSegmento";
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`max-w-4xl mx-auto bg-blue-800/20 rounded-lg shadow-lg p-8 border border-blue-700/30 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <h1 className={`text-4xl font-bold mb-4 text-white ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}>
          Segurança de T.I para seu Negócio
        </h1>
        <p className={`text-xl mb-8 text-gray-200 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          Protegendo dados empresariais com soluções avançadas e personalizadas para sua empresa.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Auditoria e Consultoria", href: "/auditoria" },
            { title: "Venda de Armazenamento", href: "/armazenamento" },
            { title: "Soluções de Desenvolvimento", href: "/solucoes" },
            { title: "Gerenciamento e Backup", href: "/gerenciamento" }
          ].map((item, index) => (
            <div 
              key={item.href} 
              className={`stagger-item ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
            >
              <CardSegmento title={item.title} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}