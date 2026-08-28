import content from '../content.json'
import type { SiteContent } from './types/content'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Trust from './components/Trust'
import Cta from './components/Cta'
import Footer from './components/Footer'

const siteContent = content as SiteContent

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero content={siteContent.hero} />
        <Problem content={siteContent.problem} />
        <Solution content={siteContent.solution} />
        <Trust content={siteContent.trust} />
        <Cta content={siteContent.cta} />
      </main>
      <Footer />
    </div>
  )
}
