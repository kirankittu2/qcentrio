"use client";

import Link from "next/link";
import Button from "./ui/global/button";
import NavBarContainer from "./ui/global/nav-bar-container";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="hero">
        <NavBarContainer />
      </div>
      <div className="not-found-content">
        <h1>404</h1>
        <p>UH OH, WE CAN'T FIND THAT PAGE...</p>
        <Link href="/">
          <Button name="Home Page" />
        </Link>
      </div>
      <div className="not-found-footer"></div>
    </div>
  );
}
