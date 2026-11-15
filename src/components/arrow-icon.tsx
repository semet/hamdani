import { FC } from 'react'

type Props = {
  className?: string
  /** `up-right` for external links, `right` for in-page actions, `up` for back-to-top. */
  direction?: 'up-right' | 'right' | 'up' | 'down'
}

const rotation = { 'up-right': -45, right: 0, up: -90, down: 90 }

export const ArrowIcon: FC<Props> = ({
  className = 'size-4',
  direction = 'up-right'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ transform: `rotate(${rotation[direction]}deg)` }}
    aria-hidden
  >
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
)
