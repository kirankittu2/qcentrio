"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ paginationNum }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function generateLink(num) {
    const params = new URLSearchParams(searchParams);
    if (params.has("page")) {
      params.set("page", num.toString());
    } else {
      params.append("page", num.toString());
    }
    return `${pathname}?${params.toString()}#articles`;
  }

  const paginationButtons = [];
  for (let i = 1; i <= paginationNum; i++) {
    paginationButtons.push(
      <Link key={i} href={generateLink(i)}>
        <div className="pagination-btn">{i}</div>
      </Link>
    );
  }
  return <div className="pagination-container">{paginationButtons}</div>;
}
