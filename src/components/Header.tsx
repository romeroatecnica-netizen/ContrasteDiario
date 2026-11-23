import {BookMarked} from 'lucide-react';
import {SITE_NAME} from '../config/site';

interface HeaderProps {
  reviewedCountToday: number;
  totalTopics: number;
  onOpenHemeroteca: () => void;
}

export function Header({
  reviewedCountToday,
  totalTopics,
  onOpenHemeroteca,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E2E8F0] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#comparador"
          className="font-serif font-semibold text-xl tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-sm"
        >
          {SITE_NAME}
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#comparador"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Comparador
          </a>
          <a
            href="#convergencias"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Convergencias
          </a>
          <a
            href="#lectura-critica"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Lectura crítica
          </a>
          <a
            href="#preguntas-frecuentes"
            className="hover:text-[#1E3A8A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Preguntas frecuentes
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenHemeroteca}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2"
          >
            <BookMarked className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Mi hemeroteca</span>
            <span className="tabular-nums opacity-85">
              ({reviewedCountToday}/{totalTopics})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
