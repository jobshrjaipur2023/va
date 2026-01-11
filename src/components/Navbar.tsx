"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100/80"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 overflow-hidden"
            >
              <Image
                src="/images/logo.webp"
                alt="Job's HR Abroad Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-bold text-base tracking-tight text-zinc-900 block leading-tight">
                JOB&apos;S HR ABROAD
              </span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                Labour Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white border-t border-zinc-100"
        >
          <div className="container mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors border-b border-zinc-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
