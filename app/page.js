import Navbar from "@/app/ui/global/nav-bar";
import Carousel from "./ui/home-page/carousel";
import CompanyList from "./ui/home-page/company-list";
import About from "./ui/home-page/about";
import Services from "./ui/home-page/services";
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
import Offerings from "./ui/home-page/offerings";
import service1 from "@/public/sub-offerings-1.png";
import service2 from "@/public/sub-offerings-2.jpeg";
import service3 from "@/public/sub-offerings-3.jpeg";
import service4 from "@/public/sub-offerings-4.jpeg";
import service5 from "@/public/sub-offerings-5.jpg";

export const metadata = {
  title:
    "Elevate Your Digital Excellence with AI and Cloud Solutions – Qcentrio",
  description:
    "With Qcentrio, unlock digital excellence through advanced AI, cloud solutions and strategic innovation. Stay ahead of the curve in the ever-evolving IT industry with our cutting-edge services. Explore now!",
};

export default function Home() {
  const services = {
    images: [service1, service2, service3, service4, service5, service3],
    list: [
      {
        num: "01",
        heading: "Business Value Enhancement",
        link: "offerings/business-value-enhancement-services",
        sub: [
          {
            title: "Generative AI Solutions and Offerings",
            link: "/offerings/business-value-enhancement-services/generative-ai-solutions-and-offerings",
          },
          {
            title: "Artificial Intelligence/Machine Learning Offerings",
            link: "/offerings/business-value-enhancement-services/artificial-intelligence-machine-learning-offerings",
          },
          {
            title: "Robotic Process Automation Services",
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
        sub: [
          {
            title: "EPIC Advisory Services",
            link: "offerings/advisory-and-strategic-services/epic-advisory-services",
          },
          {
            title: "Oracle Cerner Advisory Services",
            link: "offerings/advisory-and-strategic-services/oracle-cerner-advisory-services",
          },
          {
            title: "Audit and Assurance Services",
            link: "offerings/advisory-and-strategic-services/audit-and-assurance-services",
          },
          {
            title: "Risk Advisory Services",
            link: "offerings/advisory-and-strategic-services/risk-advisory-services",
          },
          {
            title: "Specialty Services",
            link: "offerings/advisory-and-strategic-services/specialty-services",
          },
        ],
        content:
          "Leading in SAP services (S/4HANA, CRM, Analytics), custom software development (JAVA, MEAN, Full Stack), IoT solutions, and innovative product engineering for global business transformation.",
      },
      {
        num: "03",
        heading: "Business Optimization & Analytics",
        link: "offerings/business-optimization-and-analytics-services",
        sub: [
          {
            title: "Data Analytics and Business Intelligence",
            link: "offerings/business-optimization-and-analytics-services/data-analytics-and-business-intelligence",
          },
          {
            title: "Collaboration and Productivity Solutions",
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
            title: "Big Data Services and Solutions",
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
            title: "Azure Services and Offerings",
            link: "offerings/cloud-infra-and-security-services/azure-services-and-offerings",
          },
          {
            title: "AWS Services and Offerings",
            link: "offerings/cloud-infra-and-security-services/aws-services-and-offerings",
          },
          {
            title: "GCP Services and Offerings",
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
        sub: [
          {
            title: "Blockchain Strategy and Advisory",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-strategy-and-advisory",
          },
          {
            title: "Blockchain Solution Development",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-solution-development",
          },
          {
            title: "Blockchain Integration and Deployment",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-integration-and-deployment",
          },
          {
            title: "Blockchain Security and Compliance",
            link: "offerings/blockchain-advisory-and-offerings/blockchain-security-and-compliance",
          },
        ],
        content:
          "Leading in blockchain for various industries, we offer end-to-end services from innovation and strategy development to prototyping and product development, ensuring seamless blockchain integration.",
      },
    ],
  };

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
      {/* <Services /> */}
      <Offerings data={services} />
      <Journey />
      <WhyQcentrio />
      <Insignts
        title="Front and Center: Qcentrio Insights"
        subheading="Stay abreast with the pulse of progress—our latest thought leadership, strategic insights, and forward-thinking perspectives."
      />
      <Discover />
      <Contact
        heading="Experience the Qcentrio Difference"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <Footer />
      <CopyrightBar />
    </>
  );
}
