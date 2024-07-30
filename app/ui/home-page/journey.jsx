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

export default function Journey({ studiesServer }) {
  const item = useRef(null);
  const wrapper = useRef(null);
  const container = useRef(null);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const allStudies = JSON.parse(studiesServer);
  const allStudiesContent = JSON.parse(allStudies[0].content);

  useEffect(() => {
    let translateValue = -index * (item.current.offsetWidth + 20) + "px";
    wrapper.current.style.transform = `translateX(${translateValue})`;
  }, [index]);

  useEffect(() => {
    const handleResize = () => {
      if (container.current) {
        setWidth(container.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  useEffect(() => {
    if (hovered == false) {
      const items = wrapper.current.querySelectorAll(".journey-carousel-item");
      const intervalId = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [hovered]);

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
          <div
            className="left"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleLeft}>
            <Image fill src={journeyleft} alt="" />
          </div>
          <div
            className="right"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleRight}>
            <Image fill src={journeyright} alt="" />
          </div>
        </div>
      </div>
      <div ref={container} className="journey-carousel-section">
        <div
          data-option="up"
          className="journey-carousel-container animate-hidden animate">
          <div ref={wrapper} className="journey-carousel-wrapper ">
            {allStudies.map((study, index) => {
              return (
                <div
                  onMouseOver={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  key={index}
                  className="journey-carousel-item">
                  <div style={{ width: width + "px" }} ref={item}>
                    <div className="journey-carousel-image">
                      <Image
                        width={536}
                        height={591}
                        src={JSON.parse(study.content)["carousel-image"]}
                        alt=""
                      />
                    </div>
                    <div className="journey-carousel-content-container">
                      <h2 className="journey-carousel-title">SUCCESS STORY</h2>
                      <h3 className="journey-carousel-heading">{study.name}</h3>
                      <div className="journey-carousel-content">
                        <div>
                          <div className="journey-carousel-content-check-mark">
                            <div>
                              <Image src={hexagoncheck} alt="" />
                            </div>
                          </div>
                          <div className="section-content">
                            {JSON.parse(study.content)["sub-heading-1"]}
                          </div>
                        </div>
                        <div>
                          <div className="journey-carousel-content-check-mark">
                            <div>
                              <Image src={hexagoncheck} alt="" />
                            </div>
                          </div>
                          <div className="section-content">
                            {JSON.parse(study.content)["sub-heading-2"]}
                          </div>
                        </div>
                      </div>
                      <Link href={`/case-study/${study.slug}`}>
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
