"use client";

import { contactMail } from "@/app/lib/actions";
import Button from "./button";
import CustomUploadInput from "./custom-upload-input";
import { useEffect, useRef } from "react";

export default function SubServiceContact({ heading, subheading, upload }) {
  const contact = useRef(null);
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
          contactMail(formData);
        });
    });
  }

  useEffect(() => {
    const modernizeTextElements = document.querySelectorAll(".modernize-text");

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const windowWidth = window.innerWidth;
      const scrollPercentage = (mouseX / windowWidth) * 100;

      modernizeTextElements.forEach((element, index) => {
        const topValue = `${scrollPercentage - 90}px`;
        element.style.left = topValue;
      });
    };

    contact.current.addEventListener("mousemove", handleMouseMove);
  }, []);

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
          <div className="modernize-container">
            <div className="modernize-column modernize-column-1">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
            <div className="modernize-column modernize-column-2">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
            <div className="modernize-column modernize-column-3">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
            <div className="modernize-column modernize-column-4">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
            <div className="modernize-column modernize-column-5">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
            <div className="modernize-column modernize-column-6">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
            <div className="modernize-column modernize-column-7">
              <div className="modernize-text">
                <div>MODERNIZE</div>
                <div>MODERNIZE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
