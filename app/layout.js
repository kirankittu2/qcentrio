import "@/app/ui/globals.css";
import "@/app/ui/services.css";
import "@/app/ui/case-study.css";
import "@/app/ui/contact-us.css";
import "@/app/ui/about-us.css";

export const metadata = {
  title: "Qcentrio - Home",
  description: "Shapped in X-Verity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
