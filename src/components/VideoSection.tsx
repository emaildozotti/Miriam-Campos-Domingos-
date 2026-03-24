import { FadeIn } from './FadeIn'

export default function VideoSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#0D1117', backgroundImage: 'radial-gradient(rgba(74,127,212,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    >
      <div className="container-ultra">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          {/* Headline */}
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight text-center"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#F5F0E8',
                fontWeight: 400,
              }}
            >
              O padrão que{' '}
              <em style={{ color: '#4A7FD4' }}>ninguém percebe.</em>
            </h2>
          </FadeIn>

          {/* Pre-video text */}
          <FadeIn>
            <p
              className="text-base md:text-lg leading-relaxed text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: '#EBF0F7',
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              "Passei anos sendo o porto seguro de todos antes de entender o que sustentava essa
              escolha. No vídeo abaixo, conto o que aprendi sobre o padrão que mantém pessoas
              capazes presas em ciclos de exaustão. Não é sobre força de vontade. É sobre o que
              está por baixo disso."
            </p>
          </FadeIn>

          {/* Video embed — 9:16 vertical */}
          <FadeIn delay={0.15}>
            <iframe
              src="https://www.youtube.com/embed/x2-Se19h80Y"
              title="Miriam Campos — vídeo de apresentação"
              width={300}
              height={533}
              style={{
                border: 'none',
                borderRadius: '16px 4px 16px 4px',
                display: 'block',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </FadeIn>

          {/* Post-video text */}
          <FadeIn delay={0.25}>
            <p
              className="text-sm md:text-base text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: '#EBF0F7',
                fontWeight: 300,
                opacity: 0.7,
                maxWidth: '440px',
                margin: '0 auto',
              }}
            >
              Se você se reconheceu, o próximo bloco vai fazer ainda mais sentido.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
