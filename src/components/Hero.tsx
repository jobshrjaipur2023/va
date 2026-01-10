"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Briefcase, CheckCircle } from "lucide-react";

const stats = [
  { value: "5000+", label: "Active Workers", icon: Users },
  { value: "25+", label: "Partner Countries", icon: Globe },
  { value: "100+", label: "Corporate Clients", icon: Briefcase },
];

const highlights = [
  "Verified Employers",
  "Visa & Documentation Support",
  "Manpower Supply",
  "Global Recruitment",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1] pt-8"
        >
          Start Your Career{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[size:200%_auto] animate-gradient">
            Abroad Today
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
        >
          Trusted international recruitment agency connecting skilled professionals with verified employers in UAE, Europe, UK, and Canada.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-zinc-600 font-medium"
            >
              <CheckCircle className="w-4 h-4 text-blue-500" />
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-base transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            Explore Jobs
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-14 px-8 bg-white text-zinc-700 border-2 border-zinc-200 rounded-full font-medium text-base hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center gap-2"
          >
            Contact Support
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-zinc-500 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none" />
    </section>
  );
}
