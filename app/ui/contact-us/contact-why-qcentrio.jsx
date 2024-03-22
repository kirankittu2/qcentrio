import Image from "next/image";
import idea from "@/public/idea.svg";
import group from "@/public/group.svg";
import check from "@/public/check-mark.svg";
import Path3 from "../global/path-3";

export default function ContactWhyQcentrio() {
  return (
    <div className="about-section balance-section">
      <div className="contact-us-column-1">
        <h2 className="section-heading">Why Qcentrio</h2>
        <p className="section-content">
          Qcentrio is a global IT advisory and software development company that
          caters to mid to large enterprises worldwide. With over 25 years of
          experience, we prioritize strategic development, client-focused
          results, and processes that amplify ROI growth. Our management team,
          with a rich history in IT, values customer satisfaction and has been
          recognized for taking on significant IT offshore projects. We uphold a
          philosophy of creativity, next-gen solutions, and digital innovation.
        </p>
        <p className="section-content">
          Qcentrio has a strong presence in the retail, construction, and IT
          sectors, emphasizing expertise, teamwork, and customer satisfaction.
        </p>
      </div>
      <div className="contact-us-column-2">
        <h3 className="section-heading">
          Driving Coherent Success through Business, Tech, and Industry
          Expertise
        </h3>
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
      </div>
      <Path3 />
    </div>
  );
}
