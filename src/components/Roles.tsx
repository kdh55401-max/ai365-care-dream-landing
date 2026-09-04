import type { RolesContent } from '../types/content'
import Reveal from './Reveal'

interface RolesProps {
  content: RolesContent
}

export default function Roles({ content }: RolesProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
              {content.eyebrow}
            </span>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy-700 sm:text-3xl md:text-4xl">
              {content.headline}
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {content.items.map((item, index) => (
            <Reveal key={item.role} delayMs={index * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-navy-50 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl">
                <span className="inline-flex w-fit items-center rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-700">
                  {item.role}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy-700">
                  {item.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={300}>
          <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-teal-100 bg-teal-50 px-6 py-5 text-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="flex-shrink-0 text-teal-600"
              aria-hidden="true"
            >
              <path
                d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M9.2 12.2l1.9 1.9 3.7-3.9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-bold text-navy-700 sm:text-base">{content.principle}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
