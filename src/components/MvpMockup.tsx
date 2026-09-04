import logo from '../../images/logo.png'

/**
 * 실제 캡처 이미지 대신, 실제 MVP(ai365-care-dream.vercel.app)의 화면 문구·라벨·위험도
 * 체계를 그대로 가져와 구성한 정적 목업. CARE PROFILE(수급자 정보) → ONE TOUCH TALK
 * (상황 말하기) → AI 확인 질문 → CALL PROTOCOL 대응 안내 순서로, 실제 코드에 없는
 * 기능(CENTER CALL 자동연결, AUTO CASE 등)은 포함하지 않는다.
 */
export default function MvpMockup() {
  return (
    <div className="relative flex flex-col items-center">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-72 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.05]"
      />

      <div className="relative w-[260px] rounded-[2.25rem] border-[6px] border-navy-700 bg-navy-50/50 p-2.5 shadow-card sm:w-[280px]">
        <div className="flex flex-col gap-3 rounded-[1.5rem] bg-white p-3.5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-600">
              CARE PROFILE
            </span>
            <span className="text-[10px] font-semibold text-slate-400">방문 중</span>
          </div>
          <div className="rounded-xl border border-navy-50 bg-navy-50/40 px-3 py-2.5">
            <p className="text-xs font-bold text-navy-700">김○○ 어르신</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
              최근 혈압약 복용을 시작하셨습니다.
            </p>
          </div>

          <div className="rounded-xl border border-navy-50 p-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-teal-500 to-navy-700 text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
                  <path
                    d="M5 11a7 7 0 0 0 14 0M12 18v3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-navy-400">
                현장 상황 말하기
              </span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
              "오늘 아침부터 어지럽다고 하시고 걸을 때 휘청거려요."
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              AI 확인 질문
            </p>
            <p className="mt-1.5 text-[11px] font-semibold leading-relaxed text-navy-700">
              지금 혼자 서거나 걷기 어려운가요?
            </p>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded-full border border-navy-100 bg-white px-2.5 py-1 text-[10px] font-bold text-navy-700">
                네
              </span>
              <span className="rounded-full border border-navy-100 bg-white px-2.5 py-1 text-[10px] font-bold text-navy-700">
                아니요
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-orange-100 bg-orange-50 p-3">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <p className="text-[10px] font-bold text-orange-700">기관 확인 필요</p>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
              지금 할 일: 어르신을 앉히거나 눕혀 안정을 취하게 하세요.
            </p>
          </div>
        </div>
      </div>

      <span className="mt-4 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-xs font-bold text-navy-700 shadow-sm">
        실제 MVP 작동 화면
      </span>
    </div>
  )
}
