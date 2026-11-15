import type { NextApiRequest, NextApiResponse } from 'next'

import { site } from '@/data/site'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`
  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate'
  )
  res.status(200).send(xml)
}
