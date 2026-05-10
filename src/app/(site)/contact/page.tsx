import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Us | GrowValley Consulting"
    },
    description:
        "Get in touch with GrowValley Consulting for strategy, capital advisory, innovation programs, PMO, and family office setup.",
    openGraph: {
        title: "Contact Us | GrowValley Consulting",
        description: "Connect with the GrowValley Consulting team.",
        url: "https://gv.consulting/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
