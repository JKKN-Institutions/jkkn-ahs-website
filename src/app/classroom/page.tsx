"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function ClassRoom() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b6d41] mb-12 uppercase tracking-tight">
                        CLASS ROOM
                    </h1>

                    {/* Content Section */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-base sm:text-lg text-justify">
                            At JKKN Educational Institutions, we prioritize the importance of exceptional classroom facilities for an excellent learning experience. Our classrooms are specifically designed to create an engaging and comfortable environment where students can immerse themselves in their studies and develop their skills.
                        </p>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/classroom/digital-class-room-1.webp"
                                    alt="Digital Classroom with Projector"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/classroom/digital-class-room-3.webp"
                                    alt="Interactive Classroom Session"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <p className="text-base sm:text-lg text-justify">
                            Our facilities are equipped with state-of-the-art technology, including high-speed internet, multimedia projectors, and interactive whiteboards, to provide students with easy access to a vast amount of information. We also offer comfortable seating arrangements to ensure that students can focus on their studies without any discomfort or distractions.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            Apart from functionality, we believe that the aesthetics of the learning environment are vital in inspiring creativity and encouraging positive attitudes towards learning.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            We understand that each student has unique learning needs, and that's why we offer various classroom settings to cater to diverse learning styles. Our classrooms range from traditional lecture-style setups to collaborative workspaces, providing students with a comfortable environment that suits their learning preferences.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            Furthermore, we maintain and clean our classrooms regularly to ensure that students can concentrate on their studies without any distractions. We are committed to providing a safe and hygienic learning environment that promotes academic success and personal growth.
                        </p>

                        <p className="text-base sm:text-lg text-justify">
                            In summary, at JKKN Educational Institutions, we are dedicated to providing our students with exceptional classroom facilities that inspire learning and growth. We believe that a great learning environment is crucial for academic success, and our classrooms are designed to provide just that.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
