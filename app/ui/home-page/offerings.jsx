"use client";

import arrow from "@/public/discover-arrow.svg";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Path6 from "../global/path-6";
import SubOfferings from "./sub-offerings";
import Path7 from "../global/path-7";

export default function Offerings({ data }) {
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
        <h2 className="section-small-heading">Our Offerings</h2>
        <h3
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          Leading-Edge Services for Future-Ready Enterprises
        </h3>
        <div
          data-option="up"
          className="need-something-card animate-hidden animate">
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
          <Path7 />
        </div>
      </div>
      <div className="service-offerings-section-col-3">
        {data.list.map((item, i) => {
          return (
            <div
              data-option="up"
              key={i}
              className={`service-offerings-toggle-head animate-hidden ${
                index == i ? "active" : ""
              }`}>
              <div
                className={`service-offerings-image ${
                  index == i ? "active" : ""
                }`}>
                <div>
                  <Image
                    className={`service-offerings-image-ani`}
                    fill
                    src={data.images[i]}
                    alt=""
                  />
                </div>
              </div>
              <div className="service-offerings-toggle-num">
                <p>{item.num}</p>
              </div>
              <div>
                <Link onMouseOver={() => setIndex(i)} href={item.link}>
                  <h2>{item.heading}</h2>
                </Link>
                <div className="service-offerings-toggle-content">
                  <p>{item.content}</p>
                  <SubOfferings data={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Path6 />
    </div>
  );
}
