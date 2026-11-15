import '@/styles/globals.css'
import 'lenis/dist/lenis.css'
import { ReactLenis } from 'lenis/react'
import { MotionConfig } from 'motion/react'
import type { AppProps } from 'next/app'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'

import { Header } from '@/components/header/header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { LayoutProvider } from '@/providers/layout-provider'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist'
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  // Only used for small labels; don't let it compete with the body font on load.
  preload: false,
  variable: '--font-geist-mono'
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: true, autoRaf: true }}
    >
      <MotionConfig reducedMotion="user">
        <LayoutProvider>
          <div
            className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans`}
          >
            <a
              href="#main"
              className="sr-only z-50 rounded-full bg-fg px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
            >
              Skip to content
            </a>
            <Header />
            <main id="main">
              <Component {...pageProps} />
            </main>
            <ScrollToTop />
          </div>
        </LayoutProvider>
      </MotionConfig>
    </ReactLenis>
  )
}
