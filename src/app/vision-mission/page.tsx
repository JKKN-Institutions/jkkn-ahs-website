"use client";

import React from 'react';
import Link from 'next/link';
import { Eye, Target, ArrowLeft, Sparkles, TrendingUp, Users, Heart } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function VisionMission() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f5f5dc] via-[#fbfbee] to-[#e8f5e9]">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#0b6d41]/20 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#fbb92c]/20 to-transparent rounded-full blur-3xl"
                />
            </div>

            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 text-[#0b6d41] font-semibold hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0b6d41]/10 to-[#fbb92c]/10 backdrop-blur-sm border border-[#0b6d41]/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-[#0b6d41]" />
                            <span className="text-sm font-semibold text-[#0b6d41]">Our Purpose & Direction</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b6d41] via-[#0e8a52] to-[#fbb92c] mb-6 leading-tight">
                            Vision & Mission
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Shaping the future of healthcare through innovation, excellence, and compassionate service
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-6xl mx-auto space-y-12"
                    >
                        {/* Vision Card */}
                        <motion.div variants={itemVariants}>
                            <div className="group relative">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0b6d41] to-[#0e8a52] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />

                                {/* Main Card */}
                                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                                        {/* Icon Section */}
                                        <div className="flex-shrink-0">
                                            <motion.div
                                                whileHover={{ scale: 1.05, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="relative"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#0b6d41]/20 to-[#0e8a52]/20 rounded-2xl blur-xl" />
                                                <div className="relative bg-gradient-to-br from-[#0b6d41] to-[#0e8a52] p-6 rounded-2xl">
                                                    <Eye className="w-16 h-16 sm:w-20 sm:h-20 text-white" strokeWidth={1.5} />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b6d41] to-[#0e8a52]">
                                                    Our Vision
                                                </h2>
                                                <TrendingUp className="w-8 h-8 text-[#0b6d41] animate-pulse" />
                                            </div>

                                            <div className="space-y-4">
                                                <p className="text-2xl sm:text-3xl text-gray-800 font-bold leading-relaxed">
                                                    To be a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b6d41] via-[#0e8a52] to-[#fbb92c]">Leading Global Innovative Solutions</span> provider for the ever-changing needs of the society.
                                                </p>

                                                {/* Vision Highlights */}
                                                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0b6d41]/10"
                                                    >
                                                        <Sparkles className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="font-bold text-[#0b6d41] mb-1">Innovation</h3>
                                                            <p className="text-sm text-gray-600">Pioneering healthcare solutions</p>
                                                        </div>
                                                    </motion.div>

                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#0b6d41]/10"
                                                    >
                                                        <TrendingUp className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="font-bold text-[#0b6d41] mb-1">Global Leadership</h3>
                                                            <p className="text-sm text-gray-600">International excellence standards</p>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div variants={itemVariants}>
                            <div className="group relative">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0b6d41] to-[#0e8a52] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />

                                {/* Main Card */}
                                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                                        {/* Icon Section */}
                                        <div className="flex-shrink-0">
                                            <motion.div
                                                whileHover={{ scale: 1.05, rotate: -5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="relative"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#0b6d41]/20 to-[#0e8a52]/20 rounded-2xl blur-xl" />
                                                <div className="relative bg-gradient-to-br from-[#0b6d41] to-[#0e8a52] p-6 rounded-2xl">
                                                    <Target className="w-16 h-16 sm:w-20 sm:h-20 text-white" strokeWidth={1.5} />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b6d41] to-[#0e8a52]">
                                                    Our Mission
                                                </h2>
                                                <Heart className="w-8 h-8 text-[#0b6d41] animate-pulse" />
                                            </div>

                                            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                                                Our mission at JKKN Allied Health and Sciences is to promote health and advance scientific knowledge through innovation, research, and education. We strive to improve the quality of life for individuals and communities by delivering comprehensive and compassionate healthcare services, as well as fostering a culture of collaboration and excellence among healthcare professionals.
                                            </p>

                                            {/* Mission Pillars */}
                                            <div className="grid sm:grid-cols-3 gap-4">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="p-4 rounded-xl bg-gradient-to-br from-[#0b6d41]/10 to-transparent backdrop-blur-sm border border-[#0b6d41]/20"
                                                >
                                                    <Users className="w-6 h-6 text-[#0b6d41] mb-3" />
                                                    <h3 className="font-bold text-gray-800 mb-1">Education</h3>
                                                    <p className="text-sm text-gray-600">Excellence in learning</p>
                                                </motion.div>

                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="p-4 rounded-xl bg-gradient-to-br from-[#0b6d41]/10 to-transparent backdrop-blur-sm border border-[#0b6d41]/20"
                                                >
                                                    <Sparkles className="w-6 h-6 text-[#0b6d41] mb-3" />
                                                    <h3 className="font-bold text-gray-800 mb-1">Research</h3>
                                                    <p className="text-sm text-gray-600">Scientific advancement</p>
                                                </motion.div>

                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="p-4 rounded-xl bg-gradient-to-br from-[#0b6d41]/10 to-transparent backdrop-blur-sm border border-[#0b6d41]/20"
                                                >
                                                    <Heart className="w-6 h-6 text-[#0b6d41] mb-3" />
                                                    <h3 className="font-bold text-gray-800 mb-1">Compassion</h3>
                                                    <p className="text-sm text-gray-600">Quality healthcare</p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center pt-12"
                        >
                            <div className="inline-block relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0b6d41] via-[#fbb92c] to-[#0b6d41] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
                                    <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                                        Together, we're building a healthier tomorrow through dedication, innovation, and unwavering commitment to excellence.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
