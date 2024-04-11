import blog1 from "@/public/blog-1.png";
import Image from "next/image";
import blogArrow from "@/public/blog-arrow.svg";
import Pagination from "./pagination";
import Link from "next/link";
import SearchBar from "../global/search";
import BlogsConatiner from "./blogs-container";

export default function AllBlogs({ data, type, page, paginationNum }) {
  return (
    <>
      <div id="articles" className="topics-section balance-section">
        <div className="topics-head-and-search mb-[30px]">
          <SearchBar />
          <div className="most-search-column">
            Most Searched Keywords :
            <span className="keywords">Case Studies,</span>
            <span className="keywords">Thought Leadership Papers,</span>
            <span className="keywords">Cloud Migration</span>
          </div>
        </div>
        <h2 className="filter-by-heading">Filter by</h2>
        <div className="topics">
          <Link href="/insights?type=perspectives#articles">
            <div
              className={` topic ${
                type == "perspectives"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              Perspectives
            </div>
          </Link>
          <Link href="/insights?type=case-study#articles">
            <div
              className={` topic ${
                type == "case-study"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              Case Studies
            </div>
          </Link>
          <div
            className={` topic ${
              type == "thought-leadership"
                ? "bg-[#089768] text-white"
                : "bg-[#F9F9F9] text-black"
            }`}>
            ThoughtLeadership
          </div>
          <div
            className={` topic ${
              type == "news"
                ? "bg-[#089768] text-white"
                : "bg-[#F9F9F9] text-black"
            }`}>
            News / Press Release
          </div>
        </div>
      </div>
      <div className="blog-articles-section blog-section">
        <h2 className="section-heading">
          Latest {type == "perspectives" ? "Perspectives" : ""}
          {type == "case-study" ? "Case Studies" : ""}
        </h2>
        <BlogsConatiner data={data} />
      </div>
      <Pagination paginationNum={paginationNum} page={page} />
    </>
  );
}
