import Image from "next/image";
import Button from "../global/button";
import idea from "@/public/idea.svg";
import group from "@/public/group.svg";
import check from "@/public/check-mark.svg";
import Path1 from "../global/path-1";
import Link from "next/link";

export default function About() {
  return (
    <div className="about-section section ">
      <div>
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          Navigating Digital Excellence with AI, Cloud Solutions, and Strategic
          Innovation
        </h2>

        <p data-option="up" className="section-content animate animate-hidden">
          Qcentrio is one of the leaders in developing new technologies in the
          IT industry—artificial intelligence and machine learning, advanced
          cloud solutions, and strategic advisory services. Our collective
          objective toward unending innovation propels our mission to convey
          avant-garde, pragmatic solutions that do more than satisfy and often
          exceed our clients' needs. At the heart of our operations is a
          people-first approach, which forms the bedrock of our corporate
          identity. This approach reinstates solemnness in tailor-making
          transformation strategies that are well-resonated with your business
          objectives. This means you can, for sure, be guaranteed that they can
          assess digital maturity critically or the ability to develop a
          strategic roadmap.
        </p>
        <p data-option="up" className="section-content animate animate-hidden">
          Thus, these roadmaps empower global brands to expand their horizons,
          innovate, and personalize the customer experience while complying with
          strict regulatory compliance standards.
        </p>
      </div>
      <div>
        <p
          data-option="up"
          className="highlight-content animate animate-hidden">
          In a changing world with the initiatives of digitization, Qcentrio is
          your partner on the way to the{" "}
          <span>
            digital zenith through AI, cloud technologies, and inventive
            solutions strategically.
          </span>
        </p>
        <div
          data-option="up"
          className="about-section-heading-background animate animate-hidden">
          <h3 className="sub-heading ">
            Recognized as a leader in the global marketplace
          </h3>
        </div>
        <p data-option="up" className="section-content animate animate-hidden">
          Qcentrio doesn't just respond to the digital era; we actively shape
          it, ensuring that our partners are market participants and leaders.
        </p>
        {/* <div className="about-showcase-container">
          <div data-option="right" className="showcase hidden-right animate">
            <Image src={idea} alt="" />
            <h3 className="showcase-heading">~1000</h3>
            <p className="showcase-content">Skilled Professionals</p>
          </div>
          <div data-option="right" className="showcase hidden-right animate">
            <Image src={group} alt="" />
            <h3 className="showcase-heading">80%</h3>
            <p className="showcase-content">Employee Trust Index Score</p>
          </div>
          <div data-option="right" className="showcase hidden-right animate">
            <Image src={check} alt="" />
            <h3 className="showcase-heading">2015</h3>
            <p className="showcase-content">Founded in 2015</p>
          </div>
        </div> */}
        <Link href="/about-us">
          <Button name="About Us" />
        </Link>
      </div>
      {/* <Path1 /> */}
    </div>
  );
}
