import Carousel from "./ui/home-page/carousel";
import CompanyList from "./ui/home-page/company-list";
import About from "./ui/home-page/about";
import Journey from "./ui/home-page/journey";
import WhyQcentrio from "./ui/home-page/why-qcentrio";
import Discover from "./ui/home-page/discover";
import Contact from "./ui/global/contact";
import Footer from "./ui/global/footer";
import CopyrightBar from "./ui/global/copyrightbar";
import Image from "next/image";
import down from "@/public/hero-down.svg";
import Insignts from "./ui/home-page/insights";
import Link from "next/link";
import NavBarContainer from "./ui/global/nav-bar-container";
import service1 from "@/public/sub-offerings-1.jpg";
import service2 from "@/public/sub-offerings-2.jpg";
import service3 from "@/public/sub-offerings-3.jpg";
import service4 from "@/public/sub-offerings-4.jpg";
import service5 from "@/public/sub-offerings-5.jpg";
import service6 from "@/public/sub-offerings-6.jpg";
import AccordianOfferings from "./ui/global/accordian-offerings";
import currency from "@/public/currency.svg";
import idea from "@/public/idea-white.svg";
import strategy from "@/public/strategy-white.svg";
import growth from "@/public/growth.svg";
import block from "@/public/block.svg";
import cloud from "@/public/cloud-white.svg";
import CountryScroll from "./ui/global/country-scroll";
import { fetchBlogs, fetchCaseStudies } from "./lib/server-data";

export const metadata = {
  title:
    "Elevate Your Digital Excellence with AI and Cloud Solutions – Qcentrio",
  description:
    "With Qcentrio, unlock digital excellence through advanced AI, cloud solutions and strategic innovation. Stay ahead of the curve in the ever-evolving IT industry with our cutting-edge services. Explore now!",
};

export default async function Home() {
  const services = {
    images: [service1, service2, service3, service4, service5, service6],
    list: [
      {
        num: "01",
        heading: "Business Value Enhancement",
        link: "offerings/business-value-enhancement-services",
        image: "/business-value-enhancement-services-offerings.jpg",
        icon: currency,
        sub: [
          {
            title: "Generative AI",
            link: "/offerings/business-value-enhancement-services/generative-ai-solutions-and-offerings",
          },
          {
            title: "AI/ML Offerings",
            link: "/offerings/business-value-enhancement-services/artificial-intelligence-machine-learning-offerings",
          },
          {
            title: "Robotic Process Automation",
            link: "/offerings/business-value-enhancement-services/robotic-process-automation-services",
          },
        ],
        content:
          "Specializing in GenAI, AI, ML, and RPA solutions, we automate processes, personalize experiences, and provide predictive insights, revolutionizing operations and driving future business growth.",
      },
      {
        num: "02",
        heading: "Advisory and Strategic",
        link: "offerings/advisory-and-strategic-services",
        image: "/advisory-and-strategic-services-offerings.jpg",
        icon: idea,
        sub: [
          {
            title: "EPIC Advisory ",
            link: "offerings/advisory-and-strategic-services/epic-advisory-services",
          },
          {
            title: "Oracle Cerner Advisory ",
            link: "offerings/advisory-and-strategic-services/oracle-cerner-advisory-services",
          },
          {
            title: "Audit and Assurance ",
            link: "offerings/advisory-and-strategic-services/audit-and-assurance-services",
          },
          {
            title: "Risk Advisory ",
            link: "offerings/advisory-and-strategic-services/risk-advisory-services",
          },
          {
            title: "Specialty Services",
            link: "offerings/advisory-and-strategic-services/specialty-services",
          },
          // {
          //   title: "Mergers & Acquisitions Advisory ",
          //   link: "offerings/advisory-and-strategic-services/mergers-and-acquisitions-advisory-services",
          // },
        ],
        content:
          "Leading in SAP services (S/4HANA, CRM, Analytics), custom software development (JAVA, MEAN, Full Stack), IoT solutions, and innovative product engineering for global business transformation.",
      },
      {
        num: "03",
        heading: "Business Optimization & Analytics",
        link: "offerings/business-optimization-and-analytics-services.jpg",
        image: "/business-optimization-and-analytics-services-offerings.jpg",
        icon: strategy,
        sub: [
          {
            title: "Data Analytics & Business Intelligence",
            link: "offerings/business-optimization-and-analytics-services/data-analytics-and-business-intelligence",
          },
          {
            title: "Collaboration & Productivity Solutions",
            link: "offerings/business-optimization-and-analytics-services/collaboration-and-productivity-solutions",
          },
          {
            title: "CRM System Solutions",
            link: "offerings/business-optimization-and-analytics-services/crm-system-solutions",
          },
        ],
        content:
          "Expertise in analytics (Power BI, Google Analytics, Tableau), digital workspace tools (Teams, Asana, Slack), and CRM solutions (Salesforce, Dynamics, SAP CRM) to enhance business operations.",
      },
      {
        num: "04",
        heading: "Advanced Technology",
        link: "offerings/advanced-technology-solutions",
        image: "/advanced-technology-solutions.png",
        icon: growth,
        sub: [
          {
            title: "ERP Solutions Support",
            link: "offerings/advanced-technology-solutions/erp-solutions-support",
          },
          {
            title: "Comprehensive SAP Services",
            link: "offerings/advanced-technology-solutions/comprehensive-sap-services",
          },
          {
            title: "Product Engineering Services",
            link: "offerings/advanced-technology-solutions/product-engineering-services",
          },
          {
            title: "Custom Software / Application Development",
            link: "offerings/advanced-technology-solutions/custom-software-application-development",
          },
          {
            title: "Internet of Things (IoT) Solutions",
            link: "offerings/advanced-technology-solutions/internet-of-things-solutions",
          },
          {
            title: "Big Data Services & Solutions",
            link: "offerings/advanced-technology-solutions/big-data-services-and-solutions",
          },
        ],
        content:
          "Excelling in Epic and Oracle Cerner EHR integration, we ensure seamless data management. Our audit, risk advisory, M&A, and QA services guarantee digital integrity and quality.",
      },
      {
        num: "05",
        heading: "Cloud Infrastructure & Security",
        link: "offerings/cloud-infra-and-security-services",
        image: "/cloud-infra-and-security-services.png",
        icon: block,
        sub: [
          {
            title: "Cloud Infrastructure Services",
            link: "offerings/cloud-infra-and-security-services/cloud-infrastructure-services",
          },
          {
            title: "Salesforce Services",
            link: "offerings/cloud-infra-and-security-services/salesforce-services",
          },
          {
            title: "Azure Offerings",
            link: "offerings/cloud-infra-and-security-services/azure-services-and-offerings",
          },
          {
            title: "AWS Offerings",
            link: "offerings/cloud-infra-and-security-services/aws-services-and-offerings",
          },
          {
            title: "GCP Offerings",
            link: "offerings/cloud-infra-and-security-services/gcp-services-and-offerings",
          },
          {
            title: "Cybersecurity Solutions",
            link: "offerings/cloud-infra-and-security-services/cybersecurity-solutions",
          },
          {
            title: "Continuous IT Support and Managed Services",
            link: "offerings/cloud-infra-and-security-services/continuous-it-support-and-managed-services",
          },
          {
            title: "Offshore Development Centre (ODC) Services",
            link: "offerings/cloud-infra-and-security-services/offshore-development-centre-services",
          },
        ],
        content:
          "Empowering your digital transformation with our robust cloud infrastructure and comprehensive security services, resulting in tangible, measurable business impacts and significant ROI growth.",
      },
      {
        num: "06",
        heading: "Blockchain",
        link: "offerings/blockchain-advisory-and-offerings",
        image: "/blockchain-advisory-and-offerings.png",
        icon: cloud,
        sub: [
          {
            title: "Strategy & Advisory",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-strategy-and-advisory",
          },
          {
            title: "Blockchain Solution Development",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-solution-development",
          },
          {
            title: "Blockchain Integration & Deployment",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-integration-and-deployment",
          },
          {
            title: "Security & Compliance",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-security-and-compliance",
          },
        ],
        content:
          "Leading in blockchain for various industries, we offer end-to-end services from innovation and strategy development to prototyping and product development, ensuring seamless blockchain integration.",
      },
    ],
  };

  const blogs = await fetchBlogs();
  const studies = await fetchCaseStudies();

  return (
    <>
      <div className="hero">
        <NavBarContainer />
        <div className="relative">
          <Carousel />
          <Link href="#about">
            <div className="hero-carousel-down">
              <Image fill src={down} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <CompanyList />
      <About />
      <AccordianOfferings data={services} />
      <Journey studiesServer={studies} />
      <WhyQcentrio />
      <Insignts
        title="Front and Center: Qcentrio Insights"
        subheading="Stay up-to-date with the pulse of progress—our latest thought leadership, strategic insights, and forward-thinking perspectives."
        blogs={blogs}
      />
      <Discover />
      <Contact
        heading="Experience the Qcentrio Difference"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <CountryScroll />

      <Footer />
      <CopyrightBar />
    </>
  );
}
