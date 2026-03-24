import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const faqs = [
  {
    q: 'Já tentei terapia antes e não funcionou.',
    a: 'Entendo. E é exatamente por isso que minha abordagem começa pela causa, não pelo sintoma. Muitas terapias trabalham bem no alívio imediato. O que eu faço é diferente: chegamos ao padrão que alimenta o ciclo. Isso leva mais tempo, mas o resultado é estrutural.',
  },
  {
    q: 'Funciona online?',
    a: 'Funciona completamente. Atendo online há anos e meus pacientes relatam o mesmo nível de profundidade das sessões presenciais. O espaço seguro não depende do ambiente físico. Depende da qualidade da presença.',
  },
  {
    q: 'Qual é o investimento?',
    a: 'O valor é definido na nossa conversa inicial, depois que eu entendo o que você precisa. Não trabalho com pacotes fixos porque cada processo tem uma profundidade diferente. O que posso adiantar: manter o modo de sobrevivência por mais tempo tem um custo que não aparece no extrato, mas aparece na saúde, nas relações e na vida.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'Processos reais costumam durar de 3 a 8 meses, dependendo da profundidade do que trabalhamos. Não acredito em promessas de resultado em poucas sessões. Mas a maioria dos meus pacientes começa a perceber mudanças concretas ainda nas primeiras semanas.',
  },
  {
    q: 'Tenho medo de mexer nisso e piorar.',
    a: 'Esse medo é muito comum e completamente válido. O que posso te dizer é: meu trabalho não é desestabilizar. É criar estrutura enquanto o processo acontece. Você não vai encarar nada sozinha. Estou aqui para sustentar o que aparecer.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#EBF0F7' }}
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
              dúvidas frequentes
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#3A3A3A',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Perguntas frequentes
          </h2>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: '1px solid rgba(58,58,58,0.12)',
                  ...(i === faqs.length - 1
                    ? { borderBottom: '1px solid rgba(58,58,58,0.12)' }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: '#3A3A3A',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4A7FD4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: '#3A3A3A',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
