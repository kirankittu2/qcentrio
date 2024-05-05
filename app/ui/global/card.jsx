import Image from "next/image";

export default function Card({ image, title, content }) {
  return (
    <div
      data-option="up"
      className="success-path-category animate-hidden animate">
      <div className="service-icon-container">
        <Image fill src={image} alt="" />
      </div>
      <h2 className="sub-heading">{title}</h2>
      <p className="section-content">{content}</p>
    </div>
  );
}
