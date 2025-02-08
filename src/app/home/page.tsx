"use client";

import React, { useCallback, useEffect } from "react";
import ParallaxPage from "@/components/common/parallax-banner";
import { motion } from "framer-motion";
import WhoAmISection from "@/components/common/whoami";

const HomePage = () => {
  const scrollToHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [scrollToHash]);

  return (
    <div className="snap-y snap-mandatory overflow-y-visible scroll-smooth">
      <section
        id="home"
        className="snap-start flex items-center justify-center"
      >
        <ParallaxPage />
      </section>
      <motion.section
        id="quien-soy"
        className="snap-start snap-mandatory h-screen flex items-center justify-center bg-gray-100"
      >
        <WhoAmISection />
      </motion.section>
    </div>
  );
};

export default HomePage;
