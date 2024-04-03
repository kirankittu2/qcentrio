import { storeCookie } from "@/app/lib/actions";
import Button from "@/app/ui/global/button";
import Image from "next/image";
import logo from "@/public/logo.svg";
import OtpField from "@/app/ui/global/otp-field";

export default function WebsiteAccess() {
  return (
    <div className="website-access-page-container">
      <div className="website-access-page-header">
        <div className="website-access-page-logo">
          <div>
            <Image fill src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="website-access-page-main">
        <div className="website-access-page-content">
          <h2>WEBSITE ACCESS</h2>
          <p>
            Please enter four digit pin to access the website. Keep pin
            confidential and do not share it with anyone. If you have forgotten
            pin or need assistance, please contact our support team.
          </p>
          <OtpField />
        </div>
      </div>
      <div className="website-access-page-footer"></div>
    </div>
  );
}
