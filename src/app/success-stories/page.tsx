"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

// Expanded success stories based on testimonials
const stories = [
    {
        name: "Rajesh Kumar",
        role: "Construction Supervisor",
        location: "Dubai, UAE",
        imageChar: "R",
        headline: "From Struggle to Stability in Dubai",
        content: "I was working as a daily wage laborer in India, barely making ends meet. I approached Job's HR Abroad with little hope, but their team was incredibly supportive. They assessed my experience and suggested I apply for a supervisor role. They helped me clean up my resume and prepared me for the interview. Within 2 months, I was on a flight to Dubai. Today, I supervise a team of 15 people and send enough money home to build a proper house for my parents.",
        stats: { salary: "3.5x Hike", time: "45 Days", type: "Full-Time" }
    },
    {
        name: "Priya Sharma",
        role: "Healthcare Assistant",
        location: "London, UK",
        imageChar: "P",
        headline: "Achieving the UK Dream",
        content: "Moving to the UK seemed like an impossible dream due to the strict paperwork. The team at Job's HR Abroad are experts. They guided me through the entire NHS application process, visa documentation, and even helped me find accommodation in London. I am now happily working at a prestigious hospital, and my career growth has been phenomenal.",
        stats: { salary: "5x Hike", time: "3 Months", type: "Contract" }
    },
    {
        name: "Mohammad Iqbal",
        role: "Electrical Technician",
        location: "Doha, Qatar",
        imageChar: "M",
        headline: "Building the Future in Qatar",
        content: "I wanted to work on big projects, and Job's HR Abroad connected me with a leading infrastructure company in Qatar. The transparency was refreshing - no hidden costs, everything was explained upfront. The job is challenging and rewarding, and the company takes great care of its employees. I've recommended this agency to all my friends.",
        stats: { salary: "3x Hike", time: "30 Days", type: "Full-Time" }
    },
    {
        name: "Kavita Singh",
        role: "Registered Nurse",
        location: "Berlin, Germany",
        imageChar: "K",
        headline: "A New Life in Europe",
        content: "Language was a barrier for me, but the agency encouraged me. They not only processed my job application but also connected me with language training resources. Today I am a respected nurse in Berlin. The work-life balance is amazing, and I have traveled to 5 European countries in the last year alone. Thank you for making this possible!",
        stats: { salary: "4x Hike", time: "4 Months", type: "Full-Time" }
    },
    {
        name: "Vikram Yadav",
        role: "Heavy Crane Operator",
        location: "Dubai, UAE",
        imageChar: "V",
        headline: "Heavy Lifting, Heavy Earnings",
        content: "I had the skills but not the right platform. Job's HR Abroad recognized my potential and placed me with a major construction firm in Dubai. The safety standards here are world-class, and the pay is excellent. I have cleared all my family debts in just one year of working here.",
        stats: { salary: "4x Hike", time: "40 Days", type: "Full-Time" }
    },
    {
        name: "Neha Gupta",
        role: "Sous Chef",
        location: "Sydney, Australia",
        imageChar: "N",
        headline: "Cooking Up Success Down Under",
        content: "The hospitality industry in Australia is booming, and I wanted to be part of it. The agency helped me showcase my culinary portfolio to top hotels. The interview prep was crucial. Now I'm working in a 5-star hotel kitchen in Sydney, learning new cuisines every day and earning in dollars!",
        stats: { salary: "6x Hike", time: "3.5 Months", type: "Sponsorship" }
    },
    {
        name: "Amit Patel",
        role: "IT Systems Engineer",
        location: "Riyadh, Saudi Arabia",
        imageChar: "A",
        headline: "Tech Career Accelerated",
        content: "The tech scene in Saudi Arabia is growing fast. Job's HR Abroad matched me with a company undergoing digital transformation. The project exposure is unlike anything I would have got back home. Plus, the tax-free income is a huge bonus which helps me save massively for my future.",
        stats: { salary: "3.5x Hike", time: "2 Months", type: "Contract" }
    }
];

export default function SuccessStoriesPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pt-24 pb-24">
            {/* Hero Section */}
            <section className="bg-white py-20 border-b border-zinc-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-4 block">Success Stories</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Real People. Real Careers.</h1>
                        <p className="text-zinc-500 text-lg">
                            Read how we've helped hundreds of professionals transform their lives through international career opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-16 max-w-5xl">
                <div className="grid gap-8">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Profile Info */}
                                <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-zinc-100 pb-6 md:pb-0 md:pr-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-blue-500/20 mb-4 group-hover:scale-110 transition-transform">
                                        {story.imageChar}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-zinc-900">{story.name}</h3>
                                        <p className="text-blue-600 font-medium">{story.role}</p>
                                        <div className="flex items-center gap-1 text-zinc-400 text-sm mt-1 justify-center md:justify-start">
                                            <MapPin size={14} />
                                            {story.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:w-3/4">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Quote className="text-blue-100 flex-shrink-0" size={40} />
                                        <h2 className="text-2xl font-bold text-zinc-800">{story.headline}</h2>
                                    </div>
                                    <p className="text-zinc-600 leading-relaxed mb-8">
                                        {story.content}
                                    </p>

                                    {/* Highlights */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                                            <span className="block text-xl font-bold text-zinc-900">{story.stats.salary}</span>
                                            <span className="text-xs text-zinc-500 uppercase tracking-wide">Salary Growth</span>
                                        </div>
                                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                                            <span className="block text-xl font-bold text-zinc-900">{story.stats.time}</span>
                                            <span className="text-xs text-zinc-500 uppercase tracking-wide">Placement Time</span>
                                        </div>
                                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                                            <span className="block text-xl font-bold text-zinc-900">{story.stats.type}</span>
                                            <span className="text-xs text-zinc-500 uppercase tracking-wide">Job Type</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
