"use client";

import { footerMail } from "@/app/lib/actions";
import Button from "./button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FooterEmail() {
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
        .execute("6LdTKMUpAAAAAOUf_fNbftCXwdXc5KLdgZov7P74", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          const response = await footerMail(formData);
          setSubmitting(response.success);
          setError(response.success);
          if (response.success) {
            router.push("/thank-you");
          }
        });
    });
  }

  return (
    <div
      data-option="up"
      className="lets-talk-container animate animate-hidden">
      {!error && <p className="form-error">Error Submitting Form</p>}
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email Address" />
        <div className="input-btn">
          <Button name={!submitting ? "Submitting..." : "Subscribe"} />
        </div>
      </form>
    </div>
  );
}
