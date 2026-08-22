"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribeToPointerFine(callback: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerPointerFineSnapshot() {
  return false;
}

export function CustomCursor() {
  const isPointerFine = useSyncExternalStore(
    subscribeToPointerFine,
    getPointerFineSnapshot,
    getServerPointerFineSnapshot
  );
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isPointerFine) return;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? -15 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(0,180,255,0.8)]"
      >
        <svg
          width="38"
          height="24"
          viewBox="0 0 100 60"
          className="fill-black stroke-[#00b4ff] stroke-[2.5px]"
        >
          <path d="M 50 10 C 47 4, 44 0, 42 0 C 40 0, 38 4, 36 10 C 27 5, 15 8, 4 18 C -2 24, 0 32, 6 36 C 14 41, 24 36, 30 30 C 35 37, 41 44, 46 48 C 48 50, 49 56, 50 60 C 51 56, 52 50, 54 48 C 59 44, 65 37, 70 30 C 76 36, 86 41, 94 36 C 100 32, 102 24, 96 18 C 85 8, 73 5, 64 10 C 62 4, 60 0, 58 0 C 56 0, 53 4, 50 10 Z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

