"use client";

import { useState, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import { useBreakpointValue } from "@/hooks/useBreakpointValue";

export default function AnimatedCurvedText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ryEnd = useBreakpointValue({
    xs: 215,
    sm: 215,
    md: 215,
    lg: 275,
    xl: 275,
    "2xl": 275,
  }) || 215;

  const rxEnd = useBreakpointValue({
    xs: 210,
    sm: 210,
    md: 210,
    lg: 260,
    xl: 260,
    "2xl": 260,
  }) || 210;

  const ryMotion = useTransform(scrollYProgress, [0, 0.5], [0, ryEnd]);
  const rxMotion = useTransform(scrollYProgress, [0, 0.5], [194, rxEnd]);
  const dyMotion = useTransform(scrollYProgress, [0, 0.5], [64, 23]);
  const opacityMotion = useTransform(scrollYProgress, [0, 1], [0, 2.5]);

  const [ryValue, setRyValue] = useState(0);
  const [rxValue, setRxValue] = useState(194);
  const [dyValue, setDyValue] = useState(64);
  const [opacityValue, setOpacityValue] = useState(0);

  const cxValue = useBreakpointValue({
    xs: 230,
    sm: 230,
    md: 230,
    lg: 290,
    xl: 320,
    "2xl": 350,
  });

  // Para el ancho del ReactCurvedText:
  // Mobile (<lg): "100vw", Desktop (lg+): "50vw"
  const textWidthValue = useBreakpointValue({
    xs: "100vw",
    sm: "100vw",
    md: "100vw",
    lg: "50vw",
    xl: "50vw",
    "2xl": "50vw",
  });

  useMotionValueEvent(ryMotion, "change", (latest) => setRyValue(latest));
  useMotionValueEvent(rxMotion, "change", (latest) => setRxValue(latest));
  useMotionValueEvent(dyMotion, "change", (latest) => setDyValue(latest));
  useMotionValueEvent(opacityMotion, "change", (latest) => setOpacityValue(latest));

  return (
    <div ref={ref} className="absolute top-12 left-0 lg:left-1/4">
      <ReactCurvedText
        width={textWidthValue || "100vw" as any}
        height={"50vh" as any}
        cx={cxValue || 320}
        cy={342}
        rx={rxValue}
        ry={ryValue}
        reversed={true}
        text="¿Quién soy?"
        textProps={{
          className:
            "font-[bryndan] fill-[#f75732] font-medium text-4xl lg:text-7xl",
          style: { opacity: opacityValue },
        }}
        tspanProps={{ dy: dyValue }}
      />
    </div>
  );
}
