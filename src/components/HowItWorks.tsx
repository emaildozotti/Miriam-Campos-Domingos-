import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5594991506532?text=Ol%C3%A1%2C%20Miriam!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20agendar%20a%20conversa%20inicial%20gratuita.'

const steps = [
  {
    number: '01',
    title: 'A Conversa Inicial',
    body: 'Nossa primeira conversa é gratuita e sem compromisso. É um espaço para você me contar o que está vivendo e para eu entender se o meu trabalho faz sentido para o que você precisa. Não é avaliação. É conversa.',
  },
  {
    number: '02',
    title: 'As Sessões',
    body: 'As sessões acontecem online, uma vez por semana. Trabalho sem protocolos rígidos: o nosso ritmo é definido pelo que você traz. Cada sessão tem um objetivo concreto, sem que você precise "estar pronta" para isso.',
  },
  {
    number: '03',
    title: 'O Que Muda',
    body: 'Com o tempo, você começa a reconhecer os padrões antes de ser derrubada por eles. Aprende a dizer não sem aquela culpa de depois. E descobre que é possível viver, não apenas funcionar.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: '#3A3A3A' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: '#4A7FD4',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: '#4A7FD4' }}>
              processo
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-14 md:mb-20"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#F5F0E8',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            O que acontece a partir de agora
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10 flex flex-col md:flex-row gap-5 md:gap-10"
                style={{
                  borderTop: '1px solid rgba(74,127,212,0.15)',
                  ...(i === steps.length - 1
                    ? { borderBottom: '1px solid rgba(74,127,212,0.15)' }
                    : {}),
                }}
              >
                <div className="flex items-start gap-5 md:w-48 shrink-0">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      color: '#4A7FD4',
                      opacity: 0.5,
                      paddingTop: '2px',
                      minWidth: '28px',
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-lg md:text-xl"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: '#F5F0E8',
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: '#EBF0F7',
                    fontWeight: 300,
                    lineHeight: 1.85,
                    opacity: 0.8,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Remove anxiety note */}
        <FadeIn delay={0.35}>
          <p
            className="mt-10 text-sm md:text-base"
            style={{
              fontFamily: 'var(--font-sans)',
              color: '#EBF0F7',
              fontWeight: 300,
              opacity: 0.55,
              fontStyle: 'italic',
            }}
          >
            Se surgir alguma dúvida sobre o processo antes de começar, pode me perguntar na
            própria conversa inicial. Não existe pergunta pequena demais.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.45}>
          <div className="mt-12 md:mt-16">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer rounded-sm text-sm font-medium tracking-wide"
              style={{
                backgroundColor: '#4A7FD4',
                color: '#2A2A2A',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Quero minha conversa inicial
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
