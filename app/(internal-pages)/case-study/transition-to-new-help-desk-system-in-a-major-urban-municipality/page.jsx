import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import SanMateo from "@/app/ui/case-study/san-mateo-case-study-toggle";
import { fetchSingleCaseStudies } from "@/app/lib/server-data";

export const metadata = {
  title:
    "Streamlined Government Services: City Upgrades Help Desk for Improved Efficiency",
  description:
    "Discover how a major city transformed its IT operations with a new help desk system. Learn how they achieved cost savings, enhanced user experience, and improved service delivery. Download the case study now!",
};

export default async function CaseStudy() {
  const caseStudyString = await fetchSingleCaseStudies(
    "transition-to-new-help-desk-system-in-a-major-urban-municipality"
  );
  const caseStudy = JSON.parse(caseStudyString)[0];
  const caseStudyContent = JSON.parse(caseStudy.content);

  const heroContent = {
    heading: caseStudy.name,
  };

  const bottomlineContent = {
    heading: "Bottomline",
    content: caseStudyContent["bottom-line"],
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
        <CaseStudyHero data={heroContent} value="desk" />
      </div>

      <SanMateo caseStudyContent={caseStudyContent} />
      <BottomLine data={bottomlineContent} />
      <Contact
        heading="Experience the Qcentrio Difference"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <Footer />
      <CopyrightBar />
    </>
  );
}
