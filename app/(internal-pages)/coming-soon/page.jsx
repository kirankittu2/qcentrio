import Image from "next/image";
import logo from "@/public/logo.svg";
import Button from "@/app/ui/global/button";
import { singleMail } from "@/app/lib/actions";
import CircleAnime from "@/app/ui/global/circle-anime";

export const metadata = {
  title: "Qcentrio : We're Upgrading",
};

export default function ComingSoon() {
  return (
    <div className="coming-soon-page-container">
      <div className="coming-soon-page-header">
        <div className="coming-soon-page-logo">
          <div>
            <Image fill src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="coming-soon-page-main">
        <div className="coming-soon-page-content">
          <h1>WE'RE UPGRADING!</h1>
          <h2>
            A UNIVERSE OF INNOVATION AND CREATIVITY, DESIGNED TO SPARK YOUR
            IMAGINATION AND EXPERIENCE.
          </h2>
          <p>
            Our team is dedicated to bringing you something truly phenomenal,
            with every element refined to perfection. Don't miss out on the
            exciting updates and be the first to experience.
          </p>
          <form action={singleMail}>
            <div className="coming-soon-contact-column">
              <input name="name" type="text" placeholder="Name" required />
              <input
                name="email"
                type="text"
                placeholder="Email Address"
                required
              />
            </div>
            <Button name="Stay Tuned" />
          </form>
        </div>
        <div className="coming-soon-page-image">
          <CircleAnime />
        </div>
      </div>
      <div className="coming-soon-page-footer">
        <div></div>
      </div>
    </div>
  );
}
