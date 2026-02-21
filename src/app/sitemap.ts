import type { MetadataRoute } from "next";

type WPPost = {
  slug: string;
  modified: string;
  status?: string;
};

async function fetchAllWpPosts(wpApiBase: string): Promise<WPPost[]> {
  const perPage = 100;
  const all: WPPost[] = [];

  // page 1 dulu untuk tahu total pages
  const firstRes = await fetch(
    `${wpApiBase}/posts?per_page=${perPage}&page=1&_fields=slug,modified,status`,
    { next: { revalidate: 300 } },
  );

  if (!firstRes.ok) return all;

  const firstPagePosts: WPPost[] = await firstRes.json();
  all.push(...firstPagePosts);

  const totalPagesHeader = firstRes.headers.get("X-WP-TotalPages");
  const totalPages = totalPagesHeader ? Number(totalPagesHeader) : 1;

  if (!Number.isFinite(totalPages) || totalPages <= 1) return all;

  // page 2..n
  for (let page = 2; page <= totalPages; page++) {
    const res = await fetch(
      `${wpApiBase}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified,status`,
      { next: { revalidate: 300 } },
    );
    if (!res.ok) break;

    const posts: WPPost[] = await res.json();
    all.push(...posts);
  }

  return all;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.SITE_URL || "https://rainbowacp.com").replace(
    /\/$/,
    "",
  );
  const wpApiRaw = process.env.WP_API_BASE || "https://cms.rainbowacp.com/wp-json/wp/v2";
  const wpApi = wpApiRaw ? wpApiRaw.replace(/\/$/, "") : "";

  // lastmod stabil untuk static routes
  const stableDate = new Date();
  stableDate.setUTCHours(0, 0, 0, 0);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: stableDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/produk`,
      lastModified: stableDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/distributor`,
      lastModified: stableDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/instalasi`,
      lastModified: stableDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: stableDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: stableDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  if (!wpApi) return staticRoutes;

  try {
    const posts = await fetchAllWpPosts(wpApi);

    const blogRoutes: MetadataRoute.Sitemap = posts
      .filter((p) => p?.slug && (!p.status || p.status === "publish"))
      .map((p) => ({
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: new Date(p.modified),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    return [...staticRoutes, ...blogRoutes];
  } catch {
    return staticRoutes;
  }
}
