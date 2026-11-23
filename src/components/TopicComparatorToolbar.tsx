import {
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Columns3,
  FileEdit,
  LayoutGrid,
  RotateCcw,
  Search,
} from 'lucide-react';
import {OUTLETS, TOPICS} from '../data/outlets';
import {
  formatSpanishLongDate,
  getTodayISODate,
  shiftISODate,
} from '../engine/dailyBrief';
import {BriefSourceKind, OutletId, TopicId} from '../types/press';

export type ComparisonViewMode = 'cards' | 'matrix';

interface TopicComparatorToolbarProps {
  selectedDate: string;
  onChangeDate: (nextDate: string) => void;
  selectedTopic: TopicId;
  onChangeTopic: (nextTopic: TopicId) => void;
  activeOutlets: OutletId[];
  onToggleOutlet: (outletId: OutletId) => void;
  onSelectAllOutlets: () => void;
  viewMode: ComparisonViewMode;
  onChangeViewMode: (mode: ComparisonViewMode) => void;
  searchQuery: string;
  onChangeSearchQuery: (query: string) => void;
  reviewedTopicsForDate: TopicId[];
  briefSource: BriefSourceKind;
  editionLabel: string;
  isEditorOpen: boolean;
  onToggleEditor: () => void;
}

export function TopicComparatorToolbar({
  selectedDate,
  onChangeDate,
  selectedTopic,
  onChangeTopic,
  activeOutlets,
  onToggleOutlet,
  onSelectAllOutlets,
  viewMode,
  onChangeViewMode,
  searchQuery,
  onChangeSearchQuery,
  reviewedTopicsForDate,
  briefSource,
  editionLabel,
  isEditorOpen,
  onToggleEditor,
}: TopicComparatorToolbarProps) {
  const today = getTodayISODate();
  const yesterday = shiftISODate(today, -1);
  const twoDaysAgo = shiftISODate(today, -2);

  const sourceDescription =
    briefSource === 'custom'
      ? 'Edición local personalizada'
      : briefSource === 'remote'
        ? 'Edición publicada (/daily-brief.json)'
        : 'Motor determinista local por fecha';

  return (
    <section id="comparador" className="pt-8 pb-6 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
            <span>Hemeroteca comparada de España</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize tabular-nums">
              {formatSpanishLongDate(selectedDate)}
            </span>
            <span aria-hidden="true">·</span>
            <span>{sourceDescription}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{editionLabel}</span>
          </div>

          <h1 className="mt-2 font-serif font-semibold text-slate-900 tracking-tight leading-tight editorial-balance text-[clamp(1.85rem,3.3vw,2.85rem)]">
            Comparador diario de prensa española por temas y perspectivas
          </h1>

          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-3xl">
            Contrasta de un vistazo el enfoque editorial de El País, El Mundo, El Debate, The Objective, elDiario.es, Vozpópuli y La Razón sobre los grandes asuntos del día en España.
          </p>
        </div>

        {/* Fila 1: Selector de fecha + Vista + Editor local */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E2E8F0]">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-0.5">
              <button
                type="button"
                onClick={() => onChangeDate(shiftISODate(selectedDate, -1))}
                aria-label="Día anterior"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-white rounded-md transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <label className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium text-slate-800 cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => {
                    if (e.target.value) {
                      onChangeDate(e.target.value);
                    }
                  }}
                  aria-label="Seleccionar fecha de edición"
                  className="bg-transparent text-xs font-medium text-slate-900 tabular-nums focus:outline-none cursor-pointer"
                />
              </label>
              <button
                type="button"
                onClick={() => onChangeDate(shiftISODate(selectedDate, 1))}
                aria-label="Día siguiente"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-white rounded-md transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="inline-flex items-center gap-1 p-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              {[
                {label: 'Hoy', value: today},
                {label: 'Ayer', value: yesterday},
                {label: 'Anteayer', value: twoDaysAgo},
              ].map((preset) => {
                const isSelected = selectedDate === preset.value;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => onChangeDate(preset.value)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E3A8A] text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1 p-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <button
                type="button"
                onClick={() => onChangeViewMode('cards')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-white text-slate-900 shadow-xs border border-[#E2E8F0]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Vista Tarjetas</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeViewMode('matrix')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-white text-slate-900 shadow-xs border border-[#E2E8F0]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Matriz Comparativa</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onToggleEditor}
              aria-expanded={isEditorOpen}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isEditorOpen
                  ? 'border-[#1E3A8A] bg-blue-50/60 text-[#1E3A8A]'
                  : 'border-[#E2E8F0] bg-white text-slate-700 hover:bg-[#F8FAFC]'
              }`}
            >
              <FileEdit className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Editor diario JSON</span>
            </button>
          </div>
        </div>

        {/* Fila 2: Selector de Temas */}
        <div className="mt-4">
          <div
            role="tablist"
            aria-label="Temas de actualidad en España"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
          >
            {TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.id;
              const isReviewed = reviewedTopicsForDate.includes(topic.id);
              return (
                <button
                  key={topic.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onChangeTopic(topic.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <span>{topic.label}</span>
                  {isReviewed && (
                    <Check
                      className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-200' : 'text-[#047857]'}`}
                      aria-label="Tema revisado"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fila 3: Filtro de los 7 medios + Búsqueda rápida */}
        <div className="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-slate-500 mr-1 whitespace-nowrap">
              Cabeceras (<span className="tabular-nums">{activeOutlets.length}/7</span>):
            </span>
            {OUTLETS.map((outlet) => {
              const active = activeOutlets.includes(outlet.id);
              return (
                <button
                  key={outlet.id}
                  type="button"
                  onClick={() => onToggleOutlet(outlet.id)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'border-slate-300 bg-white text-slate-900'
                      : 'border-[#E2E8F0] bg-[#F8FAFC] text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-xs shrink-0"
                    style={{
                      backgroundColor: active ? outlet.accentHex : '#CBD5E1',
                    }}
                    aria-hidden="true"
                  />
                  <span>{outlet.name}</span>
                </button>
              );
            })}

            {activeOutlets.length < OUTLETS.length && (
              <button
                type="button"
                onClick={onSelectAllOutlets}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#1E3A8A] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                <span>Mostrar todos</span>
              </button>
            )}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search
              className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onChangeSearchQuery(e.target.value)}
              placeholder="Filtrar titulares o claves..."
              aria-label="Filtrar titulares o claves dentro del tema"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
