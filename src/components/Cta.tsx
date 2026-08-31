import type { CtaContent } from '../types/content'
import Reveal from './Reveal'
import ApplyForm from './ApplyForm'

interface CtaProps {
  content: CtaContent
}

export default function Cta({ content }: CtaProps) {
  return (
    <section id="cta" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-600 px-8 py-16 shadow-card sm:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-leaf-500/20 blur-3xl" />

            <h2 className="relative text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              {content.headline}
            </h2>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#apply-name"
                onClick={(event) => {
                  event.preventDefault()
                  const nameInput = document.getElementById('apply-name')
                  nameInput?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  nameInput?.focus({ preventScroll: true })
                }}
                className="inline-flex items-center justify-center rounded-full bg-leaf-500 px-8 py-4 text-sm font-bold text-navy-700 shadow-card transition-all duration-300 ease-out hover:scale-105 hover:bg-teal-400 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-700 sm:text-base"
              >
                {content.label}
              </a>
              <a
                href="https://ai365-care-dream.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-700 sm:text-base"
              >
                실제 MVP 체험하기
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="mt-10 rounded-3xl border border-navy-50 bg-white p-8 text-left shadow-card sm:p-12">
            <h3 className="text-center text-lg font-bold tracking-tight text-navy-700 sm:text-xl">
              문의하기
            </h3>
            <ApplyForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
