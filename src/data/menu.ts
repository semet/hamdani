export const menus = [
  {
    id: 'homeSection',
    name: 'Home'
  },
  {
    id: 'stacksSection',
    name: 'Stacks'
  },
  {
    id: 'aboutSection',
    name: 'About'
  },
  {
    id: 'showcaseSection',
    name: 'Showcase'
  },
  {
    id: 'contactSection',
    name: 'Contact'
  }
]

export type HomeMenu = (typeof menus)[number]['id']
