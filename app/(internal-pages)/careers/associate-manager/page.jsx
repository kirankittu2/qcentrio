import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "Associate Manager | Qcentrio Careers",
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
        Associate Manager
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
            <td>Technical Lead</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>6 - 10 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Bangalore Rural, Chennai, Mumbai (All Areas)</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: Any Graduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              Kafka, Microservices, Java, Airlines, Spring Boot, Maven, CSS,
              Jasper Server, Ant, SVN, Java Fullstack, Spring AOP, Angular,
              Drools, Log4J, Agile, Bootstrap, HTML, Spring Batch, Spring
              Security, REST, Hibernate, jBPM, jQuery, JavaScript, RabbitMQ,
              RESTful webservices, PL/SQL, Camunda.
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Proven skills in Java, Spring boot, Spring, Hibernate / JPA, Spring
          AOP, Spring Security, RESTful webservices, Java Script, JQuery,
          Angular, HTML5, CSS, Bootstrap, Ant, Maven, Log4J.
        </li>
        <li>
          Expertise in Spring Batch, PL/SQL, Drools, RabbitMQ, Jasper Server,
          Camunda /jBPM will be added advantage
        </li>
        <li>Experience with test-driven development.</li>
        <li>
          Experience with Distributed system design and architecture process.
        </li>
        <li>Exposure to Agile Scrum methodologies</li>
        <li>Work experience in SVN / any equivalent version control system</li>
        <li>Knowledge of CI/CD systems, preferably Jenkins</li>
        <li>Possess English speaking/reading/writing skills</li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>IT Services & Consulting</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>Engineering - Software & QA</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Part Time, Temporary/Contractual</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td> Software Development</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
