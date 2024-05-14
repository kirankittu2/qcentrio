import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/memorial/banner.webp";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Memorial from "@/app/ui/case-study/memorial-health-services-case-study-toggle";

// export const metadata = {
//   title: "Enhancing Patient Care with BI and SQL Analytics",
//   description:
//     "Improve patient care with Qcentrio - the leading BI and SQL analytics software for healthcare professionals. Streamline data processing and generate comprehensive reports with ease. Partner with us today to enhance your services!",
// };

export default function CaseStudy() {
  const heroContent = {
    heading:
      "Memorial Health Services’ Upgrade to BMC Track-It for Enhanced IT Service Management",
  };

  const bottomlineContent = {
    heading: "Bottomline",
    content:
      "Implementing BMC Track-It at Memorial Health Services exemplifies how the right IT service management tool can transform an organization's operational efficiency and service delivery. The system has not only streamlined IT operations across multiple locations but also ensured compliance with healthcare regulations, demonstrating a successful integration of technology and healthcare services.",
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

      <Memorial />
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
