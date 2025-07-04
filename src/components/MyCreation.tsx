import React from "react";
import { mazius } from "@/font";
import Card from "@/components/RotatingCards";

const MyCreation = () => {
  return (
    <div
      className={
        "relative mt-10 h-full w-full overflow-hidden bg-[#F2F2F2] pt-20"
      }
    >
      <div className="heading container mt-10 w-full">
        <h2 className={"text-8xl"}>
          My{" "}
          <span className={`text-[#14CF93] ${mazius.className}`}>Creation</span>
        </h2>
      </div>

      <div
        className={"flex h-full w-full justify-center"}
        style={{ height: "100vh" }}
      >
        <Card />
      </div>
    </div>
  );
};
export default MyCreation;
