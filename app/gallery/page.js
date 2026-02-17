"use client";

import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./gallery.module.css";
import { useState, useEffect, useCallback } from "react";

const BASE = "https://www.bharathagrovet.com";

const photos = [
    { src: `${BASE}/gallery_images/1880378147A1-900_600.jpg`, caption: "Retail Operations" },
    { src: `${BASE}/gallery_images/2089296197A2.jpg`, caption: "Facilities" },
    { src: `${BASE}/gallery_images/303128077A3.jpg`, caption: "Farm Operations" },
    { src: `${BASE}/gallery_images/951331741A4.jpg`, caption: "Processing" },
    { src: `${BASE}/gallery_images/897791671A5.jpg`, caption: "Feed Mill" },
    { src: `${BASE}/gallery_images/334731531A6.jpg`, caption: "Warehouse" },
    { src: `${BASE}/gallery_images/1511082473B1.jpg`, caption: "Hatchery" },
    { src: `${BASE}/gallery_images/1349695739B2.jpg`, caption: "Breeding Farm" },
    { src: `${BASE}/gallery_images/1968667099B3.jpg`, caption: "Quality Check" },
    { src: `${BASE}/gallery_images/32846927C1.jpg`, caption: "Team" },
    { src: `${BASE}/gallery_images/1575488262C2.jpg`, caption: "Distribution" },
    { src: `${BASE}/gallery_images/1916205811C3.jpg`, caption: "Production" },
    { src: `${BASE}/gallery_images/1405271782C4.jpg`, caption: "Equipment" },
    { src: `${BASE}/gallery_images/706622507C5.jpg`, caption: "Operations" },
    { src: `${BASE}/gallery_images/1424135281C6-thumb.jpg`, caption: "Infrastructure" },
    { src: `${BASE}/gallery_images/540040909C8.jpg`, caption: "Chick Dispatch" },
    { src: `${BASE}/gallery_images/1387097399E1.jpg`, caption: "Feed Storage" },
    { src: `${BASE}/gallery_images/1491351305E2.jpg`, caption: "Mixing" },
    { src: `${BASE}/gallery_images/1883121380E3.jpg`, caption: "Lab Testing" },
    { src: `${BASE}/gallery_images/1255068705E4.jpg`, caption: "Bio Security" },
    { src: `${BASE}/gallery_images/327759684E5.jpg`, caption: "Staff Training" },
    { src: `${BASE}/gallery_images/57225263E6.jpg`, caption: "Certification" },
    { src: `${BASE}/gallery_images/1362791697F1.jpg`, caption: "Vehicle Fleet" },
    { src: `${BASE}/gallery_images/1709344776F2.jpg`, caption: "Cold Storage" },
    { src: `${BASE}/gallery_images/2099359264F3-thumb.jpg`, caption: "Packaging" },
    { src: `${BASE}/gallery_images/482548011G1.jpg`, caption: "Brand" },
    { src: `${BASE}/gallery_images/2113798669G2.jpg`, caption: "Corporate" },
];

export default function GalleryPage() {
    const [lightbox, setLightbox] = useState(null);

    const goNext = useCallback(() => {
        setLightbox((prev) => (prev + 1) % photos.length);
    }, []);

    const goPrev = useCallback(() => {
        setLightbox((prev) => (prev - 1 + photos.length) % photos.length);
    }, []);

    /* Keyboard support: Escape, ←, → */
    useEffect(() => {
        if (lightbox === null) return;
        const handleKey = (e) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightbox, goNext, goPrev]);

    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/16.jpg`}
                title="Gallery"
                subtitle="Our World in Pictures"
                compact
            />

            <section className="section section--cream">
                <div className="container">
                    <AnimateOnScroll>
                        <div className={styles.intro}>
                            <span className="overline" style={{ justifyContent: "center" }}>Visual Journey</span>
                            <h2 className="heading-3">A Glimpse Into Our Operations</h2>
                            <div className="accent-bar accent-bar--center" style={{ marginTop: "1rem" }} />
                            <p className="text-muted" style={{ marginTop: "1rem", maxWidth: "600px", margin: "1rem auto 0" }}>
                                From our breeding farms and hatcheries to our feed mills, processing
                                units, and retail outlets — see the world of Bharath Agrovet Industries.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className={styles.masonryGrid}>
                        {photos.map((photo, i) => (
                            <AnimateOnScroll key={i} delay={(i % 6) + 1}>
                                <div
                                    className={styles.galleryItem}
                                    onClick={() => setLightbox(i)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
                                >
                                    <img src={photo.src} alt={photo.caption} loading="lazy" />
                                    <div className={styles.galleryOverlay}>
                                        <span className={styles.galleryCaption}>{photo.caption}</span>
                                        <span className={styles.galleryZoom}>⟶</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className={styles.lightbox} onClick={() => setLightbox(null)}>
                    <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>
                        ×
                    </button>
                    <img
                        src={photos[lightbox].src}
                        alt={photos[lightbox].caption}
                        className={styles.lightboxImage}
                    />
                    <p className={styles.lightboxCaption}>{photos[lightbox].caption}</p>
                    <div className={styles.lightboxNav} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.lightboxArrow} onClick={goPrev}>
                            ←
                        </button>
                        <span className={styles.lightboxCount}>
                            {lightbox + 1} / {photos.length}
                        </span>
                        <button className={styles.lightboxArrow} onClick={goNext}>
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
