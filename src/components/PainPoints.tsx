import { FadeIn } from './FadeIn'

const pains = [
  {
    number: '01',
    text: 'Você acorda antes do alarme com o coração acelerado sem motivo claro.',
  },
  {
    number: '02',
    text: 'Você faz tudo que precisa ser feito e no final do dia o peso não foi embora.',
  },
  {
    number: '03',
    text: 'Você é o porto seguro de todo mundo. E não tem onde pousar.',
  },
  {
    number: '04',
    text: 'Você sabe que precisa parar. Mas parar parece perigoso.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="dores"
      className="section-padding"
      style={{ backgroundColor: '#F4F7FC' }}
    >
      <div className="container-ultra">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#1E1E1E',
              fontWeight: 400,
            }}
          >
            Você cuida de todo mundo.{' '}
            <em style={{ color: '#4A7FD4' }}>Quem cuida de você?</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pains.map((pain, i) => (
            <FadeIn key={pain.number} delay={i * 0.1}>
              <div
                className="flex gap-5 p-6 md:p-8 group transition-all duration-500"
                style={{
                  backgroundColor: '#EBF0F7',
                  borderRadius: '12px 4px 12px 4px',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,127,212,0.4)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'
                }}
              >
                <span
                  className="shrink-0 eyebrow-ultra"
                  style={{
                    color: '#4A7FD4',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    paddingTop: '2px',
                    opacity: 0.6,
                  }}
                >
                  {pain.number}
                </span>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: '#1E1E1E',
                    fontWeight: 400,
                  }}
                >
                  {pain.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 flex items-center gap-6">
            <div
              style={{
                width: '2px',
                height: '60px',
                backgroundColor: '#4A7FD4',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#3A3A3A',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Essa confusão tem nome. E tem raiz.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
