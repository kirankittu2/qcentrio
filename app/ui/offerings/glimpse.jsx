import Image from "next/image";
import Link from "next/link";
import blogArrow from "@/public/blog-arrow.svg";

export default function Glimpse({ data }) {
  return (
    <div className="section glimpse-section">
      <div className="glimpse-column-1">
        <h2 data-option="up" className="section-heading animate-hidden animate">
          {data.heading1}
        </h2>
        <p data-option="up" className="section-content animate-hidden animate">
          {data.content1}
        </p>
        <p data-option="up" className="section-content animate-hidden animate">
          {data.content2}
        </p>
      </div>
      <div
        data-option="right"
        className="glimpse-column-2 hidden-right animate">
        <h2
          className="section-heading"
          dangerouslySetInnerHTML={{ __html: data.heading2 }}></h2>
        <p className="glimpse-sub-heading">{data.subheading}</p>
        <p className="glimpse-btn">
          See How
          <span>
            <Image style={{ width: "25px" }} src={blogArrow} alt="" />
          </span>
        </p>
      </div>
    </div>
  );
}
