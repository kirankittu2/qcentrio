import NavBarContainer from "@/app/ui/global/nav-bar-container";
import AboutUsHero from "../../ui/about-us/about-us-hero";
import AboutUsServices from "../../ui/about-us/about-us-services";
import AboutUSWhyQucentrio from "../../ui/about-us/about-us-why-qucentrio";
import Button from "../../ui/global/button";
import CopyrightBar from "../../ui/global/copyrightbar";
import Footer from "../../ui/global/footer";
import Link from "next/link";

export const metadata = {
  title:
    "About Qcentrio - A Universe of Innovation and Creativity for Your Imagination",
  description:
    "With Qcentrio, success is within reach. Our global IT expertise in AI and cloud solutions, paired with strategic insights and expert advisory, will guide you towards achieving your goals. Learn more about us and how we can help you succeed today!",
};

export default function AboutUs() {
  return (
    <>
      <div className="about-us-blog-hero">
        <NavBarContainer />
        <div className="">
          <AboutUsHero />
        </div>
      </div>
      <AboutUsServices />
      <AboutUSWhyQucentrio />
      <div className="balance-section join-us-buttons-container">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          JOIN OUR JOURNEY TO REDEFINE AND LEAD THE INDUSTRY STATUS QUO
        </h2>
        <div className="join-us-buttons">
          <Button name="Work with Us" />
          <div className="divider"></div>
          <Link href="/contact-us">
            <Button name="Talk to Us" />
          </Link>
        </div>
      </div>
      <Footer />
      <CopyrightBar />
    </>
  );
}
