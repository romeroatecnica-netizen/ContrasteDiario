import {Download, Trash2, Upload, X} from 'lucide-react';
import {useRef, useState} from 'react';
import {TOPIC_MAP, TOPICS} from '../data/outlets';
import {formatSpanishShortDate} from '../engine/dailyBrief';
import {LocalWorkspaceState, TopicId} from '../types/press';
import {validateImportedWorkspace} from '../utils/storage';

interface HemerotecaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  workspace: LocalWorkspaceState;
  onImportWorkspace: (nextState: LocalWorkspaceState) => void;
  onResetWorkspace: () => void;
  onJumpToEntry: (date: string, topicId: TopicId) => void;
}

export function HemerotecaDrawer({
  isOpen,
  onClose,
  selectedDate,
  workspace,
  onImportWorkspace,
  onResetWorkspace,
  onJumpToEntry,
}: HemerotecaDrawerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  if (!isOpen) {
    return null;
  }

  const reviewedToday = workspace.reviewedTopics[selectedDate] ?? [];
  const totalNotes = Object.keys(workspace.notes).length;
  const totalCustomEditions = Object.keys(workspace.customEditions).length;
  const totalReviewedAllDays = Object.values(workspace.reviewedTopics).reduce(
    (sum, list) => sum + list.length,
    0,
  );

  const noteEntries = Object.entries(workspace.notes).sort((a, b) =>
    b[1].updatedAt.localeCompare(a[1].updatedAt),
  );

  const handleExportJson = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      ...workspace,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contrastediario-hemeroteca-${selectedDate}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setFeedback('Copia JSON exportada correctamente.');
  };

  const handleImportFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      const text = await file.text();
      const parsed: unknown = JSON.parse(text);
      const valid = validateImportedWorkspace(parsed);
      if (!valid) {
        setFeedback('El archivo no coincide con el esquema JSON de ContrasteDiario.');
        return;
      }
      onImportWorkspace(valid);
      setFeedback('Hemeroteca importada y restaurada en el navegador.');
    } catch {
      setFeedback('No se pudo leer el archivo JSON seleccionado.');
    } finally {
      event.target.value = '';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mi hemeroteca y lecturas guardadas"
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-[1px] no-print"
    >
      <div className="w-full max-w-lg bg-white h-full shadow-xl border-l border-[#E2E8F0] flex flex-col">
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl font-semibold text-slate-900">
              Mi hemeroteca personal
            </h2>
            <p className="text-xs text-slate-500">
              Progreso de lectura, notas locales y copias de seguridad JSON
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar mi hemeroteca"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-[#F8FAFC] cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Métricas en tabular-nums */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <p className="text-xs text-slate-500">Revisados en {formatSpanishShortDate(selectedDate)}</p>
              <p className="mt-1 text-2xl font-bold text-[#1E3A8A] tabular-nums">
                {reviewedToday.length}/{TOPICS.length}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <p className="text-xs text-slate-500">Total temas revisados</p>
              <p className="mt-1 text-2xl font-bold text-[#047857] tabular-nums">
                {totalReviewedAllDays}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <p className="text-xs text-slate-500">Notas guardadas</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
                {totalNotes}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <p className="text-xs text-slate-500">Ediciones editadas</p>
              <p className="mt-1 text-2xl font-bold text-[#B45309] tabular-nums">
                {totalCustomEditions}
              </p>
            </div>
          </div>

          {/* Exportar / Importar JSON */}
          <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white space-y-3">
            <h3 className="text-xs font-semibold text-slate-800">
              Exportar o importar datos locales (JSON)
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleExportJson}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Exportar JSON</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Importar JSON</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json,.json"
                onChange={handleImportFile}
                className="hidden"
              />
            </div>

            {feedback && (
              <p className="text-xs font-medium text-[#047857]" role="status">
                {feedback}
              </p>
            )}
          </div>

          {/* Notas recientes */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 mb-3">
              Cuaderno de notas por tema y fecha ({noteEntries.length})
            </h3>
            {noteEntries.length === 0 ? (
              <p className="text-xs text-slate-500 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                Aún no has guardado notas personales. Escribe tus observaciones debajo de la matriz comparativa para conservarlas aquí.
              </p>
            ) : (
              <ul className="space-y-3">
                {noteEntries.map(([key, note]) => {
                  const [datePart, topicPart] = key.split('::') as [string, TopicId];
                  const topicLabel = TOPIC_MAP[topicPart]?.label ?? topicPart;
                  return (
                    <li
                      key={key}
                      className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-slate-800 tabular-nums">
                          {datePart} · {topicLabel}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            onJumpToEntry(datePart, topicPart);
                            onClose();
                          }}
                          className="font-medium text-[#1E3A8A] hover:underline cursor-pointer"
                        >
                          Ir al dossier
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {note.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-3">
          {!confirmClear ? (
            <button
              type="button"
              onClick={() => setConfirmClear(true)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-red-700 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Borrar historial local</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-red-700 font-medium">¿Confirmar borrado?</span>
              <button
                type="button"
                onClick={() => {
                  onResetWorkspace();
                  setConfirmClear(false);
                  setFeedback('Historial local restablecido.');
                }}
                className="px-2.5 py-1 text-xs font-semibold text-white bg-red-700 rounded-md cursor-pointer"
              >
                Sí, borrar
              </button>
              <button
                type="button"
                onClick={() => setConfirmClear(false)}
                className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-white border border-[#E2E8F0] rounded-md cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-[#E2E8F0] rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
