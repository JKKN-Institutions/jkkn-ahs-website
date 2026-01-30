"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export function Hero() {
    const stats = [
        { label: 'Specialized Programs', value: '8+' },
        { label: 'Placement Rate', value: '95%' },
        { label: 'Hospital Partners', value: '25+' },
        { label: 'Active Learners', value: '250+' },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0b6d41] via-[#0a5f3a] to-[#085231]">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-[#0b6d41]/30 backdrop-blur-3xl"></div>

            {/* Soft gradient background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-white/5 rounded-full blur-[100px]"></div>
                <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-[#0b6d41]/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full text-white text-xs font-semibold mb-3 sm:mb-4 border border-white/30 shadow-lg">
                            <span className="bg-[#ffde59] text-[#0b6d41] px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">New</span>
                            <span>Admissions Open for 2026-27</span>
                        </div>

                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-white leading-[1.2] mb-3 sm:mb-4">
                            Shape the Future of <span className="text-[#ffde59]">Healthcare</span> with JKKN College of Allied Health Sciences
                        </h1>

                        <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
                            Join JKKN College of Allied Health Sciences and become a vital part of modern healthcare. 8+ specialized B.Sc. programs, hospital training partnerships, and 95% placement success.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                            <button
                                onClick={() => {
                                    const programsSection = document.getElementById('programs');
                                    programsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-white text-[#0b6d41] rounded-full font-semibold transition-all hover:bg-white/90 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 text-sm"
                            >
                                Explore Programs <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold transition-all hover:bg-white/30 border-2 border-white/40 hover:shadow-xl hover:scale-105 text-sm text-center"
                            >
                                Apply for 2026-27
                            </Link>
                        </div>

                        <div className="mt-5 sm:mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-white font-medium leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative mt-6 lg:mt-0"
                    >
                        <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_40px_-12px_rgba(11,109,65,0.2)] border-4 sm:border-6 border-white/50 backdrop-blur-md max-w-sm lg:max-w-md mx-auto lg:mx-0">
                            <div className="aspect-[5/4] lg:aspect-[4/3] bg-gray-100">
                                <img src="/allied-health-science-hero.png" alt="Allied Health Science - JKKN College" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Absolute positioned glass elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl z-20 hidden sm:block"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center font-black text-primary text-xs sm:text-sm">A+</div>
                                <div>
                                    <div className="text-[10px] sm:text-xs font-bold text-gray-800 leading-none">NAAC Accredited</div>
                                    <div className="text-[8px] sm:text-[9px] text-gray-500 font-medium">Top Rank Institution</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl z-20 hidden sm:block"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl">🏆</div>
                                <div>
                                    <div className="text-[10px] sm:text-xs font-bold text-gray-800 leading-none">95% Placement</div>
                                    <div className="text-[8px] sm:text-[9px] text-gray-500 font-medium">Global Opportunities</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* University Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-5 sm:mt-6 lg:mt-8 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 border border-white/20"
                >
                    <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0">
                            🎓
                        </div>
                        <div>
                            <h3 className="text-[10px] sm:text-xs font-bold text-[#1a5f7a] mb-0.5">University Affiliated</h3>
                            <p className="text-[#0b6d41] font-semibold text-[10px] sm:text-xs">TN Dr. M.G.R. Medical University</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-50 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0">
                            ⏱️
                        </div>
                        <div>
                            <h3 className="text-[10px] sm:text-xs font-bold text-[#1a5f7a] mb-0.5">Program Duration</h3>
                            <p className="text-gray-700 font-semibold text-[10px] sm:text-xs">3 Years + 1 Year Internship</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0">
                            💼
                        </div>
                        <div>
                            <h3 className="text-[10px] sm:text-xs font-bold text-[#1a5f7a] mb-0.5">Avg. Package</h3>
                            <p className="text-gray-700 font-semibold text-[10px] sm:text-xs">₹3.2 - 7.5 LPA</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0">
                            📅
                        </div>
                        <div>
                            <h3 className="text-[10px] sm:text-xs font-bold text-[#1a5f7a] mb-0.5">Admission Open</h3>
                            <p className="text-gray-700 font-semibold text-[10px] sm:text-xs">2026-27 Batch Now</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
