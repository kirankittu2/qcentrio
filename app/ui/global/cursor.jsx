"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  var cursor = useRef(null);

  useEffect(() => {
    let timer;

    function moveCursor(e) {
      clearTimeout(timer);

      function setTransform() {
        cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) scale(1)`;
      }

      timer = setTimeout(setTransform, 100);

      cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) scale(0.4)`;
    }

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div ref={cursor} className="cursor"></div>;
}
