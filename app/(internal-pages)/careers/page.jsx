import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Image from "next/image";
import banner from "@/public/careers-hero-banner.png";
import showcase1 from "@/public/career-showcase-1.png";
import showcase2 from "@/public/career-showcase-2.png";
import showcase3 from "@/public/career-showcase-3.png";
import Card from "@/app/ui/global/card";
import Link from "next/link";
import Button from "@/app/ui/global/button";
import Path8 from "@/app/ui/global/path-8";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import cloud from "@/public/cloud.svg";
import Script from "next/script";
import { jobSearchBar } from "@/app/lib/data";
import Jobs from "@/app/ui/careers/search";
import CountryScroll from "@/app/ui/global/country-scroll";

export const metadata = {
  title:
    "Join the Exciting World of Qcentrio: Careers, Jobs & Life at Our Company",
  description:
    "Discover exciting careers and a fulfilling life at Qcentrio, the global IT leader in AI, cloud solutions, and innovation. Explore our job opportunities and join our team today!",
};

export default async function Careers({ searchParams }) {
  const title = searchParams?.title || "";
  const location = searchParams?.location || "";
  const type = searchParams?.type || null;
  const page = searchParams?.page || 1;
  const results = await jobSearchBar(title, location, type, page);

  return (
    <div className="careers">
      <div className="hero">
        <NavBarContainer />
      </div>
      <CareersHero />
      <CareersWhyQcentrio />
      <CareersCommunity />
      <Jobs results={results} page={page} searchParams={searchParams} />
      <Benefits />
      <CareerShowcase />
      <CareerContact />
      <CountryScroll />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function CareersHero() {
  return (
    <div className="careers-hero-section">
      <h1
        data-option="strip-slide-up"
        className="hero-heading animate strip-slide-up strip-slide-black">
        EMBRACE YOUR FUTURE WITH QCENTRIO
      </h1>
      <h2
        data-option="up"
        className="careers-hero-subheading animate animate-hidden">
        Where Innovation Meets Opportunity
      </h2>
      <div className="relative">
        <Image src={banner} alt="" />
        <div className="careers-buttons">
          <Link href="#start-your-journey">
            <Button name="Start Your Journey" />
          </Link>
          <div className="divider"></div>
          <Link href="#jobs">
            <Button name="Check Out Jobs" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CareersWhyQcentrio() {
  return (
    <div className="careers-why-qcentrio">
      <h2
        data-option="strip-slide-up"
        className="careers-why-heading animate strip-slide-up strip-slide-black">
        Why Qcentrio
      </h2>
      <p data-option="up" className="animate animate-hidden">
        At Qcentrio, your ambition meets our vision for a smarter, more
        connected world. We're not just about technology; we're about empowering
        individuals to make a tangible impact through innovation, growth, and
        continuous learning.
      </p>
      <p data-option="up" className="animate animate-hidden">
        We're a global IT leader committed to helping clients, partners, and
        employees navigate the digital landscape with cutting-edge services in
        AI/ML integration, cloud solutions, data analytics, and more. Joining
        Qcentrio means being part of a dynamic team that's at the forefront of
        technology, working on projects that redefine industries and enhance
        customer experiences.
      </p>
      <Path8 />
    </div>
  );
}

function CareersCommunity() {
  return (
    <div className="careers-community balance-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-green">
        OUR CULTURE: A COMMUNITY OF INNOVATORS
      </h2>
      <p
        data-option="up"
        className="careers-community-subheading animate animate-hidden">
        We believe in the power of diversity and collaboration. Our culture is
        built on the principles of:
      </p>
      <div className="success-path-category-container">
        <Card
          image={settings}
          title="Empowerment"
          content="Take ownership of your work and drive innovation."
        />
        <Card
          image={strategy}
          title="Progress"
          content="Engage in projects that deliver meaningful change."
        />
        <Card
          image={support}
          title="Growth"
          content="Expand your horizons and reach new heights in your career."
        />
        <Card
          image={cloud}
          title="Equality"
          content="Work in a diverse environment with equal opportunities."
        />
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="careers-benefits">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-white">
        Benefits: Your Well-being is Our Priority
      </h2>
      <p
        data-option="up"
        className="careers-benefits-subheading animate animate-hidden">
        We prioritize the well-being and satisfaction of our employees with a
        comprehensive benefits package that includes:
      </p>
      <div className="career-benefit-list">
        <div data-option="up" className="carrer-benefit animate animate-hidden">
          <div className="carrer-benefit-icon">
            <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
            <lord-icon
              src="https://cdn.lordicon.com/abvvebgo.json"
              trigger="loop"
              delay="1500"
              colors="primary:#079766"
              style={{ width: "3.33vw", height: "3.33vw" }}></lord-icon>
          </div>
          <h2>
            Competitive <br /> Salaries
          </h2>
          <p>Rewarding your hard work and contributions.</p>
        </div>
        <div data-option="up" className="carrer-benefit animate animate-hidden">
          <div className="carrer-benefit-icon">
            <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
            <lord-icon
              src="https://cdn.lordicon.com/spukaklw.json"
              trigger="loop"
              delay="1500"
              colors="primary:#079766"
              style={{ width: "3.33vw", height: "3.33vw" }}></lord-icon>
          </div>
          <h2>Health and Wellness Programs</h2>
          <p>Ensuring your physical and mental well-being.</p>
        </div>
        <div data-option="up" className="carrer-benefit animate animate-hidden">
          <div className="carrer-benefit-icon">
            <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
            <lord-icon
              src="https://cdn.lordicon.com/ivugxnop.json"
              trigger="loop"
              delay="1500"
              colors="primary:#079766"
              style={{ width: "3.33vw", height: "3.33vw" }}></lord-icon>
          </div>
          <h2>
            Professional <br /> Development
          </h2>
          <p>Opportunities for continuous learning and advancement.</p>
        </div>
        <div data-option="up" className="carrer-benefit animate animate-hidden">
          <div className="carrer-benefit-icon">
            <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
            <lord-icon
              src="https://cdn.lordicon.com/ppyvfomi.json"
              trigger="loop"
              delay="1500"
              colors="primary:#079766"
              style={{ width: "3.33vw", height: "3.33vw" }}></lord-icon>
          </div>
          <h2>
            Work-Life <br /> Balance
          </h2>
          <p>Flexible work arrangements to suit your lifestyle.</p>
        </div>
        <div data-option="up" className="carrer-benefit animate animate-hidden">
          <div className="carrer-benefit-icon">
            <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
            <lord-icon
              src="https://cdn.lordicon.com/zyzoecaw.json"
              trigger="loop"
              delay="1500"
              colors="primary:#079766"
              style={{ width: "3.33vw", height: "3.33vw" }}></lord-icon>
          </div>
          <h2>
            Continuous <br /> Learning
          </h2>
          <p>Sharpen Your Skills with Qcentrio Academy</p>
        </div>
      </div>
    </div>
  );
}

function CareerShowcase() {
  return (
    <div className="career-showcase-section balance-section">
      <p data-option="up" className="animate animate-hidden">
        At Qcentrio Academy, we offer many learning opportunities to help you
        stay ahead in the ever-evolving tech landscape. Our programs include:
      </p>
      <div className="showcase-list">
        <div
          data-option="up"
          className="career-showcase-card animate animate-hidden">
          <Image src={showcase1} alt="" />
          <h2>Customized Upskilling</h2>
          <p>Tailored to your career goals and the latest market trends.</p>
        </div>
        <div
          data-option="up"
          className="career-showcase-card animate animate-hidden">
          <Image src={showcase2} alt="" />
          <h2>Hands-on Training</h2>
          <p>Practical experience in cutting-edge technologies.</p>
        </div>
        <div
          data-option="up"
          className="career-showcase-card animate animate-hidden">
          <Image src={showcase3} alt="" />
          <h2>Leadership Development</h2>
          <p>Courses designed to nurture the next generation of leaders.</p>
        </div>
      </div>
    </div>
  );
}

function CareerContact() {
  return (
    <div id="start-your-journey" className="careers-contact-section">
      <h2
        data-option="strip-slide-up"
        className="animate strip-slide-up strip-slide-black">
        Ready to take the next step in your career?
      </h2>
      <h3 data-option="up" className="animate animate-hidden">
        Join Qcentrio and be part of our journey towards a brighter, more
        connected future.
      </h3>
      <div className="careers-contact-button">
        <Link href="/contact-us">
          <Button name="Contact Us" />
        </Link>
      </div>
    </div>
  );
}
