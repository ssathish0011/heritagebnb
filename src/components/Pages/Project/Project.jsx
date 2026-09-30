import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Project.css";

gsap.registerPlugin(ScrollTrigger);


import ProjectNew1a from "../../../assets/pages/projects/project14/project-1.jpeg";
import ProjectNew1b from "../../../assets/pages/projects/project14/project-2.jpeg";
import ProjectNew1c from "../../../assets/pages/projects/project14/project-3.jpeg";
import ProjectNew1d from "../../../assets/pages/projects/project14/project-4.jpeg";
import ProjectNew1e from "../../../assets/pages/projects/project14/project-5.jpeg";
import ProjectNew1f from "../../../assets/pages/projects/project14/project-6.jpeg";
import ProjectNew1g from "../../../assets/pages/projects/project14/project-7.jpeg";
import ProjectNew1h from "../../../assets/pages/projects/project14/project-8.jpeg";
import ProjectNew1i from "../../../assets/pages/projects/project14/project-9.jpeg";
import ProjectNew1j from "../../../assets/pages/projects/project14/project-10.jpeg";
import ProjectNew1k from "../../../assets/pages/projects/project14/project-11.jpeg";
import ProjectNew1l from "../../../assets/pages/projects/project14/project-12.jpeg";
import ProjectNew1m from "../../../assets/pages/projects/project14/project-13.jpeg";
import ProjectNew1n from "../../../assets/pages/projects/project14/project-14.jpeg";
import ProjectNew1o from "../../../assets/pages/projects/project14/project-15.jpeg";
import ProjectNew1p from "../../../assets/pages/projects/project14/project-16.jpeg";
import ProjectNew1q from "../../../assets/pages/projects/project14/project-17.jpeg";
import ProjectNew1r from "../../../assets/pages/projects/project14/project-18.jpeg";
import ProjectNew1s from "../../../assets/pages/projects/project14/project-19.jpeg";
// import ProjectNew1t from "../../../assets/pages/projects/project14/project-20.jpeg";

import Project1a from "../../../assets/pages/projects/project1/project-1.jpg";
import Project1b from "../../../assets/pages/projects/project1/project-2.jpg";
import Project1c from "../../../assets/pages/projects/project1/project-3.jpg";
import Project1d from "../../../assets/pages/projects/project1/project-4.jpg";
import Project1e from "../../../assets/pages/projects/project1/project-5.jpg";

import Project2a from "../../../assets/pages/projects/project2/project-1.jpg";
import Project2b from "../../../assets/pages/projects/project2/project-2.jpg";
import Project2c from "../../../assets/pages/projects/project2/project-3.jpg";
import Project2d from "../../../assets/pages/projects/project2/project-4.jpg";
import Project2e from "../../../assets/pages/projects/project2/project-5.jpg";
import Project2f from "../../../assets/pages/projects/project2/project-6.jpg";

import Project3a from "../../../assets/pages/projects/project3/project-1.jpg";
import Project3b from "../../../assets/pages/projects/project3/project-2.jpg";

import Project4a from "../../../assets/pages/projects/project4/project-1.jpg";
import Project4b from "../../../assets/pages/projects/project4/project-2.jpg";
import Project4c from "../../../assets/pages/projects/project4/project-3.jpg";

import Project5a from "../../../assets/pages/projects/project5/project-1.jpg";
import Project5b from "../../../assets/pages/projects/project5/project-2.jpg";
import Project5c from "../../../assets/pages/projects/project5/project-3.jpg";
import Project5d from "../../../assets/pages/projects/project5/project-4.jpg";

import Project6a from "../../../assets/pages/projects/project6/project-1.jpg";
import Project6b from "../../../assets/pages/projects/project6/project-2.jpg";
import Project6c from "../../../assets/pages/projects/project6/project-3.jpg";
import Project6d from "../../../assets/pages/projects/project6/project-4.jpg";
import Project6e from "../../../assets/pages/projects/project6/project-5.jpg";

import Project7a from "../../../assets/pages/projects/project7/project-1.jpg";
import Project7b from "../../../assets/pages/projects/project7/project-2.jpg";
import Project7c from "../../../assets/pages/projects/project7/project-3.jpg";

import Project8a from "../../../assets/pages/projects/project8/project-1.png";
import Project8b from "../../../assets/pages/projects/project8/project-2.png";
import Project8c from "../../../assets/pages/projects/project8/project-3.png";
import Project8d from "../../../assets/pages/projects/project8/project-4.png";
import Project8e from "../../../assets/pages/projects/project8/project-5.png";
import Project8f from "../../../assets/pages/projects/project8/project-6.png";
import Project8g from "../../../assets/pages/projects/project8/project-7.png";
import Project8h from "../../../assets/pages/projects/project8/project-8.png";
import Project8i from "../../../assets/pages/projects/project8/project-9.png";

import Project9a from "../../../assets/pages/projects/project9/project-1.jpg";
import Project9b from "../../../assets/pages/projects/project9/project-2.jpg";
import Project9c from "../../../assets/pages/projects/project9/project-3.jpg";
import Project9d from "../../../assets/pages/projects/project9/project-4.jpg";
import Project9e from "../../../assets/pages/projects/project9/project-5.jpg";
import Project9f from "../../../assets/pages/projects/project9/project-6.jpg";
import Project9g from "../../../assets/pages/projects/project9/project-7.jpg";
import Project9h from "../../../assets/pages/projects/project9/project-8.jpg";
import Project9i from "../../../assets/pages/projects/project9/project-9.jpg";
import Project9j from "../../../assets/pages/projects/project9/project-10.png";
import Project9k from "../../../assets/pages/projects/project9/project-11.jpeg";
import Project9l from "../../../assets/pages/projects/project9/project-12.jpeg";
import Project9m from "../../../assets/pages/projects/project9/project-13.jpeg";
import Project9n from "../../../assets/pages/projects/project9/project-14.jpeg";
import Project9o from "../../../assets/pages/projects/project9/project-15.jpeg";
import Project9p from "../../../assets/pages/projects/project9/project-16.jpeg";
import Project9q from "../../../assets/pages/projects/project9/project-17.jpeg";
import Project9r from "../../../assets/pages/projects/project9/project-18.jpeg";
import Project9s from "../../../assets/pages/projects/project9/project-19.jpeg";
import Project9t from "../../../assets/pages/projects/project9/project-20.jpeg";

import Project10a from "../../../assets/pages/projects/project10/project-1.png";
import Project10b from "../../../assets/pages/projects/project10/project-2.png";
import Project10c from "../../../assets/pages/projects/project10/project-3.png";
import Project10d from "../../../assets/pages/projects/project10/project-4.png";
import Project10e from "../../../assets/pages/projects/project10/project-5.png";
import Project10f from "../../../assets/pages/projects/project10/project-6.png";
import Project10g from "../../../assets/pages/projects/project10/project-7.png";
import Project10h from "../../../assets/pages/projects/project10/project-8.png";
import Project10i from "../../../assets/pages/projects/project10/project-9.png";
import Project10j from "../../../assets/pages/projects/project10/project-10.png";
import Project10k from "../../../assets/pages/projects/project10/project-11.png";

import Project11a from "../../../assets/pages/projects/project11/project-1.png";
import Project11b from "../../../assets/pages/projects/project11/project-2.png";
import Project11c from "../../../assets/pages/projects/project11/project-3.png";
import Project11d from "../../../assets/pages/projects/project11/project-4.png";
import Project11e from "../../../assets/pages/projects/project11/project-5.png";
import Project11f from "../../../assets/pages/projects/project11/project-6.png";
import Project11g from "../../../assets/pages/projects/project11/project-7.png";
import Project11h from "../../../assets/pages/projects/project11/project-8.png";
import Project11i from "../../../assets/pages/projects/project11/project-9.png";

import Project12a from "../../../assets/pages/projects/project12/project-1.png";
import Project12b from "../../../assets/pages/projects/project12/project-2.png";
import Project12c from "../../../assets/pages/projects/project12/project-3.png";
import Project12d from "../../../assets/pages/projects/project12/project-4.png";
import Project12e from "../../../assets/pages/projects/project12/project-5.png";
import Project12f from "../../../assets/pages/projects/project12/project-6.png";


import Project13a from "../../../assets/pages/projects/project13/project-1.jpeg";
import Project13b from "../../../assets/pages/projects/project13/project-2.jpeg";
import Project13c from "../../../assets/pages/projects/project13/project-3.jpeg";
import Project13d from "../../../assets/pages/projects/project13/project-4.jpeg";
import Project13e from "../../../assets/pages/projects/project13/project-5.jpeg";
import Project13f from "../../../assets/pages/projects/project13/project-6.jpeg";


import projectShapeMobile from "../../../assets/pages/projects/mobile-shape-1.png";
import projectShape1 from "../../../assets/pages/projects/shape-1.png";
import projectShapeMob from "../../../assets/pages/projects/shape-2-mob.png";
import projectShapeDesktop from "../../../assets/pages/projects/shape-2.png";
/**
 * Project.jsx
 *
 * Image orientation:
 *
 * horizontal = 2 columns
 * vertical   = 1 column
 */

const DEFAULT_PROJECTS = [
    {
        number: "01",
        title: "Heritage villas",
        location: "Coorg, Karnataka",
        images: [
            { src: ProjectNew1a, alt: "", orientation: "horizontal" },
            { src: ProjectNew1b, alt: "", orientation: "horizontal" },
            { src: ProjectNew1c, alt: "", orientation: "horizontal" },
            { src: ProjectNew1d, alt: "", orientation: "vertical" },
            { src: ProjectNew1e, alt: "", orientation: "vertical" },
            { src: ProjectNew1f, alt: "", orientation: "vertical" },
            { src: ProjectNew1g, alt: "", orientation: "vertical" },
            { src: ProjectNew1h, alt: "", orientation: "vertical" },
            { src: ProjectNew1i, alt: "", orientation: "vertical" },
            { src: ProjectNew1j, alt: "", orientation: "vertical" },
            { src: ProjectNew1k, alt: "", orientation: "vertical" },
            { src: ProjectNew1l, alt: "", orientation: "vertical" },
            { src: ProjectNew1m, alt: "", orientation: "vertical" },
            { src: ProjectNew1n, alt: "", orientation: "vertical" },
            { src: ProjectNew1o, alt: "", orientation: "vertical" },
            { src: ProjectNew1p, alt: "", orientation: "vertical" },
            { src: ProjectNew1q, alt: "", orientation: "vertical" },
            { src: ProjectNew1r, alt: "", orientation: "vertical" },
            { src: ProjectNew1s, alt: "", orientation: "vertical" },
        ],
    },
    {
        number: "02",
        title: "",
        location: "Coorg, Karnataka",
        images: [
            { src: Project1a, alt: " ", orientation: "horizontal" },
            { src: Project1b, alt: " ", orientation: "horizontal" },
            { src: Project1c, alt: " ", orientation: "horizontal" },
            { src: Project1d, alt: " ", orientation: "horizontal" },
            { src: Project1e, alt: " ", orientation: "horizontal" },
        ],
    },
    {
        number: "03",
        title: "",
        location: "Wayanad, Kerala",
        images: [
            { src: Project2a, alt: " ", orientation: "horizontal" },
            { src: Project2b, alt: " ", orientation: "horizontal" },
            { src: Project2c, alt: " ", orientation: "horizontal" },
            { src: Project2d, alt: " ", orientation: "horizontal" },
            { src: Project2e, alt: " ", orientation: "horizontal" },
            { src: Project2f, alt: " ", orientation: "horizontal" },
        ],
    },
    {
        number: "04",
        title: "",
        location: "Varkala, Kerala",
        images: [
            { src: Project3a, alt: "Cliffside Retreat exterior, Varkala", orientation: "horizontal" },
            { src: Project3b, alt: "Cliffside Retreat living room", orientation: "horizontal" },
        ],
    },
    {
        number: "05",
        title: "",
        location: "",
        images: [
            { src: Project4a, alt: " ", orientation: "horizontal" },
            { src: Project4b, alt: " ", orientation: "horizontal" },
            { src: Project4c, alt: " ", orientation: "horizontal" },
        ],
    },
    {
        number: "06",
        title: "",
        location: "",
        images: [
            { src: Project5a, alt: " ", orientation: "horizontal" },
            { src: Project5b, alt: " ", orientation: "horizontal" },
            { src: Project5c, alt: " ", orientation: "horizontal" },
            { src: Project5d, alt: " ", orientation: "horizontal" },
        ],
    },
    {
        number: "07",
        title: "",
        location: "",
        images: [
            { src: Project6a, alt: " ", orientation: "horizontal" },
            { src: Project6b, alt: " ", orientation: "horizontal" },
            { src: Project6c, alt: " ", orientation: "horizontal" },
            { src: Project6d, alt: " ", orientation: "horizontal" },
            { src: Project6e, alt: " ", orientation: "vertical" },
        ],
    },
    {
        number: "08",
        title: "",
        location: "",
        images: [
            { src: Project7a, alt: " ", orientation: "vertical" },
            { src: Project7b, alt: " ", orientation: "vertical" },
            { src: Project7c, alt: " ", orientation: "vertical" },
        ],
    },
    {
        number: "09",
        title: "Heritage interiors",
        location: "",
        images: [
            { src: Project8a, alt: " ", orientation: "vertical" },
            { src: Project8b, alt: " ", orientation: "vertical" },
            { src: Project8c, alt: " ", orientation: "vertical" },
            { src: Project8d, alt: " ", orientation: "vertical" },
            { src: Project8e, alt: " ", orientation: "horizontal" },
            { src: Project8f, alt: " ", orientation: "horizontal" },
            { src: Project8g, alt: " ", orientation: "horizontal" },
            { src: Project8h, alt: " ", orientation: "vertical" },
            { src: Project8i, alt: " ", orientation: "vertical" },
        ],
    },
    {
        number: "10",
        title: "Vintage museum karaikudi",
        location: "karaikudi",
        images: [
            { src: Project9j, alt: " ", orientation: "horizontal" },
            { src: Project9i, alt: " ", orientation: "horizontal" },
            { src: Project9k, alt: " ", orientation: "horizontal" },
            { src: Project9a, alt: " ", orientation: "vertical" },
            { src: Project9b, alt: " ", orientation: "vertical" },
            { src: Project9c, alt: " ", orientation: "vertical" },
            { src: Project9d, alt: " ", orientation: "vertical" },
            { src: Project9e, alt: " ", orientation: "vertical" },
            { src: Project9f, alt: " ", orientation: "vertical" },
            { src: Project9g, alt: " ", orientation: "vertical" },
            { src: Project9h, alt: " ", orientation: "vertical" },
            { src: Project9l, alt: " ", orientation: "vertical" },
            { src: Project9m, alt: " ", orientation: "vertical" },
            { src: Project9n, alt: " ", orientation: "vertical" },
            { src: Project9o, alt: " ", orientation: "vertical" },
            { src: Project9p, alt: " ", orientation: "horizontal" },
            { src: Project9q, alt: " ", orientation: "horizontal" },
            { src: Project9r, alt: " ", orientation: "horizontal" },
            { src: Project9s, alt: " ", orientation: "vertical" },
            { src: Project9t, alt: " ", orientation: "vertical" },

        ],
    },
    {
        number: "11",
        title: "IHCC Penang Malaysia",
        location: "",
        images: [
            { src: Project10a, alt: " ", orientation: "vertical" },
            { src: Project10b, alt: " ", orientation: "vertical" },
            { src: Project10c, alt: " ", orientation: "vertical" },
            { src: Project10d, alt: " ", orientation: "vertical" },
            { src: Project10e, alt: " ", orientation: "vertical" },
            { src: Project10f, alt: " ", orientation: "horizontal" },
            { src: Project10g, alt: " ", orientation: "horizontal" },
            { src: Project10h, alt: " ", orientation: "vertical" },
            { src: Project10i, alt: " ", orientation: "vertical" },
            { src: Project10j, alt: " ", orientation: "vertical" },
            { src: Project10k, alt: " ", orientation: "vertical" },
        ],
    },
    // {
    //     number: "12",
    //     title: "Vintage museum kodaikanal",
    //     location: "",
    //     images: [
    //         { src: Project11a, alt: " ", orientation: "horizontal" },
    //         { src: Project11b, alt: " ", orientation: "horizontal" },
    //         { src: Project11c, alt: " ", orientation: "horizontal" },
    //         { src: Project11d, alt: " ", orientation: "vertical" },
    //         { src: Project11e, alt: " ", orientation: "vertical" },
    //         { src: Project11f, alt: " ", orientation: "vertical" },
    //         { src: Project11g, alt: " ", orientation: "vertical" },
    //         { src: Project11h, alt: " ", orientation: "horizontal" },
    //         { src: Project11i, alt: " ", orientation: "horizontal" },

    //     ],
    // }, 
    {
        number: "13",
        title: "Traditional doors",
        location: "",
        images: [
            { src: Project12a, alt: " ", orientation: "vertical" },
            { src: Project12b, alt: " ", orientation: "vertical" },
            { src: Project12c, alt: " ", orientation: "vertical" },
            { src: Project12d, alt: " ", orientation: "vertical" },
            { src: Project12e, alt: " ", orientation: "vertical" },
            { src: Project12f, alt: " ", orientation: "vertical" },
        ],
    },
    {
        number: "14",
        title: "",
        location: "",
        images: [
            { src: Project13a, alt: " ", orientation: "vertical" },
            { src: Project13b, alt: " ", orientation: "vertical" },
            { src: Project13c, alt: " ", orientation: "vertical" },
            { src: Project13d, alt: " ", orientation: "vertical" },
            { src: Project13e, alt: " ", orientation: "vertical" },
            { src: Project13f, alt: " ", orientation: "vertical" },
        ],
    },
];


/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectImage({
    src,
    alt,
    orientation = "vertical",
    onZoom,
}) {
    const imageClass = `
        heritage-ab-project-img-frame
        heritage-ab-project-img-frame--${orientation}
        ${!src ? "heritage-ab-project-img-frame--empty" : ""}
    `;

    if (src) {
        return (
            <div
                className={imageClass}
                onClick={() => onZoom && onZoom(src, alt)}
            >
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                />
                <span className="heritage-ab-project-img-shine" aria-hidden="true" />
                <span className="heritage-ab-project-img-veil" aria-hidden="true" />
            </div>
        );
    }

    return (
        <div className={imageClass}>
            <span>{alt}</span>
        </div>
    );
}


/* =========================================================
   LIGHTBOX
========================================================= */

function ProjectLightbox({ image, onClose }) {
    useEffect(() => {
        if (!image) return;

        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [image, onClose]);

    if (!image) return null;

    return (
        <div
            className="heritage-ab-lightbox-overlay"
            onClick={onClose}
        >
            <button
                className="heritage-ab-lightbox-close"
                onClick={onClose}
                aria-label="Close image"
            >
                &times;
            </button>

            <div
                className="heritage-ab-lightbox-content"
                onClick={(e) => e.stopPropagation()}
            >
                <img src={image.src} alt={image.alt} />
            </div>
        </div>
    );
}


/* =========================================================
   PROJECT COMPONENT
========================================================= */

export default function Project({
    heroImage = "",
    heroAlt = "Heritage property verandah",
    projects = DEFAULT_PROJECTS,
}) {
    const [zoomImage, setZoomImage] = useState(null);
    const pageRef = useRef(null);

    const handleZoom = (src, alt) => setZoomImage({ src, alt });
    const handleClose = () => setZoomImage(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) return undefined;

        pageRef.current?.classList.add("heritage-ab-project-page--animate");

        const ctx = gsap.context(() => {
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
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.15,
                        ease: "power3.out",
                    }
                )
                .fromTo(
                    ".heritage-ab-hero-line",
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 1,
                        ease: "power2.out",
                    },
                    "-=0.8"
                );

            gsap.utils.toArray(".heritage-ab-project-entry").forEach((entry) => {
                const heading = entry.querySelector(".heritage-ab-project-heading1");
                const location = entry.querySelector(".heritage-ab-project-location");
                const divider = entry.querySelector(".heritage-ab-project-divider");
                const frames = entry.querySelectorAll(".heritage-ab-project-img-frame");
                const imgs = entry.querySelectorAll(".heritage-ab-project-img-frame img");

                gsap.set(frames, { clipPath: "inset(100% 0 0 0)" });
                gsap.set(imgs, { scale: 1.16 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: entry,
                        start: "top 82%",
                        toggleActions: "restart none restart none",
                    },
                    onComplete: () => {
                        gsap.set(imgs, { clearProps: "transform" });
                    },
                    onReverseComplete: () => {
                        gsap.set(imgs, { scale: 1.16 });
                        gsap.set(frames, { clipPath: "inset(100% 0 0 0)" });
                    },
                });

                tl.fromTo(
                    heading,
                    { y: 36, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    }
                )
                    .fromTo(
                        location,
                        { y: 18, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.55,
                            ease: "power2.out",
                        },
                        "-=0.5"
                    )
                    .fromTo(
                        divider,
                        { opacity: 0, y: 12 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.55,
                            ease: "power2.out",
                        },
                        "-=0.35"
                    )
                    .fromTo(
                        frames,
                        { clipPath: "inset(100% 0 0 0)" },
                        {
                            clipPath: "inset(0% 0 0 0)",
                            duration: 1.05,
                            stagger: 0.09,
                            ease: "power4.out",
                        },
                        "-=0.25"
                    )
                    .fromTo(
                        imgs,
                        { scale: 1.16 },
                        {
                            scale: 1,
                            duration: 1.25,
                            stagger: 0.09,
                            ease: "power2.out",
                        },
                        "<"
                    );
            });
        }, pageRef);

        return () => ctx.revert();
    }, [projects]);

    return (
        <div className="heritage-ab-project-page" ref={pageRef}>
            {/* ===== HERO ===== */}
            <section className="heritage-ab-hero">
                {/* Mobile image */}
                <img src={projectShapeMobile} className="high-shape-img mobile-shape-my" alt="" />

                <div className="heritage-ab-hero-overlay" />

                <div className="heritage-ab-hero-content">
                    <h2 className="heritage-ab-hero-title">Projects</h2>
                    <span className="heritage-ab-hero-line" aria-hidden="true" />
                </div>

                {/* Desktop image */}
                <img src={projectShape1} className="high-shape-img desktop-shape-my" alt="" />
            </section>
            <section className="heritage-ab-project-wrap">


                {heroImage && (
                    <div className="heritage-ab-project-hero">
                        <img src={heroImage} alt={heroAlt} />
                    </div>
                )}

                {projects.map((project, index) => (
                    <article
                        className="heritage-ab-project-entry"
                        key={project.number}
                    >
                        {project.title && (
                            <h3 className="heritage-ab-project-heading mb-5 text-center">
                                {project.title}
                            </h3>
                        )}

                        <div className="heritage-ab-project-gallery">
                            {project.images.map((img, i) => (
                                <ProjectImage
                                    key={i}
                                    src={img.src}
                                    alt={img.alt}
                                    orientation={img.orientation || "vertical"}
                                    onZoom={handleZoom}
                                />
                            ))}
                        </div>

                        {/* Hide shape after the last project */}
                        {index !== projects.length - 1 && (
                            <div className="project-shape-fade">

                                <img
                                    src={projectShapeDesktop}
                                    className="high-shape-img project-special-shape"
                                    alt=""
                                />
                                <img
                                    src={projectShapeMob}
                                    className="high-shape-img project-special-mobile"
                                    alt=""
                                />
                            </div>
                        )}
                    </article>
                ))}
                <img src={projectShape1} className="high-shape-img " alt="" />


            </section>

            <ProjectLightbox image={zoomImage} onClose={handleClose} />
        </div>
    );
}