'use client'
import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const NAVBAR_HEIGHT = 56

export function ScrollDots() {
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Track scroll progress through the currently active section (0 = just entered, 1 = about to leave)
  useEffect(() => {
    const computeProgress = () => {
      const el = document.getElementById(active)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const visibleHeight = rect.height - NAVBAR_HEIGHT
      const scrolled = NAVBAR_HEIGHT - rect.top
      const raw = visibleHeight > 0 ? scrolled / visibleHeight : 0
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        computeProgress()
        rafRef.current = null
      })
    }

    computeProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [active])

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {SECTIONS.map(({ id, label }, i) => {
        const isActive = active === id
        return (
          <div key={id} className="flex flex-col items-center">
            <button
              title={label}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2"
            >
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? '10px' : '6px',
                  height: isActive ? '10px' : '6px',
                  background: isActive ? 'var(--color-accent)' : 'var(--color-border-strong, #4a4a6a)',
                }}
              />
              <span
                className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute left-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {label}
              </span>
            </button>

            {/* Progress tail — sits in the fixed gap above, only visible (not just filled) for the active section */}
            {i < SECTIONS.length - 1 && (
              <div
                className="relative rounded-full overflow-hidden transition-opacity duration-300"
                style={{
                  width: '2px',
                  height: '14px',
                  marginTop: '6px',
                  background: 'var(--color-border)',
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div
                  className="absolute left-0 top-0 w-full rounded-full"
                  style={{
                    height: '100%',
                    background: 'linear-gradient(180deg, var(--color-accent-from), var(--color-accent-to))',
                    transform: `scaleY(${isActive ? progress : 0})`,
                    transformOrigin: 'top',
                    transition: 'transform 0.15s linear',
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
