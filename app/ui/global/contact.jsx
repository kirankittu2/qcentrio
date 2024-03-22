import Button from "./button";

export default function Contact() {
  return (
    <div className="contact-section balance-section">
      <h2 className="contact-heading">Experience the Qcentrio Difference</h2>
      <p className="section-content contact-sub-heading">
        Let us empower you to win, grow, and lead in the digital age with our
        leading-edge <br /> services, solutions, and strategic innovation.
      </p>
      <form>
        <div className="contact-column">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="contact-column">
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Contact Number" />
        </div>
        <textarea placeholder="Your Message" rows="10"></textarea>
        <div className="contact-btn-container">
          <Button name="Contact Us" />
        </div>
      </form>
    </div>
  );
}
