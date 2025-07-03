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

  const text = `Hi, I'm Huzaifa Mukhtar. I'm a creative problem solver with a
        passion for building innovative solutions that push the boundaries of
        what's possible. As a designer and developer, I bring ideas to life
        through code. I'm particularly interested in exploring the
        intersection of technology and design, and I'm always looking for
        new ways to leverage AI and automation to create more efficient and
        effective solutions. Currently, I'm learning Python and expanding
        my skills in machine learning and data science. When I'm not
        coding, you can find me exploring new design trends, experimenting with
        novel technologies, or simply enjoying a good cup of coffee. I'm
        excited to share my work and connect with like-minded individuals who
        share my passion for creativity, innovation, and technological
        advancement.`;

  return (
    <div className="min-h-[100vh] bg-[#0f0f0f] text-[clamp(30px,6vw,60px)] text-white">
      <div
        ref={textRef}
        className="container py-10 font-medium select-none [&>span]:mr-[10px] [&>span]:inline-block [&>span]:transform [&>span]:text-[#444] [&>span]:transition-all"
      >
        {text}
      </div>
    </div>
  );
};

export default AboutMeText;
