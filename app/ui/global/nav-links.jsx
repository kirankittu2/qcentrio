"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import tri from "@/public/up-tri.svg";
import { useState } from "react";
import arrow from "@/public/blog-arrow.svg";
import triWhite from "@/public/up-tri-white.svg";
import whatNew from "@/public/bi-andsql-analytics.png";

export default function NavLinks() {
  const [resourcesHovered, setResHovered] = useState(false);
  const [servicesHovered, setServiceHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const links = [
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
      column2: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
    },
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
      column2: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
    },
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
      column2: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
    },
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
      column2: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
    },
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
      column2: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
    },
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
        {
          title: "Robotic Process Automation Services",
        },
      ],
      column2: [
        {
          title: "Generative AI Solutions and Offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
        },
      ],
    },
  ];

  return (
    <>
      <li>
        <Link href="/">
          <Image src={logo} alt="" />
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
          <span>
            <Image
              data-option="link"
              className={`nav-arrow-img ${
                servicesHovered ? "rotate-[299deg]" : "rotate-0"
              }`}
              src={tri}
              alt=""
            />
          </span>
        </Link>
        {servicesHovered && (
          <div className="nav-options mega-menu">
            <div className="mega-menu-column border-r border-[#707070]/20">
              <h2 className="mega-menu-heading">Our Offerings</h2>
              <div
                data-index="0"
                className={`mega-menu-main-nav-link ${
                  index == 0
                    ? "bg-[#089768] text-white"
                    : "bg-white text-[#404040]"
                }`}
                onClick={() => setIndex(0)}>
                Business Value Enhancement
                {index == 0 && (
                  <span>
                    <Image alt="" src={triWhite} />
                  </span>
                )}
              </div>
              <div
                data-index="1"
                className={`mega-menu-main-nav-link ${
                  index == 1
                    ? "bg-[#089768] text-white"
                    : "bg-white text-[#404040]"
                }`}
                onClick={() => setIndex(1)}>
                Advanced Technology Solutions
                {index == 1 && (
                  <span>
                    <Image alt="" src={triWhite} />
                  </span>
                )}
              </div>
              <div
                data-index="2"
                className={`mega-menu-main-nav-link ${
                  index == 2
                    ? "bg-[#089768] text-white"
                    : "bg-white text-[#404040]"
                }`}
                onClick={() => setIndex(2)}>
                Advisory and Strategic Services
                {index == 2 && (
                  <span>
                    <Image alt="" src={triWhite} />
                  </span>
                )}
              </div>
              <div
                data-index="3"
                className={`mega-menu-main-nav-link ${
                  index == 3
                    ? "bg-[#089768] text-white"
                    : "bg-white text-[#404040]"
                }`}
                onClick={() => setIndex(3)}>
                Business Optimization and Analytics
                {index == 3 && (
                  <span>
                    <Image alt="" src={triWhite} />
                  </span>
                )}
              </div>
              <div
                data-index="4"
                className={`mega-menu-main-nav-link ${
                  index == 4
                    ? "bg-[#089768] text-white"
                    : "bg-white text-[#404040]"
                }`}
                onClick={() => setIndex(4)}>
                Blockchain Services & Solutions
                {index == 4 && (
                  <span>
                    <Image alt="" src={triWhite} />
                  </span>
                )}
              </div>
              <div
                data-index="5"
                className={`mega-menu-main-nav-link ${
                  index == 5
                    ? "bg-[#089768] text-white"
                    : "bg-white text-[#404040]"
                }`}
                onClick={() => setIndex(5)}>
                Cloud Infrastructure & Security Services
                {index == 5 && (
                  <span>
                    <Image alt="" src={triWhite} />
                  </span>
                )}
              </div>
            </div>
            <div className="mega-menu-column mega-menu-middle-column border-r border-[#707070]/20">
              <h2 className="mega-menu-heading ">Sub Services</h2>
              <div className="mega-menu-middle-columns-container">
                <div>
                  {links[index].column1.map((link, i) => {
                    return (
                      <div key={i} className="mega-menu-sub-nav-link">
                        {link.title}
                      </div>
                    );
                  })}
                </div>
                <div>
                  {links[index].column2.map((link, i) => {
                    return (
                      <div key={i} className="mega-menu-sub-nav-link">
                        {link.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mega-menu-column">
              <h2 className="mega-menu-heading ">What's New?</h2>
              <div className="what-new-col-container">
                <Image className="mb-[20px]" src={whatNew} alt="" />
                <div className="what-new-title">
                  Enhancing Patient Care with BI and SQL Analytics at Qcentrio
                </div>
                <Link
                  className="w-fit mt-auto"
                  href="/case-study/enhancing-patient-care-with-bi-and-sql-analytics">
                  <div className="what-new-btn">
                    Learn More
                    <span>
                      <Image src={arrow} alt="" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
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
          href="/perspectives">
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
