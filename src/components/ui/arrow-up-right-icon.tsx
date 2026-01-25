"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowUpRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      animate(
        ".arrow-line",
        { x: 2, y: -2 },
        { duration: 0.2, ease: "easeOut" },
      );

      animate(
        ".arrow-head",
        { x: 2, y: -2 },
        { duration: 0.2, ease: "easeOut" },
      );
    }, [animate]);

    const stop = useCallback(async () => {
      animate(
        ".arrow-line, .arrow-head",
        { x: 0, y: 0 },
        { duration: 0.2, ease: "easeInOut" },
      );
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <motion.path
          d="M7 7h10v10"
          className="arrow-head"
          style={{ transformOrigin: "50% 50%" }}
        />
        <motion.path
          d="M7 17L17 7"
          className="arrow-line"
          style={{ transformOrigin: "50% 50%" }}
        />
      </motion.svg>
    );
  },
);

ArrowUpRightIcon.displayName = "ArrowUpRightIcon";
export default ArrowUpRightIcon;
