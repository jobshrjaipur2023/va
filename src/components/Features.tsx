"use client";

import { motion } from "framer-motion";
import { marketingContent } from "@/data/content";
import * as Icons from "lucide-react";

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-50/50 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Everything You Need for a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Successful Career
            </span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            From initial consultation to your first day at work abroad, we handle every step with expert precision and care.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {marketingContent.features.map((feature, idx) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.HelpCircle;

            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-3xl bg-white border border-zinc-100 hover:border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent size={26} strokeWidth={1.5} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
