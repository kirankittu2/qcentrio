import Image from "next/image";

export default function ServicesContent({ data }) {
  return (
    <div className="services-section balance-section">
      <div className=" mr-auto ml-auto">
        <h2 className="section-heading">{data.heading}</h2>
        <h3
          className="service-sub-heading"
          dangerouslySetInnerHTML={{ __html: data.subheading }}></h3>
      </div>
      <div className="services-container">
        {data.children.map((item, index) => {
          return (
            <div key={index} className="service">
              <Image src={item.image} alt="" />
              <h2 className="service-heading-unq">{item.heading}</h2>
              <p className="section-content">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
