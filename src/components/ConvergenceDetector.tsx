import {CheckCircle2, GitCompareArrows, HelpCircle, Scale} from 'lucide-react';
import {TopicBrief} from '../types/press';

interface ConvergenceDetectorProps {
  topicBrief: TopicBrief;
  isReviewed: boolean;
  consultedCount: number;
  activeOutletCount: number;
  onToggleReviewed: () => void;
}

export function ConvergenceDetector({
  topicBrief,
  isReviewed,
  consultedCount,
  activeOutletCount,
  onToggleReviewed,
}: ConvergenceDetectorProps) {
  return (
    <section
      id="convergencias"
      aria-labelledby="topic-lead-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
    >
      {/* Cabecera del tema */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#1E3A8A]">
              Dossier temático del día · Contraste de <span className="tabular-nums">{activeOutletCount}</span> cabeceras
            </p>
            <h2
              id="topic-lead-heading"
              className="mt-1.5 font-serif font-semibold text-2xl sm:text-3xl text-slate-900 leading-snug editorial-balance"
            >
              {topicBrief.topicTitle}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {topicBrief.contextDeck}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onToggleReviewed}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isReviewed
                  ? 'bg-[#047857] text-white border-[#047857] hover:bg-emerald-800'
                  : 'bg-[#F8FAFC] text-slate-800 border-[#E2E8F0] hover:border-[#047857] hover:text-[#047857]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              <span>{isReviewed ? 'Tema revisado' : 'Marcar tema revisado'}</span>
            </button>
            <p className="text-xs text-slate-500 tabular-nums">
              Medios marcados como consultados: <strong className="text-slate-800">{consultedCount}/7</strong>
            </p>
          </div>
        </div>

        {/* Fuentes primarias recomendadas */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Fuentes primarias de contraste:</span>
          {topicBrief.primarySources.map((source, index) => (
            <span key={source} className="inline-flex items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="text-slate-300">/</span>}
              <span>{source}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bloque analítico: Detector de Convergencias y Divergencias */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        <article className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E2E8F0]">
            <Scale className="w-4 h-4 text-[#047857] shrink-0" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-[#047857]">
              Convergencias factuales (hechos y cifras compartidas)
            </h3>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed flex-1">
            {topicBrief.convergences.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-xs font-semibold text-[#047857] tabular-nums mt-0.5 shrink-0">
                  0{index + 1}.
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E2E8F0]">
            <GitCompareArrows className="w-4 h-4 text-[#B45309] shrink-0" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-[#B45309]">
              Puntos de divergencia y marcos interpretativos
            </h3>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed flex-1">
            {topicBrief.divergences.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-xs font-semibold text-[#B45309] tabular-nums mt-0.5 shrink-0">
                  0{index + 1}.
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Preguntas críticas de lectura */}
      <div className="mt-5 bg-white border border-[#E2E8F0] rounded-xl px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E3A8A] shrink-0">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span>Claves para verificar en fuentes originales</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-1.5 text-xs sm:text-sm text-slate-700">
            {topicBrief.criticalQuestions.map((question, idx) => (
              <span key={idx}>
                <strong className="text-slate-900 tabular-nums">{idx + 1}.</strong> {question}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
