"use client";

import { motion } from "framer-motion";
import { Scale, AlertCircle, CheckCircle, XCircle, FileText, Users } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-24">
            {/* Hero Section */}
            <section className="bg-zinc-50 py-16 border-b border-zinc-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Scale className="text-blue-600" size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Terms of Service</h1>
                        <p className="text-zinc-500 text-lg">
                            Last updated: January 11, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <div className="prose prose-zinc max-w-none">
                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Welcome to Job's HR Abroad. These Terms of Service ("Terms") govern your use of our recruitment services and website. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
                        </p>
                    </section>

                    {/* Acceptance of Terms */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                <CheckCircle className="text-blue-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Acceptance of Terms</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>
                                By registering with Job's HR Abroad, submitting your application, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                            </p>
                            <p>
                                If you do not agree with any part of these Terms, you must not use our services.
                            </p>
                        </div>
                    </section>

                    {/* Services Provided */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                                <Users className="text-cyan-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Services Provided</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>Job's HR Abroad provides the following services:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>International job placement and recruitment</li>
                                <li>Visa and documentation assistance</li>
                                <li>Interview preparation and career counseling</li>
                                <li>Pre-departure training and orientation</li>
                                <li>Employer verification and job matching</li>
                                <li>Post-placement support (limited)</li>
                            </ul>
                            <p className="mt-4 font-medium text-zinc-700">
                                We act as an intermediary between candidates and employers. Final hiring decisions rest with the employer.
                            </p>
                        </div>
                    </section>

                    {/* Candidate Obligations */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                                <FileText className="text-purple-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Candidate Obligations</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>As a candidate using our services, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate, truthful, and complete information in your application</li>
                                <li>Submit genuine and unaltered documents (passport, certificates, etc.)</li>
                                <li>Attend scheduled interviews and meetings on time</li>
                                <li>Cooperate with background checks and verification processes</li>
                                <li>Inform us immediately of any changes to your contact details or availability</li>
                                <li>Pay agreed-upon service fees on time</li>
                                <li>Not engage with employers directly without our knowledge during the placement process</li>
                                <li>Comply with the laws and regulations of your destination country</li>
                            </ul>
                        </div>
                    </section>

                    {/* Fees and Payment */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Fees and Payment</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                Our service fees vary depending on the job role, destination country, and services required. All fees will be clearly communicated to you before you commit to our services.
                            </p>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-6">
                                <div className="flex gap-3">
                                    <AlertCircle className="text-yellow-600 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-yellow-900 mb-2">Important Payment Terms:</h3>
                                        <ul className="list-disc pl-6 space-y-1 text-yellow-800 text-sm">
                                            <li>Fees are non-refundable once visa processing has begun</li>
                                            <li>Partial refunds may be considered if job placement fails due to our fault</li>
                                            <li>Payment plans are available for certain services</li>
                                            <li>All payments must be made through official channels only</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* No Guarantee */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                <XCircle className="text-red-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">No Guarantee of Placement</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>
                                While we make every effort to secure suitable job placements, we cannot guarantee employment. Job offers depend on:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Employer requirements and preferences</li>
                                <li>Your qualifications, skills, and interview performance</li>
                                <li>Visa approval by government authorities</li>
                                <li>Market conditions and job availability</li>
                            </ul>
                            <p className="mt-4 font-medium text-zinc-700">
                                We are not responsible for visa rejections, employer decisions, or changes in immigration policies.
                            </p>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Intellectual Property</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                All content on our website, including text, graphics, logos, and software, is the property of Job's HR Abroad and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.
                            </p>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Limitation of Liability</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                Job's HR Abroad shall not be liable for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Any indirect, incidental, or consequential damages</li>
                                <li>Loss of income, profits, or opportunities</li>
                                <li>Employer misconduct or breach of employment contract</li>
                                <li>Working conditions or treatment at the workplace</li>
                                <li>Delays caused by government authorities or third parties</li>
                                <li>Personal injuries or accidents occurring abroad</li>
                            </ul>
                            <p className="mt-4">
                                Our total liability shall not exceed the amount of fees paid by you for our services.
                            </p>
                        </div>
                    </section>

                    {/* Termination */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Termination</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                We reserve the right to terminate or suspend your access to our services at any time if you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Violate these Terms</li>
                                <li>Provide false or misleading information</li>
                                <li>Engage in fraudulent activities</li>
                                <li>Fail to pay agreed-upon fees</li>
                            </ul>
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Governing Law and Jurisdiction</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Changes to Terms</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting the updated Terms on our website. Your continued use of our services after changes constitutes acceptance of the new Terms.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="mb-12 p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Contact Us</h2>
                        <div className="text-zinc-600 space-y-2">
                            <p>If you have any questions about these Terms, please contact us:</p>
                            <p className="font-medium text-zinc-900">Job's HR Abroad Labour Service</p>
                            <p>K-A-7 Third Floor, JTM Mall, Jagatpura, Jaipur (Rajasthan) 302017</p>
                            <p>Email: <a href="mailto:support@jobshrabroad.com" className="text-blue-600 hover:underline">support@jobshrabroad.com</a></p>
                            <p>Phone: <a href="tel:+919460724814" className="text-blue-600 hover:underline">+91 94607 24814</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
