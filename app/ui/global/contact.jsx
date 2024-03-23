import { sendMail } from "@/app/lib/actions";
import Button from "./button";

export default function Contact() {
  return (
    <div className="contact-section balance-section">
      <h2 className="contact-heading">Experience the Qcentrio Difference</h2>
      <p className="section-content contact-sub-heading">
        Let us empower you to win, grow, and lead in the digital age with our
        leading-edge <br /> services, solutions, and strategic innovation.
      </p>
      <form action={sendMail}>
        <div className="contact-column">
          <input
            name="first-name"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="last-name"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="contact-column">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input name="contact" type="text" placeholder="Contact Number" />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="10"></textarea>
        <div className="contact-btn-container">
          <Button name="Contact Us" />
        </div>
      </form>
    </div>
  );
}
