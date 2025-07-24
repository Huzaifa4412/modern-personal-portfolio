"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import React from "react";

const AboutMeText = () => {
  const textRef = React.useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    const splitText = new SplitText(textRef.current, { type: "words" });

    gsap.fromTo(
      splitText.words,
      {
        color: "#444",
        opacity: 0.4,
        y: 20,
      },
      {
        color: "#fff",
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%",
          end: "bottom 50%",
          scrub: 1,
        },
      },
    );
  }, []);

  const text = `Hi, I'm Huzaifa Mukhtar. As a designer and developer, I bring ideas to life through code. I'm passionate about exploring the intersection of technology and design, and leveraging AI and automation to create innovative solutions. Currently, I'm learning Python and expanding my skills in machine learning and data science. Let's connect and share our passion for creativity and technological advancement.`;

  return (
    <div className="min-h-screen w-full relative">
      {/* Emerald Void */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
        }}
      />
      <div className="relative min-h-[100vh] flex items-center justify-center text-[clamp(30px,6vw,60px)] text-white">
        <div
          ref={textRef}
          className="container py-10 font-medium select-none [&>span]:mr-[10px] [&>span]:inline-block [&>span]:transform [&>span]:text-[#444] [&>span]:transition-all"
        >
          {text}
        </div>
      </div>
    </div>

  );
};

export default AboutMeText;
