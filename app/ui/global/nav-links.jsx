"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import tri from "@/public/up-tri.svg";
import { useState } from "react";

export default function NavLinks({ setServiceHovered, servicesHovered }) {
  const [resourcesHovered, setResHovered] = useState(false);

  return (
    <>
      <li>
        <Link href="/">
          <div className="main-logo-conatiner">
            <Image fill src={logo} alt="" />
          </div>
        </Link>
      </li>
      <li
        onClick={(event) => {
          if (event.target.getAttribute("data-option") == "link") {
            setServiceHovered(!servicesHovered);
          }
          if (resourcesHovered == true) {
            setResHovered(!resourcesHovered);
          }
        }}
        className="main-nav-link">
        <Link data-option="link" className="link-with-down-arrow" href="">
          Offerings
          <span className="w-[8px] h-[8px] relative">
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
          </span>
        </Link>
      </li>
      <li className="main-nav-link">
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
        className="main-nav-link">
        <Link
          data-option="link"
          className="link-with-down-arrow"
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
      <li className="main-nav-link">
        <Link href="/about-us">About Us</Link>
      </li>
      <li className="main-nav-link">
        <Link href="/careers">Careers</Link>
      </li>
      <li className="mr-[20px] ml-auto search-list-item">
        <div className="search-container">
          <input className="search" placeholder="Search"></input>
          <Image className="input-icon" src={search} alt="" />
        </div>
      </li>
      <li className="nav-contact-btn">
        <Link href="/contact-us">
          <Button name="Contact Us" />
        </Link>
      </li>
      <li className="ml-[20px] mobile-nav-button">M</li>
    </>
  );
}
