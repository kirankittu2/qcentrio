import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import Navbar from "@/app/ui/global/nav-bar";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import OtherLinks from "@/app/ui/privacy-policy/other-links";
import Link from "next/link";

export const metadata = {
  title:
    "Qcentrio Cookies Policy: Learn About Our Use of Cookies and How to Manage Them",
  description:
    "Keep your data safe and secure with Qcentrio's cookie policy. Learn how we use cookies on our websites to provide you with the best experience while protecting your privacy. Read now.183 characters.",
};

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="hero">
        <NavBarContainer />
      </div>
      <div className="section privacy-policy-heading-section">
        <h1
          data-option="strip-slide-up"
          className="animate strip-slide-up strip-slide-black">
          COOKIES POLICY
        </h1>
        <p>EFFECTIVE DATE: 24/03/2024</p>
      </div>
      <div className="section privacy-policy-content-section">
        <div className="privacy-policy-content">
          <p>
            Please read the below cookies policy carefully before using our
            websites.
          </p>
          <p>
            This policy describes how cookies are used on Qcentrio websites.
          </p>
          <p>
            This policy may be amended occasionally, and the latest policy will
            be posted on this website page.
          </p>
          <p>
            Using Qcentrio websites, you agree that the Company can place
            cookies on your device(s). Please remember that some website
            services will not function if your browser(s) or device(s) does not
            accept cookies.
          </p>
          <p>
            Please note that where the Company has another type of presence on a
            site owned by a third party, such as a page or handle on social
            media site(s), that Third Party’s Privacy Policy and terms of use
            will govern rather than this Policy, lest explicitly stated
            otherwise.
          </p>
          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are an essential part of the internet browsing experience.
            They allow websites to remember your preferences and settings, such
            as your login information, language preference, and shopping cart
            contents. Cookies are small text files that are downloaded onto your
            computing device when you visit a website. They are created by the
            website's server and stored on your device's hard drive.
          </p>
          <p>
            Cookies enable websites to recognize your device when you return to
            the same website or visit other websites that use the same cookies.
            This helps to improve your browsing experience by allowing websites
            to tailor their content to your preferences. For example, if you
            visit an e-commerce site and add an item to your cart, cookies will
            remember this information. When you return to the site later, the
            item will still be in your cart, and you can continue your shopping.
          </p>
          <p>
            Cookies come in different types, such as session cookies and
            persistent cookies. Session cookies are used to remember your
            activity on a website during a single browsing session. Persistent
            cookies, on the other hand, remain on your device for a longer time,
            even after you close your browser. These cookies are used to
            remember your preferences and settings over multiple browsing
            sessions.
          </p>
          <p>
            Overall, cookies are an important tool that websites use to improve
            your browsing experience. However, it is essential to understand
            that cookies can also be used to collect personal information and
            track your online activity. Therefore, it is crucial to be aware of
            the cookies being used by websites and to manage your cookie
            settings accordingly.
          </p>
          <p>
            Cookies also perform different activities, like helping the Company
            understand how this website is being used, letting you navigate
            between pages efficiently, remembering your preferences, and, in
            general, improving your browsing experience. Cookies also help
            ensure that online marketing is more pertinent to your interests.
          </p>
          <p>
            Below, you can acquire information about the cookies we use and how
            to manage them.
          </p>
          <h2>2. What type of Cookies does the Qcentrio website use?</h2>
          <p>
            The Cookies used on most websites can be generally categorized into
            Strictly Necessary, Performance, Functionality, and Targeting.
          </p>
          <ul>
            <li>
              <h3>Strictly Necessary Cookies</h3>
              <p>
                These cookies are vital, enabling you to navigate the website
                and use its features, such as accessing secure areas. Without
                these cookies, the services you have asked for cannot be
                rendered. These cookies don’t gather information about you; they
                are used for marketing or remembering where you have been on the
                internet.
              </p>
            </li>
            <li>
              <h3>Performance Cookies</h3>
              <p>
                These cookies collect information about how you use a website,
                such as which pages you visit most often and whether you get
                error messages from certain pages. They don't gather information
                that identifies you. The information these cookies collect is
                anonymous and is only utilized to improve how a website works.
              </p>
              <p>
                These cookies are not used to target you for online marketing.
                Without these cookies, we cannot learn how our website is
                performing and make appropriate improvements that could improve
                your browsing experience.
              </p>
            </li>
            <li>
              <h3>Functionality Cookies</h3>
              <p>
                These cookies allow a website to remember your choices (such as
                your username, language, or region) and customize the website to
                provide enhanced features and content.
              </p>
              <p>
                Without these cookies, a website cannot remember the preferences
                you have made earlier or personalize your browsing experience.
              </p>
            </li>
            <li>
              <h3>Targeting Cookies</h3>
              <p>
                These cookies are used to tailor marketing to you as per your
                interests. They are also utilized to limit the number of times
                you see an advertisement and help measure the advertising
                campaign's efficacy.
              </p>
              <p>
                They will memorize that you have visited a website, and this
                information may be shared with other organizations, such as
                advertisers. Even though these cookies can track your visits to
                other websites, they usually don’t recognize who you are.
              </p>
            </li>
          </ul>
          <p>
            Without these cookies, online advertisements you encounter will be
            less relevant to you and your interests.
          </p>
          <h2>3. What happens if Cookies are disabled?</h2>
          <p>
            If cookies are disabled on your computing device(s), your experience
            on the website may be limited. Additionally, you may be unable to
            browse freely or use specific functions (s) or features.
          </p>
          <h2>4. How do you turn Cookies on / off?</h2>
          <p>
            By default, most web browsers allow cookies, but you can choose to
            turn them on or off depending on your preferences. To do this, you
            will need to change the settings on your web browser. The process of
            changing these settings varies depending on the browser you are
            using, but it usually involves going to the browser's settings or
            options menu and navigating to the privacy or security section. From
            there, you can enable or disable cookies as per your requirement.
            Keep in mind that disabling cookies may limit your ability to use
            certain features of websites or affect your browsing experience.
          </p>
          <h2>
            5. What happens to cookies that have been downloaded in the past?
          </h2>
          <p>
            If you have disabled cookies through your web browser, we may still
            use information collected from existing cookies. Still, we will stop
            using the disabled cookies to gather further information.
          </p>
        </div>
        <OtherLinks />
      </div>
      <Footer />
      <CopyrightBar />
    </div>
  );
}
