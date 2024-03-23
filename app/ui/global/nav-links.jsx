"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import tri from "@/public/up-tri.svg";
import { useState } from "react";

export default function NavLinks() {
  const [resourcesHovered, setResHovered] = useState(false);
  const [servicesHovered, setServiceHovered] = useState(false);

  return (
    <>
      <li>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
      </li>
      <li
        onClick={() => {
          setServiceHovered(!servicesHovered);
          if (resourcesHovered == true) {
            setResHovered(!resourcesHovered);
          }
        }}
        className="main-nav-link">
        <Link className="link-with-down-arrow" href="">
          Services
          <span>
            <Image
              className={`nav-arrow-img ${
                servicesHovered ? "rotate-0" : "rotate-[299deg]"
              }`}
              src={tri}
              alt=""
            />
          </span>
        </Link>
        {servicesHovered && <div className="nav-options large">2342354</div>}
      </li>
      <li className="main-nav-link">
        <Link href="/industries">Industries</Link>
      </li>
      <li
        onClick={() => {
          setResHovered(!resourcesHovered);
          if (servicesHovered == true) {
            setServiceHovered(!servicesHovered);
          }
        }}
        className="main-nav-link">
        <Link className="link-with-down-arrow" href="">
          Resources
          <span>
            <Image
              className={`nav-arrow-img ${
                resourcesHovered ? "rotate-0" : "rotate-[299deg]"
              }`}
              src={tri}
              alt=""
            />
          </span>
        </Link>
        {resourcesHovered && (
          <div className="nav-options">
            <Link href="/case-study">
              <div className="nav-option-link">Case Studies</div>
            </Link>
            <div className="nav-option-link">Thought Leadership</div>
            <Link href="blogs">
              <div className="nav-option-link">Insights</div>
            </Link>
          </div>
        )}
      </li>
      <li className="main-nav-link">
        <Link href="/about-us">About Us</Link>
      </li>
      <li className="main-nav-link">
        <Link href="/careers">Careers</Link>
      </li>
      <li className="mr-[20px]">
        <div className="search-container">
          <input className="search" placeholder="Search"></input>
          <Image className="input-icon" src={search} alt="" />
        </div>
      </li>
      <li>
        <Link href="/contact-us">
          <Button name="Contact Us" />
        </Link>
      </li>
    </>
  );
}
