import React from 'react';
import styles from './Hero.module.scss';
import { Button } from './Button';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

interface HeroProps {
    eyebrow?: React.ReactNode;
    headline: React.ReactNode;
    subheadline?: React.ReactNode;
    ctaText?: string;
    ctaHref?: string;
    hasCTA?: boolean;
    /** Optional second CTA */
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    image?: any;
    isShort?: boolean;
}

export function Hero({
    eyebrow,
    headline,
    subheadline,
    ctaText,
    ctaHref,
    hasCTA = true,
    secondaryCtaText,
    secondaryCtaHref,
    image,
    isShort = false,
}: HeroProps) {
    const heroImageSrc =
        typeof image === 'string'
            ? image
            : image?.asset
                ? urlFor(image).url()
                : '/images/home_hero.png';

    return (
        <section className={`${styles.heroSection} ${isShort ? styles.isShort : ''}`}>
            {/* Full-bleed background image */}
            <img
                src={heroImageSrc}
                alt=""
                aria-hidden="true"
                className={styles.heroBg}
            />

            {/* Dark gradient overlay */}
            <div className={styles.heroOverlay} aria-hidden="true" />

            {/* Content */}
            <div className={styles.heroInner}>
                <div className={styles.heroContent}>
                    {eyebrow && (
                        <span className={styles.eyebrow}>{eyebrow}</span>
                    )}

                    <h1 className={styles.headline}>{headline}</h1>

                    {subheadline && (
                        <p className={styles.subheadline}>{subheadline}</p>
                    )}

                    {hasCTA && ctaText && ctaHref && (
                        <div className={styles.ctaGroup}>
                            <Link href={ctaHref}>
                                <Button variant="secondary" size="lg">
                                    {ctaText}
                                </Button>
                            </Link>
                            {secondaryCtaText && secondaryCtaHref && (
                                <Link href={secondaryCtaHref}>
                                    <Button variant="outline" size="lg">
                                        {secondaryCtaText}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
