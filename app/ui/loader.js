"use client";

import { useEffect, useState } from "react";
import CircleAnime from "./global/circle-anime";

export default function Loader() {
  const [realCount, setCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = (4 * 1000) / 100;

    const counter = setInterval(() => {
      count++;
      setCount(count);

      if (count >= 100) {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="loader">
      <CircleAnime />
      <div className="loader-number">{realCount}%</div>
    </div>
  );
}
