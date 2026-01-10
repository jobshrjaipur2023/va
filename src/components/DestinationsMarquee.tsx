"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
    { name: "Dubai", country: "UAE", image: "/images/dubai.webp", jobs: "120+" },
    { name: "Moscow", country: "Russia", image: "/images/russia.webp", jobs: "85+" },
    { name: "Mauritius", country: "Mauritius", image: "/images/mauritius.webp", jobs: "45+" },
    { name: "London", country: "UK", image: "/images/uk.webp", jobs: "200+" },
    { name: "Toronto", country: "Canada", image: "/images/canada.webp", jobs: "150+" },
    { name: "Berlin", country: "Germany", image: "/images/germany.webp", jobs: "90+" },
    { name: "Riyadh", country: "Saudi Arabia", image: "/images/saudi.webp", jobs: "180+" },
    { name: "Doha", country: "Qatar", image: "/images/qatar.webp", jobs: "110+" },
];

// Duplicate for seamless infinite scroll
const duplicatedDestinations = [...destinations, ...destinations];

export function DestinationsMarquee() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-zinc-50/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
                        Global Opportunities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                        Jobs at{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Top Destinations
                        </span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        Explore career opportunities across the globe with our trusted employer network
                    </p>
                </motion.div>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative">
                {/* Gradient Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                {/* Gradient Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: [0, -50 * destinations.length * 5.5],
                    }}
                    transition={{
                        x: {
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedDestinations.map((dest, idx) => (
                        <motion.div
                            key={`${dest.name}-${idx}`}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative flex-shrink-0 w-72 group cursor-pointer"
                        >
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-100 group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500">
                                <Image
                                    src={dest.image}
                                    alt={`Jobs in ${dest.name}, ${dest.country}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-white font-bold text-xl mb-0.5">{dest.name}</h3>
                                            <p className="text-white/70 text-sm">{dest.country}</p>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                            <span className="text-white text-sm font-semibold">{dest.jobs} Jobs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect - View Jobs Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                    <motion.button
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white text-zinc-900 px-6 py-2.5 rounded-full font-medium text-sm shadow-xl hover:bg-zinc-50 transition-colors"
                                    >
                                        Explore Jobs →
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
