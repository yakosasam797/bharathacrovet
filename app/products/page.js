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
        icon: "🥚",
        color: "#FEF3E2",
    },
    {
        name: "Day Old Chicks",
        desc: "14 million+ DOC per annum from 2 hatcheries at Mangalore and Kundapura, with average hatchability of 82%–85%.",
        icon: "🐣",
        color: "#FFF9E3",
    },
    {
        name: "Hi-Density Poultry Feeds",
        desc: "State-of-the-art crumbs & pellet feed from our own mill at Thumbe, using computerized formulations and premium raw materials.",
        icon: "🌾",
        color: "#F0F5E9",
    },
    {
        name: "Broiler Feed Pre-Mixes",
        desc: "Specially formulated pre-mixes ensuring optimal growth rates and feed conversion ratios for broiler production.",
        icon: "⚗️",
        color: "#E8F4F8",
    },
    {
        name: "Breeder Feed Pre-Mixes",
        desc: "Balanced nutrient pre-mixes designed for breeder flocks to maximize fertility and egg production.",
        icon: "🧪",
        color: "#F3EAF8",
    },
    {
        name: "Live Chicken",
        desc: "Healthy broilers grown by 400+ contract farmers under strict quality monitoring and veterinary supervision.",
        icon: "🐔",
        color: "#FDF2F0",
    },
    {
        name: "Dressed Fresh Chilled Chicken",
        desc: "Halal-certified chilled chicken from our conveyorised dressing unit at Ganjimutt, distributed across Mangalore.",
        icon: "❄️",
        color: "#E8F0F5",
    },
    {
        name: "Parent Culls",
        desc: "Quality parent culls available through our integrated poultry operations and retail outlets.",
        icon: "📦",
        color: "#F5F0E8",
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

            {/* Products Image */}
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
                    <div className={styles.productsGrid}>
                        {products.map((p, i) => (
                            <AnimateOnScroll key={p.name} delay={(i % 4) + 1}>
                                <div className={styles.productCard}>
                                    <div
                                        className={styles.productIconWrap}
                                        style={{ background: p.color }}
                                    >
                                        <span className={styles.productIcon}>{p.icon}</span>
                                    </div>
                                    <h3 className={styles.productName}>{p.name}</h3>
                                    <p className={styles.productDesc}>{p.desc}</p>
                                    <div className={styles.productBar} />
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
