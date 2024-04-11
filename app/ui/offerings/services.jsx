import Image from "next/image";
import Link from "next/link";

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
            <div
              data-option="up"
              key={index}
              className="service animate-hidden animate">
              <Image src={item.image} alt="" />
              <Link href={item.link}>
                <h2 className="service-heading-unq">{item.heading}</h2>
              </Link>
              <p className="section-content">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
