"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
    const institutions = [
        'JKKN Dental College and Hospital',
        'JKKN College Of Allied Health Science',
        'JKKN College of Pharmacy',
        'Srisakthimayeil Institute of Nursing and Research',
        'JKKN College of Education',
        'JKKN College of Arts and Science (Autonomous)',
        'JKKN College of Engineering and Technology',
        'JKKN Matriculation Higher Secondary School',
        'Nattraja Vidhyalya'
    ];

    return (
        <footer className="bg-[#0b6d41] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
                    {/* Left Column - College Info with Map */}
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-6 uppercase border-b-2 border-white pb-2 sm:pb-3">
                            JKKN COLLEGE OF ALLIED HEALTH SCIENCE
                        </h3>
                        <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4806747716084!2d77.726548999667!3d11.445190493008672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969fb9a2e0d93%3A0x6a21699145f2e49b!2sJKKN%20College%20Of%20Allied%20Health%20Science!5e0!3m2!1sen!2sin!4v1769243362611!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <p className="text-white font-semibold text-xs sm:text-sm">
                            Best Innovation Focused<br />
                            Multi-Disciplinary Campus
                        </p>
                    </div>

                    {/* Middle Column - Our Institutions */}
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-6 uppercase border-b-2 border-white pb-2 sm:pb-3">
                            OUR INSTITUTIONS
                        </h3>
                        <ul className="space-y-2 sm:space-y-2.5">
                            {institutions.map((institution, index) => (
                                <li key={index}>
                                    <a href="#" className="text-white hover:text-[#ffde59] transition-colors text-xs sm:text-sm leading-relaxed">
                                        {institution}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Contact Us */}
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-6 uppercase border-b-2 border-white pb-2 sm:pb-3">
                            CONTACT US
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <div>
                                <p className="text-white font-semibold mb-1 text-xs sm:text-sm">Call: <a href="tel:+919345855001" className="hover:text-[#ffde59] transition-colors">+919345855001</a></p>
                            </div>
                            <div>
                                <p className="text-white font-semibold mb-1 text-xs sm:text-sm">Email: <a href="mailto:ahs@jkkn.ac.in" className="hover:text-[#ffde59] transition-colors">ahs@jkkn.ac.in</a></p>
                            </div>
                            <div>
                                <p className="text-white font-semibold mb-2 text-xs sm:text-sm">Address:</p>
                                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                                    JKKN College of Allied Health Sciences, NH-544 (Salem To Coimbatore National Highway), Kumarapalayam (TK), Namakkal (DT), Tamil Nadu. 638183.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base sm:text-lg md:text-xl font-black mb-3 sm:mb-4 uppercase border-b-2 border-white pb-2 sm:pb-3">
                                FOLLOW US
                            </h4>
                            <div className="flex gap-3 sm:gap-4">
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#ffde59] flex items-center justify-center transition-colors">
                                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="pt-4 sm:pt-6 border-t border-white/20 text-center">
                    <p className="text-white/80 text-xs sm:text-sm">
                        © 2025 JKKN Allied Health Sciences. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
