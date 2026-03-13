function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

type WPPost = {
  slug: string;
  modified: string;
  status?: string;
};

async function fetchAllWpPosts(api: string): Promise<WPPost[]> {
  const perPage = 100;
  const all: WPPost[] = [];

  const first = await fetch(
    `${api}/posts?per_page=${perPage}&page=1&_fields=slug,modified,status`,
    { cache: "no-store" }
  );

  if (!first.ok) return all;

  const firstPosts = await first.json();
  all.push(...firstPosts);

  const totalPages = Number(first.headers.get("X-WP-TotalPages") || 1);

  for (let page = 2; page <= totalPages; page++) {
    const res = await fetch(
      `${api}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified,status`,
      { cache: "no-store" }
    );

    if (!res.ok) break;

    const posts = await res.json();
    all.push(...posts);
  }

  return all;
}

export async function GET() {

  const SITE_URL =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://rainbowacp.com")
      .replace(/\/$/, "");

  const WP_API =
    (process.env.WP_API_BASE ||
      "https://cms.rainbowacp.com/wp-json/wp/v2").replace(/\/$/, "");

  const posts = await fetchAllWpPosts(WP_API);

  const urls = posts
    .filter((p) => p.slug && (!p.status || p.status === "publish"))
    .map(
      (p) => `  <url>
    <loc>${escapeXml(`${SITE_URL}/blog/${p.slug}`)}</loc>
    <lastmod>${escapeXml(new Date(p.modified).toISOString())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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