import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Glimpse from "@/app/ui/offerings/glimpse";
import ServicesContent from "@/app/ui/offerings/services";
import StrategicPath from "@/app/ui/offerings/strategic-path";
import SuccessPath from "@/app/ui/offerings/success-path";
import InsigntsNoCaro from "@/app/ui/global/insights-no-caro";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import { getServicePageData, getSubServicePageContent } from "@/app/lib/data";
import Link from "next/link";
import CountryScroll from "@/app/ui/global/country-scroll";

export async function generateMetadata({ params }) {
  const data = getSubServicePageContent(params.slug, params.sub);

  return {
    title: data.title,
    description: data.description,
  };
}

export default function Services({ params }) {
  const data = getServicePageData(params.slug);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data.banner})`,
        }}
        className="services-hero digital-data-service-page-bg">
        <NavBarContainer />
        <div className="bg-decor"></div>
        <div className="services-hero-content">
          <div className="breadcrump">
            OFFERINGS <span></span> {data.breadCrump}
          </div>
          <h1
            data-option="strip-slide-up"
            className="animate strip-slide-up strip-slide-white">
            {data.mainHeading}
          </h1>
          <Link href="#get-started">
            <Button name="Get Started" />
          </Link>
        </div>
      </div>
      <Glimpse data={data.glimpseContent} />
      <ServicesContent data={data.servicesContent} />
      <StrategicPath data={data.strategicPathContent} />
      <SuccessPath data={data.successpathContent} />
      <InsigntsNoCaro />
      <div id="get-started">
        <Contact
          heading={data.contact.heading}
          subheading={data.contact.subheading}
        />
      </div>
      <CountryScroll />
      <Footer />
      <CopyrightBar />
    </>
  );
}
