"use client";

import linkedin from "@/public/linkedin.svg";
import author from "@/public/blog-author.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AuthorBlock() {
  const pathName = usePathname();
  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        "qcentrio.com" + pathName
      )}`,
      "_blank"
    );
  };
  return (
    <div data-option="up" className="author-conatiner animate animate-hidden">
      <div className="blog-page-author-head-container">
        <h2 className="blog-page-side-heading">AUTHOR OF THIS BLOG</h2>
        <Image
          onClick={shareLinkedIn}
          className="author-linkedin-link"
          src={linkedin}
          alt=""
        />
      </div>
      <div className="flex items-center gap-2.5">
        <div>
          <Image src={author} alt="" />
        </div>
        <div>
          <h3 className="author-name">Michael Frank</h3>
          <p className="author-role">Lead of Global Practice</p>
        </div>
      </div>
    </div>
  );
}
