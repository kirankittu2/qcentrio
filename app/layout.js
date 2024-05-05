import "@/app/ui/globals.css";
import "@/app/ui/case-study.css";
import "@/app/ui/contact-us.css";
import "@/app/ui/about-us.css";
import "animate.css";
import dynamic from "next/dynamic";
import Animate from "./ui/global/animate";
import Script from "next/script";
import CookieConsent from "./ui/global/cookie-consent";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import cookieImage from "@/public/cookie.svg";
const Cursor = dynamic(() => import("./ui/global/cursor"), { ssr: false });

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const consent = cookieStore.get("qcentrio-cookie-consent");
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        {consent && (
          <div className="cookie-preferences">
            <Image src={cookieImage} alt="" />
          </div>
        )}
        <Animate />
        <CookieConsent />
        <Cursor />
        <Script src="https://www.google.com/recaptcha/api.js?render=6LdTKMUpAAAAAOUf_fNbftCXwdXc5KLdgZov7P74"></Script>
      </body>
    </html>
  );
}
