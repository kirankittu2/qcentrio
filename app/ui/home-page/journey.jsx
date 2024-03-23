"use client";

import Image from "next/image";
import journeyleft from "@/public/journey-left.svg";
import journeyright from "@/public/journey-right.svg";
import journey2 from "@/public/journey-2.png";
import hexagoncheck from "@/public/hexagon-check.svg";
import Button from "../global/button";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Journey() {
  const item = useRef(null);
  const wrapper = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let translateValue = -index * (item.current.offsetWidth + 20) + "px";
    wrapper.current.style.transform = `translateX(${translateValue})`;
  }, [index]);

  function handleRight() {
    if (index < wrapper.current.children.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleLeft() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="journey-section">
      <div className="journey-heading-section">
        <h2 className="section-heading">Real-life Journey of Success</h2>
        <div className="jouney-carousel-nav">
          <div className="left" onClick={handleLeft}>
            <Image src={journeyleft} alt="" />
          </div>
          <div className="right" onClick={handleRight}>
            <Image src={journeyright} alt="" />
          </div>
        </div>
      </div>
      <div className="journey-carousel-section">
        <div className="journey-carousel-container">
          <div ref={wrapper} className="journey-carousel-wrapper">
            <div className="journey-carousel-item">
              <div ref={item}>
                <div className="journey-carousel-image">
                  <Image src={journey2} alt="" />
                </div>
                <div className="journey-carousel-content-container">
                  <h2 className="journey-carousel-title">SUCCESS STORY</h2>
                  <h3 className="journey-carousel-heading">
                    ENHANCING PATIENT CARE WITH BI AND SQL ANALYTICS
                  </h3>
                  <div className="journey-carousel-content">
                    <div>
                      <div className="journey-carousel-content-check-mark">
                        <div>
                          <Image src={hexagoncheck} alt="" />
                        </div>
                      </div>
                      <div className="section-content">
                        The client is a US-based business that offers software
                        to help 200 healthcare centers and retirement homes
                        process data related to patients and medication and
                        build various types of reports.
                      </div>
                    </div>
                    <div>
                      <div className="journey-carousel-content-check-mark">
                        <div>
                          <Image src={hexagoncheck} alt="" />
                        </div>
                      </div>
                      <div className="section-content">
                        With the streamlined company data processing and
                        improved accuracy of reporting that Qcentrio provided,
                        actionable insights were offered in patient care and
                        operational efficiency across the health network
                        improvement.
                      </div>
                    </div>
                  </div>
                  <Link href="/case-study/enhancing-patient-care-with-bi-and-sql-analytics">
                    <Button name="Read More" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="journey-carousel-item">
              <div ref={item}>
                <div className="journey-carousel-image">
                  <Image src={journey2} alt="" />
                </div>
                <div className="journey-carousel-content-container">
                  <h2 className="journey-carousel-title">SUCCESS STORY</h2>
                  <h3 className="journey-carousel-heading">
                    ENHANCING PATIENT CARE WITH BI AND SQL ANALYTICS
                  </h3>
                  <div className="journey-carousel-content">
                    <div>
                      <div className="journey-carousel-content-check-mark">
                        <div>
                          <Image src={hexagoncheck} alt="" />
                        </div>
                      </div>
                      <div className="section-content">
                        The client is a US-based business that offers software
                        to help 200 healthcare centers and retirement homes
                        process data related to patients and medication and
                        build various types of reports.
                      </div>
                    </div>
                    <div>
                      <div className="journey-carousel-content-check-mark">
                        <div>
                          <Image src={hexagoncheck} alt="" />
                        </div>
                      </div>
                      <div className="section-content">
                        With the streamlined company data processing and
                        improved accuracy of reporting that Qcentrio provided,
                        actionable insights were offered in patient care and
                        operational efficiency across the health network
                        improvement.
                      </div>
                    </div>
                  </div>
                  <Link href="/case-study/transforming-pharmaceutical-major-sharepoint-ecosystem-with-azure-migration">
                    <Button name="Read More" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
