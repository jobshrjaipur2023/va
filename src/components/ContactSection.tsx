"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, FileText, Calendar } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-zinc-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Visit Our Office &{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Start Your Journey
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                        We are currently hiring for various positions in Dubai. Visit us for a direct interview.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Interview Details (Merged) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/40 relative overflow-hidden group flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Calendar size={120} />
                        </div>

                        {/* Schedule Section */}
                        <div className="relative z-10 mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    <Clock size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900">Interview Schedule</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center text-sm border-b border-zinc-50 pb-2">
                                    <span className="font-medium text-zinc-700">Monday</span>
                                    <span className="text-zinc-500">10:00 AM - 02:00 PM</span>
                                </li>
                                <li className="flex justify-between items-center text-sm border-b border-zinc-50 pb-2">
                                    <span className="font-medium text-zinc-700">Thursday</span>
                                    <span className="text-zinc-500">10:00 AM - 02:00 PM</span>
                                </li>
                                <li className="flex justify-between items-center text-sm">
                                    <span className="font-medium text-zinc-700">Saturday</span>
                                    <span className="text-zinc-500">10:00 AM - 02:00 PM</span>
                                </li>
                            </ul>
                        </div>

                        {/* Documents Section */}
                        <div className="relative z-10 pt-6 border-t border-zinc-50 flex-grow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600">
                                    <FileText size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900">Required Docs</h3>
                            </div>
                            <ul className="space-y-2">
                                {["Original Passport", "Color Copy of Passport", "Updated Resume"].map((doc, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-zinc-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 p-3 bg-zinc-50 rounded-lg text-[10px] text-zinc-400 italic">
                                * Please bring originals for verification
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Embed (Center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-zinc-100 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden relative min-h-[400px] group"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=JTM%20Mall%20Jagatpura%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/20 shadow-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="text-xs font-semibold text-zinc-900">Locate Us Easily</span>
                        </div>
                    </motion.div>

                    {/* Contact Details (Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-zinc-900 p-8 rounded-3xl shadow-xl shadow-zinc-900/20 text-white relative overflow-hidden group flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 space-y-8">
                            <div>
                                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white border border-zinc-700 shadow-inner">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                                <p className="text-zinc-400 text-xs uppercase tracking-wider mb-3 font-medium">Head Office</p>
                                <p className="text-sm leading-relaxed text-zinc-300/90 font-light">
                                    K-A-7 Third Floor, JTM Mall,<br />
                                    Jagatpura, Jaipur (Rajasthan) 302017
                                </p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=JTM+Mall+Jagatpura+Jaipur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-400 text-xs mt-3 hover:text-blue-300 transition-colors border-b border-blue-400/20 pb-0.5"
                                >
                                    Get Directions <ArrowUpRightIcon className="w-3 h-3" />
                                </a>
                            </div>

                            <div className="border-t border-zinc-800 pt-6 space-y-4">
                                <a href="tel:+919460724814" className="flex items-center gap-4 group/item">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                                        <Phone size={16} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-zinc-500 mb-0.5 block">Call Us</span>
                                        <span className="text-sm font-medium tracking-wide">+91 94607 24814</span>
                                    </div>
                                </a>

                                <a href="https://wa.me/919461626412" className="flex items-center gap-4 group/item">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-green-400 group-hover/item:bg-green-600 group-hover/item:text-white transition-all">
                                        <MessageCircle size={16} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-zinc-500 mb-0.5 block">WhatsApp</span>
                                        <span className="text-sm font-medium tracking-wide">+91 94616 26412</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="relative z-10 pt-8 mt-auto">
                            <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
                                <p className="text-xs text-zinc-400 text-center">
                                    Open Mon-Sat <br /> 10:00 AM - 06:00 PM
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
    );
}
