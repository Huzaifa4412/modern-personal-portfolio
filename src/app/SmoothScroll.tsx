// hooks/useLenis.ts
"use client";

import {ReactNode, useEffect} from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ( {children} :{children: ReactNode}) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        lenis.on("scroll", ScrollTrigger.update);
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    return(
        <>
            {children}
        </>
    )
};
