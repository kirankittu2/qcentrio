import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "Airline Domain - Java Fullstack Developer | Qcentrio Careers",
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
        Airline Domain - Java Fullstack Developer
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
            <td>Java Fullstack Developer - Airline Domain</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>4 to 10 Yrs</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Mumbai, Bangalore, Chennai</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>
              UG: B.Tech/B.E. in Any Specialization, Any Graduate PG: Any
              Postgraduate
            </td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              Java, Spring boot, Spring, Hibernate, Spring AOP, Spring Security,
              RESTful webservices, Java Script, JQuery, Angular, HTML5, CSS,
              Bootstrap, Ant, Maven, Log4J, Spring Batch, PL/SQL, Drools,
              RabbitMQ
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Understand the business domain and database structure of the
          respective module.
        </li>
        <li>Translate business requirements into technical specifications.</li>
        <li>Design, code, unit test, and debug Java applications.</li>
        <li>Develop microservices architecture.</li>
        <li>
          Ensure timely completion of code development to meet product release
          deadlines.
        </li>
        <li>
          Adhere to coding best practices and maintain optimal code quality.
        </li>
        <li>Perform regression testing and address any identified bugs.</li>
        <li>
          Participate in Scrum meetings and follow Scrum practices guided by the
          Scrum Master.
        </li>
        <li>
          Collaborate with Subject Matter Experts (SMEs), Product Managers, and
          other project team members for requirements specification and detailed
          engineering analysis.
        </li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>Aviation</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>Engineering - Software & QA</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Temporary/Contractual</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>Software Development</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
