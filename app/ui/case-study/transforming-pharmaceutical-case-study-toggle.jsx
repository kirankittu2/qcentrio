"use client";

import Image from "next/image";
import context1 from "@/public/pharmaceutical/secondary-image-1.png";
// import context2 from "@/public/pharmaceutical/secondary-image-2.png";
import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function TransformingPharmaceutical() {
  const [context, togggleContext] = useState(true);
  // const [challenges, togggleChallenges] = useState(true);
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
    observeElements(".case-study-toogle-content-image img", "slideup");
    observeElements(".case-study-toogle-content-highlight", "slideup");
    observeElements(".case-study-solution-row-1-column-1 > p", "slideup");
    observeElements(".impact > ul > li", "slideup");
  }, [context, solution]);

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
              01 <span></span> CHALLENGE
            </div>
            {context && <Image src={uptri} alt="" />}
            {!context && <Image src={downtri} alt="" />}
          </div>
        </div>
        {context && <ContextContent />}
      </div>
      {/* <div className="case-study-showcase-toggle-container">
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
      </div> */}
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
              02 <span></span> SOLUTION
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
          A pharmaceutical giant faced issues with its SharePoint setup,
          including 9 TB of data and numerous sites and apps.
        </h2>
        <p className="section-content ">
          Compliance demands prompted a shift from a complex system to a
          streamlined cloud solution, overcoming limitations like SharePoint
          Online throttling to enhance agility and scalability.
        </p>
      </div>
    </div>
  );
}

// function ChallengeContent() {
//   return (
//     <div className="case-study-toogle-content-container">
//       <div className="case-study-toogle-content-image">
//         <Image src={context2} alt="" />
//       </div>

//       <div className="case-study-toogle-content">
//         <div className="case-study-toogle-content-highlight">CHALLENGES</div>
//         <h2 className="section-heading">
//           Property transactions, cadastral mapping, land registration, and
//           land-use planning are all included in the complicated and diverse
//           field of land management.
//         </h2>
//         <p>
//           There are conflicts, land grabs, and inefficient land use because many
//           of the world's current land management systems are antiquated,
//           paper-based, and prone to mistakes (de Vries, 2021). A lack of
//           accountability and transparency impedes investment, threatens social
//           stability, and hinders economic development.
//         </p>
//         <p>
//           Blockchain technology will dramatically change the way land records
//           are maintained and transactions are carried out. Blockchain is
//           essentially a decentralized, immutable ledger that tracks transactions
//           over a computer network. By cryptographically connecting each
//           transaction, or "block," to the one before it, a safe and clear chain
//           of ownership is created (Afrianto et al., 2022).
//         </p>
//         <p>
//           Land management authorities can leverage the power of blockchain
//           technology to create an unalterable record of property transactions,
//           cadastral surveys, and land titles. This decentralized ledger system
//           verifies ownership rights in real-time, ensures data integrity, and
//           eliminates the risk of fraudulent activities (Daniel and Ifejika
//           Speranza, 2020).
//         </p>
//         <p>
//           Additionally, implementing blockchain-based smart contracts can
//           automate and simplify real estate transactions by removing
//           intermediaries and improving the efficiency of the entire process.
//           There are several issues and concerns to consider, even though
//           blockchain has great potential to revolutionize land management
//           (Burzykowska, 2021).
//         </p>
//         <p>
//           Digital literacy among stakeholders, data privacy concerns, regulatory
//           frameworks, and interoperability with current systems are a few. To
//           prevent escalating already-existing disparities, it is also essential
//           to guarantee inclusivity and fair access to blockchain-based land
//           management solutions.
//         </p>
//       </div>
//     </div>
//   );
// }

function SolutionContent() {
  return (
    <div className="case-study-solution-content-container">
      <div className="case-study-solution-row-1">
        <div className="case-study-solution-row-1-column-1">
          <p className="">
            Qcentrio provided an end-to-end migration to Office 365 SharePoint
            Online, converting SharePoint 2010 Farm solutions to the Cloud App
            Model and creating a compatible hybrid system with SharePoint 2013
            on-premises.
          </p>
          <p className="">
            This allowed for robust enterprise search across the hybrid setup
            and offered solutions to SharePoint Online's limitations.
          </p>
        </div>
      </div>
      <div className="mb-[30px] impact">
        <h2 className="general-text-bold ">Business Impact</h2>
        <ul className="">
          <li>50% reduction in Total Cost of Ownership</li>
          <li>Migration alignd with the client's infrastructure</li>
          <li>
            Enabled true enterprise search across hybrid SharePoint environments
          </li>
        </ul>
      </div>
    </div>
  );
}
