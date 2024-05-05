"use client";

import Image from "next/image";
import arrow from "@/public/cursor-arrow.svg";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Cursor() {
  var cursor = useRef(null);
  var cursorArrow = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let timer;

    function moveCursor(e) {
      clearTimeout(timer);

      if (cursor.current.classList.contains("hovered")) {
        cursorArrow.current.style.display = "block";
      } else {
        cursorArrow.current.style.display = "none";
      }

      function setTransform() {
        if (cursor.current.classList.contains("hovered")) {
          cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) `;
          cursorArrow.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) `;
        }
        // else {
        //   cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) scale(1)`;
        //   cursorArrow.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) scale(1)`;
        // }
      }

      timer = setTimeout(setTransform, 100);
      if (cursor.current.classList.contains("hovered")) {
        cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        cursorArrow.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
      // else {
      //   cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) scale(0.4)`;
      //   cursorArrow.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) scale(0.4)`;
      // }
    }

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (cursor && cursor.classList.contains("hovered")) {
      document.querySelector(".cursor").classList.remove("hovered");
      cursorArrow.current.style.display = "none";
    }
  }, [pathname]);

  return (
    <>
      <div ref={cursor} className="cursor"></div>
      <div ref={cursorArrow} className="cursor-arrow">
        <Image className="ml-[2px] mt-[2px]" alt="" src={arrow} />
      </div>
    </>
  );
}
