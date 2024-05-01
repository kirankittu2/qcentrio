"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OtherLinks() {
  const pathname = usePathname();

  return (
    <div className="easy-nav-section">
      <div data-option="up" className="easy-nav-links animate animate-hidden">
        <h2>LEGAL LINKS</h2>
        <p>
          <Link
            className={`${pathname == "/privacy-policy" ? "active" : ""}`}
            href="/privacy-policy">
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link
            className={`${pathname == "/terms-and-conditions" ? "active" : ""}`}
            href="/terms-and-conditions">
            Terms & Conditions
          </Link>
        </p>
        <p>
          <Link
            className={`${pathname == "/cookie-policy" ? "active" : ""}`}
            href="/cookie-policy">
            Cookie Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
