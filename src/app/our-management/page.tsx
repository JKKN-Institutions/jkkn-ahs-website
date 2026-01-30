"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { User, ArrowLeft, Quote, Award } from 'lucide-react';

const managementTeam = [
    {
        name: "SMT. N. SENDAMARAAI",
        role: "CHAIRPERSON",
        image: "/chairperson.jpg",
        quote: "As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of the most prestigious colleges in the region. 'Leadership and Excellence' is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure, distinguished faculty, and unwavering commitment to quality education."
    },
    {
        name: "SHRI. S. OMMSHARRAVANA",
        role: "DIRECTOR",
        image: "/director.jpg",
        quote: "I extend my heartiest congratulations to the college for its formations and focused dedication in shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking and facilitate the development of well-rounded personalities. Our mission empowers students to contribute their best to society and the nation."
    }
];

export default function OurManagement() {
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
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-[#0b6d41] uppercase tracking-tight mb-4"
                        >
                            Our Management
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 text-lg font-medium"
                        >
                            Visionary Leadership Guiding JKKN
                        </motion.p>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffde59] to-transparent mx-auto mt-6"></div>
                    </div>

                    {/* Management Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {managementTeam.map((member, index) => (
                            <ManagementCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function ManagementCard({ member, index }: { member: typeof managementTeam[0], index: number }) {
    // Custom image styles for each member
    const getImageClass = () => {
        if (member.role === "DIRECTOR") {
            return "w-full h-full object-cover scale-110";
        } else if (member.role === "CHAIRPERSON") {
            return "w-full h-full object-cover object-top scale-105";
        }
        return "w-full h-full object-cover";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-white/60 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
        >
            {/* Top Green Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#0b6d41]"></div>

            {/* Profile Image */}
            <div className="relative mx-auto w-48 h-48 mb-8">
                <div className="w-full h-full rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white relative z-10">
                    <Image
                        src={member.image}
                        alt={member.name}
                        width={192}
                        height={192}
                        className={getImageClass()}
                    />
                </div>
                {/* Decorative Circle Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-gray-100 rounded-full -z-0"></div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
                <h3 className="text-xl font-black text-[#0b6d41] mb-2 uppercase tracking-tight">{member.name}</h3>

                <div className="inline-flex items-center gap-2 bg-[#e8f5e9] px-4 py-1.5 rounded-full mb-8">
                    <Award className="w-3 h-3 text-[#0b6d41]" />
                    <span className="text-[10px] font-black tracking-widest text-[#0b6d41] uppercase">{member.role}</span>
                </div>

                <div className="relative">
                    <Quote className="w-8 h-8 text-[#ffde59]/40 absolute -top-4 left-1/2 -translate-x-1/2 fill-[#ffde59]/20" />
                    <p className="text-gray-500 text-sm leading-relaxed italic relative z-10 pt-2 px-2">
                        "{member.quote}"
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 opacity-10">
                    <div className="text-6xl font-black text-[#0b6d41]">+</div>
                </div>
            </div>
        </motion.div>
    );
}
