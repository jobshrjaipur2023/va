"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, FileText, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
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
                            <Shield className="text-blue-600" size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Privacy Policy</h1>
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
                            At Job's HR Abroad, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our recruitment services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                <FileText className="text-blue-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Information We Collect</h2>
                        </div>

                        <div className="space-y-6 text-zinc-600">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Personal Information</h3>
                                <p>When you register with us or apply for jobs, we may collect:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li>Full name, date of birth, and contact details (email, phone number, address)</li>
                                    <li>Passport information and identification documents</li>
                                    <li>Educational qualifications and work experience</li>
                                    <li>Professional certifications and skills</li>
                                    <li>Resume/CV and cover letters</li>
                                    <li>References and background check information</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Automatically Collected Information</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>IP address and browser type</li>
                                    <li>Device information and operating system</li>
                                    <li>Pages visited and time spent on our website</li>
                                    <li>Referring website addresses</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                                <UserCheck className="text-cyan-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">How We Use Your Information</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>We use the collected information for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To match you with suitable job opportunities abroad</li>
                                <li>To process visa applications and work permits</li>
                                <li>To communicate with you about job openings and application status</li>
                                <li>To verify your credentials and conduct background checks</li>
                                <li>To provide pre-departure training and support services</li>
                                <li>To comply with legal and regulatory requirements</li>
                                <li>To improve our services and website functionality</li>
                                <li>To send newsletters and promotional materials (with your consent)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                                <Globe className="text-purple-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Information Sharing and Disclosure</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>We may share your information with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Potential Employers:</strong> We share your resume and credentials with verified employers for job placement purposes</li>
                                <li><strong>Government Authorities:</strong> For visa processing, work permits, and legal compliance</li>
                                <li><strong>Service Providers:</strong> Third-party vendors who assist with background checks, document verification, and training</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                            </ul>
                            <p className="mt-4">
                                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                            </p>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                                <Lock className="text-green-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Data Security</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Encrypted data transmission (SSL/TLS)</li>
                                <li>Secure servers and databases</li>
                                <li>Regular security audits and updates</li>
                                <li>Access controls and authentication</li>
                                <li>Employee training on data protection</li>
                            </ul>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                                <Eye className="text-orange-600" size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 m-0">Your Rights</h2>
                        </div>

                        <div className="text-zinc-600 space-y-4">
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access and review your personal information</li>
                                <li>Request corrections to inaccurate data</li>
                                <li>Request deletion of your data (subject to legal obligations)</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Withdraw consent for data processing</li>
                                <li>Lodge a complaint with relevant data protection authorities</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, please contact us at <a href="mailto:privacy@jobshrabroad.com" className="text-blue-600 hover:underline">privacy@jobshrabroad.com</a>
                            </p>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Data Retention</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. After the retention period, we securely delete or anonymize your data.
                            </p>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Cookies and Tracking</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Changes to This Policy</h2>
                        <div className="text-zinc-600 space-y-4">
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last Updated" date.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="mb-12 p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Contact Us</h2>
                        <div className="text-zinc-600 space-y-2">
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <p className="font-medium text-zinc-900">Job's HR Abroad Labour Service</p>
                            <p>K-A-7 Third Floor, JTM Mall, Jagatpura, Jaipur (Rajasthan) 302017</p>
                            <p>Email: <a href="mailto:privacy@jobshrabroad.com" className="text-blue-600 hover:underline">privacy@jobshrabroad.com</a></p>
                            <p>Phone: <a href="tel:+919460724814" className="text-blue-600 hover:underline">+91 94607 24814</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
