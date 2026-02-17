"use client";

import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./contact.module.css";
import { useState } from "react";

const BASE = "https://www.bharathagrovet.com";

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
                imageSrc={`${BASE}/images/banner_images/21.jpg`}
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
                                <span className="overline">Send a Message</span>
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

                        {/* Info Sidebar */}
                        <AnimateOnScroll delay={2}>
                            <div className={styles.infoBlock}>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📍</div>
                                    <h3 className={styles.infoTitle}>Office Address</h3>
                                    <p className={styles.infoText}>
                                        Bharath Agrovet Industries Pvt. Ltd.<br />
                                        Mangaluru, Karnataka<br />
                                        India
                                    </p>
                                </div>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>🕐</div>
                                    <h3 className={styles.infoTitle}>Business Hours</h3>
                                    <p className={styles.infoText}>
                                        Monday – Saturday<br />
                                        9:00 AM – 6:00 PM IST
                                    </p>
                                </div>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>📧</div>
                                    <h3 className={styles.infoTitle}>Email</h3>
                                    <p className={styles.infoText}>
                                        <a href="mailto:info@bharathagrovet.com" className={styles.infoLink}>
                                            info@bharathagrovet.com
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>🌐</div>
                                    <h3 className={styles.infoTitle}>Website</h3>
                                    <p className={styles.infoText}>
                                        <a href="https://www.bharathagrovet.com" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                                            www.bharathagrovet.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className={styles.mapSection}>
                <div className={styles.mapPlaceholder}>
                    <img src={`${BASE}/images/banner_images/18.jpg`} alt="Location" className={styles.mapBg} />
                    <div className={styles.mapOverlay}>
                        <div className={styles.mapContent}>
                            <span className={styles.mapPin}>📍</span>
                            <h3 className="heading-3 text-white">Mangaluru, Karnataka</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.5rem" }}>
                                Coastal Karnataka, India
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
