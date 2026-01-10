"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, DollarSign, Filter, X } from "lucide-react";
import Link from "next/link";

const jobs = [
    { city: "Dubai", category: "Construction", job_title: "Arc Welder", salary_aed: "1500 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "Construction", job_title: "Carpenter", salary_aed: "1450 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "Construction", job_title: "Wall Painter", salary_aed: "1450 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "Construction", job_title: "Mason (Block / Plaster)", salary_aed: "1570 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "Construction", job_title: "Steel Fixer", salary_aed: "1450 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "Electrical", job_title: "Electrician", salary_aed: "1550 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "Plumbing", job_title: "Plumber", salary_aed: "1500 + OT", experience_level: "Experience" },
    { city: "Dubai", category: "HVAC", job_title: "AC Technician", salary_aed: "1500", experience_level: "Experience" },
    { city: "Dubai", category: "Safety", job_title: "HSE Officer", salary_aed: "2000", experience_level: "Experience" },
    { city: "Dubai", category: "Support", job_title: "Help Desk Operator", salary_aed: "1500", experience_level: "Fresher / Experience" },
    { city: "Dubai", category: "Engineering", job_title: "Quality Engineer (Aluminium & Glass)", salary_aed: "4000 - 7000", experience_level: "Experience" },
    { city: "Dubai", category: "Engineering", job_title: "Design Engineer (Aluminium & Glass)", salary_aed: "2500 - 3500", experience_level: "Experience" },
    { city: "Dubai", category: "Sales", job_title: "Sales Coordinator", salary_aed: "2500 - 3500", experience_level: "Experience" },
    { city: "Dubai", category: "Production", job_title: "Production Manager", salary_aed: "4000 - 7000", experience_level: "Experience" },
    { city: "Dubai", category: "Engineering", job_title: "Project Engineer", salary_aed: "4000 - 7000", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "CNC Bending Machine Operator", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "CNC Shearing Machine Operator", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "Laser Cutting Machine Operator", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "Grinder", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "Assembly Fitter", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "Metal Works Site Fitter", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Manufacturing", job_title: "Metal Works Site Foreman", salary_aed: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", category: "Electrical", job_title: "Design Engineer – Switchgear", salary_aed: "4000 - 5000", experience_level: "Experience" },
    { city: "Dubai", category: "QA/QC", job_title: "Welding Inspector / Supervisor", salary_aed: "2000 - 3000", experience_level: "Experience" },
    { city: "Dubai", category: "Drafting", job_title: "Electrical Draftsman", salary_aed: "2000 - 3000", experience_level: "Experience" },
    { city: "Dubai", category: "Engineering", job_title: "Structural Engineer / Designer", salary_aed: "3000 - 4000", experience_level: "Experience" },
    { city: "Dubai", category: "Admin", job_title: "Document Controller", salary_aed: "2000 - 3000", experience_level: "Experience" },
    { city: "Dubai", category: "Welding", job_title: "Welder", salary_aed: "1500 - 1800", experience_level: "Experience" },
    { city: "Dubai", category: "Warehouse", job_title: "Warehouse Assistant", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Factory", job_title: "Factory Worker", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Packing", job_title: "Packing Helper", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Kitchen", job_title: "Kitchen Helper", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Office", job_title: "Office Assistant", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Office", job_title: "Office Boy", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Cleaning", job_title: "Cleaner / Housekeeping", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Driving", job_title: "Light Vehicle Driver", salary_aed: "2500 - 4500", experience_level: "Experience" },
    { city: "Dubai", category: "Delivery", job_title: "Delivery Driver", salary_aed: "2500 - 4500", experience_level: "Experience" },
    { city: "Dubai", category: "Transport", job_title: "Bike Rider", salary_aed: "2500 - 4500", experience_level: "Experience" },
    { city: "Dubai", category: "Logistics", job_title: "Loader / Unloader", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Logistics", job_title: "Logistics Assistant", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Hospitality", job_title: "Waiter / Waitress", salary_aed: "2000 - 2500", experience_level: "Experience" },
    { city: "Dubai", category: "Hospitality", job_title: "Barista", salary_aed: "3000 - 3500", experience_level: "Experience" },
    { city: "Dubai", category: "Hospitality", job_title: "Receptionist", salary_aed: "2500 - 4500", experience_level: "Fresher / Experience" },
    { city: "Dubai", category: "Hospitality", job_title: "Hotel Housekeeping", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Hospitality", job_title: "Restaurant Helper", salary_aed: "2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", category: "Hospitality", job_title: "Steward", salary_aed: "1700", experience_level: "Experience" },
    { city: "Dubai", category: "Hospitality", job_title: "Shisha Man", salary_aed: "1800 - 2400", experience_level: "Experience" },
    { city: "Dubai", category: "Hospitality", job_title: "Commis Chef", salary_aed: "2000 - 3500", experience_level: "Experience" },
    { city: "Dubai", category: "Hospitality", job_title: "CDP (Chef de Partie)", salary_aed: "3000 - 4000", experience_level: "Experience" },
];

export default function JobsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedExperience, setSelectedExperience] = useState("All");

    // Get unique categories
    const categories = useMemo(() => {
        const cats = Array.from(new Set(jobs.map(job => job.category)));
        return ["All", ...cats.sort()];
    }, []);

    // Filter jobs
    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchesSearch = job.job_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
            const matchesExperience = selectedExperience === "All" ||
                job.experience_level.includes(selectedExperience);
            return matchesSearch && matchesCategory && matchesExperience;
        });
    }, [searchQuery, selectedCategory, selectedExperience]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("All");
        setSelectedExperience("All");
    };

    return (
        <main className="min-h-screen bg-zinc-50 pt-24 pb-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-500 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Find Your Dream Job in Dubai
                        </h1>
                        <p className="text-xl text-blue-50 mb-8">
                            {jobs.length} opportunities waiting for you
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                {/* Search & Filters */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                    <div className="grid md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        {/* Experience Filter */}
                        <select
                            value={selectedExperience}
                            onChange={(e) => setSelectedExperience(e.target.value)}
                            className="px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="All">All Levels</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Experience">Experience</option>
                        </select>
                    </div>

                    {/* Active Filters */}
                    {(searchQuery || selectedCategory !== "All" || selectedExperience !== "All") && (
                        <div className="mt-4 flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-zinc-500">Active filters:</span>
                            {searchQuery && (
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                    Search: {searchQuery}
                                </span>
                            )}
                            {selectedCategory !== "All" && (
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                    {selectedCategory}
                                </span>
                            )}
                            {selectedExperience !== "All" && (
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                    {selectedExperience}
                                </span>
                            )}
                            <button
                                onClick={clearFilters}
                                className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-full text-sm flex items-center gap-1"
                            >
                                <X size={14} /> Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-zinc-600">
                        Showing <span className="font-bold text-zinc-900">{filteredJobs.length}</span> jobs
                    </p>
                </div>

                {/* Jobs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                        >
                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                                    {job.category}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.experience_level.includes("Fresher")
                                        ? "bg-green-50 text-green-700"
                                        : "bg-purple-50 text-purple-700"
                                    }`}>
                                    {job.experience_level}
                                </span>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {job.job_title}
                            </h3>

                            {/* Details */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-zinc-600 text-sm">
                                    <MapPin size={16} className="text-blue-500" />
                                    {job.city}, UAE
                                </div>
                                <div className="flex items-center gap-2 text-zinc-600 text-sm">
                                    <DollarSign size={16} className="text-green-500" />
                                    AED {job.salary_aed}
                                </div>
                                <div className="flex items-center gap-2 text-zinc-600 text-sm">
                                    <Briefcase size={16} className="text-purple-500" />
                                    {job.experience_level}
                                </div>
                            </div>

                            {/* Apply Button */}
                            <Link
                                href="/#contact"
                                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="text-zinc-400" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">No jobs found</h3>
                        <p className="text-zinc-500 mb-6">Try adjusting your filters or search query</p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
