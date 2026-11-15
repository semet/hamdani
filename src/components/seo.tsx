import Head from 'next/head'

import { site } from '@/data/site'
import { socials } from '@/data/socials'

/** Page metadata: title, description, canonical, Open Graph, Twitter and JSON-LD. */
export const Seo = () => {
  const ogImage = `${site.url}${site.ogImage}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        email: `mailto:${site.email}`,
        image: ogImage,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'West Nusa Tenggara',
          addressCountry: 'ID'
        },
        knowsAbout: [
          'Web Design',
          'Frontend Development',
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS'
        ],
        sameAs: socials.map((s) => s.href)
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${site.url}/#person` },
        inLanguage: 'en'
      }
    ]
  }

  return (
    <Head>
      <title>{site.title}</title>
      <meta
        name="description"
        content={site.description}
      />
      <meta
        name="keywords"
        content={site.keywords.join(', ')}
      />
      <meta
        name="author"
        content={site.name}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />
      <link
        rel="canonical"
        href={`${site.url}/`}
      />

      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content={site.name}
      />
      <meta
        property="og:locale"
        content={site.locale}
      />
      <meta
        property="og:url"
        content={`${site.url}/`}
      />
      <meta
        property="og:title"
        content={site.title}
      />
      <meta
        property="og:description"
        content={site.description}
      />
      <meta
        property="og:image"
        content={ogImage}
      />
      <meta
        property="og:image:width"
        content="1200"
      />
      <meta
        property="og:image:height"
        content="630"
      />
      <meta
        property="og:image:alt"
        content={site.title}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content={site.twitter}
      />
      <meta
        name="twitter:creator"
        content={site.twitter}
      />
      <meta
        name="twitter:title"
        content={site.title}
      />
      <meta
        name="twitter:description"
        content={site.description}
      />
      <meta
        name="twitter:image"
        content={ogImage}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  )
}
