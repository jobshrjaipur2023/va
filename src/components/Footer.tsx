"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "International Recruitment", href: "#services" },
    { label: "Visa & Documentation", href: "#services" },
    { label: "Manpower Supply", href: "#services" },
    { label: "Interview Preparation", href: "#services" },
    { label: "Pre-Departure Training", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", href: "/#contact" },
  ],
};



export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden">
      {/* Gradient Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="py-16 border-b border-zinc-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Global Journey?
                </span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-lg">
                Subscribe to get the latest job opportunities and career tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-zinc-800/50 border border-zinc-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.webp"
                alt="Job's HR Abroad"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="font-bold text-lg block">JOB&apos;S HR ABROAD</span>
                <span className="text-xs tracking-wider text-zinc-500 uppercase">
                  Labour Service
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 leading-relaxed text-sm mb-6 max-w-sm">
              Connecting global talent with world-class opportunities. Your trusted partner in international recruitment.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
              <div>
                <span className="text-2xl font-bold text-white">1000+</span>
                <p className="text-xs text-zinc-500">Workers Placed</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">15+</span>
                <p className="text-xs text-zinc-500">Countries</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">8+</span>
                <p className="text-xs text-zinc-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Success Stories */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Job&apos;s HR Abroad Labour Service. All rights reserved.
          </p>



          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
