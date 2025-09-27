import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Zero Two | ゼロツー",
  description:
    "Zero Two is an iconic character from the anime Darling in the FranXX. With her pink hair, small horns, and charismatic personality, she is known as a mysterious yet captivating figure and one of the most beloved anime waifus worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#1A1A1A]`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
