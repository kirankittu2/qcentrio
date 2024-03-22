import group from "@/public/why-group.svg";
import x from "@/public/x.svg";
import cloud from "@/public/cloud.svg";
import settings from "@/public/settings.svg";
import Image from "next/image";

export default function WhyQcentrio() {
  return (
    <div className="balance-section why-qcentrio-section">
      <h2 className="section-heading">Why Choose Qcentrio?</h2>
      <div className="why-qcentrio-card-container">
        <div className="why-qcentrio-card">
          <Image src={group} alt="" />
          <h2 className="why-qcentrio-heading">People-First Approach</h2>
          <p className="section-content">
            We prioritize talent development and maintain high employee
            retention rates.
          </p>
        </div>
        <div className="why-qcentrio-card">
          <Image src={x} alt="" />
          <h2 className="why-qcentrio-heading">Client-Centric Focus</h2>
          <p className="section-content">
            Our 100% referenceability rate reflects our commitment to quality
            and client trust.
          </p>
        </div>
        <div className="why-qcentrio-card">
          <Image src={cloud} alt="" />
          <h2 className="why-qcentrio-heading">Strategic Innovation</h2>
          <p className="section-content">
            We lead enterprises through digital transformation with strategic
            foresight and expertise.
          </p>
        </div>
        <div className="why-qcentrio-card">
          <Image src={settings} alt="" />
          <h2 className="why-qcentrio-heading">Diverse Expertise</h2>
          <p className="section-content">
            Our team excels in managing complex projects and delivering
            sophisticated technology-based solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
