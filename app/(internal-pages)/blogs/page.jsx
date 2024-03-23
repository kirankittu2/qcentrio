import AllBlogs from "../ui/blogs/allblogs";
import BlogHero from "../ui/blogs/blog-hero";
import Contact from "../ui/global/contact";
import CopyrightBar from "../ui/global/copyrightbar";
import Footer from "../ui/global/footer";
import Navbar from "../ui/global/nav-bar";

export default function Blogs() {
  return (
    <>
      <div className="blog-hero">
        <Navbar />
        <div className="h-[550px] relative">
          <BlogHero />
        </div>
      </div>
      <AllBlogs />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
