import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";
import Insignts from "@/app/ui/home-page/insights";
import Glimpse from "@/app/ui/services/glimpse";
import ServicesContent from "@/app/ui/services/services";
import StrategicPath from "@/app/ui/services/strategic-path";
import SuccessPath from "@/app/ui/services/success-path";
import cloud from "@/public/cloud-service.svg";
import salesforce from "@/public/salesforce.svg";
import azure from "@/public/azure.svg";
import aws from "@/public/aws.svg";
import gcp from "@/public/gcp.svg";
import cybersecurity from "@/public/cyber-security.svg";
import itsupport from "@/public/it-support.svg";
import offshore from "@/public/offshore-dev.svg";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import secure from "@/public/secure.svg";

export default function Services() {
  const glimpseContent = {
    heading1: "Embrace a Future of Security, Efficiency, and Innovation",
    heading2: "Here's how we've helped our customers win",
    content1:
      "Blockchain technology holds the key to transforming your enterprise operations. From enhancing supply chain transparency to streamlining financial transactions, blockchain's distributed database can revolutionize various business and public-sector applications.",
    content2:
      "At Qcentrio, we specialize in accelerating enterprise blockchain adoption. We guide you toward a future where your operations are more secure, efficient, and limitless. Our blockchain advisory and solutions empower businesses to harness the full potential of blockchain technology, transforming their operations and setting new benchmarks in their respective industries.",
    subheading:
      "Transforming Land Management in India’s Leading State with a Blockchain Platform",
  };

  const servicesContent = {
    heading: "ESTABLISH DATA TRUST AND TRANSPARENCY",
    subheading:
      "Empowering Numerous Impactful Applications",
    children: [
      {
        image: cloud,
        heading: "Blockchain Strategy and Advisory",
        content:
          "Discover blockchain's potential for your business and develop a strategic implementation plan. Collaborate with our team to identify and validate impactful use cases for blockchain in your organization. Further, assess your blockchain project's technical and economic viability with our thorough feasibility studies.",
      },
      {
        image: salesforce,
        heading: "Blockchain Solution Development",
        content:
          "Design and develop scalable, secure, and interoperable blockchain solutions, including decentralized applications (DApps) that offer enhanced transparency, security, and user experience.",
      },
      {
        image: azure,
        heading: "Blockchain Integration and Deployment",
        content:
          "Seamlessly integrate blockchain technology into your existing systems and processes, ensuring smooth operation and minimal disruption. Our team deploys and rigorously tests your blockchain solution for optimal performance.",
      },
      {
        image: gcp,
        heading: "Blockchain Security and Compliance",
        content:
          "Ensure the integrity and safety of your blockchain solution by conducting audits to identify and address any potential vulnerabilities. We ensure your blockchain solution adheres to the latest regulations and industry standards, minimizing legal and operational risks.",
      },
    ],
  };

  const strategicPathContent = {
    upperheading: "QCENTRIO’S",
    heading: "Strategic Path to Blockchain Advisory and Offerings",
    accordation1: [
      {
        index: 1,
        title: "Stakeholder Engagement",
        content: "Collaborate closely with stakeholders to understand their needs and challenges.",
      },
      {
        index: 2,
        title: "Design and Development",
        content: "Create blockchain solutions per the client's needs.",
      },
      {
        index: 3,
        title: "Pilot Testing",
        content: "Test the solution in real-world scenarios and gather feedback.",
      },
    ],
    accordation2: [
      {
        index: 4,
        title: "Evaluation and Refinement",
        content: "Improve the solution based on feedback and technical assessments.",
      },
      {
        index: 5,
        title: "Rollout and Training",
        content: "Implement the solution across the organization and provide comprehensive training.",
      },
    ],
  };

  const successpathContent = {
    heading1:
      "Why Qcentrio: Driving Coherent Success through Business, Tech, and Industry Expertise",
    cards1: [
      {
        number: 1,
        heading: "People-First Approach",
        content:
          "200+ technology experts from tier 1 tech and business institutes with advanced degrees, such as Ph.D. and Master's. ",
        percentage: "85%",
        highlight: "Employee Trust Index Score",
      },
      {
        number: 2,
        heading: "Customer Centricity",
        content:
          "Streamlined processes enable 50% faster time to insights, allowing clients to respond rapidly to market demands.",
        percentage: "90%",
        highlight: "NPS Across Engagements",
      },
      {
        number: 3,
        heading: "Sustainable Growth",
        content:
          "Our growth strategy is about shaping futures. With category-outpacing growth, we’re setting industry benchmarks.",
        percentage: "50%",
        highlight: "YoY Growth",
      },
    ],
    heading2: "Category-Leading Blockchain Advisory and Offerings",
    cards2: [
      {
        image: settings,
        title: "Flexible and Agile Team",
        content:
          "A flexible and agile team spread across the globe that can ramp up and down as and when needed.",
      },
      {
        image: strategy,
        title: "End-to-End Execution",
        content:
          "Seamless coordination across IT, infrastructure, data engineering, and analytics ensures E2E support.",
      },
      {
        image: support,
        title: "Round the Clock Support",
        content:
          "Continuous support from certified professionals for smooth operation and maintenance of your systems.",
      },
      {
        image: cloud,
        title: "Data-Driven Decision Making",
        content:
          "Leverage the power of blockchain advisory and offerings to improve decision-making and operational efficiency.",
      },
      {
        image: secure,
        title: "Continuous Advancements",
        content:
          "Expert team to design and future-proof strategies and solutions, giving you access to the latest innovation.",
      },
    ],
  };

  return (
    <>
      <div className="services-hero digital-data-service-page-bg">
        <Navbar />
        <div className="bg-decor"></div>
        <div className="services-hero-content">
          <div className="breadcrump">
            HOME <span></span> SERVICES
          </div>
          <h1>CREATE A RELIABLE, TRUSTED, AND SUSTAINABLE ECOSYSTEM FOR YOUR ENTERPRISE WITH BLOCKCHAIN ADVISORY AND OFFERINGS</h1>
          <Button name="Get Started" />
        </div>
      </div>
      <Glimpse data={glimpseContent} />
      <ServicesContent data={servicesContent} />
      <StrategicPath data={strategicPathContent} />
      <SuccessPath data={successpathContent} />
      <Insignts title="Explore Qcentrio’s latest thought leadership and research" />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
