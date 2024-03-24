import arrow from "@/public/discover-arrow.svg";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Discover() {
  return (
    <div className="discover-section balance-section">
      <div className="discover-card">
        <div className="discover-content">
          <h2 className="discover-heading">Who we are</h2>
          <Link className="w-fit" href="/about-us">
            <p className="discover-btn">
              About Us
              <span>
                <Image src={arrow} alt="" />
              </span>
            </p>
          </Link>
        </div>
        <div className="discover-block">
          <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
          <lord-icon
            src="https://cdn.lordicon.com/tmnemeuf.json"
            trigger="loop"
            delay="2000"
            colors="primary:#089768,secondary:#089768"
            style={{ width: "110px", height: "150px" }}></lord-icon>
        </div>
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
        <div className="discover-block">
          <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
          <lord-icon
            src="https://cdn.lordicon.com/pjkwunvs.json"
            trigger="loop"
            delay="2000"
            colors="primary:#089768,secondary:#089768"
            style={{ width: "110px", height: "150px" }}></lord-icon>
        </div>
      </div>
    </div>
  );
}
