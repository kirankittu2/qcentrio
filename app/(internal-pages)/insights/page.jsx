import { insightSearch } from "@/app/lib/server-data";
import AllBlogs from "@/app/ui/blogs/allblogs";
import BlogHero from "@/app/ui/blogs/blog-hero";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import CountryScroll from "@/app/ui/global/country-scroll";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";

export const metadata = {
  title:
    "Discover the World of Qcentrio Insights - Upgrading for Innovation and Creativity",
  description:
    "Gain valuable insights and stay ahead of the game with Qcentrio – the leading provider of AI, cloud solutions, and strategic advisory services. Explore Qcentrio Insights now!",
};

export default async function Blogs({ searchParams }) {
  const type = searchParams?.type || "perspectives";
  const item = searchParams?.item || "";
  const page = searchParams?.page || 1;
  const data = JSON.parse(await insightSearch(type, item, page));

  return (
    <>
      <div className="blog-hero">
        <NavBarContainer />
        <div className="relative">
          <BlogHero />
        </div>
      </div>
      <AllBlogs
        searchParams={searchParams}
        data={data}
        type={type}
        page={page}
        paginationNum={
          data == null || data == undefined || data.length == 0
            ? 1
            : data.pageNumber
        }
      />
      <Contact
        heading="Experience the Qcentrio Difference"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <CountryScroll />
      <Footer />
      <CopyrightBar />
    </>
  );
}
