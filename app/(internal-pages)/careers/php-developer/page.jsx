import Button from "@/app/ui/global/button";
import Contact from "@/app/ui/global/contact";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "PHP DEVELOPER - SYMFONY/MYSQL | Qcentrio Careers",
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
        PHP DEVELOPER - SYMFONY/MYSQL
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
            <td>Full Stack Developer</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>3 - 5 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Hyderabad</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>
              UG: BCA in Any Specialization, B.Sc in Any Specialization,
              B.Tech/B.E. in Any Specialization
            </td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              PHP, CSS, REST, Symfony, Cloud Services, Design Patterns, MySQL ,
              Node.js, HTML, HTTP, React.js, AWS
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Candidate is responsible for Developing, maintaining, and improving
          the systems, as well as for operating and monitoring, to meet high
          availability and scalability requirements.
        </li>
        <li>
          Will work with PHP 7 or 8.x, Symfony 4, MySQL, ReactJS, and NodeJS as
          well as Amazon Web Services (AWS)
        </li>
        <li>
          Should have at least 3 years of professional experience in developing
          web applications and services.
        </li>
        <li>
          Should have knowledge of PHP 7 or 8.x or above, JavaScript, and MySQL
          (experience with NoSQL databases, frontend frameworks, and Unix shell
          scripting would be of benefit).
        </li>
        <li>Exposure to ReactJS, NodeJS, and Symfony is a plus.</li>
        <li>
          Should be proficient in object-oriented programming and open to
          additional programming paradigms.
        </li>
        <li>
          Should have a firm knowledge of web technologies and standards (e.g.
          HTML, CSS, HTTP, REST) and experience with design and architecture
          patterns.
        </li>
        <li>Should be familiar with concepts of clean code and refactoring.</li>
        <li>
          Responsible for software quality and familiar with DDD, TDD, pair
          programming, and code reviews.
        </li>
        <li>Should be a team player and like to think outside the box.</li>
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
            <td>Full Time, Permanent</td>
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
