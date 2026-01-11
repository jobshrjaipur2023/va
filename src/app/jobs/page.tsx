"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, DollarSign, X } from "lucide-react";
import { JobApplicationModal } from "@/components/JobApplicationModal";

const jobs = [
    // Dubai Construction Jobs
    { city: "Dubai", country: "UAE", category: "Construction", job_title: "Arc Welder", salary: "AED 1500 + OT", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Construction", job_title: "Carpenter", salary: "AED 1450 + OT", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Construction", job_title: "Wall Painter", salary: "AED 1450 + OT", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Construction", job_title: "Mason (Block / Plaster)", salary: "AED 1570 + OT", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Construction", job_title: "Steel Fixer", salary: "AED 1450 + OT", experience_level: "Experience" },

    // Dubai Technical Jobs
    { city: "Dubai", country: "UAE", category: "Electrical", job_title: "Electrician", salary: "AED 1550 + OT", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Plumbing", job_title: "Plumber", salary: "AED 1500 + OT", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "HVAC", job_title: "AC Technician", salary: "AED 1500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Safety", job_title: "HSE Officer", salary: "AED 2000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Support", job_title: "Help Desk Operator", salary: "AED 1500", experience_level: "Fresher / Experience" },

    // Dubai Engineering Jobs
    { city: "Dubai", country: "UAE", category: "Engineering", job_title: "Quality Engineer (Aluminium & Glass)", salary: "AED 4000 - 7000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Engineering", job_title: "Design Engineer (Aluminium & Glass)", salary: "AED 2500 - 3500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Engineering", job_title: "Project Engineer", salary: "AED 4000 - 7000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Engineering", job_title: "Structural Engineer / Designer", salary: "AED 3000 - 4000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Sales", job_title: "Sales Coordinator", salary: "AED 2500 - 3500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Production", job_title: "Production Manager", salary: "AED 4000 - 7000", experience_level: "Experience" },

    // Dubai Manufacturing Jobs
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "CNC Bending Machine Operator", salary: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "CNC Shearing Machine Operator", salary: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "Laser Cutting Machine Operator", salary: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "Grinder", salary: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "Assembly Fitter", salary: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "Metal Works Site Fitter", salary: "Negotiable", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Manufacturing", job_title: "Metal Works Site Foreman", salary: "Negotiable", experience_level: "Experience" },

    // Dubai Electrical & QA Jobs
    { city: "Dubai", country: "UAE", category: "Electrical", job_title: "Design Engineer – Switchgear", salary: "AED 4000 - 5000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "QA/QC", job_title: "Welding Inspector / Supervisor", salary: "AED 2000 - 3000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Drafting", job_title: "Electrical Draftsman", salary: "AED 2000 - 3000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Admin", job_title: "Document Controller", salary: "AED 2000 - 3000", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Welding", job_title: "Welder", salary: "AED 1500 - 1800", experience_level: "Experience" },

    // Dubai Fresher Jobs
    { city: "Dubai", country: "UAE", category: "Warehouse", job_title: "Warehouse Assistant", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Factory", job_title: "Factory Worker", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Packing", job_title: "Packing Helper", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Kitchen", job_title: "Kitchen Helper", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Office", job_title: "Office Assistant", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Office", job_title: "Office Boy", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Cleaning", job_title: "Cleaner / Housekeeping", salary: "AED 2500 - 4500", experience_level: "Fresher" },

    // Dubai Driving & Logistics Jobs
    { city: "Dubai", country: "UAE", category: "Driving", job_title: "Light Vehicle Driver", salary: "AED 2500 - 4500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Delivery", job_title: "Delivery Driver", salary: "AED 2500 - 4500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Transport", job_title: "Bike Rider", salary: "AED 2500 - 4500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Logistics", job_title: "Loader / Unloader", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Logistics", job_title: "Logistics Assistant", salary: "AED 2500 - 4500", experience_level: "Fresher" },

    // Dubai Hospitality Jobs
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Waiter / Waitress", salary: "AED 2000 - 2500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Barista", salary: "AED 3000 - 3500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Receptionist", salary: "AED 2500 - 4500", experience_level: "Fresher / Experience" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Hotel Housekeeping", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Restaurant Helper", salary: "AED 2500 - 4500", experience_level: "Fresher" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Steward", salary: "AED 1700", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Shisha Man", salary: "AED 1800 - 2400", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "Commis Chef", salary: "AED 2000 - 3500", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Hospitality", job_title: "CDP (Chef de Partie)", salary: "AED 3000 - 4000", experience_level: "Experience" },

    // Global Jobs - Saudi Arabia
    { city: "Riyadh", country: "Saudi Arabia", category: "Engineering", job_title: "Civil Engineer", salary: "SAR 4500", experience_level: "Experience" },
    { city: "Jeddah", country: "Saudi Arabia", category: "Transport", job_title: "Heavy Driver", salary: "SAR 2500 + Trip", experience_level: "Experience" },

    // Global Jobs - Qatar
    { city: "Doha", country: "Qatar", category: "Security", job_title: "Security Guard", salary: "QAR 2200", experience_level: "Fresher" },
    { city: "Doha", country: "Qatar", category: "Hospitality", job_title: "Hotel Waiter", salary: "QAR 1800 + Tips", experience_level: "Fresher" },

    // Global Jobs - UK
    { city: "London", country: "UK", category: "Healthcare", job_title: "Care Assistant", salary: "£2200", experience_level: "Fresher / Experience" },
    { city: "London", country: "UK", category: "Construction", job_title: "Construction Helper", salary: "£1800", experience_level: "Fresher" },

    // Global Jobs - Canada
    { city: "Toronto", country: "Canada", category: "Logistics", job_title: "Warehouse Associate", salary: "$3200", experience_level: "Fresher" },
    { city: "Toronto", country: "Canada", category: "Transport", job_title: "Truck Driver", salary: "$4500", experience_level: "Experience" },

    // Global Jobs - Europe
    { city: "Berlin", country: "Germany", category: "Technical", job_title: "CNC Operator", salary: "€2800", experience_level: "Experience" },
    { city: "Moscow", country: "Russia", category: "Construction", job_title: "General Labor", salary: "RUB 65000", experience_level: "Fresher" },
    { city: "Port Louis", country: "Mauritius", category: "Textile", job_title: "Tailor", salary: "$800 + Food", experience_level: "Experience" },

    // UAE Other Emirates
    { city: "Abu Dhabi", country: "UAE", category: "Oil & Gas", job_title: "Pipe Fitter", salary: "AED 2500", experience_level: "Experience" },
    { city: "Sharjah", country: "UAE", category: "Production", job_title: "Factory Helper", salary: "AED 1200 + OT", experience_level: "Fresher" },

    // Taxi & Delivery Jobs
    { city: "Dubai", country: "UAE", category: "Transport", job_title: "Taxi Driver", salary: "AED 3000 + Commission", experience_level: "Experience" },
    { city: "Sharjah", country: "UAE", category: "Transport", job_title: "Taxi Driver", salary: "AED 2500 + Commission", experience_level: "Experience" },
    { city: "Dubai", country: "UAE", category: "Delivery", job_title: "Talabat Bike Rider", salary: "AED 2500 + Tips", experience_level: "Fresher / Experience" },
    { city: "Dubai", country: "UAE", category: "Delivery", job_title: "Noon Delivery Rider", salary: "AED 2200 + Incentives", experience_level: "Fresher / Experience" },
    { city: "Dubai", country: "UAE", category: "Delivery", job_title: "Careem Bike Captain", salary: "AED 2800 + Tips", experience_level: "Experience" },
];

export default function JobsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedExperience, setSelectedExperience] = useState("All");

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState({ title: "", category: "" });

    // Get unique categories
    const categories = useMemo(() => {
        const cats = Array.from(new Set(jobs.map(job => job.category)));
        return ["All", ...cats.sort()];
    }, []);

    // Filter jobs
    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchesSearch = job.job_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.country.toLowerCase().includes(searchQuery.toLowerCase());
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

    const handleApplyClick = (jobTitle: string, jobCategory: string) => {
        setSelectedJob({ title: jobTitle, category: jobCategory });
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-zinc-50 pt-24 pb-24">
            {/* Job Application Modal */}
            <JobApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob.title}
                jobCategory={selectedJob.category}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                {/* World Map Background Decoration */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-blue-100 text-sm font-medium mb-6 border border-white/20">
                            Global Opportunities
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Find Your Dream Job <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Abroad</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Explore active vacancies in UAE, Saudi Arabia, UK, Canada & Europe.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-12 relative z-20">
                {/* Search & Filters */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-zinc-100">
                    <div className="grid md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by job title, country, or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat === "All" ? "All Categories" : cat}</option>
                            ))}
                        </select>

                        {/* Experience Filter */}
                        <select
                            value={selectedExperience}
                            onChange={(e) => setSelectedExperience(e.target.value)}
                            className="px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                            <option value="All">All Experience Levels</option>
                            <option value="Fresher">Fresher Only</option>
                            <option value="Experience">Experienced Only</option>
                        </select>
                    </div>

                    {/* Active Filters */}
                    {(searchQuery || selectedCategory !== "All" || selectedExperience !== "All") && (
                        <div className="mt-4 flex items-center gap-2 flex-wrap animate-in fade-in slide-in-from-top-2">
                            <span className="text-sm text-zinc-500">Active filters:</span>
                            {searchQuery && (
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                    "{searchQuery}"
                                </span>
                            )}
                            {selectedCategory !== "All" && (
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                    {selectedCategory}
                                </span>
                            )}
                            {selectedExperience !== "All" && (
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                    {selectedExperience}
                                </span>
                            )}
                            <button
                                onClick={clearFilters}
                                className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-full text-sm flex items-center gap-1 font-medium transition-colors"
                            >
                                <X size={14} /> Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                {/* Jobs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden"
                        >
                            {/* Decorative top bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {job.category}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.experience_level.includes("Fresher")
                                    ? "bg-green-50 text-green-700 border border-green-100"
                                    : "bg-purple-50 text-purple-700 border border-purple-100"
                                    }`}>
                                    {job.experience_level}
                                </span>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-1">
                                {job.job_title}
                            </h3>

                            {/* Details */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-zinc-600 text-sm">
                                    <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                                    <span className="truncate">{job.city}, {job.country}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-600 text-sm">
                                    <DollarSign size={16} className="text-green-500 flex-shrink-0" />
                                    <span className="font-medium text-zinc-900">{job.salary}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-600 text-sm">
                                    <Briefcase size={16} className="text-purple-500 flex-shrink-0" />
                                    <span>Full Time</span>
                                </div>
                            </div>

                            {/* Apply Button */}
                            <button
                                onClick={() => handleApplyClick(job.job_title, job.category)}
                                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                            >
                                Apply Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-20 animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-200">
                            <Search className="text-zinc-400" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">No jobs found</h3>
                        <p className="text-zinc-500 mb-6 max-w-md mx-auto">
                            We couldn't find any positions matching your search. Try broadening your filters.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
