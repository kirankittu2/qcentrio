"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import tri from "@/public/up-tri.svg";

export default function NavLinks() {
  return (
    <>
      <li>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
      </li>
      <li className="main-nav-link">
        <Link href="/services">Services</Link>
      </li>
      <li className="main-nav-link">
        <Link href="/industries">Industries</Link>
      </li>
      <li className="main-nav-link link-with-down-arrow">
        <Link href="/resources">
          Resources
          {/* <span>
            <Image src={tri} alt="" />
          </span> */}
        </Link>
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
