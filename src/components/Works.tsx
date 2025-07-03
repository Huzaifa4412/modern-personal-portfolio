"use client";

import React from "react";
import styles from "./Works.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyServices from "./MyServices";

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      ".topPart",
      {
        top: "-100%",
      },
      "same",
    )
      .to(
        ".bottomPart",
        {
          bottom: "-100%",
        },
        "same",
      )
      .to(
        "h1.topH",
        {
          top: "100%",
        },
        "same",
      )
      .to(
        "h1.bottomH",
        {
          bottom: "-150%",
        },
        "same",
      )
      .to(
        ".bottomH",
        {
          height: "200%",
        },
        "same",
      )
      .to(
        ".topH",
        {
          height: 0,
        },
        "same",
      )
      .from(
        ".main-content .services",
        {
          marginTop: "20vw",
          scale: 0,
          filter: 'blur("15px")',
          opacity: 0,
          display: "none",
        },
        "same",
      );
  });

  return (
    <div id="main" className="relative min-h-screen w-full">
      <div className={`${styles.topPart} topPart top-0`}>
        <h2 className={`${styles.topH} topH`}>Gallery</h2>
      </div>
      <div className="content main-content h-screen w-full bg-zinc-800">
        <MyServices />
      </div>
      <div className={`${styles.bottomPart} bottomPart bottom-0`}>
        <h2 className={`${styles.bottomH} bottomH`}>Gallery</h2>
      </div>
    </div>
  );
};

export default Works;
