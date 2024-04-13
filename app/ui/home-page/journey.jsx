"use client";

import Image from "next/image";
import journeyleft from "@/public/journey-left.svg";
import journeyright from "@/public/journey-right.svg";
import journey2 from "@/public/journey-2.png";
import hexagoncheck from "@/public/hexagon-check.svg";
import Button from "../global/button";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getAllCaseStudies } from "@/app/lib/data";

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

  const studies = getAllCaseStudies();

  return (
    <div className="journey-section">
      <div className="journey-heading-section">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          Real-life Journey of Success
        </h2>
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
        <div
          data-option="up"
          className="journey-carousel-container animate-hidden animate">
          <div ref={wrapper} className="journey-carousel-wrapper ">
            {studies.map((study, index) => {
              return (
                <div key={index} className="journey-carousel-item">
                  <div ref={item}>
                    <div className="journey-carousel-image">
                      <Image
                        width={536}
                        height={591}
                        src={study.image}
                        alt=""
                      />
                    </div>
                    <div className="journey-carousel-content-container">
                      <h2 className="journey-carousel-title">SUCCESS STORY</h2>
                      <h3 className="journey-carousel-heading">
                        {study.title}
                      </h3>
                      <div className="journey-carousel-content">
                        <div>
                          <div className="journey-carousel-content-check-mark">
                            <div>
                              <Image src={hexagoncheck} alt="" />
                            </div>
                          </div>
                          <div className="section-content">
                            {study.content1}
                          </div>
                        </div>
                        <div>
                          <div className="journey-carousel-content-check-mark">
                            <div>
                              <Image src={hexagoncheck} alt="" />
                            </div>
                          </div>
                          <div className="section-content">
                            {study.content2}
                          </div>
                        </div>
                      </div>
                      <Link href={study.link}>
                        <Button name="Read More" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
