export async function GET() {
  const SITE_URL =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://rainbowacp.com")
      .replace(/\/$/, "");

  // Gunakan tanggal hari ini (tanpa jam) untuk lastmod index
  const today = new Date().toISOString().slice(0, 10);

  const children = [
    "sitemap-page.xml",
    "sitemap-blog.xml",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children
  .map(
    (p) => `  <sitemap>
    <loc>${SITE_URL}/${p}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}