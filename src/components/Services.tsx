"use client";

import { mazius } from "@/font";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
  useGSAP(() => {
    const elements = document.querySelectorAll(".elms");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el.children[1], { opacity: 1, duration: 0.5 });
      });
      el.addEventListener("mousemove", (event: Event) => {
        const mouseEvent = event as MouseEvent;
        gsap.to(el.children[1], {
          x: mouseEvent.clientX,
          //   y: mouseEvent.clientY,
          duration: 0.5,
          ease: "power3.out",
        });
      });
      el.addEventListener("mouseleave", () => {
        el.addEventListener("mousemove", (event: Event) => {
          const mouseEvent = event as MouseEvent;
          gsap.to(el.children[1], {
            x: mouseEvent.clientX,
            //   y: mouseEvent.clientY,
            duration: 0.5,
            ease: "power3.out",
          });
        });
        gsap.to(el.children[1], { opacity: 0, duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="main h-auto w-full bg-zinc-800">
      <h2 className={clsx("container mb-20 text-8xl text-white")}>
        My{" "}
        <span className={clsx("text-[#14CF93]", mazius.className)}>
          Services
        </span>
      </h2>
      <div className="main relative container divide-y divide-white text-5xl [&>div]:flex [&>div]:h-[200px] [&>div]:items-center [&>div]:justify-start [&>div]:text-white">
        <div className="elms overflow-hidden [&>img]:absolute">
          <h3>SEO Optimization</h3>
          <Image
            src={"/khizar-services/img1.jpeg"}
            alt="seo"
            className="h-[200px] w-[200px] !-translate-x-[150%] rounded-full object-cover opacity-0"
            width={200}
            height={200}
          />
        </div>
        <div className="elms overflow-hidden [&>img]:absolute">
          <h3>Web Development</h3>
          <Image
            src={"/khizar-services/img2.jpeg"}
            alt="seo"
            className="h-[200px] w-[200px] !-translate-x-[150%] rounded-full object-cover opacity-0"
            width={200}
            height={200}
          />
        </div>

        <div className="elms overflow-hidden [&>img]:absolute">
          <h3>Graphic Design</h3>
          <Image
            src={"/khizar-services/img3.jpeg"}
            alt="seo"
            className="h-[200px] w-[200px] !-translate-x-[150%] rounded-full object-cover opacity-0"
            width={200}
            height={200}
          />
        </div>

        <div className="elms overflow-hidden [&>img]:absolute">
          <h3>AI & Automation</h3>
          <Image
            src={"/khizar-services/img4.jpeg"}
            alt="seo"
            className="h-[200px] w-[200px] !-translate-x-[150%] rounded-full object-cover opacity-0"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
