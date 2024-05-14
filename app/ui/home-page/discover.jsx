import arrow from "@/public/discover-arrow.svg";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Discover() {
  return (
    <div className="discover-section balance-section ">
      <div data-option="up" className="discover-card animate animate-hidden">
        {/* <div className="discover-block-space"></div> */}
        <div className="discover-block">
          <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
          <lord-icon
            src="https://cdn.lordicon.com/tmnemeuf.json"
            trigger="loop"
            delay="2000"
            colors="primary:#089768,secondary:#089768"></lord-icon>
        </div>
        <div className="discover-content">
          <h2 className="discover-heading">Who we are</h2>
          <Link className="w-fit" href="/about-us">
            <p className="discover-btn">
              About Us
              <span>
                <Image fill src={arrow} alt="" />
              </span>
            </p>
          </Link>
        </div>
      </div>
      <div data-option="up" className="discover-card animate animate-hidden">
        {/* <div className="discover-block-space"></div> */}
        <div className="discover-block">
          <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
          <lord-icon
            src="https://cdn.lordicon.com/pjkwunvs.json"
            trigger="loop"
            delay="2000"
            colors="primary:#089768,secondary:#089768"></lord-icon>
        </div>
        <div className="discover-content">
          <h2 className="discover-heading">Life at Qcentrio</h2>
          <Link className="w-fit" href="/careers">
            <p className="discover-btn">
              Discover
              <span>
                <Image fill src={arrow} alt="" />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
