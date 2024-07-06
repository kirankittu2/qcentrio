"use client";

import Image from "next/image";
import search from "@/public/search.svg";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InsightsSearchBar({ searchParam }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState("");

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("item", term);
    } else {
      params.delete("item");
    }
    replace(`${pathname}?${params.toString()}#articles`);
  }, 300);

  useEffect(() => {
    setValue(searchParam.item ? searchParam.item : "");
  }, [searchParam]);

  return (
    <div className="search-container">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        className="search"
        defaultValue={value}
        placeholder="Search Keywords"></input>
      <Image className="input-icon" src={search} alt="" />
    </div>
  );
}
