"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function AcademicCalendar() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Back to Home Link */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>

                    {/* Page Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-[#0b6d41] uppercase tracking-wide mb-8">
                            ACADEMIC CALENDAR
                        </h1>
                    </motion.div>

                    {/* Google Calendar Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <iframe
                            src="https://calendar.google.com/calendar/u/0/embed?src=c_8c4724946037f744217e7f6b00f35164fc74005a8f03dabce9a853dd1959c280@group.calendar.google.com&ctz=Asia/Kolkata&mode=AGENDA&pli=1"
                            className="w-full border-0"
                            style={{ minHeight: '600px', height: '75vh' }}
                            frameBorder="0"
                            title="AHS Academic Calendar"
                        />
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
