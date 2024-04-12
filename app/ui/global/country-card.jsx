import Image from "next/image";

export default function CountryCard({ image, title, content }) {
  return (
    <div className="country-card-container">
      <div className="flag-container">
        <Image src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
