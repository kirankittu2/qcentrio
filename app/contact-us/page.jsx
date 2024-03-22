import Image from "next/image";
import ContactMain from "../ui/contact-us/contact-main";
import ContactWhyQcentrio from "../ui/contact-us/contact-why-qcentrio";
import Navbar from "../ui/global/nav-bar";
import banner from "@/public/contact-banner.png";
import SuccessPath from "../ui/services/success-path";
import Card from "../ui/global/card";
import Footer from "../ui/global/footer";
import ReachOut from "../ui/contact-us/reach-out";
import GlobalPresence from "../ui/contact-us/global-presence";
import Path4 from "../ui/global/path-4";

export default function ContactUs() {
  return (
    <div className="contact">
      <div className="hero">
        <Navbar />
      </div>
      <ContactMain />
      <ContactWhyQcentrio />
      <div className="balance-section contact-us-banner-section">
        <Image src={banner} alt="" />
      </div>
      <div className="balance-section contact-us-infra-section">
        <h2 className="section-heading">
          Category-Leading Cloud Infra and Security Practice
        </h2>
        <div className="success-path-category-container">
          <Card
            title="Flexible Team"
            content="An adaptable and agile cloud team, fully equipped to efficiently and effectively scale up and down in response to fluctuating project requirements."
          />
          <Card
            title="End-to-End Execution"
            content="Effortless, integrated coordination across IT, infrastructure, data engineering, and analytics provides comprehensive, robust support to the last mile."
          />
          <Card
            title="Repeatable"
            content="Experience swift value realization with our user-friendly Playbooks and Code Plugins tailored for common scenarios, further enhanced with bespoke solutions."
          />
          <Card
            title="Innovation"
            content="Dive into the future with our expert team, designing experiments for next-generation initiatives and bringing the latest innovations to your fingertips."
          />
        </div>
        <Path4 />
      </div>
      <ReachOut />
      <GlobalPresence />
      <Footer />
    </div>
  );
}
