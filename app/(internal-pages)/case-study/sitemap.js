import { fetchCaseStudies } from "@/app/lib/server-data";

export default async function sitemap() {
  const data = JSON.parse(await fetchCaseStudies());
  return data.map((study) => ({
    url: `https://www.qcentrio.com/case-study/${study.slug}`,
    lastModified: study.created_on,
    changeFrequency: "yearly",
    priority: 0.3,
  }));
}
