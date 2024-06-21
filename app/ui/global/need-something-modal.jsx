"use client";

import Image from "next/image";
import Button from "./button";
import needSomethingBanner from "@/public/need-something-banner.png";
import close from "@/public/close.svg";
import { needSomethingMail } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NeedSomethingModal({
  setNeedSomething,
  scrollPosition,
}) {
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
        .execute("6LeHIP4pAAAAAFlkwmI4z7K9FZG21vtJ7-aiWlt0", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          const response = await needSomethingMail(formData);
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

  function handleModalClose(e) {
    if (e.target.getAttribute("data-name") == "modal") {
      setNeedSomething(false);
    }
  }

  return (
    <div
      onClick={handleModalClose}
      className="need-something-modal-container"
      data-name="modal"
      style={{ top: scrollPosition + "px" }}>
      <div className="need-something-modal-inner">
        <div className="need-something-modal-image">
          <Image fill src={needSomethingBanner} alt="" />
        </div>
        <div className="need-something-modal-content">
          <div className="need-something-modal-close">
            <Image
              data-name="modal"
              onClick={handleModalClose}
              src={close}
              alt=""
            />
          </div>
          <h2 className="contact-heading">Need Something Else?</h2>
          <p className="section-content contact-sub-heading">
            Contact us and we can figure out how to adapt to your needs
          </p>
          {!error && <p className="form-error">Error Submitting Form</p>}
          <form onSubmit={onSubmit}>
            <div className="contact-column">
              <input
                data-option="up"
                name="first-name"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                data-option="up"
                name="last-name"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="contact-column">
              <input
                data-option="up"
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                data-option="up"
                name="contact"
                type="text"
                placeholder="Contact Number"
              />
            </div>
            <textarea
              data-option="up"
              name="message"
              placeholder="Your Message"
              rows="10"></textarea>
            <div className="contact-btn-container">
              <Button name={!submitting ? "Submitting..." : "Submit Request"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
