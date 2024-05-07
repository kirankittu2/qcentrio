"use client";

import { contactusMaimMail } from "@/app/lib/actions";
import Button from "../global/button";

export default function ContactMain() {
  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdTKMUpAAAAAOUf_fNbftCXwdXc5KLdgZov7P74", {
          action: "submit",
        })
        .then(function (token) {
          formData.append("g-recaptcha-response", token);
          contactusMaimMail(formData);
        });
    });
  }

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
        <form onSubmit={onSubmit}>
          <div className="contact-column">
            <input
              className="animate-hidden animate"
              data-option="up"
              name="first-name"
              type="text"
              placeholder="First Name"></input>
            <input
              className="animate-hidden animate"
              data-option="up"
              name="last-name"
              type="text"
              placeholder="Last Name"></input>
          </div>
          <div className="contact-column">
            <input
              data-option="up"
              type="text"
              name="purpose"
              className="animate-hidden animate"
              placeholder="Purpose"></input>
          </div>
          <div className="contact-column">
            <input
              className="animate-hidden animate"
              data-option="up"
              type="text"
              name="email"
              placeholder="Email Address"></input>
            <input
              className="animate-hidden animate"
              data-option="up"
              type="text"
              name="contact"
              placeholder="Contact Number"></input>
          </div>
          <textarea
            data-option="up"
            name="message"
            className="animate-hidden animate"
            placeholder="Your Message"></textarea>
          <Button name="Submit Form" />
        </form>
      </div>
    </div>
  );
}
