"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export function Hero() {
    const stats = [
        { label: 'Specialized Programs', value: '8+' },
        { label: 'Placement Rate', value: '95%+' },
        { label: 'Hospital Partners', value: '25+' },
        { label: 'Active Learners', value: '250+' },
    ];

    return (
        <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-[#0b6d41] via-[#0a5f3a] to-[#085231]">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-[#0b6d41]/30 backdrop-blur-3xl"></div>

            {/* Soft gradient background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-white/5 rounded-full blur-[100px]"></div>
                <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-[#0b6d41]/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 sm:px-5 py-2 rounded-full text-white text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-white/30 shadow-lg">
                            <span className="bg-[#ffde59] text-[#0b6d41] px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">New</span>
                            <span>Admissions Open for 2025-26</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 sm:mb-8">
                            Shape the Future of <span className="text-[#ffde59]">Healthcare</span> with JKKN Allied Health Sciences
                        </h1>

                        <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                            Join JKKN College of Allied Health Sciences and become a vital part of modern healthcare. 8+ specialized B.Sc. programs, hospital training partnerships, and 95%+ placement success.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-[#0b6d41] rounded-full font-semibold transition-all hover:bg-white/90 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                                Explore Programs <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold transition-all hover:bg-white/30 border-2 border-white/40 hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                                Apply for 2025-26
                            </button>
                        </div>

                        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 sm:mb-2">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-white font-medium leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="relative z-10 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(11,109,65,0.2)] border-4 sm:border-8 md:border-[12px] border-white/50 backdrop-blur-md">
                            <div className="aspect-[4/5] bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000" alt="Healthcare Professional" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Absolute positioned glass elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 md:-top-8 md:-right-8 glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl z-20 hidden sm:block"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-primary text-sm sm:text-base">A+</div>
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-gray-800 leading-none">NAAC Accredited</div>
                                    <div className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Top Rank Institution</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl z-20 hidden sm:block"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl">🏆</div>
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-gray-800 leading-none">100% Placement</div>
                                    <div className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Global Opportunities</div>
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
                    className="mt-12 sm:mt-16 md:mt-20 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 border border-white/20"
                >
                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                            🎓
                        </div>
                        <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#1a5f7a] mb-1">University Affiliated</h3>
                            <p className="text-[#0b6d41] font-semibold text-xs sm:text-sm">TN Dr. M.G.R. Medical University</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                            ⏱️
                        </div>
                        <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#1a5f7a] mb-1">Program Duration</h3>
                            <p className="text-gray-700 font-semibold text-xs sm:text-sm">3 Years + 1 Year Internship</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                            💼
                        </div>
                        <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#1a5f7a] mb-1">Avg. Package</h3>
                            <p className="text-gray-700 font-semibold text-xs sm:text-sm">₹3.2 - 7.5 LPA</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                            📅
                        </div>
                        <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#1a5f7a] mb-1">Admission Open</h3>
                            <p className="text-gray-700 font-semibold text-xs sm:text-sm">2025-26 Batch Now</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
