import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "SAP FICO Consultant - Implementation & Support | Qcentrio Careers",
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
        SAP FICO Consultant - Implementation & Support
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
            <td>Functional Consultant</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>8 - 13 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Kolkata, Bengaluru</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: Any Graduate PG: Any Postgraduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              SAP FICO, SAP CO, SAP SD, SAP FICO Consultant, SAP MM, SAP BW, SAP
              FI, SAP Implementation, SAP Support
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>Expert knowledge of the SAP FICO module.</li>
        <li>Solid experience in managing SAP projects.</li>
        <li>
          Extensive knowledge of business processes and application
          functionality to enable the resolution of complex problems and
          influence continuous improvement.
        </li>
        <li>Ability to operate in a Regional environment.</li>
        <li>
          Understanding of Information Technology and a deep appreciation of its
          business application.
        </li>
        <li>
          Strong understanding and demonstrated use of IS and how it can be used
          for competitive advantage to support the business process.
        </li>
        <li>
          Ability to work and communicate with all levels of employees both
          local and global within the Group.
        </li>
        <li>Excellent communication skills with a proactive attitude.</li>
        <li>Good skills in spoken and written English.</li>
        <li>Able to grasp business and IS concepts quickly.</li>
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
            <td> IT Consulting</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
