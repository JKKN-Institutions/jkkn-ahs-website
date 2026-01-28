"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { BRAND_LEGACY } from '@/lib/constants';

export function AboutSection() {
    const points = [
        { text: "University-affiliated programs with clinical internship" },
        { text: "Hospital partnerships with Senthil Multispeciality, Lotus, Erode Medical Center and Olirum Erode Foundation" },
        { text: "Industry-experienced Learning Facilitators" }
    ];

    return (
        <section id="about" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">ABOUT JKKN AHS</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                            Transforming Healthcare Careers Since 2019
                        </h2>

                        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            JKKN College of Allied Health Sciences, part of JKKN Educational Institutions celebrating #JKKN100 (Centennial Year of Our Founder), is dedicated to producing skilled Allied Health professionals who form the backbone of modern healthcare delivery. Our Learners are trained not just in technical skills but in compassionate patient care.
                        </p>

                        <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                            Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, we offer comprehensive programs in Critical Care Technology, Physician Assistant, Cardiac Technology, Radiology, and more. Our Learning Facilitators (Senior Learners) bring decades of clinical and academic experience to every Learning Studio.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start gap-2 sm:gap-3">
                                    <div className="mt-1 bg-[#0b6d41] rounded-full p-1 flex-shrink-0">
                                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 text-xs sm:text-sm font-medium leading-snug">{point.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative mt-8 lg:mt-0 w-full"
                    >
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000"
                                    alt="JKKN Allied Health Sciences College Laboratory"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Legacy Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#0b6d41] rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 text-center"
                        >
                            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-0.5 sm:mb-1">{BRAND_LEGACY.YEARS}</div>
                            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">Year Legacy</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
