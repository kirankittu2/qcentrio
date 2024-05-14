"use client";

import Image from "next/image";
import context1 from "@/public/san-matreo/image-01.webp";
import context2 from "@/public/san-matreo/image-02.webp";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function SanMateo() {
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
    observeElements(".case-study-toogle-content > p", "slideup");
    observeElements(".case-study-solution-row-1-column-1 > p", "slideup");
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
      ".case-study-solution-content-container .impact > p",
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
        {context && <ContextContent />}
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
        {challenges && <ChallengeContent />}
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
              <SolutionContent />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ContextContent() {
  return (
    <div className="case-study-toogle-content-container">
      <div className="case-study-toogle-content-image ">
        <Image src={context1} alt="" />
      </div>
      <div className="case-study-toogle-content">
        <div className="case-study-toogle-content-highlight ">
          CLIENT CONTEXT
        </div>
        <h2 className="section-heading ">
          A major urban municipality, managing a workforce across 22 locations
          and supporting a population of 90,000, faced significant challenges
          with its help desk system.
        </h2>
        <p className="section-content ">
          The existing software was poorly implemented, leading to
          inefficiencies such as lost work orders and a lack of clarity on
          request status for users.
        </p>
      </div>
    </div>
  );
}

function ChallengeContent() {
  return (
    <div className="case-study-toogle-content-container">
      <div className="case-study-toogle-content-image ">
        <Image src={context2} alt="" />
      </div>

      <div className="case-study-toogle-content">
        <div className="case-study-toogle-content-highlight ">CHALLENGES</div>
        <h2 className="section-heading ">
          The Senior Project Manager identified the core issue: the staff
          resorted to paper tickets because the previous system was not
          user-friendly.
        </h2>
        <p className="">
          This inefficiency led to delays and confusion, impacting the
          municipality's capability to serve its residents effectively. The
          primary objective was to enhance customer service through a system
          that boosted communication and transparency for users.
        </p>
      </div>
    </div>
  );
}

function SolutionContent() {
  return (
    <div className="case-study-solution-content-container">
      <div className="case-study-solution-row-1">
        <div className="case-study-solution-row-1-column-1">
          {/* <h2 className="section-heading ">
            Navigating through strict municipal purchasing guidelines, the
            search for a new system included site visits and evaluations of
            systems used in other cities.
          </h2> */}
          <p className="section-content ">
            Navigating through strict municipal purchasing guidelines, the
            search for a new system included site visits and evaluations of
            systems used in other cities. With the assistance of Qcentrio,
            multiple options were explored, ultimately selecting BMC Track-It
            for its high satisfaction scores across various user groups.
          </p>
        </div>
        {/* <div className="case-study-solution-row-1-column-2">
          <div className="case-study-solution-technology-block ">
            <h2>TECHNOLOGIES AND TOOLS USED</h2>
            <ul>
              <li>Microsoft SQL Server</li>
              <li>Transact-SQL</li>
              <li>JReport</li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="mb-[30px] impact">
        <h2 className="general-text-bold ">Implementation</h2>
        <p>
          Qcentrio played a crucial role in the swift and efficient setup of BMC
          Track-It, which was well-known for its user-friendly interface and
          ease of implementation. The system was up and running within a few
          days, significantly improving the IT department's operation
          efficiency. It facilitated better handling of IT requests via a web
          self-service portal, automatically generating work tickets and
          updating users on the status of their requests.
        </p>
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Benefits</h2>
        <p>Implementing BMC Track-It! brought numerous advantages:</p>
        <ul>
          <li>
            <strong>Cost Efficiency:</strong> Automation of ticket generation
            and asset management curtailed the need for manual processes,
            resulting in significant savings in manpower and costs.
          </li>
          <li>
            <strong>Improved Customer Service:</strong> The web-based service
            portal consistently informed users about the progress of their
            requests, boosting user satisfaction.
          </li>
          <li>
            <strong>Enhanced IT Operations:</strong> Tools like BMC Network
            Monitor and BMC Asset Manager allowed for ongoing monitoring and
            management of IT infrastructure, ensuring security and the currency
            of asset information.
          </li>
          <li>
            <strong>User Empowerment:</strong> The Self Service Plus feature
            decreased reliance on direct calls and empowered users to track and
            manage their requests effectively.
          </li>
        </ul>
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Outcome</h2>
        <p>
          The partnership with Qcentrio led to a more structured and responsive
          IT department. Users encountered fewer delays, the network became
          safer and faster, and the IT staff could address issues more
          proactively. The city reduced expenditures related to manpower and
          external resources, and overall satisfaction among users and IT staff
          surged.
        </p>
      </div>
    </div>
  );
}
