import { searchBar } from "@/app/lib/data";
import Pagination from "@/app/ui/blogs/pagination";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Search from "@/app/ui/search/search";
import EasyNav from "@/app/ui/search/search-easy-nav";
import Link from "next/link";

export default async function Products({ searchParams }) {
  const item = searchParams?.q || "";
  const type = searchParams?.type || null;
  const page = searchParams?.page || 1;
  const data = await searchBar(item, type, page);

  return (
    <div>
      <div className="hero search-page">
        <NavBarContainer />
        <Search item={item} />
      </div>
      <SearchHeading data={data} searchParams={searchParams} page={page} />
      <SearchMain data={data} page={page} />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function SearchHeading({ searchParams, data }) {
  return (
    <div className="search-page-heading-section">
      <h1 className="all-results-heading ">
        All Results {searchParams?.q && `for "${searchParams.q}"`}
      </h1>
      <p className="total-results">
        SHOWING {data.startIndex}-{data.startIndex + data.children.length - 1}{" "}
        OF {data.totalResults} RESULTS
      </p>
    </div>
  );
}

function SearchMain({ data, page }) {
  return (
    <div className="search-listing-section">
      <div className="search-listing">
        {data && data.children.length > 0 ? (
          data.children.map((item, index) => (
            <div key={index} className="search-result">
              <div className="breadcrump">
                {item.type} <span></span>
                23 NOVEMBER 2020
              </div>
              <Link href={item.link}>
                <h2 className="search-result-head">{item.title}</h2>
              </Link>
              <p className="search-result-content">{item.content1}</p>
            </div>
          ))
        ) : (
          <div>No Results Found</div>
        )}
        <Pagination paginationNum={data.pageNumber} page={page} />
      </div>
      <EasyNav />
    </div>
  );
}
