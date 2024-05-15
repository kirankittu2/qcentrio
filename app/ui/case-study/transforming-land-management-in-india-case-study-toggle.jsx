"use client";

import Image from "next/image";
import context1 from "@/public/transforming-land-management-ecosystem-with-blockchain-technology/image-01.webp";
import context2 from "@/public/transforming-land-management-ecosystem-with-blockchain-technology/image-02.webp";

import uptri from "@/public/up-tri.svg";
import downtri from "@/public/down-tri.svg";
import { useEffect, useState } from "react";

export default function TransformingLandManagementInIndia() {
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
    observeElements(".case-study-solution-row-1-column-1 ul > li", "slideup");
    observeElements(".case-study-toogle-content-image img", "slideup");
    observeElements(".impact > ul > li", "slideup");
    observeElements(".benefits-container h2", "slideup");
    observeElements(".benefits-container li", "slideup");
    observeElements(".case-study-toogle-content-highlight", "slideup");
    observeElements(".benefits-container p", "slideup");
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
          Blockchain technology, a disruptive force in various industries, is
          poised to revolutionize land management.
        </h2>
        <p className="section-content ">
          The conventional methods of title deeds, land registration, and real
          estate transactions, often marred by opacity, fraud, and inefficiency,
          are ripe for a transformation. Blockchain offers a promising solution,
          prioritizing efficiency, security, and transparency, reshaping the
          land management ecosystem.
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
          Property transactions, cadastral mapping, land registration, and
          land-use planning are all included in the complicated and diverse
          field of land management.
        </h2>
        <p className="">
          There are conflicts, land grabs, and inefficient land use because many
          of the world's current land management systems are antiquated,
          paper-based, and prone to mistakes (de Vries, 2021). A lack of
          accountability and transparency impedes investment, threatens social
          stability, and hinders economic development.
        </p>
        <p className="">
          Blockchain technology will dramatically change the way land records
          are maintained and transactions are carried out. Blockchain is
          essentially a decentralized, immutable ledger that tracks transactions
          over a computer network. By cryptographically connecting each
          transaction, or "block," to the one before it, a safe and clear chain
          of ownership is created (Afrianto et al., 2022).
        </p>
        <p className="">
          Land management authorities can leverage the power of blockchain
          technology to create an unalterable record of property transactions,
          cadastral surveys, and land titles. This decentralized ledger system
          verifies ownership rights in real-time, ensures data integrity, and
          eliminates the risk of fraudulent activities (Daniel and Ifejika
          Speranza, 2020).
        </p>
        <p className="">
          Additionally, implementing blockchain-based smart contracts can
          automate and simplify real estate transactions by removing
          intermediaries and improving the efficiency of the entire process.
          There are several issues and concerns to consider, even though
          blockchain has great potential to revolutionize land management
          (Burzykowska, 2021).
        </p>
        <p className="">
          Digital literacy among stakeholders, data privacy concerns, regulatory
          frameworks, and interoperability with current systems are a few. To
          prevent escalating already-existing disparities, it is also essential
          to guarantee inclusivity and fair access to blockchain-based land
          management solutions.
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
            Blockchain technology has unquestionable land management potential,
            but a few obstacles must be overcome.
          </h2>
          <ul className="">
            <li>
              Scalability: Worldwide land data volumes may be too much for
              current blockchain systems to manage. Although it presents
              scalability challenges, its distributed nature guarantees security
              and immutability. Bottlenecks, longer transaction processing
              times, and increased fees are possible outcomes of the blockchain
              network's growing transaction volume.{" "}
            </li>
            <li>
              Regulation: For blockchain-based land records to be legally valid,
              clear regulatory frameworks are required. Regulatory frameworks
              must expressly acknowledge land records stored on blockchain
              technology as legally binding documents (Burzykowska, 2021). This
              means that to account for blockchain technology's unique features,
              new laws must be passed, or existing ones must be amended.{" "}
            </li>
            <li>
              Accessibility: Not everyone has access to the necessary technology
              or level of digital literacy to engage with blockchain platforms.
              The computers, cell phones, and dependable internet connectivity
              required to interact with blockchain platforms are out of reach
              for many people, especially in underprivileged and rural areas
              (Brülisauer et al., 2020). In addition, technological aptitude and
              literacy differences amplify the accessibility divide since
              certain users may find it challenging to comprehend cryptographic
              ideas and navigate intricate blockchain interfaces.
            </li>
          </ul>
        </div>
        {/* <div className="case-study-solution-row-1-column-2">
          <div
            
            className="case-study-solution-technology-block ">
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
        <h2 className="general-text-bold ">
          Beyond Efficiency: Blockchain for Sustainability
        </h2>
        <ul className="">
          <li>
            Traceability for Sustainable Supply Chains: Blockchain technology
            can guarantee ethical practices like deforestation-free agriculture
            by tracking land use throughout a chain. Customers can feel more
            assured about the goods they buy. Blockchain technology can track a
            product's path from farm to fork in sustainable agriculture, giving
            real-time insight into the place of origin, methods of production,
            and environmental impact of each item (Asante Boakye et al., 2023).
            Businesses can show that they adhere to sustainability standards and
            ethical sourcing guidelines by using blockchain technology to record
            information about supply chain intermediaries, land use, and crop
            cultivation methods.
          </li>
          <li>
            Ecosystem service monetization: Blockchain technology can help
            establish markets for ecosystem services such as carbon
            sequestration. Tokens or credits may be awarded to landowners who
            implement sustainable practices, providing a monetary incentive for
            conservation.
          </li>
        </ul>
      </div>
      <div className="benefits-container">
        <h2 className="general-text-bold">
          Key Benefits of Blockchain in Land Management
        </h2>
        <ul className="">
          <li>
            Openness and Trust: Blockchain technology fosters openness by
            offering a shared, unchangeable record of land ownership and
            transactions. This results in a more effective and fair land
            management ecosystem, as it builds trust among stakeholders such as
            buyers, investors, landowners, and governmental organizations.{" "}
          </li>
          <li>
            Protection from Fraud and Tampering: Due to the decentralized
            structure of blockchain technology, land records are protected from
            fraud and unauthorized changes. Cryptographic hashing algorithms and
            unchangeable timestamps offer an elevated degree of security,
            reducing the possibility of fraud and land disputes.{" "}
          </li>
          <li>
            Efficiency and Cost Savings: Blockchain streamlines land
            registration and real estate transactions, decreasing paperwork,
            processing delays, and bureaucratic obstacles. By enabling
            self-executing contracts, automated intelligent contracts cut down
            on transaction costs and eliminate the need for intermediaries.
          </li>
          <li>
            Accessibility and Inclusivity: Blockchain makes access to land
            ownership records easier, especially in underprivileged areas where
            formal land registries are not readily available. It facilitates
            land tenure security, and marginalized communities are empowered by
            the remote access and verification of digital land titles stored on
            the blockchain.
          </li>
        </ul>
        <p className="">
          Several nations and organizations have already launched initiatives
          for blockchain-based land management, with encouraging outcomes. For
          example, the Republic of Georgia deployed a blockchain-powered land
          registry system, which expedited registration procedures, enhanced
          transparency, and a notable decline in property-related conflicts
          (Howson, 2021).
        </p>
        <p className="">
          In a similar vein, the World Bank's Land Administration and Management
          Program (LAMP) investigates how blockchain technology might enhance
          tenure security and land governance in developing nations. Through
          pilot projects in nations like Zambia and Peru, blockchain has proven
          to be a feasible and effective tool for improving land management
          practices.
        </p>
      </div>
    </div>
  );
}
