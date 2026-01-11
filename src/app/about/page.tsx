"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Globe, Users, Briefcase } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-50/50 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
                            Our Agency
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                            Bridging the Gap Between <br />
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Talent & Opportunity
                            </span>
                        </h1>
                        <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                            Job's HR Abroad is dedicated to empowering Indian professionals by connecting them with life-changing career opportunities across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-20 bg-zinc-50/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl"
                        >
                            <Image
                                src="/founders.png"
                                alt="Varis Khan and Aman Sharma"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-xl">Varis Khan & Aman Sharma</p>
                                <p className="text-white/80 text-sm">Founding Partners</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <Users size={24} />
                                </span>
                                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">Leadership</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                                Driven by a Shared Vision
                            </h2>

                            <div className="prose prose-zinc text-zinc-600 leading-relaxed space-y-6 mb-8">
                                <p>
                                    <strong className="text-zinc-900">Varis Khan</strong> and <strong className="text-zinc-900">Aman Sharma</strong> came together with a singular purpose: to revolutionize the overseas recruitment industry by injecting it with transparency, integrity, and genuine care for human potential.
                                </p>
                                <p>
                                    As partners, they combine their unique strengths to lead <span className="font-semibold text-blue-600">Job's HR Abroad</span>. Varis brings his deep understanding of international labor markets and candidate welfare, while Aman drives the strategic vision and employer network expansion.
                                </p>
                                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-700 bg-blue-50/50 py-2 rounded-r-lg">
                                    "We are not just partners in business; we are partners in our promise to every candidate. Your trust is our most valuable asset, and your success is our only metric."
                                </blockquote>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-lg text-zinc-900 mb-1">Varis Khan</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-2">Co-Founder</p>
                                    <p className="text-sm text-zinc-500">Expert in recruitment operations and candidate relations.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-zinc-900 mb-1">Aman Sharma</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-2">Co-Founder</p>
                                    <p className="text-sm text-zinc-500">Expert in strategic partnerships and global expansion.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-zinc-900 mb-4">What We Do</h2>
                        <p className="text-zinc-500">We bridge the gap between Indian talent and international employers through a structured, transparent process.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
                                title: "Global Connectivity",
                                desc: "We have established strong networks with verified employers in UAE, UK, Europe, and Canada, ensuring genuine job openings."
                            },
                            {
                                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
                                title: "Talent Matching",
                                desc: "We rigorously screen and assess candidates to match them with the right roles, ensuring long-term success for both employee and employer."
                            },
                            {
                                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
                                title: "End-to-End Support",
                                desc: "From documentation and visa processing to flight bookings and post-landing support, we are with you at every step."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="rounded-2xl bg-white border border-zinc-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all overflow-hidden group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
