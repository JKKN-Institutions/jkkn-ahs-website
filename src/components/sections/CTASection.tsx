"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-xl border border-gray-100"
                >
                    {/* Decorative background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#0b6d41] rounded-full -ml-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffde59] rounded-full -mr-32 -mb-32 blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0b6d41] mb-4 sm:mb-6 leading-tight px-4">
                            Ready to Transform <span className="text-[#ffde59]">Healthcare?</span>
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
                            Join thousands of students who are shaping the future of medicine. Our admissions for 2025-26 are now open. Secure your future today.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#ffde59] text-white rounded-full font-black text-base sm:text-lg shadow-xl transition-all hover:scale-110 hover:bg-[#e5c44f] active:scale-95 flex items-center justify-center gap-2 sm:gap-3">
                                Apply Online <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-black text-base sm:text-lg transition-all hover:bg-[#0b6d41] hover:text-white flex items-center justify-center gap-2 sm:gap-3">
                                Talk to Expert <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
