import Image from "next/image";
import Button from "./button";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-column-container">
        <div className="footer-column">
          <h2 className="footer-heading">Resources</h2>
          <p className="footer-item">Case Studies</p>
          <p className="footer-item">Insights</p>
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
            <a href="/offerings/business-value-enhancement-services">
              Business Value Enhancement
            </a>
          </p>
          <p className="footer-item">
            <a href="/offerings/advisory-and-strategic-services">
              Advisory and Strategic Services
            </a>
          </p>
          <p className="footer-item">
            <a href="/offerings/business-optimization-and-analytics-services">
              Business Optimization and Analytics
            </a>
          </p>
          <p className="footer-item">
            <a href="/offerings/advanced-technology-solutions">
              Advanced Technology Solutions
            </a>
          </p>
          <p className="footer-item">
            <a href="/offerings/cloud-infra-and-security-services">
              Cloud Infrastructure & Security
            </a>
          </p>
          <p className="footer-item">
            <a href="/offerings/blockchain-advisory-and-offerings">
              Blockchain Services & Solutions
            </a>
          </p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Legal</h2>
          <p className="footer-item">Terms & Conditions</p>
          <p className="footer-item">Privacy Policy</p>
          <p className="footer-item">Cookie Policy</p>
        </div>
        <div className="footer-form-column">
          <h2 className="footer-form-heading">
            <span>Stay ahead </span>in a rapidly changing world.
          </h2>
          <p className="mb-[20px]">
            Subscribe to our Insights, our monthly look at the critical issues
            facing global businesses.
          </p>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacyCheckbox"
              className="footerCheckbox"
            />
            <label htmlFor="privacyCheckbox" className="customCheckbox"></label>{" "}
            <span className="privacy-checkbox-text">
              *I have read the Privacy Policy and agree to its terms.
            </span>
          </div>
          <div className="subscribe-container">
            <input type="text" placeholder="Email Address" />
            <Button name="Lets Talk" />
          </div>
        </div>
      </div>
      <SocialLinks />
    </footer>
  );
}
