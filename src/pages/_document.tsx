import { Head, Html, Main, NextScript } from 'next/document'

import { THEME_STORAGE_KEY } from '@/hooks/use-theme'

// Runs before first paint: saved choice wins, otherwise follow the OS preference.
// Prevents a flash of the wrong theme. Kept tiny and dependency-free on purpose.
const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var d=document.documentElement;d.dataset.theme=t;d.style.colorScheme=t}catch(e){}})()`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f3efe7"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0b0b0c"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </Head>
      <body className="bg-canvas text-fg antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
