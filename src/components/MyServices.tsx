"use client";

import React, { useLayoutEffect, useRef, useState, useCallback } from "react";
import { mazius } from "@/font";
import { serviceData } from "@/constants/serviceData";
import clsx from "clsx";
import ServiceCard from "@/components/service-card";
import { motion, PanInfo, useMotionValue } from "framer-motion";

const MyServices = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Motion value for smooth dragging
  const x = useMotionValue(0);

  // ✅ Memoized width calculation function
  const calculateWidth = useCallback(() => {
    if (carouselRef.current) {
      const totalScrollWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      const maxScroll = Math.max(0, totalScrollWidth - visibleWidth);
      setScrollWidth(maxScroll);
    }
  }, []);

  // ✅ useLayoutEffect ensures accurate width calculation before paint
  useLayoutEffect(() => {
    calculateWidth(); // Run immediately on mount

    // Add resize observer for better performance
    const resizeObserver = new ResizeObserver(calculateWidth);
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    // Fallback resize listener
    window.addEventListener("resize", calculateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateWidth);
    };
  }, [calculateWidth]);

  // ✅ Drag handlers for better control
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(false);
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    // Optional: Add custom drag behavior here
  };

  return (
    <div className="container h-full w-full py-20">
      <h2 className="text-7xl text-white">
        My{" "}
        <span className={clsx("text-[#14CF93]", mazius.className)}>
          Services
        </span>
      </h2>

      <div className="mt-20 overflow-hidden">
        <motion.div
          ref={carouselRef}
          className={clsx(
            "services flex w-full flex-nowrap items-center justify-start gap-10",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          )}
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: scrollWidth > 0 ? -scrollWidth : 0,
            right: 0,
          }}
          dragElastic={0.2}
          dragMomentum={true} // Enable momentum for smoother feel
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrag={handleDrag}
          whileDrag={{
            scale: 0.98, // ✅ Subtle scale effect while dragging
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 400,
          }}
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
    </div>
  );
};

export default MyServices;
