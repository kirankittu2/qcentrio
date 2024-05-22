"use client";

import Link from "next/link";
import Pagination from "../blogs/pagination";
import EasyNav from "./search-easy-nav";
import { useEffect, useRef } from "react";

export default function SearchMain({ data, page, searchParams }) {
  const wrapper = useRef(null);
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const searchCards = wrapper.current.querySelectorAll(".search-result");
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

    observeElements(".search-result", "slideup");
  }, [searchParams]);

  return (
    <div className="search-listing-section">
      <div ref={wrapper} className="search-listing">
        {data && data.children.length > 0 ? (
          data.children.map((item, index) => (
            <div
              data-option="up"
              key={index}
              className="search-result animate animate-hidden">
              <div className="breadcrump">
                {item.type} <span></span>
                23 NOVEMBER 2020
              </div>
              <Link href={item.link}>
                <h2 className="search-result-head">{item.title}</h2>
              </Link>
              <p className="search-result-content">{item.content1}</p>
            </div>
          ))
        ) : (
          <div className="no-results">No Results Found</div>
        )}
        <Pagination paginationNum={data.pageNumber} page={page} />
      </div>
      <EasyNav />
    </div>
  );
}
