import { FC } from 'react'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h3
      className="rounded-mdp-4 relative text-2xl font-semibold text-white sm:text-3xl lg:text-4xl"
      style={{
        textShadow: '-4px 4px 2px rgba(0,0,0,0.6)'
      }}
    >
      {title}
    </h3>
  )
}
