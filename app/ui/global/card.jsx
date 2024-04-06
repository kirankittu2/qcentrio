import Image from "next/image";

export default function Card({ image, title, content }) {
  return (
    <div
      data-option="up"
      className="success-path-category animate-hidden animate">
      <Image src={image} alt="" />
      <h2 className="sub-heading">{title}</h2>
      <p className="section-content">{content}</p>
    </div>
  );
}
