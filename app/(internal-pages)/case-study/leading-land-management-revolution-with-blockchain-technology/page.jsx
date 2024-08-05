import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/transforming-land-management-ecosystem-with-blockchain-technology/banner.webp";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import TransformingLandManagementInIndia from "@/app/ui/case-study/transforming-land-management-in-india-case-study-toggle";
import { fetchSingleCaseStudies } from "@/app/lib/server-data";

export const metadata = {
  title: "Blockchain Revolutionizes Land Management: Transparency & Security",
  description:
    "Traditional land management is riddled with inefficiency and fraud. Discover how blockchain technology can transform the system for a more secure, transparent future. Download the case study and learn more!",
};

export default async function CaseStudy() {
  const caseStudyString = await fetchSingleCaseStudies(
    "leading-land-management-revolution-with-blockchain-technology"
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
        <CaseStudyHero data={heroContent} value="land" />
      </div>
      <TransformingLandManagementInIndia caseStudyContent={caseStudyContent} />
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
