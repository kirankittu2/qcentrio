import AuthorBlock from "@/app/ui/blogs/author-block";
import Category from "@/app/ui/blogs/categories";
import TableOfContent from "@/app/ui/blogs/table-of-content";
import Image from "next/image";
import { fetchSingleBlog } from "@/app/lib/server-data";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const data = JSON.parse(await fetchSingleBlog(slug))[0];
  const content = JSON.parse(data.content);

  return {
    title: content["meta-title"],
    description: "",
  };
}

export default async function Perspective({ params }) {
  const slug = params.slug;
  const data = JSON.parse(await fetchSingleBlog(slug))[0];
  const content = JSON.parse(data.content);

  return (
    <main className="blog-page-content">
      <div className="breadcrump">
        PERPECTIVE <span></span> <span>{data.type}</span>
      </div>
      <h1
        data-option="strip-slide-up"
        className="blog-page-title animate strip-slide-up strip-slide-black">
        {data.name}
      </h1>
      <div className="blog-page-main-image">
        <Image
          style={{ objectFit: "cover" }}
          fill
          src={data.featured_image}
          alt=""
        />
      </div>
      <div className="blog-page-main-content-container">
        <div className="blog-page-side-content-bar">
          <AuthorBlock />
          <Category />
        </div>
        <div className="blog-page-main-content">
          <div
            className="dynamic-data"
            dangerouslySetInnerHTML={{ __html: content.summary }}
          />
          <TableOfContent />
          <div
            className="dynamic-data"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
          <div className="conclusion">
            <div
              className="dynamic-data"
              dangerouslySetInnerHTML={{ __html: content.conclusion }}
            />
          </div>
          <div data-option="up" className="reach-out animate animate-hidden">
            <h2 className="blog-page-side-heading">SOUNDS INTERESTING?</h2>
            <p>
              Reach out to <a>support@qcentrio.com</a> and discuss your
              situation with our experts.
            </p>
          </div>
          <div className="tags-container">
            <div className="tag">Unified Platform</div>
            <div className="tag">Communication</div>
            <div className="tag">Strategy</div>
          </div>
        </div>
      </div>
    </main>
  );
}
