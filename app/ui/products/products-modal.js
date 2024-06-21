"use client";

import { useEffect, useState } from "react";
import Button from "../global/button";
import Image from "next/image";
import close from "@/public/close.svg";
import { productsModalData } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export default function ProductsModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.width = "";
    };
  }, [modalOpen]);

  return (
    <>
      <Button onClick={() => setModalOpen(true)} name="Book A Demo" />
      {modalOpen && (
        <ProductsContactModal
          scrollPosition={scrollPosition}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}

function ProductsContactModal({ scrollPosition, setModalOpen }) {
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(true);
  const [searchTermDropdown, setSearchTermDropdown] = useState("Product");
  const [submitting, setSubmitting] = useState(true);
  const router = useRouter();

  function handleModalClose(e) {
    if (e.target.getAttribute("data-name") == "modal") {
      setModalOpen(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setSubmitting(false);
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LeHIP4pAAAAAFlkwmI4z7K9FZG21vtJ7-aiWlt0", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          formData.append("product", searchTermDropdown);
          const response = await productsModalData(formData);
          setSubmitting(response.success);
          setError(response.success);
          if (response.success) {
            router.push("/thank-you");
          } else if (!response.success) {
            setSubmitting(true);
          }
        });
    });
  }

  return (
    <div
      onClick={handleModalClose}
      data-name="modal"
      className="products-modal"
      style={{ top: scrollPosition + "px" }}>
      <div className="products-form-wrapper">
        <div className="need-something-modal-close">
          <Image
            data-name="modal"
            onClick={handleModalClose}
            src={close}
            alt=""
          />
        </div>
        <h2 class="contact-heading">
          Get in Touch to Learn More About Our Products!
        </h2>
        <p class="section-content contact-sub-heading">
          Fill out the form below to discuss your specific product needs and get
          personalized assistance from our team.
        </p>
        {!error && <p className="form-error">Error Submitting Form</p>}
        <form onSubmit={onSubmit}>
          <div className="contact-column">
            <input
              data-option="up"
              name="first-name"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              data-option="up"
              name="last-name"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="contact-column">
            <input
              data-option="up"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            <div
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className={`purpose-input-dropdown ${
                !clicked ? "text-[#a5a5a5]" : "text-black"
              }`}>
              {searchTermDropdown}{" "}
              <span
                className={`chevron bottom ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}></span>
              {dropdown && (
                <div className="search-dropdown-item-list">
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Remitree
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Conciliare
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Sherlock
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    AWACS
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Bankfair
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    LOS
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Almanac
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    Relier
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    PAS
                  </div>
                  <div
                    onClick={(e) => {
                      setDropdown(false);
                      setClicked(true);
                      setSearchTermDropdown(e.target.textContent);
                    }}
                    className="search-dropdown-item">
                    PAGO
                  </div>
                </div>
              )}
            </div>
          </div>
          <textarea
            data-option="up"
            name="message"
            placeholder="Your Message"
            rows="10"></textarea>
          <div className="contact-btn-container">
            <Button name={!submitting ? "Submitting..." : "Submit Request"} />
          </div>
        </form>
      </div>
    </div>
  );
}
