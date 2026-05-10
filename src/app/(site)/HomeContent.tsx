"use client";

import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { DataSection } from "@/components/ui/DataSection";
import * as Icons from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import {
  InsightsCarousel,
  InsightItem,
} from "@/components/ui/InsightsCarousel";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith/WhoWeWorkWith";
import { TrustedBy } from "@/components/ui/TrustedBy";
import styles from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { features } from "@/config/features";

interface HomeContentProps {
  heroData: any;
  insights: any[];
  dataSectionData: any;
  whoWeWorkWithData?: any;
  solutionsData?: any;
  homePageSettings?: any;
  siteSettings?: any;
}

export default function HomeContent({
  heroData,
  insights,
  dataSectionData,
  whoWeWorkWithData,
  solutionsData,
  homePageSettings,
  siteSettings,
}: HomeContentProps) {
  const defaultHero = {
    eyebrow: "GROWVALLEY CONSULTING",
    headline: "Strategy. Structure. Execution.",
    subheadline:
      "We help businesses to design, structure, and scale their organisations — with clarity, discipline, and an execution focus.",
    ctaText: "Talk to Our Advisor",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
  };

  const defaultDataSection = {
    headline: "Outcomes that compound.",
    description:
      "GrowValley Consulting integrates strategy, capital, and execution into one accountable advisory system — measured by what it builds, not what it presents.",
    stats: [
      { prefix: "$", number: 3, suffix: "B+", label: "Revenues Generated through Growth Advisory" },
      { prefix: "$", number: 1, suffix: "B+", label: "Capital Structured through Capital Advisory" },
      { number: 500, suffix: "+", label: "Mandates Delivered" },
      { number: 1, suffix: "", label: "Integrated Advisory System" },
    ],
  };

  const displayHero = {
    ...defaultHero,
    ...(heroData || {})
  };

  const displayDataSection = {
    ...defaultDataSection,
    ...(dataSectionData || {}),
    stats: dataSectionData?.stats || defaultDataSection.stats
  };

  const getHeroImage = () => {
    if (heroData?.image) {
      try {
        return urlFor(heroData.image).url();
      } catch (e) {
        return "/images/home_image.png";
      }
    }
    return "/images/home_image.png";
  };

  const dynamicInsights: InsightItem[] = insights.map((item: any) => ({
    id: item._id,
    title: item.title,
    date: item.publishedAt
      ? new Date(item.publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      : "",
    tag: item.tag || "Insight",
    image: item.mainImage ? urlFor(item.mainImage).url() : "",
    slug: item.slug,
  }));

  const fallbackWhyCards = [
    { iconName: "Layers", label: "Strategy Anchored in Execution", description: "Our recommendations are built for delivery — not detached frameworks." },
    { iconName: "Coins", label: "Capital Discipline at the Core", description: "Every engagement considers the financial architecture and capital posture of the business." },
    { iconName: "ShieldCheck", label: "Governance and Operating Rigour", description: "We design how decisions are made, capital is deployed, and execution is governed." },
    { iconName: "Network", label: "Integrated Across the GrowValley Ecosystem", description: "GVC works alongside GVV (capital and wealth) and GVW (execution and operations) to deliver outcomes that no single advisory firm can." }
  ];

  const whyCards = homePageSettings?.whyCards || fallbackWhyCards;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={getHeroImage()}
      />

      <TrustedBy line={siteSettings?.trustedByLine} />

      <section className="section-padding">
        <div className={`container ${styles.noPaddingMobile}`}>
          <div className={styles.whySplitLayout}>
            <div className={styles.whySplitLeft}>
              <div className={styles.introCardDark}>
                <h3>
                  {homePageSettings?.whySplitLeftText || "GrowValley Consulting is the strategy and advisory arm of the GrowValley ecosystem — built for organisations that need execution, not just advice."}
                </h3>
              </div>
            </div>

            <div className={styles.whySplitRight}>
              {whyCards.map((card: any, idx: number) => {
                const IconComponent = (Icons as any)[card.iconName] || Icons.CheckCircle;
                return (
                  <div key={idx} className={styles.whyCard}>
                    <div className={styles.whyCardInner}>
                      <div className={styles.whyCardFront}>
                        <div className={styles.whyCardIcon}>
                          <IconComponent size={48} strokeWidth={1} />
                        </div>
                        <div className={styles.whyCardLabel}>
                          {card.label}
                        </div>
                      </div>
                      <div className={styles.whyCardBack}>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.positioningSplit}>
            <div className={styles.positioningLeft}>
              <h2>{homePageSettings?.positioningHeadline || "Strategy. Capital. Execution. Under one accountable team."}</h2>
            </div>
            <div className={styles.positioningRight}>
              <p className={styles.subheadline}>
                {homePageSettings?.positioningSubheadline || "GrowValley Consulting is the strategy and advisory arm of the GrowValley ecosystem."}
              </p>
              <p className={styles.body} dangerouslySetInnerHTML={{ __html: homePageSettings?.positioningBody ? homePageSettings.positioningBody.replace(/\n/g, '<br />') : "We help organisations make and execute the decisions that determine their long-term value: how they grow, how they raise capital, how they innovate, and how they manage long-term wealth.<br /><br />Our work is anchored in operational reality — addressing the structural, financial, and execution challenges leadership teams encounter on real projects." }} />
            </div>
          </div>
        </div>
      </section>


      <section className={styles.miniCta}>
        <div className={styles.miniCtaInner}>
          <div className={styles.miniCtaText}>
            <h3>{homePageSettings?.miniCtaHeadline || "Strategy. Capital. Execution."}</h3>
          </div>
          <Link href={homePageSettings?.miniCtaButtonLink || "/contact"}>
            <Button variant="secondary" size="lg">
              {homePageSettings?.miniCtaButtonText || "Talk to Our Advisor"}
            </Button>
          </Link>
        </div>
      </section>
      
      <Solutions cmsData={solutionsData} />
      <WhoWeWorkWith cmsData={whoWeWorkWithData} />
      {features.insights && (
        <InsightsCarousel
          title="Latest from GrowValley"
          description="Perspectives on capital, investment and business performance."
          insights={dynamicInsights}
        />
      )}

      <DataSection
        headline={displayDataSection.headline}
        description={displayDataSection.description}
        stats={displayDataSection.stats}
      />

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.speakToAnExpertBannerHeading}>
            {homePageSettings?.bottomCtaHeadline || "When the decisions get harder, the work needs to get sharper."}
          </h2>
          <Link href={homePageSettings?.bottomCtaButtonLink || "/contact"}>
            <Button size="lg" variant="secondary">
              {homePageSettings?.bottomCtaButtonText || "Talk to Our Advisor"}
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
