"use client";

import React, { useEffect } from "react";
import RevealText from "./RevealText";
import { mazius } from "@/font";
import { LoadingAnimation } from "@/utils/animate";
import { TbLoader3 } from "react-icons/tb";

const PreLoading = () => {
  const fullScr = React.useRef(null);
  const elem1 = React.useRef(null);

  useEffect(() => {
    if (!fullScr.current || !elem1.current) return;
    LoadingAnimation(fullScr.current, elem1.current);
  });

  return (
    <div className="main fixed! top-0! left-0! z-[999]! h-screen w-screen">
      <div
        ref={fullScr}
        className="full-screen h-screen w-full bg-zinc-900 text-white"
      >
        <div className="absolute top-[5%] left-1/2 flex -translate-x-1/2 flex-col items-center">
          <RevealText>Design Portfolio</RevealText>
          <h3 className="text-center">
            {" "}
            <RevealText>&copy; {new Date().getFullYear()}</RevealText>
          </h3>
        </div>
        <div className="center-heading absolute top-1/2 -translate-y-1/2">
          <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold md:text-[clamp(3rem,5vw,10rem)] [&>span]:block">
            <RevealText
              ParentClass="w-screen"
              childClass="flex justify-center items-center gap-4"
            >
              <span className="inline-block">Huzzi</span>
              <span
                className={`${mazius.className} inline-block pb-5`}
                style={{ color: "#14CF93" }}
              >
                Byte
              </span>{" "}
              <span className="inline-block">is </span>
              <span className="inline-block">a</span>
            </RevealText>
          </h1>
        </div>

        <div className="loader-icon absolute bottom-[5%] left-1/2 -translate-x-1/2 animate-spin">
          <TbLoader3 size={25} />
        </div>
      </div>
      <div
        ref={elem1}
        className="elem_1 absolute top-full h-0 w-full bg-[#14CF93]"
      ></div>
    </div>
  );
};

export default PreLoading;
