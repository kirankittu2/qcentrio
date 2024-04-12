"use client";

import Link from "next/link";

export default function ServiceCardClient({ children, link }) {
  function changeCursor() {
    document.querySelector(".cursor").classList.add("hovered");
  }
  function defaultCursor() {
    document.querySelector(".cursor").classList.remove("hovered");
  }
  return (
    <Link href={link}>
      <div
        onMouseEnter={changeCursor}
        onMouseLeave={defaultCursor}
        data-option="up"
        className="service animate-hidden animate">
        {children}
      </div>
    </Link>
  );
}
