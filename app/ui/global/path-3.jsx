"use client";

import { useEffect, useRef } from "react";

export default function Path3() {
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
      xmlns="http://www.w3.org/2000/svg"
      width="510.723"
      height="625.23"
      viewBox="0 0 510.723 625.23"
      id="path-3">
      <path
        ref={path}
        data-name="Path 1893"
        d="M13254,813s3.612,174.9-188.069,276-139.413,248.535-73.931,299.107,136.367,14.745,122-54.766-161.813-109.532-336.645,33.7"
        transform="translate(-12684.581 -1480.493) rotate(3)"
        fill="none"
        stroke="#089768"
        strokeWidth="4"
      />
    </svg>
  );
}
