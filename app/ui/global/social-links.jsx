import Image from "next/image";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import linkedin from "@/public/linkedin.svg";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <Image src={facebook} alt="" />
      <Image src={instagram} alt="" />
      <Image src={youtube} alt="" />
      <Image src={linkedin} alt="" />
    </div>
  );
}
