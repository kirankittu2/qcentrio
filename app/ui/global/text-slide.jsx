import { useEffect, useRef, useState } from "react";

export default function TextSlide({ wrapper, item }) {
  const mainSlide = useRef(null);

  useEffect(() => {
    const modernizeTextElements = document.querySelectorAll(".modernize-text");

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const windowWidth = window.innerWidth;
      const scrollPercentage = (mouseX / windowWidth) * 100;
      const extendPixels = window.innerWidth <= 1600 ? 22 : 5;
      const computedStyle = window.getComputedStyle(mainSlide.current);
      const fontSize = computedStyle.getPropertyValue("font-size");
      modernizeTextElements.forEach((element, index) => {
        const topValue = `${
          scrollPercentage - parseInt(fontSize, 10) - extendPixels
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
      <div className="modernize-column modernize-column-4">
        <div ref={mainSlide} className="modernize-text">
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
