import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export default function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Content stays fully opaque at all times — only a small translate animates
  // in. Never hiding via opacity means a slow/misfiring observer (or a JS
  // environment quirk) can at worst leave content 8px offset, never blank.
  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 ${
        visible ? 'translate-y-0' : 'translate-y-2'
      } ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
