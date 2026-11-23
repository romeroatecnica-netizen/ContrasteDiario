import {OutletId, OutletMeta, TopicId, TopicMeta} from '../types/press';

export const OUTLETS: OutletMeta[] = [
  {
    id: 'el-pais',
    name: 'El País',
    shortMark: 'EP',
    accentHex: '#1E3A8A',
    typeLabel: 'Generalista nacional',
    editorialAxis: 'Marco institucional, europeísmo y políticas públicas',
    homeUrl: 'https://elpais.com',
    topicUrls: {
      politica: 'https://elpais.com/espana/',
      economia: 'https://elpais.com/economia/',
      vivienda: 'https://elpais.com/economia/vivienda/',
      justicia: 'https://elpais.com/espana/tribunales/',
      sociedad: 'https://elpais.com/sociedad/',
    },
  },
  {
    id: 'el-mundo',
    name: 'El Mundo',
    shortMark: 'EM',
    accentHex: '#0F4C81',
    typeLabel: 'Generalista nacional',
    editorialAxis: 'Fiscalización del Ejecutivo, debate parlamentario e investigación',
    homeUrl: 'https://www.elmundo.es',
    topicUrls: {
      politica: 'https://www.elmundo.es/espana.html',
      economia: 'https://www.elmundo.es/economia.html',
      vivienda: 'https://www.elmundo.es/economia/vivienda.html',
      justicia: 'https://www.elmundo.es/espana.html',
      sociedad: 'https://www.elmundo.es/ciencia-y-salud.html',
    },
  },
  {
    id: 'el-debate',
    name: 'El Debate',
    shortMark: 'ED',
    accentHex: '#7C2D12',
    typeLabel: 'Digital nacional',
    editorialAxis: 'Arquitectura constitucional, unidad territorial y crítica de gestión',
    homeUrl: 'https://www.eldebate.com',
    topicUrls: {
      politica: 'https://www.eldebate.com/espana/',
      economia: 'https://www.eldebate.com/economia/',
      vivienda: 'https://www.eldebate.com/economia/',
      justicia: 'https://www.eldebate.com/espana/tribunales/',
      sociedad: 'https://www.eldebate.com/sociedad/',
    },
  },
  {
    id: 'the-objective',
    name: 'The Objective',
    shortMark: 'TO',
    accentHex: '#1E293B',
    typeLabel: 'Digital de análisis e investigación',
    editorialAxis: 'Exclusivas de trastienda política, contratación y control del poder',
    homeUrl: 'https://theobjective.com',
    topicUrls: {
      politica: 'https://theobjective.com/espana/',
      economia: 'https://theobjective.com/economia/',
      vivienda: 'https://theobjective.com/economia/',
      justicia: 'https://theobjective.com/espana/tribunales/',
      sociedad: 'https://theobjective.com/sanidad/',
    },
  },
  {
    id: 'eldiario',
    name: 'elDiario.es',
    shortMark: 'eD',
    accentHex: '#047857',
    typeLabel: 'Digital progresista y de datos',
    editorialAxis: 'Derechos sociales, servicios públicos y rendición de cuentas',
    homeUrl: 'https://www.eldiario.es',
    topicUrls: {
      politica: 'https://www.eldiario.es/politica/',
      economia: 'https://www.eldiario.es/economia/',
      vivienda: 'https://www.eldiario.es/economia/vivienda/',
      justicia: 'https://www.eldiario.es/politica/tribunales/',
      sociedad: 'https://www.eldiario.es/sociedad/',
    },
  },
  {
    id: 'vozpopuli',
    name: 'Vozpópuli',
    shortMark: 'VP',
    accentHex: '#B45309',
    typeLabel: 'Digital económico y político',
    editorialAxis: 'Impacto empresarial, fiscalidad, reguladores y poder económico',
    homeUrl: 'https://www.vozpopuli.com',
    topicUrls: {
      politica: 'https://www.vozpopuli.com/espana/',
      economia: 'https://www.vozpopuli.com/economia_y_finanzas/',
      vivienda: 'https://www.vozpopuli.com/economia_y_finanzas/',
      justicia: 'https://www.vozpopuli.com/espana/',
      sociedad: 'https://www.vozpopuli.com/sanidad/',
    },
  },
  {
    id: 'la-razon',
    name: 'La Razón',
    shortMark: 'LR',
    accentHex: '#334155',
    typeLabel: 'Generalista nacional',
    editorialAxis: 'Crónica parlamentaria, cohesión autonómica y equilibrio institucional',
    homeUrl: 'https://www.larazon.es',
    topicUrls: {
      politica: 'https://www.larazon.es/espana/',
      economia: 'https://www.larazon.es/economia/',
      vivienda: 'https://www.larazon.es/economia/',
      justicia: 'https://www.larazon.es/espana/',
      sociedad: 'https://www.larazon.es/sociedad/',
    },
  },
];

export const OUTLET_MAP: Record<OutletId, OutletMeta> = OUTLETS.reduce(
  (acc, outlet) => {
    acc[outlet.id] = outlet;
    return acc;
  },
  {} as Record<OutletId, OutletMeta>,
);

export const TOPICS: TopicMeta[] = [
  {
    id: 'politica',
    label: 'Política y Gobierno',
    shortLabel: 'Política',
    description: 'Congreso, acuerdos presupuestarios, comunidades autónomas y acción del Ejecutivo.',
  },
  {
    id: 'economia',
    label: 'Economía, Empleo e Impuestos',
    shortLabel: 'Economía',
    description: 'Fiscalidad, crecimiento, mercado laboral, pensiones y cuentas públicas.',
  },
  {
    id: 'vivienda',
    label: 'Vivienda y Territorio',
    shortLabel: 'Vivienda',
    description: 'Mercado del alquiler, oferta de suelo, movilidad ferroviaria y cohesión territorial.',
  },
  {
    id: 'justicia',
    label: 'Justicia, Instituciones y Transparencia',
    shortLabel: 'Justicia',
    description: 'Órganos judiciales, control parlamentario, contratación pública y calidad democrática.',
  },
  {
    id: 'sociedad',
    label: 'Sociedad, Sanidad y Energía',
    shortLabel: 'Sociedad',
    description: 'Sistema sanitario, transición energética, educación y retos demográficos.',
  },
];

export const TOPIC_MAP: Record<TopicId, TopicMeta> = TOPICS.reduce(
  (acc, topic) => {
    acc[topic.id] = topic;
    return acc;
  },
  {} as Record<TopicId, TopicMeta>,
);
