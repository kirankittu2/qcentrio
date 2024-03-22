import Image from "next/image";

export default function Card({ image, title, content }) {
  return (
    <div className="success-path-category">
      <Image src={image} alt="" />
      <h2 className="sub-heading">{title}</h2>
      <p className="section-content">{content}</p>
    </div>
  );
}
