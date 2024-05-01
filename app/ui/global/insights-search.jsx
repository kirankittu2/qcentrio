"use client";

import Image from "next/image";
import search from "@/public/search.svg";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function InsightsSearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("item", term);
    } else {
      params.delete("item");
    }
    replace(`${pathname}?${params.toString()}#articles`);
  }, 300);

  return (
    <div className="search-container">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        className="search"
        placeholder="Search Keywords"></input>
      <Image className="input-icon" src={search} alt="" />
    </div>
  );
}
