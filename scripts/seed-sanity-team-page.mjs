/**
 * Seeds only the /about-us/team page: hero (pageSlug team) + nine operations team members.
 * Run: node --env-file=.env scripts/seed-sanity-team-page.mjs
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

const tx = client.transaction();

tx.createOrReplace({
  _id: "hero-consulting-team",
  _type: "hero-consulting",
  pageSlug: "team",
  eyebrow: "OUR TEAM",
  headline: "The people who do the work.",
  subheadline:
    "GrowValley is staffed by specialists. Each person owns a defined domain across formation, operations, finance, and international expansion. They work in coordination across functions, so nothing falls through the gaps between them.",
  hasCTA: false,
});

const teamOperationsV1 = [
  { _id: "team-consulting-v1-01-faris", name: "Faris Al Khaldi", role: "Corporate Formation & Structuring" },
  { _id: "team-consulting-v1-02-omar", name: "Omar Farouq", role: "UAE Formation" },
  { _id: "team-consulting-v1-03-kavya", name: "Kavya Reddy", role: "Structuring" },
  { _id: "team-consulting-v1-04-matthias", name: "Matthias Keller", role: "Government & Compliance Operations" },
  { _id: "team-consulting-v1-05-imran", name: "Imran Qureshi", role: "Government Liaison" },
  { _id: "team-consulting-v1-06-elena", name: "Elena Markova", role: "Entity Management" },
  { _id: "team-consulting-v1-07-nur", name: "Nur Aisyah Rahman", role: "Finance & Back-Office" },
  { _id: "team-consulting-v1-08-jihoon", name: "Ji-Hoon Park", role: "Accounting" },
  { _id: "team-consulting-v1-09-viktor", name: "Viktor Novak", role: "International Expansion" },
];

for (const m of teamOperationsV1) {
  tx.createOrReplace({
    _id: m._id,
    _type: "team-consulting",
    name: m.name,
    role: m.role,
    category: "operations",
  });
}

const res = await tx.commit();
console.log("Team page seed complete.");
console.log("Transaction:", res.transactionId);
