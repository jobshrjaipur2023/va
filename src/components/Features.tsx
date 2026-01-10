"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Dubai & UAE Specialists",
    description: "500+ active positions in Dubai's construction, hospitality, and engineering sectors. Direct employer connections with top UAE companies.",
    image: "/images/feature-dubai.png",
  },
  {
    title: "Complete Visa Support",
    description: "End-to-end visa processing, documentation, medical tests, and flight arrangements. We handle all paperwork so you can focus on your career.",
    image: "/images/feature-visa.png",
  },
  {
    title: "Verified Employer Network",
    description: "Direct partnerships with verified international employers in UAE, UK, Europe, and Canada. No middlemen, no hidden fees.",
    image: "/images/feature-network.png",
  },
  {
    title: "Skilled Worker Placements",
    description: "Specialists in placing construction workers, engineers, technicians, drivers, hospitality staff, and healthcare professionals abroad.",
    image: "/images/feature-workers.png",
  },
];

export function Features() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
            Your Trusted Partner for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Dubai & International Jobs
            </span>
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            From skill assessment to your first day at work in Dubai, UK, or Europe – we handle every step with care and transparency.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl bg-white border border-zinc-100 hover:border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
