// app/blog/page.tsx
import Link from "next/link";

export const revalidate = 300;

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
};

async function getPosts(): Promise<WPPost[]> {
  const base =
    process.env.WP_API_BASE ||
    "https://cms.rainbowacp.com/wp-json/wp/v2";

  try {
    const res = await fetch(
      `${base}/posts?per_page=10&_fields=id,slug,date,title,excerpt`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.error("WP API Error:", res.status);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) return [];

    return data;
  } catch (error) {
    console.error("Fetch posts error:", error);
    return [];
  }
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 mt-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            Artikel terbaru dari Rainbow ACP. Tips, insight, dan info seputar konveksi & produksi.
          </p>
        </div>

        {/* Posts */}
        {posts.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const date = new Date(p.date);

              const formatted = date.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              });

              return (
                <li key={p.id} className="group">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                  >
                    
                    {/* Meta */}
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {formatted}
                      </span>

                      <span className="text-xs text-gray-400 group-hover:text-gray-500">
                        Baca →
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-base font-semibold leading-snug text-gray-900 sm:text-lg"
                      dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                    />

                    {/* Excerpt */}
                    {p.excerpt?.rendered ? (
                      <div
                        className="prose prose-sm mt-3 max-w-none text-gray-600 line-clamp-3 prose-p:my-0"
                        dangerouslySetInnerHTML={{
                          __html: p.excerpt.rendered,
                        }}
                      />
                    ) : (
                      <p className="mt-3 text-sm text-gray-600">
                        Baca artikel ini untuk detail lengkapnya.
                      </p>
                    )}

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        /blog/{p.slug}
                      </span>

                      <span className="text-xs font-medium text-gray-900 opacity-0 transition group-hover:opacity-100">
                        Detail
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          /* Empty state */
          <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
            <p className="text-sm text-gray-600">
              Belum ada artikel yang tersedia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}