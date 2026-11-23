import {useEffect, useMemo, useState} from 'react';
import {ConvergenceDetector} from './components/ConvergenceDetector';
import {EditorialSeoSection} from './components/EditorialSeoSection';
import {Header} from './components/Header';
import {HemerotecaDrawer} from './components/HemerotecaDrawer';
import {LocalNotesAndEditor} from './components/LocalNotesAndEditor';
import {MediaNetSlot} from './components/MediaNetSlot';
import {OutletComparisonView} from './components/OutletComparisonView';
import {
  ComparisonViewMode,
  TopicComparatorToolbar,
} from './components/TopicComparatorToolbar';
import {OUTLETS, TOPICS} from './data/outlets';
import {
  fetchRemoteDailyBrief,
  getTodayISODate,
  resolveDailyBrief,
} from './engine/dailyBrief';
import {DailyBrief, LocalWorkspaceState, OutletId, TopicId} from './types/press';
import {
  DEFAULT_WORKSPACE_STATE,
  loadWorkspaceState,
  makeNoteKey,
  removeCustomEdition,
  saveCustomEdition,
  saveWorkspaceState,
  toggleOutletConsulted,
  toggleTopicReviewed,
  updateTopicNote,
} from './utils/storage';

const ALL_OUTLET_IDS: OutletId[] = OUTLETS.map((o) => o.id);

export default function App() {
  const [selectedDate, setSelectedDate] = useState<string>(() => getTodayISODate());
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('politica');
  const [activeOutlets, setActiveOutlets] = useState<OutletId[]>(ALL_OUTLET_IDS);
  const [viewMode, setViewMode] = useState<ComparisonViewMode>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [isHemerotecaOpen, setIsHemerotecaOpen] = useState<boolean>(false);

  const [remoteEditions, setRemoteEditions] = useState<Map<string, DailyBrief>>(
    () => new Map(),
  );
  const [workspace, setWorkspace] = useState<LocalWorkspaceState>(() =>
    loadWorkspaceState(),
  );

  // Carga inicial desde /daily-brief.json sin caché con respaldo transparente al motor determinista
  useEffect(() => {
    let active = true;
    fetchRemoteDailyBrief().then((map) => {
      if (active && map.size > 0) {
        setRemoteEditions(map);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    saveWorkspaceState(workspace);
  }, [workspace]);

  const {brief: activeBrief, source: briefSource} = useMemo(
    () =>
      resolveDailyBrief(selectedDate, remoteEditions, workspace.customEditions),
    [selectedDate, remoteEditions, workspace.customEditions],
  );

  const activeTopicBrief = activeBrief.topics[selectedTopic];
  const reviewedTopicsForDate = workspace.reviewedTopics[selectedDate] ?? [];
  const isCurrentTopicReviewed = reviewedTopicsForDate.includes(selectedTopic);

  const consultedOutletsForTopic =
    workspace.consultedOutlets[makeNoteKey(selectedDate, selectedTopic)] ?? [];
  const currentNote = workspace.notes[makeNoteKey(selectedDate, selectedTopic)];

  const handleToggleOutlet = (outletId: OutletId) => {
    setActiveOutlets((prev) => {
      if (prev.includes(outletId)) {
        // Mantiene al menos 1 cabecera activa para evitar vistas vacías accidentales
        if (prev.length === 1) {
          return prev;
        }
        return prev.filter((id) => id !== outletId);
      }
      return [...prev, outletId];
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <Header
        reviewedCountToday={reviewedTopicsForDate.length}
        totalTopics={TOPICS.length}
        onOpenHemeroteca={() => setIsHemerotecaOpen(true)}
      />

      <main className="flex-1">
        <TopicComparatorToolbar
          selectedDate={selectedDate}
          onChangeDate={(nextDate) => setSelectedDate(nextDate)}
          selectedTopic={selectedTopic}
          onChangeTopic={(nextTopic) => setSelectedTopic(nextTopic)}
          activeOutlets={activeOutlets}
          onToggleOutlet={handleToggleOutlet}
          onSelectAllOutlets={() => setActiveOutlets(ALL_OUTLET_IDS)}
          viewMode={viewMode}
          onChangeViewMode={setViewMode}
          searchQuery={searchQuery}
          onChangeSearchQuery={setSearchQuery}
          reviewedTopicsForDate={reviewedTopicsForDate}
          briefSource={briefSource}
          editionLabel={activeBrief.editionLabel}
          isEditorOpen={isEditorOpen}
          onToggleEditor={() => setIsEditorOpen((prev) => !prev)}
        />

        <ConvergenceDetector
          topicBrief={activeTopicBrief}
          isReviewed={isCurrentTopicReviewed}
          consultedCount={consultedOutletsForTopic.length}
          activeOutletCount={activeOutlets.length}
          onToggleReviewed={() =>
            setWorkspace((prev) =>
              toggleTopicReviewed(prev, selectedDate, selectedTopic),
            )
          }
        />

        <OutletComparisonView
          topicBrief={activeTopicBrief}
          activeOutlets={activeOutlets}
          consultedOutlets={consultedOutletsForTopic}
          onToggleConsulted={(outletId) =>
            setWorkspace((prev) =>
              toggleOutletConsulted(prev, selectedDate, selectedTopic, outletId),
            )
          }
          viewMode={viewMode}
          searchQuery={searchQuery}
        />

        <LocalNotesAndEditor
          selectedDate={selectedDate}
          selectedTopic={selectedTopic}
          activeBrief={activeBrief}
          briefSource={briefSource}
          currentNote={currentNote}
          onUpdateNote={(text) =>
            setWorkspace((prev) =>
              updateTopicNote(prev, selectedDate, selectedTopic, text),
            )
          }
          isEditorOpen={isEditorOpen}
          onSaveCustomEdition={(brief) =>
            setWorkspace((prev) => saveCustomEdition(prev, brief))
          }
          onResetCustomEdition={(date) =>
            setWorkspace((prev) => removeCustomEdition(prev, date))
          }
        />

        {/* Primer bloque publicitario Media.net: entre el comparador/notas y la sección editorial SEO */}
        <MediaNetSlot
          slotId="medianet-slot-comparador"
          placementLabel="Bloque superior editorial"
        />

        <EditorialSeoSection />

        {/* Segundo bloque publicitario Media.net: al final de la página */}
        <MediaNetSlot
          slotId="medianet-slot-pie"
          placementLabel="Bloque inferior de lectura"
        />
      </main>

      <HemerotecaDrawer
        isOpen={isHemerotecaOpen}
        onClose={() => setIsHemerotecaOpen(false)}
        selectedDate={selectedDate}
        workspace={workspace}
        onImportWorkspace={(nextState) => setWorkspace(nextState)}
        onResetWorkspace={() => setWorkspace(DEFAULT_WORKSPACE_STATE)}
        onJumpToEntry={(date, topicId) => {
          setSelectedDate(date);
          setSelectedTopic(topicId);
        }}
      />
    </div>
  );
}
