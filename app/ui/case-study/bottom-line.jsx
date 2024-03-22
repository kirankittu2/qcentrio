import Image from "next/image";
import check from "@/public/check-double.svg";

export default function BottomLine({ data }) {
  return (
    <div className="balance-section bottom-line-section">
      <h2 className="section-heading">{data.heading}</h2>
      <div className="bottom-line-content">
        <p
          className="section-content"
          dangerouslySetInnerHTML={{ __html: data.content }}></p>
        <div className="bottom-line-decor">
          <Image src={check} alt="" />
        </div>
      </div>
    </div>
  );
}
