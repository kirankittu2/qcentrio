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
      el.style.backgroundColor = "#089768"; // Set background color to #089768
      el.style.transform =
        "rotate(" + rotate + "deg) translateY(" + translateY + "%)";

      tl.add({
        begin: function () {
          anime({
            targets: el,
            backgroundColor: ["#089768", "black"], // Change colors to #089768 and black
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
