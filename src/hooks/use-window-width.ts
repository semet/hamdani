import { useEffect, useState } from "react"

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
      if (typeof window === 'undefined') return
      setWindowWidth(window.innerWidth)
    }, [])

  return windowWidth
}