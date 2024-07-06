import { fetchBlogs } from "@/app/lib/server-data";

export default async function sitemap() {
  const data = JSON.parse(await fetchBlogs());
  return data.map((article) => ({
    url: `https://www.qcentrio.com/perspectives/${article.slug}`,
    lastModified: article.created_on,
    changeFrequency: "yearly",
    priority: 0.3,
  }));
}
