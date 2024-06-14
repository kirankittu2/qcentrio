"use client";

import { useEffect, useState } from "react";

const countries = {
  USA: "America/Chicago",
  Australia: "Australia/Sydney",
  India: "Asia/Kolkata",
  Singapore: "Asia/Singapore",
  "United Kingdom": "Europe/London",
  Switzerland: "Europe/Zurich",
};

export default function CountryScroll() {
  const [timeData, setTimeData] = useState({});
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      let date = new Date();
      const formattedTimeData = {};
      for (const [country, timezone] of Object.entries(countries)) {
        let options = {
          timeZone: timezone,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };
        formattedTimeData[country] = date.toLocaleString("en-US", options);
      }
      setTimeData(formattedTimeData);
    };

    const intervalId = setInterval(updateTime, 1000);

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
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="country-scroll-container">
      <div
        className="country-scroll-list-1"
        style={{ transform: `translateX(-${scrollOffset}px)` }}>
        <div>USA {timeData.USA}</div>
        <div>Australia {timeData.Australia}</div>
        <div>India {timeData.India}</div>
        <div>Singapore {timeData.Singapore}</div>
        <div>United Kingdom {timeData["United Kingdom"]}</div>
        <div>Switzerland {timeData.Switzerland}</div>
        <div>USA {timeData.USA}</div>
        <div>Australia {timeData.Australia}</div>
        <div>India {timeData.India}</div>
      </div>

      <div
        className="country-scroll-list-2"
        style={{ transform: `translateX(calc(-150% + ${scrollOffset}px)` }}>
        <div>Singapore {timeData.Singapore}</div>
        <div>United Kingdom {timeData["United Kingdom"]}</div>
        <div>India {timeData.India}</div>
        <div>USA {timeData.USA}</div>
        <div>Australia {timeData.Australia}</div>
        <div>Switzerland {timeData.Switzerland}</div>
        <div>Singapore {timeData.Singapore}</div>
        <div>United Kingdom {timeData["United Kingdom"]}</div>
        <div>USA {timeData.USA}</div>
      </div>
    </div>
  );
}
