import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gv.consulting'),
  title: {
    default: "GrowValley Consulting",
    template: "%s | GrowValley Consulting"
  },
  description:
    "Strategy, capital, and execution under one accountable advisory system. The strategy and advisory arm of the GrowValley ecosystem.",
  keywords: [
    "Strategy Consulting",
    "Capital Advisory",
    "Innovation Advisory",
    "PMO",
    "Family Office Setup",
    "Growth Advisory",
    "GrowValley Consulting",
    "GrowValley Group",
  ],
  authors: [{ name: "GrowValley Consulting" }],
  creator: "GrowValley Consulting",
  publisher: "GrowValley Consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gv.consulting",
    siteName: "GrowValley Consulting",
    title: "GrowValley Consulting",
    description:
      "Strategy. Capital. Execution. One accountable advisory system across growth, capital, innovation, PMO, and family office.",
    images: [
      {
        url: "/images/growvalleyworks.png",
        width: 1200,
        height: 630,
        alt: "GrowValley Consulting — Strategy. Capital. Execution.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowValley Consulting",
    description:
      "Strategy, capital, and execution under one accountable advisory system.",
    images: ["/images/growvalleyworks.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
