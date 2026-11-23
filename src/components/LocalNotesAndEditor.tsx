import {
  Check,
  Copy,
  Download,
  FileEdit,
  NotebookPen,
  RotateCcw,
  Save,
} from 'lucide-react';
import {useEffect, useState} from 'react';
import {OUTLETS, TOPIC_MAP} from '../data/outlets';
import {
  AngleType,
  BriefSourceKind,
  DailyBrief,
  OutletId,
  TopicBrief,
  TopicId,
  TopicNote,
} from '../types/press';

const ANGLE_TYPES: AngleType[] = [
  'Institucional / Gobernanza',
  'Confrontación Política',
  'Impacto Económico / Fiscal',
  'Fiscalización / Investigación',
  'Derechos Sociales / Desigualdad',
  'Dinámica de Poder / Partidos',
  'Crónica Territorial / Social',
];

interface LocalNotesAndEditorProps {
  selectedDate: string;
  selectedTopic: TopicId;
  activeBrief: DailyBrief;
  briefSource: BriefSourceKind;
  currentNote?: TopicNote;
  onUpdateNote: (text: string) => void;
  isEditorOpen: boolean;
  onSaveCustomEdition: (brief: DailyBrief) => void;
  onResetCustomEdition: (date: string) => void;
}

export function LocalNotesAndEditor({
  selectedDate,
  selectedTopic,
  activeBrief,
  briefSource,
  currentNote,
  onUpdateNote,
  isEditorOpen,
  onSaveCustomEdition,
  onResetCustomEdition,
}: LocalNotesAndEditorProps) {
  const [noteDraft, setNoteDraft] = useState(currentNote?.text ?? '');
  const [editorDraft, setEditorDraft] = useState<DailyBrief>(() =>
    structuredClone(activeBrief),
  );
  const [editorOutletId, setEditorOutletId] = useState<OutletId>('el-pais');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copiedJson, setCopiedJson] = useState(false);

  useEffect(() => {
    setNoteDraft(currentNote?.text ?? '');
  }, [selectedDate, selectedTopic, currentNote?.text]);

  useEffect(() => {
    setEditorDraft(structuredClone(activeBrief));
  }, [activeBrief]);

  const currentTopicDraft: TopicBrief = editorDraft.topics[selectedTopic];
  const currentOutletDraft = currentTopicDraft.outlets[editorOutletId];

  const updateTopicField = <K extends keyof TopicBrief>(
    field: K,
    value: TopicBrief[K],
  ) => {
    setEditorDraft((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [selectedTopic]: {
          ...prev.topics[selectedTopic],
          [field]: value,
        },
      },
    }));
  };

  const updateOutletField = <K extends keyof typeof currentOutletDraft>(
    field: K,
    value: (typeof currentOutletDraft)[K],
  ) => {
    setEditorDraft((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [selectedTopic]: {
          ...prev.topics[selectedTopic],
          outlets: {
            ...prev.topics[selectedTopic].outlets,
            [editorOutletId]: {
              ...prev.topics[selectedTopic].outlets[editorOutletId],
              [field]: value,
            },
          },
        },
      },
    }));
  };

  const handleSaveEditor = () => {
    onSaveCustomEdition({
      ...editorDraft,
      date: selectedDate,
      editionLabel: `Edición personalizada · ${selectedDate}`,
      generatedBy: 'custom-local',
    });
    setStatusMessage('Edición guardada localmente en este navegador.');
    setTimeout(() => setStatusMessage(null), 3500);
  };

  const handleDownloadDailyBriefJson = () => {
    const cleanPayload: DailyBrief = {
      ...editorDraft,
      date: selectedDate,
      editionLabel: editorDraft.editionLabel || `Edición diaria · ${selectedDate}`,
    };
    const blob = new Blob([JSON.stringify(cleanPayload, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'daily-brief.json';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(editorDraft, null, 2));
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2500);
    } catch {
      setStatusMessage('No se pudo acceder al portapapeles; usa la descarga directa.');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
      {/* Cuaderno de lectura crítica por fecha y tema */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <NotebookPen className="w-4 h-4 text-[#1E3A8A]" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-slate-900">
              Notas personales de contraste · {TOPIC_MAP[selectedTopic].label} ({selectedDate})
            </h3>
          </div>
          <span className="text-xs text-slate-500 tabular-nums">
            {currentNote?.updatedAt
              ? `Guardado localmente el ${new Date(currentNote.updatedAt).toLocaleString('es-ES')}`
              : 'Sin notas guardadas para este tema y fecha'}
          </span>
        </div>

        <div className="mt-4">
          <textarea
            value={noteDraft}
            onChange={(e) => {
              const next = e.target.value;
              setNoteDraft(next);
              onUpdateNote(next);
            }}
            rows={3}
            placeholder="Anota aquí datos verificados en el BOE o INE, discrepancias detectadas entre cabeceras o citas clave para tu hemeroteca..."
            aria-label="Notas personales sobre este tema y fecha"
            className="w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
          />
          <p className="mt-2 text-xs text-slate-500">
            Almacenado exclusivamente en tu navegador (localStorage). Puedes exportar todas tus notas desde «Mi hemeroteca».
          </p>
        </div>
      </div>

      {/* Editor Rápido de Edición Diaria Local (opcional y plegable) */}
      {isEditorOpen && (
        <div
          aria-label="Editor rápido de edición diaria local"
          className="bg-white border border-[#E2E8F0] rounded-xl p-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                <FileEdit className="w-4 h-4 text-[#1E3A8A]" aria-hidden="true" />
                <span>Editor rápido de edición diaria local ({selectedDate})</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Adapta titulares, enlaces directos o claves de enfoque de cualquier día y exporta un archivo{' '}
                <code className="px-1 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded text-slate-800">
                  daily-brief.json
                </code>{' '}
                listo para publicar en <code className="text-slate-800">public/daily-brief.json</code>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {briefSource === 'custom' && (
                <button
                  type="button"
                  onClick={() => {
                    onResetCustomEdition(selectedDate);
                    setStatusMessage('Edición restaurada al parte automático.');
                    setTimeout(() => setStatusMessage(null), 3000);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Restaurar automática</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-[#E2E8F0] rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                {copiedJson ? (
                  <Check className="w-3.5 h-3.5 text-[#047857]" aria-hidden="true" />
                ) : (
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                <span>{copiedJson ? 'JSON copiado' : 'Copiar JSON'}</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadDailyBriefJson}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-[#E2E8F0] rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Descargar daily-brief.json</span>
              </button>
              <button
                type="button"
                onClick={handleSaveEditor}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Guardar edición local</span>
              </button>
            </div>
          </div>

          {statusMessage && (
            <p className="mt-3 text-xs font-medium text-[#047857]" role="status">
              {statusMessage}
            </p>
          )}

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-800">
                Datos del tema activo ({TOPIC_MAP[selectedTopic].label})
              </h4>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Titular del dossier temático
                </label>
                <input
                  type="text"
                  value={currentTopicDraft.topicTitle}
                  onChange={(e) => updateTopicField('topicTitle', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Entradilla de contexto
                </label>
                <textarea
                  rows={2}
                  value={currentTopicDraft.contextDeck}
                  onChange={(e) => updateTopicField('contextDeck', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#047857] mb-1">
                  Convergencias factuales (1 por línea, máx. 3)
                </label>
                <textarea
                  rows={3}
                  value={currentTopicDraft.convergences.join('\n')}
                  onChange={(e) => {
                    const lines = e.target.value.split('\n');
                    updateTopicField('convergences', [
                      lines[0] ?? '',
                      lines[1] ?? '',
                      lines[2] ?? '',
                    ]);
                  }}
                  className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#B45309] mb-1">
                  Puntos de divergencia (1 por línea, máx. 3)
                </label>
                <textarea
                  rows={3}
                  value={currentTopicDraft.divergences.join('\n')}
                  onChange={(e) => {
                    const lines = e.target.value.split('\n');
                    updateTopicField('divergences', [
                      lines[0] ?? '',
                      lines[1] ?? '',
                      lines[2] ?? '',
                    ]);
                  }}
                  className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xs font-semibold text-slate-800">
                  Cobertura por cabecera
                </h4>
                <div className="flex flex-wrap gap-1">
                  {OUTLETS.map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setEditorOutletId(o.id)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md border cursor-pointer ${
                        editorOutletId === o.id
                          ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                          : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-white'
                      }`}
                    >
                      {o.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Ángulo principal
                </label>
                <select
                  value={currentOutletDraft.angleType}
                  onChange={(e) =>
                    updateOutletField('angleType', e.target.value as AngleType)
                  }
                  className="w-full px-3 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                >
                  {ANGLE_TYPES.map((angle) => (
                    <option key={angle} value={angle}>
                      {angle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Titular de referencia del medio
                </label>
                <input
                  type="text"
                  value={currentOutletDraft.headline}
                  onChange={(e) => updateOutletField('headline', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Síntesis de perspectiva
                </label>
                <textarea
                  rows={2}
                  value={currentOutletDraft.summary}
                  onChange={(e) => updateOutletField('summary', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Enlace directo a la noticia o sección (opcional)
                </label>
                <input
                  type="url"
                  value={currentOutletDraft.articleUrl ?? ''}
                  onChange={(e) => updateOutletField('articleUrl', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-xs border border-[#E2E8F0] rounded-lg bg-[#F8FAFC] focus:bg-white focus:border-[#1E3A8A] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
