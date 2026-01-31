"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';

export default function OurInstitutions() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow pt-20 lg:pt-24 pb-12">
                {/* Header Section */}
                <div className="bg-[#fbfbee] px-4 py-12 lg:py-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-5xl font-black text-[#0b6d41] mb-12 uppercase tracking-tight text-center lg:text-left"
                        >
                            OUR INSTITUTIONS
                        </motion.h1>

                        {/* Glass Card with Image and Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass-card bg-white rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 shadow-xl border border-white/60 relative overflow-hidden"
                        >
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffde59]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0b6d41]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                            {/* Institution Image */}
                            <div className="relative z-10 mb-8 lg:mb-12">
                                <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/institution.avif"
                                        alt="JKKN Institutions Campus"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b6d41]/20 to-transparent"></div>
                                </div>
                            </div>

                            {/* Content Paragraphs */}
                            <div className="relative z-10 space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed mt-8">
                                <p>
                                    At JKKN Institutions, our core teaching objective is to empower students with technical knowledge and essential skills to meet the growing challenges of today's competitive world. We impart cutting-edge practice, laying a robust foundation for their future endeavours.
                                </p>

                                <p>
                                    Our state-of-the-art campus features meticulously designed academic blocks, advanced laboratory facilities, operation centres, knowledge-rich libraries, and comprehensive sports infrastructure. We also provide separate accommodation for boys and girls, as well as general and dental hospitals for healthcare services and practices. Our proactive Placement Cell ensures successful placement opportunities for all our students.
                                </p>

                                <p>
                                    With contemporary facilities designed for the continuous enhancement of both students and faculty, we maintain strong industry connections with leading manufacturing and commercial enterprises. These connections facilitate valuable industrial and corporate exposure, aligning our educational experiences with real-world applications.
                                </p>

                                <p>
                                    Situated in Komarapalayam, just 15 km from Erode City in Tamil Nadu, India, we are easily accessible via Erode railway station and Salem/Coimbatore airports.
                                </p>

                                <p>
                                    JKKN Institutions are home to some of the region's leading institutes of higher learning. We foster a culture that emphasises commitment, transparency, and teamwork. Our continuing success is marked by our reputation as a knowledge centre, generating and nurturing exceptional levels of opportunity and initiative.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919344555001"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </a>
        </div>
    );
}
