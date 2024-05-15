import Button from "@/app/ui/global/button";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import banner from "@/public/products-main.png";
import Image from "next/image";
import product1 from "@/public/products/product-1.png";
import product2 from "@/public/products/product-2.png";
import ameya1 from "@/public/products/ameya-1.png";
import ameya2 from "@/public/products/ameya-2.png";
import ameya3 from "@/public/products/ameya-3.png";
import logo1 from "@/public/products/1.png";
import logo2 from "@/public/products/2.png";
import logo3 from "@/public/products/3.png";
import logo4 from "@/public/products/4.png";
import logo5 from "@/public/products/5.png";
import logo6 from "@/public/products/6.png";
import logo7 from "@/public/products/7.png";
import logo8 from "@/public/products/8.png";
import logo9 from "@/public/products/9.png";
import logo10 from "@/public/products/10.png";
import Contact from "@/app/ui/global/contact";
import Footer from "@/app/ui/global/footer";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Link from "next/link";

export const metadata = {
  title: "Global Authorized Partner of Qcentrio Banking Solutions | Qcentrio",
  description:
    "Discover banking and financial solutions from Qcentrio, including Remitree, Conciliare, and Sherlock, available globally through Qcentrio. Enhance your operations with our trusted, innovative technology in the US, Europe, Singapore, and Australia.",
};

export default function Products() {
  return (
    <div className="products">
      <div className="hero">
        <NavBarContainer />
      </div>
      <ProductsMain />
      <ProductList />
      <AllProducts />
      <ProductsBrief />
      <SubServiceWhyChooseSection />
      <div id="get-started">
        <Contact
          heading="Transform your banking operations with leading solutions"
          subheading="Contact Qcentrio today to discuss how our products can tailor-fit your needs and propel your business forward."
        />
      </div>
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function ProductsMain() {
  return (
    <div className="products-hero-section section">
      <div data-option="up" class="breadcrump animate animate-hidden">
        <a href="/">HOME </a>
        <span></span>PRODUCTS
      </div>
      <div className="products-hero-main">
        <div>
          <h1
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            EMPOWER YOUR BANKING SERVICES GLOBALLY WITH QCENTRIO SOLUTIONS
          </h1>
          <p
            data-option="up"
            className="products-hero-main-content animate animate-hidden">
            Banks and financial institutions face significant challenges in
            managing complex remittance processes, ensuring efficient
            transaction reconciliation, and adhering to stringent anti-money
            laundering regulations in the constantly evolving landscape of
            global finance.
          </p>
          <p
            data-option="up"
            className="products-hero-main-highlight animate animate-hidden">
            Qcentrio’s comprehensive suite of banking solutions, is ideally
            positioned to address these challenges across the US, Europe,
            Singapore, and Australia. It enables financial institutions
            worldwide to leverage cutting-edge technologies to enhance
            operational efficiency, reduce costs, and elevate customer
            satisfaction.
          </p>
          <Link href="#get-started">
            <Button name="Get Started" />
          </Link>
        </div>
        <div>
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="products-list-section">
      <p data-option="up" className="animate animate-hidden">
        Our partnership with Ameya enables financial institutions worldwide to
        leverage cutting-edge technologies to enhance operational efficiency,
        reduce costs, and elevate customer satisfaction.
      </p>
      <h2
        data-option="strip-slide-up"
        className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
        DISCOVER VARIOUS BANKING PRODUCTS’ LIST
      </h2>
      <p
        data-option="up"
        className="success-path-heading animate animate-hidden">
        All Products
      </p>
      <ProductListScroll />
    </div>
  );
}

function ProductListScroll() {
  return (
    <div
      id="about"
      data-option="up"
      className="company-list-section animate animate-hidden">
      <div className="horizontal-scroll3">
        <Image src={logo1} alt="" />
        <Image src={logo2} alt="" />
        <Image src={logo3} alt="" />
        <Image src={logo4} alt="" />
        <Image src={logo5} alt="" />
        <Image src={logo6} alt="" />
        <Image src={logo7} alt="" />
        <Image src={logo8} alt="" />
        <Image src={logo9} alt="" />
        <Image src={logo10} alt="" />

        <Image src={logo1} alt="" />
        <Image src={logo2} alt="" />
        <Image src={logo3} alt="" />
        <Image src={logo4} alt="" />
        <Image src={logo5} alt="" />
        <Image src={logo6} alt="" />
        <Image src={logo7} alt="" />
        <Image src={logo8} alt="" />
        <Image src={logo9} alt="" />
        <Image src={logo10} alt="" />
      </div>
    </div>
  );
}

function AllProducts() {
  return (
    <div className="all-products-section section">
      <div className="product">
        <div className="product-column-1 product-column">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product1}
            alt=""
          />
        </div>
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            REMITREE
          </h2>
          <p data-option="up" className="animate animate-hidden">
            Remitree is a sophisticated solution designed to streamline the
            processing of both inward and outward foreign currency remittance
            SWIFT messages. It offers a single-window setup with customizable
            validations and a comprehensive workflow that allows different users
            to take appropriate actions until the final settlement is reached.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            It enhances customer satisfaction by ensuring faster credit to
            accounts and integrates seamlessly with various systems like CBS,
            AML, Treasury, and DMS. The feature set includes automated processes
            for foreign currency remittance, high auto-matching rates for
            transactions, and comprehensive compliance tools, making it an
            essential tool for operations teams and call centers.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">01</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            CONCILIARE
          </h2>
          <p data-option="up" className="animate animate-hidden">
            Conciliare helps respond to the challenges of financial transaction
            reconciliation within large organizations. It automates and
            streamlines traditional bank reconciliation, cash, and direct
            payments, significantly enhancing efficiency and accuracy. This
            engine supports diverse data sources and formats, offering flexible
            data set definitions and validation rules, which are critical in
            minimizing financial and reputational risks.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            Conciliare’s enterprise-wide platform streamlines workflows reduce
            operational costs and improves productivity by facilitating quicker
            discrepancy resolution. The solution’s flexibility in configuration
            and exception tracking significantly enhances regulatory compliance
            and operational efficiency, making it an invaluable asset for
            institutions seeking to improve their reconciliation processes and
            customer service quality.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-1  product-column product-column-reverse">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product2}
            alt=""
          />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">02</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-1 product-column">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product1}
            alt=""
          />
        </div>
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            Sherlock
          </h2>
          <p data-option="up" className="animate animate-hidden">
            Sherlock is an end-to-end Anti-Money Laundering (AML) solution
            designed and developed to help financial institutions apply a
            risk-based approach to monitoring customer behavior for potential
            criminal economic activities. It enables banks to manage customer
            due diligence and risk profiling effectively.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            Its rule-based monitoring and case management system are tailored
            for rigorous compliance with regulatory standards, offering various
            features, including KYC updates, transaction monitoring, and risk
            classification. Sherlock’s robust analytics and reporting
            capabilities provide financial institutions with the tools to detect
            and manage potential risks proactively, ensuring enhanced fraud
            prevention and maintaining the institution’s reputation for
            security.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">03</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            AWACS
          </h2>
          <p data-option="up" className="animate animate-hidden">
            AWACS addresses the significant challenge of non-performing assets
            in the banking sector with its comprehensive Early Warning Signal
            Solution (EWS). This system monitors loans and banking facilities,
            providing predictive insights that help preempt financial
            instability. It supports the entire asset portfolio management
            lifecycle, including special mention accounts and stressed asset
            management.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            AWACS enhances the quality of a bank’s loan portfolio by improving
            risk management and compliance with regulatory standards. Its
            comprehensive capabilities make it a crucial tool for financial
            institutions aiming to maintain asset quality and mitigate risks in
            an uncertain economic environment, thus ensuring sustained
            profitability and growth.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-1 product-column product-column-reverse">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product2}
            alt=""
          />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">04</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-1 product-column">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product1}
            alt=""
          />
        </div>
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            Bankfair
          </h2>
          <p data-option="up" className="animate animate-hidden">
            Bankfair is a digital banking software suite that transforms service
            delivery for financial institutions. It supports various banking
            operations and offers a multi-tenant, multi-currency platform with a
            customizable interface.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            With its scalability and low maintenance cost, Bankfair addresses
            critical industry challenges such as market disruption and evolving
            customer expectations. This digital banking suite enhances service
            delivery through technology, enabling financial institutions to
            achieve profitable growth while minimizing risks and operational
            costs. It is an essential solution for small to medium-sized banks
            looking to transition from traditional to digital platforms,
            ensuring competitiveness in a rapidly changing financial landscape.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">05</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            LOS
          </h2>
          <p data-option="up" className="animate animate-hidden">
            LOS provides a robust framework for handling the entire loan
            application process. It supports financial institutions with
            configurable workflows, credit scoring, and application status
            tracking, ensuring efficient processing and excellent customer
            service.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            The solution’s flexibility allows for integrating new loan products
            that are compliant with regulatory guidelines and offers both
            automated and manual processing capabilities. It improves the loan
            sanctioning cycle, reduces response times, and increases customer
            satisfaction by providing a seamless experience. This system is
            particularly beneficial in enabling branchless banking, allowing
            customers to complete banking transactions conveniently, which is
            crucial for institutions aiming to expand their digital services and
            customer reach.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-1 product-column product-column-reverse">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product2}
            alt=""
          />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">06</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-1 product-column">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product1}
            alt=""
          />
        </div>
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            ALMANAC
          </h2>
          <p data-option="up" className="animate animate-hidden">
            ALMANAC is an advanced asset liability management solution
            integrating risk management, liquidity forecasting, and regulatory
            reporting into a cohesive platform. It provides financial
            institutions with tools for detailed financial analytics, scenario
            simulation, and long-term planning, enhancing their ability to make
            informed strategic decisions.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            It helps manage liquidity and interest rate risks, supports
            compliance with Basel regulations, and facilitates efficient balance
            sheet management. Its predictive analytics and behavior modeling
            capabilities allow banks to manage capital distribution and funding
            strategies proactively, optimizing financial performance and
            ensuring robust regulatory compliance.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">07</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            RELIER
          </h2>
          <p data-option="up" className="animate animate-hidden">
            Relier offers smooth reconciliation and management of accounts that
            a bank has with other banks (Nostro accounts). It offers risk
            management by identifying potential errors and unauthorized
            transactions (frauds).
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            It supports banks in staying compliant with regulatory requirements
            and minimizes the risk of errors in international transactions.
            Hence, Relier is a significant offering that assures accuracy in
            cross-border banking operations.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-1 product-column product-column-reverse">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product2}
            alt=""
          />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">08</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-1 product-column">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product1}
            alt=""
          />
        </div>
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            PAS
          </h2>
          <p data-option="up" className="animate animate-hidden">
            Our PAS system helps with property valuations. It offers simple
            integration that helps complete the property valuation system in the
            workflow. Built on a modular architecture, PAS has the capacity to
            handle large volumes of property data.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            With the help of Advanced valuation algorithms, it considers
            stastical models to determine property values.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">09</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-2 product-column">
          <h2
            data-option="strip-slide-up"
            className="products-hero-main-heading animate strip-slide-up strip-slide-grey">
            PAGO
          </h2>
          <p data-option="up" className="animate animate-hidden">
            PAGO delivers exceptional payment experiences to its customers and
            partners. It offers brilliant solutions, including unified payment
            processing, Modular architecture, Omnichannel support, Fraud
            detection, Reporting and analysis, and compliance and security.
          </p>
          <p data-option="up" className="mb-[50px] animate animate-hidden">
            PAGO makes payment processing seamless through financial visibility
            and operational efficiency.
          </p>
          <Link href="/contact-us">
            <Button name="Book Demo" />
          </Link>
        </div>
        <div className="product-column-1 product-column product-column-reverse">
          <Image
            data-option="up"
            className="animate animate-hidden"
            src={product1}
            alt=""
          />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">10</div>
        </div>
      </div>
      <Lines />
    </div>
  );
}

function Lines() {
  return (
    <div className="dotted-lines-container">
      <div className="dotted-lines"></div>
      <div className="dotted-lines"></div>
      <div className="dotted-lines"></div>
    </div>
  );
}

function ProductsBrief() {
  return (
    <div className="products-brief-section balance-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-grey">
        Tailored Qcentrio Solutions for the Global Financial Industry
      </h2>
      <div class="success-path-container">
        <div
          data-option="up"
          class="success-path-column animate-hidden animate ">
          <div class="succes-path-num">1</div>
          <div class="success-path-content-column">
            <h2 class="success-path-heading">Retail Banking</h2>
            <p class="section-content">
              Enhance transaction experiences with real-time monitoring and
              fraud prevention.
            </p>
          </div>
        </div>
        <div
          data-option="up"
          class="success-path-column animate-hidden animate ">
          <div class="succes-path-num">2</div>
          <div class="success-path-content-column">
            <h2 class="success-path-heading">Commercial Banking</h2>
            <p class="section-content">
              Efficiently manage large-scale financial operations and commercial
              transactions.
            </p>
          </div>
        </div>
        <div
          data-option="up"
          class="success-path-column animate-hidden animate ">
          <div class="succes-path-num">3</div>
          <div class="success-path-content-column">
            <h2 class="success-path-heading">Wealth Management</h2>
            <p class="section-content">
              Secure and optimize asset management with comprehensive data
              analysis and reporting tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubServiceWhyChooseSection() {
  return (
    <div className="balance-section sub-services-why-choose-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-white">
        PROVIDING UNMATCHED VALUE TO FINANCIAL INSTITUTIONS GLOBALLY BY
        DISTRIBUTING QCENTRIO’S SOLUTIONS
      </h2>

      <div className="sub-services-why-choose-cards-holder">
        <div data-option="up" className="animate animate-hidden">
          <Image src={ameya1} alt="" />
          <h2>Operational Excellence</h2>
          <p>Automate and streamline your banking processes worldwide.</p>
        </div>
        <div data-option="up" className="animate animate-hidden">
          <Image src={ameya2} alt="" />
          <h2>Compliance and Security</h2>
          <p>
            Stay ahead of regulatory changes and secure your operations in
            multiple regions.
          </p>
        </div>
        <div data-option="up" className="animate animate-hidden">
          <Image src={ameya3} alt="" />
          <h2>Customer Satisfaction</h2>
          <p>
            Deliver faster, reliable, and more transparent services to your
            customers across diverse markets.
          </p>
        </div>
      </div>
    </div>
  );
}
