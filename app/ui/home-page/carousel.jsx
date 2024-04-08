"use client";

import herobanner1 from "@/public/hero-banner-1.webp";
import herobanner2 from "@/public/hero-banner-2.webp";
import herobanner3 from "@/public/hero-banner-3.webp";
import heroright from "@/public/hero-right.svg";
import heroleft from "@/public/hero-left.svg";
import Img from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../global/button";

export default function Carousel() {
  const conatiner = useRef(null);
  const wrapper = useRef(null);
  const layer = useRef(null);
  const [index, setIndex] = useState(0);
  const [slideItem, setItem] = useState("");

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const items = wrapper.current.querySelectorAll(".hero-slide");
    setItem(items[0]);

    const words = document.querySelectorAll(".letter-slide");
    words.forEach((word) => {
      const wordArray = word.textContent.split(" ");
      word.textContent = "";
      wordArray.forEach((seperateWord) => {
        let outerLetterElement = document.createElement("span");
        outerLetterElement.classList.add("letter-slide-main-outer-span");
        let letterElement = document.createElement("span");
        letterElement.classList.add("letter-slide-outer-span");
        letterElement.innerHTML = seperateWord + "&nbsp;";
        outerLetterElement.appendChild(letterElement);
        word.appendChild(outerLetterElement);
      });
      words.forEach((word) => {
        word.style.opacity = 1;
      });

      const wordsOfAddedSpans = document.querySelectorAll(
        ".letter-slide span > span"
      );
      wordsOfAddedSpans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("letter-animate");
          span.style.opacity = 1;
        }, 100);
      });
    });
  }, []);

  useEffect(() => {
    const items = wrapper.current.querySelectorAll(".hero-slide");
    if (slideItem !== "") {
      items.forEach((item) => {
        const slideIndex = item.getAttribute("data-index");
        if (slideIndex == index) {
          slideItem.classList.remove("active");
          item.classList.add("active");
          wrapper.current.prepend(item);
          setItem(item);
          return () => clearTimeout(timeInterval);
        }
      });
    }
  }, [index, slideItem]);

  function handleRight() {
    if (index < wrapper.current.querySelectorAll(".hero-slide").length - 1) {
      setIndex((index) => index + 1);
    }
  }

  function handleLeft() {
    if (index > 0) {
      setIndex((index) => index - 1);
    }
  }

  function handleOne() {
    setIndex(0);
  }

  function handleTwo() {
    setIndex(1);
  }

  function handleThree() {
    setIndex(2);
  }

  return (
    <div ref={conatiner} className="hero-carousel-container">
      <div ref={wrapper} className="hero-carousel-wrapper">
        <div
          data-index="0"
          className="hero-slide-1 hero-slide active"
          onMouseOver={() => setHovered((hover) => (hover = true))}
          onMouseLeave={() => setHovered((hover) => (hover = false))}>
          <div>
            <Img className="slide-image" src={herobanner1} alt="" />
            <div id="hero-carousel-content" className="hero-content ">
              <h1 className="hero-heading letter-slide">
                PIONEERING E2E BUSINESS TRANSFORMATION
              </h1>
              <p className="hero-sub-heading">
                Aligned with Your Business&rsquo;s Current and Future Needs
              </p>
              <div className="lets-talk-container">
                <input type="text" placeholder="Email Address" />
                <div className="input-btn">
                  <Button name="Lets Talk" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index="1"
          className="hero-slide-2 hero-slide"
          onMouseOver={() => setHovered((hover) => (hover = true))}
          onMouseLeave={() => setHovered((hover) => (hover = false))}>
          <div>
            <Img className="slide-image" src={herobanner2} alt="" />
            <div id="hero-carousel-content" className="hero-content">
              <h1 className="hero-heading">
                EMPOWERING GLOBAL BRANDS TO WIN, GROW, AND LEAD
              </h1>
              <p className="hero-sub-heading">
                With E2E Digital Transformation Services and Solutions
              </p>
              <div className="lets-talk-container">
                <input type="text" placeholder="Email Address" />
                <div className="input-btn">
                  <Button name="Lets Talk" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index="2"
          className="hero-slide-3 hero-slide"
          onMouseOver={() => setHovered((hover) => (hover = true))}
          onMouseLeave={() => setHovered((hover) => (hover = false))}>
          <div>
            <Img className="slide-image" src={herobanner3} alt="" />
            <div id="hero-carousel-content" className="hero-content">
              <h1 className="hero-heading">
                TAILORED STRATEGIES FOR MARKET AND BUSINESS RESILIENCE
              </h1>
              <p className="hero-sub-heading">Commitment to Continuity</p>
              <div className="lets-talk-container">
                <input type="text" placeholder="Email Address" />
                <div className="input-btn">
                  <Button name="Lets Talk" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-carousel-nav">
        <div className="hero-carousel-left" onClick={handleLeft}>
          <div className="hero-carousel-nav-buttons-container">
            <Img fill src={heroleft} alt="" />
          </div>
        </div>
        <div className="hero-carousel-right" onClick={handleRight}>
          <div className="hero-carousel-nav-buttons-container">
            <Img fill src={heroright} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-carousel-num-nav">
        <div
          className={`hero-carousel-num ${index == "0" && "text-white"}`}
          onClick={handleOne}>
          01
        </div>
        <div
          className={`hero-carousel-divider  ${
            index == "1" ? "bg-white" : "bg-white/40"
          }`}></div>
        <div
          className={`hero-carousel-num  ${index == "1" && "text-white"}`}
          onClick={handleTwo}>
          02
        </div>
        <div
          className={`hero-carousel-divider  ${
            index == "2" ? "bg-white" : "bg-white/40"
          }`}></div>
        <div
          className={`hero-carousel-num ${index == "2" && "text-white"}`}
          onClick={handleThree}>
          03
        </div>
      </div>
      <div ref={layer} className="layer"></div>
    </div>
  );
}
