import Image from "next/image";

export default function CountryCard({ image, title, content }) {
  return (
    <div
      data-option="up"
      className="country-card-container animate animate-hidden">
      <div className="flag-container">
        <Image src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
