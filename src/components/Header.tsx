import { useState } from 'react'
import logo from '../../images/logo.png'

const NAV_LINKS = [
  { label: '서비스 소개', href: '#problem' },
  { label: '작동 방식', href: '#solution' },
  { label: '구현 현황', href: '#status' },
  { label: '확장 계획', href: '#expansion' },
  { label: '문의', href: '#cta' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="AI365 CARE DREAM 로고" className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-sm font-bold tracking-tight text-navy-700 sm:text-base">
            AI365 CARE DREAM
          </span>
        </div>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden whitespace-nowrap rounded-full bg-navy-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-600 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:text-sm md:inline-flex"
          >
            도입·실증 문의
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-700 transition hover:bg-navy-50 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-navy-50 bg-white px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-navy-50 hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="mt-2 whitespace-nowrap rounded-full bg-navy-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-navy-600"
            >
              도입·실증 문의
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
