import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

import { experiences } from './experiences'

export const ExperienceTabs = () => {
  return (
    <div className="z-10 h-[80%] w-full overflow-hidden rounded-md shadow-lg">
      <TabGroup>
        <TabList className="bg-slate-200">
          {experiences.map((experience) => {
            return (
              <Tab
                as={motion.button}
                key={experience.id}
                className="outline-none ring-0"
                layout
              >
                {({ active, focus, selected }) => (
                  <motion.span className="relative inline-block border-x px-4 py-2 font-mono text-slate-700 first:border-l-0">
                    {active ||
                      focus ||
                      (selected && (
                        <motion.span
                          layoutId="tabs"
                          className="absolute inset-0 bg-slate-600/70"
                        />
                      ))}
                    <span
                      className={twMerge([
                        'relative font-semibold',
                        active || focus || selected
                          ? 'text-white'
                          : 'text-slate-700'
                      ])}
                    >
                      {experience.date}
                    </span>
                  </motion.span>
                )}
              </Tab>
            )
          })}
        </TabList>
        <TabPanels
          as={motion.div}
          className="min-h-svh bg-slate-600/70"
        >
          {experiences.map((experience) => {
            return (
              <TabPanel key={experience.id}>
                <motion.div className="flex flex-col gap-3 px-4 py-6">
                  <span className="font-mono text-lg font-semibold text-green-500">
                    {`-> ${experience.title}`}
                  </span>
                  <span className="font-mono text-xl font-semibold text-rose-500">
                    {`@ ${experience.company}`}
                  </span>
                  <p className="font-mono text-slate-200">{`> ${experience.description}`}</p>
                  <span className="border-b border-dashed border-slate-300" />
                  <div className="flex gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700 px-2 py-1 font-mono text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TabPanel>
            )
          })}
        </TabPanels>
      </TabGroup>
    </div>
  )
}
