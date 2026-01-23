"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "../types";
import { motion, useAnimate } from "motion/react";

const PeerlistIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      if (!scope.current) return;
      await animate(
        ".peerlist-icon",
        { x: [0, -1.5, 1.5, -1.5, 1.5, 0], scale: 1.4 },
        { duration: 0.6, ease: "easeInOut" },
      );
    }, [animate, scope]);

    const stop = useCallback(() => {
      if (!scope.current) return;
      animate(
        ".peerlist-icon",
        { x: 0, scale: 1.4 },
        { duration: 0.2, ease: "easeOut" },
      );
    }, [animate, scope]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={`${className}`}
      >
        <motion.g 
          className="peerlist-icon" 
          style={{ transformOrigin: "center" }} 
          initial={{ scale: 1.4 }}
          transform="translate(0, 0) scale(1.4)"
        >
          <title>Peerlist</title>
          <path
            d="M14.25 16.49a6.097 6.097 0 0 1 -2.442 0.59v2.706H10.45v0.357H6.429V5.57h0.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262 0 2.852 -1.981 5.26 -4.68 6.013zm-1.788 -8.728H10.45v5.428h2.011c1.532 0 2.802 -1.2 2.802 -2.714s-1.27 -2.714 -2.802 -2.714zm0.901 4.351c0.117 -0.239 0.186 -0.502 0.186 -0.78 0 -1.01 -0.855 -1.857 -1.945 -1.857h-0.296V8.62h1.154c1.09 0 1.945 0.847 1.945 1.857 0 0.705 -0.422 1.323 -1.044 1.637zm4.104 1.493c0.043 -0.063 0.083 -0.129 0.123 -0.194a5.653 5.653 0 0 0 0.526 -1.103 5.56 5.56 0 0 0 0.11 -0.362c0.02 -0.076 0.042 -0.15 0.06 -0.227a5.58 5.58 0 0 0 0.073 -0.41c0.01 -0.068 0.025 -0.134 0.032 -0.203 0.024 -0.207 0.038 -0.417 0.038 -0.63 0 -3.198 -2.687 -5.763 -5.967 -5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747 -0.488 3.778 -1.303a5.92 5.92 0 0 0 0.46 -0.406c0.035 -0.034 0.066 -0.07 0.1 -0.105 0.107 -0.11 0.21 -0.22 0.308 -0.337 0.044 -0.053 0.084 -0.108 0.126 -0.162 0.081 -0.104 0.16 -0.21 0.233 -0.319zm-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905 -5.11 4.905z"
            fill="currentColor"
            strokeWidth="1"
          />
        </motion.g>
      </motion.svg>
    );
  },
);

PeerlistIcon.displayName = "PeerlistIcon";
export default PeerlistIcon;
