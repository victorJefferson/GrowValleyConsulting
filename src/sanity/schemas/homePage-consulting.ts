import { defineField, defineType } from "sanity";
import { HOMEPAGE_CONSULTING_INITIAL } from "../../config/homepageContent.defaults";

const homePageConsultingSeed = {
  ...HOMEPAGE_CONSULTING_INITIAL,
  problemCards: [...HOMEPAGE_CONSULTING_INITIAL.problemCards],
  coreExcellenceBullets: [...HOMEPAGE_CONSULTING_INITIAL.coreExcellenceBullets],
  topExpertiseBullets: [...HOMEPAGE_CONSULTING_INITIAL.topExpertiseBullets],
};

export default defineType({
  name: "homePage-consulting",
  title: "Home Page (Consulting)",
  type: "document",
  initialValue: homePageConsultingSeed,
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Home Page Content",
      hidden: true,
    }),

    defineField({
      name: "problemsEyebrow",
      title: "Problems band – eyebrow",
      type: "string",
    }),
    defineField({
      name: "problemsHeadline",
      title: "Problems band – headline",
      type: "string",
    }),
    defineField({
      name: "problemsLeadParagraph",
      title: "Problems band – lead paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "problemsMutedLead",
      title: "Problems band – muted line (below lead)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "problemCards",
      title: "Problems band – cards",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "problemsClosing",
      title: "Problems band – closing muted copy",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "bridgeStatement",
      title: "Bridge band – panel copy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bridgeCtaText",
      title: "Bridge band – advisor button label",
      type: "string",
    }),
    defineField({
      name: "bridgeCtaLink",
      title: "Bridge band – advisor link",
      type: "string",
    }),

    defineField({
      name: "integratedEyebrow",
      title: "Integrated advisory band – eyebrow",
      type: "string",
    }),
    defineField({
      name: "integratedBody",
      title: "Integrated advisory band – paragraph",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "missionStatement",
      title: "Mission band – boxed statement",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "missionCtaText",
      title: "Mission band – advisor label",
      type: "string",
    }),
    defineField({
      name: "missionCtaLink",
      title: "Mission band – advisor link",
      type: "string",
    }),

    defineField({
      name: "whyGrowthHeadline",
      title: "Why GrowValley – headline",
      type: "string",
    }),
    defineField({
      name: "whyGrowthBody",
      title: "Why GrowValley – body",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "whyGrowthEyebrow",
      title: "Why GrowValley – small WHY label",
      type: "string",
    }),
    defineField({
      name: "whyGrowthItalic",
      title: "Why GrowValley – italic line under WHY label",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "coreExcellenceEyebrow",
      title: "Core excellence panel – eyebrow",
      type: "string",
    }),
    defineField({
      name: "coreExcellenceBullets",
      title: "Core excellence panel – bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whyGrowthClosingLine",
      title: "Core excellence panel – closing headline",
      type: "string",
    }),
    defineField({
      name: "whyGrowthCtaText",
      title: "Why GrowValley – advisor button label",
      type: "string",
    }),
    defineField({
      name: "whyGrowthCtaLink",
      title: "Why GrowValley – advisor link",
      type: "string",
    }),

    defineField({
      name: "topExpertiseHeadline",
      title: "Top expertise band – headline",
      type: "string",
    }),
    defineField({
      name: "topExpertiseSubhead",
      title: "Top expertise band – subheadline",
      type: "string",
    }),
    defineField({
      name: "topExpertiseLead",
      title: "Top expertise band – introductory paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "topExpertiseBullets",
      title: "Top expertise band – bullets (grid)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "insightsCarouselTitle",
      title: "Insights carousel – title",
      type: "string",
    }),
    defineField({
      name: "insightsCarouselDescription",
      title: "Insights carousel – description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "solutionsAdvisorCtaText",
      title: "Ecosystem / Solutions band – advisor button label",
      description: 'Shown below the five pillar cards (typically “Talk to our Advisor”).',
      type: "string",
    }),
    defineField({
      name: "solutionsAdvisorCtaHref",
      title: "Ecosystem / Solutions band – advisor link",
      type: "string",
    }),

    defineField({
      name: "finaleStatement",
      title: "Finale band – closing statement",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "finaleCtaText",
      title: "Finale band – advisor label",
      type: "string",
    }),
    defineField({
      name: "finaleCtaLink",
      title: "Finale band – advisor link",
      type: "string",
    }),
  ],
});
