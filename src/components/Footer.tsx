"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Send, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "International Recruitment", href: "#services" },
    { label: "Visit Visa", href: "/visa#visit" },
    { label: "Employment Visa", href: "/visa#employment" },
    { label: "Manpower Supply", href: "#services" },
    { label: "Interview Preparation", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Visa Services", href: "/visa" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", href: "/#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-4 mb-8 group no-underline">
              {/* Stylized Logo */}
              <div className="relative w-14 h-14 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full w-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-2xl">J</span>
                </div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  JOB&apos;S HR ABROAD
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
                    Labour Service
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
              Connecting global talent with world-class opportunities. Your trusted partner in international recruitment since 2015.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">K-A-7 Third Floor, JTM Mall, Jagatpura, Jaipur</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm">+91 94607 24814</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">jobshrjaipur2023@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full group-hover:bg-blue-500 transition-colors" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full group-hover:bg-cyan-500 transition-colors" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Stats Mini */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">1K+</span>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Placed</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">15+</span>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Countries</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">8+</span>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Job&apos;s HR Abroad Labour Service. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
