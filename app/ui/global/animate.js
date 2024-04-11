"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Animate() {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
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

      const observeElements = (selector, className) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(className);
            }
          });
        }, options);
        elements.forEach((el) => observer.observe(el));
      };

      observeElements(".blog-page-main-content > p", "slideup");
      observeElements(".blog-page-main-content > h2", "slideup");
      observeElements(".blog-page-main-content > h3", "slideup");
      observeElements(".blog-page-main-content > ul > li", "slideup");
      observeElements(".blog-page-main-content > ol > li", "slideup");
      observeElements(".table-of-contents > ul > li", "slideup");
      observeElements(".author-conatiner > div", "slideup");
      observeElements(".category-container > p", "slideup");
      observeElements(".category-container > h2", "slideup");
      observeElements(".tags-container .tag", "slideup");
      observeElements(".privacy-policy-content > p", "slideup");
      observeElements(".privacy-policy-content > h2", "slideup");
      observeElements(".privacy-policy-content > h3", "slideup");
      observeElements(".privacy-policy-content > ul > li", "slideup");
    }

    if (isScrolled == false) {
      handleScroll();
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  return;
}
