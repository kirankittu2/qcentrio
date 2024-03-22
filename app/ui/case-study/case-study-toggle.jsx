"use client";

import Image from "next/image";
import context1 from "@/public/context-1.png";
import context2 from "@/public/context-2.png";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useState } from "react";

export default function CaseStudyToggle({ data }) {
  const [context, togggleContext] = useState(true);
  const [challenges, togggleChallenges] = useState(false);
  const [solution, togggleSolution] = useState(false);

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
        {context && (
          <div className="case-study-toogle-content-container">
            <div className="case-study-toogle-content-image">
              <Image src={context1} alt="" />
            </div>

            <div className="case-study-toogle-content">
              <div className="case-study-toogle-content-highlight">
                CLIENT CONTEXT
              </div>
              <h2 className="section-heading">{data.context.heading}</h2>
              <p className="section-content">{data.context.content}</p>
            </div>
          </div>
        )}
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
        {challenges && (
          <div className="case-study-toogle-content-container">
            <div className="case-study-toogle-content-image">
              <Image src={context2} alt="" />
            </div>

            <div className="case-study-toogle-content">
              <div className="case-study-toogle-content-highlight">
                CHALLENGES
              </div>
              <h2 className="section-heading">{data.challenge.heading}</h2>
              <p className="section-content">{data.challenge.content}</p>
            </div>
          </div>
        )}
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
              <div className="case-study-toogle-content-highlight">
                SOLUTION
              </div>
              <div className="case-study-solution-content-container">
                <div className="case-study-solution-row-1">
                  <div className="case-study-solution-row-1-column-1">
                    <h2 className="section-heading">{data.solution.heading}</h2>
                    <p className="section-content">{data.solution.content1}</p>
                    <p className="section-content">{data.solution.content2}</p>
                    <div className="tags-container">
                      {data.solution.tags.map((item, index) => {
                        return (
                          <div key={index} className="tag">
                            {item.title}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="case-study-solution-row-1-column-2">
                    <div className="case-study-solution-technology-block">
                      <h2>{data.solution.technologies.heading}</h2>
                      <ul>
                        {data.solution.technologies.list.map((item, index) => {
                          return <li key={index}>{item.content}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mb-[30px]">
                  <h2 className="general-text-bold">
                    {data.solution.innerHeading}
                  </h2>
                  <div className="case-study-image-showcase">
                    {data.solution.images.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="case-study-image-showcase-holder">
                          <h2 className="general-text-bold">{item.heading}</h2>
                          <Image src={item.image} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p>{data.solution.conclusionText.text}</p>
                <ul>
                  {data.solution.conclusionText.points.map((item, index) => {
                    return (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item.content }}></li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
