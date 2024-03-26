import NavBarContainer from "@/app/ui/global/nav-bar-container";
import AboutUsHero from "../../ui/about-us/about-us-hero";
import AboutUsServices from "../../ui/about-us/about-us-services";
import AboutUSWhyQucentrio from "../../ui/about-us/about-us-why-qucentrio";
import Button from "../../ui/global/button";
import CopyrightBar from "../../ui/global/copyrightbar";
import Footer from "../../ui/global/footer";

export default function AboutUs() {
  return (
    <>
      <div className="about-us-blog-hero">
        <NavBarContainer />
        <div className="h-[550px] relative">
          <AboutUsHero />
        </div>
      </div>
      <AboutUsServices />
      <AboutUSWhyQucentrio />
      <div className="balance-section join-us-buttons-container">
        <h2 className="section-heading">
          JOIN OUR JOURNEY TO REDEFINE <br /> AND LEAD THE INDUSTRY STATUS QUO
        </h2>
        <div className="join-us-buttons">
          <Button name="Work with Us" />
          <div className="divider"></div>
          <Button name="Talk to Us" />
        </div>
      </div>
      <Footer />
      <CopyrightBar />
    </>
  );
}
