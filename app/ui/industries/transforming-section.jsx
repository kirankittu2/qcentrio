"use client";

import { useEffect, useRef } from "react";
import aerospace from "@/public/aerospace.png";
import banking from "@/public/banking.png";
import consumer from "@/public/consumer-goods.png";
import automotive from "@/public/automotive.png";
import communication from "@/public/communication-and-media.png";
import energy from "@/public/energy-and-utilities.png";
import Image from "next/image";

export default function TransformingSection() {
  const content1 = useRef(null);
  const content2 = useRef(null);

  useEffect(() => {
    content1.current.addEventListener("scroll", function () {
      content2.current.scrollTop = content1.current.scrollTop;
    });

    content2.current.addEventListener("scroll", function () {
      content1.current.scrollTop = content2.current.scrollTop;
    });
  }, []);

  return (
    <div className="transfroming-section">
      <h2 className="section-heading">
        TRANSFORMING SECTORS WITH SPECIALIZED DIGITAL STRATEGIES
      </h2>
      <div className="transfromings-scroll-list">
        <div ref={content1} className="transfromings-scroll-list-content">
          <div className="transfromings-item">
            <div>
              <h2>Aerospace & Defense</h2>
              <p>
                Embrace a digital-first mindset to propel your aerospace and
                defense enterprise to new heights of innovation and operational
                efficiency.
              </p>
              <p>
                We help you leverage secure communication technologies and
                automated systems that optimize the supply chain and enhance
                mission-critical operations, which are required for such a
                critical sector.
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
            <div>
              <h2>Banking</h2>
              <p>
                Transform your banking establishment with support from
                category-leading financial technology services.
              </p>
              <p>
                We blend deep industry expertise with digital know-how to create
                seamless banking experiences, enhance security, and introduce
                agile methodologies that transform traditional banking into
                digital-first enterprises.
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
            <div>
              <h2>Consumer Goods & Services</h2>
              <p>
                Create dynamic experiences for your consumers through
                purpose-driven analytics and responsive supply chain management.
              </p>
              <p>
                Drive top-line and bottom-line growth with new-age technologies
                like GenAI and advanced analytics to be at the forefront of
                consumer trends, driving engagement and loyalty in the
                competitive consumer goods sector.
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
            <div>
              <h2>Automotive</h2>
              <p>
                Experience how leading automotive industry experts drive their
                enterprises forward with digital services that support the
                integration of autonomous, connected, and eco-friendly
                technologies.
              </p>
              <p>
                We help automotive leaders redefine the customer journey and
                streamline production with intelligent, data-driven solutions.
              </p>
            </div>
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
          </div>
          <div className="transfromings-item">
            <div>
              <h2>Communications & Media</h2>
              <p>
                Engage audiences with compelling digital media experiences,
                utilizing data analytics for strategic engagement and
                monetization across various platforms and channels, ensuring
                every message resonates in the dynamic media sector.
              </p>
              <p>
                Further, we accelerate adoption and time-to-market and build
                innovative business structures with our service support.
              </p>
            </div>
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
          </div>
          <div className="transfromings-item">
            <div>
              <h2>Energy & Utilities</h2>
              <p>
                Embrace digital solutions for sustainable resource management
                and implement renewable technologies and smart grid systems to
                power operations with efficiency and forward-thinking
                sustainability practices.
              </p>
              <p>
                Further, streamline utility management with innovative grid
                technologies and digital services that ensure reliability and
                efficiency.
              </p>
            </div>
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
          </div>
        </div>
        <div ref={content2} className="transfromings-scroll-list-content">
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
                enterprises forward with digital services that support the
                integration of autonomous, connected, and eco-friendly
                technologies.
              </p>
              <p>
                We help automotive leaders redefine the customer journey and
                streamline production with intelligent, data-driven solutions.
              </p>
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
                utilizing data analytics for strategic engagement and
                monetization across various platforms and channels, ensuring
                every message resonates in the dynamic media sector.
              </p>
              <p>
                Further, we accelerate adoption and time-to-market and build
                innovative business structures with our service support.
              </p>
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
                and implement renewable technologies and smart grid systems to
                power operations with efficiency and forward-thinking
                sustainability practices.
              </p>
              <p>
                Further, streamline utility management with innovative grid
                technologies and digital services that ensure reliability and
                efficiency.
              </p>
            </div>
          </div>
          <div className="transfromings-item">
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
            <div>
              <h2>Aerospace & Defense</h2>
              <p>
                Embrace a digital-first mindset to propel your aerospace and
                defense enterprise to new heights of innovation and operational
                efficiency.
              </p>
              <p>
                We help you leverage secure communication technologies and
                automated systems that optimize the supply chain and enhance
                mission-critical operations, which are required for such a
                critical sector.
              </p>
            </div>
          </div>
          <div className="transfromings-item">
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
            <div>
              <h2>Banking</h2>
              <p>
                Transform your banking establishment with support from
                category-leading financial technology services.
              </p>
              <p>
                We blend deep industry expertise with digital know-how to create
                seamless banking experiences, enhance security, and introduce
                agile methodologies that transform traditional banking into
                digital-first enterprises.
              </p>
            </div>
          </div>
          <div className="transfromings-item">
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
            <div>
              <h2>Consumer Goods & Services</h2>
              <p>
                Create dynamic experiences for your consumers through
                purpose-driven analytics and responsive supply chain management.
              </p>
              <p>
                Drive top-line and bottom-line growth with new-age technologies
                like GenAI and advanced analytics to be at the forefront of
                consumer trends, driving engagement and loyalty in the
                competitive consumer goods sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
