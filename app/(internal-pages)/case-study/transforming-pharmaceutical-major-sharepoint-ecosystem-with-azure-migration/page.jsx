import Image from "next/image";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import StreamlineCaseStudyToggle from "@/app/ui/case-study/streamline-case-study-toggle";

export default function CaseStudy() {
  const heroContent = {
    heading:
      "STREAMLINE YOUR PRODUCT DEVELOPMENT WITH AUTOMATED VEHICLE AERODYNAMICS SIMULATIONS",
  };

  // const caseToggleContent = {
  //   context: {
  //     heading:
  //       "A leading automotive OEM was looking to streamline their product development process by implementing simulation technology to predict vehicle aerodynamics.",
  //     content:
  //       "The automotive industry is constantly evolving, with new technologies and features being introduced at a rapid pace. As a result, automakers are under pressure to develop new products quickly and efficiently in order to stay competitive in the market. One important aspect of product development is aerodynamics, which plays a crucial role in the performance and efficiency of vehicles.",
  //   },
  //   challenge: {
  //     heading:
  //       " The client faced several challenges in their product development process:",
  //     content: "",
  //   },
  //   solution: {
  //     heading:
  //       "Qcentrio's BI implementation team developed an analytical Microsoft SQL Server data warehouse.",
  //     content1:
  //       "This warehouse utilized a Transact-SQL script to load data from a consolidated relational database, amalgamating information from 200 separate databases totaling 12GB during development.",
  //     content2:
  //       "With the new data warehouse in place, Qcentrio's BI developers created reports using JReport, a Java-based reporting tool. The reports covered various aspects of healthcare management, including:",
  //     tags: [
  //       { title: "Medication Classification" },
  //       { title: "Missed Medications" },
  //       { title: "Hospital Readmissions" },
  //       { title: "Employee Performance" },
  //       { title: "Community Marketing Activity Summary" },
  //     ],
  //     technologies: {
  //       heading: "TECHNOLOGIES AND TOOLS USED",
  //       list: [
  //         {
  //           content: "Microsoft SQL Server",
  //         },
  //         {
  //           content: "Transact-SQL",
  //         },
  //         {
  //           content: "JReport",
  //         },
  //       ],
  //     },
  //     innerHeading: "BUSINESS IMPACT",
  //     images: [
  //       {
  //         heading: "REFERRAL REVENUE SOURCES",
  //         image: analytics1,
  //       },
  //       {
  //         heading: "",
  //         image: analytics2,
  //       },
  //       {
  //         heading: "",
  //         image: analytics3,
  //       },
  //       {
  //         heading: "LENGTH OF STAY",
  //         image: analytics4,
  //       },
  //     ],
  //     conclusionText: {
  //       text: "The implementation of the new BI and SQL analytics solution had a significant impact on the client's operations and their healthcare center customers:",
  //       points: [
  //         {
  //           content:
  //             "<strong>Improved Management Processes:</strong> The new system's prompt analytics reports allow healthcare centers and retirement homes to benefit from improved management processes.",
  //         },
  //         {
  //           content:
  //             "<strong>Enhanced Patient Care:</strong> With more accurate and timely data on medication management and patient health, healthcare providers can make better-informed decisions, leading to enhanced patient care.",
  //         },
  //         {
  //           content:
  //             "<strong>Future Plans:</strong> Qcentrio and the client are planning to develop OLAP (Online Analytical Processing) cubes for advanced healthcare data analytics and information processing. This will further enhance the capabilities of the BI solution, providing even deeper insights into healthcare operations.",
  //         },
  //       ],
  //     },
  //   },
  // };

  const bottomlineContent = {
    heading: "Bottomline",
    content:
      "The implementation of automated vehicle aerodynamics simulations had a significant impact on the client's product development process. It allowed them to save time and cost, improve product quality, and increase flexibility and agility in their development process. This helped them stay ahead of their competitors and maintain customer satisfaction, ultimately leading to increased revenue and growth for the company.",
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
      <StreamlineCaseStudyToggle />
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
