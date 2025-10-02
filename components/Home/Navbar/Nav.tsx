'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { socialLinks } from "@/constant/socialLinks";
import Image from 'next/image';
import logoPict from '@/app/favicon.jpg'

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAbove961 = windowWidth > 961;

  return (
    <div
      className={`transition-all duration-500 ${navBg
          ? "bg-[#191a1b33] shadow-xl backdrop-blur-3xl bg-opacity-95"
          : "bg-transparent"
        } ${isScrolling ? "shadow-sm" : "shadow-none"}
        h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
            <FaCode className="w-5 h-5 text-black" />
          </div> */}
          <h1 className="font-bold text-6xl hidden sm:block md:text-5xl text-white group-hover:text-[#FF4DA6] 
          absolute left-8 top-5 transition-all duration-300 hover:opacity-60">
            <Image
              src={logoPict}
              alt="logo"
              priority
              width={60}
              height={60}
            />
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
                  className={`p-3 text-white transition-all duration-300 hover:scale-115`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Hamburger Menu */}
          <div className="absolute right-7 top-1/2 -translate-y-1/2">
            <HiBars3BottomRight
              onClick={openNav}
              className="
                text-white
                transition-all duration-300
                hover:scale-90 hover:text-[#FF4DA6]
                w-10 h-12
                sm:w-8 sm:h-10
                md:w-12 md:h-12 
                lg:w-12 lg:h-14
                xl:w-14 xl:h-14"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Menu
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF4DA6] to-transparent opacity-60">
        <div
          className="h-full bg-[#FF4DA6] transition-all duration-150"
          style={{ width: `${Math.min(scrollProgress, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Nav;