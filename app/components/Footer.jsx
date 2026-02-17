import Link from "next/link";
import styles from "./Footer.module.css";

const BASE = "https://www.bharathagrovet.com";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrain} />
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className={styles.footerGrid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logoRow}>
                            <img
                                src={`${BASE}/images/logo.jpg`}
                                alt="Bharath Agrovet Logo"
                                className={styles.footerLogo}
                            />
                            <div>
                                <h4 className={styles.brandName}>Bharath Agrovet</h4>
                                <p className={styles.brandSub}>Industries Pvt. Ltd.</p>
                            </div>
                        </div>
                        <p className={styles.brandText}>
                            A leading poultry producing company in Mangaluru managed by
                            technical &amp; marketing professionals with more than 3 decades
                            of experience — COMMITTED TO QUALITY &amp; SERVICE.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className={styles.heading}>Quick Links</h5>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/activities">Activities</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/indous-bio">Indous Bio</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className={styles.heading}>Contact</h5>
                        <div className={styles.contactInfo}>
                            <p>Mangaluru, Karnataka, India</p>
                            <p>
                                <a href="mailto:info@bharathagrovet.com">info@bharathagrovet.com</a>
                            </p>
                            <p>
                                <a href="https://www.bharathagrovet.com" target="_blank" rel="noopener noreferrer">
                                    www.bharathagrovet.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div>
                        <h5 className={styles.heading}>Vision</h5>
                        <p className={styles.visionText}>
                            We aspire to be the foremost poultry producer celebrated for our
                            commitment to delivering wholesome and affordable protein options
                            to society.
                        </p>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Bharath Agrovet Industries Pvt. Ltd.
                        All rights reserved.
                    </p>
                    <p className={styles.credit}>
                        Designed with care in Mangaluru
                    </p>
                </div>
            </div>
        </footer>
    );
}
