import { useEffect, useRef, useState } from "react";

export default function TextSlide({ wrapper, item }) {
  const mainSlide = useRef(null);

  useEffect(() => {
    const modernizeTextElements = document.querySelectorAll(".modernize-text");

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const windowWidth = window.innerWidth;
      const scrollPercentage = (mouseX / windowWidth) * 100;
      const extendPixels = window.innerWidth <= 1600 ? 30 : 10;
      console.log(extendPixels);
      modernizeTextElements.forEach((element, index) => {
        const topValue = `${
          scrollPercentage - mainSlide.current.offsetWidth - extendPixels
        }`;
        const refinedTopValue = (topValue / 1920) * 100;
        element.style.left = refinedTopValue + "vw";
      });
    };

    wrapper.current.addEventListener("mousemove", handleMouseMove);
  }, [wrapper]);
  return (
    <div className="modernize-container">
      <div className="modernize-column modernize-column-1">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
      <div className="modernize-column modernize-column-2">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
      <div className="modernize-column modernize-column-3">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
      <div ref={mainSlide} className="modernize-column modernize-column-4">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
      <div className="modernize-column modernize-column-5">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
      <div className="modernize-column modernize-column-6">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
      <div className="modernize-column modernize-column-7">
        <div className="modernize-text">
          <div>{item}</div>
          <div>{item}</div>
        </div>
      </div>
    </div>
  );
}
