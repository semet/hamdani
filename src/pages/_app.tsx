import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";

const inconsolataFont = Inconsolata({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <main className={inconsolataFont.className}>
         <Component {...pageProps} />
      </main>
   );
}
