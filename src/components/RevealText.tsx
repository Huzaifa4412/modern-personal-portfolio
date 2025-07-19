"use client";

import { TextReveal } from "@/utils/animate";
import React, { useEffect, useRef } from "react";

const RevealText = ({
  children,
  ParentClass,
  childClass,
}: {
  children: React.ReactNode;
  ParentClass?: string;
  childClass?: string;
}) => {
  const childRef = useRef(null);
  useEffect(() => {
    if (!childRef.current) return;
    TextReveal(childRef?.current);
  }, []);

  return (
    <span className={`parent block overflow-hidden font-medium ${ParentClass}`}>
      <span ref={childRef} className={`text-reveal child block ${childClass} `}>
        {children}
      </span>
    </span>
  );
};

export default RevealText;
