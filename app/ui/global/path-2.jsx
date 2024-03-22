"use client";

import { useEffect, useRef } from "react";

export default function Path2() {
  const path = useRef(null);

  useEffect(() => {
    const curve = path.current;
    const length = curve.getTotalLength();
    curve.style.strokeDasharray = length;
    curve.style.strokeDashoffset = length;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
      const percentage =
        (topOfCurve - documentHeight / 2) / (documentHeight / 2);

      const draw = length * percentage;
      if (draw < length) {
        curve.style.strokeDashoffset = length + draw;
      }
    }

    observer.observe(curve);
  }, []);
  return (
    <svg
      id="path-2"
      xmlns="http://www.w3.org/2000/svg"
      width="468.369"
      height="681.381"
      viewBox="0 0 468.369 681.381">
      <path
        ref={path}
        id="services-path"
        data-name="Path 1826"
        d="M216.686,1915.784s-77.446,23.814-108.059,183.557,77.668,243.5,108.059,45.381S408.407,1867.779,512.8,2005.808s48.45,444.095-77.984,588.126"
        transform="translate(-101.108 -1913.872)"
        fill="none"
        stroke="#089768"
        strokeWidth="4"
      />
    </svg>
  );
}
