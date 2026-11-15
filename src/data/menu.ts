export const menus = [
  {
    id: 'homeSection',
    name: 'Index'
  },
  {
    id: 'stacksSection',
    name: 'Toolkit'
  },
  {
    id: 'aboutSection',
    name: 'About'
  },
  {
    id: 'showcaseSection',
    name: 'Work'
  },
  {
    id: 'contactSection',
    name: 'Contact'
  }
] as const

export type HomeMenu = (typeof menus)[number]['id']
