import arrow from "@/public/discover-arrow.svg";
import Image from "next/image";

export default function Discover() {
  return (
    <div className="discover-section balance-section">
      <div className="discover-card">
        <div className="discover-content">
          <h2 className="discover-heading">Who we are</h2>
          <p className="discover-btn">
            About Us
            <span>
              <Image src={arrow} alt="" />
            </span>
          </p>
        </div>
        <div className="discover-block"></div>
      </div>
      <div className="discover-card">
        <div className="discover-content">
          <h2 className="discover-heading">Life at Qcentrio</h2>
          <p className="discover-btn">
            Discover
            <span>
              <Image src={arrow} alt="" />
            </span>
          </p>
        </div>
        <div className="discover-block"></div>
      </div>
    </div>
  );
}
