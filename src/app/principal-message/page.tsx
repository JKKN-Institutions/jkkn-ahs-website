"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { User, Award, ArrowLeft, Quote } from 'lucide-react';

export default function PrincipalMessage() {
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
                            className="inline-flex items-center gap-2 bg-[#e8f5e9] px-6 py-2 rounded-full shadow-sm mb-6 border border-[#0b6d41]/10"
                        >
                            <User className="w-4 h-4 text-[#0b6d41]" />
                            <span className="text-xs font-black tracking-widest text-[#0b6d41] uppercase">Principal</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-6xl font-black text-[#0b6d41] mb-2 tracking-tight"
                        >
                            Principal's Message
                        </motion.h1>
                    </div>

                    {/* Principal Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-16 relative"
                    >
                        <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white bg-gray-200 mb-8">
                            {/* Placeholder for Principal Image */}
                            <div className="w-full h-full bg-gradient-to-t from-[#0b6d41]/20 to-transparent flex items-end justify-center pb-10">
                                <User className="w-32 h-32 text-gray-400 opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg">
                                <Award className="w-8 h-8 text-[#ffbd3d]" />
                            </div>
                        </div>

                        {/* Principal Name & Title */}
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-[#0b6d41] mb-2 uppercase">Dr. S. ELANCHEZHIYAN MDS</h2>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-700">Principal - JKKN Dental College and Hospital & Allied Health Sciences</h3>
                        </div>

                        {/* Decorative background blur */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ffde59]/20 rounded-full blur-[60px] -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0b6d41]/10 rounded-full blur-[60px] -z-10"></div>
                    </motion.div>

                    {/* Message Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700 text-justify relative space-y-6"
                    >
                        <p>
                            I extend a warm welcome to all aspiring students to JKKN Allied Health Sciences, Kumarapalayam, Tamil Nadu, located on Salem to Cochin National Highway 544. Our esteemed institution was founded in 1987 with a noble vision of promoting rural education and development by Late SHRI. J.K.K. NATARAJAH. Today, we proudly carry forward his vision under the guidance of our Respectable Chairperson, SMT. N. SENDAMARAAI Madam, and our Managing Director, SHRI. S. OMMSHARRAVANA.
                        </p>
                        <p>
                            At JKKN Allied Health Sciences, we offer a multidisciplinary, outcome-based educational program that is scientifically grounded, clinically relevant, medically oriented, and socially responsible. Our focus is to provide young learners with deep clinical and practical knowledge in the field of Allied Health Sciences. We are dedicated to serving the community in and around the city, providing free health services, which have been utilized by the population in four districts.
                        </p>
                        <p>
                            Our institution has a strong legacy of producing numerous healthcare professionals who have excelled in their respective fields all over South India. Currently, we offer a comprehensive B.Sc program in Allied Health Sciences that equips our students with competitive skills, career guidance, and nurtures cultural and creative thinking abilities.
                        </p>
                        <p>
                            Our vision is to instill ethics, professionalism, and compassionate care for the community in our emerging healthcare professionals. To achieve this, we regularly organize public health camps and awareness programs to promote better overall health in the community.
                        </p>
                        <p>
                            I am delighted to be the head of this prestigious institution and encourage all enthusiastic individuals to become a part of JKKN Allied Health Sciences. Join us in our mission to make a positive impact on society through excellent healthcare education and services. Together, let's contribute to the growth and development of healthcare in our region and beyond. Welcome to JKKN Allied Health Sciences, Kumarapalayam!
                        </p>

                        {/* Signature/End Icon */}
                        <div className="flex justify-end mt-8 opacity-50">
                            <Quote className="w-12 h-12 text-[#0b6d41] transform rotate-180" />
                        </div>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
