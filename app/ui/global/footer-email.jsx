"use client";

import { footerMail } from "@/app/lib/actions";
import Button from "./button";

export default function FooterEmail() {
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
          footerMail(formData);
        });
    });
  }

  return (
    <div
      data-option="up"
      className="lets-talk-container animate animate-hidden">
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email Address" />
        <div className="input-btn">
          <Button name="Subscribe" />
        </div>
      </form>
    </div>
  );
}
