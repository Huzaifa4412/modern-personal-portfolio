"use client";

import { mazius } from "@/font";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Animate the image container rotation
      gsap.fromTo(
        imageRef.current,
        { rotate: -10 },
        {
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "50% 50%",
            scrub: 2,
          },
        },
      );
    },
    { scope: containerRef }, // ensures cleanup + GSAP isolation
  );

  return (
    <div
      ref={containerRef}
      className="container my-25 flex h-[80vh] w-full flex-col items-center justify-between lg:flex-row"
    >
      <div className="content w-full lg:w-1/2">
        <h2 className="text-4xl font-bold text-zinc-800 uppercase md:text-5xl">
          I am Huzaifa Mukhtar. I create{" "}
          <span className={`text-[#14CF93] ${mazius.className} capitalize`}>
            unconventional
          </span>{" "}
          yet functional & visually pleasing interfaces for the web and AI.
        </h2>
      </div>

      <div
        ref={imageRef}
        className="images relative mt-10 flex h-full w-full rotate-[-10deg] items-center justify-center"
      >
        <Image
          src="/images/hero-images/1.jpeg"
          alt="about-me"
          className="absolute top-1/2 left-1/2 h-[400px] w-[300px] -translate-x-[60%] -translate-y-[55%] rotate-[-13.7972deg] rounded-3xl grayscale transition duration-300 hover:grayscale-0 lg:h-[600px] lg:w-[400px]"
          width={600}
          height={600}
        />
        <Image
          src="/images/hero-images/2.jpeg"
          alt="about-me"
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-[45%] -translate-y-[45%] rotate-[-7.7972deg] rounded-3xl grayscale transition duration-300 hover:grayscale-0 lg:h-[600px] lg:w-[300px]"
          width={600}
          height={600}
        />
        <Image
          src="/images/hero-images/3.jpeg"
          alt="about-me"
          className="absolute top-1/2 left-1/2 h-[400px] w-[300px] -translate-x-[15%] -translate-y-[35%] rotate-0 rounded-3xl grayscale transition duration-300 hover:grayscale-0 lg:h-[600px] lg:w-[400px]"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default AboutMe;
