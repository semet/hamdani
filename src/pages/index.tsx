import { ExperienceSection } from '@/sections/experience/experience-section'
import { FooterSection } from '@/sections/footer/footer-section'
import { HeroSection } from '@/sections/hero/hero-section'
import { ShowcaseSection } from '@/sections/showcase/showcase-section'
import { StacksSection } from '@/sections/stacks/stacks-section'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StacksSection />
      <ExperienceSection />
      <ShowcaseSection />
      <FooterSection />
    </>
  )
}

export default Home
