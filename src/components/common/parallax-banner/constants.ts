export const starParticlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 0.5, duration: 2.5 },
    },
  },
  particles: {
    number: { value: 50, density: { enable: true, area: 100 } },
    color: { value: "#ffffff" },
    shape: { type: "star" },
    opacity: { value: 0.8, random: true },
    size: { value: { min: 2, max: 4 } },
    move: {
      enable: true,
      speed: 0.3,
      random: true,
    },
  },
  detectRetina: true,
};
// Primer pack de estrellas (ubicado en la parte superior/izquierda)
export const starConfigs1 = [
  {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    rotateRange: [0, 10, 0],
    scaleRange: [1, 1.05, 1],
    duration: 16,
  },
  {
    top: "70%",
    left: "10%",
    width: "clamp(20px, 5vw, 30px)",
    height: "clamp(20px, 5vw, 30px)",
    rotateRange: [0, -5, 0],
    scaleRange: [1, 1.1, 1],
    duration: 7,
  },
  {
    top: "20%",
    left: "80%",
    width: "clamp(10px, 2.5vw, 15px)",
    height: "clamp(10px, 2.5vw, 15px)",
    rotateRange: [0, 20, 0],
    scaleRange: [1, 1.2, 1],
    duration: 4,
  },
];

// Segundo pack de estrellas (ubicado en la parte inferior/derecha)
export const starConfigs2 = [
  {
    top: "75%",
    left: "75%",
    width: "clamp(40px, 10vw, 60px)",
    height: "clamp(40px, 10vw, 60px)",
    rotateRange: [0, -15, 0],
    scaleRange: [1, 1.08, 1],
    duration: 10,
  },
  {
    top: "50%",
    left: "50%",
    width: "clamp(80px, 20vw, 125px)",
    height: "clamp(80px, 20vw, 125px)",
    rotateRange: [0, 5, 0],
    scaleRange: [1, 1.15, 1],
    duration: 8,
  },
  {
    top: "50%",
    left: "55%",
    width: "clamp(12px, 3vw, 18px)",
    height: "clamp(12px, 3vw, 18px)",
    rotateRange: [0, 10, 0],
    scaleRange: [1, 1.2, 1],
    duration: 6,
  },
];
