"use client";

import { useEffect } from "react";
import Button from "./button";
import { storeCookie } from "@/app/lib/actions";

export default function OtpField() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".otp-field input");
    inputs.forEach((input, index) => {
      input.dataset.index = index;
      input.addEventListener("keyup", handleOtp);
    });

    function handleOtp(e) {
      const input = e.target;
      let value = input.value;
      let isValidInput = value.match(/[0-9a-z]/gi);
      input.value = "";
      input.value = isValidInput ? value[0] : "";
      let fieldIndex = input.dataset.index;
      if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
      }
      if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
      }
    }
  }, []);

  return (
    <form action={storeCookie}>
      <div className="otp-field">
        <input name="code1" type="text" maxLength="1" />
        <input name="code2" type="text" maxLength="1" />
        <input name="code3" type="text" maxLength="1" />
        <input name="code4" type="text" maxLength="1" />
      </div>
      <Button name="Access Now" />
    </form>
  );
}
