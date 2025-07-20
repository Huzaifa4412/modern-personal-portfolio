"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "@/constants/navItems";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Import GSAP dynamically
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");

      // Initial animation for navbar
      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        );
      }

      // Stagger animation for nav links
      const validLinks = navLinksRef.current.filter((link) => link !== null);
      if (validLinks.length > 0) {
        gsap.fromTo(
          validLinks,
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out",
          },
        );
      }

      // Hover animations
      navLinksRef.current.forEach((link) => {
        if (link && link instanceof HTMLElement) {
          const handleMouseEnter = () => {
            gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power2.out" });
          };

          const handleMouseLeave = () => {
            gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
          };

          link.addEventListener("mouseenter", handleMouseEnter);
          link.addEventListener("mouseleave", handleMouseLeave);

          // Cleanup function
          return () => {
            link.removeEventListener("mouseenter", handleMouseEnter);
            link.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
      });
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");

      if (isMobileMenuOpen && mobileMenuRef.current) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" },
        );

        if (mobileMenuRef.current.children.length > 0) {
          gsap.fromTo(
            mobileMenuRef.current.children,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 },
          );
        }
      } else if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    };

    loadGSAP();
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = async () => {
    const { gsap } = await import("gsap");

    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => setIsMobileMenuOpen(false),
      });
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white/95 shadow-lg backdrop-blur-sm"
    >
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex items-center justify-between px-6 py-4 text-lg font-medium lg:px-15 lg:py-10 lg:text-xl">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                ref={(el: HTMLAnchorElement | null) => {
                  navLinksRef.current[index] = el;
                }}
                className={`cursor-pointer text-zinc-900 transition-colors duration-300 hover:text-[#14CF93] ${styles.navLink}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="w-[50%] text-xl font-bold">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              className="h-auto w-full rounded-full bg-blend-difference"
              width={50}
              height={50}
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-zinc-900 transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`overflow-hidden border-t border-gray-200 bg-white ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          style={{ height: isMobileMenuOpen ? "auto" : 0 }}
        >
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-100 last:border-b-0"
              >
                <Link
                  href={item.href}
                  className={`block px-6 py-4 text-lg font-medium text-zinc-900 transition-all duration-300 hover:bg-gray-50 hover:text-[#14CF93] ${styles.navLink}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
