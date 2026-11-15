import { motion } from 'motion/react'

import { SectionHeading } from '@/components/section-heading'
import { useLayout } from '@/providers/layout-provider'

import { stacks } from './stacks'
import { ToolGrid } from './tool-grid'
import { tools } from './tools'

const principles = [
  {
    k: 'Pixel-perfect',
    v: 'From Figma to production without losing the details.'
  },
  {
    k: 'Fast by default',
    v: 'Performance budgets, lean bundles, Core Web Vitals.'
  },
  {
    k: 'Accessible',
    v: 'Semantic markup, keyboard support, motion that respects you.'
  }
]

export const StacksSection = () => {
  const { stacksSection } = useLayout()

  return (
    <section
      ref={stacksSection}
      aria-label="Toolkit"
      className="relative main-padding py-28 sm:py-36"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-10 lg:sticky lg:top-32">
            <SectionHeading
              index="01"
              eyebrow="Toolkit"
              title="The tools behind *every* pixel."
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
              }}
              className="max-w-sm leading-relaxed text-fg/65"
            >
              A focused stack I know deeply — chosen to take an idea from a
              Figma frame to a fast, polished product.
            </motion.p>
            <dl className="flex flex-col divide-y divide-line border-y border-line">
              {principles.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 * i
                  }}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6"
                >
                  <dt className="w-36 shrink-0 font-serif text-xl italic">
                    {p.k}
                  </dt>
                  <dd className="text-sm leading-relaxed text-fg/60">{p.v}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-14 lg:col-span-7">
          <ToolGrid
            title="Languages & frameworks"
            tools={stacks.map((s) => ({
              id: s.id,
              label: s.title,
              icon: s.icon
            }))}
          />
          <ToolGrid
            title="Daily tools"
            tools={tools.map((t) => ({
              id: t.id,
              label: t.name,
              icon: t.icon
            }))}
          />
        </div>
      </div>
    </section>
  )
}
