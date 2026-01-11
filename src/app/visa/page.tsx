"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Plane, Briefcase, CheckCircle2, Clock, FileText, Globe, Shield, Users, ArrowRight, Phone } from "lucide-react";
import { VisaEnquiryModal } from "@/components/VisaEnquiryModal";

const visaTypes = [
    {
        id: "visit",
        icon: Plane,
        title: "Visit Visa",
        subtitle: "For Tourism & Family Visit",
        description: "Planning to visit UAE, Saudi Arabia, or other Gulf countries? We provide hassle-free visit visa processing for tourism, family visits, and short-term stays.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
        color: "from-cyan-500 to-blue-600",
        countries: ["UAE", "Saudi Arabia", "Qatar", "Bahrain", "Oman", "Kuwait"],
        duration: ["14 Days", "30 Days", "60 Days", "90 Days"],
        features: [
            "Quick Processing (3-5 Working Days)",
            "Multiple Entry Options Available",
            "Family & Group Discounts",
            "Travel Insurance Assistance",
            "Airport Pickup Coordination",
            "Hotel Booking Support",
        ],
        documents: [
            "Valid Passport (6+ months validity)",
            "Passport Size Photographs",
            "Bank Statement (Last 3 months)",
            "Return Flight Ticket",
            "Hotel Booking Confirmation",
        ],
        pricing: "Starting from ₹8,000",
    },
    {
        id: "employment",
        icon: Briefcase,
        title: "Employment Visa",
        subtitle: "For Work & Career Abroad",
        description: "Ready to work abroad? We handle complete employment visa processing including work permits, medical tests, emigration clearance, and all documentation.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        color: "from-blue-600 to-indigo-600",
        countries: ["UAE", "Saudi Arabia", "Qatar", "UK", "Canada", "Germany", "Russia", "Mauritius"],
        duration: ["1 Year", "2 Years", "3 Years", "Renewable"],
        features: [
            "End-to-End Visa Processing",
            "Emigration Clearance (ECNR/ECR)",
            "Medical Test Coordination",
            "Police Clearance Certificate",
            "Attestation Services",
            "Pre-Departure Orientation",
        ],
        documents: [
            "Valid Passport",
            "Educational Certificates",
            "Experience Letters",
            "Medical Fitness Certificate",
            "Police Clearance Certificate",
            "Passport Size Photographs",
        ],
        pricing: "Based on Job Offer",
    },
];

export default function VisaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVisaType, setSelectedVisaType] = useState("");

    const handleEnquiryClick = (visaTitle: string) => {
        setSelectedVisaType(visaTitle);
        setIsModalOpen(true);
    };

    return (
        <>
            <VisaEnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                visaType={selectedVisaType}
            />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-white max-w-4xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-100 text-sm font-medium mb-6 border border-white/20">
                                <Shield size={16} />
                                Trusted Visa Services
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Visa Services for{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                                    Global Travel
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Expert visa assistance for visit and employment purposes. Fast processing, transparent fees, and 100% documentation support.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#visit" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                                    <Plane size={20} />
                                    Visit Visa
                                </a>
                                <a href="#employment" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                                    <Briefcase size={20} />
                                    Employment Visa
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-zinc-50 border-b border-zinc-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { value: "5000+", label: "Visas Processed" },
                                { value: "8+", label: "Countries Covered" },
                                { value: "98%", label: "Success Rate" },
                                { value: "3-5", label: "Days Processing" },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visa Types */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        {visaTypes.map((visa, index) => (
                            <motion.div
                                key={visa.id}
                                id={visa.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`mb-24 last:mb-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                            >
                                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                    {/* Image Side */}
                                    <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                            <Image
                                                src={visa.image}
                                                alt={visa.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${visa.color} opacity-20`} />
                                        </div>
                                        {/* Floating Badge */}
                                        <div className={`absolute -bottom-6 ${index % 2 === 1 ? "left-6" : "right-6"} bg-white rounded-2xl shadow-xl p-4 border border-zinc-100`}>
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${visa.color} flex items-center justify-center mb-2`}>
                                                <visa.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="text-sm font-bold text-zinc-900">{visa.pricing}</div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${visa.color} text-white`}>
                                            {visa.subtitle}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                                            {visa.title}
                                        </h2>
                                        <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
                                            {visa.description}
                                        </p>

                                        {/* Countries */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                                <Globe size={18} className="text-blue-500" />
                                                Available Countries
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {visa.countries.map((country) => (
                                                    <span
                                                        key={country}
                                                        className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg text-sm font-medium"
                                                    >
                                                        {country}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Duration */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                                <Clock size={18} className="text-cyan-500" />
                                                Visa Duration Options
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {visa.duration.map((dur) => (
                                                    <span
                                                        key={dur}
                                                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                                                    >
                                                        {dur}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                                <CheckCircle2 size={18} className="text-green-500" />
                                                What We Offer
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {visa.features.map((feature) => (
                                                    <div
                                                        key={feature}
                                                        className="flex items-center gap-2 text-zinc-600"
                                                    >
                                                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                                                        <span className="text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Documents */}
                                        <div className="mb-8 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                                            <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                                <FileText size={18} className="text-orange-500" />
                                                Required Documents
                                            </h4>
                                            <ul className="space-y-2">
                                                {visa.documents.map((doc) => (
                                                    <li key={doc} className="flex items-center gap-2 text-zinc-600 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                                        {doc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-wrap gap-4">
                                            <a
                                                href="tel:+919460724814"
                                                className={`px-6 py-3 rounded-xl font-semibold bg-gradient-to-r ${visa.color} text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2`}
                                            >
                                                <Phone size={18} />
                                                Call Now
                                            </a>
                                            <button
                                                onClick={() => handleEnquiryClick(visa.title)}
                                                className="px-6 py-3 rounded-xl font-semibold border-2 border-zinc-200 text-zinc-700 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2"
                                            >
                                                Contact Us
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-zinc-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                                Why Choose Us for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    Visa Services?
                                </span>
                            </h2>
                            <p className="text-zinc-500 max-w-2xl mx-auto">
                                We make visa processing simple, fast, and stress-free
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Shield,
                                    title: "100% Genuine",
                                    desc: "Legitimate processing with complete transparency",
                                },
                                {
                                    icon: Clock,
                                    title: "Fast Processing",
                                    desc: "Quick turnaround time of 3-5 working days",
                                },
                                {
                                    icon: Users,
                                    title: "Expert Team",
                                    desc: "Experienced visa consultants at your service",
                                },
                                {
                                    icon: FileText,
                                    title: "Documentation Help",
                                    desc: "Complete assistance with all paperwork",
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-zinc-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center group"
                                >
                                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Visa Application?
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                Contact us today for a free consultation. Our experts will guide you through the entire process.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="tel:+919460724814"
                                    className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                                >
                                    <Phone size={20} />
                                    +91 94607 24814
                                </a>
                                <button
                                    onClick={() => handleEnquiryClick("Visa Enquiry")}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                                >
                                    Send Enquiry
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
