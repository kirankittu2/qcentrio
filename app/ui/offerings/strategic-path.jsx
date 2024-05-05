"use client";

import Image from "next/image";
import down from "@/public/down-tri.svg";
import check from "@/public/hexagon-check.svg";
import { useEffect, useState } from "react";

export default function StrategicPath({ data }) {
  const [index, setIndex] = useState(1);

  function handleToggle(event) {
    setIndex(event.target.getAttribute("data-index"));
  }

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observeElements = (selector, className) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      }, options);
      elements.forEach((el) => observer.observe(el));
    };

    observeElements(".accordation", "slideup");
  }, [index]);

  return (
    <div className="strategic-path-section balance-section">
      <div className="strategic-path-content">
        <h2 className="strategic-path-sub-heading">{data.upperheading}</h2>
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-white">
          {data.heading}
        </h2>
      </div>
      <div className="accordation-container">
        <div className="accordation-column">
          {data.accordation1.map((item) => {
            return (
              <div
                data-option="up"
                key={item.index}
                className={`accordation animate animate-hidden   ${
                  index == item.index ? "active" : ""
                }`}>
                <div
                  className="accordation-title"
                  data-index={item.index}
                  onClick={handleToggle}>
                  <div className="accordian-icon-container">
                    <div>
                      <Image fill data-index={item.index} src={check} alt="" />
                    </div>
                  </div>
                  <div data-index={item.index} className="accordation-heading">
                    {item.title}
                  </div>
                  <div className="accordation-arrow-container">
                    <Image
                      data-index={item.index}
                      className="accordation-arrow"
                      fill
                      src={down}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={`section-content accordation-content ${
                    index == item.index
                      ? "accordation-active"
                      : "accordation-inactive"
                  }`}>
                  <div>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="accordation-column">
          {data.accordation2.map((item) => {
            return (
              <div
                data-option="up"
                key={item.index}
                className={`accordation animate animate-hidden  ${
                  index == item.index ? "active" : ""
                }`}>
                <div data-index={item.index} onClick={handleToggle}>
                  <div className="accordian-icon-container">
                    <div>
                      <Image fill data-index={item.index} src={check} alt="" />
                    </div>
                  </div>
                  <div data-index={item.index} className="accordation-heading">
                    {item.title}
                  </div>
                  <div className="accordation-arrow-container">
                    <Image
                      data-index={item.index}
                      className="accordation-arrow"
                      fill
                      src={down}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={`section-content accordation-content ${
                    index == item.index
                      ? "accordation-active"
                      : "accordation-inactive"
                  }`}>
                  <div>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
