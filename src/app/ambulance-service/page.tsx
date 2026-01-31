"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AmbulanceService() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0b6d41] uppercase tracking-tight">
                            AMBULANCE SERVICES
                        </h1>
                    </div>

                    {/* Ambulance Image */}
                    <div className="mb-12 md:mb-16">
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/ambulance.webp"
                                alt="JKKN Ambulance Service"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl space-y-6">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                            JKKN Educational Institutions, we are dedicated to delivering excellent education to our students, staff, and community. In line with our pledge to the community, we take pride in presenting our exceptional ambulance services, available round-the-clock for emergency responses and medical transportation.
                        </p>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                            Our ambulance services are managed by expert emergency medical technicians who are certified and experienced in handling diverse medical emergencies. To ensure our patients receive the highest quality of care, our ambulances are equipped with advanced medical equipment and supplies.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
