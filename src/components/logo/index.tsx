import { useRouter } from 'next/router'

import { useLayout } from '@/providers'

export const Logo = () => {
  const { homeSection } = useLayout()
  const { pathname, push } = useRouter()
  const handleClick = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: homeSection.current?.offsetTop,
        behavior: 'smooth'
      })
    } else {
      push('/')
    }
  }
  return (
    <button onClick={handleClick}>
      <svg
        viewBox="0 0 141 149"
        fill="none"
        className="h-10 w-10"
      >
        <path
          d="M85.061 0.0170288V7.06702H132.153V141.898H85.061V148.949H140.661V0.0170288H85.061Z"
          fill="#D1D1D1"
        />
        <path
          d="M47.795 60.177H82.226V56.313H56.302V0.0170288H0.702026V7.06702H47.795V60.177Z"
          fill="#D1D1D1"
        />
        <path
          d="M47.795 81.023V141.898H0.702026V148.949H56.302V84.421H82.226V81.023H47.795Z"
          fill="#D1D1D1"
        />
        <path
          d="M28.889 69.63H82.226V63.013H44.959V9.90399C35.181 9.90399 10.771 9.90399 0.702026 9.90399V16.521H28.889V69.63Z"
          fill="#2A464D"
        />
        <path
          d="M28.889 71.569V132.446H0.702026V139.063H17.862H44.959V78.187H82.226V71.569H28.889Z"
          fill="#2A464D"
        />
        <path
          d="M85.061 9.90302V16.52H113.248V132.446H85.061V139.062C94.838 139.062 119.249 139.062 129.318 139.062V9.90302C119.541 9.90302 95.131 9.90302 85.061 9.90302Z"
          fill="#2A464D"
        />
      </svg>
    </button>
  )
}
