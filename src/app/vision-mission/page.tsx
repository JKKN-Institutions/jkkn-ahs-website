"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Target, Menu, X, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function VisionMission() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Vision Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-24 flex flex-col md:flex-row gap-12 items-start"
                        >
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <h1 className="text-4xl font-black text-[#0b6d41] uppercase mb-6 tracking-wide">
                                    Our Vision
                                </h1>
                                <div className="inline-flex items-center justify-center p-4">
                                    <Eye className="w-32 h-32 text-[#0b6d41]" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 pt-4">
                                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                                    To be a <span className="text-[#0b6d41] font-bold">Leading Global Innovative Solutions</span> provider for the ever-changing needs of the society.
                                </p>
                            </div>
                        </motion.section>

                        {/* Mission Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col md:flex-row gap-12 items-start"
                        >
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <h1 className="text-4xl font-black text-[#0b6d41] uppercase mb-6 tracking-wide">
                                    Mission
                                </h1>
                                <div className="inline-flex items-center justify-center p-4">
                                    <Target className="w-32 h-32 text-[#0b6d41]" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 pt-4">
                                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                                    Our mission at JKKN Allied Health and Sciences is to promote health and advance scientific knowledge through innovation, research, and education. We strive to improve the quality of life for individuals and communities by delivering comprehensive and compassionate healthcare services, as well as fostering a culture of collaboration and excellence among healthcare professionals.
                                </p>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
