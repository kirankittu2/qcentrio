import Button from "@/app/ui/global/button";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import CompanyList from "@/app/ui/home-page/company-list";
import banner from "@/public/products-main.png";
import Image from "next/image";

export default function Products() {
  return (
    <div className="products">
      <div className="hero">
        <NavBarContainer />
      </div>
      <ProductsMain />
      <ProductList />
      <AllProducts />
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
      <CompanyList />
    </div>
  );
}

function AllProducts() {
  return (
    <div className="all-products-section section">
      <div className=""></div>
    </div>
  );
}
