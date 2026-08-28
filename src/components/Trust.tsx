import type { TrustContent } from '../types/content'
import Reveal from './Reveal'

interface TrustProps {
  content: TrustContent
}

export default function Trust({ content }: TrustProps) {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-leaf-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Trust
          </span>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            {content.headline}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid grid-cols-1 gap-5 text-left md:grid-cols-3">
          {content.points.map((point, index) => (
            <Reveal key={point} delayMs={200 + index * 100} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-teal-400/40 hover:bg-white/10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-base leading-relaxed text-navy-50">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
