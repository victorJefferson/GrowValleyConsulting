# GrowValley Consulting CMS Placement Report

This report maps the content from `gv_consulting_content.md` into Sanity CMS documents and exact fields for the migrated `-consulting` schema set.

## How to Use This Report

- Create the required documents by schema type first.
- Paste content into fields exactly as mapped below.
- For arrays, follow index order (`[0]`, `[1]`, ...).
- Repeated global line:
  - `Trusted by leading governments, corporates, and innovators across the region.`
  - goes in: `siteSettings-consulting.trustedByLine`

---

## Global Documents

### 1) `siteSettings-consulting` (single document)

| Content Section | Field |
|---|---|
| Trusted by leading governments... | `trustedByLine` |
| Footer tagline | `footerTagline` |
| Footer copyright line | `footerCopyright` |
| Newsletter heading | `newsletterHeading` |
| Newsletter email placeholder | `newsletterPlaceholder` |
| Newsletter submit label | `newsletterSubmitLabel` |
| Newsletter endpoint (if available) | `newsletterEndpoint` |
| Header nav items + submenus | `mainNavigation[]` |
| Footer columns + links | `footerNavigation[]` |

### 2) `data-section-consulting` (single reusable impact stats doc)

Use one canonical impact stats document reused across Home, Expertise, and Pillar pages.

| Content | Field |
|---|---|
| Stats headline | `headline` |
| Stats body text | `description` |
| `$3B+ Revenues...` stat | `stats[0].prefix/number/suffix/label` |
| `$1B+ Capital...` stat | `stats[1].prefix/number/suffix/label` |
| `500+ Mandates...` stat | `stats[2].prefix/number/suffix/label` |
| Optional 4th stat | `stats[3].prefix/number/suffix/label` |

---

## Home (`/`)

### Hero

- Document: `hero-consulting` (where `pageSlug = "home"`)
- Fields:
  - Headline -> `headline`
  - Subheadline -> `subheadline`
  - CTA label -> `ctaText`
  - CTA link -> `ctaHref`
  - CTA enabled -> `hasCTA`
  - Hero image -> `image`

### Page Body

- Document: `homePage-consulting` (single doc)

| Home Section | Field |
|---|---|
| "The Problems We Solve" lead text | `whySplitLeftText` |
| Problem bullets/cards | `whyCards[]` (`iconName`, `label`, `description`) |
| Ecosystem statement heading | `positioningHeadline` |
| Ecosystem statement subheadline | `positioningSubheadline` |
| Ecosystem statement body | `positioningBody` |
| Mid CTA heading | `miniCtaHeadline` |
| Mid CTA label | `miniCtaButtonText` |
| Mid CTA link | `miniCtaButtonLink` |
| Bottom CTA heading | `bottomCtaHeadline` |
| Bottom CTA label | `bottomCtaButtonText` |
| Bottom CTA link | `bottomCtaButtonLink` |

### Capability Tabs on Home

- Document: `solutions-consulting` (single doc)
- Fill `items[]` with 5 rows:
  1. `growth-advisory`
  2. `capital-advisory`
  3. `innovation-advisory`
  4. `pmo`
  5. `family-office-setup`

### Who We Work With on Home

- Document: `who-we-work-with-consulting` (single doc)

| Content | Field |
|---|---|
| Section headline | `headline` |
| Section body | `description` |
| 5 bento categories | `categories[]` (`title`, `description`, `iconName`) |

Note: if source has 6 audience items, combine 2 into one card entry as agreed.

---

## Expertise (`/expertise`)

- Document: `hero-consulting` (`pageSlug = "expertise"`) for hero override if needed.
- Main document: `expertisePage-consulting` (single doc)

| Section | Field |
|---|---|
| Hero eyebrow | `heroEyebrow` |
| Hero headline | `heroHeadline` |
| Hero accent line | `heroAccent` |
| Hero subheadline | `heroSubheadline` |
| Hero image | `heroImage` |
| Hero CTA label/link | `heroCtaLabel`, `heroCtaLink` |
| Impact stats heading | `impactStatsHeadline` |
| Impact stats entries | `impactStats[]` |
| Expertise cards (Scale Readiness, PMO...) | `expertiseAreas[]` (`title`, `body`, `outcomes[]`, `ctaLabel`, `ctaLink`) |
| "How We Engage" heading | `howWeEngageHeadline` |
| "How We Engage" body | `howWeEngageBody` |
| 3 principles | `engagementPrinciples[]` |
| Closing sentence + CTA | `howWeEngageClosing`, `howWeEngageCtaLabel`, `howWeEngageCtaLink` |
| "Difference" heading/body/CTA | `differentiatorHeadline`, `differentiatorBody`, `differentiatorCtaLabel`, `differentiatorCtaLink` |

---

## About Us (`/about-us`)

- Hero: `hero-consulting` (`pageSlug = "about"`)
- Page settings: `aboutUsPage-consulting` (single doc)

| About Section | Field |
|---|---|
| Intro image | `introImage` |
| Narrative section 1 | `narrativeSections[0].eyebrow/heading/body` |
| Narrative section 2 | `narrativeSections[1].eyebrow/heading/body` |
| Narrative section 3 | `narrativeSections[2].eyebrow/heading/body` |
| Narrative section 4 | `narrativeSections[3].eyebrow/heading/body` |
| Narrative section 5 | `narrativeSections[4].eyebrow/heading/body` |
| Subpage nav link 1 | `subPagesNav[0].label/href` |
| Subpage nav link 2 | `subPagesNav[1].label/href` |
| Subpage nav link 3 | `subPagesNav[2].label/href` |
| CTA heading | `ctaHeadline` |
| CTA subline | `ctaSubline` |
| CTA button label/link | `ctaButtonLabel`, `ctaButtonLink` |

---

## Team + Leadership

### Team (`/about-us/team`)

- Hero source: `hero-consulting` (`pageSlug = "team"`)
- Members: `team-consulting` (one document per person)
  - `name`
  - `role`
  - `image`
  - `category` (`principal` / `advisory` / `staff`)

### Leadership (`/about-us/leadership`)

- Hero source: `hero-consulting` (`pageSlug = "leadership"`)
- Leadership entries: `leadership-consulting` documents
  - `name`
  - `title`
  - `bio`
  - `image`
  - `stats[]` as needed

---

## Capabilities Hub (`/our-capabilities`)

- Hero: `hero-consulting` (`pageSlug = "capabilities"`)
- Page settings: `capabilitiesPage-consulting`

| Section | Field |
|---|---|
| Intro heading | `introHeading` |
| Intro paragraph | `introParagraph` |
| Bottom CTA heading | `bottomCtaHeadline` |
| Bottom CTA label/link | `bottomCtaButtonText`, `bottomCtaButtonLink` |

---

## Pillar Landing Pages (5 total)

Create 5 `pillar-consulting` docs with slugs:

1. `growth-advisory`
2. `capital-advisory`
3. `innovation-advisory`
4. `pmo`
5. `family-office-setup`

### Generic Pillar Field Map (applies to each of the 5 pillar landing pages)

| Source Section | Field |
|---|---|
| Pillar title | `title` |
| Slug | `slug.current` |
| Hero headline/subheadline/image | `heroHeadline`, `heroSubheadline`, `heroImage` |
| Approach statement | `approachHeadline`, `approachBody` |
| "The ... Challenges We Solve" heading | `challengesHeadline` |
| Optional intro under challenges | `challengesIntro` |
| Challenge bullets | `challengesBullets[]` |
| Services block eyebrow/headline | `servicesEyebrow`, `servicesHeadline` |
| "Who We Work With" cards heading/body | `cardGridEyebrow`, `cardGridHeadline`, `cardGridBody` |
| Who we work with bullets | `whoWeWorkWith[]` |
| Engagement models heading + intro | `engagementModelsHeadline`, `engagementModelsIntro` |
| Engagement models bullets | `engagementModels[]` |
| Engagement outcomes heading | `engagementOutcomesHeadline` |
| Engagement outcomes bullets | `engagementOutcomes[]` |
| Insights heading | `insightsHeadline` |
| Featured insight refs | `featuredInsights[]` |
| Next section heading/body | `nextSectionTitle`, `nextSectionBody` |
| Final CTA heading/body/button | `ctaHeadline`, `ctaBody`, `ctaButtonLabel` |

### Pillar-specific service references

Each `service-consulting` child must reference its parent pillar via:
- `service-consulting.pillar` -> reference to that `pillar-consulting` doc.

---

## Service Pages (all subpages under each pillar)

Create one `service-consulting` document per service page listed in content.

### Generic Service Field Map (applies to all service pages)

| Source Section | Field |
|---|---|
| Service title | `title` |
| Service slug | `slug.current` |
| Parent pillar | `pillar` (reference) |
| Card description used on pillar | `description` |
| Card icon | `iconName` |
| Hero title/subtitle/image | `heroHeadline`, `heroSubheadline`, `heroImage` |
| Hero CTA | `heroCtaLabel`, `heroCtaLink` |
| "Challenges We Solve" heading | `problemHeadline` |
| Challenges body text | `problemBody` |
| Challenges bullets | `problemBullets[]` |
| Challenges CTA | `problemCtaLabel`, `problemCtaLink` |
| "What We Do" heading area | `featureEyebrow`, `featureHeadline`, `featureBody`, `featureBullets[]` |
| Optional showcase image | `featureImage` |
| How-we-help cards | `helpCards[]` (`iconName`, `title`, `desc`) |
| Optional network section | `networkHeadline`, `networkSubheadline`, `network[]` |
| Optional stats strip | `stats[]` (`num`, `desc`) |
| Optional feature grid | `featureGridEyebrow`, `featureGridHeadline`, `featureGridBody`, `featureGridCards[]` |
| "Engagement Outcomes" heading override | `whatsIncludedHeadline` |
| Outcomes intro | `whatsIncludedSubtext` |
| Outcomes image | `whatsIncludedImage` |
| Outcomes bullets col1/col2 | `whatsIncluded.column1[]`, `whatsIncluded.column2[]` |
| Final CTA | `ctaHeadline`, `ctaBody`, `ctaButtonLabel`, `ctaButtonLink` |

---

## Partner With Us

Use `partnerPage-consulting` documents with `pageKey`:

- `landing`
- `expert`
- `technology`
- `business`
- `media`

### Landing (`pageKey = "landing"`)

| Section | Field |
|---|---|
| Hero eyebrow/headline/accent/body | `heroEyebrow`, `heroHeadline`, `heroAccent`, `heroSubheadline` |
| Hero image | `heroImage` |
| Hero CTA | `heroCtaLabel`, `heroCtaLink` |
| Why partner heading/body | `whyHeadline`, `whyBody` |
| Access heading | `whyAccessHeadline` |
| Access bullets | `whyAccessPoints[]` |
| 4 partner cards | `partnerTypes[]` |
| Closing heading/body/CTA | `closingHeadline`, `closingBody`, `closingCtaLabel`, `closingCtaLink` |

#### `partnerTypes[]` item map

- `key` (`expert`, `technology`, `business`, `media`)
- `title`
- `tagline`
- `body`
- `whoForHeadline`, `whoFor[]`
- `howEngageHeadline`, `howEngage[]`
- `whatGainHeadline`, `whatGain[]`
- `ctaLabel`, `ctaLink`

### Subpages (`pageKey = expert/technology/business/media`)

| Section | Field |
|---|---|
| Hero fields | `heroEyebrow`, `heroHeadline`, `heroAccent`, `heroSubheadline`, `heroImage` |
| Hero CTA | `heroCtaLabel`, `heroCtaLink` |
| Intro tagline | `tagline` |
| Narrative body | `narrativeBody` |
| Who this is for | `whoForHeadline`, `whoFor[]` |
| How we engage | `howEngageHeadline`, `howEngage[]` |
| What you gain | `whatGainHeadline`, `whatGain[]` |
| Closing CTA block | `closingHeadline`, `closingBody`, `closingCtaLabel`, `closingCtaLink` |

---

## Careers (`/join-us/careers`)

- Document: `joinUsPage-consulting` with `pageKey = "careers"`

| Section | Field |
|---|---|
| Hero eyebrow/headline/subheadline | `heroEyebrow`, `heroHeadline`, `heroSubheadline` |
| Hero image | `heroImage` (or fallback `heroImagePath`) |
| Hero CTA | `heroCtaLabel`, `heroCtaLink` |
| "What Working at GVC Looks Like" heading/body | `pullQuote1`, `pullQuote2` |
| Traits section eyebrow/headline | `whoEyebrow`, `whoHeadline` |
| 4 traits | `traits[]` (`title`, `description`) |
| Openings section eyebrow/headline | `ctaEyebrow`, `ctaHeadline` |
| Open roles list | `openings[]` (`title`, `summary`, `applyLink`) |
| No openings fallback | `noOpeningsFallback` |
| Fallback CTA label/link | `ctaButtonLabel`, `ctaButtonHref` |

---

## Contact (`/contact`)

### Hero
- `hero-consulting` with `pageSlug = "contact"`
  - `eyebrow`, `headline`, `subheadline`, `image`, `hasCTA = false`

### Contact form + page body
Current implementation is mostly static in `ContactContent` and API driven.
If you want this fully CMS-mapped later, use:
- `page-consulting` with slug `contact` for intro/body/close copy.

For now, map manual content directly in UI constants:

| Contact Section | Current Target |
|---|---|
| Intro heading/body | `src/app/(site)/contact/ContactContent.tsx` static strings |
| UAE office details | `src/app/(site)/contact/ContactContent.tsx` static strings |
| Form labels and placeholders | `src/app/(site)/contact/ContactContent.tsx` |
| Submit destination source tag | `src/app/api/contact/route.ts` -> `source` |

---

## Insights Content

Create `insight-consulting` docs for all listed insight titles.

| Field | Value Source |
|---|---|
| `title` | Insight title from content |
| `slug.current` | URL-safe from title |
| `tag` | Pillar category |
| `excerpt` | 1-2 sentence summary |
| `mainImage` | Upload image asset |
| `publishedAt` | Publish date |
| `content` | Full article body (portable text) |
| `featured` | true for one hero article |
| `editorsPick` | up to three highlights |

For pillar pages, attach selected insight docs via:
- `pillar-consulting.featuredInsights[]` references.

---

## Legal Pages

Create/update `legalPage-consulting` docs:

- `privacy-policy`
- `terms-of-use`
- `cookie-policy`
- `disclaimer`

| Field | Value |
|---|---|
| `title` | Page title |
| `slug.current` | page slug |
| `lastUpdated` | date string |
| `heroImage` | image |
| `content` | portable text body |

---

## Hero Slug Matrix (must exist in `hero-consulting.pageSlug`)

- `home`
- `about`
- `growth-advisory`
- `capital-advisory`
- `innovation-advisory`
- `pmo`
- `family-office-setup`
- `expertise`
- `partner-with-us`
- `careers`
- `contact`
- `leadership`
- `team`
- `capabilities` (used by capabilities hub route)

---

## Image Slot Checklist

Upload assets into these fields:

- `hero-consulting.image` (all page heroes)
- `aboutUsPage-consulting.introImage`
- `expertisePage-consulting.heroImage`
- `partnerPage-consulting.heroImage` (per pageKey doc)
- `pillar-consulting.heroImage` (per pillar)
- `service-consulting.heroImage/problemImage/featureImage/whatsIncludedImage`
- `insight-consulting.mainImage`
- `team-consulting.image`
- `leadership-consulting.image`
- `legalPage-consulting.heroImage`

---

## Final Validation Before Content Entry

- Confirm all documents are `*-consulting` type only (no `*-works` leftovers).
- Confirm 5 pillars exist and each service references correct pillar.
- Confirm careers page key is only `careers`.
- Confirm Partner With Us has exactly 5 docs (`landing`, `expert`, `technology`, `business`, `media`).
- Confirm TrustedBy line set once in `siteSettings-consulting`.

