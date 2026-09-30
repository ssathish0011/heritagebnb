import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contactus.css";

import iconMail from "../../../assets/main/mail.png";
import iconPhone from "../../../assets/main/phone.png";
import iconLocation from "../../../assets/main/location.png";
import ContactShape1 from "../../../assets/contact-shape-1.png";
import ContactShape2 from "../../../assets/contact-shape-2.png";
import ContacthapeMobile from "../../../assets/pages/contact-mobile-shape-1.png";
import Turnstile from "../../Turnstile/Turnstile";


gsap.registerPlugin(ScrollTrigger);

const INTERESTS = [
    "Heritage Architecture & Restoration",
    "Luxury Heritage Interiors",
    "Construction & Turnkey Projects",
    "Antique Furniture & Décor Curation",
    "Bespoke Heritage Villas & Retreats",
    "General Enquiry",
];

const CONTACT_CARDS = [
    {
        key: "studio",
        label: "Address",
        icon: iconLocation,
        wide: true,
        body: (
            <>
                Saha Pallazo, S2/P, Periyar Nagar,
                <br />
                Rajagopalapuram, Pudukkottai, 622003.
            </>
        ),
    },
    {
        key: "email",
        label: "Email",
        icon: iconMail,
        body: (
            <a href="mailto:info@heritagebnb.in">
                info@heritagebnb.in
            </a>
        ),
    },
    {
        key: "phone",
        label: "Phone",
        icon: iconPhone,
        body: (
            <>
                <a href="tel:+919087855556">+91 90878 55556</a>
                <br />
                <a href="tel:+919087845556">+91 90878 45556</a>
            </>
        ),
    },
];

const contactPageEndpoint = import.meta.env.DEV
    ? "http://localhost:8000/contact-page.php"
    : "/server/contact-page.php";

function HeritageDivider() {
    return (
        <div className="heritage-ct-divider" aria-hidden="true">
            <span className="heritage-ct-divider-line heritage-ct-divider-line-left" />
            <span className="heritage-ct-divider-ornament">
                <svg viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 5 C22.5 10 25 12 30 14 C25 16 22 18 20 23 C18 18 15 16 10 14 C15 12 17.5 10 20 5Z"
                        fill="currentColor"
                    />
                    <path
                        d="M20 17 L23 20 L20 23 L17 20 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                </svg>
            </span>
            <span className="heritage-ct-divider-line heritage-ct-divider-line-right" />

        </div>
    );
}

const Contactus = () => {
    const pageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const [turnstileKey, setTurnstileKey] = useState(0);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        number: "",
        city: "",
        interest: "",
        message: "",
    });

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
                contactPageEndpoint,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formData,
                        "cf-turnstile-response": turnstileToken,
                    }),
                }
            );

            const result = await response.json();

            if (result.status === "success") {
                setStatus("Message sent successfully. We will be in touch shortly.");
                setFormData({
                    fullname: "",
                    email: "",
                    number: "",
                    city: "",
                    interest: "",
                    message: "",
                });
            } else {
                setStatus(result.message || "Failed to send message.");
            }
        } catch {
            setStatus("Server connection failed. Please try again or call the studio.");
        } finally {
            setLoading(false);
            setTurnstileToken("");
            setTurnstileKey((key) => key + 1);
        }
    };

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) return undefined;

        pageRef.current?.classList.add("heritage-ct-page--animate");

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

            gsap.utils.toArray(".heritage-ct-reveal").forEach((block) => {
                gsap.fromTo(
                    block,
                    { y: 36, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 85%",
                            toggleActions: "restart none none reverse",
                        },
                    }
                );
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="heritage-ct-page" ref={pageRef}>

            <section className="heritage-ab-hero">
                {/* Mobile image */}
                <img src={ContacthapeMobile} className="high-shape-img mobile-shape-my" alt="" />

                <div className="heritage-ab-hero-overlay" />
                <div className="heritage-ab-hero-content">
                    <h2 className="heritage-ab-hero-title">Contact Us</h2>
                    <span className="heritage-ab-hero-line" aria-hidden="true" />
                </div>
                <img src={ContactShape1} className="high-shape-img desktop-shape-my" alt="" />

            </section>

            <section className="heritage-ct-wrap">
                <div className="heritage-ct-intro heritage-ct-reveal">
                    <p className="heritage-ct-eyebrow">Begin a conversation</p>
                    <h3 className="heritage-ct-heading">
                        Let us shape a space that carries your story
                    </h3>
                    <HeritageDivider />
                    <p className="heritage-ct-lead">
                        Whether you are restoring a Chettinad home, designing a heritage
                        interior, or imagining a villa retreat, Heritage B
                        <span className="bnb-p-tag">&</span>B would be honoured to hear
                        from you. Share a few details and our studio in Pudukkottai will
                        respond with care.
                    </p>
                </div>

                <div className="heritage-ct-grid">
                    <div className="heritage-ct-form-panel heritage-ct-reveal">
                        <div className="heritage-ct-form-title">
                            <h3>Enquire</h3>
                            <h2>Get in touch</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="heritage-ct-form">
                            <div className="heritage-ct-row">
                                <label className="heritage-ct-field">
                                    <span>Name</span>
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                    />
                                </label>
                                <label className="heritage-ct-field">
                                    <span>Phone</span>
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        placeholder="+91"
                                        required
                                    />
                                </label>
                            </div>

                            <div className="heritage-ct-row">
                                <label className="heritage-ct-field">
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@email.com"
                                        required
                                    />
                                </label>
                                <label className="heritage-ct-field">
                                    <span>Project location</span>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City / region"
                                    />
                                </label>
                            </div>

                            <label className="heritage-ct-field">
                                <span>I am interested in</span>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    {INTERESTS.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="heritage-ct-field">
                                <span>Message</span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell us about the property, the period, and what you hope to create..."
                                />
                            </label>

                            <Turnstile
                                key={turnstileKey}
                                onVerify={setTurnstileToken}
                            />

                            <button
                                type="submit"
                                className="heritage-ct-submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send enquiry"}
                            </button>

                            {status && (
                                <p className="heritage-ct-status" role="status">
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="heritage-ct-aside">
                        <div className="heritage-ct-cards heritage-ct-reveal">
                            {CONTACT_CARDS.map((card) => (
                                <article
                                    key={card.key}
                                    className={
                                        "heritage-ct-card" +
                                        (card.wide ? " heritage-ct-card--wide" : "")
                                    }
                                >
                                    <div className="heritage-ct-card-icon">
                                        <img src={card.icon} alt="" />
                                    </div>
                                    <div>
                                        <h3>{card.label}</h3>
                                        <p>{card.body}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="heritage-ct-map heritage-ct-reveal">
                            <iframe
                                title="Heritage B and B studio, Pudukkottai"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.1481723648119!2d78.8071655!3d10.3744158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4af0cab555cbc0f7%3A0x2aeaf3dfbca767c8!2sHeritage%20B%20%26%20B!5e0!3m2!1sen!2sin!4v1790321049128!5m2!1sen!2sin"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </div>

            </section>
            <img src={ContactShape2} className="high-shape-img" alt="" />

        </div>
    );
};

export default Contactus;
