/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/insights-arrow.svg";
import blogArrow from "@/public/blog-arrow.svg";
import { useEffect, useRef, useState } from "react";

export default function Insignts({ title, subheading, blogs }) {
  const wrapper = useRef(null);
  const container = useRef(null);
  const card = useRef(null);
  const [index, setIndex] = useState(1);
  const allblogs = JSON.parse(blogs);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    let observeCount;
    if (screenWidth <= 520) {
      observeCount = 1;
    } else if (screenWidth <= 1279) {
      observeCount = 2;
    } else {
      observeCount = 3;
    }

    wrapper.current
      .querySelectorAll('.card[data-option="card-up"]')
      .forEach((element, index) => {
        if (index >= observeCount) {
          element.classList.add("slideup");
        }
      });

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    let isScrolled = false;

    function handleScroll() {
      isScrolled = true;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-option") == "card-up"
          ) {
            entry.target.classList.add("slideup");
          }
        });
      }, options);

      wrapper.current
        .querySelectorAll(
          '.card[data-option="card-up"]:nth-child(-n+' + observeCount + ")"
        )
        .forEach((element) => {
          observer.observe(element);
        });
    }

    if (isScrolled == false) {
      handleScroll();
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleRight() {
    if (index < wrapper.current.children.length - 2) {
      wrapper.current.style.transition = "transform 0.5s linear";
      let translateValue = -index * (card.current.offsetWidth + 30) + "px";
      wrapper.current.style.transform = `translateX(${translateValue})`;
      setIndex(index + 1);
      if (index == wrapper.current.children.length - 3) {
        setTimeout(() => {
          wrapper.current.style.transition = "none";
          let translateValue = 0 + "px";
          wrapper.current.style.transform = `translateX(${translateValue})`;
          setIndex(1);
        }, 500);
      }
    }
  }

  function handleLeft() {
    let tempIndex = index;
    if (index >= 0) {
      wrapper.current.style.transition = "transform 0.5s linear";
      let translateValue =
        -(tempIndex - 1) * (card.current.offsetWidth + 30) + "px";
      wrapper.current.style.transform = `translateX(${translateValue})`;
      setIndex(tempIndex - 1);
      if (index == 0) {
        setTimeout(() => {
          wrapper.current.style.transition = "none";
          let translateValue =
            -(allblogs.length - 1) * (card.current.offsetWidth + 30) + "px";
          wrapper.current.style.transform = `translateX(${translateValue})`;
          setIndex(wrapper.current.children.length - 4);
        }, 500);
      }
    }
  }

  return (
    <div className="insights-section section">
      <div className="insights-heading-container">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          {title}
        </h2>
        <p
          data-option="up"
          className="section-content insights-sub-heading animate-hidden animate">
          {subheading}
        </p>
      </div>
      <div ref={container} className="blogs-container">
        <div ref={wrapper} className="insights-wrapper ">
          {allblogs.slice(-1).map((blog, index) => {
            return (
              <div
                data-option="card-up"
                key={index}
                ref={card}
                className="card card-animate animate-hidden">
                <div>
                  <div>
                    <Image
                      width={1226}
                      height={360}
                      src={blog.featured_image}
                      alt=""
                      className="blog-image"
                    />
                  </div>
                  <div className="blog-card-heading">
                    <h2 className="card-heading">{blog.name}</h2>
                  </div>
                  <div className="blog-card-content-container">
                    <p className="section-content">
                      {JSON.parse(blog.content)["sub-heading-1"]}
                    </p>
                    <Link href={`/perspectives/${blog.slug}`}>
                      <div className="blogs-btn">
                        Learn More
                        <span>
                          <Image
                            style={{ width: "25px" }}
                            src={blogArrow}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {allblogs.map((blog, index) => {
            return (
              <div
                key={index}
                data-option="card-up"
                className="card card-animate animate-hidden">
                <div>
                  <div>
                    <Image
                      width={1226}
                      height={360}
                      src={blog.featured_image}
                      alt=""
                      className="blog-image"
                    />
                  </div>
                  <div className="blog-card-heading">
                    <h2 className="card-heading">{blog.name}</h2>
                  </div>
                  <div className="blog-card-content-container">
                    <p className="section-content">
                      {JSON.parse(blog.content)["sub-heading-1"]}
                    </p>
                    <Link href={`/perspectives/${blog.slug}`}>
                      <div className="blogs-btn">
                        Learn More
                        <span>
                          <Image
                            style={{ width: "25px" }}
                            src={blogArrow}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {allblogs.slice(0, 2).map((blog, index) => {
            return (
              <div key={index} className="card">
                <div>
                  <div>
                    <Image
                      width={1226}
                      height={360}
                      src={blog.featured_image}
                      alt=""
                      className="blog-image"
                    />
                  </div>
                  <div className="blog-card-heading">
                    <h2 className="card-heading">{blog.name}</h2>
                  </div>
                  <div className="blog-card-content-container">
                    <p className="section-content">
                      {JSON.parse(blog.content)["sub-heading-1"]}
                    </p>
                    <Link href={`/perspectives/${blog.slug}`}>
                      <div className="blogs-btn">
                        Learn More
                        <span>
                          <Image fill src={blogArrow} alt="" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="insights-arrows-holder">
        <div onClick={handleRight} className="insights-right-arrow">
          <Image src={arrow} alt="" />
        </div>
        <div onClick={handleLeft} className="insights-left-arrow">
          <Image src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}
