import blog1 from "@/public/blog-1.png";
import Image from "next/image";

import blogArrow from "@/public/blog-arrow.svg";
import Pagination from "./pagination";
import Link from "next/link";
import SearchBar from "../global/search";

export default function AllBlogs({ data, type }) {
  return (
    <>
      <div id="articles" className="topics-section balance-section">
        <div className="topics-head-and-search mb-[30px]">
          <SearchBar />
          <div className="most-search-column">
            Most Searched Keywords :
            <span className="keywords">Case Studies</span>
            <span className="keywords">Thought Leadership Papers,</span>
            <span className="keywords">Cloud Migration</span>
          </div>
        </div>
        <h2 className="filter-by-heading">Filter by</h2>
        <div className="topics">
          <Link href="/perspectives?type=perspectives#articles">
            <div
              className={` topic ${
                type == "perspectives"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              Perspectives
            </div>
          </Link>
          <Link href="/perspectives?type=case-study#articles">
            <div
              className={` topic ${
                type == "case-study"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              Case Studies
            </div>
          </Link>
          <div className="topic">ThoughtLeadership</div>
          <div className="topic">News / Press Release</div>
        </div>
      </div>
      <div className="blog-articles-section blog-section">
        <h2 className="section-heading">Latest Blog Articles</h2>
        <div className="blogs-container">
          {data == null || data == undefined || data.length == 0
            ? "No Data Found"
            : data.map((item, index) => {
                return (
                  <div key={index} className="card">
                    <div>
                      <Image src={blog1} alt="" />
                    </div>
                    <div className="blog-card-heading">
                      <h2 className="card-heading">{item.title}</h2>
                    </div>
                    <div className="blog-card-content-container">
                      <p className="section-content">{item.content}</p>
                      <Link href={item.link}>
                        <div className="blogs-btn">
                          Learn More
                          <span>
                            <Image
                              style={{ width: "25px" }}
                              src={blogArrow}
                              alt=""
                            />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Pagination />
    </>
  );
}
