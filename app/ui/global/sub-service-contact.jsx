"use client";

import { contactMail } from "@/app/lib/actions";
import Button from "./button";
import CustomUploadInput from "./custom-upload-input";
import { useRef } from "react";
import dynamic from "next/dynamic";
const TextSlide = dynamic(() => import("./text-slide"), { ssr: false });

export default function SubServiceContact({ heading, subheading, upload }) {
  const contact = useRef(null);
  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LeHIP4pAAAAAFlkwmI4z7K9FZG21vtJ7-aiWlt0", {
          action: "submit",
        })
        .then(function (token) {
          formData.append("g-recaptcha-response", token);
          contactMail(formData);
        });
    });
  }

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

  return (
    <div
      ref={contact}
      className="contact-section sub-service-contact balance-section">
      <h2
        data-option="strip-slide-up"
        className="contact-heading animate strip-slide-up strip-slide-black">
        {heading}
      </h2>
      <div>
        <div className="contact-section-first-column">
          <p
            data-option="up"
            className="section-content contact-sub-heading animate-hidden animate">
            {subheading}
          </p>
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
              <Button name="Contact Us" />
            </div>
          </form>
        </div>
        <div className="contact-section-second-column">
          <TextSlide wrapper={contact} item={item} />
        </div>
      </div>
    </div>
  );
}
