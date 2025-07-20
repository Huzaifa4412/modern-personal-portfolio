"use client";

import React, { useEffect, useRef } from "react";
import { mazius } from "@/font";
import { serviceData } from "@/constants/serviceData";
import clsx from "clsx";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";

const MyServices = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setScrollWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <>
      <div className={"container h-full w-full py-20"}>
        <h2 className={"text-7xl text-white"}>
          My{" "}
          <span className={clsx("text-[#14CF93]", mazius.className)}>
            Services
          </span>
        </h2>
        <motion.div
          ref={carouselRef}
          className="services mt-20 flex w-full cursor-grab flex-nowrap items-center justify-start gap-10"
          drag="x"
          dragConstraints={{ left: -scrollWidth, right: 0 }} // left me total scrollable width adjust karo
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
    </>
  );
};
export default MyServices;
