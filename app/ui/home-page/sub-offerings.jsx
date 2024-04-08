import Link from "next/link";
import arrow from "@/public/green-arrow.svg";
import Image from "next/image";

export default function SubOfferings(data) {
  return (
    <div className="service-sub-offerings">
      {data.data.sub.map((service, index) => {
        return (
          <Link key={index} href={service.link}>
            <div className="service-sub-offering">
              {service.title}
              <span>
                <Image src={arrow} alt=""></Image>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
