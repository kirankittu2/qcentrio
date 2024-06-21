"use client";

import { caseStudyMail } from "@/app/lib/actions";
import Button from "../global/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CaseStudyHero({ data, value }) {
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
          const response = await caseStudyMail(formData);
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
    <div className="case-study-hero-content">
      <div className="breadcrump">
        INSIGHTS <span></span> CASE STUDY
      </div>
      <h1
        data-option="strip-slide-up"
        className="hero-heading animate strip-slide-up strip-slide-white">
        {data.heading}
      </h1>
      <form onSubmit={onSubmit}>
        <div
          data-option="up"
          className="lets-talk-container animate animate-hidden">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input type="text" defaultValue={value} name="type" hidden />
          <div className="input-btn">
            <Button name={!submitting ? "Submitting..." : "Download"} />
          </div>
        </div>
      </form>
      {!error && <p className="form-error">Error Submitting Form</p>}
    </div>
  );
}
