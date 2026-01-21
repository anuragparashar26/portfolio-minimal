"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "../types";
import { motion, useAnimate } from "motion/react";

const MongodbIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      if (!scope.current) return;
      animate(
        ".leaf-left",
        { rotate: [0, -5, 0], x: [0, -1, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
      await animate(
        ".leaf-right",
        { rotate: [0, 5, 0], x: [0, 1, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
    }, [animate, scope]);

    const stop = useCallback(() => {
      if (!scope.current) return;
      animate(
        ".leaf-left, .leaf-right",
        { rotate: 0, x: 0 },
        { duration: 0.2, ease: "easeInOut" },
      );
    }, [animate, scope]);

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
        role="img"
      >
        <title>MongoDB</title>
        <motion.path
          className="leaf-left"
          d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.291-11.375z"
        />
        <motion.path
          className="leaf-right"
          d="M11.491 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.291-11.375-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.49 24z"
        />
      </motion.svg>
    );
  },
);

MongodbIcon.displayName = "MongodbIcon";

export default MongodbIcon;
