import service1 from "@/public/service-1.png";
import service2 from "@/public/service-2.png";
import service3 from "@/public/service-3.png";
import service4 from "@/public/service-4.png";
import service5 from "@/public/service-5.png";
import service6 from "@/public/service-6.png";
import Path2 from "../global/path-2";
import ServiceCard from "../global/service-card";

export default function Services() {
  return (
    <div className="section home-services-section">
      <h2 className="section-heading">
        Leading-Edge Services for Future-Ready Enterprises
      </h2>
      <div className="home-services-container mb-[30px] mt-[40px]">
        <ServiceCard
          image={service1}
          title="Business Value Enhancement"
          content=" Specializing in GenAI, AI, ML, and RPA solutions, we automate
              processes, personalize experiences, and provide predictive
              insights, revolutionizing operations and driving future business
              growth."
          link="/services/business-value-enhancement-services"
        />
        <ServiceCard
          image={service2}
          title="Advisory and Strategic Services"
          content="Leading in SAP services (S/4HANA, CRM, Analytics), custom software development (JAVA, MEAN, Full Stack), IoT solutions, and innovative product engineering for global business transformation."
          link="/services/advisory-and-strategic-services"
        />
        <ServiceCard
          image={service3}
          title="Business Optimization and Analytics"
          content="Expertise in analytics (Power BI, Google Analytics, Tableau), digital workspace tools (Teams, Asana, Slack), and CRM solutions (Salesforce, Dynamics, SAP CRM) to enhance business operations."
          link="/services/business-optimization-and-analytics-services"
        />
        <ServiceCard
          image={service4}
          title="Advanced Technology Solutions"
          content="Excelling in Epic and Oracle Cerner EHR integration, we ensure seamless data management. Our audit, risk advisory, M&A, and QA services guarantee digital integrity and quality."
          link="/services/advanced-technology-solutions"
        />
        <ServiceCard
          image={service5}
          title="Cloud Infrastructure & Security Services"
          content="Empowering your digital shift with our cloud infrastructure and security services, resulting in tangible, measurable business impacts and ROI growth."
          link="/services/cloud-infra-and-security-services"
        />
        <ServiceCard
          image={service6}
          title="Blockchain Services & Solutions"
          content="Leading in blockchain for various industries, we offer end-to-end services from innovation and strategy development to prototyping and product development, ensuring seamless blockchain integration."
          link="/services/blockchain-advisory-and-offerings"
        />
      </div>
      <Path2 />
    </div>
  );
}
