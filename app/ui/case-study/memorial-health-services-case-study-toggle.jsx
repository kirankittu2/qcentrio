"use client";

import Image from "next/image";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function Memorial({ caseStudyContent }) {
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
    observeElements(".case-study-toogle-content .dynamic-data  p", "slideup");
    observeElements(
      ".case-study-solution-row-1-column-1 .dynamic-data  p",
      "slideup"
    );
    observeElements(
      ".case-study-solution-content-container .section-heading",
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
    observeElements(
      ".case-study-solution-content-container .impact .dynamic-data  p",
      "slideup"
    );
    observeElements(".conclusion-container h2", "slideup");
    observeElements(".conclusion-container p", "slideup");
    observeElements(".case-study-general-text h2", "slideup");
    observeElements(".case-study-general-text p", "slideup");
    observeElements(".case-study-general-text ul", "slideup");
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
  return (
    <div className="case-study-solution-content-container">
      <div className="case-study-solution-row-1">
        <div className="case-study-solution-row-1-column-1">
          <div
            className="dynamic-data"
            dangerouslySetInnerHTML={{ __html: caseStudyContent.solution }}
          />
        </div>
      </div>
      <div className="mb-[30px] impact">
        <h2 className="general-text-bold">Implementation</h2>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent.impact }}
        />
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Benefits</h2>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent.benefits }}
        />
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Outcome</h2>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent.outcome }}
        />
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Feedback</h2>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent.feedback }}
        />
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Future Plans</h2>
        <div
          className="dynamic-data"
          dangerouslySetInnerHTML={{ __html: caseStudyContent["future-plans"] }}
        />
      </div>
    </div>
  );
}
