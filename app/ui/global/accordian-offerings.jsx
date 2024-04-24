"use client";

import { useState } from "react";
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
                backgroundImage: `${index == i ? `url(${item.image})` : ""}`,
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
                  <h2 className="accordian-offering-title-hidden">
                    {item.heading}
                  </h2>
                  <p className="accordian-offering-content-hidden">
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
              <span>
                <Image
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "23px",
                  }}
                  src={arrow}
                  alt=""
                />
              </span>
            </h2>
          </div>
          <Image src={float} alt="" />
        </div>
      </div>
    </div>
  );
}
