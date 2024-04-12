import Image from "next/image";
import Link from "next/link";
import ServiceCardClient from "./serice-card-client";

export default function ServicesContent({ data }) {
  return (
    <div className="services-section balance-section">
      <div className=" mr-auto ml-auto">
        <h2
          data-option="strip-slide-up"
          className="section-heading animate strip-slide-up strip-slide-black">
          {data.heading}
        </h2>
        <h3
          data-option="up"
          className="service-sub-heading animate-hidden animate"
          dangerouslySetInnerHTML={{ __html: data.subheading }}></h3>
      </div>
      <div className="services-container">
        {data.children.map((item, index) => {
          return (
            <ServiceCardClient key={index} link={item.link}>
              <Image src={item.image} alt="" />
              <h2 className="service-heading-unq">{item.heading}</h2>
              <p className="section-content">{item.content}</p>
            </ServiceCardClient>
          );
        })}
      </div>
    </div>
  );
}
