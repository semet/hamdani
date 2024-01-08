import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Fira_Code, Inconsolata, Inter } from "next/font/google";

const inter = Inter({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
   variable: "--font-inter",
});

const firaCode = Fira_Code({
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
   variable: "--font-fira-code",
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider enableSystem={true} attribute="class">
         <main
            className={`${inter.className} ${firaCode.variable} bg-gradient-to-br from-indigo-800/30 dark:from-zinc-900 via-transparent dark:via-indigo-950/30 to-transparent overflow-clip`}
         >
            <Component {...pageProps} />
         </main>
      </ThemeProvider>
   );
}
