import React from "react";
import * as Icons from "lucide-react";
import styles from "./WhoWeWorkWith.module.scss";

type Category = {
  title?: string;
  description?: string;
  iconName?: string;
};

const SECTION_FALLBACK_DESCRIPTION =
  "We partner with organisations where complexity, ambition, and capital decisions matter. Our work is board-level, founder-level, and long-term — built for execution, not slides.";

const CARD_FALLBACKS: { title: string; body: string; iconName: string }[] = [
  {
    title: "Established Businesses",
    body: "Operating companies with proven revenue and leadership teams that need sharper strategy, stronger governance, and systems that hold up as they scale.",
    iconName: "Building2",
  },
  {
    title: "Corporates & Enterprises",
    body: "Large organisations navigating portfolio complexity, stakeholder alignment, transformation fatigue, and the gap between strategy slides and operating reality.",
    iconName: "Briefcase",
  },
  {
    title: "Universities & Institutions / Governments & Authorities",
    body: "Public-sector and academic institutions shaping policy, innovation ecosystems, and long-horizon programmes — where credibility, structure, and stakeholder clarity are non‑negotiable.",
    iconName: "Landmark",
  },
  {
    title: "Family Offices",
    body: "Families and offices balancing wealth preservation, operating assets, succession, and capital deployment — requiring mandate clarity, governance, and disciplined execution.",
    iconName: "ShieldCheck",
  },
  {
    title: "Scale-Stage Startups",
    body: "Ventures past early traction that need operating rhythm, investor-ready rigour, portfolio visibility, and execution models that scale with the business.",
    iconName: "Rocket",
  },
];

const AREA_CLASSES = [
  styles.areaHero,
  styles.areaCorp,
  styles.areaUniv,
  styles.areaFamily,
  styles.areaScale,
] as const;

export const WhoWeWorkWith = ({ cmsData }: { cmsData?: { headline?: string; description?: string; categories?: Category[] } }) => {
  const displayHeadline = cmsData?.headline || "Who We Work With";
  const displayIntro = cmsData?.description?.trim() || SECTION_FALLBACK_DESCRIPTION;
  const displayCategories = cmsData?.categories || [];

  const getCardData = (index: number) => {
    const cat = displayCategories[index];
    const fb = CARD_FALLBACKS[index];
    if (!cat?.title) return fb;
    const raw = cat.description?.trim();
    const body =
      raw && raw !== cat.title ? raw : fb.body;
    return {
      title: cat.title,
      body,
      iconName: cat.iconName || fb.iconName,
    };
  };

  return (
    <section className={styles.whoWeWorkWithPremium}>
      <div className={styles.whoWeWorkWithInner}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{displayHeadline}</h2>
          <p className={styles.sectionIntro}>{displayIntro}</p>
          <div className={styles.partnerCardsBento}>
            {AREA_CLASSES.map((areaClass, index) => {
              const { title, body, iconName } = getCardData(index);
              const IconComponent = iconName ? (Icons as any)[iconName] : null;

              return (
                <article
                  key={`${title}-${index}`}
                  className={`${styles.bentoCard} ${areaClass}`}
                >
                  <div className={styles.bentoContent}>
                    {IconComponent ? (
                      <span className={styles.cardIconWrap} aria-hidden>
                        <IconComponent className={styles.cardIcon} />
                      </span>
                    ) : null}
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardBody}>{body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
