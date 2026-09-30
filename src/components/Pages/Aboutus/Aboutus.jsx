import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Aboutus.css";

gsap.registerPlugin(ScrollTrigger);

import About1 from "../../../assets/pages/aboutus/about-img-h2.jpg"
import About2 from "../../../assets/pages/aboutus/about-img1-h2.png"

import GreenBg from "../../../assets/pages/green-bg.png"
import aboutSection2Image1 from "../../../assets/pages/aboutus/about-sec2-img-1.webp"
import aboutSection2Image2 from "../../../assets/pages/aboutus/about-sec2-img-2.webp"
import aboutSection2Image3 from "../../../assets/pages/aboutus/about-sec2-img-3.webp"

import aboutSection3Image1 from "../../../assets/pages/aboutus/about-sec-3-img-1.jpg";
import aboutSection3Image2 from "../../../assets/pages/aboutus/about-sec-3-img-2.webp";
import aboutSection3Image3 from "../../../assets/pages/aboutus/about-sec-3-img-3.webp";
import AboutShape1 from "../../../assets/pages/aboutus/shape-1.png";
import AboutShape2 from "../../../assets/pages/aboutus/shape-2.png";
import AboutShape3 from "../../../assets/pages/aboutus/shape-3.png";
import AboutShape4 from "../../../assets/pages/aboutus/shape-4.png";
import AboutShapeMobile from "../../../assets/pages/aboutus/mobile-shape-1.png";


const Aboutus = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) return undefined;

        pageRef.current?.classList.add("heritage-ab-page--animate");

        const ctx = gsap.context(() => {
            const replay = {
                start: "top 80%",
                toggleActions: "restart none restart none",
            };

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".heritage-ab-hero",
                    start: "top 90%",
                    toggleActions: "restart none restart none",
                },
            })
                .fromTo(
                    ".heritage-ab-hero-title",
                    { y: 48, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.15, ease: "power3.out" }
                )
                .fromTo(
                    ".heritage-ab-hero-line",
                    { scaleX: 0 },
                    { scaleX: 1, duration: 1, ease: "power2.out" },
                    "-=0.8"
                );

            const legacy = pageRef.current.querySelector(".heritage-ab-sec-legacy");
            if (legacy) {
                const mainImg = legacy.querySelector(".para-img");
                const wrapImg = legacy.querySelector(".vs-about__wrap img");
                const badge = legacy.querySelector(".ab-experience");
                const heading = legacy.querySelector(".section-title");
                const copy = legacy.querySelectorAll(".vs-about__right p");

                gsap.set(mainImg, { clipPath: "inset(0 100% 0 0)" });
                gsap.set(wrapImg, { clipPath: "inset(100% 0 0 0)" });

                const tl = gsap.timeline({
                    scrollTrigger: { trigger: legacy, ...replay },
                    onComplete: () => {
                        gsap.set(badge, { clearProps: "transform" });
                    },
                });

                tl.fromTo(
                    mainImg,
                    { clipPath: "inset(0 100% 0 0)" },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.15,
                        ease: "power4.out",
                    }
                )
                    .fromTo(
                        wrapImg,
                        { clipPath: "inset(100% 0 0 0)" },
                        {
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 1,
                            ease: "power4.out",
                        },
                        "-=0.75"
                    )
                    .fromTo(
                        badge,
                        { y: 24, opacity: 0, scale: 0.92 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.7,
                            ease: "power3.out",
                        },
                        "-=0.85"
                    )
                    .fromTo(
                        heading,
                        { y: 32, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
                        "-=0.7"
                    )
                    .fromTo(
                        copy,
                        { y: 22, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.55,
                            stagger: 0.1,
                            ease: "power2.out",
                        },
                        "-=0.45"
                    );
            }

            const philosophy = pageRef.current.querySelector(
                ".heritage-ab-sec-philosophy"
            );
            if (philosophy) {
                const copy = philosophy.querySelector(".about-dark");
                const images = philosophy.querySelectorAll(
                    ".heritage-ab-gallery img"
                );

                gsap.set(images, { clipPath: "inset(100% 0 0 0)", scale: 1.12 });

                const tl = gsap.timeline({
                    scrollTrigger: { trigger: philosophy, ...replay },
                    onComplete: () => gsap.set(images, { clearProps: "transform" }),
                    onReverseComplete: () => gsap.set(images, { scale: 1.12 }),
                });

                tl.fromTo(
                    copy,
                    { y: 36, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
                ).fromTo(
                    images,
                    { clipPath: "inset(100% 0 0 0)", scale: 1.12 },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        scale: 1,
                        duration: 1.05,
                        stagger: 0.14,
                        ease: "power4.out",
                    },
                    "-=0.55"
                );
            }

            const leadership = pageRef.current.querySelector(
                ".heritage-ab-sec-leadership"
            );
            if (leadership) {
                const photos = leadership.querySelectorAll(
                    ".heritage-ab-leader-photo img, .heritage-ab-leader-wide"
                );
                const copyBits = leadership.querySelectorAll(
                    ".heritage-ab-copy .section-title, .heritage-ab-copy p"
                );

                gsap.set(photos, { clipPath: "inset(100% 0 0 0)" });

                gsap.timeline({
                    scrollTrigger: { trigger: leadership, ...replay },
                })
                    .fromTo(
                        photos,
                        { clipPath: "inset(100% 0 0 0)" },
                        {
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 1.05,
                            stagger: 0.12,
                            ease: "power4.out",
                        }
                    )
                    .fromTo(
                        copyBits,
                        { y: 24, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: "power2.out",
                        },
                        "-=0.7"
                    );
            }
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="heritage-ab-page" ref={pageRef}>
            <section className="heritage-ab-hero">
                {/* Mobile image */}
                <img src={AboutShapeMobile} className="high-shape-img mobile-shape-my" alt="" />

                <div className="heritage-ab-hero-overlay" />
                <div className="heritage-ab-hero-content">
                    <h2 className="heritage-ab-hero-title">About Us</h2>
                    <span className="heritage-ab-hero-line" aria-hidden="true" />
                </div>
                <img src={AboutShape1} className="high-shape-img desktop-shape-my" alt="" />
            </section>

            <section className="vs-about pages style2 parallax-sec heritage-ab-sec-legacy">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="abImg">
                                <div className="para-img paralax">
                                    <img
                                        src={About1}
                                        alt="image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="vs-about__wrap">
                                    <div className="ab-experience fact-item-gold">
                                        <h2>25+</h2>
                                        <p>Years of Experience</p>
                                    </div>
                                    <img
                                        src={About2}
                                        alt="image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 ps-xl-5">
                            <div className="section-title animation-style2">
                                <h3 className="sub-headding">
                                    Our Legacy
                                </h3>
                                <h2 className="title-anime">
                                    Three Decades of Design, Culture & Craftsmanship
                                </h2>
                            </div>
                            <div className="vs-about__right">
                                <p>
                                    For over <span className="highlight">three decades</span>, Heritage B<span className="bnb-p-tag">&</span>B has been shaped by a deep
                                    appreciation for architecture, craftsmanship, and timeless design.
                                </p>

                                <p>
                                    Founded by <span className="highlight">Mr. Dinakar Manie</span>, a visionary with more than
                                    <span className="highlight"> 30 years of experience</span>, the journey began in the construction
                                    industry and gradually evolved into a complete design house specialising in
                                    <span className="highlight">
                                        &nbsp;heritage architecture, luxury interiors, restoration, and curated antique décor.
                                    </span>
                                </p>

                                <p>
                                    Today, Heritage B<span className="bnb-p-tag">&</span>B continues to carry this legacy forward—creating spaces that are not only
                                    visually beautiful, but also deeply connected to their
                                    <span className="highlight"> history, culture, and surroundings.</span>
                                </p>

                                <p className="heritage-ab-pullquote">
                                    Three decades of experience.<br />
                                    One enduring commitment to heritage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* ===== 02 — OUR PHILOSOPHY ===== */}
            <section className="heritage-ab-section heritage-ab-sec-philosophy pt-0 pb-0">
                <img src={AboutShape2} className="high-shape-img" alt="" />
                <div className="main-service">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-dark">
                                    <div className="service-title">
                                        <h3 style={{ color: "#fff" }}>
                                            Our Philosophy
                                        </h3>
                                        <h2>
                                            Preserving Heritage.<br />Creating Timeless Spaces.
                                        </h2>
                                    </div>
                                    <p>
                                        We believe heritage is more than a building&nbsp;&mdash; it is a
                                        story carried through architecture, materials, craftsmanship, and
                                        generations.
                                    </p>
                                    <p>
                                        Our approach brings together the authenticity of traditional
                                        design with the refinement of <span>modern living</span>. We
                                        carefully preserve the character of heritage spaces while
                                        introducing contemporary functionality, comfort, and elegance.
                                    </p>
                                    <p>
                                        Inspired by the rich architectural traditions of
                                        <span>&nbsp;Chettinad</span>, our work celebrates handcrafted
                                        details, antique elements, traditional materials, and the artistry
                                        behind every space.
                                    </p>
                                    <p>We don&rsquo;t believe heritage should simply be preserved.</p>

                                    <p className="heritage-ab-pullquote">
                                        It should be experienced, lived, and carried forward.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="heritage-ab-gallery">
                                    <div className="heritage-ab-gallery-main">
                                        <img src={aboutSection2Image1} alr="" />
                                    </div>

                                    <div className="heritage-ab-gallery-row">
                                        <div className="heritage-ab-gallery-thumb heritage-ab-gallery-thumb--large">
                                            <img src={aboutSection2Image2} alr="" />
                                        </div>

                                        <div className="heritage-ab-gallery-thumb heritage-ab-gallery-thumb--small">
                                            <img src={aboutSection2Image3} alr="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img src={AboutShape3} className="high-shape-img" alt="" />

            </section>

            {/* ===== 03 — LEADERSHIP ===== */}
            <section className="about-section-3 heritage-ab-sec-leadership">
                <div className="heritage-ab-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="heritage-ab-leaders">
                                    <figure className="heritage-ab-leader-photo">
                                        <img src={aboutSection3Image1} alt="" />
                                        {/* <figcaption>
                                        <span className="heritage-ab-leader-name">Mr. Dinakar Manie</span>
                                        <span className="heritage-ab-leader-role">Founder</span>
                                    </figcaption> */}
                                    </figure>
                                    <figure className="heritage-ab-leader-photo">
                                        <img src={aboutSection3Image2} alt="" />

                                        {/* <figcaption>
                                        <span className="heritage-ab-leader-name">Ravishankar Manie</span>
                                        <span className="heritage-ab-leader-role">COO</span>
                                    </figcaption> */}
                                    </figure>
                                </div>

                                <img
                                    className="heritage-ab-leader-wide"
                                    src={aboutSection3Image3}
                                    alt=""
                                />

                            </div>

                            <div className="col-md-6">
                                <div className="heritage-ab-copy">
                                    <div className="section-title">
                                        <h3 className="sub-headding">
                                            Our Leadership &amp; Vision
                                        </h3>
                                        <h2 >A Legacy Carried Forward</h2>
                                    </div>
                                    <p>
                                        Today, Heritage B<span className="bnb-p-tag">&</span>B is led by the
                                        <span className="highlight"> second generation</span>, combining the wisdom of
                                        decades of experience with a contemporary vision for design and
                                        property development.
                                    </p>
                                    <p>
                                        <span className="highlight">Ravishankar Manie</span>, COO of Heritage B<span className="bnb-p-tag">&</span>B, brings
                                        over three decades of experience in infrastructure, construction,
                                        and execution. As a <span className="highlight">PWD First Class Contractor</span>,
                                        his expertise ensures strong project management, dependable
                                        execution, and meticulous property care.
                                    </p>
                                    <p>
                                        Together, the team continues to build on the foundation
                                        established by the first generation&nbsp;&mdash; bringing
                                        together design, craftsmanship, execution, and cultural
                                        understanding.
                                    </p>

                                    <p className="heritage-ab-vision-label">Our vision is simple:</p>
                                    <p className="heritage-ab-pullquote">
                                        To preserve the beauty of the past, enrich the spaces of today,
                                        and create a legacy for generations to come.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={AboutShape4} className="high-shape-img" alt="" />
            </section>

        </div>
    );
};

export default Aboutus;