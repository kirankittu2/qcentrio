import Button from "../global/button";

export default function ContactMain() {
  return (
    <div className="balance-section contact-us-main-section">
      <div className="contact-us-main-section-content">
        <p className="contact-us-sub-heading">CONTACT US</p>
        <h1 className="hero-heading">
          INDUSTRY EXPERTS <span>IN MOTION</span>. ENGINEERS{" "}
          <span>IN ACTION</span>.
        </h1>
      </div>
      <div className="contact-us-main-section-form">
        <form>
          <div className="contact-column">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
          </div>
          <div className="contact-column">
            <input type="text" placeholder="Purpose"></input>
          </div>
          <div className="contact-column">
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Contact Number"></input>
          </div>
          <textarea placeholder="Your Message"></textarea>
          <Button name="Submit Form" />
        </form>
      </div>
    </div>
  );
}
