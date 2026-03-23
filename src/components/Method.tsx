import { FadeIn } from './FadeIn'

const pillars = [
  {
    number: '01',
    title: 'Identificação dos Padrões',
    body: 'Juntos, mapeamos os pensamentos disfuncionais que estão por baixo das reações que te esgotam. Você começa a ver o padrão antes de ser destruída por ele.',
    expanded: false,
  },
  {
    number: '02',
    title: 'Autorregulação Emocional',
    body: 'Autorregulação não é controlar emoções. É aprender a reconhecer o que elas estão sinalizando, antes que virem crise. Esse é o pilar central do nosso trabalho, porque é onde o resultado se torna permanente. O sistema nervoso que aprendeu a funcionar em modo de emergência pode aprender um novo padrão. Essa mudança não acontece com força de vontade. Acontece com processo e com ciência. É o que diferencia aliviar o sintoma de chegar à raiz.',
    expanded: true,
  },
  {
    number: '03',
    title: 'Limites Assertivos',
    body: 'Não basta entender por dentro. É preciso traduzir isso em comportamentos reais: dizer não sem culpa, estabelecer limites que você consiga sustentar e parar de se autoimolar por expectativas que não são suas.',
    expanded: false,
  },
]

export default function Method() {
  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: '#FAF8F4' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: '#C4A882',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: '#C4A882' }}>
              abordagem
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#3A3A3A',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Como o meu trabalho funciona
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-base md:text-lg leading-relaxed mb-14 md:mb-20"
            style={{
              fontFamily: 'var(--font-sans)',
              color: '#1E1E1E',
              fontWeight: 300,
              maxWidth: '560px',
              opacity: 0.8,
            }}
          >
            Meu trabalho é baseado em TCC e neuropsicologia clínica. Não trabalho com
            acolhimento genérico, nem com técnicas isoladas de alívio. Trabalho com a causa.
          </p>
        </FadeIn>

        {/* Pillars */}
        <div className="flex flex-col gap-0">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.number} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10"
                style={{
                  borderTop: '1px solid rgba(196,168,130,0.2)',
                  ...(i === pillars.length - 1
                    ? { borderBottom: '1px solid rgba(196,168,130,0.2)' }
                    : {}),
                }}
              >
                <div className={`grid grid-cols-1 gap-6 ${pillar.expanded ? 'md:grid-cols-[auto_1fr]' : 'md:grid-cols-[auto_1fr]'}`}>
                  {/* Number + title */}
                  <div className="flex items-start gap-5">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        color: '#C4A882',
                        opacity: 0.6,
                        paddingTop: '2px',
                        minWidth: '28px',
                        fontStyle: 'normal',
                      }}
                    >
                      {pillar.number}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3
                        className={pillar.expanded ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: '#3A3A3A',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.title}
                        {pillar.expanded && (
                          <span
                            style={{
                              marginLeft: '12px',
                              fontSize: '11px',
                              fontFamily: 'var(--font-sans)',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: '#C4A882',
                              fontStyle: 'normal',
                              verticalAlign: 'middle',
                              opacity: 0.8,
                            }}
                          >
                            pilar central
                          </span>
                        )}
                      </h3>
                      <p
                        className={pillar.expanded ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: '#1E1E1E',
                          fontWeight: pillar.expanded ? 400 : 300,
                          lineHeight: 1.8,
                          opacity: 0.85,
                          maxWidth: pillar.expanded ? '600px' : '540px',
                        }}
                      >
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Not promised */}
        <FadeIn delay={0.35}>
          <div
            className="mt-12 md:mt-14 p-6 md:p-8"
            style={{
              backgroundColor: '#EDE7DC',
              borderRadius: '4px 16px 4px 16px',
            }}
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: '#3A3A3A',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Não prometo erradicação de emoções difíceis, nem mudança de outras pessoas ao
              redor. Prometo processo real, baseado em ciência, sem atalhos.
            </p>
          </div>
        </FadeIn>

        {/* Method transition */}
        <FadeIn delay={0.4}>
          <p
            className="mt-12 text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-sans)',
              color: '#3A3A3A',
              fontWeight: 300,
              opacity: 0.7,
              fontStyle: 'italic',
            }}
          >
            Mas antes de te contar o que faço, deixa eu te contar de onde vim.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
