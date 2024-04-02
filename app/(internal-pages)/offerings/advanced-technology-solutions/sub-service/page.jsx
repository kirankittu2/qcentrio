import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import SubServiceOfferings from "@/app/ui/offerings/sub-service/sub-offerings";
import Image from "next/image";
import whyChooseImg1 from "@/public/sub-service-why-choose-1.png";
import ball from "@/public/ball.png";
import healthcare from "@/public/heart-beat.svg";
import finace from "@/public/trend.svg";
import manufacturing from "@/public/factory.svg";
import engineering from "@/public/engineering.svg";
import aerospace from "@/public/aerospace.svg";
import travel from "@/public/suitcase.svg";
import eCommerce from "@/public/web-trolley.svg";
import realEstate from "@/public/building.svg";
import softwareTechnology from "@/public/software-engineer.svg";
import whyChooseImg2 from "@/public/sub-service-why-choose-2.png";
import whyChooseImg3 from "@/public/sub-service-why-choose-3.png";
import subServiceBanner from "@/public/sub-service-banner.png";
import contentImage from "@/public/sub-service-content-side-image.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import service1 from "@/public/sub-offerings-1.png";
import service2 from "@/public/sub-offerings-2.jpeg";
import service3 from "@/public/sub-offerings-3.jpeg";
import service4 from "@/public/sub-offerings-4.jpeg";
import service5 from "@/public/sub-offerings-5.jpg";

export default function SubService() {
  const heroSectionData = {
    heading:
      "<span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH GENERATIVE AI SOLUTIONS AND OFFERINGS",
  };

  const contentSection = {
    image: "http://localhost:3000/sub-service-content-side-image.",
    heading: "Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>",
    content1:
      "The transformative power of Generative AI cannot be overstated. With its ability to enhance productivity and accelerate innovation, this technology is revolutionizing industries worldwide. It has the potential to unlock $2.6 to $4.4 trillion in value annually across different use cases and can automate 60-70% of staff workloads, freeing up valuable time and resources for strategic initiatives.",
    content2:
      " Businesses are turning to generative AI for various applications, such as virtual assistants that improve customer service, personalized content customization, and predictive maintenance to prevent equipment failures. These technologies allow companies to increase operational efficiency, reduce costs, and drive revenue growth. Qcentrio specializes in GenAI, enabling businesses to fully leverage this transformative technology and stay ahead in a rapidly changing digital landscape.",
  };

  const offeringsSetion = {
    mainHeading: "OUR GENERATIVE AI SOLUTIONS AND OFFERINGS",
    images: [service1, service2, service3, service4, service5],
    list: [
      {
        num: "01",
        heading: "Empower Your Business with Open AI / ChatGPT Integration",
        content:
          "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
      },
      {
        num: "02",
        heading: "Advanced Analytics and AI for Insightful Decisions",
        content:
          "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
      },
      {
        num: "03",
        heading: "Strategic AI Implementation for Industry-Specific Needs",
        content:
          "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
      },
      {
        num: "04",
        heading: "Boost Productivity with Automation Solutions",
        content:
          "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
      },
      {
        num: "05",
        heading: "End-to-End Generative AI Integration for Business Growth",
        content:
          "Integrate chatbots powered by generative AI to deliver natural responses and automate interactions. Our GPT4 services can significantly reduce your company's workload while maintaining process efficiency.",
      },
    ],
  };

  const servicesOfSubService = {
    mainHeading:
      "<span>INDUSTRY-SPECIFIC</span> GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND EFFICIENCY",
    list: [
      {
        icon: healthcare,
        heading: "HEALTHCARE",
        content:
          "Our AI is revolutionizing healthcare with tools for drug discovery, disease diagnosis, medical imaging, and personalized care, enhancing patient outcomes and clinical efficiency.",
      },
      {
        icon: finace,
        heading: "FINANCE",
        content:
          "Our GenAI services offer fresh insights for financial decisions, from portfolio optimization to fraud detection, revolutionizing traditional economic analysis and risk management.",
      },
      {
        icon: manufacturing,
        heading: "MANUFACTURING",
        content:
          "Integrate AI into manufacturing processes for predictive maintenance, optimized production planning, and quality control, ensuring operational excellence and cost reduction.",
      },
      {
        icon: engineering,
        heading: "HEAVY ENGINEERING",
        content:
          "Leverage AI technology for heavy engineering projects to improve design efficiency, optimize resource allocation, and enhance project execution through sophisticated data analysis.",
      },
      {
        icon: aerospace,
        heading: "AEROSPACE",
        content:
          "Advance aerospace design and testing with cutting-edge AI-powered simulations and analytics, significantly enhancing safety and driving innovation in aviation technology.",
      },
      {
        icon: travel,
        heading: "TRAVEL & TRANSPORTATION",
        content:
          "Our GenAI solutions forecast the best travel options and manage logistics, analyzing vast amounts of data to predict trends and improve customer experiences.",
      },
      {
        icon: eCommerce,
        heading: "E-COMMERCE",
        content:
          "Amplify your e-commerce strategy with GenAI services to boost personalization, inventory management, and customer service, ensuring enhanced satisfaction and operational efficiency.",
      },
      {
        icon: realEstate,
        heading: "REAL ESTATE",
        content:
          "Enhance your real estate business with AI-powered design optimization, site planning, and project timeline predictions through the analysis of historical data.",
      },
      {
        icon: softwareTechnology,
        heading: "SOFTWARE TECHNOLOGY",
        content:
          "We support software developers with AI tools for code automation, helping them navigate and complete tasks efficiently in any coding environment.",
      },
    ],
  };

  const whyChooseSection = {
    mainHeading:
      "Why Choose Qcentrio for Generative AI Solutions and Offerings?",
    list: [
      {
        image: whyChooseImg1,
        heading: "Expertise in Generative AI",
        content:
          "We offer a comprehensive suite of AI solutions, from advisory to model development and ongoing managed services.",
      },
      {
        image: whyChooseImg2,
        heading: "Customized Solutions",
        content:
          "Our domain-specific models are trained on specialized data, ensuring they meet your unique business needs.",
      },
      {
        image: whyChooseImg3,
        heading: "Innovative Ecosystem",
        content:
          "Access our ecosystem of data and AI-independent software vendors (ISVs) to expedite value creation.",
      },
    ],
  };

  return (
    <div className="sub-service">
      <div className="hero">
        <NavBarContainer />
        <div className="breadcrump">
          HOME <span></span> SERVICES
        </div>
      </div>
      <div className="relative">
        <SubServiceHeroSection data={heroSectionData} />
        <Image
          className="sub-service-banner-image"
          src={subServiceBanner}
          alt=""></Image>
        <SubServiceContentSection data={contentSection} />
        <div className="sub-service-scroller">
          <div className="relative w-full h-full flex justify-center">
            <div className="sub-service-scroller-line"></div>
            <Image
              className=""
              style={{ width: "50px", height: "50px" }}
              src={ball}
              alt=""
            />
          </div>
        </div>
      </div>
      <SubServiceOfferings data={offeringsSetion} />
      <ServicesOfSubService data={servicesOfSubService} />
      <SubServiceWhyChooseSection data={whyChooseSection} />
      <Contact heading="Build confidence in your AI/ML models and revolutionize your operations" />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function SubServiceWhyChooseSection({ data }) {
  return (
    <div className="balance-section sub-services-why-choose-section">
      <h2 className="section-heading">{data.mainHeading}</h2>

      <div className="sub-services-why-choose-cards-holder">
        {data.list.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item.image} alt="" />
              <h2>{item.heading}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SubServiceHeroSection({ data }) {
  return (
    <div className="sub-service-hero-section">
      <div>
        <div className="sub-service-heading-section">
          <div className="sub-service-heading-row">
            <h1
              className="section-heading"
              dangerouslySetInnerHTML={{ __html: data.heading }}></h1>
          </div>
          <Button name="Get Started" />
        </div>
      </div>
    </div>
  );
}

function SubServiceContentSection({ data }) {
  return (
    <div className="sub-service-heading-content-section">
      <div>
        <div className="sub-service-content-side-image">
          <Image fill src={contentImage} alt="" />
        </div>
      </div>
      <div className="sub-service-heading-content">
        <h2
          className="section-heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}></h2>
        <p>{data.content1}</p>
        <p>{data.content1}</p>
      </div>
    </div>
  );
}

function ServicesOfSubService({ data }) {
  return (
    <div className="services-of-sub-service">
      <h2
        className="section-heading"
        dangerouslySetInnerHTML={{ __html: data.mainHeading }}></h2>
      <div className="services-of-sub-service-holder">
        {data.list.map((item, index) => {
          return (
            <div key={index} className="sub-service-card">
              <Image src={item.icon} alt=""></Image>
              <h2>{item.heading}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
