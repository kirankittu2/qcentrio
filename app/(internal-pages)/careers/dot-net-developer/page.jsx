import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: ".Net Developer - ASP/Blazor | Qcentrio Careers",
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
        .Net Developer - ASP/Blazor
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
            <td>6 - 10 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Kolkata, Bengaluru</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: B.Tech/B.E. in Any Specialization PG: Any Postgraduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              .Net, Azure, LINQ, HTML5, JavaScript, Blazor, ASP.NET, Entity
              Framework, Visual Studio, SQL Server, WCF, CSS3.
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Analyse, Design, Development, Co-ordination, Implementation and
          Maintenance of Web/Mobile applications.
        </li>
        <li>Preparation of functional/technical specification documents.</li>
        <li>
          Design and develop software subsystems that communicate in real time
          to external services using Web Services and/or APIs.
        </li>
        <li>
          Build software applications that are deployed in a cloud-based,
          virtual environment.
        </li>
        <li>
          Analyse customer requirements and translate them into technical
          requirements.
        </li>
        <li>
          Manage delivery to both the functional and non-functional
          requirements, including performance, scalability, availability,
          reliability and security.
        </li>
        <li>
          Solve complex technical problems and effectively communicate solutions
          to systems architects, peers and management.
        </li>
        <li>
          Develop RESTful webservices and integrations between custom website
          applications, content management systems and ecommerce platforms.
        </li>
        <li>
          Collaborate with infrastructure team, DBAs, and other software
          developers to assist in resolving problems with software products or
          company software systems.
        </li>
        <li>
          Provide accurate estimates as well as clearly communicating status of
          tasks and identification of risks.
        </li>
        <li>
          Complete all phases of SDLC including analysis, design, development,
          testing, and support utilizing Scrum/Agile methodologies.
        </li>
        <li>
          Innovate and provide functional applications with intuitive
          interfaces.
        </li>
        <li>
          Demonstration of self-driven, highly motivated, and excellent
          communication skills.
        </li>
        <li>
          Provide technical advice, instruction, and training to other
          unit/department personnel with less experience.
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
