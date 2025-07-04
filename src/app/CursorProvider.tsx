"use client";

import { useEffect, useState } from "react";
import Cursor from "@/components/Cursor";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setShowCursor(isFinePointer);
  }, []);

  return (
    <>
      {showCursor && <Cursor />}
      {children}
    </>
  );
}
