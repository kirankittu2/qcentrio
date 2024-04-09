"use client";

import { useEffect, useRef } from "react";

export default function Path6() {
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
      width="298.621"
      height="262.806"
      id="path-6"
      viewBox="0 0 298.621 262.806">
      <path
        ref={path}
        data-name="Path 4577"
        d="M-23767.986,8412.33s193.7,40.3,296.4,260"
        transform="translate(23768.395 -8410.372)"
        fill="none"
        stroke="#089768"
        strokeWidth="4"
      />
    </svg>
  );
}
