"use client";

import Image from "next/image";
import Link from "next/link";
import blog1 from "@/public/blog-1.png";
import arrow from "@/public/insights-arrow.svg";
import blogArrow from "@/public/blog-arrow.svg";
import { useEffect, useRef, useState } from "react";
import { getAllBlogs } from "@/app/lib/data";

export default function Insignts({ title, subheading }) {
  const wrapper = useRef(null);
  const card = useRef(null);
  const [index, setIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(3);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let translateValue = -index * (card.current.offsetWidth + 30) + "px";
    wrapper.current.style.transform = `translateX(${translateValue})`;
  }, [index]);

  useEffect(() => {
    if (windowSize.width < 1920) {
      setScrollIndex(2);
    }

    if (windowSize.width < 1269) {
      setScrollIndex(1);
    }
  }, [windowSize]);

  function handleRight() {
    if (index < wrapper.current.children.length - scrollIndex) {
      setIndex(index + 1);
    }
  }

  function handleLeft() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const blogs = getAllBlogs();

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
      <div className="blogs-container">
        <div ref={wrapper} className="insights-wrapper">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                data-option="up"
                ref={card}
                className="card animate animate-hidden">
                <div>
                  <div>
                    <Image
                      width={1226}
                      height={360}
                      src={blog.image}
                      alt=""
                      className="blog-image"
                    />
                  </div>
                  <div className="blog-card-heading">
                    <h2 className="card-heading">{blog.title}</h2>
                  </div>
                  <div className="blog-card-content-container">
                    <p className="section-content">{blog.content1}</p>
                    <Link href={blog.link}>
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
        </div>
      </div>
      <div className="insights-arrows-holder">
        <div
          data-option="up"
          onClick={handleRight}
          className="insights-right-arrow animate-hidden animate">
          <Image src={arrow} alt="" />
        </div>
        <div
          onClick={handleLeft}
          className={`insights-left-arrow ${index > 0 ? "block" : "hidden"}`}>
          <Image src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}
