"use client";

import PreLoading from "@/components/PreLoading";
import React, { useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  if (loading) {
    return (
      <>
        <PreLoading />
      </>
    );
  }
};

export default Loader;
