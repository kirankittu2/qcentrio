"use client";

import { insightsMail } from "@/app/lib/actions";
import Button from "../global/button";

export default function BlogHero() {
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
          insightsMail(formData);
        });
    });
  }
  return (
    <div className="blogs-hero-content">
      <div className="breadcrump">
        HOME <span></span> INSIGHTS
      </div>
      <h1
        data-option="strip-slide-up"
        className="blog-hero-heading animate strip-slide-up strip-slide-white">
        QCENTRIO INSIGHTS
      </h1>
      <p
        data-option="up"
        className="blog-hero-sub-heading animate animate-hidden">
        Insights to help you bring your best ideas to life. Subscribe to get the
        best tips, tricks, and success stories in your inbox.
      </p>
      <form onSubmit={onSubmit}>
        <div
          data-option="up"
          className="lets-talk-container animate animate-hidden">
          <input name="email" type="text" placeholder="Email Address" />
          <div className="input-btn">
            <Button name="Lets Talk" />
          </div>
        </div>
      </form>
    </div>
  );
}
