import blog1 from "@/public/blog-1.png";
import blog2 from "@/public/blog-2.png";
import blog3 from "@/public/blog-3.png";
import blog4 from "@/public/blog-4.png";
import blog5 from "@/public/blog-5.png";
import blog6 from "@/public/blog-6.png";
import blog7 from "@/public/blog-7.png";
import blog8 from "@/public/blog-8.png";
import blog9 from "@/public/blog-9.png";
import Image from "next/image";
import search from "@/public/search.svg";
import blogArrow from "@/public/blog-arrow.svg";
import Pagination from "./pagination";

export default function AllBlogs() {
  return (
    <>
      <div className="blog-section topics-section">
        <div className="topics-head-and-search mb-[30px]">
          <h2 className="section-heading">Most Viewed Topic</h2>
          <div className="search-container">
            <input className="search" placeholder="Search"></input>
            <Image className="input-icon" src={search} alt="" />
          </div>
        </div>
        <div className="topics">
          <div className="topic">Cloud Migration</div>
          <div className="topic">Data Migration</div>
          <div className="topic">Cloud Security</div>
          <div className="topic">Generative AI</div>
          <div className="topic">Data Analytics</div>
          <div className="topic">Business Intelligence</div>
          <div className="topic">ERP Solutions</div>
          <div className="topic">Salesforce</div>
          <div className="topic">Risk Advisory</div>
        </div>
      </div>
      <div className="blog-articles-section blog-section">
        <h2 className="section-heading">Latest Blog Articles</h2>
        <div className="blogs-container">
          <div className="card">
            <div>
              <Image src={blog1} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                Our Approach to Business Optimization and Analytics
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                Learn how our tailored solutions, based on state-of-the-art
                analytics, make your business more effective and insightful.
              </p>
              <div className="blogs-btn">
                Learn More
                <span>
                  <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <Image src={blog2} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                How to Build a Winning Cloud Strategy in 2024
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                Uncover the keys to successful Cloud 2024 strategy that will
                unlock your business potential from the inside to be ahead of
                digital transformation.
              </p>
              <div className="blogs-btn">
                Learn More
                <span>
                  <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <Image src={blog3} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                What Does It Take to Scale an Enterprise 2X
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                The core ingredients to double your enterprise&lsquo;s growth.
                This advanced technologies, strategic partnerships, and new
                offerings for your customers.
              </p>
              <div className="blogs-btn">
                Learn More
                <span>
                  <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <Image src={blog4} alt="" />
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
          <div className="card">
            <div>
              <Image src={blog5} alt="" />
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
          <div className="card">
            <div>
              <Image src={blog6} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                Driving Efficiency to Business Optimization & Analytics Role
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                Find out how our business optimization and analytics help
                clients turn their data into useful information, insight, and
                knowledge to make better decisions.
              </p>
              <div className="blogs-btn">
                Learn More
                <span>
                  <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <Image src={blog7} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                Advanced Technology Solutions for Modern Challenges
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                Find out how the advanced technology solutions from Fujitsu are
                tackling today&lsquo;s business challenges while leading to
                innovation and resilience.
              </p>
              <div className="blogs-btn">
                Learn More
                <span>
                  <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <Image src={blog8} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                Cloud Infrastructure & Security Services to Secure Future
              </h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">
                Wide range of cloud infrastructure and security services, which
                will be taking care of digital possessions and their well-being
                parallelly.
              </p>
              <div className="blogs-btn">
                Learn More
                <span>
                  <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <Image src={blog9} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">
                The Impact of Blockchain Services & Solutions for Transformation
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
      <Pagination />
    </>
  );
}
