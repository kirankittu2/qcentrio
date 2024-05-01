import group from "@/public/why-group.svg";
import x from "@/public/x.svg";
import cloud from "@/public/cloud.svg";
import settings from "@/public/settings.svg";
import Image from "next/image";

export default function WhyQcentrio() {
  return (
    <div className="balance-section why-qcentrio-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-white">
        Why Choose Qcentrio?
      </h2>
      <div className="why-qcentrio-card-container">
        <div
          data-option="up"
          className="why-qcentrio-card animate-hidden animate">
          <div className="why-qcentrio-card-icon">
            <Image fill src={group} alt="" />
          </div>
          <h2 className="why-qcentrio-heading">People-First Approach</h2>
          <p className="section-content">
            We prioritize talent development and maintain high employee
            retention rates.
          </p>
        </div>
        <div
          data-option="up"
          className="why-qcentrio-card animate-hidden animate">
          <div className="why-qcentrio-card-icon">
            <Image fill src={x} alt="" />
          </div>
          <h2 className="why-qcentrio-heading">Client-Centric Focus</h2>
          <p className="section-content">
            Our 100% referenceability rate reflects our commitment to quality
            and client trust.
          </p>
        </div>
        <div
          data-option="up"
          className="why-qcentrio-card animate-hidden animate">
          <div className="why-qcentrio-card-icon">
            <Image fill src={cloud} alt="" />
          </div>
          <h2 className="why-qcentrio-heading">Strategic Innovation</h2>
          <p className="section-content">
            We lead enterprises through digital transformation with strategic
            foresight and expertise.
          </p>
        </div>
        <div
          data-option="up"
          className="why-qcentrio-card animate-hidden animate">
          <div className="why-qcentrio-card-icon">
            <Image fill src={settings} alt="" />
          </div>
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
