import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { heroQuery, homePageQuery } from "@/lib/queries";
import HomeContent from "./HomeContent";

export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    absolute: "GrowValley Consulting",
  },
  description:
    "We advise businesses, investors, and operators across growth, capital formation, and strategic execution.",
  openGraph: {
    title: "GrowValley Consulting",
    description: "Growth. Capital. Innovation.",
    url: "https://gv.consulting",
    images: [
      {
        url: "/images/growvalleyworks.png",
        width: 1200,
        height: 630,
        alt: "GrowValley Consulting",
      },
    ],
  },
};

export default async function Home() {
  let heroData = null;
  let homePage = null;

  try {
    [heroData, homePage] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "home" }),
      client.fetch(homePageQuery),
    ]);
  } catch (error) {
    console.error("Error fetching CMS data on Server:", error);
  }

  return <HomeContent heroData={heroData} homePage={homePage} />;
}
