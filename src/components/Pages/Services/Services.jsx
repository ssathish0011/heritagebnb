import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

import service1 from "../../../assets/pages/services/services-1.webp";
import service2 from "../../../assets/pages/services/services-2.webp";
import service3 from "../../../assets/pages/services/services-3.webp";
import service4 from "../../../assets/pages/services/services-4.webp";
import service5 from "../../../assets/pages/services/services-5.webp";
import ServiceShape1 from "../../../assets/pages/services/service-shape-1.png";
import ServiceShape2 from "../../../assets/pages/services/service-shape-2.png";
import ServiceShapeMobile from "../../../assets/pages/services/mobile-shape-1.png";


const SERVICES = [
    {
        num: "01",
        eyebrow: "Preserving History. Reimagining Spaces.",
        title: "Heritage Architecture & Restoration",
        paragraphs: [
            "Our heritage architecture and restoration services preserve the character, craftsmanship, and cultural identity of traditional buildings while adapting them for contemporary living.",
            "We carefully study existing structures, materials, proportions, and detailing before restoring and enhancing them using traditional techniques, locally sourced materials, handcrafted elements, and modern structural solutions.",
            "Our expertise includes heritage property restoration, Chettinad architecture, traditional courtyard homes, structural restoration, adaptive reuse, material preservation, and architectural conservation."
        ],
        image: service1,
    },

    {
        num: "02",
        eyebrow: "Interiors That Carry a Story",
        title: "Luxury Heritage Interiors",
        paragraphs: [
            "Our interiors bring together heritage character, craftsmanship, comfort, and contemporary living. Antique furniture, handcrafted details, natural materials, traditional artwork, bespoke furnishings, and curated décor create spaces with depth and personality.",
            "Every interior is designed around the architecture and lifestyle of the client, giving each space a distinctive identity.",
            "Our services include complete interior design, heritage interiors, luxury residential interiors, antique furniture integration, bespoke furnishings, lighting and décor curation, material selection, styling, and installation."
        ],
        image: service2,
    },

    {
        num: "03",
        eyebrow: "From Vision to Completion",
        title: "Construction & Turnkey Projects",
        paragraphs: [
            "Our turnkey services provide a seamless journey from concept to completion, with architecture, construction, interiors, and project coordination managed by one experienced team.",
            "We focus on quality, craftsmanship, timelines, and attention to detail, ensuring consistency throughout every stage of the project.",
            "Our services include residential construction, heritage property development, villa construction, renovation, refurbishment, civil and structural works, interior execution, electrical and plumbing coordination, custom finishing, and complete project management."
        ],
        image: service3,
    },

    {
        num: "04",
        eyebrow: "Objects with History. Pieces with Character.",
        title: "Antique Furniture & Décor Curation",
        paragraphs: [
            "Antiques bring history, individuality, and character that cannot be recreated through mass-produced décor.",
            "Our curated collection features antique and vintage furniture, architectural elements, collectibles, artwork, artefacts, sculptures, decorative accessories, and vintage lighting sourced from different regions and traditions.",
            "Each piece is carefully selected for its craftsmanship, character, provenance, and ability to complement thoughtfully designed interiors."
        ],
        image: service4,
    },

    {
        num: "05",
        eyebrow: "Creating Places Worth Remembering",
        title: "Bespoke Heritage Villas & Retreats",
        paragraphs: [
            "We design and develop distinctive villas, retreats, farmhouses, and sustainable homes that connect their surroundings with contemporary comfort.",
            "Inspired by traditional Indian architecture, our designs incorporate natural materials, courtyards, verandahs, gardens, climate-responsive elements, and indoor-outdoor living.",
            "Our bespoke projects include heritage-inspired villas, beach and coastal retreats, farmhouses, private residences, weekend homes, sustainable houses, green homes, boutique retreats, and custom architectural developments."
        ],
        image: service5,
    },
];

export default function Services() {
    const pageRef = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) return undefined;

        pageRef.current?.classList.add("heritage-svc-page--animate");

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".heritage-ab-hero",
                    start: "top 90%",
                    toggleActions: "restart none none reverse",
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

            gsap.utils.toArray(".heritage-svc-row").forEach((row) => {
                const isReverse = row.classList.contains("heritage-svc-row--reverse");
                const media = row.querySelector(".heritage-svc-media");
                const image = row.querySelector(".heritage-svc-image");
                const frame = row.querySelector(".heritage-svc-media-frame");
                const title = row.querySelector(".heritage-svc-title");
                const eyebrow = row.querySelector(".heritage-svc-eyebrow");
                const paragraphs = row.querySelectorAll(".heritage-svc-body p");
                const watermark = row.querySelector(".heritage-svc-watermark");
                const clipFrom = isReverse
                    ? "inset(0 0 0 100%)"
                    : "inset(0 100% 0 0)";

                gsap.set(media, { clipPath: clipFrom });
                gsap.set(image, { scale: 1.16 });
                gsap.set(frame, { opacity: 0, scale: 0.94 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 78%",
                        toggleActions: "restart none none reverse",
                    },
                    onComplete: () => {
                        gsap.set(image, { clearProps: "transform" });
                    },
                    onReverseComplete: () => {
                        gsap.set(image, { scale: 1.16 });
                        gsap.set(media, { clipPath: clipFrom });
                    },
                });

                tl.fromTo(
                    media,
                    { clipPath: clipFrom },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.15,
                        ease: "power4.out",
                    }
                )
                    .fromTo(
                        image,
                        { scale: 1.16 },
                        {
                            scale: 1,
                            duration: 1.35,
                            ease: "power2.out",
                        },
                        "<"
                    )
                    .fromTo(
                        frame,
                        { opacity: 0, scale: 0.94 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out",
                        },
                        "-=0.85"
                    )
                    .fromTo(
                        title,
                        { y: 36, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.75,
                            ease: "power3.out",
                        },
                        "-=0.9"
                    )
                    .fromTo(
                        eyebrow,
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.55,
                            ease: "power2.out",
                        },
                        "-=0.5"
                    )
                    .fromTo(
                        paragraphs,
                        { y: 22, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.55,
                            stagger: 0.1,
                            ease: "power2.out",
                        },
                        "-=0.35"
                    )
                    .fromTo(
                        watermark,
                        { opacity: 0 },
                        {
                            opacity: 0.04,
                            duration: 0.9,
                            ease: "power1.out",
                        },
                        "-=0.6"
                    );
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="heritage-svc-page" ref={pageRef}>

            <section className="heritage-ab-hero">
                {/* Mobile image */}
                <img src={ServiceShapeMobile} className="high-shape-img mobile-shape-my" alt="" />

                <div className="heritage-ab-hero-overlay" />
                <div className="heritage-ab-hero-content">
                    <h2 className="heritage-ab-hero-title">Services</h2>
                    <span className="heritage-ab-hero-line" aria-hidden="true" />
                </div>
                <img src={ServiceShape1} className="high-shape-img desktop-shape-my" alt="" />

            </section>

            <section className="heritage-svc-list">
                {SERVICES.map((s, i) => (
                    <article
                        key={s.num}
                        className={
                            "heritage-svc-row" +
                            (i % 2 === 1 ? " heritage-svc-row--reverse" : "")
                        }
                    >
                        <div className="heritage-svc-media">
                            <img
                                src={s.image}
                                alt={s.title}
                                className="heritage-svc-image"
                            />
                            <span className="heritage-svc-shine" aria-hidden="true" />
                            <div
                                className="heritage-svc-media-frame"
                                aria-hidden="true"
                            />
                        </div>

                        <div className="heritage-svc-content">
                            <div className="section-title">
                                <h2 className="heritage-svc-title">{s.title}</h2>
                            </div>
                            <p className="heritage-svc-eyebrow">{s.eyebrow}</p>
                            <div className="heritage-svc-body">
                                {s.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="heritage-svc-watermark" aria-hidden="true">
                            {s.num}
                        </div>
                    </article>
                ))}
                <img src={ServiceShape2} className="high-shape-img" alt="" />

            </section>
        </div>
    );
}