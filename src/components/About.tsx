import { useState } from 'react'
import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5594991506532?text=Ol%C3%A1%2C%20Miriam!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20agendar%20a%20conversa%20inicial%20gratuita.'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: '#EBF0F7' }}
    >
      <div className="container-ultra">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-stretch">

          {/* Copy — mobile: first */}
          <div className="flex flex-col gap-7 order-1 md:order-2">
            <FadeIn>
              <div className="flex items-center gap-4 mb-2">
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
                  sobre mim
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#3A3A3A',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                Sempre fui o porto.{' '}
                <em style={{ color: '#4A7FD4' }}>Aprendi a ser o mapa.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#1E1E1E',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  opacity: 0.85,
                }}
              >
                Antes de ter o diploma, eu já era a pessoa para quem todos escoavam a dor. Não
                aprendi isso na faculdade. Era um chamado que existia antes de qualquer formação.
                E por muito tempo, não sabia que sustentar a dor dos outros sem estrutura cobra
                um preço.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="pl-5"
                style={{ borderLeft: '2px solid rgba(74,127,212,0.5)' }}
              >
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: '#1E1E1E',
                    fontWeight: 400,
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                    opacity: 0.9,
                  }}
                >
                  Foi quando entendi que empatia sem método esgota. E que dar uma resposta
                  técnica ao que o mundo já confiava a mim era a única forma de honrar esse
                  chamado de verdade.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#1E1E1E',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  opacity: 0.85,
                }}
              >
                Hoje, combino o rigor da TCC e da neuropsicologia com a escuta que sempre foi
                minha natureza. Não me assusta a dor feia. Não preciso que você esteja bem para
                começar. Meu trabalho é ser o espaço onde você não precisa fingir.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                className="pt-2 pb-4"
                style={{ borderTop: '1px solid rgba(74,127,212,0.25)' }}
              >
                <span
                  className="eyebrow-ultra"
                  style={{ color: '#3A3A3A', opacity: 0.55 }}
                >
                  Psicóloga Clínica | Abordagem TCC | Pós em Avaliação Psicológica, Psicologia do Trânsito e Neuropsicologia
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#3A3A3A',
                  fontWeight: 300,
                  opacity: 0.65,
                  fontStyle: 'italic',
                }}
              >
                Foi por tudo isso que estruturei o processo da forma que vou te mostrar agora.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer rounded-sm text-sm font-medium tracking-wide self-start"
                style={{
                  backgroundColor: '#3A3A3A',
                  color: '#F5F0E8',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Quero minha conversa inicial
              </a>
            </FadeIn>
          </div>

          {/* Photo — mobile: second */}
          <div className="flex justify-center md:justify-start order-2 md:order-1 md:self-stretch">
            <FadeIn delay={0.1}>
              <div className="relative w-full h-full" style={{ minHeight: '480px' }}>
                {!imgError ? (
                  <img
                    src="/miriam-campos-about.jpg"
                    alt="Miriam Campos"
                    onError={() => setImgError(true)}
                    className="object-cover object-top w-full h-full"
                    style={{
                      borderRadius: '16px 4px 16px 4px',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '480px',
                      borderRadius: '16px 4px 16px 4px',
                      background: 'linear-gradient(135deg, #4A7FD4 0%, #2D5FBF 100%)',
                      opacity: 0.3,
                    }}
                  />
                )}
                {/* Decorative line */}
                <div
                  className="absolute -left-4 top-8 bottom-8"
                  style={{
                    width: '2px',
                    backgroundColor: '#4A7FD4',
                    opacity: 0.4,
                  }}
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
