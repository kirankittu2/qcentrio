import Button from "../global/button";

export default function ContactMain() {
  return (
    <div className="balance-section contact-us-main-section">
      <div className="contact-us-main-section-content">
        <p className="contact-us-sub-heading">CONTACT US</p>
        <h1
          data-option="strip-slide-up"
          className="hero-heading animate strip-slide-up strip-slide-black">
          INDUSTRY EXPERTS IN MOTION. ENGINEERS IN ACTION.
        </h1>
      </div>
      <div className="contact-us-main-section-form">
        <form>
          <div className="contact-column">
            <input
              className="animate-hidden animate"
              data-option="up"
              type="text"
              placeholder="First Name"></input>
            <input
              className="animate-hidden animate"
              data-option="up"
              type="text"
              placeholder="Last Name"></input>
          </div>
          <div className="contact-column">
            <input
              data-option="up"
              type="text"
              className="animate-hidden animate"
              placeholder="Purpose"></input>
          </div>
          <div className="contact-column">
            <input
              className="animate-hidden animate"
              data-option="up"
              type="text"
              placeholder="Email Address"></input>
            <input
              className="animate-hidden animate"
              data-option="up"
              type="text"
              placeholder="Contact Number"></input>
          </div>
          <textarea
            data-option="up"
            className="animate-hidden animate"
            placeholder="Your Message"></textarea>
          <Button name="Submit Form" />
        </form>
      </div>
    </div>
  );
}
