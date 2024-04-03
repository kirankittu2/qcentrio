"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function CircleAnime() {
  const wrapper = useRef(null);
  const numberOfEls = 90;
  const duration = 6000;
  const delay = duration / numberOfEls;

  useEffect(() => {
    let tl = anime.timeline({
      duration: delay,
      complete: function () {
        tl.restart();
      },
    });

    function createEl(i) {
      let el = document.createElement("div");
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;

      el.classList.add("el");

      // Set dark green for initial color
      el.style.backgroundColor = "hsl(120, 100%, 10%)";

      el.style.transform =
        "rotate(" + rotate + "deg) translateY(" + translateY + "%)";

      tl.add({
        begin: function () {
          anime({
            targets: el,
            // Change colors to dark green and black
            backgroundColor: ["hsl(120, 100%, 10%)", "hsl(0, 0%, 0%)"],
            rotate: [rotate + "deg", rotate + 10 + "deg"],
            translateY: [translateY + "%", translateY + 10 + "%"],
            scale: [1, 1.25],
            easing: "easeInOutSine",
            direction: "alternate",
            duration: duration * 0.1,
          });
        },
      });

      wrapper.current.appendChild(el);
    }

    for (let i = 0; i < numberOfEls; i++) createEl(i);
  }, [delay]);

  return <div ref={wrapper} className="coming-soon-wrapper"></div>;
}
