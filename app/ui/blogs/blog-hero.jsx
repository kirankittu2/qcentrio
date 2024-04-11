import Button from "../global/button";

export default function BlogHero() {
  return (
    <div className="blogs-hero-content">
      <div className="breadcrump">
        HOME <span></span> INSIGHTS
      </div>
      <h1
        data-option="strip-slide-up"
        className="blog-hero-heading animate strip-slide-up strip-slide-white">
        QCENTRIO INSIGHTS
      </h1>
      <p
        data-option="up"
        className="blog-hero-sub-heading animate animate-hidden">
        Insights to help you bring your best ideas to life. Subscribe to get the
        best tips, tricks, and success stories in your inbox.
      </p>
      <div
        data-option="up"
        className="lets-talk-container animate animate-hidden">
        <input type="text" placeholder="Email Address" />
        <div className="input-btn">
          <Button name="Lets Talk" />
        </div>
      </div>
    </div>
  );
}
