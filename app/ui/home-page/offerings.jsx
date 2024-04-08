"use client";

import arrow from "@/public/discover-arrow.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Path6 from "../global/path-6";
import SubOfferings from "./sub-offerings";

export default function Offerings({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="service-offerings-section">
      <div className="service-offerings-section-col-1">
        <h2 className="section-small-heading">Our Offerings</h2>
        <h3 className="section-heading">
          Leading-Edge Services for Future-Ready Enterprises
        </h3>
        <div className="need-something-card">
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
        </div>
        {/* <Path7 /> */}
      </div>
      <div className="service-offerings-section-col-2">
        <div className="service-offerings-section-middle-image">
          <Image fill src={data.images[index]} alt="" />
        </div>
      </div>
      <div className="service-offerings-section-col-3">
        {data.list.map((item, i) => {
          return (
            <div
              key={i}
              onMouseOver={() => setIndex(i)}
              className={`service-offerings-toggle-head ${
                index == i ? "active" : ""
              }`}>
              <div className="service-offerings-toggle-num">
                <p>{item.num}</p>
              </div>
              <div>
                <Link href={item.link}>
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
