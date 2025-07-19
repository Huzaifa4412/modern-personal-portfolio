'use client'

import React from "react";
import { mazius } from "@/font";
import { serviceData } from "@/constants/serviceData";
import clsx from "clsx";
import ServiceCard from "@/components/service-card";
import { motion } from "framer-motion";

const MyServices = () => {
  return (
    <>
      <div className={"container h-full w-full py-20"}>
        <h2 className={"text-8xl text-white"}>
          My{" "}
          <span className={clsx("text-[#14CF93]", mazius.className)}>
            Services
          </span>
        </h2>
        <motion.div
            className="services mt-20 flex w-full flex-nowrap items-center justify-start gap-10 cursor-grab"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }} // left me total scrollable width adjust karo
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
