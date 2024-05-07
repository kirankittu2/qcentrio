import "@/app/ui/globals.css";
import "@/app/ui/case-study.css";
import "@/app/ui/contact-us.css";
import "@/app/ui/about-us.css";
import "animate.css";
import dynamic from "next/dynamic";
import Animate from "./ui/global/animate";
import Script from "next/script";
import CookieConsent from "./ui/global/cookie-consent";
import Image from "next/image";
import cookieImage from "@/public/cookie.svg";
import { checkCookie } from "./lib/utils";
const Cursor = dynamic(() => import("./ui/global/cursor"), { ssr: false });

export default async function RootLayout({ children }) {
  const consent = await checkCookie();
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
