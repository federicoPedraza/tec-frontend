import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mapeamos las variables a familia de fuente
        geist: ["var(--font-geist)", "sans-serif"],
        doublebass: ["var(--font-doublebass)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#304254", // color primary agregado
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#f7b7ea", // color secondary agregado
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "f75732",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Ejemplo para charts:
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
