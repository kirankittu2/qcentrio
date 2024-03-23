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
    heading1: "Operationalize Next Gen Tech-Stack to Drive Rapid Insights",
    heading2: "Here's how we've helped our customers win",
    content1:
      "Globally, enterprises are investing heavily in building GenAI, AI/ML, and automation capabilities, but practice and maturity remain stagnant. Even as businesses plunge into quick adoption, they lack the proper framework and know-how to take advantage of it fully.",
    content2:
      "As a leading provider of business value enhancement services, Qcentrio leverages its extensive domain experience to help you unlock the full potential of GenAI, AI/ML, and RPA. Our strategic approach ensures long-term business transformation while delivering immediate wins, enabling you to stay ahead in the digital age.",
    subheading:
      "Automating Vehicle Aerodynamics Simulations for a Major Automotive Design Company",
  };

  const servicesContent = {
    heading: "DEFINE YOUR FUTURE TRAJECTORY",
    subheading:
      "With Advanced Business Value Enhancement Services Enhancement Services",
    children: [
      {
        image: cloud,
        heading: "Generative AI Solutions and Offerings",
        content:
          "Partner with Qcentrio to harness Generative AI's transformative power, overcome challenges, and unlock unprecedented productivity and innovation in your operations. Transform your business with our bespoke GenAI solutions.",
      },
      {
        image: salesforce,
        heading: "Artificial Intelligence/Machine Learning Offerings",
        content:
          "Experience excellence with our AI and ML solutions, specializing in process automation, personalized customer experiences, and predictive/prescriptive insights to drive your business forward.",
      },
      {
        image: azure,
        heading: "Robotic Process Automation Services",
        content:
          "Leverage our Robotic Process Automation (RPA) expertise to automate routine tasks and enhance process efficiency. With advanced tools and experienced professionals, we ensure smooth integration of RPA technology.",
      },
    ],
  };

  const strategicPathContent = {
    upperheading: "QCENTRIO’S",
    heading: "Strategic Path to Providing Business Value Enhancement Services",
    accordation1: [
      {
        index: 1,
        title: "Discovery & Analysis",
        content:
          "Understand your business needs, existing systems, and process workflows.",
      },
      {
        index: 2,
        title: "Strategy Development",
        content:
          "Outline a strategic plan that includes AI/ML and RPA objectives, timeline, and expected outcomes.",
      },
      {
        index: 3,
        title: "Development and Integration",
        content:
          "Develop the AI/ML and RPA solutions and integrate them with existing business processes and systems.",
      },
      {
        index: 4,
        title: "Solution Designing",
        content:
          "Design AI/ML models and RPA bots tailored to the business needs identified in the discovery phase.",
      },
    ],
    accordation2: [
      {
        index: 5,
        title: "Testing and Training",
        content:
          " Test the integrated solutions for functionality and accuracy and train the end-users.",
      },
      {
        index: 6,
        title: "Deployment",
        content:
          "Roll out the AI/ML and RPA solutions in a controlled environment.",
      },
      {
        index: 7,
        title: "Monitoring and Optimization",
        content:
          "Continuously monitor the performance of AI/ML and RPA solutions.",
      },
      {
        index: 8,
        title: "Support and Evolution",
        content: "Provide ongoing support and update the solutions.",
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
    heading2: "Category-Leading Business Value Enhancement Services",
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
            FUEL GROWTH AND SCALE TIME TO INSIGHTS WITH BUSINESS VALUE
            ENHANCEMENT SERVICES
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
