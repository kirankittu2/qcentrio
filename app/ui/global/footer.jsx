import Image from "next/image";
import Button from "./button";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-column-container">
        <div className="footer-column">
          <h2 className="footer-heading">Resources</h2>
          <p className="footer-item">Blog</p>
          <p className="footer-item">How to Videos</p>
          <p className="footer-item">Case Studies</p>
          <p className="footer-item">Webinars & Podcast</p>
          <p className="footer-item">News</p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Company</h2>
          <p className="footer-item">About Us</p>
          <p className="footer-item">Our Story</p>
          <p className="footer-item">Partners</p>
          <p className="footer-item">Success Stories</p>
          <p className="footer-item">UniQ Voices</p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Transformations</h2>
          <p className="footer-item">
            Technology & Digital Digital Transformation
          </p>
          <p className="footer-item">Cutting Edge Technology Solutions</p>
          <p className="footer-item">Enhancing Business Efficiencies</p>
          <p className="footer-item">Agile Innovation</p>
          <p className="footer-item">Harnessing Intelligence</p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Legal</h2>
          <p className="footer-item">Terms & Use</p>
          <p className="footer-item">Privacy Notice</p>
          <p className="footer-item">Accessibility</p>
          <p className="footer-item">Cookie Notice</p>
          <p className="footer-item">Manage Cookies</p>
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
            <input type="checkbox" className="footer-checkbox" />
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
