import Link from "next/link";

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
        {/* <Link href={link}> */}
        <p className="glimpse-btn">See How</p>
        {/* </Link> */}
      </div>
    </div>
  );
}
