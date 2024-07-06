"use client";

import Image from "next/image";
import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function EnhancingPatientCareWithBIandsSQLAnalytics({
  caseStudyContent,
}) {
  const [context, togggleContext] = useState(true);
  const [challenges, togggleChallenges] = useState(true);
  const [solution, togggleSolution] = useState(true);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
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

    observeElements(".case-study-toogle-content-container h2", "slideup");
    observeElements(".case-study-toogle-content .dynamic-data > p", "slideup");

    observeElements(
      ".case-study-solution-row-1-column-1 .dynamic-data > p",
      "slideup"
    );
    observeElements(
      ".case-study-solution-content-container .dynamic-data h2",
      "slideup"
    );
    observeElements(".case-study-toogle-content-highlight", "slideup");
    observeElements(".case-study-toogle-content-image img", "slideup");
    observeElements(".tags-container .tag", "slideup");
    observeElements(".case-study-solution-technology-block", "slideup");
    observeElements(".case-study-image-showcase-holder", "slideup");
    observeElements(
      ".case-study-solution-content-container .impact > h2",
      "slideup"
    );
    observeElements(".conclusion-container h2", "slideup");
    observeElements(".conclusion-container p", "slideup");
  }, [context, challenges, solution]);

  return (
    <div className="case-study-showcase-container mb-[50px]">
      <div className="case-study-showcase-toggle-container">
        <div className="case-study-toogle-button-container">
          <div
            onClick={() => togggleContext(!context)}
            className={`case-study-toogle-button ${
              context
                ? "bg-[#089768] text-white"
                : "bg-[#F3F3F3] text-[#089768]"
            }`}>
            <div className="breadcrump">
              01 <span></span> CONTEXT
            </div>
            {context && <Image src={uptri} alt="" />}
            {!context && <Image src={downtri} alt="" />}
          </div>
        </div>
        {context && <ContextContent caseStudyContent={caseStudyContent} />}
      </div>
      <div className="case-study-showcase-toggle-container">
        <div className="case-study-toogle-button-container">
          <div
            onClick={() => togggleChallenges(!challenges)}
            className={`case-study-toogle-button ${
              challenges
                ? "bg-[#089768] text-white"
                : "bg-[#F3F3F3] text-[#089768]"
            }`}>
            <div className="breadcrump">
              02 <span></span> CHALLENGE
            </div>
            {challenges && <Image src={uptri} alt="" />}
            {!challenges && <Image src={downtri} alt="" />}
          </div>
        </div>
        {challenges && <ChallengeContent caseStudyContent={caseStudyContent} />}
      </div>
      <div className="case-study-showcase-toggle-container">
        <div className="case-study-toogle-button-container">
          <div
            onClick={() => togggleSolution(!solution)}
            className={`case-study-toogle-button ${
              solution
                ? "bg-[#089768] text-white"
                : "bg-[#F3F3F3] text-[#089768]"
            }`}>
            <div className="breadcrump">
              03 <span></span> SOLUTION
            </div>
            {solution && <Image src={uptri} alt="" />}
            {!solution && <Image src={downtri} alt="" />}
          </div>
        </div>
        {solution && (
          <>
            <div className="case-study-solution case-study-toogle-content-container">
              <div className="case-study-toogle-content-highlight ">
                SOLUTION
              </div>
              <SolutionContent caseStudyContent={caseStudyContent} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ContextContent({ caseStudyContent }) {
  return (
    <div className="case-study-toogle-content-container">
      <div className="case-study-toogle-content-image ">
        <Image
          width={398}
          height={398}
          src={caseStudyContent["context-image"]}
          alt=""
        />
      </div>
      <div className="case-study-toogle-content">
        <div className="case-study-toogle-content-highlight ">
          CLIENT CONTEXT
        </div>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent.context }}
        />
      </div>
    </div>
  );
}

function ChallengeContent({ caseStudyContent }) {
  return (
    <div className="case-study-toogle-content-container">
      <div className="case-study-toogle-content-image ">
        <Image
          width={398}
          height={398}
          src={caseStudyContent["challenge-image"]}
          alt=""
        />
      </div>

      <div className="case-study-toogle-content">
        <div className="case-study-toogle-content-highlight ">CHALLENGES</div>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent.challenge }}
        />
      </div>
    </div>
  );
}

function SolutionContent({ caseStudyContent }) {
  const tagStrings = caseStudyContent.tags;
  const tags = tagStrings.split(",");

  const imageStrings = caseStudyContent["impact-images"];
  const images = imageStrings.split(",");

  return (
    <div className="case-study-solution-content-container">
      <div className="case-study-solution-row-1">
        <div className="case-study-solution-row-1-column-1">
          <div
            className="dynamic-data"
            dangerouslySetInnerHTML={{ __html: caseStudyContent.solution }}
          />
          <div className="tags-container ">
            {tags.map((tag, index) => {
              return (
                <div key={index} className="tag">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className="case-study-solution-row-1-column-2">
          <div
            className="case-study-solution-technology-block"
            dangerouslySetInnerHTML={{ __html: caseStudyContent.technologies }}
          />
        </div>
      </div>
      <div className="mb-[30px] impact">
        <h2 className="general-text-bold ">BUSINESS IMPACT</h2>
        <div className="case-study-image-showcase">
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold">REFERRAL REVENUE SOURCES</h2>
            <Image width={678} height={426} src={images[0]} alt="" />
          </div>
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold"></h2>
            <Image width={392} height={426} src={images[1]} alt="" />
          </div>
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold"></h2>
            <Image width={1163} height={445} src={images[2]} alt="" />
          </div>
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold">LENGTH OF STAY</h2>
            <Image width={1163} height={436} src={images[3]} alt="" />
          </div>
        </div>
      </div>
      <div className="conclusion-container">
        <h2 className="general-text-bold ">CONCLUSION</h2>
        <div
          dangerouslySetInnerHTML={{ __html: caseStudyContent.conclusion }}
        />
      </div>
    </div>
  );
}
