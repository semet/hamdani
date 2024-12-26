import { useInView } from 'motion/react'
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

import { HomeMenu } from '@/data'

type LayoutProviderType = {
  homeSection: RefObject<HTMLDivElement | null>
  stacksSection: RefObject<HTMLDivElement | null>
  aboutSection: RefObject<HTMLDivElement | null>
  showcaseSection: RefObject<HTMLDivElement | null>
  contactSection: RefObject<HTMLDivElement | null>
  activeMenu: HomeMenu
  setActiveMenu: Dispatch<SetStateAction<HomeMenu>>
}

const LayoutContext = createContext<LayoutProviderType | null>(null)

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const sectionRefs = {
    homeSection: useRef<HTMLDivElement | null>(null),
    stacksSection: useRef<HTMLDivElement | null>(null),
    aboutSection: useRef<HTMLDivElement | null>(null),
    showcaseSection: useRef<HTMLDivElement | null>(null),
    contactSection: useRef<HTMLDivElement | null>(null)
  }
  const [activeMenu, setActiveMenu] = useState<HomeMenu>('homeSection')

  const isHomeInView = useInView(sectionRefs.homeSection, {
    margin: '-500px 0px 0px 0px'
  })
  const isStacksInView = useInView(sectionRefs.stacksSection, {
    margin: '-500px 0px 0px 0px'
  })
  const isAboutInView = useInView(sectionRefs.aboutSection, {
    margin: '-500px 0px 0px 0px'
  })
  const isShowcaseInView = useInView(sectionRefs.showcaseSection, {
    margin: '-500px 0px 0px 0px'
  })
  const isContactInView = useInView(sectionRefs.contactSection)

  useEffect(() => {
    const sections = [
      { id: 'homeSection', inView: isHomeInView },
      { id: 'stacksSection', inView: isStacksInView },
      { id: 'aboutSection', inView: isAboutInView },
      { id: 'showcaseSection', inView: isShowcaseInView },
      { id: 'contactSection', inView: isContactInView }
    ]

    const activeSection = sections.find((section) => section.inView)?.id

    if (activeSection) {
      setActiveMenu(activeSection as HomeMenu)
    }
  }, [
    isHomeInView,
    isStacksInView,
    isAboutInView,
    isShowcaseInView,
    isContactInView
  ])

  return (
    <LayoutContext.Provider
      value={{
        ...sectionRefs,
        activeMenu,
        setActiveMenu
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
