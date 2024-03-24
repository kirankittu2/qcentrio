import { getPaginationNumber, search } from "@/app/lib/data";
import AllBlogs from "@/app/ui/blogs/allblogs";
import BlogHero from "@/app/ui/blogs/blog-hero";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";

export default async function Blogs({ searchParams }) {
  const type = searchParams?.type || "perspectives";
  const item = searchParams?.item || "";
  const page = searchParams?.page || 1;
  const data = await search(type, item, page);

  return (
    <>
      <div className="blog-hero">
        <Navbar />
        <div className="h-[550px] relative">
          <BlogHero />
        </div>
      </div>
      <AllBlogs
        data={data}
        type={type}
        page={page}
        paginationNum={
          data == null || data == undefined || data.length == 0
            ? 1
            : data.pageNumber
        }
      />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
