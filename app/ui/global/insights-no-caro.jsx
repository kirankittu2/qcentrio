import Image from "next/image";
import blogArrow from "@/public/blog-arrow.svg";
import { getAllBlogs } from "@/app/lib/data";
import Link from "next/link";

export default function InsigntsNoCaro() {
  const blogs = getAllBlogs();

  return (
    <div className="insights-section section">
      <div className="insights-heading-container">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          Explore Qcentrio’s latest thought leadership and research
        </h2>
      </div>
      <div className="blogs-container">
        <div data-option="up" className="card animate-hidden animate">
          <div>
            <div className="card-image">
              <Image fill src={blogs[0].image} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">{blogs[0].title}</h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">{blogs[0].content1}</p>
              <Link href={blogs[0].link}>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div data-option="up" className="card animate-hidden animate">
          <div>
            <div className="card-image">
              <Image fill src={blogs[1].image} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">{blogs[1].title}</h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">{blogs[1].content1}</p>
              <Link href={blogs[1].link}>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div data-option="up" className="card animate-hidden animate">
          <div>
            <div className="card-image">
              <Image fill src={blogs[2].image} alt="" />
            </div>
            <div className="blog-card-heading">
              <h2 className="card-heading">{blogs[2].title}</h2>
            </div>
            <div className="blog-card-content-container">
              <p className="section-content">{blogs[2].content1}</p>
              <Link href={blogs[2].link}>
                <div className="blogs-btn">
                  Learn More
                  <span>
                    <Image style={{ width: "25px" }} src={blogArrow} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
