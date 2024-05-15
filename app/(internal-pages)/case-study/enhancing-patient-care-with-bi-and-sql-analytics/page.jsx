import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import EnhancingPatientCareWithBIandsSQLAnalytics from "@/app/ui/case-study/enhancing-patient-care-with-bi-and-sql-analytics-case-study-toggle";

export const metadata = {
  title: "Improve Patient Care with Powerful BI & SQL Analytics with Qcentrio ",
  description:
    "Discover how Qcentrio's BI and SQL analytics solution transformed healthcare for senior living facilities. Learn how it boosted decision-making, improved patient care, and enhanced operational efficiency. Download the case study now!",
};

export default function CaseStudy() {
  const heroContent = {
    heading: "ENHANCING PATIENT CARE WITH BI AND SQL ANALYTICS AT QCENTRIO",
  };

  const bottomlineContent = {
    heading: "Bottomline",
    content:
      "A partnership between Qcentrio and the client has significantly <a>improved healthcare centers' and retirement homes' management and reporting capabilities.</a> The BI and SQL analytics solution has enabled faster and more accurate decision-making, ultimately contributing to better patient care and operational efficiency.",
  };

  return (
    <>
      <div className="case-study-hero">
        <NavBarContainer />
        <div>
          <Image src={banner} alt="" />
        </div>
        <CaseStudyHero data={heroContent} value="bisql" />
      </div>

      <EnhancingPatientCareWithBIandsSQLAnalytics />
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
