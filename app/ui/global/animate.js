"use client";

import { useEffect } from "react";

export default function Animate() {
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    let element;
    let isScrolled = false;
    function handleScroll() {
      isScrolled = true;
      const hiddenElementsToAnimateX = document.querySelectorAll(".animate");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-option") == "right"
          ) {
            entry.target.classList.add("slideRight");
          }

          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-option") == "left"
          ) {
            entry.target.classList.add("slideLeft");
          }

          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-option") == "up"
          ) {
            entry.target.classList.add("slideup");
          }

          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-option") == "fade-in"
          ) {
            entry.target.classList.add("fadeIn");
          }

          if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-option") == "strip-slide-up"
          ) {
            const strip = entry.target;
            // console.log(strip);
            const singleSpan = strip.querySelector(
              ".row span.letter-slide-animate"
            );
            console.log(singleSpan);
            if (element !== strip && singleSpan == null) {
              element = strip;
              const rows = strip.innerHTML.split(" ");
              strip.innerHTML = "";

              rows.forEach((rowContent) => {
                const rowElement = document.createElement("span");
                rowElement.className = "row";
                strip.appendChild(rowElement);

                // console.log(rowContent);
                const letters = rowContent.trim().split("");
                letters.forEach((letter, index) => {
                  letter = letter === " " ? "&nbsp;" : letter;
                  const letterElement = document.createElement("span");
                  if (index == letters.length - 1) {
                    letterElement.innerHTML = letter.trim() + "&nbsp;";
                  } else {
                    letterElement.innerHTML = letter.trim();
                  }
                  rowElement.appendChild(letterElement);
                });
              });

              strip.style.opacity = 1;

              const stripSpans = strip.querySelectorAll("span:not(.row)");
              stripSpans.forEach((span, index) => {
                setTimeout(() => {
                  span.classList.add("letter-slide-animate");
                }, index * 15);
              });
            }
          }
        });
      }, options);

      hiddenElementsToAnimateX.forEach((el) => observer.observe(el));
    }

    if (isScrolled == false) {
      handleScroll();
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return;
}
