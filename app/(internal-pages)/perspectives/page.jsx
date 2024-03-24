import { search } from "@/app/lib/data";
import AllBlogs from "@/app/ui/blogs/allblogs";
import BlogHero from "@/app/ui/blogs/blog-hero";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";

export default function Blogs({ searchParams }) {
  const type = searchParams?.type || "";
  const item = searchParams?.item || "";
  const data = search(type, item);
  return (
    <>
      <div className="blog-hero">
        <Navbar />
        <div className="h-[550px] relative">
          <BlogHero />
        </div>
      </div>
      <AllBlogs data={data} type={type} />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
