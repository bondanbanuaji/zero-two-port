import { Playfair_Display, Inter } from "next/font/google";

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});