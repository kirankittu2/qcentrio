import Button from "../global/button";

export default function CaseStudyHero({ data }) {
  return (
    <div className="case-study-hero-content">
      <div className="breadcrump">
        INSIGHTS <span></span> CASE STUDY
      </div>
      <h1
        data-option="strip-slide-up"
        className="hero-heading animate strip-slide-up strip-slide-white">
        {data.heading}
      </h1>
      <div
        data-option="up"
        className="lets-talk-container animate animate-hidden">
        <input type="text" placeholder="Email Address" required />
        <div className="input-btn">
          <Button name="Lets Talk" />
        </div>
      </div>
    </div>
  );
}
