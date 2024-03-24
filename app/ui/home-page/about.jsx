import Image from "next/image";
import Button from "../global/button";
import idea from "@/public/idea.svg";
import group from "@/public/group.svg";
import check from "@/public/check-mark.svg";
import Path1 from "../global/path-1";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="about-section section">
      <div>
        <h2 className="section-heading">
          Navigating Digital Excellence with AI, Cloud Solutions, and Strategic
          Innovation
        </h2>
        <p className="section-content">
          Qcentrio is one of the leaders in developing new technologies in the
          IT industry—artificial intelligence and machine learning, advanced
          cloud solutions, and strategic advisory services. Our collective
          objective toward unending innovation propels our mission to convey
          avant-garde, pragmatic solutions that do more than satisfy and often
          exceed our clients&lsquo; needs. At the heart of our operations is a
          people-first approach, which forms the bedrock of our corporate
          identity. This is the approach that reinstates solemnness in
          tailor-making transformation strategies well-resonated with your
          business objectives. This means you can, for sure, be guaranteed that
          they have the ability to assess digital maturity critically or the
          ability to develop a strategic roadmap.
        </p>
        <p className="section-content">
          Thus, these roadmaps empower global brands to not only expand their
          horizons but also innovate and personalize the customer experience in
          a manner that complies with strict regulatory compliance standards.
        </p>
        <p className="highlight-content">
          In a changing world with the initiatives of digitization, Qcentrio is
          your partner on the way to the digital zenith through AI, cloud
          technologies, and inventive solutions strategically.
        </p>
      </div>
      <div>
        <h3 className="sub-heading">
          Recognized as a leader in the global marketplace
        </h3>
        <p className="section-content">
          Qcentrio doesn&rsquo;t just respond to the digital era; we actively
          shape it, ensuring that <br /> our partners are not only market
          participants but leaders.
        </p>
        <div className="about-showcase-container">
          <div className="showcase">
            <Image src={idea} alt="" />
            <h3 className="showcase-heading">~1000</h3>
            <p className="showcase-content">Skilled Professionals</p>
          </div>
          <div className="showcase">
            <Image src={group} alt="" />
            <h3 className="showcase-heading">80%</h3>
            <p className="showcase-content">Employee Trust Index Score</p>
          </div>
          <div className="showcase">
            <Image src={check} alt="" />
            <h3 className="showcase-heading">2015</h3>
            <p className="showcase-content">Founded in 2015</p>
          </div>
        </div>
        <Link href="/about-us">
          <Button name="About Us" />
        </Link>
      </div>
      <Path1 />
    </div>
  );
}
