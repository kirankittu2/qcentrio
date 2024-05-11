import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import OtherLinks from "@/app/ui/privacy-policy/other-links";
import Link from "next/link";

export const metadata = {
  title:
    "Qcentrio Privacy Policy: Protecting Your Information and Ensuring GDPR Compliance",
  description:
    "Your privacy is important to us. Learn more about our commitment to safeguarding your information and keeping it confidential at Qcentrio - your trusted partner for privacy protection.",
};

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="hero">
        <NavBarContainer />
      </div>
      <div className="section privacy-policy-heading-section  ">
        <h1
          data-option="strip-slide-up"
          className="animate strip-slide-up strip-slide-black">
          OUR PRIVACY POLICY
        </h1>
        <p>EFFECTIVE DATE: 24/03/2024</p>
      </div>
      <div className="section privacy-policy-content-section">
        <div className="privacy-policy-content">
          <p>
            Qcentrio is committed to safeguarding your privacy and taking
            reasonable measures to keep your information confidential.
          </p>
          <h2>Privacy and confidentiality</h2>
          <p>
            We respect your privacy and treat the information provided through
            our website inquiry forms as private and confidential. Your data
            (name, phone number, and email address) will only be used to
            communicate about our services and solutions. Without your
            permission, your data will never be shared, sold, leased, or
            provided to third-party companies for marketing or other purposes.
            Therefore, we have strict policies and appropriate tools to prevent
            unauthorized access, use, and/or disclosure of your data.
          </p>
          <p>
            We may need to share your data with approved consultants,
            affiliates, and business partners to provide our services and
            solutions.
          </p>
          <h2>
            Your information (cookies) is used to provide you with a better
            service
          </h2>
          <p>
            Our corporate website, www.qcentrio.com, uses cookies to provide a
            personalized and meaningful user experience. We solely use the data
            gathered by cookies to enhance our website’s services and solutions.
            The cookies do not provide us remote access to your systems or
            access to any personal information you have not shared with us. We
            will never disclose your location or customer-specific data to the
            general public.
          </p>
          <p>
            Cookies are stored, saved, and restricted to the memory of your
            browser or system. You can disable them in your browser's settings.
            However, this may prevent you from fully using our website.
          </p>
          <h2>External website links</h2>
          <p>
            Third-party links on our website are provided only for your ease and
            convenience and must be used at your risk. Qcentrio is not
            responsible for these third-party websites' content, features, or
            security/privacy policies in any way.
          </p>
          <h2>GDPR Compliance (For European Union visitors to our website)</h2>
          <p>
            Basic identity information submitted by you on our websites, such as
            your name, contact number, email address, company name, and country,
            and web/online data, such as your IP address, cookies, and system
            location, is maintained safely and privately. This information will
            only be used to communicate with current and prospective clients
            about our products, services, and services.
          </p>
          <p>
            Unless a longer retention period is required by law or for
            legitimate business purposes that are closely related, we will not
            keep this personal information for longer than necessary to achieve
            the aims outlined in this privacy statement.
          </p>
          <h2>Privacy policy updates</h2>
          <p>
            Qcentrio will regularly review, revise, or update its privacy
            policy. We'll also ensure our most current privacy policy is
            accessible on our website.
          </p>
          <h2>How to get in touch</h2>
          <p>
            We strictly adhere to our privacy policies. If you have questions
            about our privacy policy, please email us at
            <Link href=""> info@qcentrio.com.</Link>
          </p>
        </div>
        <OtherLinks />
      </div>
      <Footer />
      <CopyrightBar />
    </div>
  );
}
