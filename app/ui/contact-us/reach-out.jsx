import Image from "next/image";
import comment from "@/public/comment.svg";
import mail from "@/public/mail.svg";
import Button from "../global/button";

export default function ReachOut() {
  return (
    <div className="reach-out-section">
      <div className="reach-out-container">
        <h2 className="reach-out-heading">HOW TO REACH OUT TO QCENTRIO</h2>
        <p className="reach-out-sub-heading">
          Email us to discuss with our experts.
        </p>
        <div className="reach-out-form">
          <input placeholder="Email Address"></input>
          <Button name="Request Call Back" />
        </div>
        {/* <div className="reach-out-holders">
          <div className="reach-out-holder-column">
            <Image src={comment} alt="" />
            <p>
              Talk to <a>our experienced advisors</a> to get personalized
              assistance.
            </p>
          </div>
          <div className="reach-out-holder-divider"></div>
          <div className="reach-out-holder-column">
            <Image src={mail} alt="" />
            <p>
              Email us to <a>info@qcentrio.com</a> and discuss with experts.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
