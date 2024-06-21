"use client";

import { contactMail } from "@/app/lib/actions";
import Button from "./button";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const TextSlide = dynamic(() => import("./text-slide"), { ssr: false });

export default function Contact({ heading, subheading, upload }) {
  const [submitting, setSubmitting] = useState(true);
  const [error, setError] = useState(true);
  const router = useRouter();
  const contact = useRef(null);

  const data = [
    "MODERNIZE",
    "VISUALIZE",
    "AUTHORIZE",
    "SOCIALIZE",
    "SENSITIZE",
    "EMPHASIZE",
    "PRIORITIZE",
    "STABILIZE",
    "ECONOMIZE",
  ];

  const item = data[Math.floor(Math.random() * data.length)];

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setSubmitting(false);
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LeHIP4pAAAAAFlkwmI4z7K9FZG21vtJ7-aiWlt0", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          const response = await contactMail(formData);
          setSubmitting(response.success);
          setError(response.success);
          if (response.success) {
            router.push("/thank-you");
          } else if (!response.success) {
            setSubmitting(true);
          }
        });
    });
  }

  return (
    <div ref={contact} className="contact-section   balance-section">
      <div>
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
      </div>
      <div className="contact-section-main">
        <TextSlide wrapper={contact} item={item} />
        <div className="contact-form">
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

              <input
                data-option="up"
                name="contact"
                type="text"
                className="animate-hidden animate"
                placeholder="Contact Number"
              />
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
        <TextSlide wrapper={contact} item={item} />
      </div>
    </div>
  );
}
