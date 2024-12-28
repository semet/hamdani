import { motion, MotionValue, useMotionTemplate } from 'motion/react'
import { FC } from 'react'

type Props = {
  color: MotionValue<string>
}

export const Left: FC<Props> = ({ color }) => {
  const border = useMotionTemplate`2px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  return (
    <motion.div
      className="relative flex w-full flex-col gap-4 rounded md:w-fit"
      initial={{
        y: -100
      }}
      animate={{
        y: 0,
        transition: {
          duration: 1
        }
      }}
    >
      <h1 className="text-slate- z-10 text-center text-4xl font-bold tracking-tighter sm:text-left sm:text-6xl">
        Hi, I&apos;m{' '}
        <motion.span className="relative inline-block bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text font-mono font-thin text-transparent">
          Hamdani
        </motion.span>
      </h1>
      <p className="text-center text-sm sm:text-start sm:text-lg">
        A frontend engineer crafts seamless interfaces, blending design with
        function.{' '}
      </p>
      <div className="flex flex-col items-center justify-start gap-4 sm:flex-row sm:items-start">
        <motion.a
          href="https://drive.google.com/file/d/1uUxnd6E0y7qSUY2v8YqV7BQPyViODL2i/view?usp=share_link"
          target="_blank"
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/70"
          tabIndex={0}
          style={{
            border,
            boxShadow
          }}
        >
          <span className="text-xs sm:text-base">View My Resume</span>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:-rotate-45 group-active:-rotate-12 sm:h-6 sm:w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            ></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.a>
        <motion.a
          href="https://github.com/semet"
          target="_blank"
          className="hover:[#01e0bf] relative flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-black transition-colors hover:opacity-70"
          tabIndex={0}
        >
          <span className="text-xs sm:text-base">Github</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 496 512"
            className="h-4 w-4 sm:h-6 sm:w-6"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}
