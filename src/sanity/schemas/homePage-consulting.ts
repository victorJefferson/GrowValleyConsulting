import { defineType, defineField } from "sanity";
import { iconList } from "../lib/iconList";

export default defineType({
  name: "homePage-consulting",
  title: "Home Page (Consulting)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Home Page Content",
      hidden: true,
    }),
    defineField({
      name: "whySplitLeftText",
      title: "Why Us - Left Dark Card Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whyCards",
      title: "Why Us - Flipping Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "iconName",
              title: "Icon Name (Lucide)",
              type: "string",
              options: { list: iconList },
            }),
            defineField({
              name: "label",
              title: "Card Label (Front)",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Card Description (Back)",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "positioningHeadline",
      title: "Positioning Statement Headline",
      type: "string",
    }),
    defineField({
      name: "positioningSubheadline",
      title: "Positioning Statement Subheadline",
      type: "string",
    }),
    defineField({
      name: "positioningBody",
      title: "Positioning Statement Body",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "miniCtaHeadline",
      title: "Middle Mini CTA Headline",
      type: "string",
    }),
    defineField({
      name: "miniCtaButtonText",
      title: "Middle Mini CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "miniCtaButtonLink",
      title: "Middle Mini CTA Button Link",
      type: "string",
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
