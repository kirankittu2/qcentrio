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
      <Contact
        heading="Transform your banking operationswith leading solutions"
        subheading="Contact Qcentrio today to discuss how our products can tailor-fit your needs and propel your business forward."
      />
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function ProductsMain() {
  return (
    <div className="products-hero-section section">
      <div class="breadcrump">
        <a href="/">HOME </a>
        <span></span>PRODUCTS
      </div>
      <div className="products-hero-main">
        <div>
          <h1 className="products-hero-main-heading">
            EMPOWER YOUR BANKING SERVICES GLOBALLY WITH AMEYA’S INNOVATIVE
            SOLUTIONS THROUGH QCENTRIO
          </h1>
          <p className="products-hero-main-content">
            Banks and financial institutions face significant challenges in
            managing complex remittance processes, ensuring efficient
            transaction reconciliation, and adhering to stringent anti-money
            laundering regulations in the constantly evolving landscape of
            global finance.
          </p>
          <p className="products-hero-main-highlight">
            Qcentrio, as the authorized global partner of Ameya’s comprehensive
            suite of banking solutions, is ideally positioned to address these
            challenges across the US, Europe, Singapore, and Australia.
          </p>
          <Button name="Get Started" />
        </div>
        <div>
          <Image src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="products-list-section">
      <p>
        Our partnership with Ameya enables financial institutions worldwide to
        leverage cutting-edge technologies to enhance operational efficiency,
        reduce costs, and elevate customer satisfaction.
      </p>
      <h2 className="products-hero-main-heading">
        DISCOVER VARIOUS BANKING PRODUCTS’ LIST
      </h2>
      <p className="success-path-heading">All Products</p>
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
      </div>
    </div>
  );
}

function AllProducts() {
  return (
    <div className="all-products-section section">
      <div className="product">
        <div className="product-column-1 product-column">
          <Image src={product1} alt="" />
        </div>
        <div className="product-column-2 product-column">
          <h2 className="products-hero-main-heading">REMITREE</h2>
          <p>
            Remitree is a sophisticated solution designed to streamline the
            processing of both inward and outward foreign currency remittance
            SWIFT messages. It offers a single-window setup with customizable
            validations and a comprehensive workflow that allows different users
            to take appropriate actions until the final settlement is reached.
          </p>
          <p className="mb-[50px]">
            It enhances customer satisfaction by ensuring faster credit to
            accounts and integrates seamlessly with various systems like CBS,
            AML, Treasury, and DMS. The feature set includes automated processes
            for foreign currency remittance, high auto-matching rates for
            transactions, and comprehensive compliance tools, making it an
            essential tool for operations teams and call centers.
          </p>
          <Button name="Book Demo" />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">01</div>
        </div>
      </div>
      <Lines />
      <div className="product">
        <div className="product-column-2 product-column">
          <h2 className="products-hero-main-heading">REMITREE</h2>
          <p>
            Remitree is a sophisticated solution designed to streamline the
            processing of both inward and outward foreign currency remittance
            SWIFT messages. It offers a single-window setup with customizable
            validations and a comprehensive workflow that allows different users
            to take appropriate actions until the final settlement is reached.
          </p>
          <p className="mb-[50px]">
            It enhances customer satisfaction by ensuring faster credit to
            accounts and integrates seamlessly with various systems like CBS,
            AML, Treasury, and DMS. The feature set includes automated processes
            for foreign currency remittance, high auto-matching rates for
            transactions, and comprehensive compliance tools, making it an
            essential tool for operations teams and call centers.
          </p>
          <Button name="Book Demo" />
        </div>
        <div className="product-column-1 product-column">
          <Image src={product2} alt="" />
        </div>
        <div className="product-column-3 product-column">
          <div className="product-num">02</div>
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
      <h2 className="section-heading">
        Tailored Ameya Solutions From Qcentrio for the Global Financial Industry
      </h2>
      <div class="success-path-container">
        <div
          data-option="up"
          class="success-path-column animate-hidden animate slideup">
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
          class="success-path-column animate-hidden animate slideup">
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
          class="success-path-column animate-hidden animate slideup">
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
        DISTRIBUTING AMEYA’S SOLUTIONS
      </h2>

      <div className="sub-services-why-choose-cards-holder">
        <div>
          <Image src={ameya1} alt="" />
          <h2>Operational Excellence</h2>
          <p>Automate and streamline your banking processes worldwide.</p>
        </div>
        <div>
          <Image src={ameya2} alt="" />
          <h2>Compliance and Security</h2>
          <p>
            Stay ahead of regulatory changes and secure your operations in
            multiple regions.
          </p>
        </div>
        <div>
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
