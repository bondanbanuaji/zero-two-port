"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const About = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } },
  }

  const abilityVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 18 } },
  }

  return (
    <section id="about" className="relative w-full min-h-screen text-white px-6 py-24 bg-transparent">
      
      {/* TITLE */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-wider bg-clip-text text-transparent bg-pink-300"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        About Me?
      </motion.h2>

      {/* PROFILE SECTION */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* IMAGE */}
        <motion.div
          className="flex-shrink-0 w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 25px 50px rgba(255,77,166,0.5)" }}
        >
          <Image
            src="/images/about-zero.png" // ← pakai path string dari public
            alt="Zero Two"
            className="object-cover w-full h-full"
            width={384}
            height={384}
            priority
          />
        </motion.div>

        {/* BIO */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {[
            "Zero Two is a mysterious and charismatic individual with elegance that captivates all. Her story blends adventure, charm, and unforgettable moments.",
            "With confidence and a playful attitude, she leaves a lasting impression in every encounter, from heroic feats to tender gestures."
          ].map((para, i) => (
            <motion.p
              key={i}
              className="text-lg md:text-xl leading-relaxed text-gray-100"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {para}
            </motion.p>
          ))}

          {/* FUN FACTS / ABILITIES */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
            {["Agile", "Strategic", "Strong", "Charming", "Intelligent", "Loyal"].map((ability, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl bg-gradient-to-tr from-pink-500/40 to-pink-400/40 backdrop-blur-md text-center font-bold text-xl shadow-lg cursor-pointer hover:shadow-xl"
                variants={abilityVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.12, rotate: 2, boxShadow: "0 18px 40px rgba(255,77,166,0.4)" }}
              >
                {ability}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* QUOTE / SIGNATURE */}
      <motion.div
        className="mt-20 text-center italic text-pink-400 text-xl md:text-2xl cursor-pointer select-none"
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        whileHover={{ textShadow: "0 0 20px rgba(255,77,166,0.6)" }}
      >
        “I’ll take my own path, no matter the cost.”
      </motion.div>
    </section>
  )
}

export default About