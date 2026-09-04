export interface HeroContent {
  badge: string
  headline: string
  subheadline: string
  subtext: string
  image: string | null
}

export interface ProblemContent {
  headline: string
  text: string
  image: string | null
}

export interface SolutionStep {
  title: string
  description: string
  implemented: boolean
}

export interface SolutionContent {
  headline: string
  steps: SolutionStep[]
  image: string | null
}

export interface TrustContent {
  headline: string
  points: string[]
  image: string | null
}

export interface RoleItem {
  role: string
  headline: string
  description: string
}

export interface RolesContent {
  eyebrow: string
  headline: string
  items: RoleItem[]
  principle: string
}

export interface StatusColumn {
  id: 'now' | 'next' | 'later'
  label: string
  sublabel: string
  items: string[]
}

export interface StatusContent {
  eyebrow: string
  headline: string
  columns: StatusColumn[]
}

export interface CtaContent {
  headline: string
  description: string
  label: string
  action: string
  image: string | null
}

export interface SiteContent {
  hero: HeroContent
  problem: ProblemContent
  solution: SolutionContent
  roles: RolesContent
  trust: TrustContent
  status: StatusContent
  cta: CtaContent
}
