import BlogHero from "@/app/ui/blogs/blog-hero";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import SocialLinks from "@/app/ui/global/social-links";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="blog-page-hero">
        <NavBarContainer />
        <div className="relative blog-page-container">
          {children}
          <div className="blog-page-social-column">
            <div className="social-links-container">
              <h2>SHARE THIS ARTICLE</h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F9F9F9] absolute top-0 z-[-1] blogs-decor"></div>
      <Footer />
      <CopyrightBar />
    </>
  );
}
