"use client";

import { insightsMail } from "@/app/lib/actions";
import Button from "../global/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogHero() {
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
          const response = await insightsMail(formData);
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
      {!error && <p className="form-error">Error Submitting Form</p>}
      <form onSubmit={onSubmit}>
        <div
          data-option="up"
          className="lets-talk-container animate animate-hidden">
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            required
          />
          <div className="input-btn">
            <Button name={!submitting ? "Submitting..." : "Lets Talk"} />
          </div>
        </div>
      </form>
    </div>
  );
}
