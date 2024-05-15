import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "International Voice Process | Qcentrio Careers",
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
        International Voice Process
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
            <td>Technical Support - Voice / Blended</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>1 - 4 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Hiring office located in Bengaluru</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: Any Graduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              International Voice Process, International Call Center, Voice And
              Accent, US accent, Inbound Voice Process, BPO Voice, Australian
              Technical Voice Process, International Process, International
              Voice, US Voice Process, Voice, International BPO, International
              Calling, UK Process.
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Bachelor's Degree in IT, Computer Science, or other related fields
        </li>
        <li>
          1+ years of technical support experience in Storage and/or
          Virtualization, Backup, Linux server, Windows server
        </li>
        <li>Creative problem solving</li>
        <li>Strong aptitude for learning new technologies.</li>
        <li>Good verbal and written communication and interpersonal skills.</li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td> BPO / Call Centre</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>Customer Success, Service & Operations</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Permanent</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td> Voice / Blended</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
