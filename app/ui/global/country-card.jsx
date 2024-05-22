"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CountryCard({ image, title, content, num, time }) {
  const pathname = usePathname();
  return (
    <div className="country-card-container relative">
      <div className="flag-container">
        <Image src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p className="country-card-time">{time !== undefined && time}</p>
      <p>{content}</p>
      {pathname == "/about-us" && <div className="country-num">{num}</div>}
    </div>
  );
}
