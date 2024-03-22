import Image from "next/image";
import logo from "@/public/logo.svg";

export default function CopyrightBar() {
  return (
    <div className="copyright-section">
      <div>Terms & Conditions - Piracy Policy</div>
      <Image src={logo} alt="" />
      <div>Copyrights © 2024 Qcentrio, All Rights Reserved.</div>
    </div>
  );
}
