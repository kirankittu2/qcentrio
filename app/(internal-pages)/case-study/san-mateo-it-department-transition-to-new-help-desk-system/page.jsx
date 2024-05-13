import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import EnhancingPatientCareWithBIandsSQLAnalytics from "@/app/ui/case-study/enhancing-patient-care-with-bi-and-sql-analytics-case-study-toggle";
import SanMateo from "@/app/ui/case-study/san-mateo-case-study-toggle";

// export const metadata = {
//   title: "Enhancing Patient Care with BI and SQL Analytics",
//   description:
//     "Improve patient care with Qcentrio - the leading BI and SQL analytics software for healthcare professionals. Streamline data processing and generate comprehensive reports with ease. Partner with us today to enhance your services!",
// };

export default function CaseStudy() {
  const heroContent = {
    heading:
      "City of San Mateo IT Department’s Transition to New Help Desk System with Qcentrio",
  };

  const bottomlineContent = {
    heading: "Bottomline",
    content:
      "The City of San Mateo’s IT department exemplifies how selecting the right technological tools and systems, with adept support from partners like Qcentrio, can transform the efficiency and effectiveness of government services. BMC Track-It! in San Mateo's success has rendered it a recommended solution for other cities aiming to enhance their IT operations, underscoring IT’s vital role in boosting municipal operations and service delivery.",
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

      <SanMateo />
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
