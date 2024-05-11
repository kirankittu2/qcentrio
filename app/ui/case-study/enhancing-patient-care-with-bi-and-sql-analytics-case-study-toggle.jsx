"use client";

import Image from "next/image";
import context1 from "@/public/context-1.png";
import context2 from "@/public/context-2.png";
import analytics1 from "@/public/analytics-1.png";
import analytics2 from "@/public/analytics-2.png";
import analytics3 from "@/public/analytics-3.png";
import analytics4 from "@/public/analytics-4.png";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function EnhancingPatientCareWithBIandsSQLAnalytics() {
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
          The client, a US-based business, provides software solutions to over
          200 healthcare centers and retirement homes.
        </h2>
        <p className="section-content ">
          Their software assists in processing data related to patients and
          medication and generates various types of reports. To enhance their
          services, the client partnered with Qcentrio, a company specializing
          in business intelligence (BI) and analytics.
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
          The client's Java data management and reporting application needed a
          revamp to improve population health analytics and enable prompt
          reporting.
        </h2>
        <p className="">
          The goal was to provide healthcare centers with faster and more
          accurate insights into patient care, medication management, and
          operational efficiency.
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
            Qcentrio's BI implementation team developed an analytical Microsoft
            SQL Server data warehouse.
          </h2>
          <p className="section-content ">
            This warehouse utilized a Transact-SQL script to load data from a
            consolidated relational database, amalgamating information from 200
            separate databases totaling 12GB during development.
          </p>
          <p className="">
            With the new data warehouse in place, Qcentrio's BI developers
            created reports using JReport, a Java-based reporting tool. The
            reports covered various aspects of healthcare management, including:
          </p>

          <div className="tags-container ">
            <div className="tag">Medication Classification</div>
            <div className="tag">Missed Medications</div>
            <div className="tag">Hospital Readmissions</div>
            <div className="tag">Employee Performance</div>
            <div className="tag">Community Marketing Activity Summary</div>
          </div>
        </div>
        <div className="case-study-solution-row-1-column-2">
          <div className="case-study-solution-technology-block ">
            <h2>TECHNOLOGIES AND TOOLS USED</h2>
            <ul>
              <li>Microsoft SQL Server</li>
              <li>Transact-SQL</li>
              <li>JReport</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-[30px] impact">
        <h2 className="general-text-bold ">BUSINESS IMPACT</h2>
        <div className="case-study-image-showcase">
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
        </div>
      </div>
      <div className="conclusion-container">
        <h2 className="general-text-bold ">CONCLUSION</h2>
        <p className="">
          <strong>Improved Management Processes:</strong> The new system's
          prompt analytics reports allow healthcare centers and retirement homes
          to benefit from improved management processes.
        </p>
        <p className="">
          <strong>Enhanced Patient Care:</strong> With more accurate and timely
          data on medication management and patient health, healthcare providers
          can make better-informed decisions, leading to enhanced patient care.
        </p>
        <p className="">
          <strong>Future Plans:</strong> Qcentrio and the client are planning to
          develop OLAP (Online Analytical Processing) cubes for advanced
          healthcare data analytics and information processing. This will
          further enhance the capabilities of the BI solution, providing even
          deeper insights into healthcare operations.
        </p>
      </div>
    </div>
  );
}
