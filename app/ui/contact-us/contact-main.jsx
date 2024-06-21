"use client";

import { contactusMaimMail } from "@/app/lib/actions";
import Button from "../global/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactMain() {
  const [submitting, setSubmitting] = useState(true);
  const [error, setError] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchTermDropdown, setSearchTermDropdown] = useState("Purpose");
  const router = useRouter();

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
          formData.append("purpose", searchTermDropdown);
          const response = await contactusMaimMail(formData);
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
    <div className="balance-section contact-us-main-section">
      <div className="contact-us-main-section-content">
        <p className="contact-us-sub-heading">CONTACT US</p>
        <h1
          data-option="strip-slide-up"
          className="hero-heading animate strip-slide-up strip-slide-black">
          INDUSTRY EXPERTS IN MOTION. ENGINEERS IN ACTION.
        </h1>
      </div>
      {!error && <p className="form-error">Error Submitting Form</p>}
      <div
        data-option="up"
        className="contact-us-main-section-form animate animate-hidden">
        <form onSubmit={onSubmit}>
          <div className="contact-column">
            <input
              name="first-name"
              type="text"
              placeholder="First Name"
              required></input>
            <input
              name="last-name"
              type="text"
              placeholder="Last Name"
              required></input>
          </div>
          <div className="contact-column z-10">
            <div
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className={`purpose-input-dropdown ${
                !clicked ? "text-[#a5a5a5]" : "text-black"
              }`}>
              {searchTermDropdown}{" "}
              <span
                className={`chevron bottom ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}></span>
              {dropdown && (
                <div className="search-dropdown-item-list">
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Careers
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    General Inquiries
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Business Inquires
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="contact-column">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              required></input>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"></input>
          </div>
          <textarea name="message" placeholder="Your Message"></textarea>
          <Button name={!submitting ? "Submitting..." : "Submit Form"} />
        </form>
      </div>
    </div>
  );
}
