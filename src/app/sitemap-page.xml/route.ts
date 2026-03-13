function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {

  const SITE_URL =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://rainbowacp.com")
      .replace(/\/$/, "");

  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  const lastmod = d.toISOString();

  const pages = [
    {
      url: `${SITE_URL}/`,
      changefreq: "daily",
      priority: "1.0",
    },
    {
      url: `${SITE_URL}/produk`,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      url: `${SITE_URL}/distributor`,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      url: `${SITE_URL}/instalasi`,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      url: `${SITE_URL}/kontak`,
      changefreq: "monthly",
      priority: "0.5",
    },
    {
      url: `${SITE_URL}/blog`,
      changefreq: "daily",
      priority: "0.8",
    },
  ];

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${escapeXml(p.url)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}