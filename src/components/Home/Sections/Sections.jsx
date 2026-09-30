import React, { useState } from "react";
import "./Sections.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

import icon1 from "../../../assets/main/phone.png";
import icon2 from "../../../assets/main/mail.png";
import icon3 from "../../../assets/main/location.png";
import ContactShape from "../../../assets/main/contact-shape.png";
import Turnstile from "../../Turnstile/Turnstile";


const Sections = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      setStatus("Please complete the bot verification.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://heritagebnb.in/server/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            "cf-turnstile-response": turnstileToken,
          }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus("✅ Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        setStatus("❌ " + (result.message || "Failed to send message."));
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server connection failed.");
    } finally {
      setLoading(false);
      setTurnstileToken("");
      setTurnstileKey((key) => key + 1);
    }
  };

  return (
    <div>
      <section className="main-cta" id="FounderMessage">
        <div claclassNamess="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="mh-cta-content text-center">
                <div className="sec-title sec-title--two">
                  <span
                    className="xb-item--subtitle"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Founder’s Message
                  </span>
                  <p
                    className="xb-item-content"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Welcome to a world where comfort feels elegant, beauty feels
                    effortless, and every space is created to wrap you in a
                    gentle sense of belonging. Here, we celebrate the simple joy
                    of lovely living—moments filled with warmth, charm, and the
                    quiet grace that makes a place truly feel like home. Every
                    space carries a legacy, and at Heritage B
                    <span className="bnb-Founder">&</span>B, our purpose is to
                    honour that legacy through interiors that respect tradition
                    and revive timeless character. I founded this company with a
                    deep passion for preserving the essence of
                    heritage—restoring authentic details, celebrating classic
                    craftsmanship, and thoughtfully reinterpreting the past for
                    today’s way of living. For us, heritage interiors are not a
                    style but a responsibility: to protect stories, retain
                    identity, and create spaces that feel rooted, soulful, and
                    enduring.
                  </p>

                  <p
                    className="xb-item-content"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Thank you for trusting us to bring heritage to life with
                    sincerity and care.
                  </p>

                  <div className="founder-box">
                    <h2
                      className="xb-item-title mb-40 founder-title"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <span className="founder-name">Dinakar Manie</span>

                      <span className="founder-right">
                        <span className="founder-role">Founder</span>
                        <span className="founder-company">
                          Heritage B<span className="bnb-p-tag">&</span>B
                        </span>
                      </span>
                    </h2>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <div className="cta-image">
          <img src={cta} alt="" />
        </div> */}
        {/* <div className="cta-shape">
          <img src={shape} alt="" />
        </div> */}
      </section>

      <section className="contect-section">
        <div className="page-contact-us" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="contact-us-form"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <div className="contact-title">
                    <h3>contact us</h3>
                    <h2>Get in touch</h2>
                  </div>

                  <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Name"
                            required=""
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Phone"
                            required=""
                          />
                        </div>

                        <div className="form-group col-md-12 mb-4">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="E-mail"
                            required=""
                          />
                        </div>

                        <div className="form-group col-md-12 mb-5">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            rows="3"
                            placeholder="Write Message..."
                          ></textarea>
                        </div>

                        <div className="col-md-12">
                          <Turnstile
                            key={turnstileKey}
                            onVerify={setTurnstileToken}
                          />
                        </div>

                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn-default style-5 disabled"
                            disabled={loading}
                          >
                            {loading ? "Sending..." : "submit message"}
                          </button>
                        </div>
                        {status && (
                          <p
                            className="status-message"
                            style={{ color: "#fff", paddingTop: "10px" }}
                          >
                            {status}
                          </p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="google-map"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.1481723648119!2d78.8071655!3d10.3744158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4af0cab555cbc0f7%3A0x2aeaf3dfbca767c8!2sHeritage%20B%20%26%20B!5e0!3m2!1sen!2sin!4v1790321049128!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="contact-info-list">
                  <div
                    className="contact-info-item"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    <div className="icon-box">
                      <img src={icon2} alt="" />
                    </div>

                    <div className="contact-item-content">
                      <h3>email</h3>
                      <p>
                        <a href="mailto:info@heritagebnb.in">
                          info@heritagebnb.in
                        </a>
                      </p>
                    </div>
                  </div>

                  <div
                    className="contact-info-item"
                    data-aos="fade-down"
                    data-aos-duration="3000"
                  >
                    <div className="icon-box">
                      <img src={icon1} alt="" />
                    </div>

                    <div className="contact-item-content">
                      <h3>Phone</h3>
                      <p>
                        <a href="tel:+919087855556">+91 9087855556</a>
                        <br /> <a href="tel:+919087845556">+91 9087845556</a>
                      </p>
                    </div>
                  </div>

                  <div
                    className="contact-info-item location-item"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="icon-box">
                      <img src={icon3} alt="" />
                    </div>

                    <div className="contact-item-content">
                      <h3>location</h3>
                      <p>
                        Saha Pallazo, S2/P, Periyar Nagar, Rajagopalapuram,
                        Pudukkottai, 622003.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={ContactShape} className="high-shape-img" alt="" />
      </section>

    </div>
  );
};

export default Sections;
