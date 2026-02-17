import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./activities.module.css";

export const metadata = {
    title: "Activities — Bharath Agrovet Industries",
    description: "From breeding and hatching to feed mills, processing, and retailing — our integrated poultry operations.",
};

const BASE = "https://www.bharathagrovet.com";

const operations = [
    {
        num: "01",
        title: "Breeders",
        desc: "BHARATH AGROVET INDUSTRIES has its own breeding farm at Hassan dist, producing 5 million hatching eggs per annum by maintaining about 50 thousand breeders, under strict bio security practices. The farm is equipped with latest and most efficient gadgets, backed by qualified and experienced team of technical and management staff.",
        img: `${BASE}/images/breeders.png`,
    },
    {
        num: "02",
        title: "Hatcheries",
        desc: "BHARATH AGROVET INDUSTRIES has 2 own hatcheries at Mangalore and Kundapura, which together have an annual capacity of producing 14 million chicks. Hatcheries function round the clock under the guidance of trained and capable staff. Average hatchability ranging between 82% to 85%.",
        img: `${BASE}/images/hathery.png`,
    },
    {
        num: "03",
        title: "Feed Mills",
        desc: "BHARATH AGROVET INDUSTRIES has its own state-of-the-art crumbs & pellet mill at Thumbe, producing 6,000+ tons of feed monthly. The quality of feed manufactured is one of the best in the industry by using best and latest quality raw materials with help of computerized feed formulations and mixing technology.",
        img: `${BASE}/images/feed_mill.png`,
    },
    {
        num: "04",
        title: "Farming",
        desc: "BHARATH AGROVET INDUSTRIES has 400+ contract farmers producing healthy broilers. The company has skilled, trained, and dedicated team looking after the regular day-to-day activities. Activities such as recording of data, health coverage, marketing etc. are done efficiently, creating employment and economic sustainability in rural areas.",
        img: `${BASE}/images/farming.png`,
    },
    {
        num: "05",
        title: "Processing",
        desc: "BHARATH AGROVET INDUSTRIES owns a conveyorised dressing unit at Ganjimutt dressing 1,000 birds per hour. The unit has a rendering plant, ETP (Effluent Treatment Plant), bio gas plant (which produces about 400 units of electricity per day) and cold room. Halal dressed chilled chicken is distributed to hotels, restaurants, and retail outlets.",
        img: `${BASE}/images/processing.png`,
    },
    {
        num: "06",
        title: "Retailing",
        desc: "BHARATH AGROVET INDUSTRIES has five retail outlets in the city of Mangalore — three 'CHILLY CHICKEN' outlets and two 'MEAT JUNCTION' outlets. These outlets deliver Halal chilled chicken to restaurants, caterers, and the general public.",
        img: `${BASE}/gallery_images/1880378147A1-900_600.jpg`,
    },
    {
        num: "07",
        title: "Consultancy",
        desc: "BHARATH AGROVET INDUSTRIES has qualified and experienced consultants to guide and train upcoming entrepreneurs and existing poultry farmers. We have already set up and commissioned projects in India and abroad, including hatcheries, feed mills, and turn-key poultry projects.",
        img: `${BASE}/images/banner_images/20.jpg`,
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/10.jpg`}
                title="Our Activities"
                subtitle="Operations"
                compact
            />

            {/* Activity Chart Image */}
            <section className="section section--alt">
                <div className="container" style={{ textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Value Chain</span>
                        <h2 className="heading-3" style={{ marginBottom: "1.5rem" }}>
                            Integrated Poultry Operations
                        </h2>
                        <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto 3rem" }}>
                            From our breeding farms through hatching, feed production, farming, processing, and retail — every step is managed with precision and care.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={1}>
                        <div className={styles.chartWrap}>
                            <img
                                src={`${BASE}/resources/uploaded/activity-chart_1.jpg`}
                                alt="Activity Flow Chart"
                                className={styles.chartImage}
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Alternating Blocks */}
            <section className="section">
                <div className="container">
                    {operations.map((op, i) => (
                        <AnimateOnScroll key={op.num}>
                            <div
                                className={`${styles.opBlock} ${i % 2 === 1 ? styles.opBlockReversed : ""}`}
                            >
                                <div className={styles.opImageWrap}>
                                    <img src={op.img} alt={op.title} />
                                    <div className={styles.opNum}>{op.num}</div>
                                </div>
                                <div className={styles.opContent}>
                                    <h3 className="heading-3" style={{ marginBottom: "0.5rem" }}>
                                        {op.title}
                                    </h3>
                                    <div className="accent-bar" />
                                    <p className="text-muted" style={{ marginTop: "1.25rem", lineHeight: "1.85" }}>
                                        {op.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>
        </>
    );
}
