import Image from "next/image";
import logo from "@/public/logo.svg";

export default function CopyrightBar() {
  return (
    <div className="copyright-section">
      <div>Copyrights © 2024 Qcentrio, All Rights Reserved.</div>
      <div>
        <Image className="copy-right-logo" src={logo} alt="" />
      </div>
      <div className="handcrafted">Handcrafted with ❤ by X-Verity</div>
    </div>
  );
}
