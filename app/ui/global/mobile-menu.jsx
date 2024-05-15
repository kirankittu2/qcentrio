"use client";

import Image from "next/image";
import searchIcon from "@/public/search.svg";
import tri from "@/public/up-tri.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const search = useRef(null);
  const [mainLinkOpen, setMainLinkOpen] = useState(0);
  const [subLinkOpen, setSubLinkOpen] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const { replace } = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const menu = document.querySelector(".mobile-menu-container");
      menu.classList.remove("active");
      replace(`/search?q=${inputValue}&type=all`);
    }
  };

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-search-container">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={search}
          placeholder="Search"></input>
        <Image className="mobile-menu-search-icon" src={searchIcon} alt="" />
      </div>
      <div className="mobile-menu-links-container">
        <div
          onClick={() => {
            setMainLinkOpen(1);
          }}
          className="mobile-menu-link mobile-mega-menu">
          <Link href={mainLinkOpen == 1 ? "/offerings" : ""}>
            Offerings{" "}
            <Image
              className={` ${mainLinkOpen == 1 ? "rotate-[180deg]" : ""}`}
              src={tri}
              alt=""
            />
          </Link>
        </div>
        {mainLinkOpen == 1 && (
          <div
            className={`mobile-mega-menu-container ${
              mainLinkOpen == 1 ? "active" : ""
            }`}>
            <div
              onClick={() => {
                setSubLinkOpen(1);
              }}
              className="mobile-menu-link mobile-mega-menu">
              <Link
                href={
                  subLinkOpen == 1
                    ? "/offerings/business-value-enhancement-services"
                    : ""
                }>
                Business Value Enhancement{" "}
                <Image
                  className={` ${subLinkOpen == 1 ? "rotate-[180deg]" : ""}`}
                  src={tri}
                  alt=""
                />
              </Link>
            </div>
            {subLinkOpen == 1 && (
              <div className="mobile-mega-sub-menu-container">
                <div className="mobile-menu-link">
                  <Link href="/offerings/business-value-enhancement-services/generative-ai-solutions-and-offerings">
                    Generative AI Solutions and Offerings
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/business-value-enhancement-services/artificial-intelligence-machine-learning-offerings">
                    Artificial Intelligence / Machine Learning Offerings
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/business-value-enhancement-services/robotic-process-automation-services">
                    Robotic Process Automation Services
                  </Link>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setSubLinkOpen(2);
              }}
              className="mobile-menu-link mobile-mega-menu">
              <Link
                href={
                  subLinkOpen == 2
                    ? "/offerings/advanced-technology-solutions"
                    : ""
                }>
                Advanced Technology Solutions{" "}
                <Image
                  className={` ${subLinkOpen == 2 ? "rotate-[180deg]" : ""}`}
                  src={tri}
                  alt=""
                />
              </Link>
            </div>
            {subLinkOpen == 2 && (
              <div className="mobile-mega-sub-menu-container">
                <div className="mobile-menu-link">
                  <Link href="/offerings/advanced-technology-solutions/erp-solutions-support">
                    ERP Solutions Support
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advanced-technology-solutions/comprehensive-sap-services">
                    Comprehensive SAP Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advanced-technology-solutions/product-engineering-services">
                    Product Engineering Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advanced-technology-solutions/custom-software-application-development">
                    Custom Software / Application Development
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advanced-technology-solutions/internet-of-things-solutions">
                    Internet of Things (IoT) Solutions
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advanced-technology-solutions/big-data-services-and-solutions">
                    Big Data Services and Solutions
                  </Link>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setSubLinkOpen(3);
              }}
              className="mobile-menu-link mobile-mega-menu">
              <Link
                href={
                  subLinkOpen == 3
                    ? "/offerings/advisory-and-strategic-services"
                    : ""
                }>
                Advisory and Strategic Services{" "}
                <Image
                  className={` ${subLinkOpen == 3 ? "rotate-[180deg]" : ""}`}
                  src={tri}
                  alt=""
                />
              </Link>
            </div>
            {subLinkOpen == 3 && (
              <div className="mobile-mega-sub-menu-container">
                <div className="mobile-menu-link">
                  <Link href="/offerings/advisory-and-strategic-services/epic-advisory-services">
                    EPIC Advisory Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advisory-and-strategic-services/oracle-cerner-advisory-services">
                    Oracle Cerner Advisory Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advisory-and-strategic-services/audit-and-assurance-services">
                    Audit and Assurance Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advisory-and-strategic-services/risk-advisory-services">
                    Risk Advisory Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/advisory-and-strategic-services/specialty-services">
                    Specialty Services
                  </Link>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setSubLinkOpen(4);
              }}
              className="mobile-menu-link mobile-mega-menu">
              <Link
                href={
                  subLinkOpen == 4
                    ? "/offerings/business-optimization-and-analytics-services"
                    : ""
                }>
                Business Optimization and Analytics{" "}
                <Image
                  className={` ${subLinkOpen == 4 ? "rotate-[180deg]" : ""}`}
                  src={tri}
                  alt=""
                />
              </Link>
            </div>
            {subLinkOpen == 4 && (
              <div className="mobile-mega-sub-menu-container">
                <div className="mobile-menu-link">
                  <Link href="/offerings/business-optimization-and-analytics-services/data-analytics-and-business-intelligence">
                    Data Analytics and Business Intelligence
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/business-optimization-and-analytics-services/collaboration-and-productivity-solutions">
                    Collaboration and Productivity Solutions
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/business-optimization-and-analytics-services/crm-system-solutions">
                    CRM System Solutions
                  </Link>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setSubLinkOpen(5);
              }}
              className="mobile-menu-link mobile-mega-menu">
              <Link
                href={
                  subLinkOpen == 5
                    ? "/offerings/blockchain-advisory-and-offerings"
                    : ""
                }>
                Blockchain Services & Solutions{" "}
                <Image
                  className={` ${subLinkOpen == 5 ? "rotate-[180deg]" : ""}`}
                  src={tri}
                  alt=""
                />
              </Link>
            </div>
            {subLinkOpen == 5 && (
              <div className="mobile-mega-sub-menu-container">
                <div className="mobile-menu-link">
                  <Link href="/offerings/blockchain-advisory-and-offerings/blockchain-strategy-and-advisory">
                    Blockchain Strategy and Advisory
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/blockchain-advisory-and-offerings/blockchain-solution-development">
                    Blockchain Solution Development
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/blockchain-advisory-and-offerings/blockchain-integration-and-deployment">
                    Blockchain Integration and Deployment
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/blockchain-advisory-and-offerings/blockchain-security-and-compliance">
                    Blockchain Security and Compliance
                  </Link>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setSubLinkOpen(6);
              }}
              className="mobile-menu-link mobile-mega-menu">
              <Link
                href={
                  subLinkOpen == 6
                    ? "/offerings/cloud-infra-and-security-services"
                    : ""
                }>
                Cloud Infrastructure & Security Services{" "}
                <Image
                  className={` ${subLinkOpen == 6 ? "rotate-[180deg]" : ""}`}
                  src={tri}
                  alt=""
                />
              </Link>
            </div>
            {subLinkOpen == 6 && (
              <div className="mobile-mega-sub-menu-container">
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/cloud-infrastructure-services">
                    Cloud Infrastructure Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/salesforce-services">
                    Salesforce Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/azure-services-and-offerings">
                    Azure Services and Offerings
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/aws-services-and-offerings">
                    AWS Services and Offerings
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/gcp-services-and-offerings">
                    GCP Services and Offerings
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/cybersecurity-solutions">
                    Cybersecurity Solutions
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/continuous-it-support-and-managed-services">
                    Continuous IT Support and Managed Services
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <Link href="/offerings/cloud-infra-and-security-services/offshore-development-centre-services">
                    Offshore Development Centre (ODC) Services
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="mobile-menu-link">
          <Link href="/products">Products</Link>
        </div>
        <div className="mobile-menu-link">
          <Link href="/industries">Industries</Link>
        </div>
        <div className="mobile-menu-link">
          <Link href="/insights">Insights</Link>
        </div>
        <div className="mobile-menu-link">
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="mobile-menu-link">
          <Link href="/careers">Careers</Link>
        </div>
        <div className="mobile-menu-link">
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
