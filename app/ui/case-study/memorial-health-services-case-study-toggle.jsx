"use client";

import Image from "next/image";
import context1 from "@/public/memorial/image-01.webp";
import context2 from "@/public/memorial/image-02.webp";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function Memorial() {
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
          Memorial Health Services (MHS), a leading healthcare network in
          Southern California, comprises six medical facilities offering a full
          range of services from rehabilitation to emergency care.
        </h2>
        <p className="section-content ">
          The organization employs over 8,000 staff across its extensive
          network, posing substantial challenges in managing a complex and
          dispersed IT infrastructure.
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
          Before upgrading its system, MHS used separate Access databases across
          its facilities to track IT assets manually.
        </h2>
        <p className="">
          This resulted in inefficiencies and a strain on resources, as there
          was no unified system to manage assets or help desk requests
          effectively. The lack of a central system made it difficult to track
          and prioritize service requests and manage the increasing number of IT
          assets across locations.
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
          <h2 className="section-heading ">
            MHS required a flexible, scalable, and efficient help desk solution
            that would also comply with HIPAA standards.
          </h2>
          <p className="section-content ">
            After reviewing several options, including FrontRange HEAT and BMC
            Magic, MHS chose BMC Track-It! for its superior customization
            capabilities, ease of use, and automated workflow features.
          </p>

          {/* <div className="tags-container ">
            <div className="tag">Medication Classification</div>
            <div className="tag">Missed Medications</div>
            <div className="tag">Hospital Readmissions</div>
            <div className="tag">Employee Performance</div>
            <div className="tag">Community Marketing Activity Summary</div>
          </div> */}
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
        {/* <div className="case-study-image-showcase">
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold">REFERRAL REVENUE SOURCES</h2>
            <Image src={analytics1} alt="" />
          </div>
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold"></h2>
            <Image src={analytics2} alt="" />
          </div>
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold"></h2>
            <Image src={analytics3} alt="" />
          </div>
          <div className="case-study-image-showcase-holder ">
            <h2 className="general-text-bold">LENGTH OF STAY</h2>
            <Image src={analytics4} alt="" />
          </div>
        </div> */}
        <p>
          Implemented in 1999, BMC Track-It! was operational within eight hours,
          revolutionizing MHS’s IT service management. The centralized system
          allowed for real-time tracking of assets and automated routing of help
          desk requests to appropriate technicians, significantly enhancing
          operational efficiency.
        </p>
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Benefits</h2>
        <p>BMC Track-It brought multiple improvements:</p>
        <ul>
          <li>
            <strong>
              Workflow and Service Level Agreement (SLA) Management:
            </strong>{" "}
            Improved agent workflows and automated processes allowed faster
            resolution of IT issues.
          </li>
          <li>
            <strong>Asset Management:</strong> Real-time tracking and automatic
            discovery of assets across all facilities improved the management of
            IT resources.
          </li>
          <li>
            <strong>Compliance and Security:</strong> The system facilitated
            documentation of HIPAA security incidents, aiding compliance and
            improving incident response.
          </li>
          <li>
            <strong>Remote Diagnostics:</strong> With the BMC Remote add-on,
            technicians could diagnose and solve problems remotely, reducing the
            need for onsite visits and thereby saving costs and time.
          </li>
        </ul>
      </div>
      <div className="case-study-general-text">
        <h2 className="general-text-bold">Outcome</h2>
        <p>
          Since adopting BMC Track-It, MHS has seen a marked increase in
          efficiency and problem resolution. The IT department now manages
          requests more effectively, with enhanced reporting capabilities
          providing insights into resolved and unresolved issues, and overall
          performance metrics. These improvements have significantly contributed
          to better service levels and increased customer satisfaction, which
          consistently scores above 95%.
        </p>
      </div>
      <div className="case-study-general-text">
        <h2>Feedback</h2>
        <p>
          Carolyn Phinsee, Project Manager at Memorial Health Services, noted,
          “The BMC Track-It! the solution was far superior to other products we
          considered. The ease of use and customization were key drivers for our
          decision, and we realized the benefits immediately after
          implementation.”
        </p>
      </div>
      <div className="case-study-general-text">
        <h2>Future Plans</h2>
        <p>
          Impressed with the results, MHS plans to continue upgrading to the
          latest versions of BMC Track-It! to leverage new features and ensure
          continued high service levels for their customers and patients.
        </p>
      </div>
    </div>
  );
}
