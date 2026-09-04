import type { SolutionContent } from '../types/content'
import Reveal from './Reveal'

interface SolutionProps {
  content: SolutionContent
}

const ICONS: Record<string, JSX.Element> = {
  'CARE PROFILE': (
    <path d="M9 12h6M9 16h6M8 4h8a2 2 0 012 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 012-2z" />
  ),
  'ONE TOUCH TALK': (
    <path d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3zM6 11a6 6 0 0012 0M12 19v3" />
  ),
  'CALL PROTOCOL': (
    <path d="M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8a10 10 0 01-3-.44L3 21l1.5-4.15A7.93 7.93 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  ),
  'CENTER CALL': (
    <path d="M4 5c0 8.284 6.716 15 15 15h1a1 1 0 001-1v-2.5a1 1 0 00-.8-.98l-3.5-.7a1 1 0 00-1.05.45l-1 1.6a12.06 12.06 0 01-5.52-5.52l1.6-1a1 1 0 00.45-1.05l-.7-3.5A1 1 0 008.5 4H6a1 1 0 00-1 1z" />
  ),
  'AUTO CASE': (
    <path d="M4 7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
  ),
}

export default function Solution({ content }: SolutionProps) {
  return (
    <section id="solution" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-leaf-500">
              Solution
            </span>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy-700 sm:text-3xl md:text-4xl">
              {content.headline}
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {content.steps.map((step, index) => (
              <Reveal key={step.title} delayMs={index * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-navy-50 bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-teal-600">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-navy-100 transition-colors duration-300 group-hover:text-leaf-500"
                      >
                        {ICONS[step.title]}
                      </svg>
                    </div>
                    {!step.implemented && (
                      <span className="whitespace-nowrap rounded-full border border-dashed border-navy-100 px-2 py-0.5 text-[10px] font-bold text-navy-400">
                        다음 구현 단계
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-base font-bold tracking-tight text-navy-700">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
