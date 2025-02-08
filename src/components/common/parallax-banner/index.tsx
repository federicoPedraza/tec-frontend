"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import Particles from "react-tsparticles";
import { starConfigs1, starConfigs2, starParticlesOptions } from "./constants";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function ParallaxPage() {
  const { scrollY } = useViewportScroll();

  // Animaciones para el bloque central (texto y fondo)
  const textY = useTransform(scrollY, [20, 220], [0, -20]);
  const textOpacity = useTransform(scrollY, [20, 220], [1, 0]);

  // Primer pack de estrellas (superior/izquierda)
  const starPack1Opacity = useTransform(scrollY, [20, 220], [1, 0]);
  const starPack1Y = useTransform(scrollY, [50, 250], [0, -40]);

  // Segundo pack de estrellas (inferior/derecha)
  const starPack2Opacity = useTransform(scrollY, [100, 300], [1, 0]);
  const starPack2Y = useTransform(scrollY, [30, 230], [0, 20]);

  // Animación del cangrejo
  const crabY = useTransform(scrollY, [40, 240], [0, -20]);
  const crabOpacity = useTransform(scrollY, [40, 240], [1, 0]);

  return (
    <div className="w-full">
      {/* Contenedor responsivo con distintos aspect ratios */}
      <div className="w-full aspect-[1.05/1.75] sm:aspect-[1.3/1] md:aspect-[1.8/1] lg:aspect-[2/1] xl:aspect-[2.2/1]">
        <ParallaxBanner
          layers={[
            {
              image: "/bg_top.jpg",
              speed: -10,
              scale: [0, 2],
              opacity: [0, 0.75],
            },
            {
              children: (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 lg:gap-8 top-[10%] lg:top-[20%]">
                  {/* Primer pack de estrellas (superior/izquierda) */}
                  <motion.div
                    className="absolute left-[10] lg:left-[16%] top-[4%] lg:top-[8%] block w-32 lg:w-48 h-32 lg:h-48 overflow-visible"
                    style={{ opacity: starPack1Opacity, y: starPack1Y }}
                  >
                    <Particles
                      id="tsparticles1"
                      className="absolute inset-0"
                      options={starParticlesOptions}
                    />
                    {starConfigs1.map((star, index) => (
                      <motion.svg
                        key={`pack1-${index}`}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="17.2 71.8 460.0 382.9"
                        style={{
                          position: "absolute",
                          top: star.top,
                          left: star.left,
                          width: star.width,
                          height: star.height,
                          fill: "white",
                        }}
                        animate={{
                          rotate: star.rotateRange,
                          scale: star.scaleRange,
                        }}
                        transition={{
                          duration: star.duration,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "mirror",
                        }}
                      >
                        <g id="__id0_safigp3nr">
                          <path d="M167.1,75c-0.5-2-2.4-3.2-4.4-2.7c-1.3,0.3-2.4,1.4-2.7,2.7c-6.4,24-22.2,68.3-57,95.4 c-24.2,18.8-52.5,31.8-82.5,37.9c-2,0.4-3.3,2.3-2.9,4.3c0.3,1.4,1.3,2.4,2.6,2.8c24.4,6.8,66.8,21.7,88.3,47 c17,20,32.1,70.1,38.7,94.6c0.6,1.9,2.6,3.1,4.5,2.5c1.2-0.3,2.2-1.3,2.5-2.5c6.8-24.9,24.4-76.4,57.3-98.3 c29.4-19.6,62.1-29.4,80.6-33.8c2-0.5,3.1-2.5,2.6-4.5c-0.3-1.2-1.2-2.2-2.4-2.5c-22.3-6.6-63.8-21.5-80.8-43.8 C185.1,139.5,172.5,97.8,167.1,75z M352,280.5c-0.3-1.2-1.5-1.9-2.7-1.6c-0.8,0.2-1.4,0.8-1.6,1.6c-3.9,14.7-13.6,41.8-34.9,58.3 c-14.8,11.5-32.1,19.4-50.5,23.1c-1.2,0.2-2,1.4-1.7,2.6c0.2,0.8,0.8,1.5,1.6,1.7c14.9,4.2,40.9,13.2,54,28.7 c10.4,12.2,19.6,42.9,23.7,57.9c0.3,1.2,1.6,1.9,2.7,1.6c0.8-0.2,1.3-0.8,1.6-1.6c4.2-15.2,14.9-46.7,35-60.1c18-12,38-18,49.3-20.7 c1.2-0.3,1.9-1.5,1.6-2.7c-0.2-0.8-0.8-1.4-1.5-1.6c-13.7-4.1-39-13.1-49.4-26.8C363,320,355.3,294.5,352,280.5z M425.1,113.3 c-0.2-0.8-1-1.3-1.8-1.1c-0.5,0.1-0.9,0.5-1.1,1.1c-2.6,9.8-9,27.7-23.2,38.7c-9.8,7.6-21.3,12.9-33.5,15.4 c-0.8,0.2-1.3,0.9-1.2,1.7c0.1,0.6,0.5,1,1.1,1.1c9.9,2.8,27.1,8.8,35.9,19.1c6.9,8.1,13,28.5,15.7,38.4c0.2,0.8,1,1.2,1.8,1 c0.5-0.1,0.9-0.5,1-1c2.8-10.1,9.9-31,23.3-39.9c11.9-8,25.2-11.9,32.8-13.7c0.8-0.2,1.3-1,1.1-1.8c-0.1-0.5-0.5-0.9-1-1.1z" />
                        </g>
                      </motion.svg>
                    ))}
                  </motion.div>

                  {/* Segundo pack de estrellas (inferior/derecha) */}
                  <motion.div
                    className="absolute right-[10%] sm:right-[15%] md:right-[20%] lg:right-[20%] bottom-[20%] sm:bottom-[25%] md:bottom-[30%] lg:bottom-1/4 block w-32 sm:w-40 md:w-48 lg:w-48 h-32 sm:h-40 md:h-48 lg:h-48 overflow-visible"
                    style={{ opacity: starPack2Opacity, y: starPack2Y }}
                  >
                    <Particles
                      id="tsparticles2"
                      className="absolute inset-0"
                      options={starParticlesOptions}
                    />
                    {starConfigs2.map((star, index) => (
                      <motion.svg
                        key={`pack2-${index}`}
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="17.2 71.8 460.0 382.9"
                        style={{
                          position: "absolute",
                          top: star.top,
                          left: star.left,
                          width: star.width,
                          height: star.height,
                          fill: "white",
                        }}
                        animate={{
                          rotate: star.rotateRange,
                          scale: star.scaleRange,
                        }}
                        transition={{
                          duration: star.duration,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "mirror",
                        }}
                      >
                        <g id="__id0_safigp3nr">
                          <path d="M167.1,75c-0.5-2-2.4-3.2-4.4-2.7c-1.3,0.3-2.4,1.4-2.7,2.7c-6.4,24-22.2,68.3-57,95.4 c-24.2,18.8-52.5,31.8-82.5,37.9c-2,0.4-3.3,2.3-2.9,4.3c0.3,1.4,1.3,2.4,2.6,2.8c24.4,6.8,66.8,21.7,88.3,47 c17,20,32.1,70.1,38.7,94.6c0.6,1.9,2.6,3.1,4.5,2.5c1.2-0.3,2.2-1.3,2.5-2.5c6.8-24.9,24.4-76.4,57.3-98.3 c29.4-19.6,62.1-29.4,80.6-33.8c2-0.5,3.1-2.5,2.6-4.5c-0.3-1.2-1.2-2.2-2.4-2.5c-22.3-6.6-63.8-21.5-80.8-43.8 C185.1,139.5,172.5,97.8,167.1,75z M352,280.5c-0.3-1.2-1.5-1.9-2.7-1.6c-0.8,0.2-1.4,0.8-1.6,1.6c-3.9,14.7-13.6,41.8-34.9,58.3 c-14.8,11.5-32.1,19.4-50.5,23.1c-1.2,0.2-2,1.4-1.7,2.6c0.2,0.8,0.8,1.5,1.6,1.7c14.9,4.2,40.9,13.2,54,28.7 c10.4,12.2,19.6,42.9,23.7,57.9c0.3,1.2,1.6,1.9,2.7,1.6c0.8-0.2,1.3-0.8,1.6-1.6c4.2-15.2,14.9-46.7,35-60.1c18-12,38-18,49.3-20.7 c1.2-0.3,1.9-1.5,1.6-2.7c-0.2-0.8-0.8-1.4-1.5-1.6c-13.7-4.1-39-13.1-49.4-26.8C363,320,355.3,294.5,352,280.5z M425.1,113.3 c-0.2-0.8-1-1.3-1.8-1.1c-0.5,0.1-0.9,0.5-1.1,1.1c-2.6,9.8-9,27.7-23.2,38.7c-9.8,7.6-21.3,12.9-33.5,15.4 c-0.8,0.2-1.3,0.9-1.2,1.7c0.1,0.6,0.5,1,1.1,1.1c9.9,2.8,27.1,8.8,35.9,19.1c6.9,8.1,13,28.5,15.7,38.4c0.2,0.8,1,1.2,1.8,1 c0.5-0.1,0.9-0.5,1-1c2.8-10.1,9.9-31,23.3-39.9c11.9-8,25.2-11.9,32.8-13.7c0.8-0.2,1.3-1,1.1-1.8c-0.1-0.5-0.5-0.9-1-1.1z" />
                        </g>
                      </motion.svg>
                    ))}
                  </motion.div>

                  {/* Bloque central: Cartel y contenido */}
                  <motion.div
                    className="bg-white pt-12 pb-4 px-4 sm:pt-10 sm:pb-6 sm:px-8 md:pt-12 md:pb-8 md:px-16 lg:pt-16 lg:pb-8 lg:px-32 rounded-full flex flex-col items-center justify-center gap-4 md:gap-6"
                    style={{ y: textY, opacity: textOpacity }}
                  >
                    <header className="flex flex-col gap-2 sm:gap-4 items-center justify-center">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-doublebass font-bold">
                        The english crab
                      </h1>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-[bryndan] font-medium tracking-wider">
                        Info de clases y metodología
                      </h2>
                    </header>
                    <div className="text-base w-5/6 text-center sm:text-lg md:text-xl lg:text-2xl text-black">
                      ¡Toooodo lo que querés saber en un solo lugar!
                    </div>
                  </motion.div>


                  {/* Cangrejo: Solo se anima con scroll */}
                  <motion.img
                    src="/svg/crab.svg"
                    draggable="false"
                    className="h-20 md:h-28 lg:h-32"
                    alt="Crab"
                    style={{ y: crabY, opacity: crabOpacity }}
                  />
                </div>
              ),
              speed: -10,
            },
          ]}
          className="w-full h-full bg-secondary"
        />
      </div>
    </div>
  );
}
