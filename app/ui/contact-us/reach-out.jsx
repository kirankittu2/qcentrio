"use client";

import { contactUsReactOutMail } from "@/app/lib/actions";
import Button from "../global/button";

export default function ReachOut() {
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
          contactUsReactOutMail(formData);
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
        <form onSubmit={onSubmit}>
          <div className="reach-out-form">
            <input name="email" placeholder="Email Address"></input>
            <Button name="Request Call Back" />
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
