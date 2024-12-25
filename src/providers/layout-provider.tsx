import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef
} from 'react'

type LayoutProviderType = {
  homeSection: RefObject<HTMLDivElement | null>
  stacksSection: RefObject<HTMLDivElement | null>
  aboutSection: RefObject<HTMLDivElement | null>
  showcaseSection: RefObject<HTMLDivElement | null>
  contactSection: RefObject<HTMLDivElement | null>
}

const LayoutContext = createContext<LayoutProviderType | null>(null)

const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const homeSection = useRef<HTMLDivElement | null>(null)
  const stacksSection = useRef<HTMLDivElement | null>(null)
  const aboutSection = useRef<HTMLDivElement | null>(null)
  const showcaseSection = useRef<HTMLDivElement | null>(null)
  const contactSection = useRef<HTMLDivElement | null>(null)
  return (
    <LayoutContext.Provider
      value={{
        homeSection,
        stacksSection,
        aboutSection,
        showcaseSection,
        contactSection
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
