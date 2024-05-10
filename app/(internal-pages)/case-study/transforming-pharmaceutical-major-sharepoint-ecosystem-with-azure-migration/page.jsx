import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import StreamlineCaseStudyToggle from "@/app/ui/case-study/product-development-with-automated-vehicle-aerodynamics-case-study-toggle";
import TransformingPharmaceutical from "@/app/ui/case-study/transforming-pharmaceutical-case-study-toggle";

export default function CaseStudy() {
  const heroContent = {
    heading:
      "Transforming Pharmaceutical Major’s Sharepoint Ecosystem with Azure Migration",
  };

  return (
    <>
      <div className="case-study-hero">
        <NavBarContainer />
        <div>
          <Image src={banner} alt="" />
        </div>
        <CaseStudyHero data={heroContent} />
      </div>
      <TransformingPharmaceutical />
      {/* <BottomLine data={bottomlineContent} /> */}
      <Contact
        heading="Experience the Qcentrio Difference"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <Footer />
      <CopyrightBar />
    </>
  );
}
