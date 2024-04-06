import Image from "next/image";
import blog1 from "@/public/blog-1.png";
import blog2 from "@/public/blog-2.png";
import blog3 from "@/public/blog-3.png";
import blogArrow from "@/public/blog-arrow.svg";

export default function InsigntsNoCaro() {
  return (
    <div className="insights-section section">
      <div className="insights-heading-container">
        <h2 data-option="up" className="section-heading animate-hidden animate">
          Explore Qcentrio’s latest thought leadership and research
        </h2>
      </div>
      <div className="blogs-container">
        <div data-option="up" className="card animate-hidden animate">
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
        <div data-option="up" className="card animate-hidden animate">
          <div>
            <div>
              <Image src={blog2} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                Navigating Success: The Power of Advisory and Strategic Services
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                To examine the impact of professional advice and strategy
                services for guiding businesses to achieve long-term objectives.
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
        <div data-option="up" className="card animate-hidden animate">
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
      </div>
    </div>
  );
}
