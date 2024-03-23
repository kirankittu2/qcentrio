import Image from "next/image";
import logo from "@/public/logo.svg";

export default function CopyrightBar() {
  return (
    <div className="copyright-section">
      <div>Copyrights © 2024 Qcentrio, All Rights Reserved.</div>
      <Image src={logo} alt="" />
      <div className="handcrafted">
        Handcrafted with ❤ by <a href="https://www.x-verity.com">X-Verity</a>
      </div>
    </div>
  );
}
