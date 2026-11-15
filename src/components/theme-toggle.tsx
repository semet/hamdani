import { AnimatePresence, motion } from 'motion/react'

import { setTheme, useTheme } from '@/hooks/use-theme'

const ease = [0.16, 1, 0.3, 1] as const

export const ThemeToggle = () => {
  const theme = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={theme ? `Switch to ${next} mode` : 'Toggle color theme'}
      className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-line bg-surface/70 text-fg backdrop-blur-md transition-colors hover:border-ember hover:text-ember"
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {theme && (
          <motion.svg
            key={theme}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4.5"
            initial={{ y: 18, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -18, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            aria-hidden
          >
            {theme === 'dark' ? (
              // Moon
              <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
            ) : (
              // Sun
              <>
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </>
            )}
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}
