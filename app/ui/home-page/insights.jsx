"use client";

import Image from "next/image";
import blog1 from "@/public/blog-1.png";
import blog2 from "@/public/blog-2.png";
import blog3 from "@/public/blog-3.png";
import blog4 from "@/public/blog-4.png";
import blog5 from "@/public/blog-5.png";
import blog6 from "@/public/blog-6.png";
import arrow from "@/public/insights-arrow.svg";
import blogArrow from "@/public/blog-arrow.svg";
import { useEffect, useRef, useState } from "react";

export default function Insignts({ title, subheading }) {
  const wrapper = useRef(null);
  const card = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let translateValue = -index * (card.current.offsetWidth + 30) + "px";
    wrapper.current.style.transform = `translateX(${translateValue})`;
  }, [index]);

  function handleRight() {
    if (index < wrapper.current.children.length - 3) {
      setIndex(index + 1);
    }
  }

  function handleLeft() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="insights-section section">
      <div className="insights-heading-container">
        <h2 className="section-heading">{title}</h2>
        <p className="section-content insights-sub-heading">{subheading}</p>
      </div>
      <div className="blogs-container">
        <div ref={wrapper} className="insights-wrapper">
          <div ref={card} className="card">
            <div>
              <div>
                <Image src={blog1} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">
                  Maximizing Business Value to Your Approach to Enhancement
                </h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  Dive into our strategies for amplifying your business value,
                  ensuring sustainable growth and competitive advantage.
                </p>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <Image src={blog2} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">
                  Navigating Success: The Power of Advisory and Strategic
                  Services
                </h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  To examine the impact of professional advice and strategy
                  services for guiding businesses to achieve long-term
                  objectives.
                </p>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <Image src={blog3} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">
                  Driving Efficiency to Business Optimization & Analytics Role
                </h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  How our business optimization and analytics help clients turn
                  their data into useful information, insight, and knowledge to
                  make better decisions.
                </p>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div ref={card} className="card">
            <div>
              <div>
                <Image src={blog4} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">
                  Advanced Technology Solutions for Modern Challenges
                </h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  Find out how the advanced technology solutions from Fujitsu
                  are tackling today&lsquo;s business challenges while leading
                  to innovation and resilience.
                </p>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <Image src={blog5} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">
                  Cloud Infrastructure & Security Services to Secure Future
                </h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  Wide range of cloud infrastructure and security services,
                  which will be taking care of digital possessions and their
                  well-being parallelly.
                </p>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <Image src={blog6} alt="" />
              </div>
              <div className="blog-card-heading">
                <h2 className="card-heading">
                  The Impact of Blockchain Services & Solutions for
                  Transformation
                </h2>
              </div>
              <div className="blog-card-content-container">
                <p className="section-content">
                  Discover how our blockchain services and solutions are
                  transforming the industry with better transparency,
                  security, and efficiency.
                </p>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleRight} className="insights-right-arrow">
        <Image src={arrow} alt="" />
      </div>
      <div
        onClick={handleLeft}
        className={`insights-left-arrow ${index > 0 ? "block" : "hidden"}`}>
        <Image src={arrow} alt="" />
      </div>
    </div>
  );
}
