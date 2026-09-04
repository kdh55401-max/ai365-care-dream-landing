import type { HeroContent } from '../types/content'
import Reveal from './Reveal'
import MvpMockup from './MvpMockup'

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-float-slow rounded-full bg-teal-100 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 animate-float rounded-full bg-leaf-100 opacity-60 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-600">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
              {content.badge}
            </span>
          </Reveal>

          <Reveal delayMs={100}>
            <h1 className="mt-5 text-[clamp(2rem,5vw+0.5rem,3.25rem)] font-extrabold leading-[1.2] tracking-tight text-navy-700">
              {content.headline}
            </h1>
          </Reveal>

          <Reveal delayMs={180}>
            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-teal-600 md:mx-0">
              {content.subheadline}
            </p>
          </Reveal>

          <Reveal delayMs={260}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 md:mx-0 md:text-base">
              {content.subtext}
            </p>
          </Reveal>

          <Reveal delayMs={340}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
              <a
                href="https://ai365-care-dream.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-leaf-500 px-7 py-3.5 text-sm font-bold text-navy-700 shadow-card transition-all duration-300 ease-out hover:scale-105 hover:bg-teal-400 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
              >
                실제 MVP 체험하기
              </a>
              <a
                href="#cta"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 ease-out hover:scale-105 hover:bg-navy-600 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:w-auto sm:text-base"
              >
                도입·실증 문의하기
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={400}>
            <a
              href="#solution"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-400 underline-offset-4 transition hover:text-teal-600 hover:underline focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
            >
              작동 방식 보기
              <span aria-hidden="true">↓</span>
            </a>
          </Reveal>
        </div>

        <Reveal delayMs={150} className="flex flex-1 items-center justify-center">
          <MvpMockup />
        </Reveal>
      </div>
    </section>
  )
}
