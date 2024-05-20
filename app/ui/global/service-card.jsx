import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function ServiceCard({ image, title, content, link }) {
  return (
    <div data-option="up" className="card animate-hidden animate">
      <div className="card-image">
        <Image fill style={{ width: "100%" }} src={image} alt="" />
      </div>
      <div className="blog-card-content-container">
        <h2 className="card-heading">{title}</h2>
        <p className="section-content">{content}</p>
        <Link href={link}>
          <Button name="Read More" />
        </Link>
      </div>
    </div>
  );
}
