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
  },
  {
    id: 'labsPage',
    name: 'Labs',
    href: '/labs'
  },
  {
    id: 'blogPage',
    name: 'Blog',
    href: '/blog'
  }
]

export type HomeMenu = (typeof menus)[number]['id']
