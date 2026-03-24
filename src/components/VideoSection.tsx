import { FadeIn } from './FadeIn'

export default function VideoSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#3A3A3A' }}
    >
      <div className="container-ultra">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          {/* Pre-video text */}
          <FadeIn>
            <p
              className="text-base md:text-lg leading-relaxed text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: '#EDE7DC',
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

          {/* Video container — 9:16 vertical */}
          <FadeIn delay={0.15}>
            <div
              className="relative overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '300px',
                aspectRatio: '9 / 16',
                borderRadius: '16px 4px 16px 4px',
                backgroundColor: '#2A2A2A',
                border: '1px solid rgba(196,168,130,0.2)',
              }}
            >
              {/* Video embed */}
              <iframe
                src="https://www.youtube.com/embed/x2-Se19h80Y"
                title="Miriam Campos — vídeo de apresentação"
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>

          {/* Post-video text */}
          <FadeIn delay={0.25}>
            <p
              className="text-sm md:text-base text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: '#EDE7DC',
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
