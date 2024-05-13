"use client";

import { useEffect, useRef } from "react";

export default function Path8() {
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
      width="352.891"
      height="859.984"
      id="path-8"
      viewBox="0 0 352.891 859.984">
      <path
        ref={path}
        data-name="Path 4648"
        d="M13338,1302l-349.311,251.282,228.488,606.373"
        transform="translate(-12986.277 -1300.376)"
        fill="none"
        stroke="#089768"
        strokeWidth="4"
      />
    </svg>
  );
}
