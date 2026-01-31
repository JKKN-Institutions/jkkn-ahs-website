"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HostelSection {
    title: string;
    image: string;
    paragraphs: string[];
}

const hostelSections: HostelSection[] = [
    {
        title: "BOYS HOSTEL",
        image: "/images/boys-hostel.png",
        paragraphs: [
            "Our hostel, situated within the campus, offers a hassle-free commute to classes, making it an excellent option for students. Equipped with essential amenities, the well-maintained hostel provides spacious, well-ventilated single and shared rooms for residents to enjoy a comfortable living experience.",
            "At JKKN, we value academics and provide an environment that promotes concentration and learning. Our hostel fosters a peaceful and quiet atmosphere, free from distractions, while our high-speed internet connectivity facilitates easy access to online resources, aiding academic assignments.",
            "Beyond just a place to reside, our hostel cultivates a community where residents can create long-lasting friendships and memories. With a helpful staff on hand, any concerns or issues are promptly addressed.",
            "For students seeking a safe and comfortable living experience during their academic journey, JKKN Educational Institutions' Boys Hostel is the perfect option. Our state-of-the-art facilities and amenities guarantee a memorablestay for our residents"
        ]
    },
    {
        title: "GIRLS HOSTEL",
        image: "/images/girls-hostel.png",
        paragraphs: [
            "Our female students can enjoy a unique and modern living experience at our girls' hostel, which is equipped with all the necessary facilities for a comfortable and enjoyable stay. Each room is spacious, well-ventilated, and furnished with comfortable beds, study tables, and ample storage space. Privacy is ensured, as every room comes with its own bathroom.",
            "To ensure our students' safety, we have round-the-clock security, CCTV surveillance, and access control systems. We also have a strict no-visitor policy and require valid identification for anyone entering the premises.",
            "At JKKN Educational Institutions, we understand the importance of a balanced lifestyle and encourage our students to engage in physical activity. Our hostel offers a dedicated gymnasium, yoga room, and sports complex to help our students stay active and healthy.",
            "If you're a female student looking for a safe and enjoyable living experience, our girls' hostel is the perfect choice. Join our growing community of students and experience the best hostel facilities available."
        ]
    }
];

export default function Hostel() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b6d41] mb-12 uppercase tracking-tight">
                        HOSTEL
                    </h1>

                    {/* Hostel Sections */}
                    <div className="space-y-6">
                        {hostelSections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                            >
                                {/* Section Header */}
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 group hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600 text-xl">—</span>
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-700">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="w-5 h-5 text-gray-600" />
                                    </div>
                                </button>

                                {/* Section Content */}
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-8 pt-2">
                                                <div className="flex flex-col lg:flex-row gap-8">
                                                    {/* Image */}
                                                    <div className="lg:w-1/3 flex-shrink-0">
                                                        <div className="relative w-full h-64 sm:h-72 lg:h-56 rounded-lg overflow-hidden">
                                                            <Image
                                                                src={section.image}
                                                                alt={section.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Text Content */}
                                                    <div className="lg:w-2/3 space-y-4">
                                                        {section.paragraphs.map((paragraph, pIndex) => (
                                                            <p
                                                                key={pIndex}
                                                                className="text-gray-700 text-base leading-relaxed text-justify"
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
