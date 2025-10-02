"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
const loadSlim = require("tsparticles-slim").loadSlim;

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: ["#8c4df7", "#ffffff", "#ff79c6"] }, // multiple colors for sparkle
      shape: { type: "circle" },
      opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 }, animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false } },
      size: { value: { min: 1, max: 6 }, animation: { enable: true, speed: 3, minimumValue: 1, sync: false } },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: true, rotateX: 600, rotateY: 1200 }, // subtle swirl effect
      },
      links: {
        enable: true,
        distance: 150,
        color: "#8c4df7",
        opacity: 0.3,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "repulse"], // dual effect on hover
        },
        onClick: {
          enable: true,
          mode: ["push", "bubble"], // powerful click interaction
        },
        resize: true,
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.5 } },
        repulse: { distance: 150, duration: 0.4 },
        push: { quantity: 4 },
        bubble: { distance: 250, size: 8, duration: 2, opacity: 0.8 },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticleBackground;