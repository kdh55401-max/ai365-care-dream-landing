import logo from '../../images/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="AI365 CARE DREAM 로고" className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-sm font-bold tracking-tight text-navy-700 sm:text-base">
            AI365 CARE DREAM
          </span>
        </div>
        <a
          href="#cta"
          className="whitespace-nowrap rounded-full bg-navy-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-600 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 sm:text-sm"
        >
          도입 문의
        </a>
      </div>
    </header>
  )
}
