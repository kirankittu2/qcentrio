"use client";

import arrow from "@/public/discover-arrow.svg";
import service1 from "@/public/sub-offerings-1.png";
import Image from "next/image";
import { useState } from "react";

export default function SubServiceOfferings() {
  const [index, setIndex] = useState(1);
  return (
    <div className="service-offerings-section">
      <div className="service-offerings-section-col-1">
        <h2 className="section-small-heading">Our Offerings</h2>
        <h3 className="section-heading">
          OUR GENERATIVE AI SOLUTIONS AND OFFERINGS
        </h3>
        <div className="need-something-card">
          <h2 className="sub-heading">Need Something Else?</h2>
          <p>Contact us and we can figure out how to adapt to your needs</p>
          <div className="need-something-btn">
            Contact Us
            <span>
              <Image src={arrow} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="service-offerings-section-col-2">
        <Image src={service1} alt="" />
      </div>
      <div className="service-offerings-section-col-3">
        <div
          onMouseOver={() => setIndex(1)}
          className={`service-offerings-toggle-head ${
            index == 1 ? "active" : ""
          }`}>
          <div className="service-offerings-toggle-num">
            <p>01</p>
          </div>
          <div>
            <h2>Empower Your Business with Open AI / ChatGPT Integration</h2>
            <p className="service-offerings-toggle-content">
              Integrate chatbots powered by generative AI to deliver natural
              responses and automate interactions. Our GPT4 services can
              significantly reduce your company's workload while maintaining
              process efficiency.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setIndex(2)}
          className={`service-offerings-toggle-head ${
            index == 2 ? "active" : ""
          }`}>
          <div className="service-offerings-toggle-num">
            <p>02</p>
          </div>
          <div>
            <h2>Advanced Analytics and AI for Insightful Decisions</h2>
            <p className="service-offerings-toggle-content">
              Integrate chatbots powered by generative AI to deliver natural
              responses and automate interactions. Our GPT4 services can
              significantly reduce your company's workload while maintaining
              process efficiency.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setIndex(3)}
          className={`service-offerings-toggle-head ${
            index == 3 ? "active" : ""
          }`}>
          <div className="service-offerings-toggle-num">
            <p>03</p>
          </div>
          <div>
            <h2>Strategic AI Implementation for Industry-Specific Needs</h2>
            <p className="service-offerings-toggle-content">
              Integrate chatbots powered by generative AI to deliver natural
              responses and automate interactions. Our GPT4 services can
              significantly reduce your company's workload while maintaining
              process efficiency.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setIndex(4)}
          className={`service-offerings-toggle-head ${
            index == 4 ? "active" : ""
          }`}>
          <div className="service-offerings-toggle-num">
            <p>04</p>
          </div>
          <div>
            <h2>Boost Productivity with Automation Solutions</h2>
            <p className="service-offerings-toggle-content">
              Integrate chatbots powered by generative AI to deliver natural
              responses and automate interactions. Our GPT4 services can
              significantly reduce your company's workload while maintaining
              process efficiency.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setIndex(5)}
          className={`service-offerings-toggle-head ${
            index == 5 ? "active" : ""
          }`}>
          <div className="service-offerings-toggle-num">
            <p>05</p>
          </div>
          <div>
            <h2>End-to-End Generative AI Integration for Business Growth</h2>
            <p className="service-offerings-toggle-content">
              Integrate chatbots powered by generative AI to deliver natural
              responses and automate interactions. Our GPT4 services can
              significantly reduce your company's workload while maintaining
              process efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}