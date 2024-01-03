import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";

const inconsolataFont = Inconsolata({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider enableSystem={true} attribute="class">
         <main className={inconsolataFont.className}>
            <Component {...pageProps} />
         </main>
      </ThemeProvider>
   );
}
