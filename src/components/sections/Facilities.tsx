"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Microscope, Heart, Activity, Eye, Droplet, BookOpen, Home, Bus } from 'lucide-react';

const facilities = [
    {
        title: "Clinical Biochemistry Lab",
        description: "Fully automated analyzers for blood chemistry, enzymes, and metabolic panels",
        icon: <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]"
    },
    {
        title: "Microbiology & Pathology Lab",
        description: "Culture facilities, microscopy, histopathology with digital imaging",
        icon: <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]"
    },
    {
        title: "Digital Library",
        description: "5000+ medical books, e-journals, and online databases",
        icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]"
    },
    {
        title: "Hostel & Amenities",
        description: "Separate hostels with mess, Wi-Fi, gym, and 24/7 security",
        icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#ffde59]"
    },
    {
        title: "Transportation",
        description: "College buses covering Namakkal, Salem, Erode, Coimbatore routes, Tirupur, Karur and Mettur",
        icon: <Bus className="w-6 h-6 sm:w-8 sm:h-8" />,
        iconBg: "bg-[#0b6d41]"
    },
];

export function Facilities() {
    return (
        <section id="facilities" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-6 sm:mb-8 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">INFRASTRUCTURE</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        World-Class Facilities
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Learn with the same equipment you'll use in your professional career at leading hospitals and diagnostic centers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 ${facility.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4`}>
                                {facility.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-[#0b6d41] mb-2 leading-tight">
                                {facility.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {facility.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
