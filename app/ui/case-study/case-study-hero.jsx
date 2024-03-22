import Button from "../global/button";

export default function CaseStudyHero({ data }) {
  return (
    <div className="case-study-hero-content">
      <div className="breadcrump">
        RESOURCES <span></span> CASE STUDY
      </div>
      <h1 className="hero-heading">{data.heading}</h1>
      <div className="lets-talk-container">
        <input type="text" placeholder="Email Address" />
        <div className="input-btn">
          <Button name="Lets Talk" />
        </div>
      </div>
    </div>
  );
}
