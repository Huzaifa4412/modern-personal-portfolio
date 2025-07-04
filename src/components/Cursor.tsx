"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const follower = followerRef.current!;

    // 🧠 Shift both to center
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const animateFollower = () => {
      posX += (mouseX - posX) / 6;
      posY += (mouseY - posY) / 6;
      gsap.set(follower, {
        x: posX,
        y: posY,
      });
      requestAnimationFrame(animateFollower);
    };

    animateFollower();
    document.addEventListener("mousemove", moveCursor);

    // Hover Scale Effects
    const interactive = document.querySelectorAll("a, button, .cursor-hover");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 2, duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, duration: 0.3 });
      });
    });

    // Click Feedback
    const handleClick = () => {
      gsap.fromTo(
        follower,
        { scale: 2 },
        { scale: 1.5, duration: 0.2, ease: "power2.out" },
      );
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      {/* Dot Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-[#14CF93] mix-blend-difference"
      />

      {/* Follower */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border-2 border-[#14CF93] mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;
