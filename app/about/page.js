import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./about.module.css";

export const metadata = {
    title: "About Us — Bharath Agrovet Industries",
    description: "Leading poultry producing company in Mangaluru with over 3 decades of experience. Committed to quality and service.",
};

const BASE = "https://www.bharathagrovet.com";

const activities = [
    "Breeding Farms",
    "Hatcheries",
    "Feed Mills",
    "Integration Farms",
    "Dressing Unit",
    "Retail Outlets",
    "Consultancy",
    "Exports",
];

const policyItems = [
    "Technical upgradation of our sales staff",
    "Educate and implement excellent poultry production practices",
    "Promote a unique quality culture where employees feel empowered",
    "Reward and recognize performers to increase efficiency",
];

export default function AboutPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/4.jpg`}
                title="About Bharath Agrovet"
                subtitle="Our Story"
                compact
            />

            {/* Company Story */}
            <section className="section">
                <div className="container">
                    <div className={styles.storyGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Established 2005</span>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>
                                    Three Decades of Excellence in Poultry
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-large text-muted" style={{ marginTop: "1.5rem" }}>
                                    &ldquo;BHARATH AGROVET INDUSTRIES&rdquo; is a leading poultry producing
                                    company in Mangaluru managed by technical &amp; marketing
                                    professionals with more than 3 decades of experience,
                                    &ldquo;COMMITTED TO QUALITY &amp; SERVICE&rdquo;.
                                </p>
                                <p className="text-muted" style={{ marginTop: "1rem" }}>
                                    Bharath Agrovet Industries today has contributed significantly
                                    to the overall growth of poultry industry in coastal districts
                                    of Karnataka and Kerala.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.storyImageStack}>
                                <div className={styles.storyImageMain}>
                                    <img src={`${BASE}/images/banner_images/2.jpg`} alt="Operations" />
                                </div>
                                <div className={styles.storyImageSecondary}>
                                    <img src={`${BASE}/gallery_images/2089296197A2.jpg`} alt="Facilities" />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Activities Strip */}
            <section className={styles.activitiesStrip}>
                <div className="container">
                    <AnimateOnScroll>
                        <div className={styles.sectionHeader}>
                            <span className="overline">Our Activities</span>
                            <h2 className="heading-3 text-white">Integrated Operations</h2>
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.activitiesRow}>
                        {activities.map((label, i) => (
                            <AnimateOnScroll key={label} delay={i + 1}>
                                <div className={styles.activityPill}>
                                    <span className={styles.activityDot} />
                                    <span>{label}</span>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Bleed */}
            <div className={styles.fullBleed}>
                <img src={`${BASE}/images/banner_images/9.jpg`} alt="Bharath Agrovet" />
            </div>

            {/* Quality Policy */}
            <section className="section">
                <div className="container container--narrow">
                    <AnimateOnScroll>
                        <div className={styles.policyBlock}>
                            <span className="overline" style={{ justifyContent: "center" }}>Quality Policy</span>
                            <h2 className="heading-3" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                                An Edge in Quality &amp; Services
                            </h2>
                            <div className="accent-bar accent-bar--center" />
                            <p className="text-large text-muted" style={{ marginTop: "1.5rem", textAlign: "center" }}>
                                In fulfilling our mission of having an edge in quality and services
                                in the poultry industry, we strive to exceed customers&apos;
                                expectations and excel in continual inclusive growth.
                            </p>
                            <div className={styles.policyGrid}>
                                {policyItems.map((item, i) => (
                                    <AnimateOnScroll key={i} delay={i + 1}>
                                        <div className={styles.policyCard}>
                                            <span className={styles.policyNum}>{String(i + 1).padStart(2, "0")}</span>
                                            <p>{item}</p>
                                        </div>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className={styles.vmSection}>
                <div className={styles.vmGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className={styles.vmGrid}>
                        <AnimateOnScroll>
                            <div className={styles.vmCard}>
                                <span className={styles.vmLabel}>01</span>
                                <h3 className="heading-3 text-white" style={{ marginBottom: "1.25rem" }}>
                                    Vision Statement
                                </h3>
                                <p className={styles.vmText}>
                                    We aspire to be the foremost poultry producer celebrated for our
                                    commitment to delivering wholesome and affordable protein options
                                    to society, while also generating employment opportunities and
                                    contributing significantly to the nation&apos;s progress.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.vmCard}>
                                <span className={styles.vmLabel}>02</span>
                                <h3 className="heading-3 text-white" style={{ marginBottom: "1.25rem" }}>
                                    Mission
                                </h3>
                                <ul className={styles.missionList}>
                                    <li>Minimal usage of natural resources and conserving the same</li>
                                    <li>Continuously improve our operations and enhance customer experience</li>
                                    <li>Ensure equitable growth and welfare of all employees and stakeholders</li>
                                    <li>Continuously invest in innovation and advancement for the best output</li>
                                    <li>Explore all opportunities for sustainable growth</li>
                                </ul>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Discover More</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            See Our Operations in Action
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            From breeding and hatching to feed production and retail — explore how we deliver quality at every step.
                        </p>
                        <a href="/activities" className="btn btn--gold">
                            Explore Activities →
                        </a>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
