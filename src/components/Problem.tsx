import type { ProblemContent } from '../types/content'
import Reveal from './Reveal'

interface ProblemProps {
  content: ProblemContent
}

export default function Problem({ content }: ProblemProps) {
  return (
    <section id="problem" className="relative overflow-hidden bg-navy-50/30 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-navy-100" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
            Problem
          </span>
        </Reveal>

        <Reveal delayMs={150}>
          <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-extrabold leading-snug tracking-tight text-navy-700 sm:text-3xl md:text-4xl md:leading-snug">
            {content.headline}
          </h2>
        </Reveal>

        <Reveal delayMs={250}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {content.text}
          </p>
        </Reveal>

        <Reveal delayMs={350}>
          <div className="mx-auto mt-10 h-px w-16 bg-gradient-to-r from-transparent via-navy-100 to-transparent" />
        </Reveal>
      </div>
    </section>
  )
}
