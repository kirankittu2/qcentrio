import Image from "next/image";
import Link from "next/link";
import blogArrow from "@/public/blog-arrow.svg";

export default function Glimpse({ data }) {
  return (
    <div className="section glimpse-section">
      <div className="glimpse-column-1">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          {data.heading1}
        </h2>
        <p data-option="up" className="section-content animate-hidden animate">
          {data.content1}
        </p>
        <p data-option="up" className="section-content animate-hidden animate">
          {data.content2}
        </p>
      </div>
      <div data-option="up" className="glimpse-column-2 animate-hidden animate">
        <h2
          className="section-heading"
          dangerouslySetInnerHTML={{ __html: data.heading2 }}></h2>
        <p className="glimpse-sub-heading">{data.subheading}</p>
        <Link href={data.link}>
          <p className="glimpse-btn">
            See How
            <span>
              <Image fill src={blogArrow} alt="" />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
