import {SCENARIO_BANK} from '../data/scenarios';
import {OUTLETS, TOPICS} from '../data/outlets';
import {
  BriefSourceKind,
  DailyBrief,
  OutletId,
  RemoteBriefPayload,
  TopicBrief,
  TopicId,
} from '../types/press';

export function getTodayISODate(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function shiftISODate(isoDate: string, deltaDays: number): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) {
    return getTodayISODate();
  }
  const dateObj = new Date(Date.UTC(y, m - 1, d + deltaDays));
  const ny = dateObj.getUTCFullYear();
  const nm = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  const nd = String(dateObj.getUTCDate()).padStart(2, '0');
  return `${ny}-${nm}-${nd}`;
}

export function formatSpanishLongDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) {
    return isoDate;
  }
  const dateObj = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(dateObj);
}

export function formatSpanishShortDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) {
    return isoDate;
  }
  const dateObj = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(dateObj);
}

function deterministicHash(seed: string): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function buildDeterministicBrief(isoDate: string): DailyBrief {
  const topics = {} as Record<TopicId, TopicBrief>;
  const compactDate = isoDate.replaceAll('-', '');

  TOPICS.forEach((topic, idx) => {
    const pool = SCENARIO_BANK[topic.id];
    const hash = deterministicHash(`${isoDate}::${topic.id}::${idx}`);
    const chosen = pool[hash % pool.length];
    topics[topic.id] = structuredClone(chosen);
  });

  return {
    date: isoDate,
    editionLabel: `Edición determinista · Folio ${compactDate}`,
    generatedBy: 'deterministic-local',
    topics,
  };
}

function isValidDailyBrief(candidate: unknown): candidate is DailyBrief {
  if (!candidate || typeof candidate !== 'object') {
    return false;
  }
  const obj = candidate as Partial<DailyBrief>;
  if (typeof obj.date !== 'string' || !obj.topics || typeof obj.topics !== 'object') {
    return false;
  }
  return TOPICS.every((t) => {
    const topicObj = (obj.topics as Record<string, unknown>)[t.id] as
      | Partial<TopicBrief>
      | undefined;
    if (!topicObj || typeof topicObj.topicTitle !== 'string' || !topicObj.outlets) {
      return false;
    }
    return OUTLETS.every((o) => {
      const outletObj = (topicObj.outlets as Record<string, unknown>)[o.id] as
        | {headline?: string; summary?: string}
        | undefined;
      return Boolean(outletObj && typeof outletObj.headline === 'string');
    });
  });
}

export async function fetchRemoteDailyBrief(): Promise<Map<string, DailyBrief>> {
  const map = new Map<string, DailyBrief>();
  try {
    const response = await fetch('/daily-brief.json', {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      return map;
    }
    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json') && !contentType.includes('text/plain')) {
      // En algunos entornos SPA sin archivo estático puede devolverse index.html
      const text = await response.text();
      if (text.trim().startsWith('<')) {
        return map;
      }
      const parsed = JSON.parse(text) as RemoteBriefPayload;
      collectRemoteEditions(parsed, map);
      return map;
    }
    const payload = (await response.json()) as RemoteBriefPayload;
    collectRemoteEditions(payload, map);
    return map;
  } catch {
    return map;
  }
}

function collectRemoteEditions(payload: RemoteBriefPayload, map: Map<string, DailyBrief>): void {
  if (isValidDailyBrief(payload)) {
    map.set(payload.date, {
      ...payload,
      generatedBy: 'remote-json',
    });
    return;
  }
  if (payload && typeof payload === 'object') {
    if ('editions' in payload && payload.editions && typeof payload.editions === 'object') {
      Object.values(payload.editions).forEach((entry) => {
        if (isValidDailyBrief(entry)) {
          map.set(entry.date, {
            ...entry,
            generatedBy: 'remote-json',
          });
        }
      });
    }
    if ('days' in payload && Array.isArray(payload.days)) {
      payload.days.forEach((entry) => {
        if (isValidDailyBrief(entry)) {
          map.set(entry.date, {
            ...entry,
            generatedBy: 'remote-json',
          });
        }
      });
    }
  }
}

export function resolveDailyBrief(
  date: string,
  remoteMap: Map<string, DailyBrief>,
  customEditions: Record<string, DailyBrief>,
): {brief: DailyBrief; source: BriefSourceKind} {
  const custom = customEditions[date];
  if (custom && isValidDailyBrief(custom)) {
    return {brief: custom, source: 'custom'};
  }
  const remote = remoteMap.get(date);
  if (remote) {
    return {brief: remote, source: 'remote'};
  }
  return {brief: buildDeterministicBrief(date), source: 'deterministic'};
}

export function getOutletUrlForCoverage(
  outletId: OutletId,
  topicId: TopicId,
  customArticleUrl?: string,
): string {
  if (customArticleUrl && /^https?:\/\//i.test(customArticleUrl.trim())) {
    return customArticleUrl.trim();
  }
  const outlet = OUTLETS.find((o) => o.id === outletId);
  return outlet?.topicUrls[topicId] ?? outlet?.homeUrl ?? '#';
}
