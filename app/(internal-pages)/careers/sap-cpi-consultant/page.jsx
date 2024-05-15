import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "SAP CPI CONSULTANT | Qcentrio Careers",
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
        SAP CPI CONSULTANT
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
            <td>SAP CPI Consultant</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>5 - 10 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Remote</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: B.Tech/B.E. in Any Specialization</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              S/4 Hana, Successfactors, Employee Central, Sap Cpi, Cloud
              Platform Integration, Sap Cloud Platform
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Experience in working on pre-package content for SAP C4C, Commerce
          Cloud, CPQ, S4 HANA/ECC etc.
        </li>
        <li>
          Experience in working on SAP and Non-SAP Interfaces, 3rd party
          Integrations.
        </li>
        <li>
          Should have good exposure to handling non-standard requirements,
          custom requirements, all features of CPI.
        </li>
        <li>
          Experience in building integration strategy for customers having on
          premise and cloud application systems (ECC, S/4 HANA, Hybris, C4C,
          CPQ, FSM etc.)
        </li>
        <li>Strong debugging and problem-solving skills in SAP CPI</li>
        <li>
          {" "}
          Hands-on experience in developing complex mapping (XML, XSLT etc.)
        </li>
        <li>
          Working knowledge with most standard adapters (ODATA, SOAP, REST,
          SFTP, IDOC etc.)
        </li>
        <li>Hands on experience writing groovy scripts or java scripts.</li>
        <li>
          Excellent understanding of business flow & expertise in requirement
          gathering from functional/business department
        </li>
        <li>
          Ability to translate business requirements to proposed SAP CPI
          solutions.
        </li>
        <li>
          Knowledgeable on testing tools soap UI, Postman, OData Modeler etc.
        </li>
        <li>Knowledge of cloud connector and SAP Cloud platform</li>
        <li>
          Hands-on experience working on SAP CPI Neo and Cloud foundry tenants.
        </li>
        <li>Hands-on experience on transport mechanisms in CPI</li>
        <li>Knowledge experience in CPI API Management, EventMesh.</li>
        <li>
          Good trouble shooting skills between various Integrations and very
          sound knowledge on Cloud Integration between EC and ECP-Payroll
          systems.
        </li>
        <li>
          Good understanding of Payroll systems SAP HCM Payroll, EC, ECP and
          Integrations between SAP HR, EC and ECP
        </li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>IT Services & Consulting</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>IT & Information Security</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Permanent</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>IT Infrastructure Services</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
