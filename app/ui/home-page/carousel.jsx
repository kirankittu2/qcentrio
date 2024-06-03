"use client";

import heroright from "@/public/hero-right.svg";
import heroleft from "@/public/hero-left.svg";
import Img from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../global/button";
import { homeslidesMail } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export default function Carousel() {
  const conatiner = useRef(null);
  const wrapper = useRef(null);
  const layer = useRef(null);
  const [index, setIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [slideItem, setItem] = useState("");
  const [hovered, setHovered] = useState(false);
  const [inputHovered, setInputHovered] = useState(false);
  const [submitting, setSubmitting] = useState(true);
  const [error, setError] = useState(true);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    setClickedIndex(e.target.getAttribute("data-index"));
    const form = e.target;
    const formData = new FormData(form);
    setSubmitting(false);
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdTKMUpAAAAAOUf_fNbftCXwdXc5KLdgZov7P74", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          const response = await homeslidesMail(formData);
          setSubmitting(response.success);
          setError(response.success);
          if (response.success) {
            router.push("/thank-you");
          } else if (!response.success) {
            setSubmitting(true);
          }
        });
    });
  }

  useEffect(() => {
    const items = wrapper.current.querySelectorAll(".hero-slide");
    setItem(items[0]);

    document.querySelectorAll(".strip").forEach((strip) => {
      const rows = strip.innerHTML.split(" ");
      strip.innerHTML = "";

      rows.forEach((rowContent) => {
        const rowElement = document.createElement("span");
        rowElement.className = "row";
        strip.appendChild(rowElement);

        const letters = rowContent.trim().split("");
        letters.forEach((letter, index) => {
          letter = letter === " " ? "&nbsp;" : letter;
          const letterElement = document.createElement("span");
          if (index == letters.length - 1) {
            letterElement.innerHTML = letter.trim() + "&nbsp;";
          } else {
            letterElement.innerHTML = letter.trim();
          }
          rowElement.appendChild(letterElement);
        });
      });

      strip.style.opacity = 1;

      setTimeout(() => {
        items.forEach((item) => {
          item.querySelector(".hero-sub-heading").classList.add("slideup");
          item.querySelector(".lets-talk-container").classList.add("slideup");
        });
      }, 200);

      const stripSpans = strip.querySelectorAll("span:not(.row)");
      stripSpans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("letter-slide-animate");
        }, (index + 1) * 25);
      });
    });
  }, []);

  useEffect(() => {
    const items = wrapper.current.querySelectorAll(".hero-slide");

    items.forEach((item) => {
      item.querySelector(".hero-sub-heading").classList.remove("slideup");
      item.querySelector(".lets-talk-container").classList.remove("slideup");
    });

    setTimeout(() => {
      items.forEach((item) => {
        item.querySelector(".hero-sub-heading").classList.add("slideup");
        item.querySelector(".lets-talk-container").classList.add("slideup");
      });
    }, 200);

    if (slideItem !== "") {
      items.forEach((item) => {
        const slideIndex = item.getAttribute("data-index");
        if (slideIndex == index) {
          slideItem.classList.remove("active");
          const allspans = slideItem.querySelectorAll(".strip span:not(.row)");
          allspans.forEach((span, index) => {
            span.classList.remove("letter-slide-animate");
          });

          allspans.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("letter-slide-animate");
            }, (index + 1) * 15);
          });
          item.classList.add("active");
          wrapper.current.prepend(item);
          setItem(item);
          return () => clearTimeout(timeInterval);
        }
      });
    }
  }, [index, slideItem]);

  // useEffect(() => {
  //   if (hovered == false) {
  //     const items = wrapper.current.querySelectorAll(".hero-slide");
  //     const intervalId = setInterval(() => {
  //       setIndex((prevIndex) =>
  //         prevIndex === items.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 3000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [hovered]);

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

  function isActive(flag) {
    if (flag == true || inputHovered == true) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  }

  return (
    <div ref={conatiner} className="hero-carousel-container">
      <div ref={wrapper} className="hero-carousel-wrapper">
        <div
          data-index="0"
          className="hero-slide-1 hero-slide active"
          onMouseOver={() => isActive(true)}
          onMouseLeave={() => isActive(false)}>
          <div>
            {/* <Img className="slide-image" src={herobanner1} alt="" /> */}
            <video
              width="1920"
              height="630"
              src="/sequence-1.mp4"
              autoPlay
              loop
              muted
              playsInline>
              Your browser does not support the video tag.
            </video>
            <div id="hero-carousel-content" className="hero-content ">
              <h1 className="hero-heading strip">
                PIONEERING E2E BUSINESS TRANSFORMATION
              </h1>
              <p className="hero-sub-heading">
                Aligned with Your Business&rsquo;s Current and Future Needs
              </p>
              <form data-index="0" onSubmit={onSubmit}>
                {!error && <p className="form-error">Error Submitting Form</p>}
                <div className="lets-talk-container">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="home-carousel-input"
                    onFocus={() => setInputHovered((hover) => (hover = true))}
                    onBlur={() => setInputHovered((hover) => (hover = false))}
                    required
                  />
                  <div className="input-btn">
                    <Button
                      name={
                        !submitting && clickedIndex == 0
                          ? "Submitting..."
                          : "Lets Talk"
                      }
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          data-index="1"
          className="hero-slide-2 hero-slide"
          onMouseOver={() => isActive(true)}
          onMouseLeave={() => isActive(false)}>
          <div>
            <video
              src="/sequence-2.mp4"
              autoPlay
              loop
              muted
              playsInline></video>
            {/* <Img className="slide-image" src={herobanner2} alt="" /> */}
            <div id="hero-carousel-content" className="hero-content">
              <h1 className="hero-heading strip">
                EMPOWERING GLOBAL BRANDS TO WIN, GROW AND LEAD
              </h1>
              <p className="hero-sub-heading">
                With E2E Digital Transformation Services and Solutions
              </p>
              {!error && <p className="form-error">Error Submitting Form</p>}

              <form data-index="1" onSubmit={onSubmit}>
                <div className="lets-talk-container">
                  <input
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="home-carousel-input"
                    onFocus={() => setInputHovered((hover) => (hover = true))}
                    onBlur={() => setInputHovered((hover) => (hover = false))}
                    required
                  />
                  <div className="input-btn">
                    <Button
                      name={
                        !submitting && clickedIndex == 1
                          ? "Submitting..."
                          : "Lets Talk"
                      }
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          data-index="2"
          className="hero-slide-3 hero-slide"
          onMouseOver={() => isActive(true)}
          onMouseLeave={() => isActive(false)}>
          <div>
            {/* <Img className="slide-image" src={herobanner3} alt="" /> */}
            <video
              src="/sequence-3.mp4"
              autoPlay
              loop
              muted
              playsInline></video>
            <div id="hero-carousel-content" className="hero-content">
              <h1 className="hero-heading strip">
                TAILORED STRATEGIES FOR MARKET AND BUSINESS RESILIENCE
              </h1>
              <p className="hero-sub-heading">Commitment to Continuity</p>
              {!error && <p className="form-error">Error Submitting Form</p>}
              <form data-index="2" onSubmit={onSubmit}>
                <div className="lets-talk-container">
                  <input
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="home-carousel-input"
                    onFocus={() => setInputHovered((hover) => (hover = true))}
                    onBlur={() => setInputHovered((hover) => (hover = false))}
                    required
                  />
                  <div className="input-btn">
                    <Button
                      name={
                        !submitting && clickedIndex == 2
                          ? "Submitting..."
                          : "Lets Talk"
                      }
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-carousel-nav">
        <div
          onMouseOver={() => setHovered((hover) => (hover = true))}
          onMouseLeave={() => setHovered((hover) => (hover = false))}
          className="hero-carousel-left"
          onClick={handleLeft}>
          <div className="hero-carousel-nav-buttons-container">
            <Img fill src={heroleft} alt="" />
          </div>
        </div>
        <div
          onMouseOver={() => isActive(true)}
          onMouseLeave={() => isActive(false)}
          className="hero-carousel-right"
          onClick={handleRight}>
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
