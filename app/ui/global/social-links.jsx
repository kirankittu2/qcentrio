import Image from "next/image";
import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <Link
        data-option="left"
        className="w-fit hidden-left animate"
        href="https://www.facebook.com/Qcentrio/">
        <Image src={facebook} alt="" />
      </Link>
      <Link
        data-option="left"
        className="w-fit hidden-left animate"
        href="https://twitter.com/Qcentrio/">
        <Image src={twitter} alt="" />
      </Link>
      <Link
        data-option="left"
        className="w-fit hidden-left animate"
        href="https://www.linkedin.com/company/14437453">
        <Image src={linkedin} alt="" />
      </Link>
    </div>
  );
}
