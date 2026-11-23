import {TopicBrief, TopicId} from '../types/press';
import {ECONOMIA_SCENARIOS, POLITICA_SCENARIOS, VIVIENDA_SCENARIOS} from './scenariosPart1';
import {JUSTICIA_SCENARIOS, SOCIEDAD_SCENARIOS} from './scenariosPart2';

export const SCENARIO_BANK: Record<TopicId, TopicBrief[]> = {
  politica: POLITICA_SCENARIOS,
  economia: ECONOMIA_SCENARIOS,
  vivienda: VIVIENDA_SCENARIOS,
  justicia: JUSTICIA_SCENARIOS,
  sociedad: SOCIEDAD_SCENARIOS,
};
