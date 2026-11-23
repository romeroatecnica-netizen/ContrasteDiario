import {DailyBrief, LocalWorkspaceState, OutletId, TopicId} from '../types/press';

const STORAGE_KEY = 'contrastediario_workspace_v1';

export const DEFAULT_WORKSPACE_STATE: LocalWorkspaceState = {
  version: 1,
  reviewedTopics: {},
  consultedOutlets: {},
  notes: {},
  customEditions: {},
};

export function loadWorkspaceState(): LocalWorkspaceState {
  if (typeof window === 'undefined') {
    return DEFAULT_WORKSPACE_STATE;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return DEFAULT_WORKSPACE_STATE;
    }
    const parsed = JSON.parse(raw) as Partial<LocalWorkspaceState>;
    if (!parsed || typeof parsed !== 'object') {
      return DEFAULT_WORKSPACE_STATE;
    }
    return {
      version: 1,
      reviewedTopics:
        parsed.reviewedTopics && typeof parsed.reviewedTopics === 'object'
          ? parsed.reviewedTopics
          : {},
      consultedOutlets:
        parsed.consultedOutlets && typeof parsed.consultedOutlets === 'object'
          ? parsed.consultedOutlets
          : {},
      notes: parsed.notes && typeof parsed.notes === 'object' ? parsed.notes : {},
      customEditions:
        parsed.customEditions && typeof parsed.customEditions === 'object'
          ? parsed.customEditions
          : {},
    };
  } catch {
    return DEFAULT_WORKSPACE_STATE;
  }
}

export function saveWorkspaceState(state: LocalWorkspaceState): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Silencioso si el navegador restringe almacenamiento local en modo privado estricto
  }
}

export function makeNoteKey(date: string, topicId: TopicId): string {
  return `${date}::${topicId}`;
}

export function toggleTopicReviewed(
  state: LocalWorkspaceState,
  date: string,
  topicId: TopicId,
): LocalWorkspaceState {
  const current = state.reviewedTopics[date] ?? [];
  const exists = current.includes(topicId);
  const nextForDate = exists
    ? current.filter((item) => item !== topicId)
    : [...current, topicId];

  return {
    ...state,
    reviewedTopics: {
      ...state.reviewedTopics,
      [date]: nextForDate,
    },
  };
}

export function toggleOutletConsulted(
  state: LocalWorkspaceState,
  date: string,
  topicId: TopicId,
  outletId: OutletId,
): LocalWorkspaceState {
  const key = makeNoteKey(date, topicId);
  const current = state.consultedOutlets[key] ?? [];
  const exists = current.includes(outletId);
  const nextList = exists
    ? current.filter((item) => item !== outletId)
    : [...current, outletId];

  return {
    ...state,
    consultedOutlets: {
      ...state.consultedOutlets,
      [key]: nextList,
    },
  };
}

export function updateTopicNote(
  state: LocalWorkspaceState,
  date: string,
  topicId: TopicId,
  text: string,
): LocalWorkspaceState {
  const key = makeNoteKey(date, topicId);
  const nextNotes = {...state.notes};
  if (text.trim() === '') {
    delete nextNotes[key];
  } else {
    nextNotes[key] = {
      text,
      updatedAt: new Date().toISOString(),
    };
  }
  return {
    ...state,
    notes: nextNotes,
  };
}

export function saveCustomEdition(
  state: LocalWorkspaceState,
  brief: DailyBrief,
): LocalWorkspaceState {
  return {
    ...state,
    customEditions: {
      ...state.customEditions,
      [brief.date]: {
        ...brief,
        generatedBy: 'custom-local',
      },
    },
  };
}

export function removeCustomEdition(
  state: LocalWorkspaceState,
  date: string,
): LocalWorkspaceState {
  const nextEditions = {...state.customEditions};
  delete nextEditions[date];
  return {
    ...state,
    customEditions: nextEditions,
  };
}

export function validateImportedWorkspace(raw: unknown): LocalWorkspaceState | null {
  if (!raw || typeof raw !== 'object') {
    return null;
  }
  const obj = raw as Record<string, unknown>;
  if (
    typeof obj.reviewedTopics !== 'object' ||
    typeof obj.consultedOutlets !== 'object' ||
    typeof obj.notes !== 'object'
  ) {
    return null;
  }
  return {
    version: 1,
    reviewedTopics: (obj.reviewedTopics ?? {}) as Record<string, TopicId[]>,
    consultedOutlets: (obj.consultedOutlets ?? {}) as Record<string, OutletId[]>,
    notes: (obj.notes ?? {}) as Record<string, {text: string; updatedAt: string}>,
    customEditions: (obj.customEditions ?? {}) as Record<string, DailyBrief>,
  };
}
