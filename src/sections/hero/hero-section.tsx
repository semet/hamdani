import { motion, useScroll, useTransform } from 'motion/react'

import { ArrowIcon } from '@/components/arrow-icon'
import { Magnetic } from '@/components/magnetic'
import { Marquee } from '@/components/marquee'
import { RevealText } from '@/components/reveal-text'
import { site } from '@/data/site'
import { useLocalTime, useTimeZoneCity } from '@/hooks/use-local-time'
import { useLayout } from '@/providers/layout-provider'

import { ScrollBadge } from './scroll-badge'

const ease = [0.16, 1, 0.3, 1] as const

const services = [
  'Web Design',
  'Frontend Engineering',
  'Design Systems',
  'Motion & Interaction',
  'Landing Pages',
  'Web Apps',
  'Next.js & React'
]

// Slides in without fading so the text is painted on the first frame (keeps LCP fast).
const slideUp = (delay: number) => ({
  initial: { y: 24 },
  animate: { y: 0 },
  transition: { duration: 0.9, ease, delay }
})

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay }
})

export const HeroSection = () => {
  const { homeSection, onMenuClick } = useLayout()
  const time = useLocalTime()
  const city = useTimeZoneCity()

  const { scrollYProgress } = useScroll({
    target: homeSection,
    offset: ['start start', 'end start']
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4])

  return (
    <section
      ref={homeSection}
      aria-label="Introduction"
      className="relative isolate overflow-hidden"
    >
      {/* Ambient glow: radial gradients (no blur filter), animated by transform only */}
      <motion.div
        aria-hidden
        style={{ scale: glowScale }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute -top-1/4 -right-1/4 size-[70vmax] rounded-full bg-[radial-gradient(circle,var(--glow-ember),transparent_60%)]"
          animate={{ x: ['0%', '-12%'], y: ['0%', '10%'] }}
          transition={{
            duration: 18,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror'
          }}
        />
        <motion.div
          className="absolute -bottom-1/3 -left-1/4 size-[60vmax] rounded-full bg-[radial-gradient(circle,var(--glow-indigo),transparent_60%)]"
          animate={{ x: ['0%', '14%'], y: ['0%', '-8%'] }}
          transition={{
            duration: 22,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror'
          }}
        />
        {/* Hairline column grid */}
        <div className="absolute inset-0 mask-[linear-gradient(to_bottom,black,transparent_85%)] main-padding">
          <div className="grid h-full grid-cols-4 border-x border-line lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border-r border-line last:border-r-0 max-lg:nth-[n+4]:hidden"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="flex min-h-svh flex-col justify-between main-padding pt-32 pb-10 sm:pt-36"
      >
        {/* Meta row */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-[0.18em] text-muted uppercase"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <motion.span
                className="absolute inset-0 rounded-full bg-ember"
                animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
              />
              <span className="relative size-2 rounded-full bg-ember" />
            </span>
            Available for new projects
          </span>
          <span className="flex items-center gap-3">
            <span>{city ? `Your time · ${city}` : 'Your local time'}</span>
            <span className="h-px w-6 bg-line-strong" />
            <span className="min-w-[5ch] text-fg tabular-nums">
              {time || '--:--'}
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col gap-8 py-16 lg:py-10">
          <motion.p
            {...fadeUp(0.2)}
            className="font-mono text-xs tracking-[0.18em] text-muted uppercase"
          >
            {site.name} — {site.role}
          </motion.p>
          <RevealText
            as="h1"
            immediate
            delay={0.25}
            text="Designing the web, *beautifully* & built to perform."
            className="max-w-[14ch] font-serif text-[clamp(3.25rem,10.5vw,11rem)] leading-[0.88] tracking-[-0.02em] text-balance"
          />
        </div>

        {/* Intro + actions */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            {...slideUp(0.3)}
            className="max-w-md text-base leading-relaxed text-fg/70 sm:text-lg"
          >
            I&apos;m Hamdani — I design and build fast, accessible websites and
            web apps with Next.js, React and Tailwind CSS. A decade of turning
            ideas into interfaces people love to use.
          </motion.p>

          <motion.div
            {...fadeUp(0.85)}
            className="flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <button
                onClick={() => onMenuClick('showcaseSection')}
                className="group flex items-center gap-3 rounded-full bg-fg py-2 pr-2 pl-6 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-ember"
              >
                See selected work
                <span className="grid size-9 place-items-center rounded-full bg-canvas text-fg transition-transform duration-500 group-hover:rotate-45">
                  <ArrowIcon direction="right" />
                </span>
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm transition-colors duration-300 hover:border-fg"
              >
                Résumé
                <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <ScrollBadge onClick={() => onMenuClick('stacksSection')} />
          </motion.div>
        </div>
      </motion.div>

      {/* Services marquee */}
      <div className="border-y border-line bg-surface/60 py-5">
        <Marquee duration={45}>
          {services.map((s) => (
            <span
              key={s}
              className="flex items-center gap-8 pr-8 font-serif text-3xl whitespace-nowrap italic sm:text-4xl"
            >
              {s}
              <span className="text-xl text-ember not-italic">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
