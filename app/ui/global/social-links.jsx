"use client";

import Image from "next/image";
import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SocialLinks() {
  const pathName = usePathname();
  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        "qcentrio.com" + pathName
      )}`,
      "_blank"
    );
  }

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        "qcentrio.com" + pathName
      )}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        "qcentrio.com" + pathName
      )}`,
      "_blank"
    );
  };

  return (
    <div data-option="up" className="social-links animate animate-hidden">
      <div>
        <Image fill src={facebook} onClick={shareFacebook} alt="" />
      </div>
      <div>
        <Image fill src={twitter} onClick={shareTwitter} alt="" />
      </div>
      <div>
        <Image fill src={linkedin} onClick={shareLinkedIn} alt="" />
      </div>
    </div>
  );
}
