import React from "react";
import { mazius } from "@/font";
import { Card } from "@/components/ServiceCards";
import { serviceData } from "@/constants/serviceData";
import clsx from "clsx";

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
        <div className="services mt-20 flex w-full flex-nowrap items-center justify-evenly gap-10 overflow-x-auto">
          {serviceData.map((service, index) => {
            return <Card key={index} service={service} />;
          })}
        </div>
      </div>
    </>
  );
};
export default MyServices;
