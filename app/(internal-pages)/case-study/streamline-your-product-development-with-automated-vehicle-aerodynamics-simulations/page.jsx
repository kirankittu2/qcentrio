import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/streamline-your-product-development-with-automated-vehicle-aerodyn/banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import ProductDevelopmentWithAutomatedVehicleAerodynamics from "@/app/ui/case-study/product-development-with-automated-vehicle-aerodynamics-case-study-toggle";

export const metadata = {
  title:
    "Experience Streamlined Product Development with Automated Vehicle Aerodynamics Simulations at Qcentrio",
  description:
    "Streamline your vehicle development process with Qcentrio's automated simulations for predicting aerodynamics. Stay ahead in the ever-evolving automotive industry with our cutting-edge technology.",
};

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
