"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import AmbientBackground from "@/components/ambient-background";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Star,
  CheckCircle,
  Smartphone,
  CreditCard,
  Globe,
  Lock,
  ArrowUpRight,
  TrendingUp,
  Award,
  Users
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function CreativeLandingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={targetRef} className="relative min-h-[200vh] text-white overflow-x-hidden bg-slate-950 selection:bg-indigo-500 selection:text-white">
      <AmbientBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          {/* Floating Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group cursor-pointer inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-[0.3em] mb-12 backdrop-blur-2xl shadow-2xl hover:border-indigo-500/50 transition-all"
          >
            <Sparkles size={14} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
            India's Most Advanced Booking OS
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[12vw] md:text-[10vw] font-[1000] tracking-tighter leading-[0.8] mb-4"
            >
              FUTURE OF<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-300 to-indigo-600 animate-gradient-x">
                BOOKING.
              </span>
            </motion.h1>

            {/* 3D Decorative Sphere */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: 360
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-indigo-500/40 to-pink-500/40 blur-[40px] -z-10 rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
          >
            Beyond scheduling. A <span className="text-white font-semibold">quantum leap</span> in how Indian businesses interact with customers. 100% Automated. 100% Secure.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link href="/book">
              <MagneticButton className="px-14 py-8 text-2xl group relative overflow-hidden bg-white text-black hover:text-white border-none">
                <span className="relative z-10 flex items-center gap-2">
                  Launch Engine <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                />
              </MagneticButton>
            </Link>

            <Link href="/services">
              <button className="px-10 py-4 text-lg font-bold border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
                Explore Services <Globe size={18} className="text-indigo-400" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Interactive Stats Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: "Active Users", val: "50,000+", icon: Users, color: "text-blue-400" },
          { label: "Uptime", val: "99.99%", icon: TrendingUp, color: "text-green-400" },
          { label: "India Scale", val: "25+ Cities", icon: Globe, color: "text-indigo-400" },
          { label: "Security", val: "AES-256", icon: Lock, color: "text-pink-400" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-white/[0.04] backdrop-blur-sm"
          >
            <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
            <h4 className="text-3xl font-black mb-1">{stat.val}</h4>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Interactive Feature Panel */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none italic uppercase">
              The <span className="text-indigo-500">Gold Standard</span><br/>of Security.
            </h2>
            <div className="space-y-6">
              {[
                { t: "Razorpay Encrypted", d: "Military-grade payment handshake for all UPI/Card transactions." },
                { t: "Dynamic Scaling", d: "Handles thousands of simultaneous bookings without a millisecond of lag." },
                { t: "AI Fraud Shield", d: "Automated verification system to prevent fake appointments." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-indigo-500 transition-colors">
                    <CheckCircle size={12} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl mb-1">{item.t}</h5>
                    <p className="text-slate-400 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual HUD Mockup */}
            <div className="w-full aspect-square rounded-[3rem] bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-white/10 backdrop-blur-3xl overflow-hidden p-1">
              <div className="w-full h-full rounded-[2.8rem] bg-slate-950 p-8 flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 animate-pulse" />
                  <div className="flex gap-2">
                    <div className="w-8 h-2 rounded-full bg-white/20" />
                    <div className="w-12 h-2 rounded-full bg-indigo-600" />
                  </div>
                </div>
                <div className="space-y-4 mb-auto">
                  <div className="h-4 w-3/4 rounded-full bg-white/5" />
                  <div className="h-4 w-1/2 rounded-full bg-white/5" />
                  <div className="h-20 w-full rounded-2xl bg-white/5 border border-white/10" />
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="h-3 w-20 rounded-full bg-green-500/20 border border-green-500/40" />
                    <div className="h-8 w-32 rounded-lg bg-white/10" />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-indigo-600/50 flex items-center justify-center">
                    <Zap className="text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 p-6 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl flex items-center gap-3"
            >
              <Award className="text-yellow-400" />
              <div className="text-xs font-bold uppercase tracking-widest">ISO Certified</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Trust Bar / Payment Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
      >
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-6 rounded-[2.5rem] bg-slate-900/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mb-1">Gateway Hub</span>
                <div className="flex items-center gap-4">
                  <Smartphone className="w-5 h-5 text-indigo-400" title="UPI Support" />
                  <CreditCard className="w-5 h-5 text-indigo-400" title="Card Payments" />
                  <Globe className="w-5 h-5 text-indigo-400" title="Net Banking" />
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mb-1">Data Shield</span>
                <div className="flex items-center gap-2 text-green-400 text-xs font-black">
                  <Lock size={14} /> AES-256
                </div>
              </div>
            </div>

            <Link href="/book">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all hover:gap-4 group">
                Reserve Now <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Bottom Spacer */}
      <div className="h-32" />
    </div>
  );
}
