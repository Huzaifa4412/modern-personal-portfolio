// hooks/useLenis.tsx
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        // ✅ Update GSAP ScrollTrigger on Lenis scroll
        lenis.on("scroll", ScrollTrigger.update);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // ✅ Auto-smooth Anchor Links (#section)
        const links: NodeListOf<HTMLAnchorElement> =
            document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
            link.addEventListener("click", (e: MouseEvent) => {
                const href = link.getAttribute("href");
                if (!href) return;

                const target = document.querySelector<HTMLElement>(href);
                if (target) {
                    e.preventDefault();
                    lenis.scrollTo(target);
                }
            });
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
