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
import gcp from "@/public/gcp.svg";
import cybersecurity from "@/public/cyber-security.svg";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import secure from "@/public/secure.svg";
import InsigntsNoCaro from "@/app/ui/global/insights-no-caro";
import NavBarContainer from "@/app/ui/global/nav-bar-container";

export const metadata = {
  title: "Advisory and Strategic Services - Services",
  description: "Shapped in X-Verity",
};

export default function Services() {
  const glimpseContent = {
    heading1: "Transform Your Digital Strategy into a Competitive Advantage",
    heading2: "Here's how we've helped our <span>customers win</span>",
    content1:
      "Enterprises constantly seek agility and strategic positioning to sustain and propel growth in the increasingly data-compliant market.",
    content2:
      "Qcentrio, a significant provider of advisory and strategic services, offers expert guidance to navigate these critical transformations. We specialize in EHR integration, like EPIC and Oracle Cerner, which ensures seamless digital alignment with your health IT systems. Our Audit and Assurance experts uphold your digital integrity while our risk advisory navigates cybersecurity and compliance challenges. For M&As, we offer strategic guidance for digital due diligence and integration, maximizing value and efficiency.",
    subheading: "Enhancing Patient Care with BI and SQL Analytics",
  };

  const servicesContent = {
    heading: "NAVIGATE THE FUTURE CONFIDENTLY",
    subheading:
      "With Bespoke Technology Solutions For <span>Business Growth</span> And <span>Operational Excellence</span>",
    children: [
      {
        image: cloud,
        heading: "EPIC Advisory Services",
        content:
          "Integrate and efficiently manage patient health data with expert EPIC advisory services. Our experts navigate the complexities of compliance, data standards, and programming languages to optimize your Epic solutions. ",
      },
      {
        image: salesforce,
        heading: "Oracle Cerner Advisory Services",
        content:
          "Seamlessly integrate Oracle Cerner's advanced EHR systems with your hospital's diverse information systems to overcome the challenges of data standard variability and programming language differences.",
      },
      {
        image: azure,
        heading: "Audit and Assurance Services",
        content:
          "Ensure your digital systems' security, compliance, and reliability with our comprehensive audit and assurance services. Our team employs advanced tools, specialized skills, and robust software to safeguard your digital infrastructure, giving you peace of mind and fostering stakeholder trust.",
      },
      {
        image: gcp,
        heading: "Risk Advisory Services",
        content:
          "Protect your organization from digital threats with our expert risk advisory services. Our team specializes in identifying, analyzing, and mitigating digital risks, utilizing advanced tools, skills, and software to provide strategic advice and solutions.",
      },
      {
        image: cybersecurity,
        heading: "Specialty Services",
        content:
          "Ensure your digital products meet the highest standards with our Quality Assurance (QA) services. Our team leverages advanced tools, specialized skills, and robust software to enhance the quality and performance of your digital offerings.",
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
          backgroundImage: 'url("../../advisory-and-strategic-services.png")',
        }}
        className="services-hero digital-data-service-page-bg">
        <NavBarContainer />
        <div className="bg-decor"></div>
        <div className="services-hero-content">
          <div className="breadcrump">
            OFFERINGS <span></span> ADVISORY AND STRATEGIC SERVICES
          </div>
          <h1>
            EMPOWER YOUR DIGITAL STRATEGY WITH CATEGORY-LEADING ADVISORY AND
            STRATEGIC SERVICES
          </h1>
          <Button name="Get Started" />
        </div>
      </div>
      <Glimpse data={glimpseContent} />
      <ServicesContent data={servicesContent} />
      <StrategicPath data={strategicPathContent} />
      <SuccessPath data={successpathContent} />
      <InsigntsNoCaro />
      <Contact
        heading="Tap into our expertise in EHR integration, cybersecurity, and M&A strategy"
        subheading="Let us empower you to win, grow, and lead in the digital age with our leading-edge services, solutions, and strategic innovation."
      />
      <Footer />
      <CopyrightBar />
    </>
  );
}
