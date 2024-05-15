import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "SAP FICO & S/4 HANA Consultant - BTP Module | Qcentrio Careers",
};

export default function Job() {
  return (
    <div className="job-page">
      <div className="hero">
        <NavBarContainer />
      </div>
      <JobHead />
      <JobDescription />
      <div id="apply-now" className="job-page-contact-form">
        <JobContact
          heading="Step into Tomorrow with Qcentrio"
          subheading="Join forces with Qcentrio to redefine your industry. Let's collaborate to unlock growth drivers, accelerate innovation, and shape the future."
        />
      </div>
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function JobHead() {
  return (
    <div className="job-head-section">
      <h1
        data-option="strip-slide-up"
        className="animate strip-slide-up strip-slide-black">
        SAP FICO & S/4 HANA Consultant - BTP Module
      </h1>
      <Link href="#apply-now">
        <Button name="Apply Now" />
      </Link>
    </div>
  );
}

function JobDescription() {
  return (
    <div className="job-description-section">
      <h2
        data-option="up"
        className="job-description-heading animate animate-hidden">
        JOB DESCRIPTION
      </h2>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Role:</th>
            <td> Functional Consultant</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>8 - 13 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Mumbai, Delhi / NCR, Bengaluru</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: B.Tech/B.E. in Any Specialization PG: Any Postgraduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              SAP, SAP FICO/SAP HANA Techno-Functional Consultant, SAP AR, SAP
              AP, SAP BT, SAP GL, SAP Implementation
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>Deep understanding of BTP architecture and BTP services</li>
        <li>
          Experience of building applications in SAP BTP Platform (BTP-Restful
          Application Programming)
        </li>
        <li>Experience in Developer Extensibility (Embedded Steampunk)</li>
        <li>S/4HANA conversion experience</li>
        <li>
          Knowledge on open standards like Cloud Foundry will be appreciated
        </li>
        <li>Tools experience in SAP BAS and SAP BTP Cockpit.</li>
        <li>
          Strong experience with SAPUI5 and/or HTML5 or other Front-end Web
          Application development frameworks and Full Stack Web IDE
        </li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>Management Consulting</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>Consulting</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Permanent</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td> IT Consulting</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
