import Link from 'next/link';

interface CardSegmentoProps {
  title: string;
  href: string;
}

export function CardSegmento({ title, href }: CardSegmentoProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-blue-800/30 hover:bg-blue-700/40 transition-all duration-300 p-6 rounded-lg shadow-md border border-blue-700/30 hover:shadow-lg hover:translate-y-[-5px] hover-shimmer">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Saiba mais</span>
          <span className="text-gray-300 transform transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}