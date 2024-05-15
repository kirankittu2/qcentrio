import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "SAP ECP/HCM Consultant | Qcentrio Careers",
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
        SAP ECP/HCM Consultant
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
            <td>SAP ECP/HCM Consultant</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>8 - 13 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>
              currently WFH (preferred from Hyderabad, Bangalore, Chennai, or
              Mumbai)
            </td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: B.Tech/B.E. in Any Specialization PG: Any Postgraduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              SAP, SuccessFactors, SAP HCM, SAP EC, SAP GL, SuccessFactors EC,
              SAP Payroll, SAP Implementation
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Minimum 8 Years experience in SAP HCM Payroll + SuccessFactors Payroll
          with SF EC / EC payroll modules.
        </li>
        <li>Required expertise in Indian Payroll.</li>
        <li>
          Must have Strong Proficiency in SF EC Payroll / SAP HCM Payroll.
        </li>
        <li>
          Full life-cycle implementations on SAP EC Payroll / SAP HCM Payroll
          Design, build and configure application to meet business process and
          Interact with the client for solution requirements.
        </li>
        <li>
          Understand Integration between EC and ECP Point to Point Replication
          or EC to On Premise BIB/CPI Replication
        </li>
        <li>
          Expertise on Payroll Schemas and PCRs, Postings to Finance, Bank
          Transfer setup.
        </li>
        <li>
          Strong Proficiency in SF EC Payroll, SAP HCM Payroll Integration
          between EC and ECP Point to Point Replication, EC on premise BIB/CPI,
          Payroll Control Center, EC Time off ECP, WFS Expertise on Payroll
          Schemas, Postings to G or L Accounts, Bank Transfer setup Knowledge of
          data Integration.
        </li>
        <li>
          Very sound knowledge on Indian Payroll, Taxation, Benefits, PCRs, Wage
          Type characteristics (Processing/Cumulation classes), Payroll
          postings, Statutory Infotypes, Payslip Configurations, Statutory
          reports.
        </li>
        <li>
          Should possess ability to configure EC datamodels, workflows, MDF
          Alerts & business rules, Benefits, Time off/Time sheet, Document
          templates.
        </li>
        <li>
          Payroll control center, Setting up Payroll systems, data replication,
          Payment configuration.
        </li>
        <li>
          Understanding of the performance management process in a global
          organization is an added advantage.
        </li>
        <li>
          Exhibit strong leadership and comprehension abilities to develop
          business documents and to anchor system support activities.
        </li>
        <li>
          Implementation, project experience with HR technologies, Support,
          process engineering/ re-engineering and documentation.
        </li>
        <li>
          Ability to work across cultures and build strong relationships in a
          global environment coordination within the team and knowledge sharing.
        </li>
        <li>Should be certified in atleast one of SF EC / ECP.</li>
        <li>Must have experience in SF compensation.</li>
        <li>Should have been part of at least 2 implementations.</li>
        <li>Ability to handle and work in global support environment.</li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>IT Services & Consulting</td>
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
            <td>Other Consulting</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
