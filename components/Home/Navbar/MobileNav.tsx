"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { NavLinks } from '@/constant/constant';
import { socialLinks } from '@/constant/socialLinks';
import Image from 'next/image';
import logoPict from '@/app/favicon.jpg';

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

// BACKDROP VARIANT
const backdropVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// PANEL SLIDE VARIANT
const panelVariant: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 25 },
  },
};

// ITEM VARIANT (NAV LINKS)
const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  }),
};

// SOCIAL LINK VARIANT
const socialVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: "spring" as const, stiffness: 120, damping: 20 },
  }),
};

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          key="mobile-nav"
          className="fixed inset-0 z-[100002] flex flex-col bg-gradient-to-br from-[#0f142e]/95 via-[#1a1f3c]/95 to-[#2d1b47]/95 backdrop-blur-3xl"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="flex-1 flex flex-col"
            variants={panelVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 pt-6">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.15, type: "spring" as const, stiffness: 80, damping: 20 } }}
              >
                <div className="w-[60px] h-[60px] bg-white rounded-2xl flex items-center justify-center shadow-xl hover:opacity-60x">
                  <Image src={logoPict} alt="logo" priority />
                </div>
              </motion.div>

              {/* CLOSE BUTTON */}
              <motion.button
                onClick={closeNav}
                className=""
                whileHover={{ scaleY: 0.8 }}
                whileTap={{ scale: 0.9 }}
              >
                <CgClose className="w-10 h-12
                sm:w-8 sm:h-10
                md:w-12 md:h-12 
                lg:w-12 lg:h-14
                xl:w-14 xl:h-14
                text-white transition-colors" />
              </motion.button>
            </div>

            {/* NAV LINKS */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-6">
              {NavLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  custom={i}
                  variants={itemVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.url}
                    onClick={closeNav}
                    className="group relative text-3xl md:text-4xl font-semibold text-white hover:text-[#FF4DA6] transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 top-1/2 h-[2px] w-0 bg-gradient-to-r from-[#ffffff] to-[#f74dcc] group-hover:w-full transition-all duration-700 -translate-y-1/2"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* SOCIAL LINKS */}
            <motion.div className="px-6 pb-6 flex flex-col items-center">
              <p className="text-white/90 text-sm mb-4 text-center">Follow Me</p>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    variants={socialVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300 flex items-center justify-center`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <p className="text-white/40 text-xs mt-6">© 2025 Zero Two. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;