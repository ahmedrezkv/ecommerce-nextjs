import localFont from "next/font/local";

export const euclidCircularAFont = localFont({
  src: [
    {
      path: "../assets/fonts/Euclid Circular A Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Euclid Circular A Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Euclid Circular A Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Euclid Circular A Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Euclid Circular A Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Euclid Circular A Medium Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Euclid Circular A SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Euclid Circular A SemiBold Italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/Euclid Circular A Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Euclid Circular A Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-euclid-circular-a",
});
