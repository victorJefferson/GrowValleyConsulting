import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { FloatingContact } from "../../components/ui/FloatingContact";
import { TrustGuard } from "trust-guard-js";
import { trustGuardConfig } from "../../trustguard.config";
import { siteConfig } from "../../config/siteConfig";
import { MaintenanceMode } from "../../components/ui/MaintenanceMode";

import { client } from "../../lib/sanity";
import { siteSettingsQuery } from "../../lib/queries";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (siteConfig.maintenanceMode) {
    return <MaintenanceMode />;
  }

  let siteSettings = null;
  try {
    siteSettings = await client.fetch(siteSettingsQuery);
  } catch (e) {
    console.error("Error fetching site settings:", e);
  }

  return (
    <TrustGuard config={trustGuardConfig}>
      <Navbar settings={siteSettings} />
      <main className="siteWrapper">
        {children}
      </main>
      <Footer settings={siteSettings} />
      <FloatingContact />
    </TrustGuard>
  );
}
