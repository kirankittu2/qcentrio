import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Image from "next/image";
import banner from "@/public/careers-hero-banner.png";
import showcase1 from "@/public/career-showcase-1.png";
import showcase2 from "@/public/career-showcase-2.png";
import showcase3 from "@/public/career-showcase-3.png";
import Card from "@/app/ui/global/card";
import Pagination from "@/app/ui/blogs/pagination";
import Link from "next/link";
import Button from "@/app/ui/global/button";
import Path8 from "@/app/ui/global/path-8";
import settings from "@/public/settings.svg";
import strategy from "@/public/strategy.svg";
import support from "@/public/support.svg";
import cloud from "@/public/cloud.svg";
import arrow from "@/public/white-redirect-arrow.svg";
import Script from "next/script";
import { Suspense } from "react";

export const metadata = {
  title:
    "Join the Exciting World of Qcentrio: Careers, Jobs & Life at Our Company",
  description:
    "Discover exciting careers and a fulfilling life at Qcentrio, the global IT leader in AI, cloud solutions, and innovation. Explore our job opportunities and join our team today!",
};

export default function Careers() {
  return (
    <div className="careers">
      <div className="hero">
        <NavBarContainer />
      </div>
      <CareersHero />
      <CareersWhyQcentrio />
      <CareersCommunity />
      <Jobs />
      <Benefits />
      <CareerShowcase />
      <CareerContact />
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

function Jobs() {
  return (
    <div id="jobs" className="jobs-section">
      <div>
        <div className="jobs-content">
          <h2
            data-option="strip-slide-up"
            className="jobs-content-heading animate strip-slide-up strip-slide-black">
            Join Us: Be Part of Something Bigger
          </h2>
          <p data-option="up" className="animate animate-hidden">
            If you're passionate about technology and eager to make a
            difference, we'd love to hear from you. Explore our current openings
            and discover how you can contribute to the exciting world of IT
            innovation at Qcentrio.
          </p>
          <p data-option="up" className="hr-mail animate animate-hidden">
            hr@qcentrio.com
          </p>
        </div>
        <div className="jobs-main">
          <div data-option="up" className="job animate animate-hidden">
            <div>
              <p className="job-location">
                Location : Bangalore ( Remote / On-site )
              </p>
              <div className="job-experience">3 - 5 years Experience</div>
              <div className="job-title">PHP Developer - Symfony/MySQL</div>
            </div>
            <div className="job-link-column">
              <Link href="/careers/php-developer">
                <div className="job-link">
                  <Image src={arrow} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div data-option="up" className="job animate animate-hidden">
            <div>
              <p className="job-location">
                Location : Bangalore ( Remote / On-site )
              </p>
              <div className="job-experience">7 - 11 years Experience</div>
              <div className="job-title"> Hyperion Developer</div>
            </div>
            <div className="job-link-column">
              <Link href="/careers/hyperion-developer">
                <div className="job-link">
                  <Image src={arrow} alt="" />
                </div>
              </Link>
            </div>
          </div>

          <div data-option="up" className="job animate animate-hidden">
            <div>
              <p className="job-location">
                Location : Bangalore ( Remote / On-site )
              </p>
              <div className="job-experience">5 - 10 years Experience</div>
              <div className="job-title"> SAP CPI Consultant</div>
            </div>
            <div className="job-link-column">
              <Link href="/careers/sap-cpi-consultant">
                <div className="job-link">
                  <Image src={arrow} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Suspense>
        <Pagination paginationNum="4" page="0" />
      </Suspense>
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
              style={{ width: "64px", height: "64px" }}></lord-icon>
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
              style={{ width: "64px", height: "64px" }}></lord-icon>
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
              style={{ width: "64px", height: "64px" }}></lord-icon>
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
              style={{ width: "64px", height: "64px" }}></lord-icon>
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
              style={{ width: "64px", height: "64px" }}></lord-icon>
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
      <p data-option="up" className="animate animate-hidden">
        Get in touch with us at <Link href="">hr@qcentrio.com</Link>
      </p>
    </div>
  );
}
