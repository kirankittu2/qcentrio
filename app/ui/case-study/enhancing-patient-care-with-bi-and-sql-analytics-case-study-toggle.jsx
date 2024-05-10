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
import { useState } from "react";

export default function EnhancingPatientCareWithBIandsSQLAnalytics() {
  const [context, togggleContext] = useState(true);
  const [challenges, togggleChallenges] = useState(true);
  const [solution, togggleSolution] = useState(true);

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
              <div
                data-option="up"
                className="case-study-toogle-content-highlight animate animate-hidden">
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
      <div
        data-option="up"
        className="case-study-toogle-content-image animate animate-hidden">
        <Image src={context1} alt="" />
      </div>
      <div className="case-study-toogle-content">
        <div
          data-option="up"
          className="case-study-toogle-content-highlight animate animate-hidden">
          CLIENT CONTEXT
        </div>
        <h2 data-option="up" className="section-heading animate animate-hidden">
          The client, a US-based business, provides software solutions to over
          200 healthcare centers and retirement homes.
        </h2>
        <p data-option="up" className="section-content animate animate-hidden">
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
      <div
        data-option="up"
        className="case-study-toogle-content-image animate animate-hidden">
        <Image src={context2} alt="" />
      </div>

      <div className="case-study-toogle-content">
        <div
          data-option="up"
          className="case-study-toogle-content-highlight animate animate-hidden">
          CHALLENGES
        </div>
        <h2 data-option="up" className="section-heading animate animate-hidden">
          The client's Java data management and reporting application needed a
          revamp to improve population health analytics and enable prompt
          reporting.
        </h2>
        <p data-option="up" className="animate animate-hidden">
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
          <h2
            data-option="up"
            className="section-heading animate animate-hidden">
            Qcentrio's BI implementation team developed an analytical Microsoft
            SQL Server data warehouse.
          </h2>
          <p
            data-option="up"
            className="section-content animate animate-hidden">
            This warehouse utilized a Transact-SQL script to load data from a
            consolidated relational database, amalgamating information from 200
            separate databases totaling 12GB during development.
          </p>
          <p data-option="up" className="animate animate-hidden">
            With the new data warehouse in place, Qcentrio's BI developers
            created reports using JReport, a Java-based reporting tool. The
            reports covered various aspects of healthcare management, including:
          </p>

          <div
            data-option="up"
            className="tags-container animate animate-hidden">
            <div className="tag">Medication Classification</div>
            <div className="tag">Missed Medications</div>
            <div className="tag">Hospital Readmissions</div>
            <div className="tag">Employee Performance</div>
            <div className="tag">Community Marketing Activity Summary</div>
          </div>
        </div>
        <div className="case-study-solution-row-1-column-2">
          <div
            data-option="up"
            className="case-study-solution-technology-block animate animate-hidden">
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
        <h2
          data-option="up"
          className="general-text-bold animate animate-hidden">
          BUSINESS IMPACT
        </h2>
        <div className="case-study-image-showcase">
          <div
            data-option="up"
            className="case-study-image-showcase-holder animate animate-hidden">
            <h2 className="general-text-bold">REFERRAL REVENUE SOURCES</h2>
            <Image src={analytics1} alt="" />
          </div>
          <div
            data-option="up"
            className="case-study-image-showcase-holder animate animate-hidden">
            <h2 className="general-text-bold"></h2>
            <Image src={analytics2} alt="" />
          </div>
          <div
            data-option="up"
            className="case-study-image-showcase-holder animate animate-hidden">
            <h2 className="general-text-bold"></h2>
            <Image src={analytics3} alt="" />
          </div>
          <div
            data-option="up"
            className="case-study-image-showcase-holder animate animate-hidden">
            <h2 className="general-text-bold">LENGTH OF STAY</h2>
            <Image src={analytics4} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h2
          data-option="up"
          className="general-text-bold animate animate-hidden">
          CONCLUSION
        </h2>
        <p data-option="up" className="animate animate-hidden">
          <strong>Improved Management Processes:</strong> The new system's
          prompt analytics reports allow healthcare centers and retirement homes
          to benefit from improved management processes.
        </p>
        <p data-option="up" className="animate animate-hidden">
          <strong>Enhanced Patient Care:</strong> With more accurate and timely
          data on medication management and patient health, healthcare providers
          can make better-informed decisions, leading to enhanced patient care.
        </p>
        <p data-option="up" className="animate animate-hidden">
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
