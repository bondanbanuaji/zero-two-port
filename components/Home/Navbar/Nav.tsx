'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { socialLinks } from "@/constant/socialLinks";

interface NavProps {
  openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll for background, shadow & progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setNavBg(scrollTop >= 90);
      setIsScrolling(scrollTop > 10);
      setScrollProgress(progress);
    };

    handleScroll(); // jalankan sekali saat mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAbove961 = windowWidth > 961;

  return (
    <div
      className={`transition-all duration-500 ${
        navBg
          ? "bg-[#0f142e] shadow-2xl backdrop-blur-md bg-opacity-95"
          : "bg-transparent"
      } ${isScrolling ? "shadow-lg" : "shadow-none"}
        h-[12vh] z-[10000] fixed w-full border-b border-white/10`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
            <FaCode className="w-5 h-5 text-black" />
          </div> */}
          <h1 className="font-bold text-6xl hidden sm:block md:text-5xl text-white group-hover:text-[#FF4DA6] transition-all duration-300">
            ZeRO
          </h1>
        </Link>

        {/* Social Media + Hamburger */}
        <div className="flex items-center space-x-6">
          {/* Social Media Icons */}
          {isAbove961 && (
            <motion.div
              className="flex items-center space-x-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`p-2 text-white transition-all duration-300 hover:scale-110`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <social.icon className="w-8 h-6" />
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Hamburger Menu */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <HiBars3BottomRight
              onClick={openNav}
              className="w-14 h-16 text-white transition-all duration-300 hover:scale-90 hover:text-[#FF4DA6]"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Menu
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF4DA6] to-transparent opacity-50">
        <div
          className="h-full bg-[#FF4DA6] transition-all duration-150"
          style={{ width: `${Math.min(scrollProgress, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Nav;