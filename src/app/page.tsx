import React from "react";
import Loader from "./Loader";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import MyCreation from "@/components/MyCreation";

import AboutMeText from "@/components/AboutMeText";
import Works from "@/components/Works";

const page = () => {
  return (
    <>
      <div className={"h-full w-full overflow-hidden"}>
        <Loader />
        <Navbar />
        <Hero />
        <AboutMe />
        <AboutMeText />
        <Works />
        <MyCreation />
      </div>
    </>
  );
};

export default page;
