import { motion, useScroll, useTransform } from 'motion/react'

import { Logo } from '@/components/logo'
import { useAurora } from '@/hooks'
import { useLayout } from '@/providers'

import { Background } from './background'
import { socialLinks } from './socials'

export const FooterSection = () => {
  const { toBottom } = useAurora()
  const { contactSection } = useLayout()
  const { scrollYProgress } = useScroll({
    target: contactSection,
    offset: ['start end', 'end end']
  })
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0])

  const sendMail = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'mailto:hamdanilombok@gmail.com'
    }
  }
  return (
    <motion.section
      ref={contactSection}
      style={{
        backgroundImage: toBottom,
        y
      }}
      className="main-padding relative z-10 flex h-[50vh]"
    >
      <Background />
      <footer className="relative flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-black/30 p-4 shadow sm:flex-row sm:items-end md:w-fit">
          <Logo />
          <span className="text-xl text-white sm:text-2xl">+6287736690307</span>
          <span className="text-xl text-white sm:text-2xl">
            hamdanilombok@gmail.com
          </span>
        </div>

        <div className="flex justify-center gap-4">
          {socialLinks.map(({ icon: Icon, id, href }, index) =>
            id === 'gmail' ? (
              <motion.button
                onClick={sendMail}
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer"
                key={id}
              >
                <Icon />
              </motion.button>
            ) : (
              <motion.a
                href={href}
                target="_blank"
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer"
                key={id}
              >
                <Icon />
              </motion.a>
            )
          )}
        </div>
      </footer>
    </motion.section>
  )
}
