import { getSubServicePageContent } from "@/app/lib/data";
import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import SubAccordianOfferings from "@/app/ui/global/sub-accordian-offerings";
import SubServiceContact from "@/app/ui/global/sub-service-contact";
import { SubServiceHeading } from "@/app/ui/offerings/sub-service/sub-service-heading";
import Image from "next/image";
import Link from "next/link";

export default function SubService({ params }) {
  const data = getSubServicePageContent(params.slug, params.sub);
  return (
    <div className="sub-service">
      <div className="hero">
        <NavBarContainer />
        <div className="breadcrump">
          <Link href="/offerings">OFFERINGS</Link>
          <span></span> {data.breadCrump.current}
        </div>
      </div>
      <SubServiceHeading data={data.heroSectionData} />
      <SubServiceContent data={data.contentSection} />
      <SubAccordianOfferings data={data.offeringsSetion} />
      <ServicesOfSubService data={data.servicesOfSubService} />
      <SubServiceWhyChooseSection data={data.whyChooseSection} />
      <SubServiceContact heading={data.contactHead} />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function SubServiceContent({ data }) {
  return (
    <div className="sub-service-content-section">
      <div className="sub-service-content-section-column-1">
        <h2> {data.heading}</h2>
        <p>{data.content1}</p>
        <p>{data.content2}</p>
      </div>
      <div className="sub-service-content-section-column-2">
        <p>{data.content3}</p>
        <p className="highlight">{data.content4}</p>
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
              <div className="sub-service-card-icon-container">
                <Image fill src={item.icon} alt=""></Image>
              </div>
              <h2>{item.heading}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
