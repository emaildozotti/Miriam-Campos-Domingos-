import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const testimonials = [
  {
    text: 'Fiz terapia antes por dois anos e saía das sessões sem saber o que tinha acontecido. Com a Miriam, a segunda sessão já me deu uma ferramenta concreta que uso até hoje. É a diferença entre conversar sobre o problema e trabalhar com ele de verdade.',
    name: 'Ana C., gestora de projetos',
    highlight: 'É a diferença entre conversar sobre o problema e trabalhar com ele de verdade.',
  },
  {
    text: 'Eu cheguei sem conseguir dormir por semanas. Não queria mais um diagnóstico, queria entender o que estava alimentando a ansiedade. Em quatro meses, parei de acordar com o coração acelerado. O processo não foi fácil, mas foi real.',
    name: 'Rafael M., empreendedor',
    highlight: 'Parei de acordar com o coração acelerado.',
  },
  {
    text: 'Eu era a pessoa que cuidava de todo mundo menos de mim. A Miriam foi a primeira profissional que não me disse "você precisa se cuidar mais" sem me ajudar a entender por que eu não conseguia fazer isso. Agora eu entendo. E isso mudou tudo.',
    name: 'Cláudia T., professora',
    highlight: 'A primeira profissional que não me disse para me cuidar mais sem me ajudar a entender por que eu não conseguia.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: '#F4F7FC' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
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
              o que dizem
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative min-h-[320px] md:min-h-[260px]">
            {/* Giant quote mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '120px',
                lineHeight: 1,
                color: '#4A7FD4',
                opacity: 0.2,
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 pt-10 md:pt-12 pl-4 md:pl-8"
              >
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: '#1E1E1E',
                    fontWeight: 300,
                    maxWidth: '680px',
                    lineHeight: 1.85,
                  }}
                >
                  {testimonials[current].text.split(testimonials[current].highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong
                          style={{
                            fontWeight: 500,
                            color: '#3A3A3A',
                          }}
                        >
                          {testimonials[current].highlight}
                        </strong>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
                <span
                  className="eyebrow-ultra"
                  style={{ color: '#4A7FD4', opacity: 0.7 }}
                >
                  — {testimonials[current].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Dots navigation */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-500 cursor-pointer"
                style={{
                  width: i === current ? '28px' : '8px',
                  height: '2px',
                  backgroundColor: '#4A7FD4',
                  opacity: i === current ? 1 : 0.3,
                  border: 'none',
                  padding: 0,
                  borderRadius: '1px',
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
