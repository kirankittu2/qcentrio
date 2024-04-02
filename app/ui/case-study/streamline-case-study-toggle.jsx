"use client";

import Image from "next/image";
import context1 from "@/public/context-1.png";
import context2 from "@/public/context-2.png";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useState } from "react";

export default function StreamlineCaseStudyToggle() {
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
              <div className="case-study-toogle-content-highlight">
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
      <div className="case-study-toogle-content-image">
        <Image src={context1} alt="" />
      </div>
      <div className="case-study-toogle-content">
        <div className="case-study-toogle-content-highlight">
          CLIENT CONTEXT
        </div>
        <h2 className="section-heading">
          A leading automotive OEM was looking to streamline their product
          development process by implementing simulation technology to predict
          vehicle aerodynamics.
        </h2>
        <p className="section-content">
          The automotive industry is constantly evolving, with new technologies
          and features being introduced at a rapid pace. As a result, automakers
          are under pressure to develop new products quickly and efficiently in
          order to stay competitive in the market. One important aspect of
          product development is aerodynamics, which plays a crucial role in the
          performance and efficiency of vehicles.
        </p>
      </div>
    </div>
  );
}

function ChallengeContent() {
  return (
    <div className="case-study-toogle-content-container">
      <div className="case-study-toogle-content-image">
        <Image src={context2} alt="" />
      </div>

      <div className="case-study-toogle-content">
        <div className="case-study-toogle-content-highlight">CHALLENGES</div>
        <h2 className="section-heading">
          The client faced several challenges in their product development
          process:
        </h2>
        <ul>
          <li>
            <strong>
              Time-consuming and costly physical wind tunnel testing:
            </strong>
            The traditional method of testing vehicle aerodynamics in a wind
            tunnel is time-consuming and expensive. It requires building
            physical prototypes, setting up the wind tunnel, and conducting
            multiple tests to gather accurate data. This process can take
            several months and cost millions of dollars.
          </li>
          <li>
            <strong>Lack of flexibility and agility:</strong> With the
            traditional method, any changes or modifications to the vehicle
            design would require building new prototypes and conducting
            additional tests. This lack of flexibility and agility in the
            testing process can result in delays in product development.
          </li>
          <li>
            <strong>Limited understanding of aerodynamics:</strong> The client's
            engineering team had limited knowledge and expertise in
            aerodynamics, making it difficult for them to accurately predict the
            performance of their vehicles.
          </li>
        </ul>
      </div>
    </div>
  );
}

function SolutionContent() {
  return (
    <div className="case-study-solution-content-container">
      <div className="case-study-solution-row-1">
        <div className="case-study-solution-row-1-column-1">
          <p className="section-content">
            The client decided to implement automated vehicle aerodynamics
            simulations to address these challenges. The solution involved using
            computational fluid dynamics (CFD) software to simulate the flow of
            air around the vehicle and predict its aerodynamic performance.
          </p>
          <p className="section-content">This would allow the client to:</p>
          <ul>
            <li>
              <p>
                <strong>Reduce time and cost:</strong> By using simulation
                technology, the client was able to eliminate the need for
                physical wind tunnel testing, saving both time and money. They
                could conduct multiple simulations in a fraction of the time it
                would take to conduct one physical test. This allowed them to
                make design modifications quickly and efficiently without
                incurring additional costs.
              </p>
              <p>
                The client estimated that they were able to save millions of
                dollars in development costs by using simulations. They also
                reduced their time-to-market by several months, giving them a
                competitive advantage in the market.
              </p>
            </li>
            <li>
              <p>
                <strong>Improve flexibility and agility:</strong> With
                simulations, the client could easily make design changes and
                test their impact on vehicle aerodynamics without having to
                build new prototypes. This improved their flexibility and
                agility in the product development process, allowing them to
                respond quickly to market demands and stay ahead of their
                competitors
              </p>
            </li>
            <li>
              <p>
                <strong>Gain a better understanding of aerodynamics:</strong>{" "}
                The CFD software provided detailed and accurate data on vehicle
                aerodynamics, giving the client's engineering team a better
                understanding of how their vehicles performed in different
                conditions. This helped them make informed design decisions and
                optimize the aerodynamics of their vehicles for improved
                performance and efficiency.
              </p>
            </li>
          </ul>
          <p>
            They were also able to identify potential issues early on in the
            development process, avoiding costly redesigns and delays. This
            helped them produce higher quality vehicles and maintain customer
            satisfaction.
          </p>
          {/* <div className="tags-container">
            <div className="tag">Tag</div>
          </div> */}
        </div>
        <div className="case-study-solution-row-1-column-2">
          <div className="case-study-solution-technology-block">
            <h2>Technologies USED</h2>
            <ul>
              <li>ANSYS Fluent</li>
              <li>OpenFOAM</li>
              <li>STAR-CCM+</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-[30px]">
        <h2 className="general-text-bold">BUSINESS IMPACT</h2>
        <p>
          The implementation of automated vehicle aerodynamics simulations had a
          significant impact on the client's product development process. They
          were able to:
        </p>
        <ul>
          <li>
            <strong>Save time and cost:</strong> By eliminating physical wind
            tunnel testing, the client saved millions of dollars in development
            costs and reduced their time-to-market by several months. This
            allowed them to bring new products to market faster and stay ahead
            of their competitors.
          </li>
          <li>
            <strong>Improve product quality:</strong> The use of simulations
            helped the client gain a better understanding of vehicle
            aerodynamics, allowing them to optimize their designs for improved
            performance and efficiency. This resulted in higher quality vehicles
            and increased customer satisfaction.
          </li>
          <li>
            <strong>Increase flexibility and agility:</strong> With simulations,
            the client could easily make design changes and test their impact on
            vehicle aerodynamics without incurring additional costs or delays.
            This improved their flexibility and agility in responding to market
            demands and staying ahead of their competitors.
          </li>
        </ul>

        {/* <div className="case-study-image-showcase">
          <div className="case-study-image-showcase-holder">
            <h2 className="general-text-bold">Image Head</h2>
            <Image src={item.image} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
