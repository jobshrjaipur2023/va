"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Dubai, UAE",
        role: "Construction Supervisor",
        review: "Job's HR Abroad changed my life! Within 2 months, I got placed in Dubai with an amazing package. The visa process was smooth and hassle-free.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        location: "London, UK",
        role: "Healthcare Assistant",
        review: "I was skeptical at first, but their team guided me through every step. Now I'm working in the UK with a reputed hospital. Highly recommended!",
        rating: 5,
    },
    {
        name: "Amit Patel",
        location: "Dubai, UAE",
        role: "Mechanical Engineer",
        review: "Professional service from start to finish. They found me the perfect engineering job in Dubai. The support team is always available.",
        rating: 5,
    },
    {
        name: "Sunita Devi",
        location: "Canada",
        role: "Hospitality Manager",
        review: "Best recruitment agency in Jaipur! They helped me relocate to Canada with my family. Forever grateful for their genuine support.",
        rating: 5,
    },
    {
        name: "Mohammad Iqbal",
        location: "Dubai, UAE",
        role: "Electrical Technician",
        review: "Trustworthy and reliable. No hidden charges, no false promises. Got my dream job in Dubai exactly as promised. Thank you team!",
        rating: 5,
    },
    {
        name: "Kavita Singh",
        location: "Germany",
        role: "Nurse",
        review: "They made my European dream come true! The documentation support was exceptional. Working in Germany now with great benefits.",
        rating: 5,
    },
    {
        name: "Vikram Yadav",
        location: "Dubai, UAE",
        role: "Crane Operator",
        review: "I've used other agencies before but none compare to Job's HR Abroad. Genuine opportunities and transparent process throughout.",
        rating: 5,
    },
    {
        name: "Neha Gupta",
        location: "Dubai, UAE",
        role: "Hotel Chef",
        review: "From interview preparation to visa stamping, they handled everything professionally. Landed a 5-star hotel job in Dubai!",
        rating: 5,
    },
    {
        name: "Suresh Verma",
        location: "Dubai, UAE",
        role: "Taxi Driver",
        review: "Started driving cab in Dubai within 45 days of applying. Great salary and accommodation provided. Best decision of my life!",
        rating: 5,
    },
    {
        name: "Ramesh Choudhary",
        location: "Dubai, UAE",
        role: "Civil Engineer",
        review: "As a civil engineer, I got placed in a top construction company in Dubai. The package exceeded my expectations. Highly professional team!",
        rating: 5,
    },
    {
        name: "Pooja Meena",
        location: "Dubai, UAE",
        role: "Receptionist",
        review: "Working as a receptionist in a luxury hotel in Dubai. The team helped me with everything from resume to visa. Truly grateful!",
        rating: 5,
    },
    {
        name: "Deepak Sharma",
        location: "Dubai, UAE",
        role: "AC Technician",
        review: "Got placed as AC technician in Dubai with free accommodation. The process was quick and completely transparent. Thank you!",
        rating: 5,
    },
    {
        name: "Anita Kumari",
        location: "Dubai, UAE",
        role: "Housekeeping Staff",
        review: "I'm earning 3x more than what I earned in India. Job's HR Abroad made my Dubai dream possible. Very happy with their service!",
        rating: 5,
    },
    {
        name: "Manish Tiwari",
        location: "Dubai, UAE",
        role: "Heavy Vehicle Driver",
        review: "Driving trucks in Dubai now with excellent salary. They converted my Indian license and handled all paperwork. Superb service!",
        rating: 5,
    },
    {
        name: "Rekha Joshi",
        location: "Dubai, UAE",
        role: "Salon Beautician",
        review: "Working in a premium salon in Dubai Mall area. Great pay and tips! The agency was honest and supportive throughout.",
        rating: 5,
    },
    {
        name: "Santosh Kumar",
        location: "Dubai, UAE",
        role: "Plumber",
        review: "From a small town in Bihar to Dubai - this agency made it happen! Earning well and supporting my family back home.",
        rating: 5,
    },
    {
        name: "Geeta Devi",
        location: "Dubai, UAE",
        role: "Nanny/Caretaker",
        review: "Taking care of a lovely family in Dubai. They treat me like family. All thanks to Job's HR Abroad for this opportunity!",
        rating: 5,
    },
    {
        name: "Ravi Shankar",
        location: "Dubai, UAE",
        role: "Security Guard",
        review: "Posted at a corporate building in Dubai. Good salary, overtime pay, and respect at work. Recommend this agency to everyone!",
        rating: 5,
    },
    {
        name: "Pawan Singh",
        location: "Dubai, UAE",
        role: "Welder",
        review: "Working as a welder in Dubai shipyard. The money is great and overtime is always available. Genuine agency with real jobs!",
        rating: 5,
    },
    {
        name: "Suman Rani",
        location: "Dubai, UAE",
        role: "Retail Sales Executive",
        review: "Selling electronics in Dubai's biggest mall. Commission is amazing! They prepared me well for the interview.",
        rating: 5,
    },
    {
        name: "Ajay Mishra",
        location: "Dubai, UAE",
        role: "Electrician",
        review: "Electrical work in Dubai pays really well. Got placed in just 30 days. Very professional and trustworthy agency!",
        rating: 5,
    },
    {
        name: "Kiran Bala",
        location: "Dubai, UAE",
        role: "Nurse",
        review: "Working in a reputed hospital in Dubai Healthcare City. DOH license support was excellent. Life-changing opportunity!",
        rating: 5,
    },
    {
        name: "Yogesh Rawat",
        location: "Dubai, UAE",
        role: "Delivery Driver",
        review: "Delivering for top companies in Dubai. Bike provided by company. Earning well with flexible hours. Great agency!",
        rating: 5,
    },
    {
        name: "Lakshmi Narayan",
        location: "Dubai, UAE",
        role: "Carpenter",
        review: "Furniture work in Dubai pays 4x compared to India. They found me the perfect company. No complaints at all!",
        rating: 5,
    },
    {
        name: "Bharat Singh",
        location: "Dubai, UAE",
        role: "Mason",
        review: "Construction work in Dubai with great company accommodation. Family visa option available. Thank you Job's HR Abroad!",
        rating: 5,
    },
    {
        name: "Sarita Jain",
        location: "Dubai, UAE",
        role: "Accountant",
        review: "Got placed as accountant in a trading company. Professional work environment and tax-free salary. Excellent service!",
        rating: 5,
    },
    {
        name: "Dinesh Kumar",
        location: "Dubai, UAE",
        role: "Painter",
        review: "Building painter in Dubai Marina projects. High rise work with good safety standards. Genuine job opportunity!",
        rating: 5,
    },
    {
        name: "Mamta Devi",
        location: "Dubai, UAE",
        role: "Cook/Chef",
        review: "Indian restaurant chef in Dubai. Living my passion while earning well. Agency was very helpful and honest!",
        rating: 5,
    },
    {
        name: "Naresh Yadav",
        location: "Dubai, UAE",
        role: "Forklift Operator",
        review: "Warehouse job in Jebel Ali. Company provided license training. Good overtime and food allowance. Recommended!",
        rating: 5,
    },
    {
        name: "Asha Kumari",
        location: "Dubai, UAE",
        role: "Office Assistant",
        review: "Admin job in a big company. AC office, good salary, and weekends off. They made the whole process so easy!",
        rating: 5,
    },
    {
        name: "Vijay Thakur",
        location: "Dubai, UAE",
        role: "Site Supervisor",
        review: "Supervising construction sites in Dubai. Got promoted within 6 months. All credit to Job's HR Abroad!",
        rating: 5,
    },
    {
        name: "Pinky Sharma",
        location: "Dubai, UAE",
        role: "Spa Therapist",
        review: "Working in a luxury spa in Palm Jumeirah. Great tips from clients! The agency found me this amazing opportunity.",
        rating: 5,
    },
    {
        name: "Mukesh Agarwal",
        location: "Dubai, UAE",
        role: "Store Manager",
        review: "Managing a retail store in Festival City. Good salary plus commission. Trustworthy agency with real connections!",
        rating: 5,
    },
    {
        name: "Sundar Lal",
        location: "Dubai, UAE",
        role: "Bus Driver",
        review: "Driving company bus in Dubai. Free accommodation and food. Sending money home every month. Very happy!",
        rating: 5,
    },
    {
        name: "Radha Devi",
        location: "Dubai, UAE",
        role: "Laundry Staff",
        review: "Working in hotel laundry department. Clean work, good pay, and overtime available. Genuine agency!",
        rating: 5,
    },
    {
        name: "Ashok Verma",
        location: "Dubai, UAE",
        role: "HVAC Technician",
        review: "HVAC work in Dubai malls and buildings. Technical jobs pay really well here. Best decision to use this agency!",
        rating: 5,
    },
    {
        name: "Kamla Devi",
        location: "Dubai, UAE",
        role: "Kitchen Helper",
        review: "Started as helper, now assistant cook. Company gave me training and growth. All thanks to Job's HR Abroad!",
        rating: 5,
    },
    {
        name: "Rohit Saini",
        location: "Dubai, UAE",
        role: "Sales Executive",
        review: "B2B sales job in Dubai. Great commission structure. They coached me for the interview. Very professional!",
        rating: 5,
    },
];

// Duplicate for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];

export function TestimonialsMarquee() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-50/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm font-medium rounded-full mb-4 border border-blue-100">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Thousands
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                        Real stories from real people who found their dream jobs abroad through our platform.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* First Row - Left to Right */}
                <motion.div
                    className="flex gap-6 mb-6"
                    animate={{
                        x: [0, -50 * testimonials.length * 6],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 120,
                            ease: "linear",
                        },
                    }}
                >
                    {doubledTestimonials.map((testimonial, idx) => (
                        <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
                    ))}
                </motion.div>

                {/* Second Row - Right to Left */}
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: [-50 * testimonials.length * 6, 0],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 120,
                            ease: "linear",
                        },
                    }}
                >
                    {[...doubledTestimonials].reverse().map((testimonial, idx) => (
                        <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-6 border border-zinc-100 shadow-lg shadow-zinc-100/50 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 group relative">
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote size={32} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                "{testimonial.review}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <h4 className="font-semibold text-zinc-900">{testimonial.name}</h4>
                    <p className="text-xs text-zinc-500">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.location}</p>
                </div>
            </div>
        </div>
    );
}
