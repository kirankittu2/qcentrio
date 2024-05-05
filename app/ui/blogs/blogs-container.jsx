"use client";

import Image from "next/image";
import blogArrow from "@/public/blog-arrow.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function BlogsConatiner(data) {
  const searchParams = useSearchParams();
  const [firstPath, setFirstPath] = useState(false);

  // useEffect(() => {
  //   let timeoutIds = [];

  //   if (firstPath == true) {
  //     let delay = 50;
  //     const cards = document.querySelectorAll(".blogs-container .card");
  //     cards.forEach((card) => {
  //       card.style.transition = "none";
  //       card.classList.remove("slideup");
  //     });
  //     cards.forEach((card) => {
  //       const timeoutId = setTimeout(() => {
  //         card.style.transition = "all 0.5s cubic-bezier(0, 0.81, 1, 1.01)";
  //         card.classList.add("slideup");
  //       }, delay);
  //       timeoutIds.push(timeoutId);
  //       delay += 50;
  //     });
  //   }

  //   return () => {
  //     timeoutIds.forEach((timeoutId) => {
  //       clearTimeout(timeoutId);
  //     });
  //   };
  // }, [searchParams, firstPath]);

  // useEffect(() => {
  //   let options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.3,
  //   };

  //   const observeElements = (selector, className) => {
  //     const elements = document.querySelectorAll(selector);
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add(className);
  //           setFirstPath(true);
  //         }
  //       });
  //     }, options);
  //     elements.forEach((el) => observer.observe(el));
  //   };

  //   observeElements(".blogs-container > .card", "slideup");
  // }, []);

  return (
    <div className="blogs-container">
      {data == null || data == undefined || data.length == 0
        ? "No Data Found"
        : data.data.children.map((item, index) => {
            return (
              <div key={index} className="card ">
                <div className="card-image">
                  <Image fill src={item.image} alt="" />
                </div>
                <div className="blog-card-heading">
                  <h2 className="card-heading">{item.title}</h2>
                </div>
                <div className="blog-card-content-container">
                  <p className="section-content">{item.content1}</p>
                  <Link href={item.link}>
                    <div className="blogs-btn">
                      Learn More
                      <span>
                        <Image
                          style={{ width: "25px" }}
                          src={blogArrow}
                          alt=""
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
    </div>
  );
}
