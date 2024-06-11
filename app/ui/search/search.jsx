"use client";

import { useEffect, useState } from "react";
import Button from "../global/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ item }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermDropdown, setSearchTermDropdown] = useState("All");
  const [dropdown, setDropdown] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    setSearchTerm(
      capitalizeEveryWord(searchParams.get("q") ? searchParams.get("q") : "")
    );
  }, [searchParams]);

  function capitalizeEveryWord(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  function sumbitSearch() {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (searchTerm) {
      params.set("q", searchTerm.toLowerCase());
    } else {
      params.delete("q");
    }

    if (searchTermDropdown) {
      params.set("type", searchTermDropdown.toLowerCase());
    } else {
      params.delete("type");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type Keyword"
          value={searchTerm}></input>
        <div onClick={() => setDropdown(!dropdown)} className="search-dropdown">
          {searchTermDropdown}{" "}
          <span
            className={`chevron bottom ${
              dropdown ? "rotate-180" : "rotate-0"
            }`}></span>
          {dropdown && (
            <div className="search-dropdown-item-list">
              <div
                onClick={(e) => {
                  setDropdown(false);
                  setSearchTermDropdown(e.target.textContent);
                }}
                className="search-dropdown-item">
                All
              </div>
              <div
                onClick={(e) => {
                  setDropdown(false);
                  setSearchTermDropdown(e.target.textContent);
                }}
                className="search-dropdown-item">
                Perspectives
              </div>
              <div
                onClick={(e) => {
                  setDropdown(false);
                  setSearchTermDropdown(e.target.textContent);
                }}
                className="search-dropdown-item">
                Offerings
              </div>
              <div
                onClick={(e) => {
                  setDropdown(false);
                  setSearchTermDropdown(e.target.textContent);
                }}
                className="search-dropdown-item">
                Case Studies
              </div>
            </div>
          )}
        </div>
        <Button onClick={sumbitSearch} name="Search" />
      </div>
    </div>
  );
}
