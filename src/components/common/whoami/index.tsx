"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedCurvedText from "./curved-text";
import {
  PATH_LENGTH_SCROLL_INTERVAL,
  FILL_SCROLL_INTERVAL,
  FILL_COLOR_FROM,
  FILL_COLOR_TO,
  PATH_STROKE_COLOR,
  PATH_STROKE_WIDTH,
} from "./constants";

export default function WhoAmISection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathLength = useTransform(scrollYProgress, PATH_LENGTH_SCROLL_INTERVAL, [0, 1]);
  const fill = useTransform(scrollYProgress, FILL_SCROLL_INTERVAL, [FILL_COLOR_FROM, FILL_COLOR_TO]);
  const circleScale = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div ref={ref} className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      <motion.svg
        className="absolute right-4 lg:right-[15%] top-[5%] w-24 md:w-[220px] lg:w-[260px] h-auto scale-y-[-1] scale-x-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="-1.8 -9.3 503.5 337.6"
      >
        <motion.path
          d="M212.84,297.52c-38.42-12.95-31.28-61.74-23.98-92.97c7.61-39.73,24.72-78.13,24.2-119.05 c0.21-21.57-3.16-59.76-33.57-53.12c-35.35,8.83-65.56,31.81-90.64,57.52C70.57,109.69,53,130.23,37.48,152.27 c-5.87,7-7.48,18.03-16.3,22.03c-10.36,4.67-22.95-4.82-20.98-16.09c4.43-16.54,16.35-30.07,26.23-43.7 c22.93-28.92,46.9-57.89,76.98-79.66c28.94-19.5,67.2-44.12,103.15-31.29c21.46,8.44,33.56,30.91,36.38,52.89 c10.65,59.72-17.12,115.87-26.34,173.78c-11.85,98.05,65.86-29.68,81.42-51.64c16.41-24.03,34.02-47.27,52.94-69.38 c23.46-26.77,55.26-65.27,91.08-73.33c13.55-2.23,26.88,4.5,36.42,13.75c19.12,19.82,19.7,49.81,21.21,75.76 c2.01,35.51-6.1,70.49-6.26,105.94c-0.95,12.14,0.54,24.44-0.37,36.48c-2.47,11.64-17.81,16.39-26.02,7.46 c-9.69-10.36-4.03-34.09-4.8-47.86c0.46-25.17,4.75-50.01,6.92-75.04c0.06-19.82,4.95-80.77-19.89-85.24 c-12.7,1.96-22.64,12.07-32.61,19.53c-36.4,33.08-66.28,72.8-94.26,113.07C297.26,232.09,261.47,309.68,212.84,297.52z"
          stroke={PATH_STROKE_COLOR}
          strokeWidth={PATH_STROKE_WIDTH}
          fill={fill}
          style={{ pathLength }}
        />
      </motion.svg>
      <div className="relative h-full w-full flex items-center justify-center">
        <motion.div style={{ scale: circleScale }} className="w-[85%] h-[40%] lg:w-[45%] lg:h-5/6 rounded-full bg-secondary" />
        <AnimatedCurvedText />
      </div>
    </div>
  );
}
