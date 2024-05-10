"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import tri from "@/public/up-tri.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavLinks({ setServiceHovered, servicesHovered }) {
  const [resourcesHovered, setResHovered] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link href="/">
          <div className="main-logo-conatiner">
            <Image fill src={logo} alt="" priority={true} />
          </div>
        </Link>
      </li>
      <li
        onClick={(event) => {
          if (
            event.target.getAttribute("data-option") == "link" &&
            servicesHovered == false
          ) {
            setServiceHovered(true);
          }
          if (pathname == "/offerings" && servicesHovered == true) {
            setServiceHovered(false);
          }
        }}
        className={`main-nav-link ${
          pathname.includes("/offerings") ? "active" : ""
        }`}>
        <Link
          data-option="link"
          className="link-with-down-arrow"
          href={
            servicesHovered && pathname !== "/offerings" ? "/offerings" : ""
          }>
          Offerings
          {/* <span className="w-[8px] h-[8px] relative">
            <Image
              fill
              data-option="link"
              className={`nav-arrow-img transition-all mt-[-2px] ${
                servicesHovered
                  ? "rotate-[299deg] mt-[1px]"
                  : "rotate-[240deg] "
              }`}
              src={tri}
              alt=""
            />
          </span> */}
          <span
            data-option="link"
            className={`chevron bottom active ${
              servicesHovered ? "rotate-180" : "rotate-0"
            }`}></span>
        </Link>
      </li>
      {/* <li
        className={`main-nav-link ${pathname == "/products" ? "active" : ""}`}>
        <Link href="/products">Products</Link>
      </li> */}
      <li
        className={`main-nav-link ${
          pathname == "/industries" ? "active" : ""
        }`}>
        <Link href="/industries">Industries</Link>
      </li>
      <li
        onClick={(event) => {
          if (event.target.getAttribute("data-option") == "link") {
            setResHovered(!resourcesHovered);
          }
          if (servicesHovered == true) {
            setServiceHovered(!servicesHovered);
          }
        }}
        className={`main-nav-link ${
          pathname.includes("/insights") ? "active" : ""
        }`}>
        <Link
          data-option="link"
          className={`link-with-down-arrow `}
          href="/insights">
          Insights
          {/* <span>
            <Image
              data-option="link"
              className={`nav-arrow-img ${
                resourcesHovered ? "rotate-[299deg]" : "rotate-0"
              }`}
              src={tri}
              alt=""
            />
          </span> */}
        </Link>
        {/* {resourcesHovered && (
          <div className="nav-options p-[20px]">
            <Link href="/case-study">
              <div className="nav-option-link">Case Studies</div>
            </Link>
            <div className="nav-option-link">Thought Leadership</div>
            <Link href="/perspectives?type=perspectives">
              <div className="nav-option-link">Perspectives</div>
            </Link>
          </div>
        )} */}
      </li>
      <li
        className={`main-nav-link ${pathname == "/about-us" ? "active" : ""}`}>
        <Link href="/about-us">About Us</Link>
      </li>
      <li className={`main-nav-link ${pathname == "/careers" ? "active" : ""}`}>
        <Link href="/careers">Careers</Link>
      </li>
      <li className="mr-[20px] ml-auto search-list-item">
        <Link href="/contact-us">
          <Button name="Contact Us" />
        </Link>
      </li>
      <li className="nav-contact-btn">
        <Link href="/search">
          <div className="search-icon-container">
            <div className="search-icon-inner-container">
              <Image fill className="search-input-icon" src={search} alt="" />
            </div>
          </div>
        </Link>
      </li>
      <li className="mobile-nav-button">M</li>
    </>
  );
}
