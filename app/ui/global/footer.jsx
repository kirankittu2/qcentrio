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
            <h2
              data-option="up"
              className="footer-heading animate-hidden animate">
              <Link href="http://localhost:3000/perspectives">Insights</Link>
            </h2>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="http://localhost:3000/perspectives">
                Prespectives
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="http://localhost:3000/perspectives?type=case-study">
                Case Studies
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              Thought Leadership
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              News
            </p>
          </div>
          <div className="footer-column">
            <h2
              data-option="up"
              className="footer-heading animate-hidden animate">
              Company
            </h2>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="http://localhost:3000/about-us">About Us</Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              Careers
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              Partners
            </p>
          </div>
          <div className="footer-column">
            <h2
              data-option="up"
              className="footer-heading animate-hidden animate">
              Transformations
            </h2>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/offerings/business-value-enhancement-services">
                Business Value Enhancement
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/offerings/advisory-and-strategic-services">
                Advisory and Strategic Services
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/offerings/business-optimization-and-analytics-services">
                Business Optimization and Analytics
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/offerings/advanced-technology-solutions">
                Advanced Technology Solutions
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/offerings/cloud-infra-and-security-services">
                Cloud Infrastructure & Security
              </Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/offerings/blockchain-advisory-and-offerings">
                Blockchain Services & Solutions
              </Link>
            </p>
          </div>
          <div className="footer-column">
            <h2
              data-option="up"
              className="footer-heading animate-hidden animate">
              Legal
            </h2>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <p data-option="up" className="footer-item animate-hidden animate">
              <Link href="/cookie-policy">Cookie Policy</Link>
            </p>
          </div>
        </div>
        <div>
          <div className="footer-form-column">
            <h2
              data-option="right"
              className="footer-form-heading hidden-right animate">
              <span>Stay ahead </span>in a rapidly changing world.
            </h2>
            <p
              data-option="right"
              className="footer-form-sub-heading hidden-right animate">
              Subscribe to our Insights, our monthly look at the critical issues
              facing global businesses.
            </p>
            <div className="privacy-policy-check-text">
              <div className="footer-checkbox">
                <input type="checkbox" id="privacy-policy" />
                <label
                  data-option="right"
                  className="privacy-checkbox-text hidden-right animate"
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
            <div
              data-option="right"
              className="lets-talk-container hidden-right animate">
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
