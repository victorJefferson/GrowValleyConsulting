import { defineField, defineType } from "sanity";

export default defineType({
    name: "data-section-consulting",
    title: "Data Section (Consulting)",
    type: "document",
    initialValue: {
        headline: "Outcomes that compound.",
        description: "GrowValley Consulting integrates strategy, capital, and execution into one accountable advisory system — measured by what it builds, not what it presents.",
        stats: [
            { prefix: "$", number: 3, suffix: "B+", label: "Revenues Generated through Growth Advisory" },
            { prefix: "$", number: 1, suffix: "B+", label: "Capital Structured through Capital Advisory" },
            { number: 500, suffix: "+", label: "Mandates Delivered" },
            { number: 1, suffix: "", label: "Integrated Advisory System" }
        ]
    },
    fields: [
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "prefix", title: "Prefix (Optional)", type: "string" },
                        {
                            name: "number",
                            title: "Number (Mandatory)",
                            type: "number",
                            validation: Rule => Rule.required()
                        },
                        { name: "suffix", title: "Suffix (Optional)", type: "string" },
                        {
                            name: "label",
                            title: "Label (Mandatory)",
                            type: "string",
                            validation: Rule => Rule.required()
                        },
                    ],
                    preview: {
                        select: {
                            prefix: "prefix",
                            number: "number",
                            suffix: "suffix",
                            label: "label",
                        },
                        prepare({ prefix, number, suffix, label }) {
                            return {
                                title: `${prefix || ''}${number}${suffix || ''}`,
                                subtitle: label,
                            };
                        },
                    },
                },
            ],
            validation: Rule => Rule.required().min(1).max(4),
        }),
    ],
});
