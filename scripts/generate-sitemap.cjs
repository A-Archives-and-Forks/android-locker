const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://a.zli.li';
const languages = ['zh', 'en', 'hi'];
const today = new Date().toISOString().split('T')[0];

const pages = [
  { path: '/', priority: '1.0', lang: 'zh' },
  { path: '/zh/', priority: '0.9', lang: 'zh' },
  { path: '/en/', priority: '0.9', lang: 'en' },
  { path: '/hi/', priority: '0.8', lang: 'hi' },
];

const hreflangLinks = languages
  .map(lang => `      <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}/${lang}/" />`)
  .join('\n');
const xDefaultLink = `      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/" />`;

const urls = pages.map(page => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
${hreflangLinks}
${xDefaultLink}
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

const distDir = path.join(__dirname, '../dist');
const outPath = path.join(distDir, 'sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf-8');
console.log('✅ sitemap.xml generated.');
