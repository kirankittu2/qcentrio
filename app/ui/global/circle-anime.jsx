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
      const hue = Math.round((360 / numberOfEls) * i);
      el.classList.add("el");
      el.style.backgroundColor = "hsl(" + 161 + ", 90%, 38%)";
      el.style.transform =
        "rotate(" + rotate + "deg) translateY(" + translateY + "%)";
      tl.add({
        begin: function () {
          anime({
            targets: el,
            backgroundColor: [
              "hsl(" + 161 + ", 90%, 38%)",
              "hsl(" + hue + ", 60%, 80%)",
            ],
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
