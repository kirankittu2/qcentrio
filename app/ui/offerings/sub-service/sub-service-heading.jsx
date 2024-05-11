"use client";

import { useEffect, useRef } from "react";
import Button from "../../global/button";
import Image from "next/image";
import Link from "next/link";

export function SubServiceHeading({ data, bannerImage }) {
  const banner = useRef(null);

  useEffect(() => {
    const bannerHeight = banner.current.offsetHeight;
    const headPercentage = (96 / bannerHeight) * 100;
    const totalHeight = 100 + Number(headPercentage);
    banner.current.style.height = totalHeight + "%";
  }, []);

  return (
    <div className="sub-service-hero-section">
      <div>
        <h1
          data-option="strip-slide-up"
          className="sub-service-hero-heading animate strip-slide-up strip-slide-green">
          {data.heading1}
        </h1>
        <h2
          data-option="up"
          className="sub-service-hero-sub-heading animate animate-hidden">
          {data.heading2}
        </h2>
        <p
          data-option="up"
          className="sub-service-hero-content animate animate-hidden">
          {data.content ? data.content : ""}
        </p>
        <Link href="#get-started">
          <Button name="Get Started" />
        </Link>
      </div>
      <div ref={banner}>
        <Image src={bannerImage ? bannerImage : ""} alt="" />
      </div>
    </div>
  );
}
