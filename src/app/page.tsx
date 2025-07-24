import React from "react";
import Loader from "./Loader";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
// import MyCreation from "@/components/MyCreation";

import AboutMeText from "@/components/AboutMeText";
import Works from "@/components/Works";
import Services from "@/components/Services";
import MyProjects from "@/components/my-projects";

const page = () => {
  return (
    <>
      <div className={"h-full w-full overflow-hidden"}>
        <div className="relative min-h-screen w-full bg-white">
          {/* Magenta Orb Grid Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "white",
              backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
              backgroundSize: "40px 40px, 40px 40px, 100% 100%",
            }}
          />
          {/* Your Content/Components */}
          <Loader />
          <Navbar />
          <Hero />
          <AboutMe />
          <AboutMeText />
          <Works />
          <Services />
          <MyProjects />
        </div>
      </div>
    </>
  );
};

export default page;
