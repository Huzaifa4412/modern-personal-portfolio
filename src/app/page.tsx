import React from "react";
import Loader from "./Loader";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
// import MyCreation from "@/app/MyCreation";
// import MyServices from "@/components/MyServices";

const page = () => {
  return (
    <>
      <div className={"h-full w-full overflow-hidden"}>
        <Loader />
        <Navbar />
        <Hero />
        <AboutMe />
        {/* <MyCreation /> */}
        {/* <MyServices /> */}
      </div>
    </>
  );
};

export default page;
