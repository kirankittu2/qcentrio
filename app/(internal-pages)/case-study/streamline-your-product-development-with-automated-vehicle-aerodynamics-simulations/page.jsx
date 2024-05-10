import Image from "next/image";
import analytics1 from "@/public/analytics-1.png";
import analytics2 from "@/public/analytics-2.png";
import analytics3 from "@/public/analytics-3.png";
import analytics4 from "@/public/analytics-4.png";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import ProductDevelopmentWithAutomatedVehicleAerodynamics from "@/app/ui/case-study/product-development-with-automated-vehicle-aerodynamics-case-study-toggle";

export default function CaseStudy() {
  const heroContent = {
    heading:
      "STREAMLINE YOUR PRODUCT DEVELOPMENT WITH AUTOMATED VEHICLE AERODYNAMICS SIMULATIONS ",
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
      <ProductDevelopmentWithAutomatedVehicleAerodynamics />
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
