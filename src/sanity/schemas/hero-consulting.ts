import { defineField, defineType } from "sanity";

export default defineType({
    name: "hero-consulting",
    title: "Page Heroes (Consulting)",
    type: "document",
    initialValue: {
        pageSlug: "home",
        hasCTA: true,
        eyebrow: "GROWVALLEY CONSULTING",
        headline: "Strategy. Structure. Execution.",
        subheadline: "We help businesses to design, structure, and scale their organisations — with clarity, discipline, and an execution focus.",
        ctaText: "Talk to Our Advisor",
        ctaHref: "/contact"
    },
    fields: [
        defineField({
            name: "pageSlug",
            title: "Page Identifier (Slug)",
            type: "string",
            description: "Select the page this hero belongs to.",
            options: {
                list: [
                    { title: "Home Page", value: "home" },
                    { title: "About Us", value: "about" },
                    { title: "Team", value: "team" },
                    { title: "Leadership", value: "leadership" },
                    { title: "Capabilities (Hub)", value: "capabilities" },
                    { title: "Growth Advisory", value: "growth-advisory" },
                    { title: "Capital Advisory", value: "capital-advisory" },
                    { title: "Innovation Advisory", value: "innovation-advisory" },
                    { title: "PMO", value: "pmo" },
                    { title: "Family Office Setup", value: "family-office-setup" },
                    { title: "Expertise", value: "expertise" },
                    { title: "Partner With Us", value: "partner-with-us" },
                    { title: "Careers", value: "careers" },
                    { title: "Contact", value: "contact" },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "eyebrow",
            title: "Eyebrow",
            type: "string",
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
        }),
        defineField({
            name: "subheadline",
            title: "Subheadline",
            type: "text",
        }),
        defineField({
            name: "hasCTA",
            title: "Include CTA Button?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "ctaText",
            title: "CTA Button Text",
            type: "string",
            hidden: ({ document }) => !document?.hasCTA,
        }),
        defineField({
            name: "ctaHref",
            title: "CTA Button Link",
            type: "string",
            hidden: ({ document }) => !document?.hasCTA,
        }),
        defineField({
            name: "image",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
});
