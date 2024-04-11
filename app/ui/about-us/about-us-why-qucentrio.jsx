import Card from "../global/card";
import image1 from "@/public/hr-person.svg";
import image2 from "@/public/location-crosshairs.svg";
import image3 from "@/public/chess.svg";
import image4 from "@/public/user-shield.svg";
import image5 from "@/public/employee-man-alt.svg";

export default function AboutUSWhyQucentrio() {
  return (
    <div className="balance-section about-us-why-qcentrio-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading head animate strip-slide-up strip-slide-green">
        WHY CHOOSE QCENTRIO
      </h2>
      <h2
        data-option="up"
        className="sub-heading subhead animate animate-hidden">
        Dedicated To Delivering Quality, Earning Trust With Every Success
      </h2>
      <div className="success-path-category-container">
        <Card
          image={image1}
          title="Flexible Team"
          content="A flexible and agile cloud team that can ramp up and down as needed."
        />
        <Card
          image={image2}
          title="End-to-End Execution"
          content="A flexible and agile cloud team that can ramp up and down as needed."
        />
        <Card
          image={image3}
          title="Repeatable"
          content="A flexible and agile cloud team that can ramp up and down as needed."
        />
        <Card
          image={image4}
          title="Innovation"
          content="A flexible and agile cloud team that can ramp up and down as needed."
        />
        <Card
          image={image5}
          title="Flexible team"
          content="A flexible and agile cloud team that can ramp up and down as needed."
        />
      </div>
    </div>
  );
}
