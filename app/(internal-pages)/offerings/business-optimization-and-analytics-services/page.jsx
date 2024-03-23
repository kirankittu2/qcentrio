import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";
import Insignts from "@/app/ui/home-page/insights";
import Glimpse from "@/app/ui/offerings/glimpse";
import ServicesContent from "@/app/ui/offerings/services";
import StrategicPath from "@/app/ui/offerings/strategic-path";
import SuccessPath from "@/app/ui/offerings/success-path";
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
    heading1:
      "Unlock Top-Line and Bottom-Line Growth by Optimizing Your Business",
    heading2: "Here's how we've helped our customers win",
    content1:
      "Enterprises always seek new approaches and expertise to optimize their operations, productivity, and products to drive top-line and bottom-line growth.",
    content2:
      "At Qcentrio, our business optimization and analytics services enhance your operations by reviewing and improving processes, instilling best practices, and providing a clear roadmap for optimized processes. We support change management for a smooth transition and identify inefficiencies to save time and effort. Our comprehensive data solutions, custom CRM implementations, and integrated workspace approach streamline team coordination. Partner with us to unlock your business's full potential.",
    subheading:
      "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
  };

  const servicesContent = {
    heading: "OPTIMIZE CORE BUSINESS PROCESSES",
    subheading: "And Operations For Short-Term And Long-Term Tangible Benefits",
    children: [
      {
        image: cloud,
        heading: "Data Analytics and Business Intelligence",
        content:
          "Leverage our extensive expertise in Microsoft Power BI, Google Analytics, and Tableau, and integrate your enterprise data with platforms like SQL Server and Hadoop to enhance your analytics capabilities.",
      },
      {
        image: salesforce,
        heading: "Collaboration and Productivity Solutions",
        content:
          "Integrate collaboration and productivity tools like Microsoft Teams, Asana, and Slack to enhance your digital workspace. Our services boost project management, output, and communication.",
      },
      {
        image: azure,
        heading: "CRM System Solutions",
        content:
          "Maximize CRM potential with Salesforce, MS Dynamics, and SAP for sales efficiency. Enhance customer experiences with tailored Salesforce, HubSpot, and Zoho implementations for campaigns.",
      },
    ],
  };

  const strategicPathContent = {
    upperheading: "QCENTRIO’S",
    heading: "Strategic Path to Business Optimization and Analytics",
    accordation1: [
      {
        index: 1,
        title: "Initial Assessment",
        content:
          "Evaluate current business processes and analytics capabilities.",
      },
      {
        index: 2,
        title: "Strategy Development",
        content:
          "Define a strategy for integrating analytics tools and platforms.",
      },
      {
        index: 3,
        title: "Custom Solution Design",
        content:
          "Craft tailored analytics solutions, including data warehousing and BI tools.",
      },
      {
        index: 4,
        title: "Implementation and Integration",
        content:
          "Deploy and integrate analytics solutions with existing systems.",
      },
    ],
    accordation2: [
      {
        index: 5,
        title: "Training and Adoption",
        content:
          "Train staff on new tools and promote adoption across the organization.",
      },
      {
        index: 6,
        title: "Continuous Improvement",
        content:
          "Measure performance, gather insights, and refine analytics solutions.",
      },
      {
        index: 7,
        title: "Ongoing Support",
        content:
          "Provide expert ongoing support and iterative enhancements to the analytics systems.",
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
    heading2: "Category-Leading Business Optimization and Analytics Services",
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
          <h1>
            ACHIEVE OPERATIONAL EXCELLENCE AND GROWTH WITH BUSINESS OPTIMIZATION
            AND ANALYTICS SERVICES
          </h1>
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
