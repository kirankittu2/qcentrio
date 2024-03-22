import Image from "next/image";
import Button from "./button";

export default function ServiceCard({ image, title, content }) {
  return (
    <div className="card">
      <div>
        <Image src={image} alt="" />
      </div>
      <div className="blog-card-content-container">
        <h2 className="card-heading">{title}</h2>
        <p className="section-content">{content}</p>
        <Button name="Read More" />
      </div>
    </div>
  );
}
