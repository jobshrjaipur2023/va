"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is Job's HR Abroad?",
        answer:
            "Job's HR Abroad is India's leading international recruitment agency based in Jaipur, Rajasthan. Founded by Varis Khan and Aman Sharma in 2015, we specialize in connecting skilled Indian professionals with verified employers in UAE, Saudi Arabia, Qatar, UK, Canada, Germany, Russia, and Mauritius. We have successfully placed over 10,000 candidates in overseas positions.",
    },
    {
        question: "Which countries does Job's HR Abroad provide jobs for?",
        answer:
            "Job's HR Abroad provides job placements in multiple countries including: UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah), Qatar (Doha), United Kingdom (London), Canada (Toronto, Vancouver), Germany (Berlin), Russia (Moscow), and Mauritius. We specialize in Gulf countries with the highest success rate in UAE and Saudi Arabia.",
    },
    {
        question: "What types of jobs are available through Job's HR Abroad?",
        answer:
            "We offer a wide range of job categories including: Construction (Welders, Carpenters, Masons, Steel Fixers), Technical (Electricians, Plumbers, AC Technicians), Hospitality (Chefs, Waiters, Hotel Staff), Driving (Taxi Drivers, Delivery Riders for Talabat, Noon, Careem), Manufacturing (CNC Operators, Factory Workers), Healthcare (Nurses, Care Assistants), and Office roles (Document Controllers, Receptionists).",
    },
    {
        question: "Is Job's HR Abroad a genuine and trusted agency?",
        answer:
            "Yes, Job's HR Abroad is a legitimate and government-registered recruitment agency operating from Jaipur, India. We are known for our transparent processes, verified employer networks, and zero-tolerance policy for fraud. With over 10,000 successful placements and a 4.8-star rating from 1,250+ reviews, we are one of India's most trusted overseas recruitment consultancies.",
    },
    {
        question: "How can I apply for overseas jobs?",
        answer:
            "Applying for overseas jobs through Job's HR Abroad is simple: 1) Visit our website at jobshrabroad.com and browse available positions, 2) Click 'Apply Now' on any job listing and fill out the application form, 3) Our team will contact you within 24 hours for a free consultation, 4) We handle everything from interview preparation to visa processing and flight bookings.",
    },
    {
        question: "What is the consultation fee?",
        answer:
            "Job's HR Abroad offers FREE initial consultation for all candidates. We assess your skills, experience, and career goals at no cost. Our transparent fee structure is discussed only after you receive a confirmed job offer from an employer. We never charge upfront fees before job confirmation.",
    },
    {
        question: "How do I contact Job's HR Abroad?",
        answer:
            "You can contact Job's HR Abroad through: Phone: +91 94607 24814, Email: jobshrjaipur2023@gmail.com, Office Address: K-A-7 Third Floor, JTM Mall, Jagatpura, Jaipur, Rajasthan 302017. Office hours are Monday to Saturday, 10 AM to 7 PM IST.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-zinc-50" id="faq">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                        <HelpCircle size={16} />
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
                        Got Questions?{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            We Have Answers
                        </span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Everything you need to know about working abroad through Job&apos;s HR Abroad
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <h3 className="font-semibold text-zinc-900 pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <p className="px-6 pb-5 text-zinc-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-zinc-500 mb-4">Still have questions?</p>
                    <a
                        href="tel:+919460724814"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                        Call Us: +91 94607 24814
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
