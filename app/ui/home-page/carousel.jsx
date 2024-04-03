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
  // const [allImages, setAllImages] = useState([]);
  // const [allBoxes, setAllBoxes] = useState([]);
  // const [wid, setWidth] = useState(0);
  // const [hei, setHeight] = useState(0);
  // const intervalRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const items = wrapper.current.querySelectorAll(".hero-slide");
    setItem(items[0]);

    // const images = document.querySelectorAll(".slide-image");
    // const tempAllImages = [];
    // images.forEach((image) => {
    //   tempAllImages.push(image);
    // });
    // setAllImages(tempAllImages);

    // const width = tempAllImages[0].width / 10;
    // setWidth(width);
    // const height = tempAllImages[0].height / 4;
    // setHeight(height);

    // layer.current.style.height = tempAllImages[0].height + "px";
    // layer.current.style.width = tempAllImages[0].width + "px";

    // const tempAllBoxes = [];
    // for (let i = 0; i < 4; i++) {
    //   let row = [];
    //   for (let j = 0; j < 10; j++) {
    //     const box = document.createElement("div");
    //     box.classList.add("box");
    //     box.style.position = "absolute";
    //     box.style.width = width + "px";
    //     box.style.height = height + "px";
    //     box.style.top = height * i + "px";
    //     box.style.left = width * j + "px";
    //     row.push(box);
    //     layer.current.appendChild(box);
    //   }
    //   tempAllBoxes.push(row);
    // }
    // setAllBoxes(() => tempAllBoxes);
  }, []);

  // useEffect(() => {
  //   const changeIndex = () => {
  //     if (index < wrapper.current.querySelectorAll(".hero-slide").length - 1) {
  //       setIndex((num) => num + 1);
  //     } else {
  //       setIndex(0);
  //     }
  //   };

  //   if (hovered != true) {
  //     intervalRef.current = setInterval(changeIndex, 5000);
  //   }

  //   return () => clearInterval(intervalRef.current);
  // }, [index, hovered]);

  useEffect(() => {
    // if (allBoxes.length != 0) {
    //   const rowCount = allBoxes.length;
    //   const colCount = allBoxes[0].length;
    //   let count = 0;

    //   layer.current.style.opacity = 1;
    //   if (index < allImages.length - 1) {
    //     const imgSrc = allImages[index].src;
    //     const img = new Image();
    //     img.src = imgSrc;

    //     const tempCanvas = document.createElement("canvas");
    //     const tempCtx = tempCanvas.getContext("2d");
    //     tempCanvas.width = wid;
    //     tempCanvas.height = hei;

    //     for (let i = 0; i < 4; i++) {
    //       for (let j = 0; j < 10; j++) {
    //         tempCtx.drawImage(img, wid * j, hei * i, wid, hei, 0, 0, wid, hei);
    //         const croppedImageUrl = tempCanvas.toDataURL();
    //         const box = allBoxes[i][j];
    //         box.style.backgroundImage = `url(${croppedImageUrl})`;
    //       }
    //     }

    //     for (let sum = rowCount + colCount - 2; sum >= 0; sum--) {
    //       for (let i = rowCount - 1; i >= 0; i--) {
    //         const j = sum - i;
    //         if (j >= 0 && j < colCount) {
    //           setTimeout(() => {
    //             allBoxes[i][j].style.opacity = 1;
    //             allBoxes[i][j].classList.add("animatebox");
    //           }, 20 * count);
    //           count++;
    //         }
    //       }
    //     }

    //     setTimeout(() => {
    //       count = 0;
    //       layer.current.style.opacity = 0;
    //       for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 10; j++) {
    //           allBoxes[i][j].style.opacity = 0;
    //           allBoxes[i][j].classList.remove("animatebox");
    //         }
    //       }
    //     }, 2000);
    //   }
    // }

    const items = wrapper.current.querySelectorAll(".hero-slide");
    if (slideItem !== "") {
      items.forEach((item) => {
        const slideIndex = item.getAttribute("data-index");
        if (slideIndex == index) {
          slideItem.classList.remove("active");
          slideItem.querySelector(".hero-content").classList.remove("slideUP");
          item.classList.add("active");
          wrapper.current.prepend(item);
          const timeInterval = setTimeout(() => {
            item.querySelector(".hero-content").classList.add("slideUP");
          }, 20);
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
              <h1 className="hero-heading">
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
