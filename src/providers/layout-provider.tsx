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
  onMenuClick: (_id: HomeMenu) => void
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
  const onMenuClick = (id: HomeMenu) => {
    const { homeSection, stacksSection, aboutSection, showcaseSection } =
      sectionRefs
    const section = id
    const offset = 70
    switch (section) {
      case 'homeSection':
        window.scrollTo({
          top: homeSection.current?.offsetTop,
          behavior: 'smooth'
        })
        break
      case 'stacksSection':
        window.scrollTo({
          top: (stacksSection.current?.offsetTop ?? 0) - offset - 40,
          behavior: 'smooth'
        })
        break
      case 'aboutSection':
        window.scrollTo({
          top: (aboutSection.current?.offsetTop ?? 0) - offset,
          behavior: 'smooth'
        })
        break
      case 'showcaseSection':
        window.scrollTo({
          top: showcaseSection.current?.offsetTop,
          behavior: 'smooth'
        })
        break
      case 'contactSection':
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
        break
    }
  }

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
        setActiveMenu,
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
