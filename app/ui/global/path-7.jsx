"use client";

import { useEffect, useRef } from "react";

export default function Path7() {
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
      const topOfCurve = curve.getBoundingClientRect().top * 1.2;
      const documentHeight = document.documentElement.clientHeight;
      const percentage =
        ((topOfCurve - documentHeight * 1.09999) / documentHeight) * 1.09999;

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
      width="510.16"
      height="513.603"
      id="path-7"
      viewBox="0 0 510.16 513.603">
      <path
        ref={path}
        data-name="Path 4578"
        d="M-23480,8757s118.916-70.032,220.316,0,105.969,173.809,77.959,230.776-86.811,108.613-165.072,108.613-126.818-44.456-149.2-86.057-33.75-109.55-1.971-172.883,88.43-80.45,129.086-80.45"
        transform="matrix(0.788, 0.616, -0.616, 0.788, 24135.234, 7605.726)"
        fill="none"
        stroke="#089768"
        strokeWidth="4"
      />
    </svg>
  );
}
