import "@/app/ui/globals.css";
import "@/app/ui/case-study.css";
import "@/app/ui/contact-us.css";
import "@/app/ui/about-us.css";
import "@/app/ui/responsive.css";
import "animate.css";
import dynamic from "next/dynamic";
import Animate from "./ui/global/animate";
import Script from "next/script";
import CookieConsent from "./ui/global/cookie-consent";
import Image from "next/image";
import cookieImage from "@/public/cookie.svg";
import { checkConsent, checkLoader } from "./lib/utils";
import MobileMenu from "./ui/global/mobile-menu";
import PageLoader from "./ui/page-loader";
import { GoogleTagManager } from "@next/third-parties/google";
const Cursor = dynamic(() => import("./ui/global/cursor"), { ssr: false });

export default async function RootLayout({ children }) {
  const consent = await checkConsent();
  const load = await checkLoader();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          sizes="any"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"></link>
      </head>
      <GoogleTagManager gtmId="G-ML28Z8QK7R" />
      <body>
        {children}
        {consent && (
          <div className="cookie-preferences">
            <Image src={cookieImage} alt="" />
          </div>
        )}
        {!load && <PageLoader visible={load} />}
        <Animate />
        <MobileMenu />
        <CookieConsent />
        <Cursor />
        <Script src="https://www.google.com/recaptcha/api.js?render=6LeHIP4pAAAAAFlkwmI4z7K9FZG21vtJ7-aiWlt0"></Script>
      </body>
    </html>
  );
}
