import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import SubServiceOfferings from "@/app/ui/offerings/sub-service/sub-offerings";
import Image from "next/image";
import ball from "@/public/ball.png";
import subServiceBanner from "@/public/sub-service-banner.png";
import contentImage from "@/public/sub-service-content-side-image.png";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";
import { getSubServicePageContent } from "@/app/lib/data";

export async function generateMetadata({ params }) {
  const data = getSubServicePageContent(params.slug, params.sub);

  return {
    title: data.metaData.title,
    description: data.metaData.description,
  };
}

export default function SubService({ params }) {
  const data = getSubServicePageContent(params.slug, params.sub);
  return (
    <div className="sub-service">
      <div className="hero">
        <NavBarContainer />
        <div className="breadcrump">
          HOME <span></span> SERVICES
        </div>
      </div>
      <div className="relative">
        <SubServiceHeroSection data={data.heroSectionData} />
        <Image
          className="sub-service-banner-image"
          src={subServiceBanner}
          alt=""></Image>
        <SubServiceContentSection data={data.contentSection} />
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
      <SubServiceOfferings data={data.offeringsSetion} />
      <ServicesOfSubService data={data.servicesOfSubService} />
      <SubServiceWhyChooseSection data={data.whyChooseSection} />
      <Contact heading={data.contactHead} />
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
