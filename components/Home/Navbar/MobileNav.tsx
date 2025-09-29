'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { FaItunes, FaXTwitter, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { SiLine, SiBilibili } from 'react-icons/si';
import { NavLinks } from '@/constant/constant';

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const socialLinks = [
    { icon: FaItunes, url: "#", color: "text-[#FA243C]" },
    { icon: FaXTwitter, url: "#", color: "text-black" },
    { icon: FaFacebookF, url: "#", color: "text-[#1877F2]" },
    { icon: FaInstagram, url: "#", color: "text-[#E4405F]" },
    { icon: FaTiktok, url: "#", color: "text-black" },
    { icon: SiLine, url: "#", color: "text-[#00B900]" },
    { icon: FaYoutube, url: "#", color: "text-[#FF0000]" },
    { icon: SiBilibili, url: "#", color: "text-[#FB7299]" },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          key="mobile-nav"
          className="fixed inset-0 z-[100002] flex flex-col bg-gradient-to-br from-[#0f142e]/95 via-[#1a1f3c]/95 to-[#2d1b47]/95 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-6 pt-6">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg">02</span>
              </div>
              <h1 className="text-white font-bold text-2xl tracking-wide">Zero Two</h1>
            </motion.div>

            {/* CLOSE BUTTON */}
            <motion.button
              onClick={closeNav}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-90"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <CgClose className="w-6 h-6 text-white hover:text-[#FF4DA6] transition-colors" />
            </motion.button>
          </div>

          {/* NAV LINKS */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center space-y-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {NavLinks.map((link) => (
              <motion.div
                key={link.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={link.url}
                  onClick={closeNav}
                  className="group relative text-3xl md:text-4xl font-semibold text-white hover:text-[#FF4DA6] transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#FF4DA6] to-[#fd48a3] group-hover:w-full transition-all duration-500"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="px-6 pb-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/70 text-sm mb-4 text-center">Follow Me</p>
            <motion.div
              className="grid grid-cols-4 gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300 flex items-center justify-center`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <p className="text-white/40 text-xs mt-6">© 2025 Zero Two. All rights reserved.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;