import {Check, ExternalLink} from 'lucide-react';
import {OUTLETS} from '../data/outlets';
import {getOutletUrlForCoverage} from '../engine/dailyBrief';
import {OutletId, TopicBrief} from '../types/press';
import {ComparisonViewMode} from './TopicComparatorToolbar';

interface OutletComparisonViewProps {
  topicBrief: TopicBrief;
  activeOutlets: OutletId[];
  consultedOutlets: OutletId[];
  onToggleConsulted: (outletId: OutletId) => void;
  viewMode: ComparisonViewMode;
  searchQuery: string;
}

export function OutletComparisonView({
  topicBrief,
  activeOutlets,
  consultedOutlets,
  onToggleConsulted,
  viewMode,
  searchQuery,
}: OutletComparisonViewProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleOutlets = OUTLETS.filter((outlet) => {
    if (!activeOutlets.includes(outlet.id)) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const cov = topicBrief.outlets[outlet.id];
    const haystack = [
      outlet.name,
      outlet.typeLabel,
      cov.angleType,
      cov.headline,
      cov.summary,
      ...cov.emphasizes,
      ...cov.questionsOrNuances,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  if (visibleOutlets.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-10 text-center">
          <p className="text-base font-medium text-slate-800">
            Ninguna cabecera coincide con los filtros activos.
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Activa más periódicos en la barra superior o limpia el campo de búsqueda.
          </p>
        </div>
      </section>
    );
  }

  if (viewMode === 'matrix') {
    return (
      <section
        aria-label="Matriz comparativa de los 7 medios"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
      >
        <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[920px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold text-slate-600">
                  <th className="py-3.5 px-4 w-44">Cabecera</th>
                  <th className="py-3.5 px-4 w-44">Ángulo principal</th>
                  <th className="py-3.5 px-4">Titular de referencia y síntesis</th>
                  <th className="py-3.5 px-4 w-64">Qué enfatiza</th>
                  <th className="py-3.5 px-4 w-64">Qué matiza o pregunta</th>
                  <th className="py-3.5 px-4 w-36 text-right">Lectura</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {visibleOutlets.map((outlet) => {
                  const cov = topicBrief.outlets[outlet.id];
                  const isConsulted = consultedOutlets.includes(outlet.id);
                  const targetUrl = getOutletUrlForCoverage(
                    outlet.id,
                    topicBrief.topicId,
                    cov.articleUrl,
                  );

                  return (
                    <tr
                      key={outlet.id}
                      className={`align-top transition-colors ${
                        isConsulted ? 'bg-emerald-50/25' : 'hover:bg-[#F8FAFC]/80'
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold text-white shrink-0"
                            style={{backgroundColor: outlet.accentHex}}
                            aria-hidden="true"
                          >
                            {outlet.shortMark}
                          </span>
                          <div>
                            <div className="font-semibold text-slate-900">{outlet.name}</div>
                            <div className="text-xs text-slate-500">{outlet.typeLabel}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 text-xs font-medium text-[#1E3A8A]">
                        {cov.angleType}
                      </td>

                      <td className="py-4 px-4">
                        <h3 className="font-serif font-medium text-base text-slate-900 leading-snug">
                          {cov.headline}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                          {cov.summary}
                        </p>
                      </td>

                      <td className="py-4 px-4">
                        <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                          {cov.emphasizes.map((item, i) => (
                            <li key={i}>· {item}</li>
                          ))}
                        </ul>
                      </td>

                      <td className="py-4 px-4">
                        <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                          {cov.questionsOrNuances.map((item, i) => (
                            <li key={i}>· {item}</li>
                          ))}
                        </ul>
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="flex flex-col items-end gap-2">
                          <button
                            type="button"
                            onClick={() => onToggleConsulted(outlet.id)}
                            className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap cursor-pointer ${
                              isConsulted
                                ? 'bg-[#047857] text-white border-[#047857]'
                                : 'bg-white text-slate-700 border-[#E2E8F0] hover:border-[#047857] hover:text-[#047857]'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{isConsulted ? 'Consultado' : 'Marcar leído'}</span>
                          </button>
                          <a
                            href={targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#1E3A8A] hover:underline whitespace-nowrap"
                          >
                            <span>Abrir medio</span>
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Tarjetas comparativas de los 7 medios"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
        {visibleOutlets.map((outlet) => {
          const cov = topicBrief.outlets[outlet.id];
          const isConsulted = consultedOutlets.includes(outlet.id);
          const targetUrl = getOutletUrlForCoverage(
            outlet.id,
            topicBrief.topicId,
            cov.articleUrl,
          );

          return (
            <article
              key={outlet.id}
              className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden flex flex-col transition-colors hover:border-slate-300"
            >
              {/* Trazo superior de identidad tipográfica (1px/2px, nunca barra lateral gruesa) */}
              <div
                className="h-1 w-full"
                style={{backgroundColor: outlet.accentHex}}
                aria-hidden="true"
              />

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0 tracking-tight"
                      style={{backgroundColor: outlet.accentHex}}
                      aria-hidden="true"
                    >
                      {outlet.shortMark}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 truncate">
                        {outlet.name}
                      </h3>
                      <p className="text-xs text-slate-500 truncate">
                        {outlet.typeLabel}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#1E3A8A] font-medium">
                  <span>{cov.angleType}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-slate-500 font-normal">
                    {outlet.editorialAxis}
                  </span>
                </div>

                <h4 className="mt-3 font-serif font-medium text-xl text-slate-900 leading-snug editorial-balance">
                  “{cov.headline}”
                </h4>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {cov.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-4 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-[#047857]">
                      Qué enfatiza
                    </p>
                    <ul className="mt-1.5 space-y-1.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                      {cov.emphasizes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#047857] font-semibold" aria-hidden="true">
                            +
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#B45309]">
                      Qué suele preguntar o matizar
                    </p>
                    <ul className="mt-1.5 space-y-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {cov.questionsOrNuances.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#B45309] font-semibold" aria-hidden="true">
                            ?
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onToggleConsulted(outlet.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isConsulted
                        ? 'bg-[#047857] text-white border-[#047857]'
                        : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:border-[#047857] hover:text-[#047857]'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{isConsulted ? 'Consultado' : 'Marcar consultado'}</span>
                  </button>

                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                  >
                    <span>Ir al medio</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
