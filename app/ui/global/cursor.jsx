"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  var cursor = useRef(null);

  useEffect(() => {
    console.log(cursor);
    function moveCursor(e) {
      cursor.current.classList.add("is-moving");

      var timer;

      clearTimeout(timer);

      timer = setTimeout(function () {
        cursor.current.classList.remove("is-moving");
      }, 300);

      var posX = e.pageX + "px";
      var posY = e.pageY + "px";

      cursor.current.style.left = posX;
      cursor.current.style.top = posY;
    }

    window.addEventListener("mousemove", moveCursor);
  }, []);

  return <div ref={cursor} class="cursor"></div>;
}
