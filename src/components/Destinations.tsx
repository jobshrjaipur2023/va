"use client";

import { motion } from "framer-motion";
import { placeholderDestinations } from "@/data/content";
import Image from "next/image";
import { Star, MapPin, Briefcase, ArrowRight } from "lucide-react";

export function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-zinc-50/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
              Featured Positions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl">
              Explore active job listings across the globe. New positions added weekly.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            View All Positions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderDestinations.map((destination, idx) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">
                {/* Placeholder - Replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-zinc-300" />
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 text-xs font-semibold text-zinc-700 shadow-sm border border-zinc-100">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {destination.rating}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium shadow-lg"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-bold text-zinc-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {destination.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Remote / On-site</span>
                  </div>
                </div>

                <p className="text-zinc-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium block">
                      Salary
                    </span>
                    <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {destination.price}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-medium shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            View All Positions
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
