import Image from "next/image";
import arrow from "@/public/blog-arrow.svg";

import service1 from "@/public/service-1.png";
import service2 from "@/public/service-2.png";
import service3 from "@/public/service-3.png";
import service4 from "@/public/service-4.png";
import service5 from "@/public/service-5.png";
import service6 from "@/public/service-6.png";

import Button from "@/app/ui/global/button";
import ServiceCard from "@/app/ui/global/service-card";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Path5 from "@/app/ui/global/path-5";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";
import GlobeAnimation from "@/app/ui/globe-animation";
import CountryScroll from "@/app/ui/global/country-scroll";

export const metadata = {
  title: "Delivering Innovative Solutions to Help Businesses Grow – Qcentrio",
  description:
    "Discover Qcentrio's innovative solutions that help businesses stay ahead of the competition. From AI and machine learning to advanced cloud solutions, we offer strategic advisory services to drive success for your company.",
};

export default function ServicesListing() {
  return (
    <div className="service-listing">
      <div className="hero">
        <NavBarContainer />
      </div>
      <ServiceListingHeadSection />
      <div id="get-started">
        <AllServices />
      </div>
      <BusinessTodaySection />
      <CountryScroll />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function ServiceListingHeadSection() {
  return (
    <div className="balance-section service-listing-heading-section">
      <GlobeAnimation />
      <div>
        <h1 className="heading1">OUR SERVICES</h1>
        <h2
          data-option="strip-slide-up"
          className="section-heading heading2 animate strip-slide-up strip-slide-green">
          RANGE OF INNOVATIVE SOLUTIONS DESIGNED TO HELP BUSINESSES ACHIEVE
          THEIR GOALS
        </h2>
        <h3 data-option="up" className="heading3 animate-hidden animate">
          INTO THE FUTURE
        </h3>
        <Link href="#get-started">
          <div
            data-option="up"
            className="btn-container animate-hidden animate">
            <p>Get Started</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
          </div>
        </Link>
        <Path5 />
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
          <h2
            data-option="strip-slide-up"
            className="section-heading animate strip-slide-up strip-slide-black">
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
          link="/offerings/business-value-enhancement-services"
        />
        <ServiceCard
          image={service2}
          title="Advisory and Strategic Services"
          content="Leading in SAP services (S/4HANA, CRM, Analytics), custom software development (JAVA, MEAN, Full Stack), IoT solutions, and innovative product engineering for global business transformation."
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
          content="Empowering your digital shift with our cloud infrastructure and security services, resulting in tangible, measurable business impacts and ROI growth."
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

function BusinessTodaySection() {
  return (
    <div className="balance-section business-today-section">
      <div>
        <h2
          data-option="strip-slide-up"
          className="animate strip-slide-up strip-slide-white">
          Empower Your Business Today
        </h2>
        <p data-option="up" className="section-content animate-hidden animate">
          Ready to transform your business with our innovative solutions?
          Contact us now to get started and discover the power of
          Qcentrio&lsquo;s services.
        </p>
        <Link className="w-fit ml-auto mr-auto" href="/contact-us">
          <Button name="Get Started" />
        </Link>
      </div>
    </div>
  );
}
