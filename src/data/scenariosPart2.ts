import {TopicBrief} from '../types/press';

export const JUSTICIA_SCENARIOS: TopicBrief[] = [
  {
    topicId: 'justicia',
    topicTitle: 'Funcionamiento del Poder Judicial, cargas de trabajo y reformas procesales',
    contextDeck:
      'El Consejo General del Poder Judicial, asociaciones judiciales y el Ministerio debaten medidas para reducir los tiempos de respuesta, cubrir vacantes y reformar el acceso a la carrera.',
    primarySources: [
      'Consejo General del Poder Judicial (Estadística Judicial)',
      'Ministerio de la Presidencia, Justicia y Relaciones con las Cortes',
      'Tribunal Supremo — Memoria Anual',
    ],
    convergences: [
      'Todos los diarios recogen los datos de congestión en determinadas salas, especialmente en lo social, mercantil y contencioso-administrativo.',
      'Coinciden en que la cobertura de plazas vacantes y la actualización tecnológica de los juzgados son urgentes.',
      'Recogen las distintas posturas de las asociaciones de jueces y fiscales sobre la organización judicial.',
    ],
    divergences: [
      'Discrepan frontalmente en el sistema de elección de vocales del CGPJ y en la reforma del acceso a la carrera judicial y fiscal.',
      'Un bloque defiende la reforma organizativa hacia tribunales de instancia para ganar eficiencia; otro alerta de posibles injerencias del Ejecutivo en la independencia o en las oposiciones.',
      'Difieren al valorar la atribución de la instrucción penal al Ministerio Fiscal frente al modelo tradicional de juez instructor.',
    ],
    criticalQuestions: [
      '¿Cuál es la tasa de resolución y pendencia por jurisdicción según la estadística oficial del CGPJ en los últimos cuatro trimestres?',
      '¿Qué salvaguardas concretas contemplan los anteproyectos respecto a la autonomía de jueces y fiscales?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'Justicia impulsa la modernización de la planta judicial y la reforma del acceso para agilizar un sistema saturado',
        summary:
          'Destaca la apuesta por los tribunales de instancia, la digitalización y la ampliación de becas para democratizar el acceso a la judicatura.',
        emphasizes: [
          'Reducción de tiempos de espera mediante especialización y medios alternativos de solución de conflictos.',
          'Convergencia del modelo español de instrucción penal con la mayoría de países europeos.',
        ],
        questionsOrNuances: [
          'Señala la dificultad de lograr consensos con asociaciones judiciales conservadoras.',
          'Subraya el reto presupuestario de crear nuevas plazas judiciales.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'Las asociaciones judiciales alertan contra cualquier cambio en oposiciones o instrucción sin reforzar la independencia',
        summary:
          'Pone en primer plano el malestar mayoritario en la carrera judicial ante reformas percibidas como un intento de control político.',
        emphasizes: [
          'Críticas de jueces y fiscales a modificar el Estatuto del Ministerio Fiscal sin garantizar autonomía respecto al Gobierno.',
          'Defensa de la oposición memorística anónima como garantía de mérito e igualdad.',
        ],
        questionsOrNuances: [
          'Pregunta por qué no se prioriza la inversión en nuevos juzgados antes que cambios estructurales polémicos.',
          'Recoge advertencias de la Comisión Europea sobre estándares de independencia judicial.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'La judicatura cierra filas en defensa de la separación de poderes y del sistema objetivo de oposiciones',
        summary:
          'Centra la cobertura en la preservación del Estado de derecho, el respeto a los fallos del Tribunal Supremo y el rechazo a presiones políticas.',
        emphasizes: [
          'Comunicados conjuntos de asociaciones judiciales exigiendo respeto institucional a las resoluciones.',
          'Riesgos de politización si se alteran las reglas de acceso o nombramientos discrecionales.',
        ],
        questionsOrNuances: [
          'Cuestiona los tiempos elegidos para impulsar reformas procesales en plena legislatura tensa.',
          'Reclama mayor dotación para el Tribunal Supremo.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'La estadística del CGPJ revela atascos superiores al año en miles de procedimientos pese al expediente digital',
        summary:
          'Examina las memorias de tribunales superiores, tasas de vacantes en provincias concretas y el rendimiento desigual de las aplicaciones informáticas.',
        emphasizes: [
          'Cientos de plazas sin titular cubiertas mediante jueces sustitutos.',
          'Falta de interoperabilidad plena entre sistemas informáticos judiciales de distintas comunidades.',
        ],
        questionsOrNuances: [
          'Pregunta cuánto presupuesto comprometido en digitalización ha mejorado realmente la agilidad procesal.',
          'Analiza el impacto de la nueva ley de eficiencia sobre abogados y procuradores.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'El colapso judicial y la falta de becas en el acceso perpetúan una justicia lenta y poco diversa socialmente',
        summary:
          'Conecta la reforma de la justicia con el derecho ciudadano a una tutela judicial rápida y con la necesidad de ampliar ayudas económicas a opositores.',
        emphasizes: [
          'Demoras graves en reclamaciones laborales, cláusulas abusivas y violencia de género.',
          'Barrera socioeconómica que supone preparar durante años oposiciones sin ingresos.',
        ],
        questionsOrNuances: [
          'Critica la resistencia corporativa de parte de la cúpula judicial a modernizar el CGPJ.',
          'Defiende reforzar los juzgados especializados y el turno de oficio.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La lentitud de la jurisdicción mercantil y contenciosa lastra la seguridad jurídica y la inversión empresarial',
        summary:
          'Evalúa el coste económico de los retrasos judiciales en concursos de acreedores, pleitos fiscales y recursos administrativos.',
        emphasizes: [
          'Tiempo medio de resolución en conflictos societarios y reclamaciones a la Administración.',
          'Impacto de la entrada en vigor de los requisitos previos de negociación extrajudicial.',
        ],
        questionsOrNuances: [
          'Pregunta si los métodos alternativos de solución de controversias ralentizarán aún más la admisión de demandas.',
          'Analiza la litigiosidad generada por impuestos y regulaciones sectoriales.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Jueces, abogados y procuradores reclaman más recursos humanos y consenso parlamentario para desatascar los tribunales',
        summary:
          'Recoge las demandas prácticas de los operadores jurídicos en todo el país, subrayando también la situación retributiva del turno de oficio.',
        emphasizes: [
          'Reivindicaciones de los colegios de la abogacía sobre baremos de justicia gratuita y mutualidades.',
          'Necesidad de pactos amplios para que las reformas procesales perduren.',
        ],
        questionsOrNuances: [
          'Señala el riesgo de conflictividad laboral con funcionarios de justicia si no se negocian cargas de trabajo.',
          'Destaca el papel equilibrador del Tribunal Constitucional y del Supremo.',
        ],
      },
    },
  },
  {
    topicId: 'justicia',
    topicTitle: 'Transparencia pública, contratación de emergencia y lucha contra la corrupción',
    contextDeck:
      'Los informes del Tribunal de Cuentas, la Oficina de Conflictos de Intereses y los juzgados de instrucción reavivan las propuestas sobre prevención y control de contratos públicos.',
    primarySources: [
      'Tribunal de Cuentas — Informes de fiscalización',
      'Consejo de Transparencia y Buen Gobierno',
      'Plataforma de Contratación del Sector Público',
    ],
    convergences: [
      'Todas las cabeceras destacan la necesidad de reforzar los mecanismos preventivos de control en la contratación pública y las adjudicaciones directas.',
      'Coinciden en señalar las resoluciones del Consejo de Transparencia sobre demoras o silencio administrativo ante peticiones ciudadanas.',
      'Recogen las recomendaciones del grupo GRECO del Consejo de Europa dirigidas a España.',
    ],
    divergences: [
      'Un bloque centra las informaciones en investigaciones concretas que afectan al entorno gubernamental; otro amplía el foco hacia contratos autonómicos y prácticas de distintos partidos.',
      'Discrepan sobre si los procedimientos de urgencia deben restringirse legalmente de forma drástica o flexibilizarse solo en emergencias declaradas.',
      'Varía la valoración sobre la independencia real de los órganos de control nombrados por mayoría parlamentaria.',
    ],
    criticalQuestions: [
      '¿Qué porcentaje del volumen total de contratación pública anual se adjudica mediante contratos menores o procedimientos negociados sin publicidad?',
      '¿Cuál es el grado de cumplimiento efectivo de las resoluciones firmes del Consejo de Transparencia por parte de los ministerios y autonomías?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'El debate sobre la regeneración democrática impulsa medidas de transparencia y reforma de la contratación',
        summary:
          'Enmarca los casos investigados en la necesidad de aprobar reformas legales de prevención, protección al informante y regulación de lobbies.',
        emphasizes: [
          'Despliegue de la Autoridad Independiente de Protección del Informante.',
          'Necesidad de respuestas firmes y homogéneas en todas las administraciones ante irregularidades.',
        ],
        questionsOrNuances: [
          'Advierte contra el uso asimétrico de las causas judiciales en el debate partidista.',
          'Señala la lentitud en la tramitación de leyes de transparencia pendientes.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Fiscalización / Investigación',
        headline: 'Las diligencias judiciales sobre contratos y mediaciones estrechan el cerco sobre los controles internos',
        summary:
          'Pone en portada los avances sumariales, informes policiales y contradicciones en las explicaciones sobre adjudicaciones públicas.',
        emphasizes: [
          'Fallo de los filtros administrativos previos antes de ejecutar pagos.',
          'Responsabilidades políticas derivadas de nombramientos y supervisión deficiente.',
        ],
        questionsOrNuances: [
          'Pregunta por qué no actuaron a tiempo los órganos internos de inspección.',
          'Exige explicaciones completas en sede parlamentaria y judicial.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Confrontación Política',
        headline: 'Los casos bajo investigación judicial cuestionan la eficacia de los mecanismos de control del gasto público',
        summary:
          'Subraya la gravedad institucional de las investigaciones abiertas y reclama asunción inmediata de responsabilidades políticas.',
        emphasizes: [
          'Uso intensivo de procedimientos de emergencia y contratos menores sin concurrencia.',
          'Demanda de independencia absoluta para las unidades policiales y judiciales investigadoras.',
        ],
        questionsOrNuances: [
          'Cuestiona la transparencia de las empresas públicas y fundaciones dependientes.',
          'Pide reforzar el papel fiscalizador del Tribunal de Cuentas.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'El rastro documental en la Plataforma de Contratación expone redes de contratos menores fraccionados',
        summary:
          'Publica cruces de datos de expedientes, sociedades adjudicatarias, fechas de constitución y resoluciones de transparencia recurridas.',
        emphasizes: [
          'Patrones repetidos de adjudicaciones justo por debajo del umbral legal de licitación abierta.',
          'Recursos contenciosos interpuestos por la Administración contra resoluciones de transparencia.',
        ],
        questionsOrNuances: [
          'Pregunta cuántos cargos eventuales y asesores carecen de registro público detallado de agenda.',
          'Investiga la trazabilidad de subvenciones nominativas.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La corrupción en contratos públicos desvía recursos esenciales y exige controles ciudadanos en todas las administraciones',
        summary:
          'Aborda el coste social de la corrupción transversal, reclamando listas negras de empresas sancionadas y mayor transparencia en autonomías y municipios.',
        emphasizes: [
          'Propuestas para prohibir contratar con la Administración a empresas condenadas por prácticas ilícitas.',
          'Seguimiento simultáneo de causas que afectan a gobiernos estatales y autonómicos.',
        ],
        questionsOrNuances: [
          'Critica las campañas de descrédito contra periodistas o denunciantes de irregularidades.',
          'Pide ampliar los medios de las fiscalías especializadas.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La litigiosidad en contratos públicos y la lentitud de la Administración penalizan a las empresas cumplidoras',
        summary:
          'Examina el impacto en la libre competencia de los concursos con pliegos a medida y la inseguridad de los proveedores honestos.',
        emphasizes: [
          'Necesidad de tribunales administrativos de recursos contractuales ágiles y bien dotados.',
          'Coste reputacional de España en índices internacionales de percepción de la corrupción.',
        ],
        questionsOrNuances: [
          'Pregunta si el exceso de burocracia en concursos ordinarios acaba paradójicamente incentivando atajos excepcionales.',
          'Analiza los programas de cumplimiento normativo (compliance) en empresas públicas.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Dinámica de Poder / Partidos',
        headline: 'El goteo de sumarios judiciales domina la agenda política y erosiona la confianza en las instituciones',
        summary:
          'Relata el impacto político de las informaciones judiciales en el Congreso y en la opinión pública, apelando a la ejemplaridad.',
        emphasizes: [
          'Desgaste de la credibilidad institucional ante la reiteración de escándalos en distintas épocas.',
          'Petición de respetar los tiempos de la justicia sin juicios paralelos pero con claridad política.',
        ],
        questionsOrNuances: [
          'Señala la urgencia de aplicar las recomendaciones pendientes del GRECO.',
          'Destaca la relevancia de preservar la presunción de inocencia junto a la rendición de cuentas.',
        ],
      },
    },
  },
  {
    topicId: 'justicia',
    topicTitle: 'Regulación digital, ciberseguridad y protección de menores en red',
    contextDeck:
      'España adapta la normativa de servicios digitales y verificación de edad mientras aumentan los incidentes de ciberseguridad contra organismos públicos y empresas.',
    primarySources: [
      'Agencia Española de Protección de Datos (AEPD)',
      'Instituto Nacional de Ciberseguridad (INCIBE)',
      'CNMC — Supervisión de Servicios Digitales',
    ],
    convergences: [
      'Todas las cabeceras alertan del incremento sostenido de ciberataques mediante ransomware y fraudes financieros digitales en España.',
      'Coinciden en la necesidad de proteger eficazmente a los menores frente a contenidos nocivos y adicción en redes sociales.',
      'Recogen las advertencias técnicas sobre privacidad en los sistemas de verificación de edad.',
    ],
    divergences: [
      'Chocan en el equilibrio entre control administrativo de plataformas y riesgo de censura o vigilancia estatal sobre la identidad digital.',
      'Difieren en si la responsabilidad principal recae en las grandes tecnológicas mediante filtros automáticos o en la educación y control parental.',
      'Varía el foco sobre la preparación de los sistemas informáticos públicos tras filtraciones recientes.',
    ],
    criticalQuestions: [
      '¿Cómo garantiza el sistema de verificación de edad propuesto el anonimato y la minimización de datos exigidos por la AEPD?',
      '¿Qué porcentaje de pymes y ayuntamientos españoles dispone de protocolos básicos auditados frente a ransomware?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'España impulsa la protección digital del menor y refuerza el marco europeo contra la desinformación y el fraude',
        summary:
          'Destaca la iniciativa legislativa en coordinación con la Ley de Servicios Digitales europea y las herramientas de privacidad desarrolladas con la AEPD.',
        emphasizes: [
          'Consenso social y sanitario sobre los riesgos de exposición temprana a pantallas y redes.',
          'Capacidad sancionadora de la CNMC como coordinador nacional de servicios digitales.',
        ],
        questionsOrNuances: [
          'Admite el desafío técnico de hacer cumplir la verificación de edad sin crear bases de datos vulnerables.',
          'Subraya la necesidad de cooperación internacional frente a plataformas extracomunitarias.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Fiscalización / Investigación',
        headline: 'Las brechas de seguridad en organismos públicos exponen datos sensibles y evidencian falta de inversión crítica',
        summary:
          'Prioriza los incidentes recientes de ciberataques en ayuntamientos, universidades y empresas, cuestionando la robustez de la infraestructura digital.',
        emphasizes: [
          'Venta de bases de datos robadas en foros clandestinos y fallos en contraseñas o parches.',
          'Debate sobre los límites de la regulación sobre contenidos digitales y libertad de expresión.',
        ],
        questionsOrNuances: [
          'Pregunta cuántos millones de datos ciudadanos han resultado expuestos en el último año.',
          'Exige auditorías obligatorias reales en administraciones locales.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'Familias y juristas piden herramientas eficaces para proteger a los menores sin entregar el control de la red al Estado',
        summary:
          'Avala las medidas de protección infantil y prohibición de acceso temprano, pero recela de cualquier mecanismo que permita censura administrativa.',
        emphasizes: [
          'Papel insustituible de padres y colegios en la educación digital.',
          'Defensa de la libertad de opinión en internet frente a definiciones ambiguas de desinformación.',
        ],
        questionsOrNuances: [
          'Cuestiona quién definirá qué contenidos son ilícitos o manipuladores.',
          'Reclama mayor persecución penal contra el acoso y la pornografía no consentida.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los informes del INCIBE y del CCN-CERT muestran un repunte de ataques a pymes y servicios municipales',
        summary:
          'Detalla estadísticas oficiales de incidentes gestionados, tiempos medios de detección y contratos de ciberseguridad adjudicados por el sector público.',
        emphasizes: [
          'Aumento interanual de fraudes por suplantación de identidad y secuestro de servidores.',
          'Escasez de especialistas certificados en ciberseguridad en las plantillas públicas.',
        ],
        questionsOrNuances: [
          'Pregunta si la credencial digital de edad podría generar un punto único de fallo.',
          'Analiza la eficacia real de las multas impuestas por protección de datos.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Los algoritmos de las grandes plataformas y la brecha digital exigen más derechos laborales y protección infantil',
        summary:
          'Pone el foco en la responsabilidad de las corporaciones tecnológicas sobre el diseño adictivo, la privacidad y la transparencia algorítmica.',
        emphasizes: [
          'Impacto en la salud mental adolescente de sistemas de recomendación opacos.',
          'Defensa de derechos digitales y prohibición de perfiles comerciales dirigidos a menores.',
        ],
        questionsOrNuances: [
          'Advierte contra el uso de datos biométricos por parte de empresas privadas.',
          'Pide que la verificación de edad no excluya a personas sin acceso sencillo a certificados digitales.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Las empresas disparan su gasto en ciberseguridad y seguros ante las nuevas exigencias de la directiva NIS2',
        summary:
          'Analiza la carga de cumplimiento regulatorio para sectores estratégicos, banca, energía y telecomunicaciones tras las directivas europeas.',
        emphasizes: [
          'Régimen de sanciones económicas para directivos y empresas que incumplan protocolos de resiliencia.',
          'Crecimiento del mercado español de ciberseguridad y centros de operaciones (SOC).',
        ],
        questionsOrNuances: [
          'Pregunta cómo asumirán las pymes proveedoras el coste de certificarse.',
          'Evalúa las tensiones entre Bruselas y las grandes tecnológicas estadounidenses.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Centros educativos y fuerzas de seguridad refuerzan las alertas ante el ciberacoso y las estafas por mensajería',
        summary:
          'Ofrece un enfoque práctico centrado en prevención ciudadana, denuncias en comisarías y acuerdos educativos autonómicos sobre uso del móvil.',
        emphasizes: [
          'Restricción de teléfonos móviles en aulas de primaria y secundaria en la mayoría de regiones.',
          'Campañas policiales frente a fraudes bancarios mediante SMS y llamadas suplantadas.',
        ],
        questionsOrNuances: [
          'Destaca la importancia de agilizar las denuncias telemáticas por fraude.',
          'Recoge la opinión de pediatras y psicólogos escolares.',
        ],
      },
    },
  },
  {
    topicId: 'justicia',
    topicTitle: 'Seguridad ciudadana, multirreincidencia y recursos policiales',
    contextDeck:
      'El balance trimestral de criminalidad del Ministerio del Interior reabre el debate sobre el Código Penal ante hurtos multirreincidentes y la dotación de medios policiales.',
    primarySources: [
      'Ministerio del Interior — Balance de Criminalidad',
      'Fiscalía General del Estado — Memoria Anual',
      'INE — Estadística de Condenados',
    ],
    convergences: [
      'Todos los medios citan las cifras trimestrales de criminalidad convencional y cibercriminalidad publicadas por Interior.',
      'Coinciden en que los delitos informáticos impulsan el total de infracciones mientras determinados delitos graves muestran estabilidad o variaciones locales.',
      'Recogen las demandas de ayuntamientos y sindicatos policiales para agilizar los juicios rápidos contra la multirreincidencia.',
    ],
    divergences: [
      'Un bloque subraya que España sigue entre los países más seguros de Europa y atribuye el repunte estadístico a la ciberdelincuencia; otro destaca el aumento de hurtos, agresiones y sensación de inseguridad en barrios.',
      'Discrepan en la eficacia de endurecer penas de prisión frente a medidas de prevención social y dotación de juzgados de guardia.',
      'Difieren sobre las condiciones de jubilación, equiparación salarial y catalogación como profesión de riesgo de Policía y Guardia Civil.',
    ],
    criticalQuestions: [
      '¿Cómo evolucionan por separado la criminalidad convencional y la cibercriminalidad en los balances oficiales de los últimos cinco años?',
      '¿Qué cuello de botella impide ejecutar con mayor rapidez las sentencias en juzgados de lo penal por hurtos reiterados?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'La cibercriminalidad impulsa la estadística delictiva mientras España mantiene tasas bajas de delitos graves',
        summary:
          'Contextualiza el balance de Interior comparando las tasas de homicidios y robos con violencia con la media europea y destacando el reto de las estafas online.',
        emphasizes: [
          'Descenso o contención en delitos violentos de mayor gravedad en perspectiva histórica.',
          'Necesidad de más medios judiciales para aplicar eficazmente las reformas ya vigentes.',
        ],
        questionsOrNuances: [
          'Señala el debate técnico sobre si endurecer más el Código Penal resuelve el atasco en juicios rápidos.',
          'Recoge la preocupación de alcaldes de grandes ciudades por focos concretos de hurtos.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'El auge de la multirreincidencia y las agresiones tensiona barrios clave mientras los sindicatos exigen más medios',
        summary:
          'Pone el acento en las zonas urbanas con mayor presión delictiva, las quejas de comerciantes y las demandas pendientes de las fuerzas de seguridad.',
        emphasizes: [
          'Aumento de delitos en puntos turísticos, transporte y áreas metropolitanas.',
          'Reclamación sindical para reconocer a policías y guardias civiles como profesión de riesgo.',
        ],
        questionsOrNuances: [
          'Cuestiona el despliegue operativo y la coordinación entre cuerpos estatales, autonómicos y locales.',
          'Pregunta por la ejecución de las medidas aprobadas contra el narcotráfico en el sur.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'Alcaldes y fuerzas de seguridad piden reformas penales más firmes para frenar la sensación de impunidad',
        summary:
          'Enfoca la seguridad como pilar básico de libertad ciudadana y respalda las reivindicaciones salariales y de autoridad jurídica de los agentes.',
        emphasizes: [
          'Petición de penas acumulativas efectivas para quienes acumulan decenas de detenciones.',
          'Respaldo legal a los agentes frente a agresiones en acto de servicio.',
        ],
        questionsOrNuances: [
          'Critica la lentitud parlamentaria para tramitar iniciativas consensuadas por ayuntamientos.',
          'Exige reforzar plantillas en zonas rurales y fronterizas.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los datos desagregados por municipios revelan fuertes contrastes en criminalidad violenta y cobertura de plantillas',
        summary:
          'Analiza las tablas detalladas de Interior municipio por municipio, el déficit de efectivos en determinadas comandancias y el colapso en juzgados.',
        emphasizes: [
          'Porcentaje de delitos esclarecidos frente a infracciones denunciadas sin autor conocido.',
          'Aumento de agresiones a agentes y bajas en unidades operativas.',
        ],
        questionsOrNuances: [
          'Pregunta por la renovación de flotas, chalecos y equipamiento en comisarías.',
          'Contrasta las cifras de criminalidad registradas con las de encuestas de victimización.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Expertos en criminología piden más prevención social y juzgados frente al punitivismo ante los hurtos reiterados',
        summary:
          'Recoge la opinión de juristas y sociólogos que advierten sobre los límites del endurecimiento penal sin abordar exclusión, adicciones y medios judiciales.',
        emphasizes: [
          'Diferencia entre percepción de inseguridad amplificada y evolución real de la delincuencia grave.',
          'Importancia de reforzar la policía de proximidad y los servicios sociales municipales.',
        ],
        questionsOrNuances: [
          'Critica los discursos que vinculan automáticamente inmigración y delincuencia sin rigor estadístico.',
          'Señala el déficit de recursos contra la violencia machista.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Comercio y restauración cuantifican las pérdidas por hurtos reiterados y reclaman mayor agilidad sancionadora',
        summary:
          'Evalúa el impacto económico de la pequeña delincuencia sobre el comercio urbano, los seguros y los costes de seguridad privada.',
        emphasizes: [
          'Inversión creciente de comercios y centros logísticos en vigilancia privada y tecnología anti-hurto.',
          'Coste millonario de las estafas informáticas sufridas por empresas y particulares.',
        ],
        questionsOrNuances: [
          'Pregunta por el impacto presupuestario de equiparar condiciones de jubilación en las fuerzas estatales.',
          'Analiza la coordinación entre seguridad privada y cuerpos públicos.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las ciudades refuerzan dispositivos de calle mientras crece el consenso municipal para reformar la multirreincidencia',
        summary:
          'Muestra cómo consistorios de distinto signo político coinciden en reclamar reformas ágiles contra los hurtos profesionales y más agentes locales.',
        emphasizes: [
          'Colaboración entre ayuntamientos como Madrid y Barcelona en la demanda de cambios legales.',
          'Operativos policiales específicos en intercambiadores de transporte y zonas comerciales.',
        ],
        questionsOrNuances: [
          'Destaca la importancia de reforzar los juzgados de guardia para que los juicios rápidos no se dilaten meses.',
          'Recoge el testimonio de asociaciones vecinales.',
        ],
      },
    },
  },
];

export const SOCIEDAD_SCENARIOS: TopicBrief[] = [
  {
    topicId: 'sociedad',
    topicTitle: 'Situación de la Sanidad pública, listas de espera y Atención Primaria',
    contextDeck:
      'Los últimos datos del Sistema de Información sobre Listas de Espera reabren el debate entre inversión en Primaria, conciertos sanitarios y déficit de médicos de familia.',
    primarySources: [
      'Ministerio de Sanidad — Sistema de Información sobre Listas de Espera (SISLE)',
      'Consejerías de Sanidad autonómicas',
      'Organización Médica Colegial (OMC)',
    ],
    convergences: [
      'Todos los periódicos recogen el elevado volumen de pacientes en espera para cirugía no urgente y primeras consultas de especialista.',
      'Coinciden en que la jubilación masiva de médicos de Atención Primaria y el desgaste tras la pandemia tensionan los centros de salud.',
      'Señalan que existe una notable desigualdad en los tiempos medios de espera entre comunidades autónomas.',
    ],
    divergences: [
      'Un bloque atribuye el deterioro a recortes históricos y al desvío de recursos hacia la sanidad privada concertada; otro responsabiliza a la rigidez del modelo estatutario y a la falta de planificación estatal de plazas MIR.',
      'Discrepan sobre el impacto positivo o negativo del crecimiento de los seguros privados de salud como alivio o síntoma de desgaste del sistema público.',
      'Chocan al valorar la reforma del Estatuto Marco y las condiciones de guardias médicas.',
    ],
    criticalQuestions: [
      '¿Qué porcentaje del gasto sanitario público de cada comunidad se destina actualmente a Atención Primaria frente al ámbito hospitalario y farmacéutico?',
      '¿Cuántas plazas MIR de Medicina Familiar quedan desiertas o no se cubren y qué reformas de incentivación rural se aplican?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Las listas de espera marcan máximos mientras Sanidad y comunidades buscan salidas al déficit de médicos de familia',
        summary:
          'Pone el foco en la necesidad de blindar la Atención Primaria, reforzar la financiación finalista y homogeneizar la medición de demoras entre regiones.',
        emphasizes: [
          'Aumento sostenido de los seguros privados en las ciudades donde la espera pública es mayor.',
          'Propuestas para mejorar las condiciones de guardias de 24 horas y retener talento.',
        ],
        questionsOrNuances: [
          'Señala la dificultad de coordinar 17 servicios regionales de salud con competencias plenas.',
          'Advierte sobre las diferencias de criterio contable en las listas autonómicas.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Fiscalización / Investigación',
        headline: 'La falta de médicos en Primaria y las demoras quirúrgicas ponen a prueba la capacidad de respuesta del sistema',
        summary:
          'Analiza la escasez estructural de facultativos, las fugas al extranjero por diferencias salariales y las tensiones sindicales por el Estatuto Marco.',
        emphasizes: [
          'Malestar de los sindicatos médicos por la sobrecarga de agendas y la falta de reconocimiento específico.',
          'Pérdida de profesionales jóvenes formados en España hacia países europeos.',
        ],
        questionsOrNuances: [
          'Cuestiona que el Ministerio no amplíe con mayor agilidad la homologación y oferta de especialidades deficitarias.',
          'Compara resultados de gestión entre comunidades con modelos distintos.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Institucional / Gobernanza',
        headline: 'El consenso sanitario reclama más plazas MIR y cooperación público-privada sin prejuicios ideológicos',
        summary:
          'Defiende aprovechar toda la capacidad instalada —pública y concertada— para reducir las esperas de los pacientes y critica los vetos ideológicos.',
        emphasizes: [
          'Utilidad de los conciertos quirúrgicos puntuales para aliviar demoras graves.',
          'Crítica a las reformas laborales sanitarias impulsadas sin acuerdo previo con los colegios médicos.',
        ],
        questionsOrNuances: [
          'Pregunta por la gestión centralizada de las listas de acceso a facultades y formación especializada.',
          'Destaca el papel de la sanidad privada descargando consultas del sistema público.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los registros autonómicos revelan diferencias de más de cien días en espera quirúrgica según el código postal',
        summary:
          'Contrasta las cifras oficiales enviadas al Ministerio con los datos brutos de demoras estructurales y no estructurales en los hospitales.',
        emphasizes: [
          'Pacientes en espera de prueba diagnóstica que no siempre computan en las estadísticas principales.',
          'Coste de las horas extraordinarias (peonadas) frente a conciertos externos.',
        ],
        questionsOrNuances: [
          'Pregunta por el grado real de cumplimiento de los decretos autonómicos de garantía de plazos.',
          'Audita el gasto farmacéutico hospitalario creciente.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Mareas blancas y profesionales exigen blindar la sanidad pública frente al avance de la privatización y los seguros',
        summary:
          'Sitúa el eje en la defensa del modelo público universal, denunciando el trasvase presupuestario a grupos privados y la precariedad en centros de salud.',
        emphasizes: [
          'Riesgo de un sistema dual: sanidad privada para quien pueda pagarla y pública saturada.',
          'Importancia de reforzar la salud mental pública y la salud bucodental.',
        ],
        questionsOrNuances: [
          'Critica las rebajas fiscales autonómicas mientras faltan plantillas en ambulatorios.',
          'Exige auditorías estrictas sobre los beneficios de concesiones sanitarias.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El gasto sanitario y farmacéutico presiona las cuentas autonómicas en plena expansión del seguro privado',
        summary:
          'Examina la sostenibilidad financiera de la sanidad española ante el envejecimiento, los nuevos tratamientos oncológicos y la crisis de Muface.',
        emphasizes: [
          'Impacto económico del absentismo por bajas médicas prolongadas vinculadas a demoras sanitarias.',
          'Negociación de primas y costes en el mutualismo administrativo.',
        ],
        questionsOrNuances: [
          'Pregunta cómo financiarán las comunidades el aumento del gasto sanitario sin romper objetivos fiscales.',
          'Analiza las inversiones en biotecnología y equipamiento hospitalario.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las comunidades activan planes de choque y telemedicina para contener las esperas y fidelizar médicos en el medio rural',
        summary:
          'Recoge las iniciativas territoriales para cubrir plazas de difícil cobertura, ampliar horarios de quirófano y reforzar la atención a crónicos.',
        emphasizes: [
          'Incentivos económicos y de puntuación en oposiciones para médicos en zonas rurales.',
          'Incorporación de herramientas digitales para reducir burocracia en las consultas de cabecera.',
        ],
        questionsOrNuances: [
          'Pide sacar la sanidad del enfrentamiento partidista en el Consejo Interterritorial.',
          'Subraya el reconocimiento ciudadano a la vocación de médicos y enfermeras.',
        ],
      },
    },
  },
  {
    topicId: 'sociedad',
    topicTitle: 'Transición energética, redes eléctricas y futuro nuclear',
    contextDeck:
      'El despliegue récord de renovables, los episodios de precios cero en horas solares y el calendario de cierre nuclear reabren la discusión sobre seguridad de suministro y costes.',
    primarySources: [
      'Red Eléctrica de España (REE — Datos del sistema)',
      'Ministerio para la Transición Ecológica (PNIEC)',
      'Comisión Nacional de los Mercados y la Competencia (CNMC)',
    ],
    convergences: [
      'Todas las cabeceras destacan que España supera ya la mitad de su generación eléctrica anual con fuentes renovables, abaratando el mercado mayorista frente al resto de Europa.',
      'Coinciden en que la red de transporte y distribución eléctrica requiere inversiones urgentes para conectar nueva industria y centros de datos.',
      'Recogen la necesidad de acelerar el almacenamiento mediante baterías y bombeo hidroeléctrico.',
    ],
    divergences: [
      'Chocan en el calendario de cierre del parque nuclear: defensa del acuerdo de cierre escalonado con renovables y almacenamiento frente a petición de ampliar la vida útil para garantizar energía firme sin emisiones.',
      'Discrepan en la fiscalidad aplicada a las energéticas y a los residuos nucleares (tasa Enresa).',
      'Difieren sobre el ritmo de electrificación real del transporte y de la industria pesada.',
    ],
    criticalQuestions: [
      '¿Cuántos gigavatios de demanda industrial y centros de datos esperan actualmente permiso de acceso y conexión en la red eléctrica?',
      '¿Qué impacto tiene en el recibo final de un hogar la parte fija de peajes, cargos e impuestos frente al coste puro de la energía?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'España consolida la ventaja competitiva de sus renovables y acelera el plan para reforzar redes y almacenamiento',
        summary:
          'Enfoca la transición energética como oportunidad industrial histórica capaz de atraer fábricas limpias con electricidad más barata que Centroeuropa.',
        emphasizes: [
          'Objetivos revisados del PNIEC para liderar la descarbonización europea.',
          'Mantenimiento del calendario pactado con las propias empresas para el cierre ordenado nuclear.',
        ],
        questionsOrNuances: [
          'Reconoce el cuello de botella en los permisos de red y en los conflictos locales por macroplantas.',
          'Señala la lentitud en el despliegue del coche eléctrico en España.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'La industria advierte del riesgo de perder firmeza eléctrica si se mantiene el apagón nuclear sin almacenamiento suficiente',
        summary:
          'Pone el acento en los argumentos técnicos de ingenieros e industrias electrointensivas favorables a prorrogar centrales nucleares operativas.',
        emphasizes: [
          'Comparación con el giro pronuclear en Francia, Bélgica o Suecia dentro de la UE.',
          'Impacto del incremento de la tasa Enresa sobre la viabilidad económica de las plantas.',
        ],
        questionsOrNuances: [
          'Cuestiona si el almacenamiento con baterías estará desplegado a tiempo para sustituir potencia base.',
          'Subraya el peso de los impuestos recuperados en la factura de la luz.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Confrontación Política',
        headline: 'Expertos e industria piden revisar el cierre nuclear por razones de soberanía energética y estabilidad de precios',
        summary:
          'Critica que razones ideológicas pesen más que criterios técnicos de seguridad de suministro y competitividad industrial.',
        emphasizes: [
          'Dependencia de ciclos combinados de gas cuando cae el recurso eólico o solar.',
          'Importancia económica de las centrales para las comarcas donde están ubicadas.',
        ],
        questionsOrNuances: [
          'Pregunta quién asumirá el coste de respaldo gasístico si faltan centrales nucleares.',
          'Critica los cambios fiscales retroactivos al sector energético.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los vertidos de energía solar por falta de red y demanda exponen el desfase en la planificación eléctrica',
        summary:
          'Examina los datos de restricciones técnicas en Red Eléctrica, los precios negativos en horas punta y los límites legales a la inversión en redes.',
        emphasizes: [
          'Megavatios renovables desaprovechados (curtailments) por congestión en nudos de transporte.',
          'Coste creciente de los servicios de ajuste para estabilizar la frecuencia de la red.',
        ],
        questionsOrNuances: [
          'Pregunta por qué no se eleva el tope regulatorio de inversión en distribución eléctrica.',
          'Analiza la tasa real de ejecución de proyectos de hidrógeno verde.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'Las renovables abaratan la luz mayorista mientras las organizaciones sociales piden ampliar el bono social eléctrico',
        summary:
          'Destaca el beneficio climático y de precios del despliegue verde, exigiendo proteger a hogares vulnerables y ordenar territorialmente las plantas.',
        emphasizes: [
          'Ahorro en importaciones de combustibles fósiles y reducción de emisiones del sector eléctrico.',
          'Impulso al autoconsumo compartido y a las comunidades energéticas ciudadanas.',
        ],
        questionsOrNuances: [
          'Advierte sobre el impacto paisajístico y agrario de grandes proyectos fotovoltaicos mal planificados.',
          'Defiende mantener el calendario de cierre nuclear por seguridad y gestión de residuos.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Las eléctricas condicionan miles de millones en redes a la revisión de la retribución regulatoria de la CNMC',
        summary:
          'Analiza el pulso financiero entre las grandes energéticas, la CNMC y Hacienda por la rentabilidad regulada de las redes y la fiscalidad sectorial.',
        emphasizes: [
          'Necesidad de ofrecer una tasa de retribución competitiva frente a otros países europeos para atraer capital.',
          'Saturación de solicitudes de conexión para centros de datos e industria.',
        ],
        questionsOrNuances: [
          'Evalúa la pérdida de valor en acuerdos de compraventa de energía (PPA) por las horas a precio cero.',
          'Pregunta si el impuesto energético frenó inversiones industriales en España.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Comunidades productoras piden compensaciones locales y empleo industrial ligado a la transición energética',
        summary:
          'Recoge el debate territorial en regiones con fuerte peso eólico, solar o nuclear sobre cómo retener el valor añadido en el propio territorio.',
        emphasizes: [
          'Reivindicación de municipios rurales que acogen instalaciones pero reclaman industria y subestaciones cercanas.',
          'Inquietud en zonas nucleares por los planes de transición justa.',
        ],
        questionsOrNuances: [
          'Destaca la necesidad de estabilidad regulatoria para no ahuyentar proyectos industriales.',
          'Recoge el debate práctico de los hogares sobre bombas de calor y rehabilitación.',
        ],
      },
    },
  },
  {
    topicId: 'sociedad',
    topicTitle: 'Educación, resultados escolares, FP y universidad',
    contextDeck:
      'Los informes comparativos de competencias educativas, la implantación de la Formación Profesional dual y el acceso universitario reabren el debate pedagógico en España.',
    primarySources: [
      'Ministerio de Educación, Formación Profesional y Deportes',
      'OCDE — Informes PISA y Panorama de la Educación',
      'Ministerio de Ciencia, Innovación y Universidades',
    ],
    convergences: [
      'Todos los diarios recogen las diferencias notables de rendimiento académico y abandono escolar temprano entre comunidades autónomas.',
      'Coinciden en valorar positivamente el fuerte crecimiento de matriculaciones e inserción laboral en Formación Profesional.',
      'Señalan la preocupación compartida por los resultados en comprensión lectora y matemáticas respecto a décadas anteriores.',
    ],
    divergences: [
      'Discrepan sobre las causas de los resultados: exceso de burocracia y pérdida de exigencia memorística/repetición frente a ratios altas, falta de inversión y segregación socioeconómica.',
      'Chocan en la evaluación de la nueva EBAU/PAU homogénea vs. adaptada por comunidades y en el auge de universidades privadas.',
      'Difieren en el peso de la enseñanza concertada dentro del sistema financiado con fondos públicos.',
    ],
    criticalQuestions: [
      '¿Qué proporción del abandono escolar temprano varía por nivel socioeconómico y por comunidad autónoma dentro del mismo sistema legal?',
      '¿Cuántas empresas pymes participan realmente en la nueva FP dual intensiva frente a la disponibilidad de tutores?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Institucional / Gobernanza',
        headline: 'La FP alcanza cifras récord de alumnado mientras el sistema educativo busca reducir las brechas territoriales',
        summary:
          'Destaca el impulso a la Formación Profesional, los programas de refuerzo en matemáticas y lectura y el debate sobre la calidad universitaria.',
        emphasizes: [
          'Alta tasa de empleabilidad en ciclos de tecnología, sanidad e industria.',
          'Importancia de políticas compensatorias en centros con mayor vulnerabilidad social.',
        ],
        questionsOrNuances: [
          'Señala el desafío de encontrar empresas suficientes para prácticas de FP en todas las comarcas.',
          'Analiza los requisitos de calidad para autorizar nuevas universidades privadas.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Confrontación Política',
        headline: 'El descenso en competencias básicas y las diferencias en la Selectividad reavivan la petición de un pacto educativo',
        summary:
          'Pone el acento en la pérdida de nivel en materias troncales, la desigualdad de criterios entre pruebas de acceso regionales y la sobrecarga burocrática docente.',
        emphasizes: [
          'Críticas de profesores a leyes educativas sucesivas por limitar el criterio de promoción y el esfuerzo.',
          'Diferencias de notas medias entre comunidades en el acceso a carreras con nota de corte.',
        ],
        questionsOrNuances: [
          'Cuestiona que las sucesivas reformas sin consenso mejoren la calidad real del aprendizaje.',
          'Recoge el debate sobre el uso de pantallas y tabletas en primaria.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'Docentes y familias reclaman recuperar la cultura del esfuerzo, la autoridad del profesor y una prueba única nacional',
        summary:
          'Defiende la libertad de elección de centro, la estabilidad de la escuela concertada y estándares curriculares comunes claros en toda España.',
        emphasizes: [
          'Preocupación por la pérdida de peso de las humanidades y la comprensión lectora profunda.',
          'Defensa de la autonomía universitaria y de la iniciativa privada educativa frente a trabas normativas.',
        ],
        questionsOrNuances: [
          'Critica las trabas burocráticas a la creación de nuevos campus universitarios.',
          'Pide evaluar objetivamente la eficacia de las pedagogías por competencias.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'Los datos de gasto por alumno y abandono escolar evidencian que invertir más no basta sin evaluar resultados',
        summary:
          'Cruza presupuestos educativos autonómicos, tasas de absentismo docente, alumnos por aula y resultados PISA desagregados por región.',
        emphasizes: [
          'Comunidades con menor gasto relativo por alumno que obtienen mejores puntuaciones medias.',
          'Falta de evaluaciones externas homogéneas y públicas por centro.',
        ],
        questionsOrNuances: [
          'Pregunta qué seguimiento real tienen los programas millonarios de refuerzo educativo.',
          'Analiza la precariedad en la figura del profesor asociado universitario.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La segregación escolar y la infrafinanciación de la universidad pública lastran la igualdad de oportunidades',
        summary:
          'Sitúa el foco en la escuela pública como ascensor social, reclamando bajar ratios, más orientadores y frenar la proliferación de privadas sin investigación.',
        emphasizes: [
          'Concentración de alumnado vulnerable en centros públicos frente a barreras ocultas en otros modelos.',
          'Reclamación de financiación estable para universidades públicas que evite subidas de tasas.',
        ],
        questionsOrNuances: [
          'Critica las deducciones fiscales autonómicas a gastos educativos privados.',
          'Pide consolidar las plazas de profesores interinos.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'Las empresas sufren un desajuste de perfiles técnicos pese al auge de la FP y la demanda en ingenierías',
        summary:
          'Analiza la brecha entre la oferta universitaria tradicional y las vacantes cualificadas que reclama el tejido productivo español.',
        emphasizes: [
          'Escasez de titulados en STEM, oficios industriales avanzados y ciberseguridad.',
          'Impacto económico de los costes administrativos de la nueva ley de FP sobre pymes.',
        ],
        questionsOrNuances: [
          'Pregunta por la transferencia real de conocimiento entre universidad y empresa en España.',
          'Evalúa la competencia internacional por atraer estudiantes de posgrado.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Las comunidades ajustan el despliegue de la nueva Selectividad y refuerzan la lectura y las matemáticas en primaria',
        summary:
          'Detalla cómo se aplican en las aulas los planes de refuerzo, la vuelta al libro de texto frente al exceso digital y la coordinación entre consejerías.',
        emphasizes: [
          'Esfuerzo de los equipos directivos por adaptar horarios y pruebas.',
          'Demanda de estabilidad normativa que permita planificar a medio plazo.',
        ],
        questionsOrNuances: [
          'Destaca las experiencias autonómicas que logran contener el abandono escolar.',
          'Recoge la preocupación por la convivencia en los institutos.',
        ],
      },
    },
  },
  {
    topicId: 'sociedad',
    topicTitle: 'Salud mental, conciliación laboral y desigualdad generacional',
    contextDeck:
      'El aumento de bajas por salud mental, los datos de natalidad en mínimos históricos y el debate sobre permisos de cuidados marcan la agenda social.',
    primarySources: [
      'INE — Movimiento Natural de la Población y Encuesta de Condiciones de Vida',
      'Ministerio de Sanidad — Comisionado de Salud Mental',
      'Seguridad Social — Estadística de Incapacidad Temporal',
    ],
    convergences: [
      'Todas las cabeceras informan sobre el mínimo histórico de nacimientos en España y el aumento de la edad media a la maternidad.',
      'Coinciden en señalar el repunte de consultas y bajas laborales vinculadas a ansiedad, depresión y malestar psíquico.',
      'Recogen el impacto del coste de la vida y la vivienda sobre la emancipación juvenil.',
    ],
    divergences: [
      'Unos priorizan la ampliación de permisos laborales retribuidos, escuelas infantiles gratuitas y plantillas públicas de psicología; otros destacan las deducciones fiscales a familias numerosas y medidas de flexibilidad empresarial.',
      'Difieren en el análisis del auge de bajas laborales por salud mental: visibilización de un problema oculto frente a necesidad de mejorar el control y la gestión médica.',
      'Chocan al valorar cuánto influyen los factores económicos frente a los cambios culturales en la caída de la natalidad.',
    ],
    criticalQuestions: [
      '¿Cuál es la ratio actual de psicólogos clínicos y psiquiatras por cada 100.000 habitantes en el Sistema Nacional de Salud frente a la media de la UE?',
      '¿Qué impacto presupuestario y laboral tienen los nuevos permisos de cuidados según la estructura de tamaño de las empresas españolas?',
    ],
    outlets: {
      'el-pais': {
        outletId: 'el-pais',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'El deterioro de la salud mental y el retraso en la emancipación dibujan una brecha generacional creciente',
        summary:
          'Conecta los indicadores de bienestar psíquico con la precariedad temprana, el acceso a la vivienda y el despliegue de recursos públicos de atención.',
        emphasizes: [
          'Plan de acción en salud mental para reforzar la atención comunitaria y reducir la prescripción excesiva de psicofármacos.',
          'Universalización progresiva de la educación de 0 a 3 años para facilitar la conciliación.',
        ],
        questionsOrNuances: [
          'Reconoce la lentitud en incorporar nuevos especialistas en psicología clínica.',
          'Subraya la necesidad de financiar eficazmente los permisos parentales comprometidos con Europa.',
        ],
      },
      'el-mundo': {
        outletId: 'el-mundo',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El invierno demográfico y el récord de bajas laborales ponen presión sobre el mercado de trabajo y los cuidados',
        summary:
          'Analiza conjuntamente la caída de la natalidad y el coste récord de las incapacidades temporales, reclamando medidas prácticas de apoyo familiar.',
        emphasizes: [
          'Desfase entre los nacimientos reales y el número deseado de hijos según encuestas del INE.',
          'Aumento del gasto público y empresarial por bajas médicas de larga duración.',
        ],
        questionsOrNuances: [
          'Cuestiona que crear permisos sin compensación a pymes facilite la contratación juvenil y femenina.',
          'Pide deducciones fiscales directas por hijo a cargo.',
        ],
      },
      'el-debate': {
        outletId: 'el-debate',
        angleType: 'Crónica Territorial / Social',
        headline: 'La crisis de natalidad exige políticas decididas de apoyo a la familia, estabilidad laboral y vivienda accesible',
        summary:
          'Sitúa la defensa de la familia y el invierno demográfico como el principal desafío estructural de España a medio plazo.',
        emphasizes: [
          'Pérdida de poder adquisitivo de los hogares con hijos frente al incremento de impuestos y precios.',
          'Importancia de reforzar el respaldo psicológico en centros educativos y atención a mayores en soledad.',
        ],
        questionsOrNuances: [
          'Critica que la natalidad ocupe un lugar secundario frente a otros debates coyunturales.',
          'Pide un estatuto fiscal favorable a la maternidad y paternidad.',
        ],
      },
      'the-objective': {
        outletId: 'the-objective',
        angleType: 'Fiscalización / Investigación',
        headline: 'El consumo de ansiolíticos y las bajas por salud mental crecen mientras faltan datos homogéneos de resultados',
        summary:
          'Examina series históricas de consumo farmacéutico, retrasos en citas de psiquiatría pública y el impacto de la tramitación de permisos pendientes.',
        emphasizes: [
          'Listas de espera superiores a tres meses para primera consulta psicológica en la sanidad pública.',
          'Sanciones o expedientes europeos por demoras en transponer directivas de conciliación.',
        ],
        questionsOrNuances: [
          'Pregunta qué parte del presupuesto anunciado para planes de salud mental se ha ejecutado efectivamente.',
          'Analiza la brecha de ingresos entre jóvenes actuales y cohortes anteriores.',
        ],
      },
      eldiario: {
        outletId: 'eldiario',
        angleType: 'Derechos Sociales / Desigualdad',
        headline: 'La desigualdad de clase marca quién accede a terapia y quién puede permitirse reducir jornada para cuidar',
        summary:
          'Destaca que la salud mental y la conciliación dependen en exceso del nivel de renta si no se refuerzan los servicios públicos y la jornada laboral.',
        emphasizes: [
          'Penalización laboral persistente sobre las mujeres en excedencias y jornadas parciales por cuidados.',
          'Necesidad de garantizar psicólogos en la Atención Primaria sin copagos privados.',
        ],
        questionsOrNuances: [
          'Critica los discursos que culpabilizan a los trabajadores por el aumento de las bajas médicas.',
          'Defiende remunerar íntegramente las ocho semanas de permiso parental.',
        ],
      },
      vozpopuli: {
        outletId: 'vozpopuli',
        angleType: 'Impacto Económico / Fiscal',
        headline: 'El absentismo y la escasez de relevo generacional obligan a empresas y mutuas a repensar la gestión laboral',
        summary:
          'Evalúa el impacto en productividad de las bajas laborales y las soluciones organizativas de flexibilidad horaria y teletrabajo.',
        emphasizes: [
          'Coste de las prestaciones de incapacidad temporal asumido por Seguridad Social y empresas.',
          'Envejecimiento de las plantillas industriales y dificultad para reemplazar jubilaciones.',
        ],
        questionsOrNuances: [
          'Pregunta cómo articular la colaboración con mutuas para acelerar pruebas diagnósticas en traumatología y salud mental.',
          'Analiza el efecto de la acumulación de permisos sobre las microempresas.',
        ],
      },
      'la-razon': {
        outletId: 'la-razon',
        angleType: 'Crónica Territorial / Social',
        headline: 'Comunidades lanzan ayudas directas a la natalidad y planes contra la soledad no deseada de los mayores',
        summary:
          'Recoge programas regionales de cheques bebé, escuelas infantiles gratuitas y redes vecinales frente al aislamiento en grandes ciudades y pueblos.',
        emphasizes: [
          'Doble cara demográfica: menos nacimientos y millones de personas mayores viviendo solas.',
          'Iniciativas municipales y de entidades sociales en el acompañamiento cotidiano.',
        ],
        questionsOrNuances: [
          'Subraya que la estabilidad laboral temprana es la condición previa que más reclaman los jóvenes.',
          'Destaca la importancia de agilizar las valoraciones de dependencia.',
        ],
      },
    },
  },
];
