import { defineField, defineType } from "sanity";

export default defineType({
    name: "solutions-consulting",
    title: "Solutions / Capabilities Tabs (Consulting)",
    type: "document",
    initialValue: {
        headline: "We operate through five deeply integrated advisory capabilities.",
        description: "GrowValley Consulting is the strategy and advisory arm of the GrowValley ecosystem, alongside GVV (capital and wealth) and GVW (execution and operations).",
        items: [
            {
                id: "growth-advisory",
                title: "Growth Advisory",
                subtitle: "Strengthening to maximise revenue and performance. We help established businesses to increase revenues with strategy and systems to improve products, process, performance, and governance — creating a strong foundation for scale.",
                href: "/our-capabilities/growth-advisory"
            },
            {
                id: "capital-advisory",
                title: "Capital Advisory",
                subtitle: "Strengthening to raise and deploy capital. We prepare businesses to attract, structure, and deploy capital intelligently by building investment readiness, valuation defensibility, and transaction preparedness.",
                href: "/our-capabilities/capital-advisory"
            },
            {
                id: "innovation-advisory",
                title: "Innovation Advisory",
                subtitle: "Strengthening to become an industry leader. We design and build innovation engines through structured venture-building models and venture studios to create next-generation products and businesses.",
                href: "/our-capabilities/innovation-advisory"
            },
            {
                id: "pmo",
                title: "PMO",
                subtitle: "Driving execution discipline across complex transformation programs. We design and operate enterprise-grade Project Management Offices that give leadership teams full visibility into delivery performance, accountability, and risk across every program in the portfolio.",
                href: "/our-capabilities/pmo"
            },
            {
                id: "family-office-setup",
                title: "Family Office Setup",
                subtitle: "Structuring, governing, and managing family wealth for the long term. We help families build the governance frameworks, investment operating models, and structural foundations that allow wealth to be managed, preserved, and grown across generations.",
                href: "/our-capabilities/family-office-setup"
            }
        ]
    },
    fields: [
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "items",
            title: "Solution Items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "id", title: "ID", type: "string" },
                        { name: "title", title: "Title", type: "string" },
                        { name: "subtitle", title: "Subtitle", type: "text" },
                        { name: "href", title: "Link", type: "string" },
                    ]
                }
            ]
        })
    ]
});
