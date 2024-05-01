"use client";

import Image from "next/image";
import Button from "./button";
import needSomethingBanner from "@/public/need-something-banner.png";
import close from "@/public/close.svg";

export default function NeedSomethingModal({
  setNeedSomething,
  scrollPosition,
}) {
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
          sendMail(formData);
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
        <div className="p-[50px]">
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
              <Button name="Submit Request" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
