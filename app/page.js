import Navbar from "@/app/ui/global/nav-bar";
import Carousel from "./ui/home-page/carousel";
import CompanyList from "./ui/home-page/company-list";
import About from "./ui/home-page/about";
import Services from "./ui/home-page/services";
import Journey from "./ui/home-page/journey";
import WhyQcentrio from "./ui/home-page/why-qcentrio";
import Discover from "./ui/home-page/discover";
import Contact from "./ui/global/contact";
import Footer from "./ui/global/footer";
import CopyrightBar from "./ui/global/copyrightbar";
import Image from "next/image";
import down from "@/public/hero-down.svg";
import Insignts from "./ui/home-page/insights";

export default function Home() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="">
          <Carousel />
        </div>
        <div className="hero-carousel-down">
          <Image src={down} alt="" />
        </div>
      </div>
      <CompanyList />
      <About />
      <Services />
      <Journey />
      <WhyQcentrio />
      <Insignts
        title="Front and Center: Qcentrio Insights"
        subheading="Stay abreast with the pulse of progress—our latest thought leadership, strategic insights, and forward-thinking perspectives."
      />
      <Discover />
      <Contact />
      <Footer />
      <CopyrightBar />
    </>
  );
}
