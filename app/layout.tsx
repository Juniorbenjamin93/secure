import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/globals.css';
import Head from 'next/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Segurança T.I Empresarial</title>
        <meta name="description" content="Soluções de segurança em T.I para o ambiente empresarial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-blue-900 text-gray-100 min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}