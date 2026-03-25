import { motion } from 'motion/react'
import { useState } from 'react'

const WA_LINK = 'https://wa.me/5594991506532?text=Ol%C3%A1%2C%20Miriam!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20agendar%20a%20conversa%20inicial%20gratuita.'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollToDores = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('dores')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#080C12', backgroundImage: 'radial-gradient(rgba(74,127,212,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '520px',
            height: '520px',
            background: '#3A3A3A40',
            top: '-10%',
            right: '5%',
            animation: 'aurora-1 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '400px',
            height: '400px',
            background: '#4A7FD438',
            bottom: '10%',
            left: '10%',
            animation: 'aurora-2 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '300px',
            height: '300px',
            background: '#EBF0F720',
            top: '40%',
            left: '35%',
            animation: 'aurora-3 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Vertical editorial line — left side */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
        style={{
          width: '2px',
          height: '180px',
          backgroundColor: '#4A7FD4',
          opacity: 0.7,
        }}
      />

      <div className="container-ultra relative z-10 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-screen md:min-h-0 md:py-32">

          {/* Copy — left (mobile: first) */}
          <div className="flex flex-col gap-6">
            {/* Callout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="eyebrow-ultra"
                style={{ color: '#4A7FD4', letterSpacing: '0.25em' }}
              >
                NO LIMITE INVISÍVEL
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#F5F0E8',
                fontWeight: 400,
              }}
            >
              Funcionando por fora.{' '}
              <em style={{ color: '#4A7FD4' }}>Esgotado por dentro.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: '#EBF0F7',
                fontWeight: 300,
                maxWidth: '420px',
              }}
            >
              Um espaço para chegar à raiz do que te mantém nesse ciclo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={scrollToDores}
                className="btn-shimmer rounded-sm text-sm font-medium tracking-wide cursor-pointer"
                style={{
                  backgroundColor: '#4A7FD4',
                  color: '#2A2A2A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}
              >
                Quero entender meu processo
              </button>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm"
                style={{
                  color: '#EBF0F7',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  opacity: 0.7,
                  padding: '1.25rem 1rem',
                }}
              >
                ou agende diretamente
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

            {/* Credentials */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow-ultra"
              style={{ color: '#4A7FD4', opacity: 0.6 }}
            >
              Psicóloga Clínica | Especialista em TCC | Neuropsicologia Clínica
              <br />
              CRP 10/11909
            </motion.p>
          </div>

          {/* Photo — right (mobile: second) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 opacity-20"
                style={{
                  border: '1px solid #4A7FD4',
                  borderRadius: '20px 6px 20px 6px',
                }}
                aria-hidden="true"
              />
              {!imgError ? (
                <img
                  src="/miriam-campos.jpg"
                  alt="Miriam Campos, Psicóloga Clínica"
                  onError={() => setImgError(true)}
                  className="relative z-10 object-cover"
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '480px',
                    borderRadius: '16px 4px 16px 4px',
                  }}
                />
              ) : (
                <div
                  className="relative z-10 flex items-center justify-center"
                  style={{
                    width: '380px',
                    maxWidth: '100%',
                    height: '480px',
                    borderRadius: '16px 4px 16px 4px',
                    background: 'linear-gradient(135deg, #3A3A3A 0%, #4A4A4A 100%)',
                    border: '1px solid rgba(74, 127, 212, 0.2)',
                  }}
                >
                  <div className="text-center" style={{ color: '#4A7FD4', opacity: 0.5 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '3rem',
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                      }}
                    >
                      MC
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Miriam Campos
                    </div>
                  </div>
                </div>
              )}

              {/* Accent dot */}
              <div
                className="absolute -bottom-4 -right-4"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(74,127,212,0.3) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span
            className="eyebrow-ultra"
            style={{ color: '#4A7FD4', opacity: 0.4 }}
          >
            role para baixo
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7FD4" strokeWidth="1.5" opacity="0.4">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
