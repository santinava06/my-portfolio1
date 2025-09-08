export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /about
Allow: /projects
Allow: /contact

# Crawl delay (optional)
Crawl-delay: 1

# Sitemap location
Sitemap: https://santinavarro.dev/sitemap.xml

# Additional sitemaps (if you add more)
# Sitemap: https://santinavarro.dev/blog-sitemap.xml
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
} 