"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Mail, MapPin, Briefcase, CheckCircle } from "lucide-react";
import { useState } from "react";

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    jobCategory: string;
}

export function JobApplicationModal({ isOpen, onClose, jobTitle, jobCategory }: JobApplicationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        experience: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - In production, connect to your backend/email service
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Here you would typically send data to your backend
        console.log("Form submitted:", { ...formData, jobTitle, jobCategory });

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 2 seconds and close
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", phone: "", email: "", city: "", experience: "", message: "" });
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-white rounded-3xl shadow-2xl z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Success State */}
                        {isSubmitted ? (
                            <div className="p-8 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Application Submitted!</h3>
                                <p className="text-zinc-500">We will contact you soon regarding your application for {jobTitle}.</p>
                            </div>
                        ) : (
                            <>
                                {/* Header */}
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white relative">
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                    <h2 className="text-2xl font-bold mb-1">Job Application</h2>
                                    <p className="text-blue-100 text-sm">Apply for: {jobTitle}</p>
                                    <p className="text-blue-200 text-xs mt-1">Category: {jobCategory}</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="+91 98765 43210"
                                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="your.email@example.com"
                                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Current City <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your city name"
                                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Experience */}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Experience Level <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                            <select
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                                            >
                                                <option value="">Select experience</option>
                                                <option value="fresher">Fresher (0-1 years)</option>
                                                <option value="1-3">1-3 years</option>
                                                <option value="3-5">3-5 years</option>
                                                <option value="5+">5+ years</option>
                                            </select>
                                        </div>
                                    </div>



                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Additional Message (Optional)
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about yourself..."
                                            rows={3}
                                            className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Submit Application
                                            </>
                                        )}
                                    </motion.button>

                                    <p className="text-xs text-zinc-400 text-center">
                                        By submitting, you agree to our Terms of Service and Privacy Policy
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
