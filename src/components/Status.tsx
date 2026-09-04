import type { StatusColumn, StatusContent } from '../types/content'
import Reveal from './Reveal'

interface StatusProps {
  content: StatusContent
}

const COLUMN_STYLES: Record<
  StatusColumn['id'],
  { card: string; label: string; sublabel: string; itemIcon: JSX.Element }
> = {
  now: {
    card: 'border-leaf-100 bg-leaf-100/30',
    label: 'text-leaf-500',
    sublabel: 'text-navy-700',
    itemIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  next: {
    card: 'border-teal-100 bg-teal-50/60',
    label: 'text-teal-600',
    sublabel: 'text-navy-700',
    itemIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 7v5l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  later: {
    card: 'border-navy-100 bg-navy-50/40',
    label: 'text-navy-400',
    sublabel: 'text-navy-400',
    itemIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 4.95l-1.41-1.41M6.46 6.46 5.05 5.05m11.9 0-1.41 1.41M6.46 17.54l-1.41 1.41"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
}

export default function Status({ content }: StatusProps) {
  return (
    <section id="status" className="bg-white py-20 md:py-28">
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

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.columns.map((column, index) => {
            const style = COLUMN_STYLES[column.id]
            return (
              <Reveal
                key={column.id}
                delayMs={index * 100}
                className="h-full"
              >
                <div
                  id={column.id === 'later' ? 'expansion' : undefined}
                  className={`flex h-full flex-col rounded-2xl border p-6 scroll-mt-24 ${style.card}`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className={`text-xs font-black uppercase tracking-widest ${style.label}`}>
                      {column.label}
                    </span>
                    <span className={`text-xs font-semibold ${style.sublabel}`}>
                      {column.sublabel}
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className={`mt-0.5 flex-shrink-0 ${style.label}`}>
                          {style.itemIcon}
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
