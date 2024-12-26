import {
  Experience,
  FooterSection,
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
      <FooterSection />
      {/* <div className="h-[300vh]"></div> */}
    </>
  )
}

export default Home
