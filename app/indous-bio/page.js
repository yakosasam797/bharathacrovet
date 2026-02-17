import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./indous.module.css";

export const metadata = {
    title: "Indous Bio — Virgin Coconut Oil & Natural Products",
    description: "Indous Bio is a subsidiary of Bharath Agrovet Industries producing premium virgin coconut oil and coconut-based products.",
};

const BASE = "https://www.bharathagrovet.com";

const benefits = [
    { title: "Heart Health", desc: "Rich in medium-chain triglycerides (MCTs) that support cardiovascular health." },
    { title: "Brain Function", desc: "MCTs provide an immediate and clean energy source for brain cells." },
    { title: "Immune Boost", desc: "Contains lauric acid, a powerful compound with antimicrobial properties." },
    { title: "Skin Care", desc: "Natural moisturizer with antibacterial properties for healthy skin." },
    { title: "Energy", desc: "MCTs are rapidly absorbed and converted to energy — ideal for active lifestyles." },
    { title: "Oral Health", desc: "Traditional oil-pulling with VCO supports oral hygiene and gum health." },
    { title: "Anti-Inflammatory", desc: "Rich in antioxidants that help reduce inflammation and oxidative stress." },
    { title: "Cooking", desc: "High smoke point makes it ideal for sautéing, frying, and baking." },
];

const certs = [
    {
        name: "FSSAI",
        full: "Food Safety & Standards Authority of India",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Food_Safety_and_Standards_Authority_of_India_%28FSSAI%29_logo.png/220px-Food_Safety_and_Standards_Authority_of_India_%28FSSAI%29_logo.png",
    },
    {
        name: "ISO 22000",
        full: "Food Safety Management System",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ISO_Logo_%28Red_square%29.svg/200px-ISO_Logo_%28Red_square%29.svg.png",
    },
    {
        name: "HALAL",
        full: "Halal Certification Authority",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Halal_logo.svg/200px-Halal_logo.svg.png",
    },
    {
        name: "Organic",
        full: "Certified Organic Product",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/India_Organic_Logo.svg/200px-India_Organic_Logo.svg.png",
    },
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
                <img src={`${BASE}/images/banner_images/5.png`} alt="VCO" className={styles.vcoBg} />
                <div className={styles.vcoOverlay}>
                    <AnimateOnScroll>
                        <div className={styles.vcoContent}>
                            <span className={styles.vcoTag}>★ Premium Quality</span>
                            <h2 className="heading-2 text-white">Virgin Coconut Oil</h2>
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
                                    <span className={styles.benefitNum}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                                    <p className={styles.benefitDesc}>{b.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications — Logo Cards */}
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
                            <AnimateOnScroll key={c.name} delay={i + 1}>
                                <div className={styles.certCard}>
                                    <div className={styles.certLogoWrap}>
                                        <img src={c.logo} alt={c.name} className={styles.certLogo} />
                                    </div>
                                    <h4 className={styles.certName}>{c.name}</h4>
                                    <p className={styles.certFull}>{c.full}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
