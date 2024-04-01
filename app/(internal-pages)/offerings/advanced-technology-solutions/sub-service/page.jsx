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

export default function SubService() {
  return (
    <div className="sub-service">
      <div className="hero">
        <NavBarContainer />
        <div className="breadcrump">
          HOME <span></span> SERVICES
        </div>
      </div>
      <div className="relative">
        <SubServiceHeroSection />
        <Image
          className="sub-service-banner-image"
          src={subServiceBanner}
          alt=""></Image>
        <SubServiceContentSection />
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
      <SubServiceOfferings />
      <ServicesOfSubService />
      <SubServiceWhyChooseSection />
      <Contact />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function SubServiceWhyChooseSection() {
  return (
    <div className="balance-section sub-services-why-choose-section">
      <h2 className="section-heading">
        Why Choose Qcentrio for Generative AI Solutions and Offerings?
      </h2>

      <div className="sub-services-why-choose-cards-holder">
        <div>
          <Image src={whyChooseImg1} alt="" />
          <h2>Expertise in Generative AI</h2>
          <p>
            We offer a comprehensive suite of AI solutions, from advisory to
            model development and ongoing managed services.
          </p>
        </div>
        <div>
          <Image src={whyChooseImg2} alt="" />
          <h2>Customized Solutions</h2>
          <p>
            Our domain-specific models are trained on specialized data, ensuring
            they meet your unique business needs.
          </p>
        </div>
        <div>
          <Image src={whyChooseImg3} alt="" />
          <h2>Innovative Ecosystem</h2>
          <p>
            Access our ecosystem of data and AI-independent software vendors
            (ISVs) to expedite value creation.
          </p>
        </div>
      </div>
    </div>
  );
}

function SubServiceHeroSection() {
  return (
    <div className="sub-service-hero-section">
      <div>
        <div className="sub-service-heading-section">
          <div className="sub-service-heading-row">
            <h1 className="section-heading">
              <span>DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY</span> WITH
              GENERATIVE AI SOLUTIONS AND OFFERINGS
            </h1>
          </div>
          <Button name="Get Started" />
        </div>
      </div>
    </div>
  );
}

function SubServiceContentSection() {
  return (
    <div className="sub-service-heading-content-section">
      <div>
        <div className="sub-service-content-side-image">
          <Image fill src={contentImage} alt="" />
        </div>
      </div>
      <div className="sub-service-heading-content">
        <h2 className="section-heading">
          Redefine Innovation with <span>Qcentrio’s GenAI Expertise</span>
        </h2>
        <p>
          The transformative power of Generative AI cannot be overstated. With
          its ability to enhance productivity and accelerate innovation, this
          technology is revolutionizing industries worldwide. It has the
          potential to unlock $2.6 to $4.4 trillion in value annually across
          different use cases and can automate 60-70% of staff workloads,
          freeing up valuable time and resources for strategic initiatives.
        </p>
        <p>
          Businesses are turning to generative AI for various applications, such
          as virtual assistants that improve customer service, personalized
          content customization, and predictive maintenance to prevent equipment
          failures. These technologies allow companies to increase operational
          efficiency, reduce costs, and drive revenue growth. Qcentrio
          specializes in GenAI, enabling businesses to fully leverage this
          transformative technology and stay ahead in a rapidly changing digital
          landscape.
        </p>
      </div>
    </div>
  );
}

function ServicesOfSubService() {
  return (
    <div className="services-of-sub-service">
      <h2 className="section-heading">
        INDUSTRY-SPECIFIC GENERATIVE AI OFFERINGS FOR SECTOR-WIDE INNOVATION AND
        EFFICIENCY
      </h2>
      <div className="services-of-sub-service-holder">
        <div className="sub-service-card">
          <Image src={healthcare} alt=""></Image>
          <h2>HEALTHCARE</h2>
          <p>
            Our AI is revolutionizing healthcare with tools for drug discovery,
            disease diagnosis, medical imaging, and personalized care, enhancing
            patient outcomes and clinical efficiency.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={finace} alt=""></Image>
          <h2>FINANCE</h2>
          <p>
            Integrate AI into manufacturing processes for predictive
            maintenance, optimized production planning, and quality control,
            ensuring operational excellence and cost reduction.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={manufacturing} alt=""></Image>
          <h2>MANUFACTURING</h2>
          <p>
            Our AI is revolutionizing healthcare with tools for drug discovery,
            disease diagnosis, medical imaging, and personalized care, enhancing
            patient outcomes and clinical efficiency.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={engineering} alt=""></Image>
          <h2>HEAVY ENGINEERING</h2>
          <p>
            Leverage AI technology for heavy engineering projects to improve
            design efficiency, optimize resource allocation, and enhance project
            execution through sophisticated data analysis.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={aerospace} alt=""></Image>
          <h2>AEROSPACE</h2>
          <p>
            Advance aerospace design and testing with cutting-edge AI-powered
            simulations and analytics, significantly enhancing safety and
            driving innovation in aviation technology.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={travel} alt=""></Image>
          <h2>TRAVEL & TRANSPORTATION</h2>
          <p>
            Our GenAI solutions forecast the best travel options and manage
            logistics, analyzing vast amounts of data to predict trends and
            improve customer experiences.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={eCommerce} alt=""></Image>
          <h2>E-COMMERCE</h2>
          <p>
            Amplify your e-commerce strategy with GenAI services to boost
            personalization, inventory management, and customer service,
            ensuring enhanced satisfaction and operational efficiency.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={realEstate} alt=""></Image>
          <h2>REAL ESTATE</h2>
          <p>
            Enhance your real estate business with AI-powered design
            optimization, site planning, and project timeline predictions
            through the analysis of historical data.
          </p>
        </div>
        <div className="sub-service-card">
          <Image src={softwareTechnology} alt=""></Image>
          <h2>SOFTWARE TECHNOLOGY</h2>
          <p>
            We support software developers with AI tools for code automation,
            helping them navigate and complete tasks efficiently in any coding
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}
