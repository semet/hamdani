export type Item = {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export const items = [
  {
    id: 1,
    title: 'Aurora',
    description:
      'Aurora is a web application that allows users to create and share their own custom themes for their favorite websites.',
    image:
      'https://images.unsplash.com/photo-1529675641475-78780f1fd4b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://aurora.alexlockhart.me',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase']
  },
  {
    id: 2,
    title: 'Aurora API',
    description:
      'Aurora API is a RESTful API that provides access to the Aurora database. It is used by the Aurora web application.',
    image:
      'https://plus.unsplash.com/premium_photo-1683141123111-c445910abc29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://aurora-api.alexlockhart.me',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: 3,
    title: 'Aurora CLI',
    description:
      'Aurora CLI is a command line interface that allows users to interact with the Aurora API. It is used to create, read, update, and delete themes.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMHBhZ2V8ZW58MHx8MHx8fDA%3D',
    link: '',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: 4,
    title: 'Aurora Theme',
    description:
      'Aurora Theme is a collection of themes created by the Aurora community. Users can browse, search, and install themes from the Aurora Theme website.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMHBhZ2V8ZW58MHx8MHx8fDA%3D',
    link: 'https://aurora-theme.alexlockhart.me',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase']
  },
  {
    id: 5,
    title: 'Aurora Theme API',
    description:
      'Aurora Theme API is a RESTful API that provides access to the Aurora Theme database. It is used by the Aurora Theme website.',
    image:
      'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMHBhZ2V8ZW58MHx8MHx8fDA%3D',
    link: 'https://aurora-theme-api.alexlockhart.me',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: 6,
    title: 'Aurora Theme CLI',
    description:
      'Aurora Theme CLI is a command line interface that allows users to interact with the Aurora Theme API. It is used to create, read, update, and delete themes.',
    image:
      'https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    link: '',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: 7,
    title: 'Aurora Theme Website',
    description:
      'Aurora Theme Website is a static website that showcases themes created by the Aurora community. Users can browse, search, and install themes from the Aurora Theme website.',
    image:
      'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
    link: 'https://aurora-theme-website.alexlockhart.me',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase']
  },
  {
    id: 8,
    title: 'Aurora Theme Website API',
    description:
      'Aurora Theme Website API is a RESTful API that provides access to the Aurora Theme Website database. It is used by the Aurora Theme Website.',
    image:
      'https://images.unsplash.com/photo-1632406898161-6a3b767dfbe2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkbWluJTIwZGFzaGJvYXJhZHxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://aurora-theme-website-api.alexlockhart.me',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: 9,
    title: 'Aurora Theme Website CLI',
    description:
      'Aurora Theme Website CLI is a command line interface that allows users to interact with the Aurora Theme Website API. It is used to create, read, update, and delete themes.',
    image:
      'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyfGVufDB8fDB8fHww',
    link: '',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT']
  }
]
