import Button from "@/app/ui/global/button";
import Image from "next/image";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <ul className="main-nav">
        <li>
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
        </li>
        <li className="main-nav-link">
          <Link href="/services">Services</Link>
        </li>
        <li className="main-nav-link">
          <Link href="/industries">Industries</Link>
        </li>
        <li className="main-nav-link">
          <Link href="/resources">Resources</Link>
        </li>
        <li className="main-nav-link">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="main-nav-link">
          <Link href="/careers">Careers</Link>
        </li>
        <li className="mr-[20px]">
          <div className="search-container">
            <input className="search" placeholder="Search"></input>
            <Image className="input-icon" src={search} alt="" />
          </div>
        </li>
        <li>
          <Link href="/contact-us">
            <Button name="Contact Us" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
