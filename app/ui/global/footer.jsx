import Image from "next/image";
import Button from "./button";
import SocialLinks from "./social-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-column-container">
        <div className="footer-columns-holder">
          <div className="footer-column">
            <h2 className="footer-heading">Insights</h2>
            <p className="footer-item">Prespectives</p>
            <p className="footer-item">Case Studies</p>
            <p className="footer-item">Thought Leadership</p>
            <p className="footer-item">News</p>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Company</h2>
            <p className="footer-item">About Us</p>
            <p className="footer-item">Careers</p>
            <p className="footer-item">Partners</p>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Transformations</h2>
            <p className="footer-item">
              <Link href="/offerings/business-value-enhancement-services">
                Business Value Enhancement
              </Link>
            </p>
            <p className="footer-item">
              <Link href="/offerings/advisory-and-strategic-services">
                Advisory and Strategic Services
              </Link>
            </p>
            <p className="footer-item">
              <Link href="/offerings/business-optimization-and-analytics-services">
                Business Optimization and Analytics
              </Link>
            </p>
            <p className="footer-item">
              <Link href="/offerings/advanced-technology-solutions">
                Advanced Technology Solutions
              </Link>
            </p>
            <p className="footer-item">
              <Link href="/offerings/cloud-infra-and-security-services">
                Cloud Infrastructure & Security
              </Link>
            </p>
            <p className="footer-item">
              <Link href="/offerings/blockchain-advisory-and-offerings">
                Blockchain Services & Solutions
              </Link>
            </p>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Legal</h2>
            <p className="footer-item">Terms & Conditions</p>
            <p className="footer-item">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <p className="footer-item">Cookie Policy</p>
          </div>
        </div>
        <div>
          <div className="footer-form-column">
            <h2 className="footer-form-heading">
              <span>Stay ahead </span>in a rapidly changing world.
            </h2>
            <p className="footer-form-sub-heading">
              Subscribe to our Insights, our monthly look at the critical issues
              facing global businesses.
            </p>
            <div className="privacy-policy-check-text">
              <div className="footer-checkbox">
                <input type="checkbox" id="privacy-policy" />
                <label
                  className="privacy-checkbox-text"
                  htmlFor="privacy-policy">
                  *I have read the&nbsp;
                  <span>
                    <Link className="" href="">
                      Privacy Policy
                    </Link>
                  </span>
                  &nbsp;and agree to its terms.
                </label>
              </div>
            </div>
            <div className="lets-talk-container">
              <input type="text" placeholder="Email Address" />
              <div className="input-btn">
                <Button name="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </footer>
  );
}
