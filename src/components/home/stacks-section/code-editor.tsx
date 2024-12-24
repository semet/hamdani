import { useInView } from 'motion/react'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const SyntaxHighlighter = dynamic(
  async () =>
    await import('react-syntax-highlighter').then((module) => module.Light),
  {
    ssr: false
  }
)

export const CodeEditor = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const [visibleCode, setVisibleCode] = useState('')
  const typingSpeed = 80

  const isInView = useInView(boxRef)

  useEffect(() => {
    let index = 0
    let currentCode = ''

    const interval = setInterval(() => {
      if (!isInView) return
      if (index < codeString.length) {
        currentCode += codeString[index]
        setVisibleCode(currentCode)
        index++
      } else {
        clearInterval(interval)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <div className="hidden h-full w-full overflow-hidden rounded-md bg-slate-600 shadow lg:block">
      <div className="border-b border-slate-400">
        <div className="flex w-fit items-center gap-2 bg-slate-700 px-2 py-1 font-mono text-slate-300">
          <code className="text-sm">radial-stacks.tsx</code>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
          </svg>
        </div>
      </div>
      <div
        ref={boxRef}
        className="flex-grow overflow-hidden p-2"
      >
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          showLineNumbers
          useInlineStyles
          customStyle={{
            backgroundColor: '#475569'
          }}
          CodeTag={(props) => (
            <pre
              {...props}
              className="h-1/2 overflow-x-hidden font-mono text-xs md:text-sm"
            />
          )}
        >
          {visibleCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const codeString = `import { motion, MotionValue } from 'motion/react'
import { FC } from 'react'

import { stacks } from './stacks'

type Props = {
  radius: number
  scale: MotionValue<number>
};

export const RadialStacks: FC<Props> = ({ radius, scale }) => {
  return (
    <div className="mt-28 flex size-full justify-center">
      <motion.div
        className="relative size-[500px]"
        animate={{
          rotate: 360,
          transition: {
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {stacks.map((ele, index) => {
          const angle = (index / stacks.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <motion.div
              key={ele.id}
              className="absolute h-20 w-20 cursor-pointer overflow-hidden rounded-lg bg-white p-2 shadow-lg"
              style={{
                x,
                y,
                left: '40%',
                top: '40%',
                scale,
              }}
              animate={{
                rotate: -360,
                transition: {
                  duration: 50,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                },
              }}
            >
              <motion.img
                src={ele.image}
                alt="img"
                layoutId={\`spinner-\${ele.id}\`}
                className="h-full w-full rounded-lg object-fill"
                whileHover={{
                  scale: 1.05,
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  )
}
`
