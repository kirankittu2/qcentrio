"use client";

import { useEffect, useState } from "react";
import SubOfferings from "../home-page/sub-offerings";
import Image from "next/image";
import float from "@/public/float.svg";
import arrow from "@/public/discover-arrow.svg";

export default function AccordianOfferings({ data }) {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  function changeCursor() {
    document.querySelector(".cursor").classList.add("hovered");
  }
  function defaultCursor() {
    document.querySelector(".cursor").classList.remove("hovered");
  }

  function handleHover(i, event) {
    let hovered = false;

    if (i !== index) {
      hovered == false;
    }

    if (!hovered && i !== index) {
      console.log(previousIndex);
      setPreviousIndex(index);
      setIndex(i);
      hovered = true;
    }
  }

  useEffect(() => {
    const content = document.querySelectorAll(
      ".accordian-offering-content-hidden"
    );
    content.forEach((item) => {
      if (item.classList.contains("slideup")) {
        item.classList.remove("slideup");
      }
    });

    const subOfferings = document.querySelectorAll(".service-sub-offerings");
    subOfferings.forEach((item) => {
      if (item.classList.contains("slideup")) {
        item.classList.remove("slideup");
      }
    });

    const headings = document.querySelectorAll(
      ".accordian-offering-title-hidden"
    );
    headings.forEach((item) => {
      item.classList.add("animate", "strip-slide-up", "strip-slide-white");
    });
  }, [index]);

  return (
    <div className="accordian-offerings-section section">
      <div className="accordian-offerings-container">
        {data.list.map((item, i) => {
          return (
            <div
              key={i}
              className={`accordian-offering  ${
                index == i ? "accordian-offering-active" : ""
              } `}
              style={{
                backgroundImage: `${
                  index === i
                    ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${item.image})`
                    : ""
                }`,
              }}
              onMouseOver={(event) => handleHover(i, event)}
              onMouseEnter={changeCursor}
              onMouseLeave={defaultCursor}>
              <div>
                <div className="accordian-offering-head">
                  <div className="accordian-offering-icon">
                    <div>
                      <Image fill src={item.icon} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="accordian-offering-number">{item.num}</p>
                  </div>
                </div>
                <h2 className="accordian-offering-title">{item.heading}</h2>
                <div>
                  <h2
                    data-option="strip-slide-up"
                    className="accordian-offering-title-hidden">
                    {item.heading}
                  </h2>
                  <p
                    data-option="up"
                    className="accordian-offering-content-hidden animate animate-hidden">
                    {item.content}
                  </p>
                  <SubOfferings data={item} />
                </div>
              </div>
              <div className="accordian-offering-divider"></div>
              <div className="accordian-offering-open-icon">
                <div>
                  <Image fill src={item.icon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="need-something-block">
        <div>
          <div className="need-something-block-title-wrapper">
            <h2 className="need-something-block-title">
              Need Something
              <span
                style={{
                  display: "block",
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  marginLeft: "18px",
                  marginTop: "3px",
                }}>
                <Image fill src={arrow} alt="" />
              </span>
            </h2>
          </div>
          <Image src={float} alt="" />
        </div>
      </div>
    </div>
  );
}
