import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

export default function CopyrightBar() {
  return (
    <div className="copyright-section">
      <div className="main-logo-conatiner">
        <Image fill className="copy-right-logo" src={logo} alt="" />
      </div>
      <div className="copyright-text">
        Copyrights © 2024 <Link href="/">Qcentrio</Link>, All Rights Reserved.
      </div>
    </div>
  );
}
