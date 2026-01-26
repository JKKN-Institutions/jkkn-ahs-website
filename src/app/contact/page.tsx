"use client";

import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-[#0b6d41] pt-32 pb-16 px-4 overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#085231] rounded-full opacity-50"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#085231] rounded-full opacity-30"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    {/* Phone Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <Phone className="w-8 h-8 text-white" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white/90 text-lg">
                        Welcome to our Website. We are glad to have you around.
                    </p>
                </div>
            </section>

            {/* Get In Touch & Online Admission Form Section */}
            <section className="py-16 px-4 bg-[#fbfbee]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Get In Touch */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1 h-8 bg-[#0b6d41]"></div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b6d41]">
                                    Get In Touch
                                </h2>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                {/* Phone Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0b6d41]/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-[#0b6d41]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                            <a href="tel:+919345855001" className="text-gray-600 hover:text-[#0b6d41] transition-colors">
                                                +919345855001
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0b6d41]/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-[#0b6d41]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href="mailto:ahs@jkkn.ac.in" className="text-gray-600 hover:text-[#0b6d41] transition-colors">
                                                ahs@jkkn.ac.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Address Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0b6d41]/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-[#0b6d41]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                            <p className="text-gray-600">
                                                JKKN College of Allied Health Sciences, NH-544 (Salem To Coimbatore National Highway), Kumarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Online Admission Form */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1 h-8 bg-[#0b6d41]"></div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b6d41]">
                                    Online Admission Form
                                </h2>
                            </div>
                            <p className="text-gray-600 mb-8">
                                Ready to Join JKKN? Start your application process today.
                            </p>

                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center mb-8">
                                {/* Paper Plane Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0b6d41]/10 rounded-full mb-6 mx-auto">
                                    <Send className="w-8 h-8 text-[#0b6d41]" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Start Your Journey Today
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Fill out our online admission form to begin your application process. Our team will guide you through every step.
                                </p>

                                <a href="#" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0b6d41] text-white rounded-full font-semibold transition-all hover:bg-[#085231] hover:shadow-lg mx-auto">
                                    Apply Now
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-4">Office Hours</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Monday-Saturday</span>
                                    <span className="font-semibold text-gray-900">9AM - 5:30PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Location */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-[#0b6d41]" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0b6d41]">
                                Our Location
                            </h2>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4806747716084!2d77.726548999667!3d11.445190493008672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969fb9a2e0d93%3A0x6a21699145f2e49b!2sJKKN%20College%20Of%20Allied%20Health%20Science!5e0!3m2!1sen!2sin!4v1769243362611!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Have Questions Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b6d41] mb-4">
                        Have Questions?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our dedicated team is ready to assist you with any inquiries about our programs, facilities, or admission process.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+919345855001" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0b6d41] text-white rounded-full font-semibold transition-all hover:bg-[#085231] hover:shadow-lg">
                            <Phone className="w-5 h-5" />
                            Call Us Now
                        </a>
                        <a href="mailto:ahs@jkkn.ac.in" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#0b6d41] border-2 border-[#0b6d41] rounded-full font-semibold transition-all hover:bg-[#0b6d41] hover:text-white">
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
