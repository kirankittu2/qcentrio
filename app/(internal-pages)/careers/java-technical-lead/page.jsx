import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "Java Technical Lead | Qcentrio Careers",
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
        Java Technical Lead
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
            <td> Java Technical Lead</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>9 - 14 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Hiring office located in Mumbai (All Areas)</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: Any Graduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              Java, Kafka, Java Lead, Hibernate, Peer Reviews, Product
              Management, Unit Testing, UI Frameworks, OOAD, SMESonarqube, ETL
              Tool, Git Version Control, Angular, Microservices, SQL, Jenkins,
              Agile Methodology, Rest, Linux, RDBMS, Solid Principles, PLSQL,
              Scrum.
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>Lead technical design, development and delivery of the product</li>
        <li>Lead, guide and mentor the development team</li>
        <li>
          Write technical documents high-level design document, developer
          guidelines, data models, etc.
        </li>
        <li>Recommend technical solutions and best practices</li>
        <li>Decode the business requirements into technical requirements</li>
        <li>
          Do Code review of your peers/teammates and constantly upskill your
          team
        </li>
        <li>
          Do code coverage in tools like SonarQube and ensure optimal code
          quality
        </li>
        <li>
          Grasp the business domain and the database structure of the respective
          module
        </li>
        <li>Design, code, unit test and debug the Java code</li>
        <li>Design & develop microservices</li>
        <li>
          Follow coding best practices, write clean modular code & maintain
          optimal code quality
        </li>
        <li>
          Being part of the Scrum Team, adhere/follow the Scrum practices as
          guided by the Scrum Master
        </li>
        <li>
          Collaborate with SME, Product Managers and other members of the
          project team in requirements specification and detailed engineering
          analysis.
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
            <td> Project & Program Management</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Part Time, Temporary/Contractual</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>Technology / IT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
