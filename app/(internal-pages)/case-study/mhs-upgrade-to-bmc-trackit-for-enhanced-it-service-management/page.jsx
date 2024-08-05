import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Memorial from "@/app/ui/case-study/memorial-health-services-case-study-toggle";
import { fetchSingleCaseStudies } from "@/app/lib/server-data";

export const metadata = {
  title:
    "Memorial Health Services Boosts Patient Care with Improved IT Management",
  description:
    "See how Memorial Health Services streamlined IT operations using BMC Track-It! This case study reveals how they improved service desk efficiency, asset management, and ultimately, patient care. Download it now!",
};

export default async function CaseStudy() {
  const caseStudyString = await fetchSingleCaseStudies(
    "mhs-upgrade-to-bmc-trackit-for-enhanced-it-service-management"
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
        <CaseStudyHero data={heroContent} value="bmc" />
      </div>

      <Memorial caseStudyContent={caseStudyContent} />
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
