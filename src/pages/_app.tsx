import '@/styles/globals.css'
import Lenis from '@studio-freight/lenis'
import type { AppProps } from 'next/app'
import { Nunito_Sans, Fira_Code } from 'next/font/google'
import { useEffect, useRef } from 'react'

import { Header } from '@/components/header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { useWindowWidth } from '@/hooks'
import { LayoutProvider } from '@/providers'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000']
})
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  const windowWidth = useWindowWidth()
  const lenisRef = useRef<Lenis | null>(null)
  useEffect(() => {
    if(windowWidth < 640) return
    const lenis = new Lenis()

    lenisRef.current = lenis

    // Animation frame loop
    const onRaf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(onRaf)
    }
    requestAnimationFrame(onRaf)

    return () => lenis.destroy()
  }, [windowWidth])
  return (
    <LayoutProvider>
      <main className={`${nunito.className} ${firaCode.style}`}>
        <Header />
        <Component {...pageProps} />
        <ScrollToTop />
      </main>
    </LayoutProvider>
  )
}
