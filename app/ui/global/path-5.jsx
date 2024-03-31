"use client";

import { useEffect, useRef } from "react";

export default function Path5() {
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
      const topOfCurve =
        curve.getBoundingClientRect().top +
        curve.getBoundingClientRect().top -
        95;
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
      width="500.384"
      height="364.1"
      id="path-5"
      viewBox="0 0 500.384 364.1">
      <path
        ref={path}
        dataName="Path 4563"
        d="M-15395.485,478.221s360.366,55.385,365.517,190.16-139.5,132.407-153.449,89.381,32.063-148.994,286.672,81.1"
        transform="translate(15395.789 -476.244)"
        fill="none"
        stroke="#089768"
        strokeWidth="4"
      />
    </svg>
  );
}
