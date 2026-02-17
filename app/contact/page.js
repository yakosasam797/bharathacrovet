"use client";

import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./contact.module.css";
import { useState } from "react";

const BASE = "https://www.bharathagrovet.com";

const infoCards = [
    {
        label: "Registered Office",
        text: "Bharath Agrovet Industries Pvt. Ltd.\nThumbe, Mangaluru – 574143\nDakshina Kannada, Karnataka, India",
        num: "01",
    },
    {
        label: "Email",
        text: "info@bharathagrovet.com",
        num: "02",
        link: "mailto:info@bharathagrovet.com",
    },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/17.jpg`}
                title="Contact Us"
                subtitle="Get in Touch"
                compact
            />

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <AnimateOnScroll>
                            <div className={styles.formBlock}>
                                <h2 className="heading-3" style={{ marginBottom: "0.5rem" }}>
                                    We&apos;d Love to Hear From You
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-muted" style={{ margin: "1rem 0 2rem" }}>
                                    Have questions about our products, services, or partnership opportunities?
                                    Drop us a message and our team will get back to you.
                                </p>

                                {submitted ? (
                                    <div className={styles.successMsg}>
                                        <span className={styles.successIcon}>✓</span>
                                        <strong>Thank you!</strong>
                                        <p>Your message has been sent successfully. We&apos;ll respond within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Full Name</label>
                                                <input type="text" className={styles.input} placeholder="Your name" required />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Email Address</label>
                                                <input type="email" className={styles.input} placeholder="you@example.com" required />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Phone</label>
                                                <input type="tel" className={styles.input} placeholder="+91 XXXXX XXXXX" />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Subject</label>
                                                <input type="text" className={styles.input} placeholder="What is this regarding?" />
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Message</label>
                                            <textarea className={styles.textarea} placeholder="Tell us more..." rows={6} required />
                                        </div>
                                        <button type="submit" className="btn btn--primary">
                                            Send Message →
                                        </button>
                                    </form>
                                )}
                            </div>
                        </AnimateOnScroll>

                        {/* Info Sidebar — Address, Email + Map */}
                        <AnimateOnScroll delay={2}>
                            <div className={styles.infoBlock}>
                                {infoCards.map((card) => (
                                    <div key={card.num} className={styles.infoCard}>
                                        <span className={styles.infoNum}>{card.num}</span>
                                        <h3 className={styles.infoTitle}>{card.label}</h3>
                                        {card.link ? (
                                            <p className={styles.infoText}>
                                                <a
                                                    href={card.link}
                                                    target={card.link.startsWith("http") ? "_blank" : undefined}
                                                    rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className={styles.infoLink}
                                                >
                                                    {card.text}
                                                </a>
                                            </p>
                                        ) : (
                                            <p className={styles.infoText} style={{ whiteSpace: "pre-line" }}>
                                                {card.text}
                                            </p>
                                        )}
                                    </div>
                                ))}

                                {/* Google Map */}
                                <div className={styles.mapCard}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3!2d74.856!3d12.870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a43a!2sMangaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1600000000000"
                                        className={styles.sidebarMap}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Bharath Agrovet Location — Mangaluru"
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </>
    );
}
