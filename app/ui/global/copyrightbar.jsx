import Image from "next/image";
import logo from "@/public/logo.svg";

export default function CopyrightBar() {
  return (
    <div className="copyright-section">
      <div data-option="left" className="hidden-left animate">
        Copyrights © 2024 Qcentrio, All Rights Reserved.
      </div>
      <div
        data-option="fade-in"
        className="flex justify-center hidden-fadeIn animate">
        <Image className="copy-right-logo" src={logo} alt="" />
      </div>
      <div data-option="right" className="handcrafted hidden-right animate">
        Handcrafted with ❤ by <a href="https://www.x-verity.com">X-Verity</a>
      </div>
    </div>
  );
}
