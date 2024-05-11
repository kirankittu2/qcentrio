"use client";

import { useEffect, useRef, useState } from "react";
import SubOfferings from "../home-page/sub-offerings";
import Image from "next/image";
import float from "@/public/float.svg";
import arrow from "@/public/discover-arrow.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NeedSomethingModal from "./need-something-modal";

export default function AccordianOfferings({ data }) {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [needSomething, setNeedSomething] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clicked, setClicked] = useState(false);
  const refsArray = useRef([]);
  const router = useRouter();
  function changeCursor() {
    document.querySelector(".cursor").classList.add("hovered");
  }
  function defaultCursor() {
    document.querySelector(".cursor").classList.remove("hovered");
  }
  let tempIndex = 0;

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

  function handleURLRedirect(e) {
    if (
      !e.target.classList.contains("service-sub-offering") &&
      !e.target.classList.contains("service-sub-offering-span")
    ) {
      var screenWidth = window.screen.width;
      if (screenWidth > 500) {
        const parentLink = e.currentTarget.getAttribute("data-link");
        router.push(parentLink);
      }
    }
  }

  console.log(tempIndex);
  console.log(index);
  console.log(clicked);

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
    if (needSomething) {
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.width = "";
    };
  }, [needSomething]);

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

    // refsArray.current.forEach((item) => {
    //   const heading = item.querySelector(".accordian-offering-title-hidden");
    //   if (heading.classList.contains("animate")) {
    //     heading.classList.remove("animate");
    //   }
    // });

    // const currentOpeningCard = refsArray.current[index];
    // const activeCardHeading = currentOpeningCard.querySelector(
    //   ".accordian-offering-title-hidden"
    // );
    // activeCardHeading.classList.add("animate");
  }, [index]);

  return (
    <div className="accordian-offerings-section">
      {needSomething && (
        <NeedSomethingModal
          needSomething={setNeedSomething}
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
                ref={(el) => (refsArray.current[i] = el)}
                className={`accordian-offering ${
                  index == i ? "accordian-offering-active" : ""
                } `}
                style={{
                  backgroundImage: `${
                    index === i
                      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${item.image})`
                      : ""
                  }`,
                }}
                onClick={handleURLRedirect}
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
        <div
          onClick={() => setNeedSomething(true)}
          className="need-something-block">
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
    </div>
  );
}
