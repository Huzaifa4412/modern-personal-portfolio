"use client";

import { mazius } from "@/font";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Service {
  title: string;
  img: string;
}

const services: Service[] = [
  { title: "SEO Optimization", img: "img1.jpeg" },
  { title: "Web Development", img: "img2.jpeg" },
  { title: "Graphic Design", img: "img3.jpeg" },
  { title: "AI & Automation", img: "img4.jpeg" },
];

const Services: React.FC = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".elms");

    services.forEach((_, index) => {
      const el = elements[index];
      const img = imageRefs.current[index];

      if (!el || !img) return;

      const moveImage = (x: number) => {
        const rect = el.getBoundingClientRect();
        const relativeX = x - rect.left;
        gsap.to(img, {
          x: relativeX - img.clientWidth / 2,
          duration: 0.4,
          ease: "circ.in",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(img, { opacity: 1, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(img, { opacity: 0, duration: 0.3 });
      };

      const handleMouseMove = (e: MouseEvent) => {
        moveImage(e.clientX);
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          moveImage(e.touches[0].clientX);
        }
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("touchstart", handleMouseEnter);
      el.addEventListener("touchmove", handleTouchMove);
      el.addEventListener("touchend", handleMouseLeave);

      return () => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("touchstart", handleMouseEnter);
        el.removeEventListener("touchmove", handleTouchMove);
        el.removeEventListener("touchend", handleMouseLeave);
      };
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
        {services.map((service, index) => (
          <div key={index} className="elms relative overflow-hidden">
            <h3>{service.title}</h3>
            <Image
              ref={(el) => (imageRefs.current[index] = el)}
              src={`/khizar-services/${service.img}`}
              alt={service.title}
              width={200}
              height={200}
              className="pointer-events-none absolute top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full object-cover opacity-0 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
