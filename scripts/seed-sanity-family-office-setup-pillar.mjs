/**
 * Family Office Setup pillar landing + four services (pillar card fields).
 * Run: node --env-file=.env scripts/seed-sanity-family-office-setup-pillar.mjs
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN.");
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: "2024-03-01",
});

const serviceLanding = [
  {
    _id: "service-consulting-governance-and-structure",
    pillarLandingTagline:
      "Defining how the family office is governed, who is accountable, and how decisions are made.",
    pillarLandingBullets: [
      "Family office strategy & mandate design",
      "Governance framework & family constitution",
      "Investment policy statement (IPS) development",
      "Family council & board structure design",
      "Succession & continuity planning frameworks",
      "Decision-rights & accountability models",
    ],
    pillarLandingOutcome:
      "A family office governed by a clear mandate, not by habit.",
  },
  {
    _id: "service-consulting-wealth-structuring",
    pillarLandingTagline:
      "Designing the holding architecture that protects, separates, and optimises family wealth.",
    pillarLandingBullets: [
      "Wealth structuring & holding architecture",
      "Multi-jurisdiction structuring where applicable",
      "Tax-efficient vehicle design",
      "Asset protection & ring-fencing",
      "Business and personal wealth separation",
      "Regulatory and compliance structuring",
    ],
    pillarLandingOutcome:
      "Family wealth structured for protection, growth, and generational transfer.",
  },
  {
    _id: "service-consulting-investment-operations",
    pillarLandingTagline:
      "Building the investment infrastructure that allows capital to be deployed with discipline.",
    pillarLandingBullets: [
      "Investment mandate & portfolio strategy",
      "Asset allocation framework",
      "Investment committee structure & process",
      "Manager selection & due diligence framework",
      "Co-investment & direct investment protocols",
      "Performance tracking & attribution",
    ],
    pillarLandingOutcome:
      "Capital deployed with discipline, visibility, and clear accountability.",
  },
  {
    _id: "service-consulting-long-term-management",
    pillarLandingTagline:
      "Sustaining performance, governance, and relevance across generations.",
    pillarLandingBullets: [
      "Ongoing advisory & governance support",
      "Annual investment review & strategy refresh",
      "Family education & financial literacy programs",
      "Next-generation onboarding & preparation",
      "Family governance evolution as the family grows",
      "Reporting to family stakeholders",
    ],
    pillarLandingOutcome:
      "A family office that serves the family across generations, not just the current one.",
  },
];

const challengesBullets = [
  "Business and personal wealth not structurally separated",
  "Investment decisions made without a defined mandate or governance process",
  "Multiple family members with different expectations and no formal resolution mechanism",
  "Operational dependence on a single individual with no succession plan",
  "Reporting that is inconsistent, opaque, or entirely externally managed",
];

const stats = [
  { _key: "st1", number: "$3B+", label: "Revenues" },
  { _key: "st2", number: "$1B+", label: "Capital" },
  {
    _key: "st3",
    number: "500+",
    label: "Mandates Generated through Growth Advisory",
  },
  { _key: "st4", number: "", label: "Structured through Capital Advisory" },
  { _key: "st5", number: "", label: "Delivered through Innovation Advisory" },
];

const tx = client.transaction();

for (const s of serviceLanding) {
  tx.patch(s._id, {
    set: {
      pillarLandingTagline: s.pillarLandingTagline,
      pillarLandingBullets: s.pillarLandingBullets,
      pillarLandingOutcome: s.pillarLandingOutcome,
    },
  });
}

tx.patch("pillar-consulting-family-office-setup", {
  unset: [
    "featuredInsights",
    "insightsHeadline",
    "engagementModelsIntro",
    "approachHeadline",
    "approachBody",
  ],
  set: {
    heroHeadline: "Family Office Setup",
    heroSubheadline:
      "Structure. Governance. Generational Discipline.\n\nWe help families build the governance frameworks, investment operating models, and structural foundations that allow wealth to be managed, preserved, and grown across generations.",
    challengesHeadline: "The Challenges We Solve",
    challengesIntro:
      "Most family offices are built reactively — after a liquidity event creates urgency or after the absence of structure has already created problems.\n\nWe are typically engaged when families face:",
    challengesBullets,
    challengesClosing:
      "GVC addresses these challenges before they become crises — or restructures the family office when they already have.",
    servicesEyebrow: "OUR FAMILY OFFICE SETUP CAPABILITIES",
    servicesHeadline: "Our Family Office Setup Capabilities",
    servicesSubheadline: "",
    cardGridEyebrow: "WHO WE WORK WITH",
    cardGridHeadline: "Who We Work With",
    cardGridBody: "",
    whoWeWorkWith: [
      "Families approaching a liquidity event",
      "Existing family offices needing professionalisation",
      "Multi-generational families",
      "Families with operating businesses",
    ],
    positioningText:
      "We don't sell advice. We build systems by integrating growth, capital, and innovation with discipline and execution.",
    whoWeWorkWithCtaLabel: "Talk to Our Advisor",
    whoWeWorkWithCtaHref: "/contact",
    engagementModelsHeadline: "Engagement Models",
    engagementModels: [
      "Family office strategy and setup",
      "Governance and investment framework design",
      "Family office restructuring and professionalisation",
      "Ongoing family office advisory retainer",
      "Next-generation preparation programs",
    ],
    engagementOutcomesHeadline: "Engagement Outcomes",
    engagementOutcomes: [
      "Disciplined portfolio strategy and deployment",
      "Clear governance and risk frameworks",
      "Alignment between family objectives and enterprise growth",
      "A family office that functions as an institution across generations",
    ],
    nextSectionTitle: "Let's get started.",
    nextSectionBody:
      "Build a family office that endures.\n\nStart a family office conversation with GrowValley Consulting.",
    nextSectionCtaLabel: "Talk to Our Advisor",
    nextSectionCtaHref: "/contact",
    stats,
    ctaHeadline: "",
    ctaBody: "",
    ctaButtonLabel: "Talk to Our Advisor",
  },
});

tx.createOrReplace({
  _id: "hero-consulting-family-office-setup",
  _type: "hero-consulting",
  pageSlug: "family-office-setup",
  eyebrow: "FAMILY OFFICE SETUP",
  headline: "Family Office Setup",
  subheadline:
    "Structure. Governance. Generational Discipline.\n\nWe help families build the governance frameworks, investment operating models, and structural foundations that allow wealth to be managed, preserved, and grown across generations.",
  hasCTA: true,
  ctaText: "Talk to Our Advisor",
  ctaHref: "/contact",
});

const res = await tx.commit();
console.log("Family Office Setup pillar seed complete.");
console.log("Transaction:", res.transactionId);
