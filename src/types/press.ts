export type OutletId =
  | 'el-pais'
  | 'el-mundo'
  | 'el-debate'
  | 'the-objective'
  | 'eldiario'
  | 'vozpopuli'
  | 'la-razon';

export type TopicId =
  | 'politica'
  | 'economia'
  | 'vivienda'
  | 'justicia'
  | 'sociedad';

export type AngleType =
  | 'Institucional / Gobernanza'
  | 'Confrontación Política'
  | 'Impacto Económico / Fiscal'
  | 'Fiscalización / Investigación'
  | 'Derechos Sociales / Desigualdad'
  | 'Dinámica de Poder / Partidos'
  | 'Crónica Territorial / Social';

export interface OutletMeta {
  id: OutletId;
  name: string;
  shortMark: string;
  accentHex: string;
  typeLabel: string;
  editorialAxis: string;
  homeUrl: string;
  topicUrls: Record<TopicId, string>;
}

export interface TopicMeta {
  id: TopicId;
  label: string;
  shortLabel: string;
  description: string;
}

export interface OutletCoverage {
  outletId: OutletId;
  angleType: AngleType;
  headline: string;
  summary: string;
  emphasizes: [string, string];
  questionsOrNuances: [string, string];
  articleUrl?: string;
}

export interface TopicBrief {
  topicId: TopicId;
  topicTitle: string;
  contextDeck: string;
  primarySources: string[];
  convergences: [string, string, string];
  divergences: [string, string, string];
  criticalQuestions: [string, string];
  outlets: Record<OutletId, OutletCoverage>;
}

export interface DailyBrief {
  date: string; // YYYY-MM-DD
  editionLabel: string;
  generatedBy?: 'remote-json' | 'deterministic-local' | 'custom-local';
  topics: Record<TopicId, TopicBrief>;
}

export type RemoteBriefPayload =
  | DailyBrief
  | {
      editions?: Record<string, DailyBrief>;
      days?: DailyBrief[];
    };

export interface TopicNote {
  text: string;
  updatedAt: string;
}

export interface LocalWorkspaceState {
  version: 1;
  reviewedTopics: Record<string, TopicId[]>;
  consultedOutlets: Record<string, OutletId[]>;
  notes: Record<string, TopicNote>;
  customEditions: Record<string, DailyBrief>;
}

export type BriefSourceKind = 'remote' | 'deterministic' | 'custom';
