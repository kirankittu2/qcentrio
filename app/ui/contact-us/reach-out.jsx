"use client";

import { contactUsReactOutMail } from "@/app/lib/actions";
import Button from "../global/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReachOut() {
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
          const response = await contactUsReactOutMail(formData);
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
    <div className="reach-out-section">
      <div className="reach-out-container">
        <h2 className="reach-out-heading">HOW TO REACH OUT TO QCENTRIO</h2>
        <p className="reach-out-sub-heading">
          Email us to discuss with our experts.
        </p>
        {!error && <p className="form-error">Error Submitting Form</p>}
        <form onSubmit={onSubmit}>
          <div className="reach-out-form">
            <input name="email" placeholder="Email Address" required></input>
            <Button
              name={!submitting ? "Submitting..." : "Request Call Back"}
            />
          </div>
        </form>

        {/* <div className="reach-out-holders">
          <div className="reach-out-holder-column">
            <Image src={comment} alt="" />
            <p>
              Talk to <a>our experienced advisors</a> to get personalized
              assistance.
            </p>
          </div>
          <div className="reach-out-holder-divider"></div>
          <div className="reach-out-holder-column">
            <Image src={mail} alt="" />
            <p>
              Email us to <a>info@qcentrio.com</a> and discuss with experts.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
