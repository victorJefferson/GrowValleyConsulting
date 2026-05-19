"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.scss";
import { Button } from "../ui/Button";
import { Menu as MenuIcon, X, Mail, ArrowRight } from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

import { features } from "@/config/features";

export function Navbar({ settings }: { settings?: any }) {
  const fallbackNavLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about-us",
      children: [
        { name: "About GrowValley Consulting", href: "/about-us", description: "The strategy and advisory arm of the GrowValley ecosystem." },
        { name: "Team", href: "/about-us/team", description: "Senior advisors with deep operating experience across strategy, capital, and execution." },
        { name: "Leadership", href: "/about-us/leadership", description: "Decades of experience leading strategy, capital advisory, and innovation programs." },
      ]
    },
    {
      name: "Our Capabilities",
      href: "/our-capabilities",
      children: [
        { name: "Growth Advisory", href: "/our-capabilities/growth-advisory", description: "Strategy, performance, and governance for established businesses." },
        { name: "Capital Advisory", href: "/our-capabilities/capital-advisory", description: "Investment readiness, structuring, and transaction preparation." },
        { name: "Innovation Advisory", href: "/our-capabilities/innovation-advisory", description: "Venture studios, innovation engines, and next-generation product builds." },
        { name: "Project Advisory", href: "/our-capabilities/project-advisory", description: "Enterprise-grade project management systems for visibility, accountability, and delivery across your portfolio." },
        { name: "Family Office Advisory", href: "/our-capabilities/family-office-advisory", description: "Structure, governance, and generational discipline — governance frameworks, investment operating models, and foundations for wealth across generations." },
      ]
    },
    { name: "Expertise", href: "/expertise" },
    ...(features.insights ? [{ name: "Insights", href: "/insights" }] : []),
    {
      name: "Partner With Us",
      href: "/partner-with-us",
    },
    {
      name: "Careers",
      href: "/join-us/careers",
    },
  ];

  const cmsNav = settings?.mainNavigation;
  const navLinks =
    Array.isArray(cmsNav) && cmsNav.length > 0 ? cmsNav : fallbackNavLinks;
  const pathname = usePathname();

  return (
    <Disclosure as="header" className={styles.header}>
      {({ open, close }) => (
        <>
          <div className={`container ${styles.navContainer}`}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/gv-logo-white.png"
                  alt="GrowValley Consulting Logo"
                  width="160"
                  height="60"
                  className={styles.logoImage}
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className={styles.links}>
              {navLinks.map((link: any) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                const forceSinglePage =
                  link.href === "/partner-with-us" || link.href === "/join-us/careers";
                if (link.children && !forceSinglePage) {
                  return (
                    <Popover key={link.name} className={styles.popover}>
                      {({ open, close }) => (
                        <>
                          <PopoverButton
                            className={`${styles.popoverTrigger} ${isActive ? styles.active : ""} ${open ? styles.open : ""}`}
                          >
                            {link.name}
                            <ChevronDown size={14} className={styles.chevron} />
                          </PopoverButton>

                          <PopoverPanel transition className={styles.megaMenu}>
                            <div className={`container ${styles.megaMenuContent}`}>
                              {link.description ? (
                                <>
                                  {/* LEFT SIDE: Parent Title, Intro, and Overview Link */}
                                  <div className={styles.megaMenuLeft}>
                                    <div className={styles.megaMenuHeader}>
                                      <h3>{link.name}</h3>
                                      <p>{link.description}</p>
                                      <Link href={link.href} className={styles.overviewLink} onClick={() => close()} prefetch={false}>
                                        View Overview <ArrowRight size={16} />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className={styles.megaMenuDivider}></div>

                                  {/* RIGHT SIDE: Sub-links Grid */}
                                  <div className={styles.megaMenuGrid}>
                                    {link.children.map((child: any) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className={styles.megaMenuItem}
                                        onClick={() => close()}
                                        prefetch={false}
                                      >
                                        <div className={`${styles.megaMenuItemLabel} ${child.isFeatured ? styles.isFeatured : ""}`}>
                                          {child.name}
                                        </div>
                                        <div className={styles.megaMenuItemDesc}>{child.description}</div>
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                /* Standard Grid Layout (No Intro) */
                                <div className={`${styles.megaMenuGrid} ${styles.fullWidth}`}>
                                  {link.children.map((child: any) => (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      className={styles.megaMenuItem}
                                      onClick={() => close()}
                                      prefetch={false}
                                    >
                                      <div className={`${styles.megaMenuItemLabel} ${child.isFeatured ? styles.isFeatured : ""}`}>
                                        {child.name}
                                      </div>
                                      <div className={styles.megaMenuItemDesc}>{child.description}</div>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={isActive ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.desktopCta}>
              <Link href="/contact">
                <Button size="sm">Contact Us</Button>
              </Link>
            </div>

            <div className={styles.mobileActions}>
              <Link href="/contact" className={styles.mobileContactBtn}>
                <Mail size={20} strokeWidth={1.5} />
              </Link>

              {/* Mobile Menu Toggle */}
              <DisclosureButton className={styles.hamburger}>
                <span className="sr-only">
                  {open ? "Close menu" : "Open menu"}
                </span>
                {open ? (
                  <X size={28} color="var(--color-primary-navy)" />
                ) : (
                  <div className={styles.vistraHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Dropdown Nav */}
          <DisclosurePanel className={styles.mobileNav}>
            <nav className={styles.mobileLinks}>
              {navLinks.map((link: any) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                const forceSinglePage =
                  link.href === "/partner-with-us" || link.href === "/join-us/careers";
                if (link.children && !forceSinglePage) {
                  return (
                    <Disclosure key={link.name} as="div" className={styles.mobileSubmenu}>
                      {({ open }) => (
                        <>
                          <DisclosureButton className={`${styles.mobileSubmenuTrigger} ${isActive ? styles.active : ""}`}>
                            {link.name}
                            <ChevronDown size={20} className={`${styles.chevron} ${open ? styles.rotate : ""}`} />
                          </DisclosureButton>
                          <DisclosurePanel className={styles.mobileSubmenuPanel}>
                            {link.children.map((child: any) => (
                              <Link key={child.name} href={child.href} onClick={() => close()}>
                                <DisclosureButton as="span" className={styles.mobileSubLink}>
                                  <div className={styles.subLinkLabel}>{child.name}</div>
                                  <div className={styles.subLinkDesc}>{child.description}</div>
                                </DisclosureButton>
                              </Link>
                            ))}
                            {link.href !== "/our-capabilities" ? (
                              <Link href={link.href} onClick={() => close()}>
                                <DisclosureButton as="span" className={styles.mobileOverviewLink}>
                                  {link.name} Overview <ArrowRight size={16} />
                                </DisclosureButton>
                              </Link>
                            ) : null}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  );
                }

                return (
                  <Link key={link.name} href={link.href} onClick={() => close()}>
                    <DisclosureButton
                      as="span"
                      className={isActive ? styles.active : ""}
                    >
                      {link.name}
                    </DisclosureButton>
                  </Link>
                );
              })}
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
