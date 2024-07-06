"use client";

import Image from "next/image";
import blogArrow from "@/public/blog-arrow.svg";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BlogsConatiner({ data, searchParams }) {
  const wrapper = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const searchCards = wrapper.current.querySelectorAll(".card");
    searchCards.forEach((element) => {
      if (element.classList.contains("slideup")) {
        element.classList.remove("slideup");
      }
    });
    const observeElements = (selector, className) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      }, options);
      elements.forEach((el) => observer.observe(el));
    };

    observeElements(".card", "slideup");
  }, [searchParams]);
  return (
    <div ref={wrapper} className="blogs-container">
      {data == null || data == undefined || data.length == 0 ? (
        <p className="no-results">No Results Found</p>
      ) : (
        data.map((item, index) => {
          return (
            <div
              data-option="up"
              key={index}
              className="card animate animate-hidden">
              <div className="card-image">
                <Image fill src={item.featured_image} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">{item.name}</h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  {JSON.parse(item.content)["sub-heading-1"]}
                </p>
                <Link
                  href={`/${
                    searchParams.type ? searchParams.type : "perspectives"
                  }/${item.slug}`}>
                  <div className="blogs-btn">
                    Learn More
                    <span>
                      <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
