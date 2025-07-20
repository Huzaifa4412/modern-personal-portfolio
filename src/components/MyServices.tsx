"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { mazius } from "@/font";
import { serviceData } from "@/constants/serviceData";
import clsx from "clsx";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";

const MyServices = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // ✅ useLayoutEffect ensures accurate width calculation before paint
  useLayoutEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        const totalScrollWidth = carouselRef.current.scrollWidth;
        const visibleWidth = carouselRef.current.offsetWidth;
        setScrollWidth(totalScrollWidth - visibleWidth);
      }
    };

    calculateWidth(); // Run immediately on mount
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  return (
    <div className="container h-full w-full py-20">
      <h2 className="text-7xl text-white">
        My{" "}
        <span className={clsx("text-[#14CF93]", mazius.className)}>
          Services
        </span>
      </h2>

      <motion.div
        ref={carouselRef}
        className="services mt-20 flex w-full cursor-grab flex-nowrap items-center justify-start gap-10 overflow-hidden"
        drag="x"
        dragConstraints={{ left: -scrollWidth, right: 0 }}
      >
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            tags={service.tags}
            story={service.story}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MyServices;
