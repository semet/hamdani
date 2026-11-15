import type { NextApiRequest, NextApiResponse } from 'next'

import { site } from '@/data/site'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate'
  )
  res
    .status(200)
    .send(`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
}
