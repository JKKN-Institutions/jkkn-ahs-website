"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Transport() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee] font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0b6d41] mb-8">
                            TRANSPORT
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="bg-transparent">
                        {/* Introduction */}
                        <div className="mb-8">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Transportation is a crucial component of any educational institution, providing students and faculty members with a convenient means of getting to campus and enhancing the overall learning experience. JKKN Educational Institutions recognize the significance of transportation and have made significant efforts to improve their transport facilities. Below are some of the exceptional features of the transport service at JKKN Educational Institutions.
                            </p>
                        </div>

                        {/* Transport Image Gallery */}
                        <div className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/transport/transport-1.webp"
                                        alt="JKKN Transport Fleet - School Buses"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/transport/transport-2.webp"
                                        alt="JKKN College Buses"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Well-Maintained Fleet */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Well-Maintained Fleet:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The transport service at JKKN Educational Institutions boasts a well-maintained fleet of buses that undergo regular servicing and cleaning to ensure passenger safety and comfort. The buses are equipped with modern amenities like air conditioning, comfortable seating, and GPS tracking systems.
                            </p>
                        </div>

                        {/* Highly Trained Drivers */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Highly Trained Drivers:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The bus drivers at JKKN Educational Institutions are highly trained and experienced individuals who possess a good understanding of the local routes and traffic conditions. Their proficiency enables them to offer safe and efficient transportation services. Additionally, they receive regular training sessions to upgrade their skills.
                            </p>
                        </div>

                        {/* Affordable Charges */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Affordable Charges:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                JKKN Educational Institutions prioritize affordability and are dedicated to offering cost-effective transportation services. The transportation fees are highly affordable for everyone.
                            </p>
                        </div>

                        {/* Safe and Secure */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Safe and Secure:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The safety and security of passengers are paramount at JKKN Educational Institutions. To ensure this, CCTV cameras are installed in the buses, and female attendants are available to assist female passengers. The transportation service operates under a strict set of guidelines to ensure that the passengers are always secure.
                            </p>
                        </div>

                        {/* Timely Services */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Timely Services:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The transport service at JKKN Educational Institutions operates on a strict schedule, ensuring that the buses arrive and depart from the campus promptly. This allows students and faculty members to plan their day accordingly, without worrying about delays or missed buses.
                            </p>
                        </div>

                        {/* Accessibility */}
                        <div className="mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                Accessibility:
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The transport service at JKKN Educational Institutions is available to all students, regardless of their physical abilities. The buses come equipped with wheelchair ramps and other accessibility features to facilitate easy movement for students with disabilities.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="mb-6">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                In summary, JKKN Educational Institutions' transportation service provides safe, reliable, and affordable transportation to all its students and faculty members. The institution has taken significant strides to ensure that the transportation service is accessible, secure, and comfortable for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
