"use client";

const { Suspense, useState, useEffect } = require("react");
const { default: Pagination } = require("../blogs/pagination");
const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
const { default: Button } = require("../global/button");
import arrow from "@/public/white-redirect-arrow.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Jobs({ results, page }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [typeDropdown, setTypeDropdown] = useState("Any");
  const [locationDropdownText, setlocationDropdownText] = useState("Any");
  const [dropdown, setDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const searchCards = document.querySelectorAll(".job");
    searchCards.forEach((element) => {
      if (element.classList.contains("slideup")) {
        element.classList.remove("slideup");
      }
    });
    const observeElements = (selector, className) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      }, options);
      elements.forEach((el) => observer.observe(el));
    };

    observeElements(".job", "slideup");

    setTypeDropdown(
      capitalizeEveryWord(
        searchParams?.get("type") ? searchParams?.get("type") : "Any"
      )
    );
    setlocationDropdownText(
      capitalizeEveryWord(
        searchParams?.get("location") ? searchParams?.get("location") : "Any"
      )
    );
  }, [searchParams]);

  function capitalizeEveryWord(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  function sumbitSearch() {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (title) {
      params.set("title", title.toLowerCase());
    } else {
      params.delete("title");
    }

    if (locationDropdownText) {
      params.set("location", locationDropdownText.toLowerCase());
    } else {
      params.delete("location");
    }

    if (typeDropdown) {
      params.set("type", typeDropdown.toLowerCase());
    } else {
      params.delete("type");
    }

    replace(`${pathname}?${params.toString()}#jobs`);
  }

  return (
    <div id="jobs" className="jobs-section">
      <div>
        <div className="jobs-content">
          <h2
            data-option="strip-slide-up"
            className="jobs-content-heading animate strip-slide-up strip-slide-black">
            Join Us: Be Part of Something Bigger
          </h2>
          <p data-option="up" className="animate animate-hidden">
            If you're passionate about technology and eager to make a
            difference, we'd love to hear from you. Explore our current openings
            and discover how you can contribute to the exciting world of IT
            innovation at Qcentrio.
          </p>
          <Link href="/contact-us">
            <Button name="Contact Us" />
          </Link>
        </div>
        <div className="jobs-main">
          <div className="jobs-main-search-container">
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title / Role"
            />
            {/* <input
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            /> */}
            <div
              onClick={() => {
                setLocationDropdown(!locationDropdown);
                setDropdown(false);
              }}
              className="search-dropdown">
              {locationDropdownText}{" "}
              <span
                className={`chevron bottom ${
                  locationDropdown ? "rotate-180" : "rotate-0"
                }`}></span>
              {locationDropdown && (
                <div className="search-dropdown-item-list">
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Any
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Mumbai
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Chennai
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Bangalore
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Hyderabad
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Pune
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setlocationDropdownText(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Delhi
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                setDropdown(!dropdown);
                setLocationDropdown(false);
              }}
              className="search-dropdown">
              {typeDropdown}{" "}
              <span
                className={`chevron bottom ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}></span>
              {dropdown && (
                <div className="search-dropdown-item-list">
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setTypeDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Any
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setTypeDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Remote
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setTypeDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    On Site
                  </div>
                </div>
              )}
            </div>
            <Button onClick={sumbitSearch} name="Search" />
          </div>
          {results.children.length == 0 ? (
            <p className="job-results-not-found">No Results Found</p>
          ) : (
            results.children.map((job, index) => {
              return (
                <div
                  key={index}
                  data-option="up"
                  className="job animate animate-hidden">
                  <div>
                    <p className="job-location">{job.location}</p>
                    <div className="job-experience">{job.exp} Experience</div>
                    <div className="job-title"> {job.title}</div>
                  </div>
                  <div className="job-link-column">
                    <Link href={job.link}>
                      <div className="job-link">
                        <Image src={arrow} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Suspense>
        <Pagination id="jobs" paginationNum={results.pageNumber} page={page} />
      </Suspense>
    </div>
  );
}
