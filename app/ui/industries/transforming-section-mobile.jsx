"use client";

import { useEffect, useRef } from "react";
import aerospace from "@/public/aerospace.png";
import banking from "@/public/banking.png";
import consumer from "@/public/consumer-goods.png";
import automotive from "@/public/automotive.png";
import communication from "@/public/communication-and-media.png";
import energy from "@/public/energy-and-utilities.png";
import healtcare from "@/public/healthcare.png";
import technology from "@/public/technology.png";
import manufacturing from "@/public/manufacturing.png";
import insurance from "@/public/insurance.png";
import publicService from "@/public/public-service.png";
import retail from "@/public/retail.png";
import software from "@/public/software.png";
import travel from "@/public/travel.png";
import Image from "next/image";

export default function TransformingSectionMobile() {
  const content1 = useRef(null);
  const content2 = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observeElements = (selector, className) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      }, options);
      elements.forEach((el) => observer.observe(el));
    };

    observeElements(".transfromings-item", "slideup");
  }, []);

  return (
    <div className="transfroming-section transfroming-section-mobile">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-green">
        TRANSFORMING SECTORS WITH SPECIALIZED DIGITAL STRATEGIES
      </h2>
      <div className="transfromings-scroll-list">
        <div ref={content1} className="transfromings-scroll-list-content ">
          <div className="transfromings-item">
            <div>
              <h2>Aerospace & Defense</h2>
              <p>
                Embrace a <span>digital-first mindset</span> to propel your
                aerospace and defense enterprise to new heights of innovation
                and operational efficiency.
              </p>
              <p>
                We help you leverage secure{" "}
                <span>communication technologies and automated systems</span>{" "}
                that optimize the supply chain and enhance mission-critical
                operations, which are required for such a critical sector.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={aerospace}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={automotive}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Automotive</h2>
              <p>
                Experience how leading automotive industry experts drive their
                enterprises forward with <span>digital services</span> that
                support the integration of autonomous, connected, and
                eco-friendly technologies.
              </p>
              <p>
                We help automotive leaders redefine the customer journey and
                streamline production with{" "}
                <span>intelligent, data-driven solutions.</span>
              </p>
            </div>
          </div>

          <div className="transfromings-item">
            <div>
              <h2>Banking</h2>
              <p>
                Transform your banking establishment with support from{" "}
                <span>category-leading financial technology services.</span>
              </p>
              <p>
                We blend deep industry expertise with digital know-how to create
                seamless banking experiences, enhance security, and introduce{" "}
                <span>agile methodologies</span> that transform traditional
                banking into digital-first enterprises.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={banking}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={communication}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Communications & Media</h2>
              <p>
                Engage audiences with compelling digital media experiences,
                utilizing <span>data analytics for strategic engagement</span>{" "}
                and monetization across various platforms and channels, ensuring
                every message resonates in the{" "}
                <span>dynamic media sector.</span>
              </p>
              <p>
                Further, we accelerate <span>adoption</span> and{" "}
                <span>time-to-market</span> and build innovative business
                structures with our service support.
              </p>
            </div>
          </div>

          <div className="transfromings-item">
            <div>
              <h2>Consumer Goods & Services</h2>
              <p>
                Create dynamic experiences for your consumers through{" "}
                <span>purpose-driven analytics</span> and{" "}
                <span>responsive supply chain management.</span>
              </p>
              <p>
                Drive top-line and bottom-line growth with new-age technologies
                like <span>GenAI and advanced analytics</span> to be at the
                forefront of consumer trends, driving engagement and loyalty in
                the competitive consumer goods sector.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={consumer}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={energy}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Energy & Utilities</h2>
              <p>
                Embrace digital solutions for sustainable resource management
                and <span>implement renewable technologies</span> and{" "}
                <span>smart grid systems</span> to power operations with
                efficiency and forward-thinking sustainability practices.
              </p>
              <p>
                Further, streamline utility management with innovative grid
                technologies and <span>digital services</span> that ensure
                reliability and efficiency.
              </p>
            </div>
          </div>

          <div className="transfromings-item">
            <div>
              <h2>Healthcare</h2>
              <p>
                Enhance patient care with{" "}
                <span>digital healthcare strategies</span> that optimize
                clinical pathways, streamline operations, and ensure compliance
                with healthcare standards, all while prioritizing patient
                outcomes and care quality.
              </p>
              <p>
                Reinvent your healthcare ecosystem with{" "}
                <span>future-fit digital strategies</span> to create easy access
                and engaging experiences for your patients, employees, and
                partners.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={healtcare}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={technology}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Technology</h2>
              <p>
                Build innovative products and services for your end customers
                with our plethora of digital services support. Maintain a{" "}
                <span>cutting-edge position</span> in the high-tech landscape
                with next-gen capabilities that nurture rapid development and
                deployment.
              </p>
              <p>
                Embrace{" "}
                <span>cloud, IoT, AI, GenAI, and Blockchain technologies</span>{" "}
                to stay relevant and win in the long run.
              </p>
            </div>
          </div>

          <div className="transfromings-item">
            <div>
              <h2>Manufacturing</h2>
              <p>
                Implement <span>intelligent manufacturing solutions</span> that
                can transform your production processes and operations with our
                service support.
              </p>
              <p>
                Build new business practices by streamlining your existing
                approach and leverage{" "}
                <span>
                  automation, digital twins, and predictive maintenance
                </span>{" "}
                as critical drivers to enhance your operational productivity and
                resilience.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={manufacturing}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={insurance}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Insurance</h2>
              <p>
                As an insurance organization, you must{" "}
                <span>digitize, engage, and personalize</span> your
                communication and reach to meet customers' ever-changing and
                complex needs.
              </p>
              <p>
                With active service support, we transform the portfolio of risk
                management and customer interactions and automate claims
                processing and insurance products, improving{" "}
                <span>efficiency</span> and{" "}
                <span>policyholder satisfaction</span>.
              </p>
            </div>
          </div>

          <div className="transfromings-item">
            <div>
              <h2>Public Service</h2>
              <p>
                Embrace the continuous change to drive{" "}
                <span>measurable impact</span> for individuals and the community
                by deploying digital solutions to modernize public services,
                enhancing community engagement and operational transparency.
              </p>
              <p>
                Improve <span>resource management</span> and{" "}
                <span>citizen services</span> with technology that advances
                public trust and civic engagement.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={publicService}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={retail}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Retail</h2>
              <p>
                Modernize your retail ecosystem with future-ready digital
                strategies that can redefine <span>e-commerce</span> and{" "}
                <span>in-store experiences</span> for your customers.
              </p>
              <p>
                Leverage cutting-edge technology with our various services
                support to create{" "}
                <span>seamless, personalized shopping experiences</span> that
                build loyalty and drive short- and long-term sales.
              </p>
            </div>
          </div>

          <div className="transfromings-item">
            <div>
              <h2>Software and Applications</h2>
              <p>
                Develop innovative software and platforms with{" "}
                <span>agile, responsive digital solutions</span>. Get tailored
                services to meet the demands of the constantly changing and
                evolving digital sector, driving profitable growth and advancing
                adaptability.
              </p>
              <p>
                Realize this <span>2X faster</span> with the category-best
                development, deployment, and scaling approach.
              </p>
            </div>
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={software}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="transfromings-item">
            <div className="transfromings-item-image-container">
              <div>
                <Image
                  width={265}
                  height={277}
                  src={travel}
                  style={{ width: "265px", height: "277px" }}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h2>Travel</h2>
              <p>
                Redefine the travel experience for your end customers to
                simplify <span>booking, travel, and accommodation</span>
                processes with{" "}
                <span>
                  efficient, secure, and personalized digital services.
                </span>
              </p>
              <p>
                Outsmart unforeseen circumstances and disruptions by building{" "}
                <span>
                  predictive, prescriptive, and descriptive capabilities
                </span>{" "}
                with our <span>analytics, AI, and cloud services support.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
