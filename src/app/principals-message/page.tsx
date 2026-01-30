"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrincipalsMessage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee] font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#0b6d41] font-bold hover:underline transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Principal Photo Section */}
                        <div className="flex justify-center pt-12 pb-6 bg-gradient-to-b from-gray-50 to-white">
                            <div className="relative">
                                <div className="rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src="/principal.png"
                                        alt="Dr. Dhanasekar Balakrishnan"
                                        width={400}
                                        height={500}
                                        className="w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Principal Details */}
                        <div className="text-center px-6 pb-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b6d41] mb-3">
                                Dr. Dhanasekar Balakrishnan
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold mb-2">
                                BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)
                            </p>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-[#0b6d41] mb-6">
                                Principal- JKKN Dental College and Hospital
                            </p>
                        </div>

                        {/* Message Content */}
                        <div className="px-6 sm:px-12 md:px-16 lg:px-20 pb-12">
                            {/* Message Heading */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl sm:text-3xl font-black text-[#0b6d41] uppercase tracking-wide mb-3">
                                    PRINCIPAL'S MESSAGE
                                </h3>
                                <div className="w-24 h-1 bg-[#0b6d41] mx-auto"></div>
                            </div>

                            {/* Message Paragraphs */}
                            <div className="space-y-6 text-gray-700">
                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    <span className="font-bold">Greetings to all students, parents, faculty, and stakeholders,</span>
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    It is a profound responsibility and an honour to serve as the Principal of JKKN Dental College and Hospital, an institution devoted to shaping the future of dental education, healthcare, and innovation.
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    Guided by a vision to empower individuals through education, our mission is to nurture skilled, compassionate, and innovative professionals. JKKN stands as a symbol of excellence and commitment to transforming education and healthcare.
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    At JKKN Dental College and Hospital, we believe in providing a holistic education that balances academic rigour with real-world application. By integrating cutting-edge technology, advanced clinical training, and innovative teaching methodologies, we equip our students to meet a curriculum rooted in design thinking, we prepare our students to address the evolving needs of the dental profession with creativity, empathy, and a solutions-oriented mindset.
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    Our institution fosters an environment that encourages research, innovation, and entrepreneurship. We believe in nurturing curiosity, critical thinking, and leadership qualities to empower our students to excel and contribute meaningfully to dentistry, and lead transformative changes in oral healthcare.
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    Community service is central to our mission. Through our well-equipped hospital, we provide high-quality dental care to those in need. We are committed to improving oral health in our region, ensuring that our services reflect the values of compassion, accessibility and inclusivity.
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    As an institution, we are dedicated to creating leaders who inspire and excel. With our facilities, a team of expert faculty, and a culture of continuous learning, we strive to build a future where education drives progress, healthcare is a right for all, and innovation becomes a way of life.
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-justify">
                                    I extend my heartfelt gratitude to our students, faculty, parents, and stakeholders for their trust and unwavering support on our journey. Together, let us continue to transform education and healthcare, upholding the legacy of JKKN as a hub of excellence and a catalyst for societal impact.
                                </p>

                                <div className="mt-8 pt-6">
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        <span className="font-semibold">Warm regards,</span>
                                    </p>
                                    <p className="text-sm sm:text-base font-bold text-[#0b6d41] mt-2">
                                        Dhanasekar Balakrishnan
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-700 font-semibold mt-1">
                                        BDS, MDS, FDS RCS (England), MDTFEd (Edinburgh), MFDS RCPS (Glasgow), MFDS RCS (Edinburgh)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
