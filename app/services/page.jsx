import Image from "next/image";
import Navbar from "../ui/global/nav-bar";
import arrow from "@/public/blog-arrow.svg";
import ServiceCard from "../ui/global/service-card";
import service1 from "@/public/service-1.png";
import service2 from "@/public/service-2.png";
import service3 from "@/public/service-3.png";
import service4 from "@/public/service-4.png";
import service5 from "@/public/service-5.png";
import service6 from "@/public/service-6.png";
import Footer from "../ui/global/footer";
import CopyrightBar from "../ui/global/copyrightbar";
import Button from "../ui/global/button";

export default function ServicesListing() {
  return (
    <div className="service-listing">
      <div className="hero">
        <Navbar />
      </div>
      <ServiceListingHeadSection />
      <AllServices />
      <BusinessTodaySection />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function ServiceListingHeadSection() {
  return (
    <div className="balance-section service-listing-heading-section">
      <div className=""></div>
      <div>
        <h1 className="heading1">OUR SERVICES</h1>
        <h2 className="section-heading heading2">
          RANGE OF INNOVATIVE SOLUTIONS DESIGNED TO HELP BUSINESSES ACHIEVE
          THEIR GOALS
        </h2>
        <h3 className="heading3">INTO THE FUTURE</h3>
        <div className="btn-container">
          <p>Get Started</p>
          <span>
            <Image src={arrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

function AllServices() {
  return (
    <div className="section service-list-section">
      <div className="all-services-list-head-container">
        <div>
          <div className="upper-heading">SERVICES</div>
          <h2 className="section-heading">
            EXPLORE OUR SOLUTIONS BELOW TO FIND OUT HOW WE CAN HELP YOU ACHIEVE
            YOUR GOALS.
          </h2>
        </div>
        <div></div>
      </div>

      <div className="all-service-list-container">
        <ServiceCard
          image={service1}
          title="Business Value Enhancement"
          content=" Specializing in GenAI, AI, ML, and RPA solutions, we automate
              processes, personalize experiences, and provide predictive
              insights, revolutionizing operations and driving future business
              growth."
        />
        <ServiceCard
          image={service2}
          title="Advisory and Strategic Services"
          content="Leading in SAP services (S/4HANA, CRM, Analytics), custom software development (JAVA, MEAN, Full Stack), IoT solutions, and innovative product engineering for global business transformation."
        />
        <ServiceCard
          image={service3}
          title="Business Optimization and Analytics"
          content="Expertise in analytics (Power BI, Google Analytics, Tableau), digital workspace tools (Teams, Asana, Slack), and CRM solutions (Salesforce, Dynamics, SAP CRM) to enhance business operations."
        />
        <ServiceCard
          image={service4}
          title="Advanced Technology Solutions"
          content="Excelling in Epic and Oracle Cerner EHR integration, we ensure seamless data management. Our audit, risk advisory, M&A, and QA services guarantee digital integrity and quality."
        />
        <ServiceCard
          image={service5}
          title="Cloud Infrastructure & Security Services"
          content="Empowering your digital shift with our cloud infrastructure and security services, resulting in tangible, measurable business impacts and ROI growth."
        />
        <ServiceCard
          image={service6}
          title="Blockchain Services & Solutions"
          content="Leading in blockchain for various industries, we offer end-to-end services from innovation and strategy development to prototyping and product development, ensuring seamless blockchain integration."
        />
      </div>
    </div>
  );
}

function BusinessTodaySection() {
  return (
    <div className="balance-section business-today-section">
      <div>
        <h2>Empower Your Business Today</h2>
        <p className="section-content">
          Ready to transform your business with our innovative solutions?
          Contact us now to get started and discover the power of
          Qcentrio&lsquo;s services.
        </p>
        <Button name="Get Started" />
      </div>
    </div>
  );
}
