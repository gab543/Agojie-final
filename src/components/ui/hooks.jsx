import { useState, useEffect, useRef } from 'react'

// ── useInView hook ──────────────────────────────────────────
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        obs.unobserve(el)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, isVisible]
}

// ── Reveal wrapper ──────────────────────────────────────────
export function Reveal({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const [ref, visible] = useInView()
  const base = {
    up:    { opacity: 0, transform: 'translateY(28px)' },
    left:  { opacity: 0, transform: 'translateX(-32px)' },
    right: { opacity: 0, transform: 'translateX(32px)' },
  }
  const s = {
    transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ...(visible ? { opacity: 1, transform: 'none' } : base[direction]),
    ...style,
  }
  return <div ref={ref} className={className} style={s}>{children}</div>
}

// ── Counter animation ───────────────────────────────────────
export function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    const s = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - s) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      setVal(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [start, target, duration])
  return val
}
