import { searchBar } from "@/app/lib/data";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Search from "@/app/ui/search/search";
import SearchMain from "@/app/ui/search/search-main";

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
      <SearchMain data={data} page={page} searchParams={searchParams} />
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
