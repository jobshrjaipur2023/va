"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { JobApplicationModal } from "@/components/JobApplicationModal";

// Define a subset of featured jobs with assigned images
const featuredJobs = [
  {
    id: 1,
    title: "Arc Welder",
    location: "Dubai, UAE",
    salary: "$1,500/mo",
    rating: 4.8,
    description: "Experienced arc welder needed for major construction projects. Overtime available.",
    image: "/images/feature-workers.png", // Using existing image
    category: "Construction"
  },
  {
    id: 2,
    title: "Civil Engineer",
    location: "Riyadh, Saudi Arabia",
    salary: "$3,500/mo",
    rating: 4.9,
    description: "Looking for civil engineers with 5+ years experience for infrastructure development.",
    image: "/images/saudi.webp",
    category: "Engineering"
  },
  {
    id: 3,
    title: "Hospitality Staff",
    location: "London, UK",
    salary: "£2,200/mo",
    rating: 4.7,
    description: "Waiters, chefs, and housekeeping staff required for premium hotels in London.",
    image: "/images/uk.webp",
    category: "Hospitality"
  },
  {
    id: 4,
    title: "Heavy Driver",
    location: "Toronto, Canada",
    salary: "$4,200/mo",
    rating: 4.9,
    description: "Licensed heavy truck drivers needed for long-haul logistics operations.",
    image: "/images/canada.webp",
    category: "Transport"
  }
];

export function Destinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({ title: "", category: "" });

  const handleApplyClick = (jobTitle: string, jobCategory: string) => {
    setSelectedJob({ title: jobTitle, category: jobCategory });
    setIsModalOpen(true);
  };

  return (
    <section id="destinations" className="py-24 bg-zinc-50/50 relative overflow-hidden">
      {/* Job Application Modal (Hidden by default) */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob.title}
        jobCategory={selectedJob.category}
      />

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
              Featured Positions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
              Latest featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl">
              Explore active job listings across the globe. New positions added weekly.
            </p>
          </div>
          <Link href="/jobs">
            <motion.button
              whileHover={{ x: 5 }}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              View All Positions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 text-xs font-semibold text-zinc-700 shadow-sm border border-zinc-100 z-10">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {job.rating}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 z-20">
                  <Link href="/jobs">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium shadow-lg"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-bold text-zinc-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-zinc-500 text-sm mb-4 line-clamp-2 leading-relaxed min-h-[40px]">
                  {job.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium block">
                      Salary
                    </span>
                    <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {job.salary}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApplyClick(job.title, job.category)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-medium shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            View All Positions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
