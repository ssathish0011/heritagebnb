import React, { useState } from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import footer from "../../assets/main/footer.png";
import footerlogo from "../../assets/logo-mobile.svg";


const Footer = () => {


  return (
    <section className="main-footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="about-footer">
              <div className="footer-title">
                <h2>About us</h2>

                <p>
                  Heritage B<span className="bnb-p-tag">&</span>B stands as a
                  name synonymous with timeless design, craftsmanship, and
                  authenticity. Founded by Mr. Dinakar Manie, a visionary with
                  3 decades of experience
                </p>
              </div>
            </div>

            <div className="footer-social-links">
              <ul>
                <li>
                  <a href="https://www.instagram.com/heritagebanb/" target="_blank">
                    <i class="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lab la-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3">
            <div className="footer-list-info">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3">
            <div className="footer-contact-info">
              <h3>Contact Us</h3>
              <p>
                <a href="tel:+919087855556" target="_blank">
                  +91 9087855556
                </a>
              </p>
              <p>
                <a href="tel:+919087845556" target="_blank">
                  +91 9087845556
                </a>
              </p>
              <p>
                <a href="mailto:info@heritagebnb.in">info@heritagebnb.in</a>
              </p>
              <p>
                Saha Pallazo,
                <br /> S2/P, Periyar Nagar,
                <br /> Rajagopalapuram,
                <br /> Pudukkottai, 622003.
              </p>
            </div>
          </div>
        </div>

        <div className="mh-footer-marquee pt-90">
          <Marquee speed={50} gradient={false} direction="left">
            Heritage B <span className="bnb-marque">&</span> B &nbsp; | &nbsp;
            Heritage B <span className="bnb-marque">&</span> B &nbsp; | &nbsp;
            Heritage B <span className="bnb-marque">&</span> B &nbsp; | &nbsp;
          </Marquee>
        </div>

        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 mobile-copy-logo">
              <img src={footerlogo} alt="" />
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="footer-copyright-text">
                <p>
                  Copyright © 2026 Heritage B
                  <span className="footer-bnb">&</span> B. All Rights Reserved
                  | Designed by&nbsp;
                  <a href="https://wisewebtek.com/" target="_blank">
                    WiseWebTek.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="counceling-footer-shape">
        <img src={footer} alt="" />
      </div>
    </section>
  );
};

export default Footer;
