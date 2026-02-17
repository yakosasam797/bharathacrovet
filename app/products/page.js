import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./products.module.css";

export const metadata = {
    title: "Products — Bharath Agrovet Industries",
    description: "Broiler hatching eggs, day old chicks, hi-density poultry feeds, dressed chicken, and more from Bharath Agrovet.",
};

const BASE = "https://www.bharathagrovet.com";

const products = [
    {
        name: "Broiler Hatching Eggs",
        desc: "Premium fertile eggs from our own breeding farm at Hassan district, backed by strict bio-security and health practices.",
        img: "/images/products/Broiler Hatching Eggs.jpg",
    },
    {
        name: "Day Old Chicks",
        desc: "14 million+ DOC per annum from 2 hatcheries at Mangalore and Kundapura, with average hatchability of 82%–85%.",
        img: "/images/products/Day Old Chicks.jpg",
    },
    {
        name: "Hi-Density Poultry Feeds",
        desc: "State-of-the-art crumbs & pellet feed from our own mill at Thumbe, using computerized formulations and premium raw materials.",
        img: "/images/products/Hi-Density Poultry Feeds.jpg",
    },
    {
        name: "Broiler Feed Pre-Mixes",
        desc: "Specially formulated pre-mixes ensuring optimal growth rates and feed conversion ratios for broiler production.",
        img: "/images/products/Broiler Feed Pre-Mixes.jpeg",
    },
    {
        name: "Breeder Feed Pre-Mixes",
        desc: "Balanced nutrient pre-mixes designed for breeder flocks to maximize fertility and egg production.",
        img: "/images/products/Breeder Feed Pre-Mixes.jpg",
    },
    {
        name: "Live Chicken",
        desc: "Healthy broilers grown by 400+ contract farmers under strict quality monitoring and veterinary supervision.",
        img: "/images/products/Live Chicken.jpg",
    },
    {
        name: "Fresh Chilled Chicken",
        desc: "Halal-certified chilled chicken from our conveyorised dressing unit at Ganjimutt, distributed across Mangalore.",
        img: "/images/products/Fresh Chilled Chicken.jpg",
    },
    {
        name: "Parent Culls",
        desc: "Quality parent culls available through our integrated poultry operations and retail outlets.",
        img: "/images/products/Parent Culls.jpg",
    },
];

export default function ProductsPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/15.jpg`}
                title="Our Products"
                subtitle="Quality Poultry Products"
                compact
            />

            {/* Intro */}
            <section className={`section ${styles.productsIntro}`}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Product Range</span>
                                <h2 className="heading-2" style={{ marginBottom: "1rem" }}>
                                    Farm to Fork Excellence
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-muted text-large" style={{ marginTop: "1.5rem" }}>
                                    From hatching eggs and day-old chicks to premium poultry feeds
                                    and fresh chilled Halal chicken — we deliver quality across
                                    the entire value chain.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.productFeatImage}>
                                <img
                                    src={`${BASE}/resources/uploaded/Product_activities.jpg`}
                                    alt="Products overview"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Product Cards */}
            <section className="section section--cream">
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Our Range</span>
                            <h2 className="heading-3" style={{ marginBottom: "0.75rem" }}>8 Quality Products</h2>
                            <div className="accent-bar accent-bar--center" />
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.productsGrid}>
                        {products.map((p, i) => (
                            <AnimateOnScroll key={p.name} delay={(i % 4) + 1}>
                                <div className={styles.productCard}>
                                    <div className={styles.productImgWrap}>
                                        <img src={p.img} alt={p.name} className={styles.productImg} />
                                    </div>
                                    <div className={styles.productBody}>
                                        <span className={styles.productNum}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className={styles.productName}>{p.name}</h3>
                                        <p className={styles.productDesc}>{p.desc}</p>
                                    </div>
                                    <div className={styles.productBar} />
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Get Started</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            Interested in Our Products?
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            Whether you need hatching eggs, day-old chicks, premium feeds, or fresh chilled chicken — get in touch with our team.
                        </p>
                        <a href="/contact" className="btn btn--gold">
                            Contact Us →
                        </a>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
