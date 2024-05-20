"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import float from "@/public/float.svg";
import arrow from "@/public/discover-arrow.svg";
import { useRouter } from "next/navigation";
import NeedSomethingModal from "./need-something-modal";

export default function SubAccordianOfferings({ data }) {
  const [index, setIndex] = useState(0);
  const [needSomething, setNeedSomething] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const router = useRouter();
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
      setPreviousIndex(index);
      setIndex(i);
      hovered = true;
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const content = document.querySelectorAll(
      ".accordian-offering-content-hidden"
    );
    content.forEach((item) => {
      if (item.classList.contains("slideup")) {
        item.classList.remove("slideup");
      }
    });

    const headings = document.querySelectorAll(
      ".accordian-offering-title-hidden"
    );
    headings.forEach((item) => {
      if (item.classList.contains("slideup")) {
        item.classList.remove("slideup");
      }
    });
  }, [index]);

  useEffect(() => {
    if (needSomething) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.width = "";
    };
  }, [needSomething]);

  return (
    <div className="accordian-offerings-section ">
      {needSomething && (
        <NeedSomethingModal
          setNeedSomething={setNeedSomething}
          scrollPosition={scrollPosition}
        />
      )}
      <div className="section">
        <div
          data-option="up"
          className="accordian-offerings-container animate animate-hidden">
          {data.list.map((item, i) => {
            return (
              <div
                key={i}
                data-link={item.link}
                className={`accordian-offering  ${
                  index == i ? "accordian-offering-active" : ""
                } `}
                style={{
                  backgroundImage: `${
                    index === i
                      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${item.image})`
                      : ""
                  }`,
                }}
                onMouseOver={(event) => handleHover(i, event)}
                //   onMouseEnter={changeCursor}
                //   onMouseLeave={defaultCursor}
              >
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
                      data-option="up"
                      className="accordian-offering-title-hidden animate animate-hidden">
                      {item.heading}
                    </h2>
                    <p
                      data-option="up"
                      className="accordian-offering-content-hidden animate animate-hidden">
                      {item.content}
                    </p>
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
        <div
          onClick={() => setNeedSomething(true)}
          className="need-something-block">
          <div>
            <div className="need-something-block-title-wrapper">
              <h2 className="need-something-block-title">
                Need Something
                <span
                  className="need-something-arrow-container"
                  style={{
                    display: "block",
                    width: "30px",
                    height: "30px",
                    position: "relative",
                    marginLeft: "18px",
                    marginTop: "3px",
                  }}>
                  <Image
                    className="need-something-arrow"
                    fill
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
    </div>
  );
}
