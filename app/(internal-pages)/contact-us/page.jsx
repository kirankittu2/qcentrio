import Image from "next/image";
import ContactMain from "../../ui/contact-us/contact-main";
import ContactWhyQcentrio from "../../ui/contact-us/contact-why-qcentrio";
import Navbar from "../../ui/global/nav-bar";
import banner from "@/public/contact-banner.png";
import SuccessPath from "../../ui/offerings/success-path";
import Card from "../../ui/global/card";
import Footer from "../../ui/global/footer";
import ReachOut from "../../ui/contact-us/reach-out";
import GlobalPresence from "../../ui/contact-us/global-presence";
import Path4 from "../../ui/global/path-4";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import cloud from "@/public/cloud.svg";
import CountryScroll from "@/app/ui/global/country-scroll";

export const metadata = {
  title:
    "Contact Us at Qcentrio - Experience Our Universe of Innovation & Creativity",
  description:
    "Looking for industry experts to help bring your vision to life? Contact Qcentrio, where our engineers are always in action to make your projects a success.",
};

export default function ContactUs() {
  return (
    <div className="contact">
      <div className="hero">
        <NavBarContainer />
      </div>
      <ContactMain />
      <ContactWhyQcentrio />
      <div className="balance-section contact-us-banner-section">
        <Image
          data-option="up"
          className="animate animate-hidden"
          src={banner}
          alt=""
        />
      </div>
      <div className="balance-section contact-us-infra-section">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          Category-Leading Cloud Infra and Security Practice
        </h2>
        <div className="success-path-category-container">
          <Card
            image={settings}
            title="Flexible Team"
            content="An adaptable and agile cloud team, fully equipped to efficiently and effectively scale up and down in response to fluctuating project requirements."
          />
          <Card
            image={strategy}
            title="End-to-End Execution"
            content="Effortless, integrated coordination across IT, infrastructure, data engineering, and analytics provides comprehensive, robust support to the last mile."
          />
          <Card
            image={support}
            title="Repeatable"
            content="Experience swift value realization with our user-friendly Playbooks and Code Plugins tailored for common scenarios, further enhanced with bespoke solutions."
          />
          <Card
            image={cloud}
            title="Innovation"
            content="Dive into the future with our expert team, designing experiments for next-generation initiatives and bringing the latest innovations to your fingertips."
          />
        </div>
        <Path4 />
      </div>
      <ReachOut />
      <GlobalPresence />
      {/* <CountryScroll /> */}
      <Footer />
      <CopyrightBar />
    </div>
  );
}
