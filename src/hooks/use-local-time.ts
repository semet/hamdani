import { useSyncExternalStore } from 'react'

const subscribeToClock = (onChange: () => void) => {
  const id = setInterval(onChange, 1000 * 15)
  return () => clearInterval(id)
}

// The visitor's time zone never changes during a visit, so there is nothing to subscribe to.
const subscribeToNothing = () => () => {}

const formatTime = () =>
  new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date())

const timeZoneCity = () => {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return (zone.split('/').pop() ?? zone).replaceAll('_', ' ')
}

/** The visitor's current local time, e.g. "16:38". '' during SSR and hydration. */
export const useLocalTime = () =>
  useSyncExternalStore(subscribeToClock, formatTime, () => '')

/** City of the visitor's time zone, e.g. "Jakarta" or "New York". '' during SSR. */
export const useTimeZoneCity = () =>
  useSyncExternalStore(subscribeToNothing, timeZoneCity, () => '')
