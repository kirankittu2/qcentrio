import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "Dft Design Engineer | Qcentrio Careers",
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
        Dft Design Engineer
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
            <td>DFT Design Engineer</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>6 - 11 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Bangalore,Karnataka</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: B.Tech/B.E. in Any Specialization</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              DFT Design Engineer, ATPG, SCAN, MBIST, JTAG, Tessent, Tetramax,
              Modus, Genus, DFTmax, SSN, SMSTCL, Python JTAG, DFT, ATPG, MBIST,
              Scan
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>Required Technical and Professional Expertise in DFT</li>
        <li>Minimum 6 to 12 years of relevant experience.</li>
        <li>
          Proficient in DFT architectures & methodologies that includes Scan,
          ATPG, MBIST, JTAG, etc.
        </li>
        <li>
          Sound knowledge of DFT tools/methodology from cadence /Synopsys/Mentor
          tools
        </li>
        <li>Good Experience in Python/Perl/TCL scripting</li>
        <li>
          Proven Communications skills and the ability to effectively work with
          cross functional teams across geographies are required.
        </li>
        <li>
          Looking for smart and enthusiastic Engineer to develop Design for
          Testability.
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
            <td>Research & Development</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Permanent</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>Engineering & Manufacturing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
