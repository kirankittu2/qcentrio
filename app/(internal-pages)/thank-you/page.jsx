"use client";

import Navbar from "@/app/ui/global/nav-bar";
import Image from "next/image";
import tick from "@/public/tick.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBarContainer from "@/app/ui/global/nav-bar-container";

export default function ThankYouPage() {
  return (
    <div className="hero thank-you-page">
      <NavBarContainer />
      <div className="thank-you-content-container">
        <ThankYouPageContent />
      </div>
    </div>
  );
}

function ThankYouPageContent() {
  const [count, setCount] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        router.back();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, router]);

  return (
    <div className="thank-you-content-holder">
      <Image className="mb-[30px]" src={tick} alt="" />
      <h1 className="section-heading">Thank You</h1>
      <p>
        We appreciate your interest. Your form has been successfully submitted.
        Please check your email for further details and confirmation.
      </p>
      <p className="text-highlight">
        If you have any questions or concerns, feel free to contact us at{" "}
        <Link href=""> info@qcentrio.com</Link>
      </p>
      <div className="thank-you-note">
        <strong>Note:</strong> You will be redirected back to the previous page
        in {count} seconds.
      </div>
    </div>
  );
}
