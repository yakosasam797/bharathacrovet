"use client";

import AnimateOnScroll from "./components/AnimateOnScroll";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect, useCallback } from "react";

const BASE = "https://www.bharathagrovet.com";

/* ── Hero slides ── */
const heroSlides = [
  {
    img: `${BASE}/images/banner_images/1.jpg`,
    title: "Committed to Quality\n& Service in Poultry",
    sub: "Since 2005 — Mangaluru, India",
  },
  {
    img: `${BASE}/images/banner_images/7.jpg`,
    title: "Integrated Poultry\nValue Chain",
    sub: "Breeding • Hatching • Feed • Processing • Retail",
  },
  {
    img: `${BASE}/images/banner_images/9.jpg`,
    title: "Sustainable Farming\nfor Coastal Karnataka",
    sub: "400+ Contract Farmers • Rural Employment",
  },
  {
    img: `${BASE}/images/banner_images/17.jpg`,
    title: "Premium Poultry\nProducts",
    sub: "From Farm to Fork — With Love",
  },
  {
    img: `${BASE}/images/banner_images/20.jpg`,
    title: "Three Decades of\nExcellence",
    sub: "Technical & Marketing Expertise",
  },
];

/* ── Activities with good stock photos ── */
const activities = [
  {
    title: "Breeders",
    desc: "5 million+ hatching eggs per annum from our breeding farm at Hassan District with strict bio-security practices.",
    img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&q=80",
    num: "01",
  },
  {
    title: "Hatcheries",
    desc: "14 million+ chicks per annum from 2 own hatcheries at Mangalore and Kundapura, functioning round the clock.",
    img: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=600&h=400&fit=crop&q=80",
    num: "02",
  },
  {
    title: "Feed Mills",
    desc: "State-of-the-art crumbs & pellet mill at Thumbe with 6,000+ tons monthly production capacity.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80",
    num: "03",
  },
  {
    title: "Farming",
    desc: "400+ contract farmers producing healthy broilers, creating rural employment and economic sustainability.",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop&q=80",
    num: "04",
  },
  {
    title: "Processing",
    desc: "Conveyorised dressing unit at Ganjimutt dressing 1,000 birds per hour, with ETP & bio gas plants.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop&q=80",
    num: "05",
  },
  {
    title: "Retailing",
    desc: "Five retail outlets across Mangalore delivering Halal chilled chicken to restaurants and the public.",
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d82571?w=600&h=400&fit=crop&q=80",
    num: "06",
  },
];

/* ── Stats (no icons) ── */
const stats = [
  { number: "5M+", label: "Hatching Eggs Per Year" },
  { number: "14M+", label: "Chicks Per Year" },
  { number: "400+", label: "Partner Farmers" },
  { number: "6,000+", label: "Tons Feed Per Month" },
];

/* ── Products (no icons) ── */
const products = [
  { name: "Broiler Hatching Eggs", detail: "Premium fertile eggs from our own breeding farm" },
  { name: "Day Old Chicks", detail: "14M+ DOC annually from 2 hatcheries" },
  { name: "Hi-Density Poultry Feeds", detail: "Computerized formulation, best raw materials" },
  { name: "Broiler Feed Pre-Mixes", detail: "Optimized growth rates and feed conversion" },
  { name: "Breeder Feed Pre-Mixes", detail: "Balanced nutrients for breeder flocks" },
  { name: "Live Chicken", detail: "Healthy broilers from 400+ contract farmers" },
  { name: "Dressed Fresh Chilled Chicken", detail: "Halal-certified, conveyorised processing" },
  { name: "Parent Culls", detail: "Quality parent culls from integrated operations" },
];

const gallery = [
  `${BASE}/gallery_images/1880378147A1-900_600.jpg`,
  `${BASE}/gallery_images/2089296197A2.jpg`,
  `${BASE}/gallery_images/303128077A3.jpg`,
  `${BASE}/gallery_images/951331741A4.jpg`,
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* ===== HERO SLIDESHOW ===== */}
      <section className={styles.hero}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.heroSlide} ${i === current ? styles.heroSlideActive : ""}`}
          >
            <img src={slide.img} alt={slide.title} className={styles.heroImage} />
          </div>
        ))}
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrain} />

        <div className={styles.heroContent}>
          <span className={styles.heroOverline}>
            <span className={styles.heroOverlineLine} />
            {heroSlides[current].sub}
          </span>
          <h1 className={styles.heroTitle} key={current}>
            {heroSlides[current].title.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <div className={styles.heroBtns}>
            <Link href="/about" className="btn btn--glass">
              Discover Our Story
            </Link>
            <Link href="/contact" className="btn btn--gold">
              Partner With Us →
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className={styles.heroDots}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.heroDot} ${i === current ? styles.heroDotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollDot} />
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {[...Array(3)].map((_, k) => (
            <div className={styles.marqueeInner} key={k}>
              <span>Breeding</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Hatching</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Feed Mills</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Farming</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Processing</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Retailing</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Consultancy</span>
              <span className={styles.marqueeDot}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ABOUT INTRO ===== */}
      <section className={`section ${styles.aboutIntro}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimateOnScroll>
              <div className={styles.aboutLeft}>
                <span className="overline">Who We Are</span>
                <h2 className="heading-2">
                  A leading poultry producing company in coastal Karnataka
                </h2>
                <div className="accent-bar" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <div className={styles.aboutRight}>
                <p className="text-large" style={{ color: "var(--color-gray)", marginBottom: "1.5rem" }}>
                  Established in 2005 by marketing and veterinary professionals
                  with a vision to promote and provide superior poultry products
                  and services. Bharath Agrovet Industries today has contributed
                  significantly to the overall growth of poultry industry in
                  coastal districts of Karnataka and Kerala.
                </p>
                <p style={{ color: "var(--color-gray)", marginBottom: "2.5rem" }}>
                  With more than 3 decades of technical and marketing experience,
                  we operate an integrated poultry value chain — from breeding
                  and hatching to feed production, processing, and retail.
                </p>
                <Link href="/about" className="btn btn--primary">
                  Learn More About Us →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FULL BLEED IMAGE BREAK ===== */}
      <div className={styles.fullBleedBreak}>
        <img src={`${BASE}/images/banner_images/7.jpg`} alt="Bharath Agrovet operations" />
        <div className={styles.fullBleedOverlay}>
          <AnimateOnScroll>
            <blockquote className={styles.pullQuote}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              We aspire to be the foremost poultry producer celebrated for our
              commitment to delivering wholesome and affordable protein options
              to society.
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ===== ACTIVITIES — EDITORIAL JOURNEY ===== */}
      <section className={styles.activitiesSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.sectionHeader}>
              <span className="overline" style={{ justifyContent: "center" }}>What We Do</span>
              <h2 className="heading-2">Our Operations</h2>
              <p className="text-muted" style={{ marginTop: "1rem", maxWidth: "550px", marginLeft: "auto", marginRight: "auto" }}>
                A vertically integrated poultry value chain — from farm to fork.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Featured Hero Block */}
        <AnimateOnScroll>
          <div className={styles.actHero}>
            <img src={activities[0].img} alt={activities[0].title} className={styles.actHeroImg} />
            <div className={styles.actHeroOverlay} />
            <div className={styles.actHeroContent}>
              <span className={styles.actHeroNum}>{activities[0].num}</span>
              <h3 className={styles.actHeroTitle}>{activities[0].title}</h3>
              <p className={styles.actHeroDesc}>{activities[0].desc}</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Horizontal Scroll Cards */}
        <div className={styles.actScroll}>
          <div className={styles.actScrollTrack}>
            {activities.slice(1).map((act, i) => (
              <div className={styles.actScrollCard} key={act.num}>
                <img src={act.img} alt={act.title} className={styles.actScrollImg} />
                <div className={styles.actScrollOverlay} />
                <div className={styles.actScrollContent}>
                  <span className={styles.actScrollNum}>{act.num}</span>
                  <h3 className={styles.actScrollTitle}>{act.title}</h3>
                  <p className={styles.actScrollDesc}>{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/activities" className="btn btn--outline">
                Explore All Activities →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== STATS — REFINED COUNTERS ===== */}
      <section className={styles.statsBand}>
        <div className={styles.statsGrain} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i + 1}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{s.number}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE STRIP ===== */}
      <div className={styles.imageStrip}>
        {[2, 4, 9, 15].map((n) => (
          <div className={styles.stripItem} key={n}>
            <img src={`${BASE}/images/banner_images/${n}.jpg`} alt={`Operations ${n}`} />
          </div>
        ))}
      </div>

      {/* ===== PRODUCTS SECTION (NO ICONS — CLEAN LIST) ===== */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.productsLayout}>
            <AnimateOnScroll>
              <div className={styles.productsText}>
                <span className="overline">Our Products</span>
                <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>
                  Premium Poultry<br />Products
                </h2>
                <div className="accent-bar" />
                <p className="text-muted" style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
                  From hatching eggs and day-old chicks to Hi-Density feeds and
                  fresh chilled Halal chicken — we deliver excellence across the
                  entire poultry value chain.
                </p>
                <Link href="/products" className="btn btn--primary">
                  View All Products →
                </Link>
              </div>
            </AnimateOnScroll>

            <div className={styles.productsGrid}>
              {products.map((p, i) => (
                <AnimateOnScroll key={p.name} delay={(i % 4) + 1}>
                  <div className={styles.productChip}>
                    <div className={styles.productIndex}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={styles.productInfo}>
                      <span className={styles.productName}>{p.name}</span>
                      <span className={styles.productDetail}>{p.detail}</span>
                    </div>
                    <span className={styles.productArrow}>→</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className={styles.galleryPreview}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.galleryHeader}>
              <div>
                <span className="overline">Gallery</span>
                <h2 className="heading-2">Our World in Pictures</h2>
              </div>
              <Link href="/gallery" className="btn btn--outline">
                View Full Gallery →
              </Link>
            </div>
          </AnimateOnScroll>
          <div className={styles.galleryGrid}>
            {gallery.map((src, i) => (
              <AnimateOnScroll key={i} delay={i + 1}>
                <div className={styles.galleryItem}>
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <img src={`${BASE}/images/banner_images/17.jpg`} alt="Partner" className={styles.ctaBg} />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AnimateOnScroll>
            <div className={styles.ctaInner}>
              <span className="overline" style={{ justifyContent: "center" }}>Get Started</span>
              <h2 className="heading-1 text-white">Partner With Us</h2>
              <p className={styles.ctaText}>
                Whether you&apos;re a farmer seeking contract farming or a business
                needing premium poultry products, we&apos;d love to connect.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--gold">Get in Touch →</Link>
                <Link href="/about" className="btn btn--glass">Learn More</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
