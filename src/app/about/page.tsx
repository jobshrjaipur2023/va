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

            {/* Founder Section */}
            <section className="py-20 bg-zinc-50/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200"
                        >
                            {/* Founder Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-400">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-zinc-300 rounded-full mx-auto mb-4 animate-pulse"></div>
                                    <span className="text-sm uppercase tracking-widest font-medium">Founder Image</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Quote className="w-12 h-12 text-blue-100 mb-6" />
                            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Waris Khan</h2>
                            <p className="text-blue-600 font-medium mb-6">Founder & CEO</p>

                            <div className="prose prose-zinc text-zinc-600 leading-relaxed space-y-4">
                                <p>
                                    "I started Job's HR Abroad with a simple yet powerful vision: to provide a transparent, reliable, and supportive pathway for Indian talent to work internationally."
                                </p>
                                <p>
                                    Having witnessed the challenges many face with fraudulent agents and confusing visa processes, I wanted to build an agency that puts people first. We don't just find jobs; we build careers and change lives.
                                </p>
                                <p>
                                    Our commitment is to ensure every candidate we place is safe, well-paid, and treated with respect in their new country. We handle everything from the initial skill assessment to the final flight, so our candidates can focus on their bright future."
                                </p>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <div className="flex-1 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                                    <h3 className="font-bold text-lg text-zinc-900 mb-1">Vision</h3>
                                    <p className="text-sm text-zinc-500">To be India's most trusted global recruitment partner.</p>
                                </div>
                                <div className="flex-1 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                                    <h3 className="font-bold text-lg text-zinc-900 mb-1">Mission</h3>
                                    <p className="text-sm text-zinc-500">Empowering 10,000+ professionals with global careers by 2030.</p>
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
                                icon: Globe,
                                title: "Global Connectivity",
                                desc: "We have established strong networks with verified employers in UAE, UK, Europe, and Canada, ensuring genuine job openings."
                            },
                            {
                                icon: Users,
                                title: "Talent Matching",
                                desc: "We rigorously screen and assess candidates to match them with the right roles, ensuring long-term success for both employee and employer."
                            },
                            {
                                icon: Briefcase,
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
                                className="p-8 rounded-2xl bg-white border border-zinc-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
