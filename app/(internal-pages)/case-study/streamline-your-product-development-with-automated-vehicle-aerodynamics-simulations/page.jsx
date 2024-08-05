import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import ProductDevelopmentWithAutomatedVehicleAerodynamics from "@/app/ui/case-study/product-development-with-automated-vehicle-aerodynamics-case-study-toggle";
import { fetchSingleCaseStudies } from "@/app/lib/server-data";

export const metadata = {
  title:
    "Streamline Vehicle Development with Automated Aerodynamics Simulations",
  description:
    "Slash development time and cost! Discover how automated vehicle aerodynamic simulations can revolutionize your car design process. Download the case study to learn more.",
};

export default async function CaseStudy() {
  const caseStudyString = await fetchSingleCaseStudies(
    "streamline-your-product-development-with-automated-vehicle-aerodynamics-simulations"
  );
  const caseStudy = JSON.parse(caseStudyString)[0];
  const caseStudyContent = JSON.parse(caseStudy.content);

  const heroContent = {
    heading: caseStudy.name,
  };

  return (
    <>
      <div className="case-study-hero">
        <NavBarContainer />
        <div>
          <Image
            width={1560}
            height={560}
            src={caseStudyContent["card-image"]}
            alt=""
          />
        </div>
        <CaseStudyHero data={heroContent} value="product" />
      </div>
      <ProductDevelopmentWithAutomatedVehicleAerodynamics
        caseStudyContent={caseStudyContent}
      />
      <Contact
        heading="Experience the Qcentrio Difference"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <Footer />
      <CopyrightBar />
    </>
  );
}
