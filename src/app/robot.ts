import { MetadataRoute } from "next";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://rainbowacp.com")
    .replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/auth/",
        ],
      },
    ],

    // hanya arahkan ke sitemap utama
    sitemap: [`${SITE_URL}/sitemap.xml`],

    host: SITE_URL,
  };
}