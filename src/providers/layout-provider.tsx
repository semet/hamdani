import { useLenis } from 'lenis/react'
import { useInView } from 'motion/react'
import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef
} from 'react'

import { HomeMenu } from '@/data/menu'

type SectionRef = RefObject<HTMLElement | null>

type LayoutProviderType = {
  homeSection: SectionRef
  stacksSection: SectionRef
  aboutSection: SectionRef
  showcaseSection: SectionRef
  contactSection: SectionRef
  activeMenu: HomeMenu
  onMenuClick: (_id: HomeMenu) => void
}

const LayoutContext = createContext<LayoutProviderType | null>(null)

// A section is "active" while it crosses the vertical middle of the viewport.
const CENTER_LINE = { margin: '-50% 0px -50% 0px' } as const

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const lenis = useLenis()

  const homeSection = useRef<HTMLElement | null>(null)
  const stacksSection = useRef<HTMLElement | null>(null)
  const aboutSection = useRef<HTMLElement | null>(null)
  const showcaseSection = useRef<HTMLElement | null>(null)
  const contactSection = useRef<HTMLElement | null>(null)

  const homeInView = useInView(homeSection, CENTER_LINE)
  const stacksInView = useInView(stacksSection, CENTER_LINE)
  const aboutInView = useInView(aboutSection, CENTER_LINE)
  const showcaseInView = useInView(showcaseSection, CENTER_LINE)
  const contactInView = useInView(contactSection, CENTER_LINE)

  // Derived during render: sections are stacked, so exactly one crosses the center line.
  const activeMenu: HomeMenu = contactInView
    ? 'contactSection'
    : showcaseInView
      ? 'showcaseSection'
      : aboutInView
        ? 'aboutSection'
        : stacksInView
          ? 'stacksSection'
          : homeInView
            ? 'homeSection'
            : 'homeSection'

  // Event handler: reading refs here (not during render) is allowed.
  const onMenuClick = (id: HomeMenu) => {
    const refs = {
      homeSection,
      stacksSection,
      aboutSection,
      showcaseSection,
      contactSection
    }
    const target = refs[id].current
    if (!target) return
    const top =
      id === 'contactSection'
        ? document.documentElement.scrollHeight
        : target.offsetTop
    if (lenis) {
      lenis.scrollTo(top, { duration: 1.4 })
    } else {
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <LayoutContext.Provider
      value={{
        homeSection,
        stacksSection,
        aboutSection,
        showcaseSection,
        contactSection,
        activeMenu,
        onMenuClick
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

const useLayout = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}

export { LayoutProvider, useLayout }
