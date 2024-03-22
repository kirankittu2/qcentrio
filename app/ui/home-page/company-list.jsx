import Image from "next/image";
import philadelphia from "@/public/children-hospital-philadelphia-logo.svg";
import zf from "@/public/ZF-logo.svg";
import hertz from "@/public/hertz-logo.svg";
import bosch from "@/public/Bosch-logo.svg";
import hp from "@/public/HP-logo.svg";
import praxair from "@/public/Praxair_logo.svg";
import cvs from "@/public/cvs-logo.svg";

export default function CompanyList() {
  return (
    <div className="company-list-section">
      <div className="horizontal-scroll">
        <Image src={philadelphia} alt="" />
        <Image src={zf} alt="" />
        <Image src={hertz} alt="" />
        <Image src={bosch} alt="" />
        <Image src={hp} alt="" />
        <Image src={praxair} alt="" />
        <Image src={cvs} alt="" />

        <Image src={philadelphia} alt="" />
        <Image src={zf} alt="" />
        <Image src={hertz} alt="" />
        <Image src={bosch} alt="" />
        <Image src={hp} alt="" />
        <Image src={praxair} alt="" />
        <Image src={cvs} alt="" />

        <Image src={philadelphia} alt="" />
        <Image src={zf} alt="" />
        <Image src={hertz} alt="" />
        <Image src={bosch} alt="" />
        <Image src={hp} alt="" />
        <Image src={praxair} alt="" />
        <Image src={cvs} alt="" />
      </div>
    </div>
  );
}
