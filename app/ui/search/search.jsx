"use client";

import { useState } from "react";
import Button from "../global/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermDropdown, setSearchTermDropdown] = useState("All");
  const [dropdown, setDropdown] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
    <div className="search-bar-container">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type Keyword"></input>
      <div
        onMouseOver={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className="search-dropdown">
        {searchTermDropdown} <span className="chevron bottom"></span>
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
  );
}
