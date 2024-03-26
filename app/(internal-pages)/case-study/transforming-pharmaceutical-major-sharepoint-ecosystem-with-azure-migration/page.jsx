import Image from "next/image";
import analytics1 from "@/public/analytics-1.png";
import analytics2 from "@/public/analytics-2.png";
import analytics3 from "@/public/analytics-3.png";
import analytics4 from "@/public/analytics-4.png";
import Navbar from "@/app/ui/global/nav-bar";
import CaseStudyHero from "@/app/ui/case-study/case-study-hero";
import CaseStudyToggle from "@/app/ui/case-study/case-study-toggle";
import BottomLine from "@/app/ui/case-study/bottom-line";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import banner from "@/public/case-study-banner.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";

export default function CaseStudy() {
  const heroContent = {
    heading:
      "TRANSFORMING PHARMACEUTICAL MAJOR’S SHAREPOINT ECOSYSTEM WITH AZURE MIGRATION",
  };

  const caseToggleContent = {
    context: {
      heading:
        "A pharmaceutical giant faced issues with its SharePoint setup, including 9 TB of data and numerous sites and apps.",
      content:
        "Compliance demands prompted a shift from a complex system to a streamlined cloud solution, overcoming limitations like SharePoint Online throttling to enhance agility and scalability.",
    },
    challenge: {
      heading: "",
      content: "",
    },
    solution: {
      heading:
        "Qcentrio's BI implementation team developed an analytical Microsoft SQL Server data warehouse.",
      content1:
        "This warehouse utilized a Transact-SQL script to load data from a consolidated relational database, amalgamating information from 200 separate databases totaling 12GB during development.",
      content2:
        "With the new data warehouse in place, Qcentrio's BI developers created reports using JReport, a Java-based reporting tool. The reports covered various aspects of healthcare management, including:",
      tags: [
        { title: "Medication Classification" },
        { title: "Missed Medications" },
        { title: "Hospital Readmissions" },
        { title: "Employee Performance" },
        { title: "Community Marketing Activity Summary" },
      ],
      technologies: {
        heading: "TECHNOLOGIES AND TOOLS USED",
        list: [
          {
            content: "Microsoft SQL Server",
          },
          {
            content: "Transact-SQL",
          },
          {
            content: "JReport",
          },
        ],
      },
      innerHeading: "BUSINESS IMPACT",
      images: [
        {
          heading: "REFERRAL REVENUE SOURCES",
          image: analytics1,
        },
        {
          heading: "",
          image: analytics2,
        },
        {
          heading: "",
          image: analytics3,
        },
        {
          heading: "LENGTH OF STAY",
          image: analytics4,
        },
      ],
      conclusionText: {
        text: "The implementation of the new BI and SQL analytics solution had a significant impact on the client's operations and their healthcare center customers:",
        points: [
          {
            content:
              "<strong>Improved Management Processes:</strong> The new system's prompt analytics reports allow healthcare centers and retirement homes to benefit from improved management processes.",
          },
          {
            content:
              "<strong>Enhanced Patient Care:</strong> With more accurate and timely data on medication management and patient health, healthcare providers can make better-informed decisions, leading to enhanced patient care.",
          },
          {
            content:
              "<strong>Future Plans:</strong> Qcentrio and the client are planning to develop OLAP (Online Analytical Processing) cubes for advanced healthcare data analytics and information processing. This will further enhance the capabilities of the BI solution, providing even deeper insights into healthcare operations.",
          },
        ],
      },
    },
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
        <CaseStudyHero data={heroContent} />
      </div>
      <CaseStudyToggle data={caseToggleContent} />
      <BottomLine data={bottomlineContent} />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
