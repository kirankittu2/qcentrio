import { sendMail } from "@/app/lib/actions";
import Button from "./button";

export default function Contact({ heading, subheading }) {
  return (
    <div className="contact-section balance-section">
      <h2 data-option="up" className="contact-heading animate-hidden animate">
        {heading}
      </h2>
      <p
        data-option="up"
        className="section-content contact-sub-heading animate-hidden animate">
        {subheading}
      </p>
      <form action={sendMail}>
        <div className="contact-column">
          <input
            data-option="left"
            className="hidden-left animate"
            name="first-name"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            data-option="right"
            className="hidden-right animate"
            name="last-name"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="contact-column">
          <input
            data-option="left"
            className="hidden-left animate"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            data-option="right"
            className="hidden-right animate"
            name="contact"
            type="text"
            placeholder="Contact Number"
          />
        </div>
        <textarea
          data-option="up"
          className="animate-hidden animate"
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
