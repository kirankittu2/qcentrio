import Pagination from "./pagination";
import Link from "next/link";
import BlogsConatiner from "./blogs-container";
import InsightsSearchBar from "../global/insights-search";

export default function AllBlogs({
  data,
  type,
  page,
  paginationNum,
  searchParams,
}) {
  return (
    <>
      <div id="articles" className="topics-section balance-section">
        <div className="topics-head-and-search mb-[30px]">
          <InsightsSearchBar />
          <div className="most-search-column">
            Most Searched Keywords :
            <Link href="/insights?item=blockchain">
              <span className="keywords">Blockchain,</span>
            </Link>
            <Link href="/insights?item=data management">
              <span className="keywords">Data Management,</span>
            </Link>
            <Link href="/insights?item=pharmaceutical&type=case-study">
              <span className="keywords">Pharmaceutical</span>
            </Link>
          </div>
        </div>
        <h2 className="filter-by-heading">Filter by</h2>
        <div className="topics">
          <Link href="/insights?type=perspectives">
            <div
              className={` topic ${
                type == "perspectives"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              Perspectives
            </div>
          </Link>
          <Link href="/insights?type=case-study">
            <div
              className={` topic ${
                type == "case-study"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              Case Studies
            </div>
          </Link>
          <Link href="/insights">
            <div
              className={` topic ${
                type == "thought-leadership"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              ThoughtLeadership
            </div>
          </Link>
          <Link href="/insights">
            <div
              className={` topic ${
                type == "news"
                  ? "bg-[#089768] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}>
              News / Press Release
            </div>
          </Link>
        </div>
      </div>
      <div className="blog-articles-section blog-section">
        <h2 className="section-heading">
          Latest {type == "perspectives" ? "Perspectives" : ""}
          {type == "case-study" ? "Case Studies" : ""}
        </h2>
        <BlogsConatiner data={data} searchParams={searchParams} />
      </div>
      <Pagination paginationNum={paginationNum} page={page} />
    </>
  );
}
