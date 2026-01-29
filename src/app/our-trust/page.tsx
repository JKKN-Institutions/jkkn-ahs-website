"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, Building2, GraduationCap, Users, Heart, Award, ArrowLeft } from 'lucide-react';

export default function OurTrust() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee] font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#0b6d41] font-bold hover:underline transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>

                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-6 border border-gray-100"
                        >
                            <Heart className="w-4 h-4 text-[#0b6d41] fill-[#0b6d41]" />
                            <span className="text-xs font-black tracking-widest text-[#0b6d41] uppercase">Est. 1969</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-6xl font-black text-[#0b6d41] mb-2 uppercase tracking-tight"
                        >
                            Our Trust
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 font-medium text-lg uppercase tracking-wide"
                        >
                            J.K.K. Rangammal Charitable Trust
                        </motion.p>
                    </div>

                    {/* Founder Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/60 relative overflow-hidden max-w-5xl mx-auto mb-24"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffde59]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0b6d41]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            {/* Founder Image Area */}
                            <div className="relative shrink-0">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-[#fbfbee] shadow-2xl overflow-hidden relative z-10 bg-gray-200">
                                    <Image
                                        src="/our-trust.avif"
                                        alt="SHRI. J.K.K. NATARAJAH - Founder"
                                        width={320}
                                        height={320}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 border-[3px] border-[#ffbd3d] rounded-full opacity-50"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#0b6d41]/10 rounded-full -z-0"></div>

                                <div className="absolute bottom-4 right-4 z-20 bg-[#ffde59] p-3 rounded-full shadow-lg border-4 border-white">
                                    <Award className="w-6 h-6 text-[#0b6d41]" />
                                </div>
                            </div>

                            {/* Founder Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mb-2 leading-tight">SHRI. J.K.K. NATARAJAH</h2>
                                <div className="text-xs font-bold text-[#ffbd3d] uppercase tracking-[0.2em] mb-8">Founder of J.K.K. Rangammal Charitable Trust</div>

                                <blockquote className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed italic relative">
                                    "Kumarapalayam had to walk 2.5 km for their schooling to the nearby town of Bhavani. Realizing the need for women's education, a visionary philanthropist of the zone, Shri J.K.K. Natarajah, initiated a girls' school in the town in 1965."
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>

                    {/* Legacy of Service Section */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                        >
                            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                                {/* Left: Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-block relative mb-6">
                                        <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41]">A Legacy of Service</h2>
                                        <div className="h-1.5 w-full bg-[#ffde59] absolute bottom-1 left-0 -z-10 bg-opacity-60 rounded-full"></div>
                                    </div>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                        The J.K.K. Rangammal Charitable Trust was established in 1969 with the motto of providing literacy and women's empowerment. Walking in the footsteps of her father, Smt. N. Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders.
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                        Now, under the umbrella, there are 8+ institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges.
                                    </p>
                                </div>

                                {/* Right: Rounded Logo */}
                                <div className="shrink-0">
                                    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-8 border-[#fbfbee] shadow-2xl overflow-hidden bg-white relative">
                                        <Image
                                            src="/jkkn-100-logo.png"
                                            alt="JKKN 100 Years - Century of Transforming Lives"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 border-4 border-[#0b6d41]/10 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <StatsCard
                            icon={<Calendar className="w-8 h-8 text-[#0b6d41]" />}
                            value="1969"
                            label="Year Established"
                        />
                        <StatsCard
                            icon={<Building2 className="w-8 h-8 text-[#0b6d41]" />}
                            value="8+"
                            label="Institutions"
                        />
                        <StatsCard
                            icon={<GraduationCap className="w-8 h-8 text-[#0b6d41]" />}
                            value="50,000+"
                            label="Alumni"
                        />
                        <StatsCard
                            icon={<Users className="w-8 h-8 text-[#0b6d41]" />}
                            value="5,000+"
                            label="Current Students"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function StatsCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 flex flex-col items-center md:items-start transition-all hover:shadow-xl"
        >
            <div className="bg-[#f0fdf4] p-4 rounded-2xl mb-6">
                {icon}
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">{value}</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</div>
        </motion.div>
    );
}
