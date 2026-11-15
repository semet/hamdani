import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

/** localStorage key; must match the inline script in _document.tsx. */
export const THEME_STORAGE_KEY = 'theme'

const QUERY = '(prefers-color-scheme: dark)'
const listeners = new Set<() => void>()

const systemTheme = (): Theme =>
  window.matchMedia(QUERY).matches ? 'dark' : 'light'

const storedTheme = (): Theme | null => {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

const apply = (theme: Theme) => {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  listeners.forEach((notify) => notify())
}

const subscribe = (notify: () => void) => {
  listeners.add(notify)
  // Follow OS changes until the user has picked a theme explicitly.
  const media = window.matchMedia(QUERY)
  const onSystemChange = () => {
    if (!storedTheme()) apply(systemTheme())
  }
  media.addEventListener('change', onSystemChange)
  return () => {
    listeners.delete(notify)
    media.removeEventListener('change', onSystemChange)
  }
}

const getSnapshot = (): Theme =>
  (document.documentElement.dataset.theme as Theme | undefined) ?? systemTheme()

/** `undefined` during SSR/hydration, then the active theme. */
const getServerSnapshot = (): Theme | undefined => undefined

export const setTheme = (theme: Theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage unavailable (private mode); the choice still applies for this visit.
  }
  apply(theme)
}

export const useTheme = () =>
  useSyncExternalStore<Theme | undefined>(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )
