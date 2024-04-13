import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Image from "next/image";
import banner from "@/public/industries-banner.png";
import domain from "@/public/deep-domain.png";
import category from "@/public/category.png";
import client from "@/public/client-centric.png";
import Button from "@/app/ui/global/button";
import TransformingSection from "@/app/ui/industries/transforming-section";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";

export const metadata = {
  title: "Empowering Industries - Upgrade Your Business with Qcentrio",
  description:
    "Your strategic partner for digital transformation in all industries. Harness the power of AI and cloud technologies to propel your business to new heights.",
};

export default function Industries() {
  return (
    <div className="industries">
      <div className="hero">
        <NavBarContainer />
        <Image className="industries-banner" src={banner} alt="" />
        <div className="industries-hero-content">
          <h1
            data-option="strip-slide-up"
            className="section-heading animate strip-slide-up strip-slide-black">
            INNOVATE AND LEAD IN YOUR INDUSTRY WITH TAILORED DIGITAL SERVICES
          </h1>
          <Button name="Embrace the Future" />
        </div>
      </div>
      <div className="industries-banner-decor"></div>
      <IndustrySpecific />
      <TransformingSection />
      <PartnerSection />
      <Contact
        heading="Step into Tomorrow with Qcentrio"
        subheading="Join forces with Qcentrio to redefine your industry. Let's collaborate to unlock growth drivers, accelerate innovation, and shape the future."
      />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function IndustrySpecific() {
  return (
    <div className="industry-specific-section">
      <h2
        data-option="strip-slide-up"
        className="hero-heading animate strip-slide-up strip-slide-black">
        Unlock Industry-Specific Digital Opportunities with Qcentrio
      </h2>
      <p data-option="up" className="animate animate-hidden">
        The economy is changing, and its drivers must relentlessly evolve. They
        need to scale to new markets, harness new-age capabilities, and
        personalize their products and solutions, all while staying true to
        global and local compliance standards.
      </p>
      <p data-option="up" className="animate animate-hidden">
        At Qcentrio, we provide a bridge to the future with bespoke digital
        transformation strategies and service support. From aerospace to travel,
        we empower organizations to navigate technological advancements and
        competitive pressures while minimizing digital adoption risks, setting
        agile practices, and helping you prioritize quick wins, and at the same
        time, preparing you for scalable, long-term growth.
      </p>
    </div>
  );
}

function PartnerSection() {
  return (
    <div className="partner-section balance-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-white">
        Partner with Qcentrio for Industry-Dedicated Digital Excellence
      </h2>
      <div className="partner-cards-container">
        <div data-option="up" className="partner-card animate animate-hidden">
          <Image src={domain} alt="" />
          <div className="partner-card-content">
            <h2>
              <span>DEEP DOMAIN</span> EXPERTISE
            </h2>
            <p>
              Qcentrio understands the unique challenges and opportunities
              across industries. With our deep domain expertise, we provide
              tailored digital transformation services that are both
              cutting-edge and industry-specific.
            </p>
          </div>
        </div>
        <div data-option="up" className="partner-card animate animate-hidden">
          <Image src={category} alt="" />
          <div className="partner-card-content">
            <h2>
              CATEGORY - <span>BEST TIME</span> TO VALUE
            </h2>
            <p>
              With over 1000 subject matter experts, we assist you in
              pinpointing industry growth opportunities and accelerating the
              adoption, deployment, and scaling of technologies, cutting your
              time to value by at least 50%.
            </p>
          </div>
        </div>
        <div data-option="up" className="partner-card animate animate-hidden">
          <Image src={client} alt="" />
          <div className="partner-card-content">
            <h2>
              <span>CLIENT - CENTRIC</span> FOCUS
            </h2>
            <p>
              Our 100% reference ability rate reflects our unwavering commitment
              to quality and trust in clients. With experience-driven,
              client-centric focus, we resolve bottlenecks faster than
              traditional digital IT providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
