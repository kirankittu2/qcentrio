import Button from "@/app/ui/global/button";
import CopyrightBar from "@/app/ui/global/copyrightbar";
import Footer from "@/app/ui/global/footer";
import JobContact from "@/app/ui/global/job-contact";
import NavBarContainer from "@/app/ui/global/nav-bar-container";
import Link from "next/link";

export const metadata = {
  title: "Sr.Angular Developer - Airline Domain | Qcentrio Careers",
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
        Sr.Angular Developer - Airline Domain
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
            <td>Angular Lead Developer</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>5 - 10 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Bangalore Rural, Chennai</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: Any Graduate</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              Airline Domain, Coding Standards, Frontend Development, Angular
              Developer, OOPS concepts, Logging, node.js, Angular Development,
              react.js, Angular, REST API, large-scale product development,
              cordova, Ionic Angular, JavaScript, HTML5, oops, Exception
              Handling, Bootstrap, React Native, css3.
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Must have worked on a large-scale product development effort and has
          experience working with geographically dispersed teams.
        </li>
        <li>Should be willing to contribute 100% of time coding.</li>
        <li>
          Strong fundamentals OOPS concepts, Exception Handling, Coding
          Standards, Logging.
        </li>
        <li>Proficient in Angular framework.</li>
        <li>Excellent skills in JavaScript, Bootstrap, HTML5, and CSS3.</li>
        <li>Good working exposure with REST API.</li>
        <li>Knowledge of Node JS and frameworks available for it.</li>
        <li>Cordova/Ionic/React Native will be an added advantage.</li>
        <li>
          Very strong knowledge in object-oriented concepts & design patterns.
        </li>
        <li>Good communication skills & good team player.</li>
        <li>
          Demonstrable abilities to optimize code. Focus on quality & ability to
          perform code reviews.
        </li>
        <li>Ability to guide other team members on technical front.</li>
        <li>Strong analytical skills for effective problem solving.</li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>IT Services & Consulting</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>IT & Information Security</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Part Time, Temporary/Contractual</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>IT Infrastructure Services</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
