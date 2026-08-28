import logo from '../../images/logo.png'
import type { HeroContent } from '../types/content'
import Reveal from './Reveal'

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-float-slow rounded-full bg-teal-100 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 animate-float rounded-full bg-leaf-100 opacity-60 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-600">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
              AI365 CARE DREAM
            </span>
          </Reveal>

          <Reveal delayMs={100}>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.3] tracking-tight text-navy-700 sm:text-4xl md:text-[2.75rem] md:leading-[1.25] lg:text-5xl">
              {content.headline}
            </h1>
          </Reveal>

          <Reveal delayMs={200}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:mx-0 md:text-lg">
              {content.subtext}
            </p>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row md:justify-start md:items-start">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 ease-out hover:scale-105 hover:bg-navy-600 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:text-base"
              >
                도입·실증 문의하기
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-full border border-navy-100 px-7 py-3.5 text-sm font-semibold text-navy-700 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:text-base"
              >
                작동 방식 보기
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={150} className="flex flex-1 items-center justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-navy-50/60 p-8 shadow-card transition-transform duration-500 hover:scale-[1.03] sm:h-80 sm:w-80">
            {content.image ? (
              <img
                src={logo}
                alt="AI365 CARE DREAM 로고"
                className="h-full w-full object-contain"
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
