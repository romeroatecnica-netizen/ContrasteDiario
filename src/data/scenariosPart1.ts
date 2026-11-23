import {TopicBrief} from '../types/press';

export const POLITICA_SCENARIOS: TopicBrief[] = [
  {
    topicId: 'politica',
    topicTitle: 'Negociación de los Presupuestos Generales y aritmética parlamentaria',
    contextDeck:
      'El Congreso abre una nueva ronda de contactos para fijar la senda de estabilidad y asegurar apoyos antes de tramitar las cuentas públicas del próximo ejercicio.',
    primarySources: [
      'Boletín Oficial de las Cortes Generales',
      'Ministerio de Hacienda (Senda de Estabilidad)',
      'Informes de la AIReF sobre regla de gasto',
    ],
    convergences: [
      'Todas las cabeceras confirman que la votación de la senda de déficit condiciona el calendario completo de los Presupuestos Generales del Estado.',
      'Coinciden en que las demandas de financiación autonómica y las inversiones territoriales centran los intercambios entre el Ejecutivo y los grupos parlamentarios.',
      'Recogen los mismos límites de déficit y deuda marcados por las reglas fiscales europeas vigentes.',
    ],
    divergences: [
      'Un bloque editorial enfatiza la estabilidad institucional y la necesidad de aprobar cuentas para ejecutar fondos europeos, mientras otro subraya el coste político de las cesiones a socios minoritarios.',
      'Difieren al valorar si una eventual prórroga presupuestaria bloquea la acción de gobierno o limita únicamente nuevas partidas discrecionales.',
      'Varía el foco sobre quién asume el desgaste electoral en caso de bloqueo: el Ejecutivo por falta de mayoría estable o la oposición por rechazo frontal.',
    ],
    criticalQuestions: [
      '¿Qué porcentaje real del presupuesto queda afectado si se prorrogan las cuentas frente a las partidas ya comprometidas por ley?',
      '¿Coinciden los compromisos anunciados en rueda de prensa con los textos registrados formalmente en el Congreso?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'El Gobierno busca blindar la senda fiscal para dar certidumbre a los Presupuestos y cumplir con Bruselas',
        summary:
          'Sitúa en primer plano la continuidad de la agenda reformista y la exigencia de ofrecer previsibilidad macroeconómica ante la Comisión Europea.',
        emphasizes: [
          'Margen de diálogo con los socios habituales para evitar un bloqueo prolongado.',
          'Impacto de unas cuentas actualizadas en gasto social e inversión pública.',
        ],
        questionsOrNuances: [
          'Matiza las tensiones internas entre socios priorizando la estabilidad de la legislatura.',
          'Plantea si el principal partido de la oposición ofrecerá una alternativa presupuestaria detallada.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Dinámica de Poder / Partidos',
        headline: 'La debilidad aritmética en el Congreso encarece cada voto y amenaza con una nueva prórroga presupuestaria',
        summary:
          'Pone el acento en la fragmentación parlamentaria y en el poder de veto que adquieren las formaciones territoriales en cada votación clave.',
        emphasizes: [
          'Exigencias cruzadas de distintos grupos que dificultan cerrar un texto único.',
          'Riesgo de parálisis legislativa si no se consolida una mayoría estable.',
        ],
        questionsOrNuances: [
          'Cuestiona la viabilidad de gobernar mediante decretos y prórrogas sucesivas.',
          'Destaca las fricciones entre compromisos territoriales y equilibrio financiero.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Confrontación Política',
        headline: 'El pulso territorial condiciona las cuentas del Estado y reabre el debate sobre la igualdad entre comunidades',
        summary:
          'Enfoca la negociación desde la cohesión nacional y el principio de solidaridad interterritorial en el reparto de recursos públicos.',
        emphasizes: [
          'Impacto de posibles acuerdos bilaterales sobre el sistema común de financiación.',
          'Críticas de presidentes autonómicos y sectores institucionales al formato de las negociaciones.',
        ],
        questionsOrNuances: [
          'Subraya el contraste entre el discurso oficial de diálogo y las concesiones pactadas fuera del pleno.',
          'Reclama transparencia íntegra sobre las contrapartidas presupuestarias.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los contactos reservados de Hacienda revelan líneas rojas incompatibles entre los socios de investidura',
        summary:
          'Analiza la trastienda de las negociaciones, detallando las reuniones discretas entre portavoces y las partidas exigidas por cada grupo.',
        emphasizes: [
          'Diferencias técnicas entre lo prometido políticamente y los márgenes reales del Tesoro.',
          'Malestar en segundas líneas de los ministerios ante la falta de calendario cerrado.',
        ],
        questionsOrNuances: [
          'Pregunta qué partidas previstas en borradores previos han sido descartadas en la mesa de negociación.',
          'Contrasta las cifras de ejecución presupuestaria de ejercicios anteriores.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La batalla presupuestaria se decide entre reforzar servicios públicos y mantener incentivos fiscales',
        summary:
          'Orienta el foco hacia qué capítulos sociales, educativos y de dependencia dependen de la aprobación de nuevas cuentas.',
        emphasizes: [
          'Propuestas para sostener la financiación de sanidad, educación y escudo social.',
          'Presión de los grupos a la izquierda del Ejecutivo para introducir medidas fiscales progresivas.',
        ],
        questionsOrNuances: [
          'Advierte de que las reglas fiscales europeas pueden restringir el margen inversor si no se amplían ingresos.',
          'Evalúa el impacto distributivo de cada enmienda negociada.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Empresas y analistas siguen de cerca el cuadro fiscal ante posibles ajustes impositivos en la negociación',
        summary:
          'Examina la senda presupuestaria desde la óptica de la seguridad jurídica, la carga tributaria empresarial y los objetivos de déficit.',
        emphasizes: [
          'Posibles cambios en figuras tributarias para cuadrar el techo de gasto.',
          'Advertencias de organismos independientes sobre la credibilidad de las previsiones de ingresos.',
        ],
        questionsOrNuances: [
          'Pregunta si el crecimiento recaudatorio bastará para sostener el aumento del gasto comprometido.',
          'Analiza la reacción de los mercados de deuda ante la incertidumbre parlamentaria.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'La oposición exige claridad sobre el techo de gasto mientras las autonomías reclaman un consejo de política fiscal',
        summary:
          'Prioriza la crónica parlamentaria y el papel del Senado y las comunidades autónomas como contrapeso institucional en el debate.',
        emphasizes: [
          'Estrategia conjunta de los gobiernos autonómicos frente al reparto de objetivos de déficit.',
          'Demanda de convocatoria formal del Consejo de Política Fiscal y Financiera.',
        ],
        questionsOrNuances: [
          'Destaca las tensiones en la agenda legislativa ante la cercanía de citas electorales autonómicas.',
          'Pone en valor el papel fiscalizador del Senado en la tramitación.',
        ],
      },
    },
  },
  {
    topicId: 'politica',
    topicTitle: 'Reforma del modelo de financiación autonómica y bilateralidad',
    contextDeck:
      'El debate sobre la actualización del sistema de financiación de régimen común vuelve a enfrentar a las comunidades por los criterios de población ajustada y corresponsabilidad fiscal.',
    primarySources: [
      'Consejo de Política Fiscal y Financiera (CPFF)',
      'Informes de FEDEA sobre financiación autonómica',
      'Ministerio de Hacienda — Liquidación del sistema',
    ],
    convergences: [
      'Todos los diarios recuerdan que el modelo vigente lleva más de una década pendiente de renovación formal.',
      'Coinciden en que existen diferencias sustanciales entre territorios sobre el peso de la población ajustada, la dispersión y el envejecimiento.',
      'Recogen el rechazo de varias comunidades de régimen común a soluciones exclusivas que alteren la caja común.',
    ],
    divergences: [
      'Discrepan sobre si el reconocimiento de singularidades territoriales es compatible con la solidaridad interterritorial.',
      'Unos medios interpretan la propuesta como descentralización federal avanzada y otros como ruptura de la igualdad fiscal.',
      'Difieren en cuánto margen real tiene el Estado central para aportar recursos adicionales sin subir impuestos.',
    ],
    criticalQuestions: [
      '¿Cómo varía la financiación por habitante ajustado de cada comunidad según las liquidaciones oficiales de Hacienda?',
      '¿Qué papel juega la corresponsabilidad fiscal propia de las autonomías frente a las transferencias estatales?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'Hacienda abre la vía multilateral para actualizar un modelo de financiación caducado desde hace una década',
        summary:
          'Destaca la búsqueda de consenso técnico entre comunidades para compatibilizar cohesión territorial y autonomía financiera.',
        emphasizes: [
          'Necesidad de inyectar certidumbre financiera a servicios gestionados por las regiones.',
          'Voluntad declarada de llevar cualquier reforma al marco del CPFF.',
        ],
        questionsOrNuances: [
          'Señala la dificultad histórica de alinear intereses entre comunidades receptoras y aportadoras netas.',
          'Apunta a la necesidad de grandes pactos de Estado para aprobar una ley orgánica.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'El choque entre comunidades bloquea el diseño de la financiación y abre fisuras incluso dentro de los partidos',
        summary:
          'Subraya las contradicciones internas que el debate territorial genera tanto en el bloque gubernamental como entre barones regionales.',
        emphasizes: [
          'Malestar de territorios históricamente infrafinanciados ante cualquier trato preferente.',
          'Cruces de declaraciones entre presidentes autonómicos de distinto signo.',
        ],
        questionsOrNuances: [
          'Cuestiona si existe una propuesta numérica cerrada o solo borradores políticos.',
          'Recuerda los compromisos previos incumplidos por distintos ejecutivos.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'Juristas y economistas alertan del impacto constitucional de alterar el régimen común de financiación',
        summary:
          'Centra la cobertura en los límites constitucionales y estatutarios de la autonomía financiera y la solidaridad entre españoles.',
        emphasizes: [
          'Defensa de la caja única como garantía de igualdad de acceso a servicios básicos.',
          'Posibles recursos ante el Tribunal Constitucional si se quiebra la multilateralidad.',
        ],
        questionsOrNuances: [
          'Exige que no se utilice la Hacienda pública como moneda de cambio parlamentaria.',
          'Pone el acento en la transparencia de las balanzas fiscales.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los informes técnicos de Hacienda cuantifican el agujero que dejaría una cesión tributaria sin compensación',
        summary:
          'Aporta datos de técnicos del ministerio y simulaciones internas sobre el coste recaudatorio de distintos escenarios.',
        emphasizes: [
          'Cifras de recaudación cedida y dependencia financiera del Estado central.',
          'Reparos expresados por cuerpos de inspectores e interventores.',
        ],
        questionsOrNuances: [
          'Pregunta quién cubriría la merma de recursos en el fondo de garantía de servicios públicos.',
          'Contrasta las cifras de deuda autonómica acumulada con el Fondo de Liquidez Autonómica.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La reforma pendiente de la financiación autonómica decide el futuro de la sanidad y la educación públicas',
        summary:
          'Enlaza el debate técnico de transferencias con el mantenimiento de plantillas sanitarias, docentes y dependencia en cada región.',
        emphasizes: [
          'Crítica a las rebajas fiscales autonómicas mientras se reclaman más recursos al Estado.',
          'Desigualdades en inversión social por habitante entre territorios.',
        ],
        questionsOrNuances: [
          'Plantea fijar un suelo mínimo de tributación autonómica para evitar competencia fiscal a la baja.',
          'Analiza qué comunidades sufren mayor infradotación real según criterios demográficos.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La incertidumbre sobre la financiación y la quita de deuda autonómica preocupa a agencias y contribuyentes',
        summary:
          'Pone el foco en la disciplina fiscal, las agencias de calificación crediticia y la posible mutualización de deuda regional.',
        emphasizes: [
          'Riesgo moral de condonar deuda sin exigir reformas de eficiencia del gasto.',
          'Efecto sobre el diferencial fiscal entre Madrid, Cataluña y el resto de comunidades.',
        ],
        questionsOrNuances: [
          'Cuestiona de dónde saldrán los fondos para compensar a las comunidades menos favorecidas.',
          'Evalúa la sostenibilidad del gasto público consolidado.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las autonomías reclaman un frente común en defensa de la multilateralidad y la suficiencia financiera',
        summary:
          'Recoge las posiciones de las consejerías de Hacienda regionales y la demanda de abordar la reforma con luz y taquígrafos.',
        emphasizes: [
          'Papel coordinador de las comunidades gobernadas por la oposición.',
          'Demanda de incluir criterios de despoblación y envejecimiento en el reparto.',
        ],
        questionsOrNuances: [
          'Señala la ausencia de un calendario vinculante para aprobar el nuevo sistema.',
          'Destaca el consenso entre técnicos regionales sobre la urgencia de reformar el modelo.',
        ],
      },
    },
  },
  {
    topicId: 'politica',
    topicTitle: 'Control parlamentario, comisiones de investigación y agenda legislativa',
    contextDeck:
      'La actividad en el Congreso y el Senado se intensifica con comparecencias cruzadas y el debate sobre el ritmo de aprobación de leyes orgánicas.',
    primarySources: [
      'Diario de Sesiones del Congreso de los Diputados',
      'Boletín Oficial del Senado',
      'Registro de iniciativas legislativas de las Cortes',
    ],
    convergences: [
      'Todos los medios consignan la elevada polarización en las sesiones de control y el uso simultáneo de comisiones en Congreso y Senado.',
      'Coinciden en el bajo número de proyectos de ley aprobados definitivamente frente al volumen de proposiciones no de ley.',
      'Recogen los llamamientos institucionales de distintas bancadas a rebajar el tono del debate parlamentario.',
    ],
    divergences: [
      'Difieren en quién instrumentaliza en mayor medida las comisiones de investigación con fines partidistas.',
      'Varía la interpretación sobre la legitimidad del uso frecuente del real decreto-ley frente a la tramitación ordinaria.',
      'Unos destacan las iniciativas sociales aprobadas y otros la falta de consenso transversal en leyes estructurales.',
    ],
    criticalQuestions: [
      '¿Cuántos decretos-leyes se han convalidado este año frente a proyectos de ley tramitados por procedimiento ordinario?',
      '¿Qué dictámenes concretos han emitido las comisiones de investigación más allá de las comparecencias televisadas?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'El Congreso acelera la agenda legislativa pese a la crispación y a la ofensiva parlamentaria en el Senado',
        summary:
          'Destaca los acuerdos alcanzados en comisión para sacar adelante normas pendientes y critica el bloqueo en la Cámara Alta.',
        emphasizes: [
          'Transposición de directivas europeas y leyes de derechos civiles en trámite.',
          'Llamamiento a preservar el respeto institucional en los plenos.',
        ],
        questionsOrNuances: [
          'Reconoce la fragilidad de las votaciones ajustadas en asuntos clave.',
          'Analiza el desgaste que produce la confrontación continua en la percepción ciudadana.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'Las comisiones de investigación eclipsan el trabajo legislativo y convierten las Cámaras en un pulso diario',
        summary:
          'Retrata un Parlamento hiperpolitizado donde el control al Ejecutivo y las comparecencias desplazan el debate de fondo.',
        emphasizes: [
          'Interrogatorios más tensos y contradicciones en las versiones de altos cargos.',
          'Escaso porcentaje de leyes aprobadas con mayoría amplia.',
        ],
        questionsOrNuances: [
          'Pregunta por la utilidad real de comisiones sin conclusiones vinculantes.',
          'Subraya el abuso del trámite de urgencia para limitar enmiendas.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'La oposición denuncia el abuso de los decretos-leyes y el recorte de los debates parlamentarios',
        summary:
          'Pone el acento en la calidad del procedimiento legislativo y el respeto a los informes preceptivos del Consejo de Estado y órganos consultivos.',
        emphasizes: [
          'Reparos jurídicos por tramitar reformas de calado como proposiciones de ley sin informes.',
          'Defensa de las prerrogativas constitucionales del Senado.',
        ],
        questionsOrNuances: [
          'Cuestiona si la urgencia invocada en los decretos responde a criterios constitucionales.',
          'Reclama mayor seguridad jurídica en la redacción de las normas.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'El calendario de comparecencias destapa ausencias y cruces de competencias entre ministerios',
        summary:
          'Sigue al detalle las citaciones, documentos solicitados por los grupos y respuestas por escrito del Gobierno en el Portal de Transparencia y Cortes.',
        emphasizes: [
          'Contratos y expedientes requeridos por las comisiones que aún no han sido entregados.',
          'Inconsistencias temporales en declaraciones parlamentarias.',
        ],
        questionsOrNuances: [
          'Señala qué preguntas escritas permanecen sin respuesta detallada tras vencer el plazo reglamentario.',
          'Analiza las estrategias de comunicación de cada portavoz.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Dinámica de Poder / Partidos',
        headline: 'La mayoría parlamentaria salva votaciones clave frente al bloqueo estratégico de la derecha en el Senado',
        summary:
          'Explica las alianzas en el Congreso para sacar adelante medidas laborales y sociales pese a los vetos de la Cámara Alta.',
        emphasizes: [
          'Acuerdos de última hora entre partidos progresistas y nacionalistas.',
          'Crítica al uso de la mayoría absoluta en el Senado para dilatar leyes aprobadas en el Congreso.',
        ],
        questionsOrNuances: [
          'Reconoce tensiones internas dentro de la coalición sobre ritmo y alcance de algunas leyes.',
          'Pide mayor pedagogía parlamentaria para explicar medidas aprobadas.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La inseguridad sobre enmiendas de última hora en el Congreso frena decisiones de inversión en sectores regulados',
        summary:
          'Evalúa el impacto empresarial de aprobar cambios fiscales o regulatorios mediante enmiendas transaccionales nocturnas.',
        emphasizes: [
          'Preocupación en banca, energía y telecomunicaciones por la volatilidad normativa.',
          'Coste de adaptar sistemas empresariales a normas modificadas en pleno trámite.',
        ],
        questionsOrNuances: [
          'Pregunta si la falta de consenso estable afecta a la prima de riesgo regulatoria de España.',
          'Reclama evaluaciones de impacto económico previas a cada enmienda.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Sesiones de alto voltaje en el hemiciclo mientras los grupos buscan marcar perfil de cara al próximo ciclo electoral',
        summary:
          'Ofrece una crónica parlamentaria centrada en la estrategia de los líderes nacionales y el equilibrio de fuerzas en los grupos.',
        emphasizes: [
          'Mensajes clave de los líderes durante las sesiones de control de los miércoles.',
          'Movimientos tácticos de los partidos bisagra para ganar visibilidad territorial.',
        ],
        questionsOrNuances: [
          'Observa el agotamiento de la ciudadanía ante los reproches recurrentes en el hemiciclo.',
          'Evalúa qué temas logran conectar con las preocupaciones cotidianas fuera del Congreso.',
        ],
      },
    },
  },
  {
    topicId: 'politica',
    topicTitle: 'Política exterior, relación con la Unión Europea y gestión de fronteras',
    contextDeck:
      'España participa en las cumbres europeas sobre autonomía estratégica, defensa y pacto migratorio con impacto directo en la política interior.',
    primarySources: [
      'Consejo Europeo — Conclusiones oficiales',
      'Ministerio de Asuntos Exteriores, Unión Europea y Cooperación',
      'Agencia Europea de la Guardia de Fronteras (Frontex)',
    ],
    convergences: [
      'Todas las cabeceras sitúan la coordinación con Bruselas y el respaldo financiero europeo como ejes clave para la gestión fronteriza.',
      'Coinciden en que la presión migratoria en las rutas atlántica y mediterránea exige soluciones compartidas entre el Estado, autonomías y UE.',
      'Recogen el compromiso de España con los objetivos comunitarios de seguridad y competitividad industrial.',
    ],
    divergences: [
      'Discrepan en la evaluación de la eficacia de la política exterior bilateral en el norte de África y Latinoamérica.',
      'Unos medios priorizan la solidaridad interterritorial y las vías legales de acogida; otros enfatizan el control estricto de fronteras y retornos.',
      'Difieren al valorar el ritmo de incremento del presupuesto de defensa respecto a los compromisos de la OTAN.',
    ],
    criticalQuestions: [
      '¿Qué partidas concretas del Pacto Europeo de Migración y Asilo tienen financiación vinculante asignada a España?',
      '¿Cómo se contabiliza el gasto en defensa según los criterios homologados de la OTAN y los Presupuestos españoles?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'España defiende en Bruselas una respuesta europea solidaria en migración y más inversión conjunta en industria',
        summary:
          'Subraya el protagonismo de la diplomacia española en los debates europeos sobre fondos comunes, transición verde y cooperación migratoria.',
        emphasizes: [
          'Alianzas con socios europeos para acelerar el despliegue del Pacto de Migración.',
          'Importancia de la migración ordenada para el mercado laboral y la demografía.',
        ],
        questionsOrNuances: [
          'Señala la resistencia de varios Estados miembros a activar mecanismos obligatorios de reparto.',
          'Advierte de la necesidad de coordinar mejor la acogida con las comunidades autónomas.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'La gestión migratoria y el gasto en defensa enfrentan al Gobierno con sus socios y con la oposición europea',
        summary:
          'Enfoca las contradicciones dentro del bloque gubernamental respecto al presupuesto militar y el despliegue de controles fronterizos.',
        emphasizes: [
          'Presión de la OTAN y de la Comisión Europea para elevar el gasto en seguridad.',
          'Falta de acuerdo interno en España sobre la reforma de la ley de extranjería.',
        ],
        questionsOrNuances: [
          'Pregunta qué concesiones concretas respaldan el giro diplomático en el Magreb.',
          'Destaca el colapso operativo en los territorios fronterizos.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'El repunte de llegadas irregulares tensiona los recursos locales y reabre el debate sobre el control de fronteras',
        summary:
          'Pone el acento en la seguridad nacional, la lucha contra las redes de tráfico y la capacidad límite de los dispositivos de acogida.',
        emphasizes: [
          'Demandas de refuerzo policial y medios para las fuerzas de seguridad en frontera.',
          'Críticas a la falta de acuerdos de retorno efectivos con países de origen.',
        ],
        questionsOrNuances: [
          'Cuestiona que las políticas actuales desincentiven las rutas ilegales.',
          'Pide mayor firmeza diplomática en el ámbito bilateral.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los datos de Interior muestran desajustes entre órdenes de expulsión dictadas y retornos ejecutados',
        summary:
          'Analiza estadísticas oficiales de Interior, Frontex y contratos de emergencia vinculados a la gestión de centros de acogida.',
        emphasizes: [
          'Porcentaje real de ejecución de resoluciones administrativas de retorno.',
          'Adjudicaciones de emergencia para alojamiento temporal y seguimiento de costes.',
        ],
        questionsOrNuances: [
          'Pregunta por los criterios técnicos en la distribución presupuestaria hacia territorios de llegada.',
          'Contrasta cifras de Interior con los balances semestrales europeos.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Organizaciones y territorios fronterizos reclaman corresponsabilidad para garantizar los derechos de los menores migrantes',
        summary:
          'Centra la mirada en los derechos humanos, la protección de la infancia no acompañada y el bloqueo político al reparto solidario.',
        emphasizes: [
          'Situación de saturación en los recursos de tutela infantil de Canarias y Ceuta.',
          'Crítica a los partidos que bloquean reformas obligatorias de acogida entre comunidades.',
        ],
        questionsOrNuances: [
          'Cuestiona la externalización del control migratorio hacia terceros países sin garantías suficientes.',
          'Reclama ampliar las vías legales y seguras de entrada.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El compromiso de llegar al 2% del PIB en defensa tensiona la senda de déficit pactada con Bruselas',
        summary:
          'Examina las implicaciones presupuestarias e industriales de los compromisos europeos en seguridad, energía y fronteras.',
        emphasizes: [
          'Oportunidades para la industria española de defensa y tecnología dual.',
          'Impacto de varios miles de millones adicionales anuales en las cuentas públicas.',
        ],
        questionsOrNuances: [
          'Pregunta si la UE excluirá las inversiones de defensa del cómputo estricto del déficit.',
          'Analiza la relación comercial con Estados Unidos y socios iberoamericanos.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Dinámica de Poder / Partidos',
        headline: 'La política exterior española busca equilibrio entre las prioridades de la UE y las divisiones de la coalición',
        summary:
          'Relata las gestiones diplomáticas del Ejecutivo frente a la dificultad de mantener una postura única dentro del Consejo de Ministros.',
        emphasizes: [
          'Diferencias de criterio en asuntos de defensa y relaciones con aliados estratégicos.',
          'Reclamo de la oposición para recuperar la política exterior como cuestión de Estado.',
        ],
        questionsOrNuances: [
          'Subraya la necesidad de mayor información previa al Congreso antes de cumbres europeas.',
          'Destaca la relevancia de mantener vínculos estables en el entorno mediterráneo.',
        ],
      },
    },
  },
];

export const ECONOMIA_SCENARIOS: TopicBrief[] = [
  {
    topicId: 'economia',
    topicTitle: 'Evolución del empleo, costes salariales y reforma fiscal',
    contextDeck:
      'Los últimos datos de afiliación a la Seguridad Social y recaudación tributaria reabren el debate entre competitividad empresarial, poder adquisitivo y sostenibilidad fiscal.',
    primarySources: [
      'Instituto Nacional de Estadística (EPA y Contabilidad Nacional)',
      'Ministerio de Inclusión, Seguridad Social y Migraciones',
      'Agencia Tributaria — Informe Mensual de Recaudación',
    ],
    convergences: [
      'Todos los diarios recogen los mismos datos oficiales de afiliación media, paro registrado y crecimiento interanual del PIB.',
      'Coinciden en que los ingresos tributarios marcan máximos nominales impulsados por el empleo, la inflación acumulada y las cotizaciones.',
      'Señalan que la productividad por hora trabajada y la tasa de paro juvenil siguen por detrás de la media de la eurozona.',
    ],
    divergences: [
      'Un bloque interpreta el aumento de afiliados y contratos indefinidos como éxito estructural de la reforma laboral; otro destaca la mayor rotación de fijos discontinuos y la caída de horas trabajadas por empleado.',
      'Chocan en la política fiscal: unos defienden mantener gravámenes a grandes patrimonios y sectores concretos para reforzar el Estado del bienestar; otros alertan de pérdida de inversión y deflación pendiente del IRPF.',
      'Difieren sobre el impacto neto de nuevas subidas del salario mínimo o reducción de jornada en las pymes.',
    ],
    criticalQuestions: [
      '¿Qué parte del aumento de la recaudación del IRPF se debe a crecimiento real del empleo y qué parte a la no deflactación de la tarifa frente a la inflación?',
      '¿Cómo evolucionan conjuntamente la afiliación, las horas efectivas trabajadas (Contabilidad Nacional) y la productividad?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'España consolida el liderazgo de crecimiento en la eurozona con récord de afiliación y avance de la recaudación',
        summary:
          'Destaca el dinamismo macroeconómico comparado con Alemania o Francia y defiende acompasar el crecimiento con mejoras laborales.',
        emphasizes: [
          'Resiliencia del mercado de trabajo y peso del sector servicios y exportaciones no turísticas.',
          'Estabilidad de las cuentas gracias al impulso de los ingresos fiscales.',
        ],
        questionsOrNuances: [
          'Reconoce el reto pendiente de elevar la productividad y reducir el desempleo de larga duración.',
          'Apunta a la necesidad de acuerdos en el diálogo social para evitar conflictividad.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La presión fiscal récord compensa la debilidad de la renta per cápita y lastra el ahorro de las familias',
        summary:
          'Contrasta el titular macroeconómico de PIB agregado con el estancamiento de la renta disponible por hogar y la sobrecarga tributaria.',
        emphasizes: [
          'Efecto de la inflación en los tramos del IRPF sobre las rentas medias y bajas.',
          'Advertencias patronales por la acumulación de cotizaciones y cambios normativos.',
        ],
        questionsOrNuances: [
          'Pregunta por qué el crecimiento del PIB no se traduce en una convergencia real en PIB per cápita con Europa.',
          'Subraya el peso creciente del empleo público frente al empleo privado en pequeñas empresas.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Las pymes advierten de un aumento insostenible de los costes laborales y reclaman alivio tributario',
        summary:
          'Pone en primer plano las dificultades de autónomos y pequeñas empresas ante las cotizaciones sociales y las cotas administrativas.',
        emphasizes: [
          'Cierre o estancamiento de microempresas en sectores de comercio y hostelería.',
          'Crítica a la falta de incentivos al ahorro privado y a la inversión productiva.',
        ],
        questionsOrNuances: [
          'Cuestiona la calidad de parte de los contratos indefinidos contabilizados como estables.',
          'Reclama una simplificación regulatoria y reducción del gasto público improductivo.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'El desglose de horas trabajadas y fijos discontinuos matiza el alcance real del repunte del empleo',
        summary:
          'Cruza las series de Seguridad Social, EPA y Contabilidad Nacional para examinar la duración media de los contratos y la jornada efectiva.',
        emphasizes: [
          'Diferencia entre número total de afiliados y empleo equivalente a tiempo completo.',
          'Evolución del absentismo laboral y de las bajas de incapacidad temporal.',
        ],
        questionsOrNuances: [
          'Pregunta por la transparencia de los datos de demandantes de empleo con relación laboral.',
          'Contrasta las previsiones oficiales de déficit con las estimaciones de la AIReF.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Los beneficios empresariales crecen por encima de los salarios mientras avanza la negociación por reducir la jornada',
        summary:
          'Sitúa el debate en la distribución de la renta entre capital y trabajo y en el margen de las empresas para mejorar sueldos y horarios.',
        emphasizes: [
          'Márgenes récord en banca, energía y grandes corporaciones según datos de la Agencia Tributaria.',
          'Beneficios en salud laboral y conciliación de acortar la jornada máxima legal.',
        ],
        questionsOrNuances: [
          'Advierte de que la subida de precios básicos sigue penalizando más a los hogares de menores ingresos.',
          'Defiende mantener impuestos específicos a grandes fortunas y beneficios extraordinarios.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El Tesoro y el Banco de España vigilan el pulso entre gasto corriente, tipos de interés e inversión privada',
        summary:
          'Analiza la evolución de la deuda pública sobre PIB, la caída de la inversión empresarial y las tensiones en la negociación fiscal.',
        emphasizes: [
          'Estancamiento de la formación bruta de capital fijo frente a niveles prepandemia.',
          'Impacto de la fiscalidad energética y bancaria en las decisiones de sede e inversión.',
        ],
        questionsOrNuances: [
          'Pregunta cómo se financiarán las pensiones sin aumentar aún más la cuña fiscal sobre los salarios.',
          'Señala la dependencia del tirón turístico y del gasto público en el crecimiento reciente.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las comunidades autónomas compiten con rebajas en IRPF y sucesiones frente a la armonización fiscal estatal',
        summary:
          'Destaca la brecha entre la política tributaria central y las bajadas de impuestos impulsadas por gobiernos regionales.',
        emphasizes: [
          'Efecto atracción de capital e inversiones en las comunidades con menor carga fiscal.',
          'Impacto cotidiano de la cesta de la compra y los suministros en la clase media.',
        ],
        questionsOrNuances: [
          'Pone el foco en la pérdida de poder adquisitivo acumulada desde 2021.',
          'Cuestiona que una mayor recaudación se traduzca en reducción efectiva de la deuda total.',
        ],
      },
    },
  },
  {
    topicId: 'economia',
    topicTitle: 'Sostenibilidad del sistema de pensiones y cotizaciones sociales',
    contextDeck:
      'Las revisiones demográficas y los informes sobre la hucha de las pensiones reavivan la discusión sobre el Mecanismo de Equidad Intergeneracional y la edad efectiva de jubilación.',
    primarySources: [
      'Seguridad Social — Nómina mensual de pensiones',
      'AIReF — Opinión sobre sostenibilidad de las Administraciones Públicas',
      'Comisión Europea — Ageing Report',
    ],
    convergences: [
      'Todos los medios publican el importe récord de la nómina mensual contributiva y el incremento del número de pensionistas de la generación del baby boom.',
      'Coinciden en que la revalorización anual conforme al IPC protege el poder adquisitivo de los jubilados pero eleva el gasto estructural.',
      'Recogen la activación de la cláusula de revisión prevista en el acuerdo con Bruselas.',
    ],
    divergences: [
      'Unos destacan que el aumento de cotizantes y el MEI garantizan la viabilidad sin recortes de cuantía; otros subrayan el déficit contributivo cubierto mediante transferencias del Estado.',
      'Chocan al valorar si el sobrecoste de cotizaciones sobre salarios medios y altos destruye empleo o es asumible.',
      'Difieren en el papel que deberían jugar los planes de pensiones de empleo y el ahorro privado complementario.',
    ],
    criticalQuestions: [
      '¿Cuál es la diferencia entre el déficit de caja de la Seguridad Social y el saldo contributivo neto antes de transferencias del Estado?',
      '¿Qué umbral de gasto en pensiones sobre el PIB activa automáticamente medidas correctoras según la regla pactada con la UE?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'El aumento de cotizantes y la reforma pactada con Bruselas amortiguan el empuje del gasto en pensiones',
        summary:
          'Resalta que la creación de empleo y el retraso voluntario de la jubilación mejoran los ingresos del sistema sin penalizar las prestaciones.',
        emphasizes: [
          'Crecimiento del Fondo de Reserva gracias a la recaudación del MEI.',
          'Estabilidad social garantizada por la indexación de las pensiones al IPC.',
        ],
        questionsOrNuances: [
          'Admite que la próxima década exigirá vigilancia continua sobre los parámetros de sostenibilidad.',
          'Apunta a la necesidad de impulsar los planes de empleo en la negociación colectiva.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El gasto en pensiones absorbe cada vez más recursos del presupuesto y dispara las transferencias del Estado',
        summary:
          'Pone el acento en la brecha entre cotizaciones recaudadas y prestaciones pagadas, advirtiendo sobre el coste para los trabajadores jóvenes.',
        emphasizes: [
          'Peso creciente de la partida de pensiones dentro del gasto público total.',
          'Subida paulatina de las bases máximas de cotización sin aumento proporcional de la pensión máxima.',
        ],
        questionsOrNuances: [
          'Cuestiona las hipótesis macroeconómicas optimistas en las que se apoya la sostenibilidad oficial.',
          'Pregunta qué margen queda para invertir en educación o I+D ante el envejecimiento.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'Los expertos alertan de la brecha generacional: los jóvenes cotizan más con menor certidumbre sobre su jubilación',
        summary:
          'Enfoca el análisis desde la equidad entre generaciones, la natalidad y la carga sobre las rentas salariales.',
        emphasizes: [
          'Relación decreciente entre número de cotizantes por cada pensionista en varias regiones.',
          'Penalización fiscal al ahorro individual frente a otros países europeos.',
        ],
        questionsOrNuances: [
          'Reclama transparencia total enviando a cada trabajador una estimación clara de su pensión futura.',
          'Critica que se pospongan reformas estructurales de calado.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'La AIReF y los técnicos cuestionan los supuestos de inmigración y productividad que sustentan la reforma',
        summary:
          'Examina las discrepancias metodológicas entre el Ministerio de Seguridad Social, la AIReF y los auditores de la Comisión Europea.',
        emphasizes: [
          'Desviaciones entre el escenario oficial y la proyección independiente de gasto sobre PIB.',
          'Volumen de deuda acumulada por la Seguridad Social con el Tesoro Público.',
        ],
        questionsOrNuances: [
          'Pregunta si la cláusula de salvaguarda obligará a nuevas subidas de cotizaciones en breve.',
          'Analiza la evolución de las jubilaciones anticipadas y demoradas.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La revalorización con el IPC evita que millones de pensionistas pierdan poder adquisitivo frente a los precios',
        summary:
          'Defiende la naturaleza social del sistema de reparto y la suficiencia de las pensiones mínimas y no contributivas frente a discursos de recorte.',
        emphasizes: [
          'Reducción de la brecha de género en las nuevas altas y mejora de las pensiones más bajas.',
          'Legitimidad de financiar prestaciones no contributivas vía impuestos generales.',
        ],
        questionsOrNuances: [
          'Recuerda que los salarios bajos siguen siendo el principal lastre de las futuras pensiones.',
          'Critica las propuestas de transición hacia sistemas mixtos de capitalización.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La subida de cotizaciones y la cuota de solidaridad encarecen la contratación de perfiles cualificados',
        summary:
          'Analiza el impacto directo de los recargos de cotización en los costes laborales de las empresas tecnológicas, industriales y de servicios.',
        emphasizes: [
          'Aumento progresivo de las cuotas para salarios por encima de la base máxima.',
          'Comparativa de costes laborales no salariales de España frente a competidores europeos.',
        ],
        questionsOrNuances: [
          'Pregunta si el encarecimiento del trabajo cualificado frenará la atracción de talento.',
          'Evalúa los incentivos fiscales necesarios para reactivar el ahorro previsional.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Institucional / Gobernanza',
        headline: 'El Pacto de Toledo afronta el reto de blindar las pensiones sin romper el equilibrio de las cuentas públicas',
        summary:
          'Pide recuperar el consenso parlamentario amplio en torno al Pacto de Toledo y dar certezas a pensionistas y empresas.',
        emphasizes: [
          'Necesidad de vincular cualquier ajuste futuro al acuerdo entre sindicatos, patronal y partidos.',
          'Preocupación de los pensionistas por la suficiencia ante el coste de la vida.',
        ],
        questionsOrNuances: [
          'Señala la fragilidad financiera de depender de deuda estatal para pagar pagas extraordinarias.',
          'Destaca la importancia de fomentar la natalidad y la estabilidad laboral.',
        ],
      },
    },
  },
  {
    topicId: 'economia',
    topicTitle: 'Fondos europeos Next Generation, industria y ejecución real',
    contextDeck:
      'Bruselas revisa el cumplimiento de hitos y desembolsos del Plan de Recuperación mientras el tejido productivo evalúa cuánto dinero ha llegado a la economía real.',
    primarySources: [
      'Secretaría General de Fondos Europeos (ELISA)',
      'Comisión Europea — Cuadro de Indicadores de Recuperación',
      'Tribunal de Cuentas Europeo',
    ],
    convergences: [
      'Todos los periódicos informan sobre los hitos cumplidos ante la Comisión Europea y el calendario de próximos tramos de subvenciones y préstamos.',
      'Coinciden en que existen diferencias notables entre los fondos convocados, los adjudicados y los pagos efectivamente ejecutados en pymes.',
      'Destacan los proyectos estratégicos (PERTE) vinculados al vehículo eléctrico, semiconductores, digitalización y descarbonización.',
    ],
    divergences: [
      'Unos destacan que España lidera los desembolsos recibidos desde Bruselas; otros enfatizan los cuellos de botella burocráticos y la baja llegada al tejido pequeño.',
      'Difieren sobre el grado de aprovechamiento de los préstamos reembolsables frente a las transferencias directas.',
      'Discrepan en la transparencia y trazabilidad de los datos publicados en los portales oficiales de ejecución.',
    ],
    criticalQuestions: [
      '¿Qué diferencia existe entre crédito presupuestario comprometido, convocatorias publicadas y transferencias reales cobradas por beneficiarios finales?',
      '¿Qué porcentaje de los PERTE industriales ha quedado desierto o reasignado en segundas convocatorias?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'España avanza en los desembolsos del Plan de Recuperación y acelera la inversión en digitalización y energía limpia',
        summary:
          'Enfoca el avance de los hitos reformistas pactados con Bruselas y el efecto tractor de las grandes licitaciones públicas y del Kit Digital.',
        emphasizes: [
          'Cumplimiento de reformas estructurales asociadas a cada tramo de fondos.',
          'Impulso a la modernización ferroviaria, redes eléctricas y conectividad.',
        ],
        questionsOrNuances: [
          'Reconoce que la fase final exige agilizar trámites para llegar al plazo límite de ejecución.',
          'Subraya la colaboración entre ministerios y comunidades autónomas en las convocatorias.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Fiscalización / Investigación',
        headline: 'La burocracia ralentiza la llegada de los fondos europeos a la economía real a medida que se acerca el plazo de cierre',
        summary:
          'Pone el acento en los retrasos de gestión, las convocatorias modificadas sobre la marcha y las quejas de asociaciones empresariales.',
        emphasizes: [
          'Brecha entre el dinero recibido por el Tesoro y el capital invertido por empresas privadas.',
          'Dificultades de las pymes para afrontar requisitos técnicos y avales.',
        ],
        questionsOrNuances: [
          'Pregunta cuántos proyectos quedarán sin ejecutarse antes de la fecha límite europea.',
          'Cuestiona el uso de fondos para cubrir gasto recurrente o digitalización básica sin efecto transformador.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Confrontación Política',
        headline: 'La oposición exige auditorías independientes sobre el reparto de los fondos Next Generation entre territorios',
        summary:
          'Centra el debate en la opacidad del seguimiento de las adjudicaciones y el peso asignado a proyectos gestionados directamente por ministerios.',
        emphasizes: [
          'Críticas de los interventores y del Tribunal de Cuentas Europeo sobre sistemas de control.',
          'Reclamación autonómica de mayor descentralización en el diseño de los PERTE.',
        ],
        questionsOrNuances: [
          'Cuestiona si los criterios de adjudicación han priorizado proyectos de gran impacto industrial.',
          'Pide un desglose público por provincia y beneficiario final accesible en tiempo real.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los datos de ejecución real muestran miles de millones pendientes de asignar en los tramos de préstamos',
        summary:
          'Analiza la baja demanda inicial de las líneas de préstamos frente a las subvenciones a fondo perdido y examina los PERTE con menor absorción.',
        emphasizes: [
          'Desfase entre los anuncios de movilización de capital y las resoluciones firmes del BOE.',
          'Reasignaciones de partidas entre ministerios tras convocatorias poco concurridas.',
        ],
        questionsOrNuances: [
          'Pregunta qué entidades financieras canalizan los préstamos y con qué condiciones de riesgo.',
          'Audita los retrasos en los pagos a ayuntamientos y consorcios.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Los fondos europeos impulsan la rehabilitación energética, la FP y la transición verde en todo el territorio',
        summary:
          'Destaca los programas de impacto social y ambiental financiados por el plan, desde plazas de educación infantil hasta movilidad sostenible.',
        emphasizes: [
          'Despliegue de subvenciones para autoconsumo, rehabilitación de barrios y formación profesional.',
          'Compromiso de condicionalidad ambiental en las ayudas industriales.',
        ],
        questionsOrNuances: [
          'Señala que los ayuntamientos pequeños carecen de personal técnico para concurrir a convocatorias complejas.',
          'Pide reforzar el seguimiento de cláusulas laborales en las empresas beneficiarias.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La industria teme una resaca inversora cuando expire el Plan de Recuperación sin reformas de competitividad',
        summary:
          'Analiza el escenario macroeconómico posterior al fin de los fondos europeos y el coste financiero de activar la adenda de préstamos.',
        emphasizes: [
          'Efecto temporal de las subvenciones sobre el crecimiento del PIB y la licitación de obra civil.',
          'Necesidad de atraer capital privado para sostener proyectos de baterías y chips.',
        ],
        questionsOrNuances: [
          'Pregunta si el endeudamiento vía adenda eleva innecesariamente la deuda pública futura.',
          'Compara la agilidad de ejecución española con la de Italia y Francia.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Autonomías y patronales piden simplificar los pliegos de los fondos europeos para no devolver recursos',
        summary:
          'Recoge la voz de cámaras de comercio y consejerías económicas regionales pidiendo flexibilización normativa a Madrid y Bruselas.',
        emphasizes: [
          'Demanda de ampliar plazos de justificación para proyectos de infraestructuras e industria.',
          'Riesgo de perder inversiones estratégicas por exceso de trabas administrativas.',
        ],
        questionsOrNuances: [
          'Destaca los casos de éxito en colaboración público-privada cuando se reducen trámites.',
          'Reclama mayor diálogo institucional en la conferencia sectorial de fondos.',
        ],
      },
    },
  },
  {
    topicId: 'economia',
    topicTitle: 'Sector bancario, consolidación financiera y competencia en el crédito',
    contextDeck:
      'Los supervisores nacionales y europeos analizan operaciones corporativas en la banca española, el margen de los depósitos y el acceso al crédito para familias y pymes.',
    primarySources: [
      'Comisión Nacional de los Mercados y la Competencia (CNMC)',
      'Banco de España — Informe de Estabilidad Financiera',
      'Comisión Nacional del Mercado de Valores (CNMV)',
    ],
    convergences: [
      'Todos los diarios siguen las resoluciones técnicas de la CNMC y del Banco Central Europeo sobre concentración bancaria.',
      'Coinciden en que la rentabilidad del sector bancario español ha mejorado gracias al ciclo de tipos de interés, aunque persiste el debate sobre la remuneración del ahorro.',
      'Recogen las preocupaciones por el cierre de sucursales en zonas rurales y el acceso al crédito de pequeñas empresas.',
    ],
    divergences: [
      'Unos ponen el foco en la creación de entidades más sólidas capaces de competir a escala europea; otros alertan del riesgo de oligopolio y menor competencia en crédito a pymes.',
      'Discrepan sobre el papel del Gobierno ante operaciones entre entidades privadas cotizadas.',
      'Difieren en si los impuestos extraordinarios a la banca frenan la concesión de crédito o corrigen beneficios caídos del cielo.',
    ],
    criticalQuestions: [
      '¿Qué cuotas de mercado provinciales superan los umbrales de atención fijados por la CNMC en el crédito a pymes?',
      '¿Cómo evoluciona el tipo medio de los depósitos a plazo en España frente a la media de la zona euro?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'Competencia examina las condiciones para proteger el crédito a las pymes y la inclusión financiera en la banca',
        summary:
          'Prioriza el análisis regulatorio, la defensa de los consumidores financieros y los compromisos exigidos para evitar restricciones en regiones clave.',
        emphasizes: [
          'Estudio minucioso de la CNMC sobre solapamiento territorial de oficinas y servicios.',
          'Necesidad de equilibrar fortaleza financiera con atención presencial a mayores y pymes.',
        ],
        questionsOrNuances: [
          'Señala el debate abierto en Bruselas sobre la unión bancaria europea.',
          'Recoge las posturas de sindicatos financieros sobre el impacto en las plantillas.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El pulso entre supervisores, accionistas y Gobierno marca el futuro del mapa bancario español',
        summary:
          'Destaca la tensión entre la lógica de mercado de los accionistas y la intervención regulatoria o política en operaciones estratégicas.',
        emphasizes: [
          'Reacción de los mercados y fondos internacionales ante las condiciones impuestas por las autoridades.',
          'Competencia por captar ahorro minorista mediante cuentas remuneradas e hipotecas fijas.',
        ],
        questionsOrNuances: [
          'Cuestiona hasta dónde debe llegar la capacidad de veto gubernamental en operaciones privadas.',
          'Analiza el peso de las comisiones bancarias en los ingresos de las entidades.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Dinámica de Poder / Partidos',
        headline: 'El choque institucional en torno a la banca enfrenta criterios técnicos de mercado con cálculos políticos',
        summary:
          'Examina las presiones territoriales y políticas alrededor de los grandes centros de decisión financiera en España.',
        emphasizes: [
          'Defensa de la seguridad jurídica y del respeto a las competencias independientes de CNMV y CNMC.',
          'Preocupación por la despoblación financiera en municipios pequeños.',
        ],
        questionsOrNuances: [
          'Advierte sobre el mensaje que transmite a inversores extranjeros la interferencia política.',
          'Pide claridad normativa estable para el sector.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los expedientes de Competencia detallan las provincias donde el crédito comercial corre riesgo de concentrarse',
        summary:
          'Detalla los informes técnicos por códigos postales y los alegatos presentados por patronales territoriales y asociaciones de pymes.',
        emphasizes: [
          'Impacto específico sobre líneas de circulante, factoring y descuento comercial.',
          'Calendario real de plazos legales antes de una resolución definitiva.',
        ],
        questionsOrNuances: [
          'Pregunta si los remedios estructurales propuestos bastan para mantener alternativas de financiación.',
          'Contrasta los costes de fusión estimados con los ajustes previos en el sector.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Los beneficios récord de la gran banca contrastan con la escasa remuneración de los depósitos y la exclusión financiera',
        summary:
          'Pone en primer plano la protección del cliente bancario, el coste de las hipotecas y la justicia fiscal sobre los beneficios financieros.',
        emphasizes: [
          'Diferencial entre lo que cobran los bancos por prestar y lo que pagan por el ahorro.',
          'Reclamo de mantener el gravamen al sector para financiar medidas sociales.',
        ],
        questionsOrNuances: [
          'Advierte de que una mayor concentración reduce el poder de negociación de consumidores y trabajadores.',
          'Pide reforzar la vigilancia del Banco de España sobre prácticas comerciales.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La gran banca recalibra su estrategia ante la bajada gradual de tipos y la presión fiscal en España',
        summary:
          'Ofrece un análisis financiero profundo sobre márgenes de intereses, morosidad contenida, dividendos y apetito inversor internacional.',
        emphasizes: [
          'Evolución del margen de clientes cuando el BCE ajusta el precio oficial del dinero.',
          'Estrategia de recompras de acciones frente a crecimiento orgánico o inorgánico.',
        ],
        questionsOrNuances: [
          'Evalúa el impacto del impuesto bancario permanente en la valoración bursátil frente a pares europeos.',
          'Analiza el auge de neobancos y crédito alternativo.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Pymes y autónomos piden garantías de financiación estable ante la reordenación del sector financiero',
        summary:
          'Recoge la preocupación de asociaciones de comercio, agricultura y pymes regionales por mantener diversidad de entidades de crédito.',
        emphasizes: [
          'Importancia de la cercanía de las oficinas para la economía local y familiar.',
          'Solicitud de líneas ICO ágiles para compensar eventuales restricciones de crédito.',
        ],
        questionsOrNuances: [
          'Señala el desafío de acompañar a las personas mayores en la transición digital bancaria.',
          'Destaca la solvencia alcanzada por la banca española tras la última década de reformas.',
        ],
      },
    },
  },
];

export const VIVIENDA_SCENARIOS: TopicBrief[] = [
  {
    topicId: 'vivienda',
    topicTitle: 'Precios del alquiler, zonas tensionadas y oferta residencial',
    contextDeck:
      'El encarecimiento continuado del alquiler en grandes capitales y áreas turísticas enfrenta propuestas de control de precios frente a incentivos fiscales a la nueva oferta.',
    primarySources: [
      'Ministerio de Vivienda y Agenda Urbana — Índice de Referencia',
      'Instituto Nacional de Estadística (Índice de Precios de Vivienda)',
      'Consejo General del Notariado y Registradores de España',
    ],
    convergences: [
      'Todas las cabeceras coinciden en que el acceso a la vivienda es uno de los principales problemas sociales y económicos en España, especialmente para jóvenes.',
      'Constataron que la formación de nuevos hogares supera ampliamente el ritmo actual de visados de obra nueva.',
      'Recogen la desigual aplicación territorial de la Ley de Vivienda según el gobierno de cada comunidad autónoma.',
    ],
    divergences: [
      'Unos defienden declarar zonas tensionadas y limitar precios para frenar subidas especulativas; otros sostienen que los topes retraen el alquiler habitual hacia contratos temporales o venta.',
      'Chocan en la regulación de los pisos turísticos: prioridad a moratorias y prohibiciones frente a seguridad jurídica y libertad de uso.',
      'Difieren sobre el peso real que debe tener la promoción pública frente a la colaboración con promotores privados.',
    ],
    criticalQuestions: [
      '¿Qué ha ocurrido en las áreas donde ya se aplican índices de referencia con el número total de contratos firmados y con las rentas medias?',
      '¿Cuántas viviendas de alquiler social o asequible terminadas y entregadas se suman al parque público cada año?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'El despliegue desigual de la Ley de Vivienda marca la brecha de precios entre comunidades autónomas',
        summary:
          'Destaca los primeros resultados en las regiones que aplican topes al alquiler y aboga por ampliar el parque público y regular los pisos turísticos.',
        emphasizes: [
          'Alivio en renovaciones de contratos en municipios declarados tensionados.',
          'Necesidad de que las comunidades habiliten herramientas contra el fraude en alquileres de temporada.',
        ],
        questionsOrNuances: [
          'Reconoce que el tope de rentas por sí solo no resuelve la escasez estructural de oferta.',
          'Analiza el tiempo necesario para que los anuncios de vivienda pública se traduzcan en llaves entregadas.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La oferta de alquiler tradicional se estrecha mientras se dispara el trasvase hacia contratos temporales',
        summary:
          'Pone el foco en la caída del stock disponible en portales y en las advertencias del sector sobre la inseguridad jurídica de los propietarios.',
        emphasizes: [
          'Reducción de pisos ofertados en alquiler de larga duración tras las reformas legales.',
          'Demora judicial en procedimientos de impago u ocupación como freno a sacar viviendas al mercado.',
        ],
        questionsOrNuances: [
          'Cuestiona la eficacia de las medidas intervencionistas para bajar precios de forma sostenible.',
          'Reclama agilizar licencias urbanísticas y liberar suelo finalista.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'Propietarios y promotores reclaman seguridad jurídica frente a medidas que consideran punitivas para el ahorro inmobiliario',
        summary:
          'Enfoca la crisis habitacional desde la protección de la propiedad privada, la agilización de desahucios por impago y el impulso a la construcción.',
        emphasizes: [
          'Peso mayoritario de pequeños propietarios particulares en el parque español de alquiler.',
          'Crítica a las limitaciones a la libertad de contratación entre particulares.',
        ],
        questionsOrNuances: [
          'Pregunta por qué no se moviliza el suelo titularidad de administraciones públicas antes de intervenir precios.',
          'Señala el encarecimiento de materiales e impuestos asociados a la vivienda nueva.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los registros autonómicos y notariales revelan el impacto dispar de los índices de precios en la firma de contratos',
        summary:
          'Cruza datos de fianzas depositadas, visados de obra nueva y operaciones de compraventa para evaluar las consecuencias reales de cada política.',
        emphasizes: [
          'Diferencia entre viviendas prometidas en planes estatales y promociones realmente iniciadas.',
          'Auge del alquiler por habitaciones como vía de escape de la regulación.',
        ],
        questionsOrNuances: [
          'Audita el grado de ejecución de las líneas de avales para jóvenes.',
          'Pregunta qué municipios han rechazado aplicar medidas por falta de datos técnicos homologados.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'El esfuerzo salarial para pagar un alquiler supera el 40% en las áreas metropolitanas y expulsa a los residentes',
        summary:
          'Prioriza la perspectiva social del derecho a la vivienda, el impacto de los fondos de inversión y la proliferación de viviendas de uso turístico.',
        emphasizes: [
          'Gentrificación de barrios céntricos y desplazamiento de trabajadores esenciales.',
          'Necesidad de limitar compras especulativas y convertir la vivienda en bien de primera necesidad.',
        ],
        questionsOrNuances: [
          'Critica la negativa de varias comunidades autónomas a aplicar los topes legales previstos.',
          'Propone reforzar la inspección sobre alojamientos turísticos sin licencia.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El déficit de 100.000 viviendas anuales tensiona precios y frena la inversión institucional en build-to-rent',
        summary:
          'Analiza la crisis desde el equilibrio oferta-demanda, los costes de financiación promotora, el suelo disponible y el atractivo para el capital.',
        emphasizes: [
          'Desajuste demográfico en Madrid, Barcelona, Valencia, Málaga y archipiélagos.',
          'Retirada o redirección de fondos promotores hacia segmentos no intervenidos (flex living).',
        ],
        questionsOrNuances: [
          'Pregunta si los avales públicos sin aumento de oferta terminan trasladándose a precios más altos.',
          'Calcula el peso de tasas, IVA e impuestos locales en el precio final de una vivienda nueva.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Ayuntamientos y comunidades buscan suelo público y rebajas fiscales para facilitar el acceso a la primera vivienda',
        summary:
          'Destaca las iniciativas autonómicas basadas en avales hipotecarios, cesión de suelo en derecho de superficie y bonificaciones en Transmisiones.',
        emphasizes: [
          'Dificultad de los jóvenes con empleo estable para reunir el 20% de entrada hipotecaria.',
          'Modelos regionales de colaboración público-privada para alquiler asequible.',
        ],
        questionsOrNuances: [
          'Señala el choque competencial entre Estado y autonomías en materia urbanística.',
          'Recoge testimonios de familias desplazadas a coronas metropolitanas.',
        ],
      },
    },
  },
  {
    topicId: 'vivienda',
    topicTitle: 'Infraestructuras ferroviarias, Cercanías y cohesión territorial',
    contextDeck:
      'Las incidencias en redes de Cercanías, la liberalización de la alta velocidad y el avance de los corredores Atlántico y Mediterráneo centran el pulso territorial.',
    primarySources: [
      'Ministerio de Transportes y Movilidad Sostenible',
      'Adif — Informes de puntualidad y estado de la red',
      'CNMC — Informe anual del sector ferroviario',
    ],
    convergences: [
      'Todos los medios informan sobre las incidencias operativas en nodos saturados y el volumen récord de viajeros en alta velocidad tras la entrada de nuevos operadores.',
      'Coinciden en que la inversión en mantenimiento de la red convencional y Cercanías había quedado rezagada frente a la expansión del AVE.',
      'Recogen las reivindicaciones territoriales por el cumplimiento de los plazos en el Corredor Mediterráneo y el Atlántico.',
    ],
    divergences: [
      'Discrepan en la atribución de responsabilidades por los retrasos diarios: obras de mejora heredadas vs. falta de planificación y mantenimiento.',
      'Chocan en la valoración de la competencia ferroviaria y la rentabilidad frente al servicio público en líneas medias.',
      'Difieren en el ritmo de transferencia o gestión descentralizada de los servicios ferroviarios autonómicos.',
    ],
    criticalQuestions: [
      '¿Qué porcentaje de las incidencias registradas en Cercanías se debe a infraestructura (Adif), material rodante (Renfe) o causas externas?',
      '¿Cómo evoluciona el grado de ejecución real de las inversiones presupuestadas en infraestructuras por comunidad autónoma?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'Transportes defiende el plan de obras en nodos ferroviarios clave tras años de subinversión en Cercanías',
        summary:
          'Sitúa las molestias actuales como consecuencia inevitable de renovar estaciones e infraestructuras saturadas tras el auge de viajeros.',
        emphasizes: [
          'Incremento récord de usuarios gracias a los abonos de transporte y precios competitivos.',
          'Volumen de licitaciones en curso para modernizar señalización y catenaria.',
        ],
        questionsOrNuances: [
          'Reconoce el desgaste cotidiano de los usuarios habituales de Cercanías en Madrid y Cataluña.',
          'Plantea el reto de sostener financieramente las bonificaciones permanentes.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'El colapso recurrente en Cercanías y las demoras en nodos de alta velocidad abren una crisis de gestión en Transportes',
        summary:
          'Pone el foco en el hartazgo de los viajeros, el cruce de acusaciones entre administraciones y la pérdida de fiabilidad histórica del servicio.',
        emphasizes: [
          'Cifras de trenes suprimidos o demorados y colas en estaciones centrales.',
          'Tensiones por la llegada tardía de nuevos trenes contratados.',
        ],
        questionsOrNuances: [
          'Cuestiona que la comunicación ministerial priorice la respuesta política sobre soluciones operativas.',
          'Exige auditorías independientes del estado de las vías.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'El deterioro de las líneas convencionales agrava el aislamiento de la España interior frente a los grandes ejes',
        summary:
          'Destaca las carencias ferroviarias de comunidades como Extremadura, Asturias o provincias interiores frente al foco puesto en grandes nodos.',
        emphasizes: [
          'Retrasos acumulados durante décadas en conexiones regionales clave.',
          'Crítica a las cesiones competenciales fragmentadas en la red nacional.',
        ],
        questionsOrNuances: [
          'Reclama igualdad de trato inversor entre territorios independientemente del peso parlamentario.',
          'Cuestiona la calidad del servicio en rutas de media distancia.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los informes internos de Adif y Renfe detallan el envejecimiento de la flota y los puntos negros de la red',
        summary:
          'Analiza partes de incidencias, plazos de entrega de material rodante y desviaciones de costes en obras estratégicas.',
        emphasizes: [
          'Porcentaje de trenes con más de dos décadas de servicio activo en Cercanías.',
          'Conflictos contractuales y penalizaciones pendientes con fabricantes ferroviarios.',
        ],
        questionsOrNuances: [
          'Pregunta por la capacidad real de las vías para absorber el aumento de frecuencias de tres operadores.',
          'Contrasta los datos oficiales de puntualidad tras cambios de criterio en las indemnizaciones.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La gratuidad y los descuentos disparan el uso del transporte público mientras urge reforzar la red de cercanías',
        summary:
          'Enfoca la movilidad como servicio público esencial para la descarbonización y el ahorro de las familias trabajadoras.',
        emphasizes: [
          'Impacto positivo de los abonos gratuitos en el bolsillo de estudiantes y trabajadores.',
          'Demanda sindical de más personal técnico, maquinistas y talleres.',
        ],
        questionsOrNuances: [
          'Critica que la liberalización haya abaratado corredores rentables sin resolver la red de proximidad.',
          'Pide un plan estable de financiación del transporte metropolitano.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La guerra de precios en la alta velocidad presiona los márgenes de los operadores y exige revisar los cánones de Adif',
        summary:
          'Examina la vertiente financiera de la liberalización ferroviaria, los resultados operativos de Renfe, Ouigo e Iryo y la carga de deuda de Adif.',
        emphasizes: [
          'Pérdidas acumuladas por los operadores entrantes en corredores de alta competencia.',
          'Necesidad logística de impulsar el transporte ferroviario de mercancías desde puertos.',
        ],
        questionsOrNuances: [
          'Pregunta cómo impacta la rebaja de cánones en la capacidad de Adif para financiar mantenimiento.',
          'Analiza los planes de expansión hacia corredores secundarios.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las comunidades reclaman un calendario verificable de inversiones para Cercanías y corredores logísticos',
        summary:
          'Recoge las peticiones de gobiernos regionales y cámaras empresariales sobre infraestructuras críticas para el empleo y el turismo.',
        emphasizes: [
          'Importancia estratégica del Corredor Mediterráneo y del acceso ferroviario a puertos y aeropuertos.',
          'Malestar ciudadano por las alteraciones de tráfico en áreas metropolitanas.',
        ],
        questionsOrNuances: [
          'Subraya el contraste entre ejecución presupuestaria teórica e inversión real en varias autonomías.',
          'Pide mayor coordinación entre Estado, autonomías y consorcios de transporte.',
        ],
      },
    },
  },
  {
    topicId: 'vivienda',
    topicTitle: 'Turismo masivo, fiscalidad local y convivencia urbana',
    contextDeck:
      'Varias ciudades españolas debaten tasas turísticas, licencias de viviendas vacacionales y límites de capacidad en un año de máximos históricos de visitantes.',
    primarySources: [
      'INE — Estadística de Movimientos Turísticos en Fronteras (FRONTUR)',
      'Exceltur — Barómetro de rentabilidad y empleo turístico',
      'Ordenanzas municipales de vivienda turística',
    ],
    convergences: [
      'Todos los diarios recogen los récords históricos de llegadas internacionales y gasto turístico acumulado.',
      'Coinciden en que la presión en determinados cascos históricos e islas ha abierto un debate ciudadano sobre los límites de carga.',
      'Señalan la necesidad de combatir la oferta alojativa ilegal que opera sin registro ni tributación.',
    ],
    divergences: [
      'Unos defienden moratorias estrictas, tasas turísticas y reducción de plazas para proteger a los vecinos; otros alertan de demonizar el principal motor de empleo y divisas.',
      'Difieren en cuánto peso tienen las viviendas turísticas en el encarecimiento total del alquiler frente a la falta de construcción.',
      'Varía el enfoque sobre la calidad laboral y estacionalidad del sector hostelero.',
    ],
    criticalQuestions: [
      '¿Qué porcentaje del parque total de viviendas de cada distrito representan los alojamientos turísticos reglados frente a los estimados sin licencia?',
      '¿Cómo ha evolucionado el gasto medio por turista y la desestacionalización fuera de los meses centrales de verano?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las grandes ciudades buscan fórmulas para conciliar el récord turístico con el derecho a residir en el centro',
        summary:
          'Analiza la respuesta de ayuntamientos y comunidades ante el malestar vecinal, destacando tasas finalistas y registros únicos de alquiler.',
        emphasizes: [
          'Impacto de la saturación en servicios municipales, movilidad y comercio de proximidad.',
          'Transición hacia un modelo turístico de mayor valor añadido y menor masificación.',
        ],
        questionsOrNuances: [
          'Señala la complejidad técnica de inspeccionar miles de anuncios en plataformas digitales.',
          'Apunta a la diversidad de posturas entre alcaldes de distintas ciudades.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El sector turístico aporta cifras récord al PIB mientras teme una oleada de tasas y restricciones municipales',
        summary:
          'Destaca la contribución decisiva del turismo al empleo y a la balanza de pagos, advirtiendo contra medidas que resten competitividad.',
        emphasizes: [
          'Peso superior al 12% del PIB nacional y dinamismo de cadenas hoteleras españolas.',
          'Diferencia entre hoteles reglados que generan empleo estable y pisos clandestinos.',
        ],
        questionsOrNuances: [
          'Cuestiona que las tasas turísticas se destinen realmente a mejorar infraestructuras locales.',
          'Pregunta qué alternativa económica tendría zonas dependientes del turismo si se frena la demanda.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'Empresarios y propietarios piden perseguir la oferta ilegal sin criminalizar al turismo ni la libertad económica',
        summary:
          'Distingue entre la necesidad de ordenanzas claras frente al intrusismo y los discursos de rechazo al visitante.',
        emphasizes: [
          'Efecto arrastre del turismo sobre comercio, cultura, transporte y gastronomía.',
          'Inseguridad jurídica provocada por cambios bruscos de ordenanzas urbanísticas.',
        ],
        questionsOrNuances: [
          'Critica que los ayuntamientos trasladen la responsabilidad de su propia falta de vivienda protegida al turismo.',
          'Pide más inspectores municipales en lugar de prohibiciones genéricas.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'El registro de pisos turísticos revela miles de inmuebles operando sin licencia pese a las campañas de inspección',
        summary:
          'Examina los datos reales de expedientes sancionadores, multas cobradas y la eficacia limitada de las ordenanzas actuales.',
        emphasizes: [
          'Escaso número de inspectores disponibles en las grandes capitales frente al volumen de oferta.',
          'Desplazamiento de la demanda hacia municipios limítrofes tras las moratorias céntricas.',
        ],
        questionsOrNuances: [
          'Pregunta cómo colaborarán las plataformas digitales con la ventanilla única europea de registros.',
          'Contrasta las cifras de recaudación por tasas turísticas ya activas.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La presión turística encarece los barrios y moviliza a los vecinos frente a la pérdida de vivienda habitual',
        summary:
          'Recoge las protestas ciudadanas en archipiélagos y ciudades históricas, poniendo el acento en la precariedad laboral y la huella ecológica.',
        emphasizes: [
          'Dificultad de médicos, docentes y camareros para encontrar alojamiento en islas y costas.',
          'Reclamación de limitar plazas turísticas y ampliar inspecciones de trabajo.',
        ],
        questionsOrNuances: [
          'Cuestiona el modelo de crecimiento basado en volumen masivo de llegadas de bajo coste.',
          'Defiende la fiscalidad turística para financiar vivienda y transporte.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Hoteleros y fondos reorientan sus inversiones ante el bloqueo de licencias urbanas y el alza de costes operativos',
        summary:
          'Analiza la transformación del sector hacia hoteles de gama alta, el impacto de las restricciones en la valoración de activos y la estacionalidad.',
        emphasizes: [
          'Subida del ingreso por habitación disponible (RevPAR) y consolidación de grupos hoteleros.',
          'Impacto de la regulación sobre el mercado de reformas y pequeños inversores.',
        ],
        questionsOrNuances: [
          'Evalúa si la subida de precios hoteleros acabará moderando la demanda europea.',
          'Analiza el peso del turismo de congresos y larga distancia.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Comunidades y ayuntamientos buscan fórmulas de equilibrio entre el motor turístico y el bienestar vecinal',
        summary:
          'Muestra las distintas estrategias regionales: desde impuestos ecológicos en islas hasta incentivos de desestacionalización en el interior.',
        emphasizes: [
          'Auge del turismo cultural, rural y gastronómico en comunidades de interior.',
          'Acuerdos voluntarios con el sector para ordenar flujos en puntos saturados.',
        ],
        questionsOrNuances: [
          'Destaca la importancia de preservar la imagen internacional de España como destino seguro.',
          'Señala el reto de mejorar la formación profesional en hostelería.',
        ],
      },
    },
  },
  {
    topicId: 'vivienda',
    topicTitle: 'Reto demográfico, gestión del agua y mundo rural',
    contextDeck:
      'La situación de los embalses, la modernización de regadíos y los servicios públicos en la España rural marcan la agenda territorial entre comunidades.',
    primarySources: [
      'Ministerio para la Transición Ecológica (Boletín Hidrológico)',
      'INE — Padrón municipal y densidad demográfica',
      'Ministerio de Agricultura, Pesca y Alimentación',
    ],
    convergences: [
      'Todos los medios consignan los datos semanales de agua embalsada por cuencas y las marcadas diferencias entre el norte y el arco mediterráneo/sur.',
      'Coinciden en la importancia estratégica del sector agroalimentario y la urgencia de modernizar redes urbanas que pierden agua.',
      'Recogen el declive demográfico persistente en amplias zonas rurales del interior peninsular.',
    ],
    divergences: [
      'Chocan en la política hídrica: defensa de trasvases entre cuencas frente a prioridad a la desalación, reutilización y caudales ecológicos.',
      'Difieren en la valoración del impacto de las exigencias ambientales europeas (PAC) sobre la rentabilidad de explotaciones agrarias.',
      'Varía el énfasis entre ayudas directas a la fijación de población o incentivos fiscales diferenciados en zonas despobladas.',
    ],
    criticalQuestions: [
      '¿Qué porcentaje de agua se pierde actualmente en redes de distribución municipales obsoletas frente al consumo agrario y urbano?',
      '¿Cuál es la balanza económica y energética comparada entre agua trasvasada, desalada y regenerada en las cuencas deficitarias?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'Transición Ecológica prioriza la desalación y la digitalización de cuencas para adaptarse a ciclos más secos',
        summary:
          'Enfoca el problema hídrico desde la planificación hidrológica por cuencas, el cumplimiento de caudales ecológicos y las inversiones en eficiencia.',
        emphasizes: [
          'Subvenciones PERTE para digitalizar regadíos y reducir fugas en municipios.',
          'Adaptación estructural del campo español al cambio climático.',
        ],
        questionsOrNuances: [
          'Reconoce la tensión política recurrente entre comunidades cedentes y receptoras de agua.',
          'Destaca la necesidad de frenar extracciones ilegales en acuíferos sobreexplotados.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'La batalla del agua enfrenta a comunidades por los trasvases mientras el campo denuncia trabas regulatorias',
        summary:
          'Pone en primer plano los conflictos interterritoriales por las reglas de explotación de los trasvases y el malestar en el sector primario.',
        emphasizes: [
          'Impacto económico en la huerta exportadora si se reducen los volúmenes trasvasables.',
          'Falta de un Pacto Nacional del Agua compartido por los dos grandes partidos.',
        ],
        questionsOrNuances: [
          'Cuestiona que las infraestructuras de desalación estén listas a tiempo y con coste asumible.',
          'Recoge quejas de regantes por la carga burocrática ambiental.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'El mundo rural reclama un plan nacional de infraestructuras hidráulicas y menos carga burocrática desde Bruselas',
        summary:
          'Defiende la continuidad de las obras hidráulicas de interconexión de cuencas y la protección de la agricultura y ganadería tradicionales.',
        emphasizes: [
          'Importancia de la soberanía alimentaria y del empleo rural ligado al regadío eficiente.',
          'Crítica a políticas ambientales percibidas como desconectadas de la realidad del campo.',
        ],
        questionsOrNuances: [
          'Pregunta por la ejecución pendiente de embalses y conducciones proyectadas años atrás.',
          'Defiende incentivos fiscales reales para fijar familias en municipios pequeños.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Las auditorías de redes municipales revelan pérdidas de hasta el 25% del agua potable en municipios pequeños',
        summary:
          'Examina datos técnicos de eficiencia hídrica municipal, ayudas del PERTE del agua ejecutadas y el coste eléctrico real de las desaladoras.',
        emphasizes: [
          'Retraso en la actualización de infraestructuras locales de saneamiento y abastecimiento.',
          'Coste por metro cúbico de cada alternativa hídrica y subvenciones aplicadas.',
        ],
        questionsOrNuances: [
          'Pregunta por qué muchos ayuntamientos rurales quedaron fuera de las primeras ayudas por falta de técnicos.',
          'Analiza los criterios de reparto de ayudas por sequía.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La sobreexplotación de acuíferos y la falta de servicios básicos agravan la desigualdad en el territorio',
        summary:
          'Subraya la necesidad de garantizar el agua como bien público sostenible y de reforzar consultorios médicos, escuelas y fibra en pueblos.',
        emphasizes: [
          'Riesgo ecológico en humedales emblemáticos por cultivos intensivos fuera de ordenación.',
          'Importancia de apoyar a la pequeña explotación familiar frente a grandes fondos agrarios.',
        ],
        questionsOrNuances: [
          'Cuestiona seguir ampliando superficies de regadío en zonas con déficit hídrico estructural.',
          'Pide soluciones de transporte rural a demanda.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El sector agroalimentario calcula el impacto de la volatilidad hídrica sobre exportaciones y precios en origen',
        summary:
          'Analiza las consecuencias en la balanza comercial alimentaria, los seguros agrarios y la entrada de capital en agritech.',
        emphasizes: [
          'Peso exportador del agro español y sensibilidad de precios en aceite, fruta y hortalizas.',
          'Inversión privada en modernización de riego por goteo y energías renovables asociadas.',
        ],
        questionsOrNuances: [
          'Pregunta cómo afectará la revisión de tarifas hídricas a la rentabilidad de las cooperativas.',
          'Evalúa los retos de relevo generacional en el campo.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Los pueblos de la España interior exigen fiscalidad diferenciada, vivienda y conexión digital para frenar la sangría',
        summary:
          'Combina el seguimiento de la situación hidrológica con crónicas sobre medidas autonómicas contra la despoblación.',
        emphasizes: [
          'Ayudas al funcionamiento en provincias escasamente pobladas autorizadas por la UE.',
          'Necesidad de mantener cuarteles, sucursales y escuelas rurales abiertas.',
        ],
        questionsOrNuances: [
          'Pide consenso entre administraciones para sacar el agua del enfrentamiento partidista.',
          'Destaca proyectos locales de repoblación mediante teletrabajo.',
        ],
      },
    },
  },
];
