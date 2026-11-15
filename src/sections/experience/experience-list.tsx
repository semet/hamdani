import { motion } from 'motion/react'

import { experiences } from './experiences'

const ease = [0.16, 1, 0.3, 1] as const

const month = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC'
})

/** "2023-01-19--Present" → { start: "Jan 2023", end: "Present" } */
const formatRange = (range: string) => {
  const [start, end] = range.split('--')
  const fmt = (d: string) =>
    /^\d{4}-\d{2}-\d{2}$/.test(d) ? month.format(new Date(`${d}T00:00:00Z`)) : d
  return { start: fmt(start), end: fmt(end), current: end === 'Present' }
}

export const ExperienceList = () => (
  <ol className="border-t border-line">
    {experiences.map((exp, i) => {
      const { start, end, current } = formatRange(exp.date)
      return (
        <motion.li
          key={exp.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease, delay: i * 0.06 }}
          className="group relative grid gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-surface/70 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:px-4"
        >
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.12em] text-muted uppercase lg:col-span-3 lg:items-start lg:pt-2">
            {current && (
              <span className="size-1.5 rounded-full bg-ember lg:mt-1" />
            )}
            <span>
              {start} — {end}
            </span>
          </div>

          <div className="flex flex-col gap-1 lg:col-span-4">
            <h4 className="font-serif text-3xl tracking-tight transition-colors duration-500 group-hover:text-ember sm:text-4xl">
              {exp.company}
            </h4>
            <p className="text-sm text-fg/60">{exp.title}</p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <p className="text-sm leading-relaxed text-fg/65">
              {exp.description}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 text-xs text-fg/70"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      )
    })}
  </ol>
)
