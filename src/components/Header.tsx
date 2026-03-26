import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'

const WA_LINK = 'https://wa.me/5594991506532?text=Ol%C3%A1%2C%20Miriam!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20agendar%20a%20conversa%20inicial%20gratuita.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const glassOpacity = useTransform(scrollY, [60, 200], [0, 1])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Liquid glass background — fades in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: glassOpacity,
          backdropFilter: 'blur(24px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
          background: 'linear-gradient(135deg, rgba(8,12,18,0.72) 0%, rgba(13,17,23,0.58) 50%, rgba(8,12,18,0.72) 100%)',
          borderBottom: '1px solid rgba(74,127,212,0.08)',
        }}
      />

      {/* Refraction highlight — top edge */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          opacity: glassOpacity,
          background: 'linear-gradient(90deg, transparent 0%, rgba(74,127,212,0.15) 20%, rgba(235,240,247,0.08) 50%, rgba(74,127,212,0.15) 80%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative"
        style={{
          maxWidth: '960px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <motion.div
          className="flex items-center justify-between"
          animate={{ height: scrolled ? '56px' : '64px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="block rounded-full"
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: '#4A7FD4',
                boxShadow: '0 0 8px rgba(74,127,212,0.35)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                letterSpacing: '0.01em',
                color: '#F5F0E8',
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
            >
              Miriam Campos
            </span>
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'rgba(74,127,212,0.45)',
                fontWeight: 400,
                marginLeft: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              Psicologia Clnica
            </span>
          </a>

          {/* CTA — compact pill */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px 3px 8px 3px',
              backgroundColor: 'rgba(74,127,212,0.10)',
              border: '1px solid rgba(74,127,212,0.18)',
              color: 'rgba(245,240,232,0.85)',
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              cursor: 'pointer',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget
              t.style.backgroundColor = 'rgba(74,127,212,0.20)'
              t.style.borderColor = 'rgba(74,127,212,0.4)'
              t.style.color = '#F5F0E8'
              t.style.boxShadow = '0 0 16px rgba(74,127,212,0.10)'
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget
              t.style.backgroundColor = 'rgba(74,127,212,0.10)'
              t.style.borderColor = 'rgba(74,127,212,0.18)'
              t.style.color = 'rgba(245,240,232,0.85)'
              t.style.boxShadow = 'none'
            }}
          >
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(235,240,247,0.03) 0%, transparent 60%)',
              }}
            />
            <span className="relative" style={{ lineHeight: 1 }}>Agendar</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              className="relative"
            >
              <path
                d="M2.5 7h8M7.5 3.5 11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}
