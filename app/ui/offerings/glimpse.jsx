import Image from "next/image";
import Link from "next/link";
import blogArrow from "@/public/blog-arrow.svg";

export default function Glimpse({ data }) {
  return (
    <div className="section glimpse-section">
      <div className="glimpse-column-1">
        <h2 className="section-heading">{data.heading1}</h2>
        <p className="section-content">{data.content1}</p>
        <p className="section-content">{data.content2}</p>
      </div>
      <div className="glimpse-column-2">
        <h2 className="section-heading">{data.heading2}</h2>
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
