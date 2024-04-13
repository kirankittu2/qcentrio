"use client";

import arrow from "@/public/discover-arrow.svg";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Path6 from "../../global/path-6";
import Path7 from "../../global/path-7";
import float from "@/public/float.svg";
import Script from "next/script";

export default function SubServiceOfferings({ data }) {
  const [index, setIndex] = useState(0);

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

    observeElements(".service-offerings-toggle-head", "slideup");
  }, [index]);

  return (
    <div className="service-offerings-section">
      <div className="service-offerings-section-col-1">
        <h2 className="section-small-heading ">Our Offerings</h2>
        <h3
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          {data.mainHeading}
        </h3>
        <div
          data-option="up"
          className="need-something-card animate-hidden animate">
          <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
          <lord-icon
            src="https://cdn.lordicon.com/jxyemgzp.json"
            trigger="loop"
            delay="1500"
            stroke="bold"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: "64px", height: "64px" }}></lord-icon>
          <h2 className="sub-heading">Need Something Else?</h2>
          <p>Contact us and we can figure out how to adapt to your needs</p>
          <Link className="w-fit" href="/contact-us">
            <div className="need-something-btn">
              Contact Us
              <span>
                <Image src={arrow} alt="" />
              </span>
            </div>
          </Link>
          {/* <Path7 /> */}
        </div>
      </div>
      <div className="service-offerings-section-col-2">
        <div className="service-offerings-section-middle-image">
          <Image fill src={data.images[index]} alt="" />
        </div>
      </div>
      <div className="service-offerings-section-col-3 ">
        {data.list.map((item, i) => {
          return (
            <div
              data-option="up"
              key={i}
              onClick={() => setIndex(i)}
              className={`service-offerings-toggle-head animate-hidden ${
                index == i ? "active" : ""
              }`}>
              <div className="service-offerings-toggle-num">
                <p>{item.num}</p>
              </div>
              <div>
                <h2>{item.heading}</h2>
                <p className="service-offerings-toggle-content">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Path6 />
    </div>
  );
}
