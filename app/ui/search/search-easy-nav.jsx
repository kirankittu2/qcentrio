"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EasyNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const links = [
    "Blockchain",
    "Cloud Security",
    "Generative AI",
    "Data Analytics",
    "Business Intelligence",
    "ERP Solutions",
    "Salesforce",
  ];

  function handleSearch(e) {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("q", e.target.textContent.toLowerCase());
    params.set("type", "all");
    replace(`${pathname}?${params.toString()}`);
  }

  const currentSearchParam = new URLSearchParams(searchParams).get("q");

  return (
    <div className="easy-nav-section">
      <div className="easy-nav-links ">
        <h2>TOP SEARCH</h2>
        {links.map((link, index) => {
          const linkLowerCase = link.toLowerCase();
          return (
            <p
              onClick={handleSearch}
              key={index}
              className={currentSearchParam === linkLowerCase ? "active" : ""}>
              {link}
            </p>
          );
        })}
      </div>
    </div>
  );
}
