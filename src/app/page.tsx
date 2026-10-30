"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import AmbientBackground from "@/components/ambient-background";
import { ChevronRight, ShieldCheck, Zap, Sparkles, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CreativeLandingPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-slate-950">
      <AmbientBackground />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge with float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:border-indigo-500/50 transition-colors"
          >
            <Sparkles size={14} className="text-yellow-400" />
            Experience The Next Dimension of Booking
          </motion.div>

          <div className="relative">
            {/* 3D-effect Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[180px] font-black tracking-tighter leading-[0.85] mb-12 [text-shadow:0_20px_50px_rgba(0,0,0,0.5)]"
            >
              BOOK<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-500 drop-shadow-2xl">
                EASE.
              </span>
            </motion.h1>

            {/* Background 3D element behind title */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-20 w-40 h-40 bg-indigo-500/20 blur-[60px] -z-10 rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto mb-16 leading-tight font-medium"
          >
            A high-performance interactive engine designed to <span className="text-white border-b-2 border-indigo-500">accelerate</span> your growth.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/book">
              <MagneticButton className="px-12 py-8 text-2xl group flex items-center gap-3">
                Get Started <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </MagneticButton>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-indigo-600 flex items-center justify-center text-[10px] font-bold">
                    User
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1 text-yellow-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">50k+ Active Bookings</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Glassmorphic Trust HUD */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className="absolute bottom-10 left-6 right-6 md:left-auto md:right-10 flex flex-col md:flex-row items-center gap-6 p-6 rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Security Protocol</p>
              <p className="text-xs font-black text-green-400">AES-256 ENCRYPTED</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Gateway Active</p>
              <p className="text-xs font-black text-indigo-300">UPI / BHIM / GPAY</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20 group-hover:scale-110 transition-transform">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">System Health</p>
              <p className="text-xs font-black text-yellow-400">99.9% UPTIME</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
