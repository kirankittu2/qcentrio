import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Glimpse from "@/app/ui/offerings/glimpse";
import ServicesContent from "@/app/ui/offerings/services";
import StrategicPath from "@/app/ui/offerings/strategic-path";
import SuccessPath from "@/app/ui/offerings/success-path";
import cloud from "@/public/cloud-service.svg";
import salesforce from "@/public/salesforce.svg";
import azure from "@/public/azure.svg";
import gcp from "@/public/gcp.svg";
import cybersecurity from "@/public/cyber-security.svg";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import secure from "@/public/secure.svg";
import InsigntsNoCaro from "@/app/ui/global/insights-no-caro";
import NavBarContainer from "@/app/ui/global/nav-bar-container";

export const metadata = {
  title: "Advanced Technology Solutions - Services",
  description: "Shapped in X-Verity",
};

export default function Services() {
  const glimpseContent = {
    heading1: "Transform Your Business and Operations with Qcentrio",
    heading2: "Here's how we've helped our customers win",
    content1:
      "Business operations that drive growth require a mix of tailored, innovative, advanced technology solutions that propel professionals who can steer it forward.",
    content2:
      "At Qcentrio, we cater to various industries, including Consumer Electronics, Automotive, Aerospace, Medical Devices, Telecom, Servers/storage, and Semiconductors. Our bespoke technology solutions are created to address your unique business challenges, enabling improved decision-making and heightened operational efficiency. Designed for agility and scalability, our solutions evolve with your business needs. And with round-the-clock support from certified professionals, you can rest assured of smooth operation and maintenance of your systems.",
    subheading:
      "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
  };

  const servicesContent = {
    heading: "NAVIGATE THE FUTURE CONFIDENTLY",
    subheading:
      "With Bespoke Technology Solutions For Business Growth And Operational Excellence",
    children: [
      {
        image: cloud,
        heading: "ERP Solutions Support",
        content:
          "Empower your modern-day enterprise with ERP solutions support for integrating and managing core business processes. Streamline your business operations, enhance efficiency, and gain critical insights with our ERP solutions support to ensure your organization stays competitive and agile.",
      },
      {
        image: salesforce,
        heading: "Comprehensive SAP Services",
        content:
          "Unlock the full potential of your business with our portfolio of SAP services, including implementation, migration, and support. Our focus on SAP S/4HANA, SAP CRM & Customer Experience, and SAP Analytics ensures you leverage the most advanced tools in the market.",
      },
      {
        image: azure,
        heading: "Product Engineering Services",
        content:
          "Lift your software solutions with Qcentrio's product engineering services, which are born from our commitment to innovation and modern technology trends. We cater to the evolving needs of businesses and consumers by creating and enhancing software that stays ahead of the curve.",
      },
      {
        image: gcp,
        heading: "Custom Software / Application Development ",
        content:
          "Specializing in JAVA, MEAN Stack, and Full Stack development, we deliver bespoke software solutions to meet your unique business requirements. Enhance your operations with our tailored expertise in custom software development.",
      },
      {
        image: cybersecurity,
        heading: "Internet of Things (IoT) Solutions",
        content:
          "Lead the future with Qcentrio's advanced IoT solutions. Seamlessly integrate advanced IoT technology into your operations to enhance performance and operational efficiency. Stay ahead with us, your partner in driving innovation and success through IoT.",
      },
      {
        image: cybersecurity,
        heading: "Big Data Services and Solutions",
        content:
          "Harness the power of your data with our big data services. Our expertise in handling large data sets allows you to extract meaningful insights and make informed decisions that drive growth and innovation. Transform complex data into actionable intelligence with our big data solutions.",
      },
    ],
  };

  const strategicPathContent = {
    upperheading: "QCENTRIO’S",
    heading:
      "Strategic Digital Roadmap to Providing Advisory and Strategic Services",
    accordation1: [
      {
        index: 1,
        title: "Transformation Strategies",
        content:
          "Creating bespoke transformation strategies aligning with your core business goals.",
      },
      {
        index: 2,
        title: "Domain Leadership",
        content:
          "Customizing digital services and solutions, enabling you to lead in your domain.",
      },
      {
        index: 3,
        title: "Success Stories",
        content:
          "Highlighting success stories where our digital strategies have significantly improved business operations.",
      },
    ],
    accordation2: [
      {
        index: 4,
        title: "Streamlined Operations",
        content:
          "Implementing custom solutions to streamline your business processes and operations.",
      },
      {
        index: 5,
        title: "Risk Mitigation",
        content:
          "Introducing strategic measures to minimize digital adoption risks, ensuring a smooth transition.",
      },
      {
        index: 6,
        title: "Strategic Timelines",
        content:
          "Setting strategic timelines for agile, phased rollouts, prioritizing quick wins and scalable, long-term growth.",
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
    heading2: "Category-Leading Advanced Technology Solutions Expertise",
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
      <div
        style={{
          backgroundImage: 'url("../../advanced-technology-solutions.png")',
        }}
        className="services-hero digital-data-service-page-bg">
        <NavBarContainer />
        <div className="bg-decor"></div>
        <div className="services-hero-content">
          <div className="breadcrump">
            OFFERINGS <span></span> ADVANCED TECHNOLOGY SOLUTIONS
          </div>
          <h1>
            DRIVE ENTERPRISE-WIDE EFFICIENCY, INNOVATION, AND GROWTH WITH
            ADVANCED TECHNOLOGY SOLUTIONS
          </h1>
          <Button name="Get Started" />
        </div>
      </div>
      <Glimpse data={glimpseContent} />
      <ServicesContent data={servicesContent} />
      <StrategicPath data={strategicPathContent} />
      <SuccessPath data={successpathContent} />
      <InsigntsNoCaro />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
