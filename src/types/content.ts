export interface HeroContent {
  headline: string
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

export interface CtaContent {
  headline: string
  label: string
  action: string
  image: string | null
}

export interface SiteContent {
  hero: HeroContent
  problem: ProblemContent
  solution: SolutionContent
  trust: TrustContent
  cta: CtaContent
}
