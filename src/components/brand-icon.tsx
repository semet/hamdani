import { CSSProperties, FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  src: string
  className?: string
}

/**
 * Renders a self-hosted brand logo (public/icons) as a monochrome mask painted with
 * `currentColor`, so every logo matches the palette and recolors on hover.
 */
export const BrandIcon: FC<Props> = ({ src, className }) => (
  <span
    aria-hidden
    className={twMerge('inline-block size-6 icon-mask', className)}
    style={{ '--icon': `url(${src})` } as CSSProperties}
  />
)
