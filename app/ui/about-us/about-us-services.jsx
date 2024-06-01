import ServiceCard from "../global/service-card";
import service1 from "@/public/service-1.png";
import service2 from "@/public/service-2.png";
import service3 from "@/public/service-3.png";
import service4 from "@/public/service-4.png";
import service5 from "@/public/service-5.png";
import service6 from "@/public/service-6.png";

export default function AboutUsServices() {
  return (
    <div className="section about-us-services">
      <div className="about-us-services-head-container">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-green">
          OUR SERVICES
        </h2>
        <span className="divider"></span>
        <h2
          data-option="strip-slide-up"
          className="sub-heading animate strip-slide-up strip-slide-black">
          GUIDING SUCCESS WITH STRATEGIC INSIGHTS AND EXPERT ADVISORY
        </h2>
      </div>
      <div className="home-services-container mb-[30px] mt-[40px]">
        <ServiceCard
          image={service1}
          title="Business Value Enhancement"
          content="Specializing in GenAI, AI, ML, and RPA solutions, we automate processes, personalize experiences, and provide predictive insights, revolutionizing operations and driving future business growth."
          link="/offerings/business-value-enhancement-services"
        />
        <ServiceCard
          image={service2}
          title="Advisory and Strategic Services"
          content="We are leading in SAP services (S/4HANA, CRM, Analytics), custom software development (JAVA, MEAN, Full Stack), IoT solutions, and innovative product engineering for global business transformation."
          link="/offerings/advisory-and-strategic-services"
        />
        <ServiceCard
          image={service3}
          title="Business Optimization and Analytics"
          content="Expertise in analytics (Power BI, Google Analytics, Tableau), digital workspace tools (Teams, Asana, Slack), and CRM solutions (Salesforce, Dynamics, SAP CRM) to enhance business operations."
          link="/offerings/business-optimization-and-analytics-services"
        />
        <ServiceCard
          image={service4}
          title="Advanced Technology Solutions"
          content="Excelling in Epic and Oracle Cerner EHR integration, we ensure seamless data management. Our audit, risk advisory, M&A, and QA services guarantee digital integrity and quality."
          link="/offerings/advanced-technology-solutions"
        />
        <ServiceCard
          image={service5}
          title="Cloud Infrastructure & Security Services"
          content="You empower your digital shift with our cloud infrastructure and security services, resulting in tangible, measurable business impacts and ROI growth."
          link="/offerings/cloud-infra-and-security-services"
        />
        <ServiceCard
          image={service6}
          title="Blockchain Services & Solutions"
          content="Leading in blockchain for various industries, we offer end-to-end services from innovation and strategy development to prototyping and product development, ensuring seamless blockchain integration."
          link="/offerings/blockchain-advisory-and-offerings"
        />
      </div>
    </div>
  );
}
