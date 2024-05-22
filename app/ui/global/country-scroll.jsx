"use client";

import { useEffect, useState } from "react";

export default function CountryScroll() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const countryScrollContainer = document.querySelector(
        ".country-scroll-container"
      );
      if (countryScrollContainer) {
        const { top } = countryScrollContainer.getBoundingClientRect();
        setScrollOffset(top / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="country-scroll-container">
      <div
        className="country-scroll-list-1"
        style={{ transform: `translateX(-${scrollOffset}px)` }}>
        <div>USA</div>
        <div>Australia</div>
        <div>India</div>
        <div>Singapore</div>
        <div>United Kingdom</div>
        <div>Switzerland</div>
        <div>USA</div>
        <div>Australia</div>
        <div>India</div>
      </div>

      <div
        className="country-scroll-list-2"
        style={{ transform: `translateX(calc(-50% + ${scrollOffset}px)` }}>
        <div>Singapore</div>
        <div>United Kingdom</div>
        <div>Switzerland</div>
        <div>USA</div>
        <div>Australia</div>
        <div>India</div>
        <div>Singapore</div>
        <div>United Kingdom</div>
        <div>Switzerland</div>
      </div>
    </div>
  );
}
