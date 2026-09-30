import React, { useEffect } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import HighShape1 from "../../../assets/main/high-shape-1.png";
import HighShape2 from "../../../assets/main/high-shape-2.png";
import AboutShape2 from "../../../assets/about/about-shape-2.png";
import pattern1 from "../../../assets/main/pattern1.svg";
import pattern3 from "../../../assets/main/pattern3.svg";

import GalleryShape from "../../../assets/main/gallery-shape.svg";

import about1 from "../../../assets/about/about-us-img-1.webp";
import about2 from "../../../assets/about/about-us-img-2.webp";
import about3 from "../../../assets/about/about-us-img-3.webp";
import icon from "../../../assets/about/icon1.svg";

import hero1 from "../../../assets/about/hero-3.webp";
import hero2 from "../../../assets/about/hero-2.webp";
import star from "../../../assets/about/star.png";

import gallery1 from "../../../assets/gallery/moments-image-1.webp";
import gallery2 from "../../../assets/gallery/moments-image-2.webp";
import gallery3 from "../../../assets/gallery/moments-image-3.webp";
import gallery4 from "../../../assets/gallery/moments-image-4.webp";
import gallery5 from "../../../assets/gallery/moments-image-5.webp";
import gallery6 from "../../../assets/gallery/moments-image-6.webp";
import gallery7 from "../../../assets/gallery/moments-image-7.webp";
import gallery8 from "../../../assets/gallery/moments-image-8.webp";

import sicon1 from "../../../assets/main/service_icon1.png";
import sicon2 from "../../../assets/main/service_icon2.png";
import sicon3 from "../../../assets/main/service_icon3.png";
import sicon4 from "../../../assets/main/service_icon4.png";

import high1 from "../../../assets/main/fact-image-1-gold.webp";
import high2 from "../../../assets/main/fact-image-2-gold.webp";
import high3 from "../../../assets/main/fact-image-3-gold.webp";
import high4 from "../../../assets/main/fact-image-4-gold.webp";
import fact from "../../../assets/main/fact.svg";

import service1 from "../../../assets/service/process-1.png";
import service2 from "../../../assets/service/process-2.png";
import service3 from "../../../assets/service/process-3.png";
import service4 from "../../../assets/service/process-4.png";
import service5 from "../../../assets/service/process-5.png";
import shape1 from "../../../assets/service/shap1.png";
import shape2 from "../../../assets/service/shap2.png";
import video1 from "../../../assets/video/video1.mp4";
import video2 from "../../../assets/video/video2.mp4";
import video3 from "../../../assets/video/video3.mp4";
import bg from "../../../assets/main/gbg.png";
import bg1 from "../../../assets/main/abg.svg";

import g1 from "../../../assets/gallery/g1.webp";
import g2 from "../../../assets/gallery/g2.webp";
import g3 from "../../../assets/gallery/g3.webp";
import g4 from "../../../assets/gallery/g4.webp";
import g5 from "../../../assets/gallery/g5.webp";
import g6 from "../../../assets/gallery/g6.webp";

import AOS from "aos";
import "aos/dist/aos.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
  }, []);

  useEffect(() => {
    const work_p_imgs = document.querySelectorAll(
      ".work-process__item.style-1 .thumb img"
    );

    if (work_p_imgs.length > 0) {
      work_p_imgs.forEach((img) => {
        gsap.set(img, {
          scale: 0.5,
        });

        gsap.to(img, {
          scale: 1,
          scrollTrigger: {
            trigger: img,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
          },
        });
      });
    }

    // Cleanup ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <section className="about-section">
        <img src={pattern1} className="high-shape-img" alt="" />
        <div className="about-us" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="about-us-images">
                  <div className="about-image-box-1">
                    <div className="about-us-img-1" data-aos="fade-right">
                      <figure className="image-anime reveal">
                        <img src={about1} />
                      </figure>
                    </div>

                    <div
                      className="about-us-img-2 alltuchtopdown"
                      data-aos="fade-up"
                    >
                      <figure className="image-anime">
                        <img src={about2} alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="about-image-box-2" data-aos="fade-down">
                    <div className="about-experience-box">
                      <img src={icon} alt="" />
                      <h2>
                        <span className="counter">25</span>+
                      </h2>
                      <p>Years of experience</p>
                    </div>

                    <div className="about-us-img-3">
                      <figure className="image-anime">
                        <img src={about3} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="about-us-content">
                  <div className="section-title">
                    <h3 className="" data-aos="fade-up">
                      About Us
                    </h3>
                    <h2 data-aos="fade-up">
                      A Legacy of Design, Culture, and Craftsmanship
                    </h2>
                    <p className="" data-aos="fade-up">
                      With over three decades of legacy, Heritage B<span className="bnb-p-tag">&</span>B stands as
                      a name synonymous with timeless design, craftsmanship, and
                      authenticity. Founded by Mr. Dinakar Manie, a visionary
                      with 3 decades of expertise, Heritage B<span className="bnb-p-tag">&</span>B began its
                      journey in the construction industry and has evolved into
                      a complete design house specializing in heritage
                      architecture, luxury interiors, and curated antique décor.
                    </p>

                    <p data-aos="fade-up">
                      Now helmed by the second generation, the brand continues
                      to blend traditional artistry with modern
                      sensibilities—transforming spaces into soulful experiences
                      that celebrate history, culture, and craftsmanship.
                    </p>

                    <p
                      className="xb-item-content"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      With three decades of hands-on experience, Ravishankar
                      Manie, COO of Heritage B
                      <span className="bnb-Founder">&</span>B, leads operations
                      with a strong foundation in infrastructure and execution.
                      His background as a PWD First Class Contractor ensures
                      reliability, quality, and seamless property management.
                    </p>
                    <p
                      className="xb-item-content"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      Thank you for trusting us to bring heritage to life with
                      sincerity and care.
                    </p>
                  </div>

                  <div className="about-us-list-box">
                    <div className="about-us-list">
                      <ul>
                        <li data-aos="fade-up">
                          <FaCheckCircle className="list-icon" />
                          Three decades of timeless design legacy.
                        </li>
                        <li data-aos="fade-up">
                          <FaCheckCircle className="list-icon" />
                          Rooted in heritage, refined with innovation.
                        </li>
                        <li data-aos="fade-up">
                          <FaCheckCircle className="list-icon" />
                          Creating spaces that celebrate culture and
                          craftsmanship.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="about-us-btn " data-aos="fade-up">
                    <Link to="/about" className="btn-default">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-bg">
            <img src={bg1} alt="" />
          </div>
        </div>
        <img src={AboutShape2} className="high-shape-img" alt="" />
      </section>

      <section className="main-service" id="services">
        <div className="container">
          <div class="work-process__wrapper basu-fade" data-duration="1.5">
            <div class="work-process__top">
              <div class="service-title">
                <h2>Our Services</h2>
              </div>
              <div class="btn-wrap">
                <Link to="/services" class="basu-btn-flip">
                  <span data-hover="Read More">Read More</span>
                  <i class="las la-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div class="work-process__list">
              <div class="work-process__item style-1">
                <div class="thumb">
                  <img src={service1} alt="Image" />
                </div>
                <div class="content" data-aos="fade-up">
                  <div class="number">01</div>
                  <h2 class="title">
                    <a href="#">Heritage Architecture & Restoration</a>
                  </h2>
                  <p class="text">
                    Preserving the soul of old structures while enhancing their
                    functionality for modern living.
                  </p>
                  <img src={shape1} alt="Spape Image" class="shape-1" />
                </div>
              </div>

              <div class="work-process__item style-1">
                <div class="thumb">
                  <img src={service2} alt="Image" />
                </div>
                <div class="content">
                  <div class="number" data-aos="fade-up">
                    02
                  </div>
                  <h2 class="title" data-aos="fade-up">
                    <a href="#">Luxury Heritage Interiors</a>
                  </h2>
                  <p class="text" data-aos="fade-up">
                    Designs that tell stories—crafted with antique furniture,
                    curated décor, and artisanal finishes.
                  </p>
                  <img src={shape2} alt="Spape Image" class="shape-2" />
                </div>
              </div>

              <div class="work-process__item style-1">
                <div class="thumb">
                  <img src={service5} alt="Image" />
                </div>
                <div class="content" data-aos="fade-up">
                  <div class="number">03</div>
                  <h2 class="title">
                    <a href="#">Construction & Turnkey Projects</a>
                  </h2>
                  <p class="text">
                    Complete construction and interior execution, managed with
                    precision and expertise.
                  </p>
                  <img src={shape1} alt="Spape Image" class="shape-1" />
                </div>
              </div>

              <div class="work-process__item style-1">
                <div class="thumb">
                  <img src={service4} alt="Image" />
                </div>
                <div class="content">
                  <div class="number" data-aos="fade-up">
                    04
                  </div>
                  <h2 class="title" data-aos="fade-up">
                    <a href="#">Antique Furniture & Decor Curation</a>
                  </h2>
                  <p class="text" data-aos="fade-up">
                    A handpicked collection of antique and vintage furnitures,
                    collectibles, and décor pieces sourced from all over the
                    world.
                  </p>
                  <img src={shape2} alt="Spape Image" class="shape-2" />
                </div>
              </div>

              <div class="work-process__item style-1">
                <div class="thumb">
                  <img src={service3} alt="Image" />
                </div>
                <div class="content">
                  <div class="number" data-aos="fade-up">
                    05
                  </div>
                  <h2 class="title" data-aos="fade-up">
                    <a href="#">Bespoke Heritage Villas & Retreats</a>
                  </h2>
                  <p class="text" data-aos="fade-up">
                    From beach villas, farmhouses to sustainable houses and
                    green houses — every space is a timeless expression of
                    design and comfort.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="service-bg">
              <img src={bg} alt="" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="highlight-sec">
        <img src={HighShape1} className="high-shape-img" alt="" />

        <div class="our-facts-gold">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="our-fact-box-gold">
                  <div class="fact-box-1-gold">
                    <div
                      class="fact-item-gold alltuchtopdown "
                      data-aos="flip-left"
                      data-aos-duration="3000"
                    >
                      <div class="icon-box">
                        <img src={fact} alt="" />
                      </div>
                      <div class="fact-item-content-gold">
                        <h2>
                          <span class="counter">500</span>+
                        </h2>
                        <p>Projects Completed</p>
                      </div>
                    </div>

                    <div
                      class="fact-image-gold"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <figure class="image-anime">
                        <img src={high1} alt="" />
                      </figure>
                    </div>
                  </div>

                  <div class="fact-box-2-gold">
                    <div
                      class="fact-image-gold"
                      data-aos="zoom-in"
                      data-aos-duration="3000"
                    >
                      <figure class="image-anime">
                        <img src={high2} alt="" />
                      </figure>
                    </div>
                  </div>

                  <div class="fact-box-3-gold">
                    <div
                      class="fact-image-gold"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      <figure class="image-anime">
                        <img src={high3} alt="" />
                      </figure>
                    </div>

                    <div class="fact-image-content-gold">
                      <div
                        class="fact-item-gold fact-dark-box-gold alltuchtopdown "
                        data-aos="flip-right"
                        data-aos-duration="3000"
                      >
                        <div class="icon-box">
                          <img src={icon} alt="" />
                        </div>
                        <div class="fact-item-content-gold">
                          <h2>
                            <span class="counter">03</span>
                          </h2>
                          <p>Decades of Expertise</p>
                        </div>
                      </div>

                      <div
                        class="fact-image-gold"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        <figure class="image-anime">
                          <img src={high4} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={HighShape2} className="high-shape-img" alt="" />
      </section>

      <section className="hero__area-2 pb-150">
        <div className="container">
          <div className="hero__wrapper-2">
            <div className="hero__left-2 ">
              <h3
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={star} alt="Star" />
                Our Philosophy
              </h3>
              <h2
                className="heritage"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                At Heritage B<span className="bng-heading">&</span>B, we believe every detail tells a story.
              </h2>
              <img
                src={hero2}
                alt="Image"
                data-aos="fade-right"
                data-aos-duration="3000"
              />
            </div>
            <div className="hero__right-2 basu-fade">
              <img
                src={hero1}
                alt="Image"
                data-aos="fade-left"
                data-aos-duration="3000"
              />
              <p data-aos="fade-up">
                Our designs preserve the charm of the past while embracing the
                comfort and sophistication of the present. Each project is a
                balance of heritage character, architectural integrity, and
                luxurious detail—crafted for those who value legacy as much as
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="Gallery-section">
        <img src={GalleryShape} className="high-shape-img" alt="" />

        <div className="main-gallery" id="projects">
          <div className="container">
            <div className="row">
              <div className="gallery-title">
                <h3>Our Gallery</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div class="moments-image-list">
                  <div class="our-moments-box-1">
                    <div class="moments-image-box">
                      <div
                        class="moments-image img-1"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                      >
                        <figure class="image-anime reveal">
                          <a href={gallery1} data-fancybox="gallery">
                            <img src={gallery1} alt="" />
                          </a>
                        </figure>
                      </div>

                      <div
                        class="moments-image img-2"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        <figure class="image-anime reveal">
                          <a href={gallery8} data-fancybox="gallery">
                            <img src={gallery8} alt="" />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div class="our-moments-box-2">
                    <div
                      class="moments-image img-3"
                      data-aos="fade-down"
                      data-aos-duration="3000"
                    >
                      <figure class="image-anime reveal">
                        <a href={gallery3} data-fancybox="gallery">
                          <img src={gallery3} alt="" />
                        </a>
                      </figure>
                    </div>

                    <div class="moments-image-box">
                      <div class="moments-image img-4">
                        <figure
                          class="image-anime reveal"
                          data-aos="flip-up"
                          data-aos-duration="3000"
                        >
                          <a href={gallery4} data-fancybox="gallery">
                            <img src={gallery4} alt="" />
                          </a>
                        </figure>

                        <figure
                          class="image-anime reveal"
                          data-aos="flip-right"
                          data-aos-duration="3000"
                        >
                          <a href={gallery5} data-fancybox="gallery">
                            <img src={gallery5} alt="" />
                          </a>
                        </figure>
                      </div>

                      <div
                        class="moments-image img-5"
                        data-aos="zoom-in-down"
                        data-aos-duration="3000"
                      >
                        <figure class="image-anime reveal">
                          <a href={gallery6} data-fancybox="gallery">
                            <img src={gallery6} alt="" />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div class="our-moments-box-1">
                    <div class="moments-image-box">
                      <div
                        class="moments-image img-2"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                      >
                        <figure class="image-anime reveal">
                          <a href={gallery2} data-fancybox="gallery">
                            <img src={gallery2} alt="" />
                          </a>
                        </figure>
                      </div>

                      <div
                        class="moments-image img-1"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        <figure class="image-anime reveal">
                          <a href={gallery7} data-fancybox="gallery">
                            <img src={gallery7} alt="" />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row another-gallery">
              <div className="col-lg-4 col-md-4">
                <div
                  className="gallery-image g-m-top"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <figure class="image-anime reveal">
                    <a href={g5} data-fancybox="gallery">
                      <img src={g5} alt="" />
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div
                  className="gallery-image g-m-top"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <figure class="image-anime reveal">
                    <a href={g4} data-fancybox="gallery">
                      <img src={g4} alt="" />
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div
                  className="gallery-image"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <figure class="image-anime reveal">
                    <a href={g6} data-fancybox="gallery">
                      <img src={g6} alt="" />
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div
                  className="gallery-image g-top"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <figure class="image-anime reveal">
                    <a href={g1} data-fancybox="gallery">
                      <img src={g1} alt="" />
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div
                  className="gallery-image g-top"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <figure class="image-anime reveal">
                    <a href={g2} data-fancybox="gallery">
                      <img src={g2} alt="" />
                    </a>
                  </figure>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div
                  className="gallery-image g-top"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <figure class="image-anime reveal">
                    <a href={g3} data-fancybox="gallery">
                      <img src={g3} alt="" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-gallery-video">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 gallery-video">
              <video autoPlay muted loop playsInline id="myVideo">
                <source src={video1} type="video/mp4" />
              </video>
            </div>

            <div className="col-lg-4 col-md-6 gallery-video">
              <video autoPlay muted loop playsInline id="myVideo">
                <source src={video2} type="video/mp4" />
              </video>
            </div>

            <div className="col-lg-4 col-md-6 gallery-video">
              <video autoPlay muted loop playsInline id="myVideo">
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section class="main-legacy">
        <div class="service-circle-shape">
          <img src={pattern3} alt="" />
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="about-content text-center">
                <div
                  class="leg-title"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h2 class="xb-item--title mb-15">Our Legacy</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="service-inner">
            <div class="row mt-none-30">
              <div class="col-lg-3 col-md-6 mt-30">
                <div
                  class="service-item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div class="xb-item--icon">
                    <img src={sicon1} alt="" />
                  </div>
                  <h3 class="xb-item--title border-effect">
                    Three Decades of trusted excellence
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mt-30">
                <div
                  class="service-item middle"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div class="xb-item--icon">
                    <img src={sicon2} alt="" />
                  </div>
                  <h3 class="xb-item--title border-effect">
                    Family-run, third-generation enterprise
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mt-30">
                <div
                  class="service-item middle"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div class="xb-item--icon">
                    <img src={sicon3} alt="" />
                  </div>
                  <h3 class="xb-item--title border-effect">
                    Roots in construction and heritage restoration
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mt-30">
                <div
                  class="service-item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div class="xb-item--icon">
                    <img src={sicon4} alt="" />
                  </div>
                  <h3 class="xb-item--title border-effect">
                    Expertise in antique furniture and collectible decor
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="legacy-bg">
          <img src={bg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Main;
