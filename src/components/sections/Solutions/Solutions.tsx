"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Solutions.module.scss";

const solutions = [
  {
    id: "growth-advisory",
    title: "Growth Advisory",
    subtitle:
      "Strengthening to maximise revenue and performance. We help established businesses to increase revenues with strategy and systems to improve products, process, performance, and governance — creating a strong foundation for scale.",
    href: "/our-capabilities/growth-advisory",
  },
  {
    id: "capital-advisory",
    title: "Capital Advisory",
    subtitle:
      "Strengthening to raise and deploy capital. We prepare businesses to attract, structure, and deploy capital intelligently by building investment readiness, valuation defensibility, and transaction preparedness.",
    href: "/our-capabilities/capital-advisory",
  },
  {
    id: "innovation-advisory",
    title: "Innovation Advisory",
    subtitle:
      "Strengthening to become an industry leader. We design and build innovation engines through structured venture-building models and venture studios to create next-generation products and businesses.",
    href: "/our-capabilities/innovation-advisory",
  },
  {
    id: "pmo",
    title: "PMO",
    subtitle:
      "Driving execution discipline across complex transformation programs. We design and operate enterprise-grade Project Management Offices that give leadership teams full visibility into delivery performance, accountability, and risk across every program in the portfolio.",
    href: "/our-capabilities/pmo",
  },
  {
    id: "family-office-setup",
    title: "Family Office Setup",
    subtitle:
      "Structuring, governing, and managing family wealth for the long term. We help families build the governance frameworks, investment operating models, and structural foundations that allow wealth to be managed, preserved, and grown across generations.",
    href: "/our-capabilities/family-office-setup",
  },
];

export const Solutions = ({ cmsData }: { cmsData?: any }) => {
  const [activeSolution, setActiveSolution] = useState(0);

  const displayHeadline = cmsData?.headline || "We operate through five deeply integrated advisory capabilities.";
  const displayDescription = cmsData?.description || "GrowValley Consulting is the strategy and advisory arm of the GrowValley ecosystem, alongside GVV (capital and wealth) and GVW (execution and operations).";
  const displayItems = cmsData?.items || solutions;

  return (
    <section className={styles.solutionsWrapper}>
      <div className={styles.solutionsPanel}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionHeadline}>
              {displayHeadline}
            </h2>
            <p className={styles.sectionBody}>
              {displayDescription}
            </p>
          </header>

          <div className={styles.solutionsContainer}>
            <div className={styles.solutionsNav}>
              <div className={styles.solutionsList}>
                {displayItems.map((s: any, idx: number) => (
                  <button
                    key={s.id}
                    className={`${styles.solutionsTrigger} ${activeSolution === idx ? styles.active : ""
                      }`}
                    onClick={() => {
                      setActiveSolution(idx);
                      const element = document.getElementById(`mobile-${s.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.solutionsContent}>
              {/* Desktop: One Card at a time */}
              <div className={styles.desktopOnly}>
                <div className={styles.solutionsCard} key={activeSolution}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitleH2}>
                      {displayItems[activeSolution].title}
                    </h2>
                    <p className={styles.subtitle}>
                      {displayItems[activeSolution].subtitle}
                    </p>
                  </div>
                  <Link
                    href={displayItems[activeSolution].href}
                    className={styles.learnMore}
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Mobile: All cards in a list */}
              <div className={styles.mobileOnly}>
                {displayItems.map((s: any) => (
                  <div
                    id={`mobile-${s.id}`}
                    key={s.id}
                    className={styles.solutionsCard}
                  >
                    <div className={styles.cardHeader}>
                      <h2 className={styles.cardTitleH2}>{s.title}</h2>
                      <p className={styles.subtitle}>{s.subtitle}</p>
                    </div>
                    <Link href={s.href} className={styles.learnMore}>
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
