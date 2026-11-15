import { motion } from 'motion/react'

import { CountUp } from '@/components/count-up'
import { ScrollHighlight } from '@/components/scroll-highlight'
import { SectionHeading } from '@/components/section-heading'
import { useLayout } from '@/providers/layout-provider'

import { ExperienceList } from './experience-list'
import { experiences } from './experiences'

const ease = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: 10, suffix: '+', label: 'Years writing code' },
  { value: experiences.length, suffix: '', label: 'Companies' },
  { value: 8, suffix: '', label: 'Featured projects' },
  { value: 20, suffix: '+', label: 'Technologies' }
]

export const ExperienceSection = () => {
  const { aboutSection } = useLayout()

  return (
    <section
      ref={aboutSection}
      aria-label="About"
      className="relative main-padding py-28 sm:py-36"
    >
      <SectionHeading
        index="02"
        eyebrow="About"
        title="A decade of *craft*, one detail at a time."
      />

      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <ScrollHighlight
            text="I wrote my first line of code more than a decade ago, back when PHP ruled and double-clicking index.html counted as deployment. Today I design and build for the web, where thoughtful design, solid engineering and motion that feels alive meet."
            className="font-serif text-3xl leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col gap-5 text-sm leading-relaxed text-fg/65 lg:col-span-4 lg:pt-3"
        >
          <p>
            From HTML (yes, I&apos;ll argue it&apos;s a programming language),
            CSS and JavaScript, I grew into TypeScript, React, Vue.js, Next.js
            and Node.js, with plenty of hours spent designing REST APIs along
            the way.
          </p>
          <p>
            Today my home turf is React and Next.js on the front end and Laravel
            on the back end, so I can take a product from first sketch to
            shipped feature, API included. I&apos;m comfortable with GraphQL,
            and I stay current with the tools I rely on.
          </p>
          <p className="text-fg">
            Right now I work full-time as a Frontend Developer, building
            production apps with Next.js, and I take on select freelance design
            and build projects.
          </p>
        </motion.div>
      </div>

      <dl className="mt-20 grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            className="flex flex-col gap-2 border-b border-line py-8 pr-4 even:pl-4 lg:border-r lg:border-b-0 lg:pl-6 lg:first:pl-0 lg:last:border-r-0"
          >
            <dt className="order-2 font-mono text-xs tracking-[0.16em] text-muted uppercase">
              {s.label}
            </dt>
            <dd className="order-1 font-serif text-6xl tracking-tight sm:text-7xl">
              <CountUp
                to={s.value}
                suffix={s.suffix}
              />
            </dd>
          </motion.div>
        ))}
      </dl>

      <div className="mt-24">
        <h3 className="mb-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
          Experience
        </h3>
        <ExperienceList />
      </div>
    </section>
  )
}
