import { getSubServicePageContent } from "@/app/lib/data";
import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import CountryScroll from "@/app/ui/global/country-scroll";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import SubAccordianOfferings from "@/app/ui/global/sub-accordian-offerings";
import SubServiceContact from "@/app/ui/global/sub-service-contact";
import { SubServiceHeading } from "@/app/ui/offerings/sub-service/sub-service-heading";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/offerings">OFFERINGS</Link>
          <span></span> {data.breadCrump.current}
        </div>
      </div>
      <SubServiceHeading
        data={data.heroSectionData}
        bannerImage={data.bannerImage}
      />
      <SubServiceContent data={data.contentSection} />
      <SubAccordianOfferings data={data.offeringsSetion} />
      <ServicesOfSubService data={data.servicesOfSubService} />
      <SubServiceWhyChooseSection data={data.whyChooseSection} />
      <div id="get-started">
        <SubServiceContact heading={data.contactHead} />
      </div>
      <CountryScroll />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function SubServiceContent({ data }) {
  return (
    <div className="sub-service-content-section">
      <div className="sub-service-content-section-column-1">
        <h2
          data-option="strip-slide-up"
          className="animate strip-slide-up strip-slide-black">
          {data.heading}
        </h2>
        <p data-option="up" className="animate animate-hidden">
          {data.content1}
        </p>
        <p data-option="up" className="animate animate-hidden">
          {data.content2}
        </p>
      </div>
      <div className="sub-service-content-section-column-2">
        <p data-option="up" className="animate animate-hidden">
          {data.content3}
        </p>
        <p data-option="up" className="highlight animate animate-hidden">
          {data.content4}
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
        <div className="subservice-aniation-container">
          <SubserviceAnimation />
        </div>
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

function SubserviceAnimation() {
  return (
    <div class="main-wrapper">
      <div class="sphere-wrapper">
        <div class="plane plane-1">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-2">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-3">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-4">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-5">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-6">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-7">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-8">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-9">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-10">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-11">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>

        <div class="plane plane-12">
          <div class="spoke spoke-1">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-2">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-3">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-4">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-5">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-6">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-7">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-8">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-9">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-10">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-11">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-12">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-13">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-14">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-15">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-16">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-17">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-18">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-19">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-20">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-21">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-22">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-23">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-24">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-25">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-26">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-27">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-28">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-29">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-30">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-31">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-32">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-33">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-34">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-35">
            <div class="dot"></div>
          </div>

          <div class="spoke spoke-36">
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
