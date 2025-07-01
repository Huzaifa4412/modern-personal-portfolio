import React from "react";
import Loader from "./Loader";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";

const page = () => {


  return (
    <div>
      <Loader />
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
};

export default page;
