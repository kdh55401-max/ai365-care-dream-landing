import content from '../content.json'
import type { SiteContent } from './types/content'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Roles from './components/Roles'
import Trust from './components/Trust'
import Status from './components/Status'
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
        <Roles content={siteContent.roles} />
        <Trust content={siteContent.trust} />
        <Status content={siteContent.status} />
        <Cta content={siteContent.cta} />
      </main>
      <Footer />
    </div>
  )
}
