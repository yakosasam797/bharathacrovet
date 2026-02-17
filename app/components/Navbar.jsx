"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Activities" },
    { href: "/products", label: "Products" },
    { href: "/indous-bio", label: "Indous Bio" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <img
                        src="https://www.bharathagrovet.com/images/logo.jpg"
                        alt="Bharath Agrovet Logo"
                        className={styles.logoImage}
                    />
                </Link>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.navCta}
                        onClick={() => setMenuOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </nav>

                <button
                    className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
