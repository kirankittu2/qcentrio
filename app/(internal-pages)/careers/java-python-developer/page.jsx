import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "Java Python Developer | Qcentrio Careers",
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
        Java Python Developer
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
            <td>Java & Python Developer</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>5+ Yrs</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Mumbai, Chennai, Bangalore, Hyderabad, Pune</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>
              UG: Any Graduate, B.Tech/B.E. in Any Specialization PG: Any
              Postgraduate
            </td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              PL/SQL, Python, Java, Rabbitmq, Spring boot, Hibernate / JPA,
              Aviation, Kafka, Log4J, CI/CD, Spring AOP, Agile Scrum
              methodologies, Microservices, Spring Boot Java, Airlines,
              JavaScript, JBPM, Spring Batch, Spring Security, Version Control,
              Spring, RESTful web services, jQuery, Airport, Camunda.
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Grasp the business domain and the database structure of the respective
          module
        </li>
        <li>Decode the business requirements into technical requirements</li>
        <li>Design, code, unit test and debug the Java code</li>
        <li>
          Complete code development to ensure product releases are achieved on
          time
        </li>
        <li>
          Follow coding best practices, write clean modular code & maintain
          optimal code quality
        </li>
        <li>
          Code regression testing and fix any bugs identified during the testing
          cycle
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
            <td>Aviation</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>Aviation & Aerospace</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Permanent</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>Airline Services</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
