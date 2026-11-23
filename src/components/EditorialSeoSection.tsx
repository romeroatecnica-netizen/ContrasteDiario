import {BookOpen, ChevronDown, ExternalLink, Info} from 'lucide-react';
import {useState} from 'react';
import {CANONICAL_URL, SITE_NAME} from '../config/site';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Cómo funciona la actualización diaria de ContrasteDiario?',
    answer:
      'Al cargar la página, la aplicación consulta primero el archivo /daily-brief.json sin caché (cache: "no-store"). Si existe una edición publicada automáticamente para la fecha seleccionada, la muestra de inmediato. Cuando el archivo no está disponible o navegas a otros días del calendario, activa de forma transparente su motor determinista local basado en la fecha (YYYY-MM-DD), sin llamadas a APIs externas ni consumo de cuota.',
  },
  {
    question: '¿Qué periódicos españoles incluye la matriz comparativa?',
    answer:
      'Incluye siete cabeceras de referencia en el debate público español: El País, El Mundo, El Debate, The Objective, elDiario.es, Vozpópuli y La Razón. Esta combinación abarca diarios generalistas tradicionales, nativos digitales de investigación política y cabeceras centradas en economía, mercados e instituciones.',
  },
  {
    question: '¿Cómo ayuda esta herramienta a evitar el sesgo de confirmación?',
    answer:
      'En lugar de presentar un único relato o mezclar titulares sin contexto, el comparador separa los hechos o cifras en los que coinciden todos los medios (Convergencias factuales) de los puntos donde cambian los marcos interpretativos (Divergencias). Además, propone fuentes primarias oficiales —como el BOE, el INE, la AIReF o el CGPJ— para contrastar los datos brutos.',
  },
  {
    question: '¿Se guardan mis notas personales o ediciones personalizadas?',
    answer:
      'Sí. Todo tu progreso (temas revisados, cabeceras consultadas, notas personales por fecha y tema y ediciones diarias personalizadas) se guarda exclusivamente en el almacenamiento local de tu navegador (localStorage). Desde «Mi hemeroteca» puedes exportar e importar una copia completa en formato JSON.',
  },
  {
    question: '¿Puedo automatizar la publicación diaria de titulares reales en /daily-brief.json?',
    answer:
      'Sí. Puedes usar el «Editor diario JSON» integrado para generar la estructura exacta de daily-brief.json o configurar un flujo diario (por ejemplo, con GitHub Actions o Cloudflare Workers) que actualice el archivo public/daily-brief.json antes de desplegar en Cloudflare Pages.',
  },
];

interface RecommendedBook {
  title: string;
  author: string;
  category: string;
  note: string;
  url: string;
}

const RECOMMENDED_BOOKS: RecommendedBook[] = [
  {
    title: 'Los nuevos periodistas: Técnicas y ética en la era digital',
    author: 'Álex Grijelmo (coord.) / Manuales de estilo de prensa española',
    category: 'Periodismo y lectura crítica',
    note: 'Claves sobre titulación, jerarquía informativa y detección de sesgos en el lenguaje periodístico en español.',
    url: 'https://www.amazon.es/s?k=estilo+periodistico+alex+grijelmo',
  },
  {
    title: 'La España de las piscinas',
    author: 'Jorge Dioni López',
    category: 'Territorio, vivienda y sociedad',
    note: 'Ensayo de referencia sobre urbanismo, clase media, modelo residencial y brechas territoriales en la España contemporánea.',
    url: 'https://www.amazon.es/s?k=La+Espana+de+las+piscinas+Jorge+Dioni',
  },
  {
    title: 'Historia mínima de la España contemporánea',
    author: 'Juan Pablo Fusi',
    category: 'Historia política e institucional',
    note: 'Síntesis rigurosa para contextualizar las transformaciones institucionales, económicas y autonómicas de España.',
    url: 'https://www.amazon.es/s?k=Historia+minima+Espana+contemporanea+Fusi',
  },
  {
    title: 'Pensar rápido, pensar despacio',
    author: 'Daniel Kahneman',
    category: 'Pensamiento crítico y sesgos cognitivos',
    note: 'Obra esencial para comprender los atajos mentales y el sesgo de confirmación al interpretar noticias y estadísticas.',
    url: 'https://www.amazon.es/s?k=Pensar+rapido+pensar+despacio+Kahneman',
  },
];

export function EditorialSeoSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* Bloque contextual discreto de libros (enlaces preparados para afiliación) */}
      <section
        aria-labelledby="lecturas-recomendadas-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
      >
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E3A8A]">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Biblioteca de hemeroteca y pensamiento crítico</span>
              </div>
              <h2
                id="lecturas-recomendadas-heading"
                className="mt-1 font-serif text-2xl font-semibold text-slate-900"
              >
                Lecturas recomendadas para profundizar en España y medios
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Enlaces externos contextuales (afiliación transparente)
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOMMENDED_BOOKS.map((book) => (
              <article
                key={book.title}
                className="p-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-[#1E3A8A]">
                    {book.category}
                  </p>
                  <h3 className="mt-1 font-serif font-semibold text-base text-slate-900 leading-snug">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{book.author}</p>
                  <p className="mt-2.5 text-xs text-slate-700 leading-relaxed">
                    {book.note}
                  </p>
                </div>

                <a
                  href={book.url}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] hover:underline underline-offset-4"
                >
                  <span>Consultar ficha del libro</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sección editorial SEO en español: Lectura crítica y hemeroteca */}
      <section
        id="lectura-critica"
        aria-labelledby="guia-editorial-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
      >
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold text-[#1E3A8A]">
              Guía metodológica de lectura crítica de prensa en España
            </p>
            <h2
              id="guia-editorial-heading"
              className="mt-1.5 font-serif text-2xl sm:text-3xl font-semibold text-slate-900 editorial-balance"
            >
              Cómo contrastar noticias de actualidad española sin caer en el sesgo de confirmación
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm text-slate-700 leading-relaxed">
            <article className="space-y-3">
              <h3 className="font-serif text-lg font-semibold text-slate-900">
                1. Qué aporta comparar siete líneas editoriales distintas
              </h3>
              <p>
                Cada cabecera española selecciona qué aspecto de un mismo acontecimiento merece el titular principal. Al comparar prensa generalista tradicional (<strong>El País</strong>, <strong>El Mundo</strong>, <strong>La Razón</strong>) junto a digitales nativos de investigación o análisis político (<strong>The Objective</strong>, <strong>elDiario.es</strong>) y diarios de foco económico o institucional (<strong>Vozpópuli</strong>, <strong>El Debate</strong>), el lector distingue rápidamente entre el hecho verificado y el encuadre interpretativo.
              </p>
              <p>
                Observar qué queda en primer plano —si el impacto macroeconómico, la aritmética parlamentaria, los derechos sociales o la fiscalización de contratos— permite detectar puntos ciegos antes de formarse una opinión cerrada.
              </p>
            </article>

            <article className="space-y-3">
              <h3 className="font-serif text-lg font-semibold text-slate-900">
                2. Del titular de portada a la fuente primaria oficial
              </h3>
              <p>
                Ningún resumen sustituye a la verificación directa. Una lectura rigurosa de la actualidad en España exige acudir a las fuentes primarias citadas en las noticias: el <strong>Boletín Oficial del Estado (BOE)</strong> para el texto exacto de reales decretos, el <strong>INE</strong> para series de empleo, inflación o vivienda, la <strong>AIReF</strong> para previsiones fiscales y el <strong>CGPJ</strong> para estadística judicial.
              </p>
              <p>
                Muchas divergencias mediáticas no nacen de cifras distintas, sino de elegir horizontes temporales diferentes (dato mensual frente a acumulado de cinco años) o magnitudes agregadas frente a valores per cápita.
              </p>
            </article>

            <article className="space-y-3">
              <h3 className="font-serif text-lg font-semibold text-slate-900">
                3. El valor de la hemeroteca personal y las preguntas clave
              </h3>
              <p>
                Seguir la prensa día a día sin registro suele favorecer el ruido del último titular. Anotar qué prometía un proyecto de ley hace seis meses o qué advertían los informes técnicos sobre una reforma permite evaluar la coherencia de los argumentos con el paso del tiempo.
              </p>
              <p>
                Utiliza el detector de convergencias y divergencias para comprobar primero los datos compartidos y, después, revisar qué pregunta relevante formula cada medio al resto del espectro editorial.
              </p>
            </article>
          </div>

          {/* Aviso transparente obligatorio */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#1E3A8A] mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Herramienta informativa y educativa de comparación de perspectivas periodísticas sobre actualidad de España. Los resúmenes y matrices de enfoque analizan líneas editoriales y ángulos de cobertura habituales con fines de contraste; consulta siempre las fuentes originales de cada medio.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ interactivo desplegable */}
      <section
        id="preguntas-frecuentes"
        aria-labelledby="faq-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
      >
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-10">
          <h2
            id="faq-heading"
            className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900"
          >
            Preguntas frecuentes sobre ContrasteDiario
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Funcionamiento del motor diario local, cobertura de los siete medios y almacenamiento en el navegador.
          </p>

          <div className="mt-6 divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-4 flex items-center justify-between gap-4 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-[#1E3A8A] transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#1E3A8A]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-4 pr-8 text-sm text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pie de página sobrio con dominio canónico único */}
      <footer className="mt-12 border-t border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p className="font-serif text-sm font-semibold text-slate-900">
              {SITE_NAME}
            </p>
            <p className="mt-1">
              Comparador diario de prensa de España por temas y perspectivas editoriales · Español (es)
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CANONICAL_URL}
              className="hover:text-[#1E3A8A] hover:underline underline-offset-4"
            >
              {CANONICAL_URL}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#comparador"
              className="hover:text-[#1E3A8A] hover:underline underline-offset-4"
            >
              Volver arriba
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
