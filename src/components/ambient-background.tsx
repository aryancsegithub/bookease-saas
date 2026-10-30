"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax transform for depth layer
  const yParallax = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 45]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth interpolation for mouse position
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950">
      {/* 3D Floating Grid & Parallax Shapes */}
      <motion.div
        style={{ y: yParallax, rotate: rotateParallax }}
        className="absolute inset-0 flex items-center justify-center opacity-30"
      >
        <div className="w-[800px] h-[800px] rounded-full border border-indigo-500/20 [transform:rotateX(60deg)_rotateZ(30deg)] animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-violet-500/30 [transform:rotateX(60deg)_rotateZ(-30deg)] animate-[spin_40s_linear_infinite_reverse]" />
      </motion.div>

      {/* Reactive Bioluminescent Orbs moving with Mouse Offset */}
      <motion.div
        animate={{
          x: mousePos.x * 2,
          y: mousePos.y * 2,
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          x: -mousePos.x * 1.5,
          y: -mousePos.y * 1.5,
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-600/30 via-pink-600/15 to-transparent blur-[140px]"
      />

      {/* Subtle Noise / Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}
