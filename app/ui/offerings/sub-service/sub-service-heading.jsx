"use client";

import { useEffect, useRef } from "react";
import Button from "../../global/button";
import image from "@/public/sample.png";
import Image from "next/image";

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
      <div className="">
        <h1 className="sub-service-hero-heading">{data.heading1}</h1>
        <h2 className="sub-service-hero-sub-heading">{data.heading2}</h2>
        <p className="sub-service-hero-content">
          At Qcentrio, our business optimization and analytics services enhance
          your operations by reviewing and improving processes, instilling best
          practices, and providing a clear roadmap for optimized processes.
        </p>
        <Button name="Get Started" />
      </div>
      <div ref={banner}>
        <Image src={bannerImage ? bannerImage : ""} alt="" />
      </div>
    </div>
  );
}
