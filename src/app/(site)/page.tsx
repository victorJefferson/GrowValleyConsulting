import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import {
    heroQuery,
    insightsQuery,
    dataSectionQuery,
    whoWeWorkWithQuery,
    solutionsQuery,
    homePageQuery,
    siteSettingsQuery,
} from "@/lib/queries";
import HomeContent from "./HomeContent";

export const revalidate = 0;

export const metadata: Metadata = {
    title: {
        absolute: "GrowValley Consulting",
    },
    description:
        "Strategy, capital, and execution under one accountable advisory system. The strategy and advisory arm of the GrowValley ecosystem.",
    openGraph: {
        title: "GrowValley Consulting",
        description: "Strategy. Capital. Execution. This Is GrowValley Consulting.",
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
    let insights = [];
    let dataSectionData = null;
    let whoWeWorkWithData = null;
    let solutionsData = null;
    let homePageSettings = null;
    let siteSettings = null;

    try {
        [
            heroData,
            insights,
            dataSectionData,
            whoWeWorkWithData,
            solutionsData,
            homePageSettings,
            siteSettings,
        ] = await Promise.all([
            client.fetch(heroQuery, { pageSlug: "home" }),
            client.fetch(insightsQuery),
            client.fetch(dataSectionQuery),
            client.fetch(whoWeWorkWithQuery),
            client.fetch(solutionsQuery),
            client.fetch(homePageQuery),
            client.fetch(siteSettingsQuery),
        ]);
    } catch (error) {
        console.error("Error fetching CMS data on Server:", error);
    }

    return (
        <HomeContent
            heroData={heroData}
            insights={insights}
            dataSectionData={dataSectionData}
            whoWeWorkWithData={whoWeWorkWithData}
            solutionsData={solutionsData}
            homePageSettings={homePageSettings}
            siteSettings={siteSettings}
        />
    );
}
