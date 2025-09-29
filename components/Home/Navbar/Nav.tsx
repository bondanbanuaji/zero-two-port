'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaItunes, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLine, SiBilibili } from "react-icons/si";
import { HiBars3BottomRight } from "react-icons/hi2";

interface NavProps {
  openNav: () => void; // <-- definisi props
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll for background and shadow
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
      setIsScrolling(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAbove961 = windowWidth > 961;

  const socialLinks = [
    { icon: FaItunes, url: "#", color: "hover:text-[#FA243C]" },
    { icon: FaXTwitter, url: "#", color: "hover:text-black" },
    { icon: FaFacebookF, url: "#", color: "hover:text-[#1877F2]" },
    { icon: FaInstagram, url: "#", color: "hover:text-[#E4405F]" },
    { icon: FaTiktok, url: "#", color: "hover:text-black" },
    { icon: SiLine, url: "#", color: "hover:text-[#00B900]" },
    { icon: FaYoutube, url: "#", color: "hover:text-[#FF0000]" },
    { icon: SiBilibili, url: "#", color: "hover:text-[#FB7299]" },
  ];

  return (
    <div
      className={`transition-all duration-500 ${
        navBg
          ? 'bg-[#0f142e] shadow-2xl backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      } ${isScrolling ? 'shadow-lg' : 'shadow-none'}
        h-[12vh] z-[10000] fixed w-full border-b border-white/10`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="font-bold text-xl hidden sm:block md:text-2xl text-white group-hover:text-[#FF4DA6] transition-all duration-300">
            Zero Two
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
                  className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Hamburger Menu */}
          <div className="relative group">
            <HiBars3BottomRight
              onClick={openNav} // <-- Panggil handler dari parent
              className="w-8 h-8 cursor-pointer text-white transition-all duration-300 hover:scale-110 hover:text-[#FF4DA6]"
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
          style={{
            width: `${Math.min(
              (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
                100,
              100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Nav;