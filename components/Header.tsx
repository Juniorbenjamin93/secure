"use client"

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white flex items-center transition-transform duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            SecureTI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-200 hover:text-white hover:translate-y-[-2px] transition-all">Home</Link>
            <Link href="/sobre" className="text-gray-200 hover:text-white hover:translate-y-[-2px] transition-all">Sobre Nós</Link>
            <Link href="/auditoria" className="text-gray-200 hover:text-white hover:translate-y-[-2px] transition-all">Auditoria</Link>
            <Link href="/armazenamento" className="text-gray-200 hover:text-white hover:translate-y-[-2px] transition-all">Armazenamento</Link>
            <Link href="/solucoes" className="text-gray-200 hover:text-white hover:translate-y-[-2px] transition-all">Soluções</Link>
            <Link href="/gerenciamento" className="text-gray-200 hover:text-white hover:translate-y-[-2px] transition-all">Gerenciamento</Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 rounded-md hover:bg-blue-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-800 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
              <Link href="/sobre-nos" className="text-gray-200 hover:text-white transition-colors">Sobre Nós</Link>
              <Link href="/auditoria" className="text-gray-200 hover:text-white transition-colors">Auditoria</Link>
              <Link href="/armazenamento" className="text-gray-200 hover:text-white transition-colors">Armazenamento</Link>
              <Link href="/solucoes" className="text-gray-200 hover:text-white transition-colors">Soluções</Link>
              <Link href="/gerenciamento" className="text-gray-200 hover:text-white transition-colors">Gerenciamento</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}