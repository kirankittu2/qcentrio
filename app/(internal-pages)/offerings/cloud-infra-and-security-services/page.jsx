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
import InsigntsNoCaro from "@/app/ui/global/insights-no-caro";

export const metadata = {
  title: "Cloud Infra and Security Services - Services",
  description: "Shapped in X-Verity",
};

export default function Services() {
  const glimpseContent = {
    heading1: "Transform Into a Data Powerhouse with Qcentrio",
    heading2: "Here's how we've helped our customers win",
    content1:
      "Transforming into a data-driven powerhouse is the key to excel in today's competitive market. Unlocking real-time insights requires a modern, cloud-ready data estate that is scalable, agile, secure and built for the future.",
    content2:
      "Qcentrio leverages its cloud infrastructure and security expertise to provide services and solutions with native cloud components. We fast-track data modernization for clients, seamlessly integrating them with the latest cloud platforms. Our services maximize data value with automation tools and platform operations, boosting ROI and value realization, all while cutting costs.",
    subheading:
      "Transforming Pharmaceutical Major’s Sharepoint Ecosystem with Azure Migration",
  };

  const servicesContent = {
    heading: "EMPOWER YOUR DIGITAL SHIFT",
    subheading:
      "With Our Cloud Infrastructure And Security Services, Offering Tangible, Measurable Business Impacts",
    children: [
      {
        image: cloud,
        heading: "Cloud Infrastructure Services",
        content:
          "Modernize your data estate to a cloud-ready, future-fit, scalable ecosystem. With specialization in full-scale migration to major cloud platforms, offering AWS, Azure, and GCP expertise.",
      },
      {
        image: salesforce,
        heading: "Salesforce Services",
        content:
          "Get custom Salesforce services/solutions that align perfectly with your business needs. Whether you’re in finance, healthcare, or retail, we ensure that Salesforce fits into your unique operational framework.",
      },
      {
        image: azure,
        heading: "Azure Services and Offerings",
        content:
          "Transform your data infrastructure into an agile, future-proof, scalable environment optimized for Microsoft Azure. We ensure that the transition to Azure is seamless, ensuring your business capitalizes on the robust capabilities of cloud computing.",
      },
      {
        image: aws,
        heading: "AWS Services and Offerings",
        content:
          "Transition your systems to a robust, future-ready, and scalable AWS infrastructure with our AWS migration and optimization expertise. Get seamless, scalable solutions tailored for future-readiness and power-packed performance on AWS.",
      },
      {
        image: gcp,
        heading: "GCP Services and Offerings",
        content:
          "Lift your technological infrastructure with our specialized Google Cloud Platform (GCP) services. Our ability in GCP's diverse toolset and applications is designed to optimize your cloud presence, ensuring a scalable, secure, and high-performance ecosystem that propels your business forward.",
      },
      {
        image: cybersecurity,
        heading: "Cybersecurity Solutions",
        content:
          "Get complete cybersecurity solutions and support, from comprehensive assessments and custom solutions to continuous monitoring for enterprise safety. We also use tools and services from leading providers to protect your digital infrastructure. ",
      },
      {
        image: itsupport,
        heading: "Continuous IT Support and Managed Services",
        content:
          "Optimize your IT with our Managed Services—proactive support, system monitoring, timely updates, and expert troubleshooting for peak performance and uptime.",
      },
      {
        image: offshore,
        heading: "Offshore Development Centre (ODC) Services",
        content:
          "Set up ODCs and get custom teams, state-of-the-art infrastructure, and full-scale development, ensuring seamless integration with your business and continuous support for robust software solutions.",
      },
    ],
  };

  const strategicPathContent = {
    upperheading: "QCENTRIO’S",
    heading: "Strategic Path to Robust Cloud Infrastructure and Security",
    accordation1: [
      {
        index: 1,
        title: "Assessment",
        content: "Evaluate existing IT infrastructure and security posture.",
      },
      {
        index: 2,
        title: "Design",
        content:
          "Architect a cloud infrastructure tailored to business needs, emphasizing security.",
      },
      {
        index: 3,
        title: "Implementation",
        content: "Build the cloud environment with robust security measures.",
      },
      {
        index: 4,
        title: "Migration",
        content: "Move data and applications to the cloud securely.",
      },
    ],
    accordation2: [
      {
        index: 5,
        title: "Optimization",
        content:
          "Fine-tune performance and cost-efficiency of cloud resources.",
      },
      {
        index: 6,
        title: "Security Enhancement",
        content:
          "Implement advanced security protocols and compliance measures.",
      },
      {
        index: 7,
        title: "Monitoring & Management",
        content:
          "Continuously monitor for threats and optimize resource utilization.",
      },
      {
        index: 8,
        title: "Evolution",
        content:
          "Adapt and upgrade infrastructure to meet emerging tech and security trends.",
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
    heading2: "Category-Leading Cloud Infra and Security Practice ",
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
          backgroundImage: 'url("../../cloud-infra-and-security-services.png")',
        }}
        className="services-hero digital-data-service-page-bg">
        <Navbar />
        <div className="bg-decor"></div>
        <div className="services-hero-content">
          <div className="breadcrump">
            OFFERINGS <span></span> CLOUD INFRA AND SECURITY SERVICES
          </div>
          <h1>
            MODERNIZE YOUR DATA ESTATE TO A CLOUD-READY, FUTURE-FIT, SCALABLE
            ECOSYSTEM
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
