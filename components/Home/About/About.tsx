"use client";

import React from "react";
import Image from "next/image";
import profilePic from "@/public/images/about-zero.jpeg";
import { motion, Variants } from "framer-motion";

const About = () => {
  // Variants statis tanpa fungsi untuk TypeScript
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
  };

  const abilityVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } },
  };

  return (
    <section id="about" className="relative w-full min-h-screen text-white px-6 py-20">
      {/* TITLE */}
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-center mb-12 tracking-wide text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#FF4DA6] to-[#fd48a3]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      >
        About Zero Two
      </motion.h2>

      {/* PROFILE SECTION */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants} // pake container untuk stagger
      >
        {/* IMAGE */}
        <motion.div
          className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl border border-[#FF4DA6] cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 20px 40px rgba(255,77,166,0.4)" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <Image src={profilePic} alt="Zero Two" className="object-cover w-full h-full" priority />
        </motion.div>

        {/* BIO */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {[
            "Zero Two is a mysterious and charming individual with a unique personality. She is known for her elegance, charisma, and abilities that captivate everyone around her. Her story is filled with adventures, challenges, and moments of pure inspiration.",
            "She embraces life with confidence and a playful attitude, making every encounter memorable. From her heroic feats to her tender moments, Zero Two leaves an unforgettable mark on everyone she meets.",
          ].map((para, i) => (
            <motion.p
              key={i}
              className="text-lg md:text-xl leading-relaxed"
              variants={textVariants}
            >
              {para}
            </motion.p>
          ))}

          {/* FUN FACTS / ABILITIES */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {["Agile", "Strategic", "Strong", "Charming", "Intelligent", "Loyal"].map((ability, i) => (
              <motion.div
                key={i}
                className="p-3 rounded-lg bg-gradient-to-tr from-[#FF4DA6]/60 to-[#fd48a3]/60 backdrop-blur-sm text-center font-semibold shadow-md cursor-pointer"
                variants={abilityVariants}
                whileHover={{ scale: 1.1, rotate: 1, boxShadow: "0 15px 30px rgba(255,77,166,0.3)" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                {ability}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* QUOTE / SIGNATURE */}
      <motion.div
        className="mt-16 text-center italic text-[#FF4DA6] text-lg md:text-2xl cursor-pointer"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
        whileHover={{ scale: 1.03, textShadow: "0 0 15px rgba(255,77,166,0.5)" }}
      >
        “I’ll take my own path, no matter the cost.”
      </motion.div>
    </section>
  );
};

export default About;