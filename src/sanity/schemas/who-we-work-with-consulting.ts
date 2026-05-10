import { defineField, defineType } from "sanity";
import { iconList } from "../lib/iconList";

export default defineType({
    name: "who-we-work-with-consulting",
    title: "Who We Work With (Consulting)",
    type: "document",
    initialValue: {
        headline: "Who We Work With",
        description: "We partner with organisations where complexity, ambition, and capital decisions matter. Our work is board-level, founder-level, and long-term.",
        categories: [
            {
                title: "Established Businesses",
                description: "Established Businesses",
                iconName: "Building2"
            },
            {
                title: "Corporates & Enterprises",
                description: "Corporates & Enterprises",
                iconName: "Briefcase"
            },
            {
                title: "Universities & Institutions / Governments & Authorities",
                description: "Universities & Institutions | Governments & Authorities",
                iconName: "Landmark"
            },
            {
                title: "Family Offices",
                description: "Family Offices",
                iconName: "ShieldCheck"
            },
            {
                title: "Scale-Stage Startups",
                description: "Scale-Stage Startups",
                iconName: "Rocket"
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
            name: "categories",
            title: "Categories",
            description: "Up to 5 audience categories rendered in the bento grid. Pair items with a slash if you have 6 in your content (e.g. 'Universities & Institutions / Governments & Authorities').",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        { name: "iconName", title: "Icon Name", type: "string", options: { list: iconList } },
                    ]
                }
            ]
        })
    ]
});
