import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import mlogo from "../../assets/logo.svg";
import lshape from "../../assets/logo-shape.svg";
import MobileBnb from "../../assets/mobile-bnb.svg";
import logobg from "../../assets/logo-bg.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu when window is resized to desktop so state stays consistent
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // handle nav link clicks (close mobile menu)
  const handleNavClick = (e) => {
    // If a link (<a>) was clicked, close the mobile menu
    if (e.target && e.target.tagName === "A") setMenuOpen(false);
  };

  return (
    <div>
      <div className="main-header">
        <div className="mobile-header">
          <div className="mobile-logo-img">
<Link to="/" className="mobile-logo-link" aria-label="Home">
  <img src={mlogo} className="mobile-logo" alt="logo" />
</Link>

            <div className="logo-name">
              <h3>Heritage <span><img src={MobileBnb} style={{width:"70px"}} className="mbnb"  alt="logo" /></span></h3>
            </div>
          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="header-lower">
          <div className="container">
            <div className="row align-items-center justify-content-between g-0">
              <div className="col-12">
                <div
                  className={`header-content ${menuOpen ? "show-menu" : ""}`}
                >
                  <div
                    className="header-navigation d-flex align-items-center"
                    onClick={handleNavClick}
                  >
                    <div className="main-menu">
                      <nav className="mobile-menu">
                        <ul>
                          <li className="menu-thumb">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                           <Link to="/about">About us</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>

                          <li className="center-logo">
                            <div className="logo">
                              {/* <img
                                className="logo-shape svg-color"
                                src={lshape}
                                alt="logo shape"
                              /> */}
                              <Link to="/">
                                <figure>
                                  <img src={logo} alt="header logo" />
                                </figure>
                              </Link>
                            </div>
                          </li>
                          <li>
                             <Link to="/projects">Projects</Link>
                          </li>
                          <li>
                             <Link to="/contact">Contact us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="header-right d-flex align-items-center">
                    <div className="header-button">
<Link to="/contact" className="theme-button style-1">
  Enquire Now
</Link>
                    </div>
                  </div>
                </div>
                {/* END header-content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
