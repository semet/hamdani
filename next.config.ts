import type { NextConfig } from 'next'

// Absolute site origin for canonical URLs, Open Graph and the sitemap.
// Set NEXT_PUBLIC_SITE_URL in production; on Vercel the production domain is used automatically.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    SITE_URL: siteUrl
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Next 16 only serves qualities listed here; project screenshots use 80.
    qualities: [75, 80],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30
  },
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap' },
      { source: '/robots.txt', destination: '/api/robots' }
    ]
  },
  async headers() {
    return [
      {
        source: '/:dir(icons|showcase|images)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400'
          }
        ]
      }
    ]
  }
}

export default nextConfig
