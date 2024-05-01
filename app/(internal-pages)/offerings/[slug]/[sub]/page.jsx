import { getSubServicePageContent } from "@/app/lib/data";
import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import SubAccordianOfferings from "@/app/ui/global/sub-accordian-offerings";
import SubServiceContact from "@/app/ui/global/sub-service-contact";
import Image from "next/image";
import image from "@/public/sample.png";
import Link from "next/link";

export default function SubService({ params }) {
  const data = getSubServicePageContent(params.slug, params.sub);
  return (
    <div className="sub-service">
      <div className="hero">
        <NavBarContainer />
        <div className="breadcrump">
          <Link href={data.breadCrump.link}>{data.breadCrump.main}</Link>{" "}
          <span></span> {data.breadCrump.current}
        </div>
      </div>
      <SubServiceHeading />
      <SubServiceContent />
      <SubAccordianOfferings data={data.offeringsSetion} />
      <ServicesOfSubService data={data.servicesOfSubService} />
      <SubServiceWhyChooseSection data={data.whyChooseSection} />
      <SubServiceContact heading={data.contactHead} />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function SubServiceHeading() {
  return (
    <div className="sub-service-hero-section">
      <div className="">
        <h1 className="sub-service-hero-heading">
          DEFINE YOUR ENTERPRISE'S FUTURE TRAJECTORY
        </h1>
        <h2 className="sub-service-hero-sub-heading">
          WITH GENERATIVE AI SOLUTIONS AND OFFERINGS
        </h2>
        <p className="sub-service-hero-content">
          At Qcentrio, our business optimization and analytics services enhance
          your operations by reviewing and improving processes, instilling best
          practices, and providing a clear roadmap for optimized processes.
        </p>
        <Button name="Get Started" />
      </div>
      <div>
        <Image src={image} alt="" />
      </div>
    </div>
  );
}

function SubServiceContent() {
  return (
    <div className="sub-service-content-section">
      <div className="sub-service-content-section-column-1">
        <h2>REDEFINE INNOVATION WITH QCENTRIO’S GENAI EXPERTISE</h2>
        <p>
          The transformative power of Generative AI cannot be overstated. With
          its ability to enhance productivity and accelerate innovation, this
          technology is revolutionizing industries worldwide.
        </p>
        <p>
          It has the potential to unlock $2.6 to $4.4 trillion in value annually
          across different use cases and can automate 60-70% of staff workloads,
          freeing up valuable time and resources for strategic initiatives.
        </p>
      </div>
      <div className="sub-service-content-section-column-2">
        <p>
          Businesses are turning to generative AI for various applications, such
          as virtual assistants that improve customer service, personalized
          content customization, and predictive maintenance to prevent equipment
          failures.
        </p>
        <p className="highlight">
          These technologies allow companies to increase operational efficiency,
          reduce costs, and drive revenue growth.
        </p>
      </div>
    </div>
  );
}

function SubServiceWhyChooseSection({ data }) {
  return (
    <div className="balance-section sub-services-why-choose-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-white">
        {data.mainHeading}
      </h2>

      <div className="sub-services-why-choose-cards-holder">
        {data.list.map((item, index) => {
          return (
            <div
              data-option="up"
              className="animate animate-hidden"
              key={index}>
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

function ServicesOfSubService({ data }) {
  return (
    <div className="services-of-sub-service">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-black">
        {data.mainHeading}
      </h2>
      <div className="services-of-sub-service-holder">
        <div></div>
        {data.list.map((item, index) => {
          return (
            <div
              data-option="up"
              key={index}
              className="sub-service-card animate animate-hidden">
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
