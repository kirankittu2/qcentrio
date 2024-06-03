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
          title="People-First Approach"
          content="Our company places great emphasis on nurturing talent and upholding substantial employee retention rates."
        />
        <Card
          image={image2}
          title="Client-Centric Focus"
          content="Our steadfast commitment to quality and client trust is mirrored in our unblemished 100% referenceability rate."
        />
        <Card
          image={image3}
          title="Strategic Innovation"
          content="We lead enterprises through digital transformation with strategic foresight and expertise."
        />
        <Card
          image={image4}
          title="Diverse Expertise"
          content="Our team excels in managing complex projects and delivering sophisticated technology-based solutions."
        />
        <Card
          image={image5}
          title="Employee Satisfaction"
          content="We pride ourselves on our high employee retention rate and focus on talent development."
        />
      </div>
    </div>
  );
}
