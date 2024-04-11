import Image from "next/image";
import check from "@/public/check-double.svg";

export default function BottomLine({ data }) {
  return (
    <div className="balance-section bottom-line-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-black">
        {data.heading}
      </h2>
      <div
        data-option="up"
        className="bottom-line-content animate animate-hidden">
        <p
          className="section-content"
          dangerouslySetInnerHTML={{ __html: data.content }}></p>
        <div className="bottom-line-decor ">
          <Image src={check} alt="" />
        </div>
      </div>
    </div>
  );
}
