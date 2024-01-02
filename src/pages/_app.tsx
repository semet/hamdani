import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const inconsolataFont = Inconsolata({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
   useEffect(() => {
      AOS.init({
         easing: "ease-out-cubic",
      });
   });
   return (
      <main className={inconsolataFont.className}>
         <Component {...pageProps} />
      </main>
   );
}
