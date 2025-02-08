import localFont from "next/font/local";

/**
 * Configuración de la fuente Geist con todas sus variantes.
 * Ajusta los pesos o archivos que realmente necesites.
 */

export const bryndan = localFont({
  src:[{
    path: "../../public/fonts/Bryndan_Write.ttf",
    weight: "400",
    style: 'normal'
  }],
  variable: "--font-bryndan",
  display: "swap",
})

export const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist",
  display: "swap",
});

/**
 * Configuración de la fuente DoubleBass con sus 4 variantes.
 */
export const doublebass = localFont({
  src: [
    {
      path: "../../public/fonts/DoubleBass-Thin-trial.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/DoubleBass-Light-trial.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/DoubleBass-Regular-trial.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DoubleBass-Bold-trial.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-doublebass",
  display: "swap",
});
