import "@/app/ui/globals.css";
import "@/app/ui/services.css";
import "@/app/ui/case-study.css";
import "@/app/ui/contact-us.css";
import "@/app/ui/about-us.css";
import "animate.css";
import dynamic from "next/dynamic";
import Animate from "./ui/global/animate";
const Cursor = dynamic(() => import("./ui/global/cursor"), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <Animate />
        <Cursor />
      </body>
    </html>
  );
}
