import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/land-management/main-bg-1.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import TransformingLandManagementInIndia from "@/app/ui/case-study/transforming-land-management-in-india-case-study-toggle";

export default function CaseStudy() {
  const heroContent = {
    heading:
      "Transforming Land Management Ecosystem with Blockchain Technology",
  };

  const bottomlineContent = {
    heading: "Bottomline",
    content:
      "Through promoting efficiency, security, and transparency, blockchain technology presents a compelling opportunity to transform the land management ecosystem completely. Governments, organizations, and communities can unlock socio-economic benefits, improve land tenure security, and promote sustainable development by utilizing blockchain technology for land registration, cadastral mapping, and property transactions. The global adoption of blockchain technology is expected to increase. Cooperation between stakeholders, regulatory clarity, and capacity building will be crucial to realizing its potential to transform land management practices fully.",
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
      <TransformingLandManagementInIndia />
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
