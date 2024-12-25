import {
  Experience,
  HeroSection,
  ShowcaseSection,
  StacksSection
} from '@/components/home'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StacksSection />
      <Experience />
      <ShowcaseSection />
      <div className="h-[300vh]"></div>
    </>
  )
}

export default Home
