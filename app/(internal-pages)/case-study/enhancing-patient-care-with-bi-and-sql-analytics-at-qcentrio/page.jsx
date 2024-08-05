import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import EnhancingPatientCareWithBIandsSQLAnalytics from "@/app/ui/case-study/enhancing-patient-care-with-bi-and-sql-analytics-case-study-toggle";
import { fetchSingleCaseStudies } from "@/app/lib/server-data";

export const metadata = {
  title: "Improve Patient Care with Powerful BI & SQL Analytics with Qcentrio ",
  description:
    "Discover how Qcentrio's BI and SQL analytics solution transformed healthcare for senior living facilities. Learn how it boosted decision-making, improved patient care, and enhanced operational efficiency. Download the case study now!",
};

export default async function CaseStudy() {
  const caseStudyString = await fetchSingleCaseStudies(
    "enhancing-patient-care-with-bi-and-sql-analytics-at-qcentrio"
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
        <CaseStudyHero data={heroContent} value="bisql" />
      </div>

      <EnhancingPatientCareWithBIandsSQLAnalytics
        caseStudyContent={caseStudyContent}
      />
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
