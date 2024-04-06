"use client";

import { useEffect } from "react";

export default function Animate() {
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };
    function handleScroll() {
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
        });
      }, options);

      hiddenElementsToAnimateX.forEach((el) => observer.observe(el));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Adding animation classes
    // const glimpseColumn1 = document.querySelector(".glimpse-column-1").children;

    // for (let i = 0; i < glimpseColumn1.length; i++) {
    //   const child = glimpseColumn1[i];
    //   child.classList.add("animate-hidden", "animate");
    //   child.setAttribute("data-option", "up");
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return;
}
