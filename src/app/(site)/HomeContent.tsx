"use client";

import React from "react";
import { Hero } from "@/components/ui/Hero";
import { ImpactBand } from "@/components/ui/ImpactBand";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { InsightsCarousel, InsightItem } from "@/components/ui/InsightsCarousel";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith/WhoWeWorkWith";
import styles from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { features } from "@/config/features";
import {
  ADVISOR_LABEL,
  DATA_SECTION_FALLBACK_IMPACT_STATS,
  DATA_SECTION_FALLBACK_META,
  HERO_FALLBACK_HOME,
  HOMEPAGE_CONSULTING_INITIAL,
  IMPACT_BAND_EYEBROW_FALLBACK,
  STACKED_LINES_FALLBACK_HOME,
  TRUST_BAR_FALLBACK,
} from "@/config/homepageContent.defaults";
import { X } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface HomeContentProps {
  heroData: Record<string, unknown> | null;
  insights: unknown[];
  dataSectionData: Record<string, unknown> | null;
  whoWeWorkWithData?: Record<string, unknown> | null;
  solutionsData?: Record<string, unknown> | null;
  homePageSettings?: Record<string, unknown> | null;
  siteSettings?: Record<string, unknown> | null;
}

const SEED = HOMEPAGE_CONSULTING_INITIAL;

function pick<T>(...vals: (T | undefined | null)[]): T | undefined {
  for (const v of vals) {
    if (v !== undefined && v !== null && v !== "") return v as T;
  }
  return undefined;
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
  const h = homePageSettings || {};

  const problemsEyebrow = pick<string>(h.problemsEyebrow as string, SEED.problemsEyebrow)!;
  const problemsHeadline = pick<string>(h.problemsHeadline as string, SEED.problemsHeadline)!;
  const problemsLeadParagraph = pick<string>(
    h.problemsLeadParagraph as string,
    SEED.problemsLeadParagraph,
  )!;
  const problemsMutedLead = pick<string>(h.problemsMutedLead as string, SEED.problemsMutedLead)!;
  const problemCards =
    Array.isArray(h.problemCards) && (h.problemCards as string[]).length
      ? (h.problemCards as string[])
      : SEED.problemCards;
  const problemsClosing = pick<string>(h.problemsClosing as string, SEED.problemsClosing)!;

  const bridgeStatement = pick<string>(h.bridgeStatement as string, SEED.bridgeStatement)!;
  const bridgeHref = pick<string>(h.bridgeCtaLink as string, "/contact")!;
  const bridgeAdvisor = pick<string>(h.bridgeCtaText as string, ADVISOR_LABEL)!;

  const integratedEyebrow = pick<string>(h.integratedEyebrow as string, SEED.integratedEyebrow)!;
  const integratedBody = pick<string>(h.integratedBody as string, SEED.integratedBody)!;

  const missionStatement = pick<string>(h.missionStatement as string, SEED.missionStatement)!;
  const missionHref = pick<string>(h.missionCtaLink as string, "/contact")!;
  const missionAdvisor = pick<string>(h.missionCtaText as string, ADVISOR_LABEL)!;

  const whyGrowthHeadline = pick<string>(h.whyGrowthHeadline as string, SEED.whyGrowthHeadline)!;
  const whyGrowthBody = pick<string>(h.whyGrowthBody as string, SEED.whyGrowthBody)!;
  const whyGrowthEyebrow = pick<string>(h.whyGrowthEyebrow as string, SEED.whyGrowthEyebrow)!;
  const whyGrowthItalic = pick<string>(h.whyGrowthItalic as string, SEED.whyGrowthItalic)!;
  const coreEyebrow = pick<string>(
    h.coreExcellenceEyebrow as string,
    SEED.coreExcellenceEyebrow,
  )!;
  const coreBullets =
    Array.isArray(h.coreExcellenceBullets) && (h.coreExcellenceBullets as string[]).length
      ? (h.coreExcellenceBullets as string[])
      : SEED.coreExcellenceBullets;
  const whyGrowthClosingLine = pick<string>(
    h.whyGrowthClosingLine as string,
    SEED.whyGrowthClosingLine,
  )!;
  const whyGrowthHref = pick<string>(h.whyGrowthCtaLink as string, "/contact")!;
  const whyGrowthAdvisor = pick<string>(h.whyGrowthCtaText as string, ADVISOR_LABEL)!;

  const expertiseHeadline = pick<string>(
    h.topExpertiseHeadline as string,
    SEED.topExpertiseHeadline,
  )!;
  const expertiseSub = pick<string>(
    h.topExpertiseSubhead as string,
    SEED.topExpertiseSubhead,
  )!;
  const expertiseLead = pick<string>(h.topExpertiseLead as string, SEED.topExpertiseLead)!;
  const expertiseBullets =
    Array.isArray(h.topExpertiseBullets) && (h.topExpertiseBullets as string[]).length
      ? (h.topExpertiseBullets as string[])
      : SEED.topExpertiseBullets;

  const finaleStatement = pick<string>(h.finaleStatement as string, SEED.finaleStatement)!;
  const finaleHref = pick<string>(h.finaleCtaLink as string, "/contact")!;
  const finaleAdvisor = pick<string>(h.finaleCtaText as string, ADVISOR_LABEL)!;

  const insightsCarouselTitle = pick<string>(
    h.insightsCarouselTitle as string,
    SEED.insightsCarouselTitle,
  )!;
  const insightsCarouselDescription = pick<string>(
    h.insightsCarouselDescription as string,
    SEED.insightsCarouselDescription,
  )!;

  const solutionsAdvisorHref = pick<string>(h.solutionsAdvisorCtaHref as string, SEED.solutionsAdvisorCtaHref)!;
  const solutionsAdvisorLabel = pick<string>(h.solutionsAdvisorCtaText as string, SEED.solutionsAdvisorCtaText)!;

  const defaultHero = { ...HERO_FALLBACK_HOME };

  const displayHero = { ...defaultHero, ...(heroData || {}) };

  const cmsStacked = Array.isArray(heroData?.stackedLines)
    ? (heroData!.stackedLines as { text?: string; muted?: boolean }[]).filter((l) => l?.text)
    : [];

  const hasUploadedImage = Boolean(
    heroData?.image &&
      typeof heroData.image === "object" &&
      heroData.image !== null &&
      "asset" in heroData.image &&
      (heroData.image as { asset?: unknown }).asset,
  );

  const useImmersive =
    heroData?.immersionMode === false
      ? false
      : heroData?.immersionMode === true ||
        cmsStacked.length > 0 ||
        ((heroData === null || !hasUploadedImage) && heroData?.immersionMode !== false);

  const stackedLines = useImmersive
    ? cmsStacked.length > 0
      ? cmsStacked.map((l) => ({ text: l.text as string, muted: Boolean(l.muted) }))
      : STACKED_LINES_FALLBACK_HOME.map((l) => ({ ...l }))
    : undefined;

  const trustBarText = pick<string>(
    heroData?.trustBarText as string,
    siteSettings?.trustedByLine as string,
    TRUST_BAR_FALLBACK,
  )!;

  const getHeroImage = () => {
    if (heroData?.image) {
      try {
        return urlFor(heroData.image as never).url();
      } catch {
        return "/images/home_image.png";
      }
    }
    return "/images/home_image.png";
  };

  type ImpactStatRow = (typeof DATA_SECTION_FALLBACK_IMPACT_STATS)[number];
  const statsFromCms = (dataSectionData?.stats as ImpactStatRow[]) || [];
  const displayStats =
    statsFromCms.length > 0
      ? statsFromCms.map((s) => ({ ...s, number: Number(s.number) }))
      : DATA_SECTION_FALLBACK_IMPACT_STATS.map((s) => ({ ...s }));

  const dynamicInsights: InsightItem[] = (insights as Record<string, unknown>[]).map((item) => ({
    id: item._id as string,
    title: item.title as string,
    date: item.publishedAt
      ? new Date(item.publishedAt as string).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "",
    tag: (item.tag as string) || "Insight",
    image: item.mainImage ? urlFor(item.mainImage as never).url() : "",
    slug:
      typeof item.slug === "string"
        ? item.slug
        : (item.slug as { current?: string } | undefined)?.current,
  }));

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={Boolean((displayHero as { hasCTA?: boolean }).hasCTA !== false)}
        stackedLines={stackedLines}
        trustBarText={trustBarText}
        image={getHeroImage()}
      />

      <ImpactBand
        eyebrow={pick<string>(dataSectionData?.eyebrow as string, IMPACT_BAND_EYEBROW_FALLBACK)}
        headline={
          pick<string>(
            dataSectionData?.headline as string | undefined,
            DATA_SECTION_FALLBACK_META.headline,
          ) ?? undefined
        }
        description={
          pick<string>(
            dataSectionData?.description as string | undefined,
            DATA_SECTION_FALLBACK_META.description,
          ) ?? undefined
        }
        stats={displayStats}
      />

      <section className={styles.homeProblemsBand} aria-labelledby="problems-heading">
        <div className="container">
          <p className={styles.sectionEyebrowCenter}>{problemsEyebrow}</p>
          <h2 id="problems-heading" className={styles.sectionTitleCenter}>
            {problemsHeadline}
          </h2>
          <span className={styles.decorRuleCenter} aria-hidden />
          <p className={styles.sectionLead}>{problemsLeadParagraph}</p>
          <p className={styles.sectionMutedCenter}>{problemsMutedLead}</p>
          <div className={styles.problemCardsRow}>
            {problemCards.map((text, idx) => (
              <article key={`${idx}-${text}`} className={styles.problemCard}>
                <X className={styles.problemX} size={20} aria-hidden strokeWidth={2} />
                <p className={styles.problemCardBody}>{text}</p>
              </article>
            ))}
          </div>
          <p className={styles.sectionMutedCenter}>{problemsClosing}</p>
        </div>
      </section>

      <section className={styles.homeBridgeBand} aria-label="Statement">
        <div className="container">
          <div className={styles.bridgePanel}>
            <p>{bridgeStatement}</p>
          </div>
          <div className={styles.ctaCenter}>
            <Link href={bridgeHref}>
              <Button type="button" variant="advisor" size="lg">
                <span>{bridgeAdvisor}</span>
                <ArrowRight size={18} aria-hidden strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Solutions
        cmsData={solutionsData as never}
        advisorHref={solutionsAdvisorHref}
        advisorLabel={solutionsAdvisorLabel}
      />

      <section className={styles.homeIntegratedBand}>
        <div className={`container ${styles.integratedWrap}`}>
          <div className={styles.integratedHead}>
            <span className={styles.integratedHair} aria-hidden />
            <span className={styles.integratedLabel}>{integratedEyebrow}</span>
            <span className={styles.integratedHair} aria-hidden />
          </div>
          <p className={styles.integratedBody}>{integratedBody}</p>
        </div>
      </section>

      <WhoWeWorkWith cmsData={whoWeWorkWithData as never} />

      <section className={styles.homeMissionBand}>
        <div className="container">
          <div className={styles.missionBox}>
            <p>{missionStatement}</p>
          </div>
          <div className={styles.ctaCenter}>
            <Link href={missionHref}>
              <Button type="button" variant="advisor" size="lg">
                <span>{missionAdvisor}</span>
                <ArrowRight size={18} aria-hidden strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.homeWhyBand}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeftColumn}>
              <h2 className={styles.whyTitle}>{whyGrowthHeadline}</h2>
              <span className={styles.whyRule} aria-hidden />
              <p className={styles.whyBody}>{whyGrowthBody}</p>
              <p className={styles.whyTinyLabel}>{whyGrowthEyebrow}</p>
              <p className={styles.whyItalic}>{whyGrowthItalic}</p>
            </div>
            <div className={styles.coreCard}>
              <p className={styles.corePanelLabel}>— {coreEyebrow}</p>
              <ul className={styles.coreBullets}>
                {coreBullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <div className={styles.coreRule} aria-hidden />
              <p className={styles.coreClosing}>{whyGrowthClosingLine}</p>
              <Link href={whyGrowthHref} className={styles.marginTopAdvisor}>
                <Button type="button" variant="advisor" size="lg">
                  <span>{whyGrowthAdvisor}</span>
                  <ArrowRight size={18} aria-hidden strokeWidth={2} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.homeExpertiseBand} aria-labelledby="expertise-heading">
        <div className="container">
          <h2 id="expertise-heading" className={styles.sectionTitleCenter}>
            {expertiseHeadline}
          </h2>
          <p className={styles.sectionSubCenter}>{expertiseSub}</p>
          <span className={styles.decorRuleCenter} aria-hidden />
          <p className={styles.sectionLeadNarrow}>{expertiseLead}</p>
          <div className={styles.expertiseGrid}>
            {expertiseBullets.map((item) => (
              <article key={item} className={styles.expertisePill}>
                <span className={styles.dot} aria-hidden />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {features.insights && (
        <InsightsCarousel
          title={insightsCarouselTitle}
          description={insightsCarouselDescription}
          insights={dynamicInsights}
        />
      )}

      <section className={styles.homeFinaleBand}>
        <div className="container">
          <p className={styles.finaleLine}>{finaleStatement}</p>
          <div className={styles.ctaCenter}>
            <Link href={finaleHref}>
              <Button type="button" variant="advisor" size="lg">
                <span>{finaleAdvisor}</span>
                <ArrowRight size={18} aria-hidden strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
