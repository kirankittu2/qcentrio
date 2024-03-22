"use client";

import { useEffect, useRef } from "react";

export default function Path1() {
  const path = useRef(null);

  useEffect(() => {
    const curve = path.current;
    const length = curve.getTotalLength();
    curve.style.strokeDasharray = length;
    curve.style.strokeDashoffset = length;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry && entry.isIntersecting) {
        window.addEventListener("scroll", handleSVGScroll);
      } else {
        window.removeEventListener("scroll", handleSVGScroll);
      }
    }, options);

    function handleSVGScroll() {
      const topOfCurve = curve.getBoundingClientRect().top;
      const documentHeight = document.documentElement.clientHeight;
      const percentage = (topOfCurve - documentHeight) / documentHeight;

      const draw = length * percentage;
      if (draw < length) {
        curve.style.strokeDashoffset = length + draw;
      }
    }

    observer.observe(curve);
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="623.222"
      height="445.294"
      viewBox="0 0 623.222 445.294"
      id="path-1">
      <path
        ref={path}
        id="about-path"
        data-name="Path 1825"
        d="M236.514,1044.292s-30.277,78.131-86.825,78.747c-42.176.459-95.1-22.992-104.754,21.656s120.373,194.968,16.14,276.936S-382,1482.569-382,1482.569"
        transform="translate(384.12 -1041.704)"
        fill="none"
        stroke="#089768"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}
