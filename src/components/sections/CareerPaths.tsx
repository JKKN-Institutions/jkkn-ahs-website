"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FlaskConical, Microscope, Eye, Package, Globe, GraduationCap, Home, Users } from 'lucide-react';

const paths = [
    {
        title: "Hospital Technologist",
        description: "Work in multispecialty hospitals in various technical roles",
        icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]/10"
    },
    {
        title: "Diagnostic Center",
        description: "Join SRL, Thyrocare, Dr. Lal PathLabs, Metropolis",
        icon: <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]/20"
    },
    {
        title: "Research Laboratory",
        description: "Work in clinical research, pharmaceutical R&D",
        icon: <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]/10"
    },
    {
        title: "Eye Care Chains",
        description: "Dr. Agarwal's, Sankara, Vasan Eye Care",
        icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]/20"
    },
    {
        title: "Medical Equipment",
        description: "Siemens, GE Healthcare, Philips, Fujifilm",
        icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]/10"
    },
    {
        title: "International Opportunities",
        description: "UAE, Saudi, UK, Australia, Canada healthcare",
        icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]/20"
    },
    {
        title: "Higher Studies",
        description: "M.Sc., MBA Healthcare, PhD, specialization courses",
        icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]/10"
    },
    {
        title: "Home Healthcare",
        description: "Growing sector with portable diagnostic services",
        icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]/20"
    },
    {
        title: "Teaching & Training",
        description: "Become a Learning Facilitator in AHS institutions",
        icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]/10"
    },
];

export function CareerPaths() {
    return (
        <section id="careers" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-6 sm:mb-8 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">CAREER OPPORTUNITIES</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        Where Will Allied Health Sciences<br className="hidden sm:block" />Take You?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Allied Health professionals are in high demand across hospitals, diagnostics, research, and healthcare administration.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {paths.map((path, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 ${path.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-[#0b6d41] mb-3 sm:mb-4`}>
                                {path.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-[#0b6d41] mb-2 leading-tight">{path.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{path.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Placements Section */}
                <div id="placements" className="mt-12 sm:mt-16 md:mt-24 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <span className="text-gray-900 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">PLACEMENTS</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                            Career Success of Our Learners
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                            Our dedicated placement cell ensures every Learner gets the opportunity to launch their healthcare career.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
                        {[
                            { label: "Placement Rate", value: "95%" },
                            { label: "Recruiting Partners", value: "20+" },
                            { label: "Highest Package", value: "₹7.5L" },
                            { label: "Average Package", value: "₹3.2L" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 sm:mb-3">{stat.value}</div>
                                <div className="text-xs sm:text-sm font-semibold text-gray-700">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Top Recruiters */}
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b6d41] mb-6 sm:mb-8 md:mb-10">Our Top Recruiters</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                            {[
                                'Apollo Hospitals',
                                'MIOT International',
                                'Fortis Healthcare',
                                'Manipal Hospitals',
                                'Columbia Asia',
                                'Narayana Health'
                            ].map((company, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white px-3 sm:px-4 md:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-[#0b6d41] font-bold text-xs sm:text-sm">{company}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
