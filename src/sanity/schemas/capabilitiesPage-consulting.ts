import { defineType, defineField } from "sanity";

export default defineType({
  name: "capabilitiesPage-consulting",
  title: "Capabilities Page (Consulting)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Capabilities Page Content",
      hidden: true,
    }),
    defineField({
      name: "introHeading",
      title: "Introduction Heading",
      type: "string",
    }),
    defineField({
      name: "introParagraph",
      title: "Introduction Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "bottomCtaHeadline",
      title: "Bottom CTA Banner Headline",
      type: "string",
    }),
    defineField({
      name: "bottomCtaButtonText",
      title: "Bottom CTA Banner Button Text",
      type: "string",
    }),
    defineField({
      name: "bottomCtaButtonLink",
      title: "Bottom CTA Banner Button Link",
      type: "string",
    }),
  ],
});
