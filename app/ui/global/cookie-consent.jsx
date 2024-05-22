"use client";

import { useEffect, useState } from "react";
import Button from "./button";
import Link from "next/link";
import { cookieConsent } from "@/app/lib/actions";
import { getCookie } from "cookies-next";
import { useFormState } from "react-dom";
import Image from "next/image";
import close from "@/public/close.svg";

export default function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const consentCookie = getCookie("qcentrio-cookie-consent");
  const [scrollPosition, setScrollPosition] = useState(0);
  const initialState = {
    success: false,
    message: "",
  };
  const [state, formAction] = useFormState(cookieConsent, initialState);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (banner) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.width = "";
    };
  }, [banner]);

  useEffect(() => {
    if (!consentCookie) {
      const timeout = setTimeout(() => {
        setBanner(true);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [consentCookie]);

  useEffect(() => {
    if (state.success) {
      setBanner(false);
    }
  }, [state]);
  return (
    <div>
      {banner && (
        <div style={{ top: scrollPosition + "px" }} className="consent-banner">
          <div className="consent-message">
            <p>
              We use cookies for the best user experience on our website,
              including to personalize content & offerings. By clicking “Accept
              Cookies” you agree to our use of cookies. For further details
              please visit our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/cookie-policy">Cookies Policy.</Link>
            </p>
            <form action={formAction}>
              <Button name="Accept Cookies" />
            </form>
            <div onClick={() => setBanner(false)} className="consent-close">
              <div>
                <Image fill src={close} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
