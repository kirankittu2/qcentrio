import { useEffect, useState } from "react";

export default function TextSlide({ wrapper, item }) {
  useEffect(() => {
    const modernizeTextElements = document.querySelectorAll(".modernize-text");

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const windowWidth = window.innerWidth;
      const scrollPercentage = (mouseX / windowWidth) * 100;

      modernizeTextElements.forEach((element, index) => {
        const topValue = `${scrollPercentage - 90}px`;
        element.style.left = topValue;
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
