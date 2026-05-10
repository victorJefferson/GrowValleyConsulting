import Link from "next/link";

import { ArrowRight } from "lucide-react";
import styles from "./Footer.module.scss";

const SocialLinks = ({ hide = true }: { hide?: boolean }) => {
  if (hide) return null;
  return (
    <div className={styles.socialLinks}>
      {/* X / Twitter */}
      <Link href="#" className={styles.socialIcon} aria-label="X">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </Link>
      {/* LinkedIn */}
      <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </Link>
      {/* YouTube */}
      <Link href="#" className={styles.socialIcon} aria-label="YouTube">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </Link>
    </div>
  );
};

export function Footer({ settings }: { settings?: any }) {
  const fallbackFooterNav = [
    {
      columnTitle: "Our Capabilities",
      links: [
        { name: "Growth Advisory", href: "/our-capabilities/growth-advisory" },
        { name: "Capital Advisory", href: "/our-capabilities/capital-advisory" },
        { name: "Innovation Advisory", href: "/our-capabilities/innovation-advisory" },
        { name: "PMO", href: "/our-capabilities/pmo" },
        { name: "Family Office Setup", href: "/our-capabilities/family-office-setup" },
      ]
    },
    {
      columnTitle: "About Us",
      links: [
        { name: "About GrowValley Consulting", href: "/about-us" },
        { name: "Team", href: "/about-us/team" },
        { name: "Leadership", href: "/about-us/leadership" },
      ]
    },
    {
      columnTitle: "Engage",
      links: [
        { name: "Expertise", href: "/expertise" },
        { name: "Partner With Us", href: "/partner-with-us" },
        { name: "Insights", href: "/insights" },
        { name: "Careers", href: "/join-us/careers" },
        { name: "Contact", href: "/contact" },
      ]
    }
  ];

  const footerNav = settings?.footerNavigation || fallbackFooterNav;
  const footerCopyright = settings?.footerCopyright ||
    "GrowValley Consulting — A subsidiary of GrowValley Group. Strategy. Capital. Execution.";

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Branding & Contact Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoLink}>
            <img
              src="/gv-logo-blue.png"
              alt="GrowValley Consulting Logo"
              width="160"
              height="60"
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.contactCallout}>
            <h3>Got a question?</h3>
            <Link href="/contact" className={styles.enquiryLink}>
              Make an enquiry <ArrowRight size={20} className={styles.arrow} />
            </Link>
          </div>

          <SocialLinks hide={false} />
        </div>

        {/* Navigation Columns */}
        <div className={styles.navGrid}>
          {footerNav.map((column: any, idx: number) => (
            <div key={idx} className={styles.linksCol}>
              <h4>{column.columnTitle}</h4>
              <ul>
                {column.links?.map((link: any, linkIdx: number) => (
                  <li key={linkIdx}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.copyright}>{footerCopyright}</div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
