"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function WiFiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Title */}
                    <div className="mb-8 sm:mb-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b6d41] uppercase tracking-tight">
                            WI-FI
                        </h1>
                    </div>

                    {/* Hero Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/wifi-1.png"
                                alt="Campus WiFi - Laptop on campus"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/wifi-2.png"
                                alt="Campus WiFi - Campus corridor"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/wifi-3.png"
                                alt="Campus WiFi - Campus grounds"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl space-y-6 sm:space-y-8">
                        {/* Introduction */}
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                            At JKKN Institutions, we recognize the indispensable role of robust internet connectivity in modern education and lifestyle. That's why we've gone beyond merely offering WiFi access; we provide a seamless, high-speed, and secure internet experience throughout our sprawling campus.
                        </p>

                        {/* High-Speed Access */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">High-Speed Access:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Enjoy blazing-fast internet speeds that allow for effortless streaming of educational videos, quick downloads of academic resources, and smooth video conferencing.
                            </p>
                        </div>

                        {/* All-encompassing Coverage */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">All-encompassing Coverage:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Our strategically placed routers ensure WiFi coverage in lecture halls, libraries, labs, common areas, and even outdoor spaces.
                            </p>
                        </div>

                        {/* Secure and Reliable */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Secure and Reliable:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Multi-layered security protocols protect your data and privacy, making our network not just fast but also secure.
                            </p>
                        </div>

                        {/* Resourceful Connectivity */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Resourceful Connectivity:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Our WiFi network serves as a backbone for academic resources, enabling quick access to course materials, research databases, and collaboration tools.
                            </p>
                        </div>

                        {/* Beyond Academics */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Beyond Academics:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Whether you're streaming your favorite playlist or gaming during breaks, our network supports your recreational needs without compromising speed and performance.
                            </p>
                        </div>

                        {/* Data Savings */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Data Savings:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Utilize our campus-wide WiFi to save on your personal data consumption.
                            </p>
                        </div>

                        {/* Eco-Friendly */}
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Eco-Friendly:</h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                Our WiFi network is part of our sustainable tech infrastructure, reducing the need for paper and facilitating digital forms of communication and data storage.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify mt-3">
                                At JKKN Institutions, our commitment to offering a holistic digital experience that aligns perfectly with our educational vision and lifestyle aspirations. It's not just WiFi; it's your gateway to academic success and fulfilling campus life.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
