import { searchBar } from "@/app/lib/data";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Search from "@/app/ui/search/search";
import SearchMain from "@/app/ui/search/search-main";

export const metadata = {
  title:
    "Enhance Your Search Results with Qcentrio's Cloud Security, RPA, and Blockchain Solutions",
  description:
    "Enhance your browsing experience with Qcentrio - the ultimate search bar. Quickly find what you're looking for with our intelligent algorithms and user-friendly interface.171 characters.",
};

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
  function capitalizeEveryWord(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  return (
    <div className="search-page-heading-section">
      <h1 className="all-results-heading ">
        All Results{" "}
        {searchParams?.q && `for "${capitalizeEveryWord(searchParams.q)}"`}
      </h1>
      <p className="total-results">
        SHOWING {data.startIndex}-{data.startIndex + data.children.length - 1}{" "}
        OF {data.totalResults} RESULTS
      </p>
    </div>
  );
}
