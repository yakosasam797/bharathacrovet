import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./indous.module.css";

export const metadata = {
    title: "Indous Bio — Virgin Coconut Oil & Natural Products",
    description: "Indous Bio is a subsidiary of Bharath Agrovet Industries producing premium virgin coconut oil and coconut-based products.",
};

const BASE = "https://www.bharathagrovet.com";

const benefits = [
    { icon: "❤️", title: "Heart Health", desc: "Rich in medium-chain triglycerides (MCTs) that support cardiovascular health." },
    { icon: "🧠", title: "Brain Function", desc: "MCTs provide an immediate and clean energy source for brain cells." },
    { icon: "💪", title: "Immune Boost", desc: "Contains lauric acid, a powerful compound with antimicrobial properties." },
    { icon: "🌿", title: "Skin Care", desc: "Natural moisturizer with antibacterial properties for healthy skin." },
    { icon: "⚡", title: "Energy", desc: "MCTs are rapidly absorbed and converted to energy — ideal for active lifestyles." },
    { icon: "🦷", title: "Oral Health", desc: "Traditional oil-pulling with VCO supports oral hygiene and gum health." },
    { icon: "🫁", title: "Anti-Inflammatory", desc: "Rich in antioxidants that help reduce inflammation and oxidative stress." },
    { icon: "🌡️", title: "Cooking", desc: "High smoke point makes it ideal for sautéing, frying, and baking." },
];

const certs = [
    "FSSAI Licensed", "ISO 22000", "Organic Certified", "HALAL Certified",
];

export default function IndousBioPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/5.png`}
                title="Indous Bio"
                subtitle="Natural Products"
                compact
            />

            {/* Intro */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Subsidiary Company</span>
                                <h2 className="heading-2" style={{ marginBottom: "1rem" }}>
                                    Virgin Coconut Oil &amp; Natural Products
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-large text-muted" style={{ marginTop: "1.5rem" }}>
                                    INDOUS BIO is a subsidiary of Bharath Agrovet Industries Private Limited
                                    promoting Virgin Coconut Oil (VCO) and its value-added products.
                                    Virgin Coconut Oil is one of the healthiest oils extracted from fresh
                                    coconut meat through cold-pressing, without heat or chemicals.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.indousImage}>
                                <img
                                    src={`${BASE}/images/indus.jpg`}
                                    alt="Indous Bio products"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* VCO Banner */}
            <div className={styles.vcoBanner}>
                <img src={`${BASE}/images/banner_images/6.png`} alt="VCO" className={styles.vcoBg} />
                <div className={styles.vcoOverlay}>
                    <AnimateOnScroll>
                        <div className={styles.vcoContent}>
                            <span className={styles.vcoTag}>★ Premium Quality</span>
                            <h2 className="heading-1 text-white">Virgin Coconut Oil</h2>
                            <p className={styles.vcoDesc}>
                                Cold-pressed from fresh coconut meat. No chemicals.
                                No heat processing. Pure, natural, and nutrient-rich.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Benefits */}
            <section className="section section--cream">
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Health Benefits</span>
                            <h2 className="heading-2">Why Virgin Coconut Oil?</h2>
                        </div>
                    </AnimateOnScroll>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((b, i) => (
                            <AnimateOnScroll key={b.title} delay={(i % 4) + 1}>
                                <div className={styles.benefitCard}>
                                    <span className={styles.benefitIcon}>{b.icon}</span>
                                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                                    <p className={styles.benefitDesc}>{b.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className={styles.certSection}>
                <div className={styles.certGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Certifications</span>
                            <h2 className="heading-3 text-white" style={{ marginBottom: "2rem" }}>
                                Quality Assured
                            </h2>
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.certRow}>
                        {certs.map((c, i) => (
                            <AnimateOnScroll key={c} delay={i + 1}>
                                <div className={styles.certBadge}>
                                    <span className={styles.certCheck}>✓</span>
                                    {c}
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
