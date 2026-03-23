import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5594991506532?text=Ol%C3%A1%2C%20Miriam!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20agendar%20a%20conversa%20inicial%20gratuita.'

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#2A2A2A' }}
    >
      {/* Final CTA section */}
      <section className="section-padding-lg" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container-ultra">
          <div className="flex flex-col items-center text-center gap-8">

            {/* Aurora accent */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(196,168,130,0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            <FadeIn>
              <span className="eyebrow-ultra" style={{ color: '#C4A882', opacity: 0.6 }}>
                próximo passo
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#F5F0E8',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  maxWidth: '700px',
                }}
              >
                Funcionou para todo mundo por muito tempo. Se o que leu aqui fez sentido, talvez
                seja hora de{' '}
                <em style={{ color: '#C4A882' }}>existir para si mesmo.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                className="text-sm md:text-base"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#EDE7DC',
                  fontWeight: 300,
                  opacity: 0.6,
                  maxWidth: '420px',
                }}
              >
                A conversa inicial é gratuita e sem compromisso.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer rounded-sm text-sm font-medium tracking-wide"
                style={{
                  backgroundColor: '#C4A882',
                  color: '#2A2A2A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Quero minha conversa inicial
              </a>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p
                className="text-xs"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#EDE7DC',
                  fontWeight: 300,
                  opacity: 0.35,
                }}
              >
                +55 94 99150-6532
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(196,168,130,0.1)',
          padding: '1.5rem 0',
        }}
      >
        <div className="container-ultra flex flex-col md:flex-row items-center justify-between gap-3">
          <span
            className="eyebrow-ultra"
            style={{
              color: '#EDE7DC',
              opacity: 0.25,
            }}
          >
            Miriam Campos Domingos
          </span>
          <span
            className="eyebrow-ultra"
            style={{
              color: '#EDE7DC',
              opacity: 0.25,
            }}
          >
            Psicóloga Clínica | CRP válido
          </span>
          <span
            className="eyebrow-ultra"
            style={{
              color: '#EDE7DC',
              opacity: 0.25,
            }}
          >
            {new Date().getFullYear()} Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}
