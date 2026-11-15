import { motion, useScroll, useTransform } from 'motion/react'

import { ArrowIcon } from '@/components/arrow-icon'
import { Magnetic } from '@/components/magnetic'
import { RevealText } from '@/components/reveal-text'
import { site } from '@/data/site'
import { socials } from '@/data/socials'
import { useLocalTime, useTimeZoneCity } from '@/hooks/use-local-time'
import { useLayout } from '@/providers/layout-provider'

const ease = [0.16, 1, 0.3, 1] as const
// Evaluated at build time for the static page.
const YEAR = new Date().getFullYear()

export const FooterSection = () => {
  const { contactSection, onMenuClick } = useLayout()
  const time = useLocalTime()
  const city = useTimeZoneCity()
  const { scrollYProgress } = useScroll({
    target: contactSection,
    offset: ['start end', 'end end']
  })
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['40%', '0%'])

  return (
    <footer
      ref={contactSection}
      aria-label="Contact"
      className="relative isolate overflow-hidden border-t border-line bg-surface"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 size-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-ember),transparent_60%)]"
      />

      <div className="main-padding pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase"
        >
          <span className="text-ember">(04)</span>
          <span className="h-px w-10 bg-line-strong" />
          <span>Contact</span>
        </motion.div>

        <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <RevealText
            as="h2"
            text="Let's build something *beautiful* together."
            className="max-w-[12ch] font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-[-0.02em]"
          />
          <Magnetic strength={0.4}>
            <a
              href={`mailto:${site.email}`}
              className="group grid size-40 place-items-center rounded-full bg-ember text-center text-canvas transition-transform duration-500 hover:scale-105 sm:size-48"
            >
              <span className="flex flex-col items-center gap-2 text-sm font-medium">
                <ArrowIcon className="size-6 transition-transform duration-500 group-hover:rotate-45" />
                Get in touch
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-20 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              Email
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-lg underline decoration-line-strong underline-offset-8 transition-colors hover:decoration-ember"
            >
              {site.email}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              Phone
            </h3>
            <a
              href={`tel:${site.phone}`}
              className="w-fit text-lg underline decoration-line-strong underline-offset-8 transition-colors hover:decoration-ember"
            >
              {site.phone}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              Elsewhere
            </h3>
            <ul className="flex flex-col gap-1.5">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="group flex w-fit items-center gap-2 text-fg/80 transition-colors hover:text-fg"
                  >
                    {s.label}
                    <ArrowIcon className="size-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
              Your local time
            </h3>
            <p className="text-lg">
              <span className="tabular-nums">{time || '--:--'}</span>
              {city && <span className="text-muted"> · {city}</span>}
            </p>
            <p className="text-sm text-muted">Based in {site.location}</p>
          </div>
        </div>
      </div>

      {/* Oversized decorative wordmark, drawn as SVG artwork rather than readable text */}
      <div
        aria-hidden
        className="pointer-events-none mt-16 overflow-hidden select-none"
      >
        <motion.svg
          style={{ y: wordmarkY }}
          viewBox="0 0 1000 250"
          className="block h-auto w-full text-fg/6"
        >
          <text
            x="500"
            y="222"
            textAnchor="middle"
            fill="currentColor"
            className="font-serif text-[300px] tracking-[-0.04em]"
          >
            Hamdani
          </text>
        </motion.svg>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-line main-padding py-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
        <span>
          © {YEAR} {site.name}
        </span>
        <span>Designed & built by Hamdani — Next.js, Tailwind CSS, Motion</span>
        <button
          onClick={() => onMenuClick('homeSection')}
          className="flex items-center gap-2 uppercase transition-colors hover:text-fg"
        >
          Back to top
          <ArrowIcon
            direction="up"
            className="size-3.5"
          />
        </button>
      </div>
    </footer>
  )
}
