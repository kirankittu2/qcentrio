import Image from "next/image";
import zf from "@/public/ZF-logo.svg";
import bosch from "@/public/logos/bosch.svg";
import philadelphia from "@/public/logos/children-hospital-of-philadelphia.svg";
import cvs from "@/public/logos/cvs.svg";
import reddy from "@/public/logos/dr_reddy.svg";
import hertx from "@/public/logos/hertx.svg";
import mount from "@/public/logos/mount-sinai-hospital.svg";
import praxair from "@/public/logos/praxair.svg";
import schneider from "@/public/logos/schneider.svg";
import sutherland from "@/public/logos/sutherland.svg";
import texas from "@/public/logos/texas-children-hospital.svg";
import linde from "@/public/logos/the-linde-group.svg";
import uber from "@/public/logos/uber.svg";
import walt from "@/public/logos/walt-disney.svg";

export default function CompanyList() {
  return (
    <div
      id="about"
      data-option="up"
      className="company-list-section animate animate-hidden">
      <div className="horizontal-scroll">
        <div className="company-list-image-container">
          <Image src={philadelphia} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={zf} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={hertx} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={bosch} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={praxair} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={cvs} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={reddy} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={mount} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={schneider} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={sutherland} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={texas} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={linde} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={uber} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={walt} alt="" />
        </div>

        <div className="company-list-image-container">
          <Image src={philadelphia} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={zf} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={hertx} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={bosch} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={praxair} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={cvs} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={reddy} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={mount} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={schneider} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={sutherland} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={texas} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={linde} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={uber} alt="" />
        </div>
        <div className="company-list-image-container">
          <Image src={walt} alt="" />
        </div>
      </div>
    </div>
  );
}
