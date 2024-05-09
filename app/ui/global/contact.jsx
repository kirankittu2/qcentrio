"use client";

import { contactMail } from "@/app/lib/actions";
import Button from "./button";
import CustomUploadInput from "./custom-upload-input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact({ heading, subheading, upload }) {
  const [submitting, setSubmitting] = useState(true);
  const [error, setError] = useState(true);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setSubmitting(false);
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdTKMUpAAAAAOUf_fNbftCXwdXc5KLdgZov7P74", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          const response = await contactMail(formData);
          setSubmitting(response.success);
          setError(response.success);
          if (response.success) {
            router.push("/thank-you");
          }
        });
    });
  }

  return (
    <div className="contact-section balance-section">
      <h2
        data-option="strip-slide-up"
        className="contact-heading animate strip-slide-up strip-slide-black">
        {heading}
      </h2>
      <p
        data-option="up"
        className="section-content contact-sub-heading animate-hidden animate">
        {subheading}
      </p>
      {!error && <p className="form-error">Error Submitting Form</p>}
      <form onSubmit={onSubmit}>
        <div className="contact-column">
          <input
            data-option="up"
            name="first-name"
            type="text"
            className="animate-hidden animate"
            placeholder="First Name"
            required
          />
          <input
            data-option="up"
            name="last-name"
            type="text"
            className="animate-hidden animate"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="contact-column">
          <input
            data-option="up"
            name="email"
            type="email"
            className="animate-hidden animate"
            placeholder="Email Address"
            required
          />

          {upload ? (
            <CustomUploadInput />
          ) : (
            <input
              data-option="up"
              name="contact"
              type="text"
              className="animate-hidden animate"
              placeholder="Contact Number"
            />
          )}
        </div>
        <textarea
          data-option="up"
          name="message"
          className="animate-hidden animate"
          placeholder="Your Message"
          rows="10"></textarea>
        <div className="contact-btn-container">
          <Button name={!submitting ? "Submitting..." : "Contact Us"} />
        </div>
      </form>
    </div>
  );
}
