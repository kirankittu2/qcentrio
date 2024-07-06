"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import menu from "@/public/menu.svg";
import { useEffect, useState } from "react";
import close from "@/public/close.svg";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavLinks({ setServiceHovered, servicesHovered }) {
  const [resourcesHovered, setResHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams().get("q");
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflowY = "hidden";
      const menu = document.querySelector(".mobile-menu-container");
      menu.classList.add("active");
    } else {
      document.documentElement.style.overflow = "auto";
      const menu = document.querySelector(".mobile-menu-container");
      menu.classList.remove("active");
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [searchParams]);

  function openMenu() {
    setOpen(!open);
  }

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
        data-option="link"
        onClick={(event) => {
          if (
            event.target.getAttribute("data-option") == "link" &&
            servicesHovered == false
          ) {
            setServiceHovered(true);
          }

          if (pathname !== "/offerings" && servicesHovered == true) {
            router.push("/offerings");
          }

          if (pathname == "/offerings" && servicesHovered == true) {
            setServiceHovered(false);
          }
        }}
        className={`main-nav-link ${
          pathname.includes("/offerings") ? "active" : ""
        }`}>
        <div data-option="link" className="link-with-down-arrow">
          Offerings
          <span
            data-option="link"
            className={`chevron bottom active ${
              servicesHovered ? "rotate-180" : "rotate-0"
            }`}></span>
        </div>
      </li>
      <li
        className={`main-nav-link ${pathname == "/products" ? "active" : ""}`}>
        <Link href="/products">Products</Link>
      </li>
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
        </Link>
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
      <li onClick={openMenu} className="mobile-nav-button">
        {open ? <Image src={close} alt="" /> : <Image src={menu} alt="" />}
      </li>
    </>
  );
}
