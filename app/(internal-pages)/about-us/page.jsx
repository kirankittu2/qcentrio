import NavBarContainer from "@/app/ui/global/nav-bar-container";
import AboutUsHero from "../../ui/about-us/about-us-hero";
import AboutUsServices from "../../ui/about-us/about-us-services";
import AboutUSWhyQucentrio from "../../ui/about-us/about-us-why-qucentrio";
import Button from "../../ui/global/button";
import CopyrightBar from "../../ui/global/copyrightbar";
import Footer from "../../ui/global/footer";
import Link from "next/link";
import GlobalPresence from "@/app/ui/contact-us/global-presence";
import Image from "next/image";
import map from "@/public/map.svg";
import people from "@/public/people.svg";
import idea from "@/public/skilled.svg";

export const metadata = {
  title:
    "About Qcentrio - A Universe of Innovation and Creativity for Your Imagination",
  description:
    "With Qcentrio, success is within reach. Our global IT expertise in AI and cloud solutions, paired with strategic insights and expert advisory, will guide you towards achieving your goals. Learn more about us and how we can help you succeed today!",
};

export default function AboutUs() {
  return (
    <>
      <div className="about-us-blog-hero">
        <NavBarContainer />
        <div className="">
          <AboutUsHero />
        </div>
      </div>
      <MapSection />
      <AboutUsServices />
      <AboutUSWhyQucentrio />
      <div className="balance-section join-us-buttons-container">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          JOIN OUR JOURNEY TO REDEFINE AND LEAD THE INDUSTRY STATUS QUO
        </h2>
        <div className="join-us-buttons">
          <Link href="/careers">
            <Button name="Work With Us" />
          </Link>
          <div className="divider"></div>
          <Link href="/contact-us">
            <Button name="Talk to Us" />
          </Link>
        </div>
      </div>
      <Footer />
      <CopyrightBar />
    </>
  );
}

function MapSection() {
  return (
    <div className="about-us-map-section">
      <div className="about-us-map-content">
        <div>
          <Image
            data-option="up"
            src={map}
            alt=""
            className="animate animate-hidden"
          />
        </div>
        <div>
          <h2
            data-option="up"
            className="section-heading animate animate-hidden">
            Qcentrio has established itself as a leading force in the IT
            industry, specializing in AI/ML integration, development, cloud
            solutions, and strategic advisory services.
          </h2>
          <p data-option="up" className="animate animate-hidden">
            With a global presence spanning North America, Mexico, India, the
            UK, Singapore, and Australia, our team of over 1,000 skilled
            professionals is dedicated to driving innovation and delivering
            client-centric solutions.
          </p>
          <div className="about-us-map-num">
            <div data-option="up" className="animate animate-hidden">
              <div className="about-us-map-num-img">
                <div>
                  <Image src={idea} alt="" />
                </div>
              </div>
              <div className="about-us-map-num-content">
                <h3>~1000</h3>
                <p>Skilled Professionals</p>
              </div>
            </div>
            <div data-option="up" className="animate animate-hidden">
              <div className="about-us-map-num-img">
                <div>
                  <Image src={people} alt="" />
                </div>
              </div>
              <div className="about-us-map-num-content">
                <h3>85%</h3>
                <p>Employee Trust Index Score</p>
              </div>
            </div>
          </div>
          <Link href="/contact-us">
            <Button name="Contact Us" />
          </Link>
        </div>
      </div>
      <GlobalPresence />
    </div>
  );
}
