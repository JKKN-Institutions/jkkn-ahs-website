"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Privacy Policy Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                        Privacy Policy
                    </h1>

                    {/* Introduction */}
                    <p className="text-sm sm:text-base text-gray-700 mb-8 sm:mb-10 leading-relaxed">
                        At JKKN Allied Health Science College, we are committed to protecting the privacy of our students, faculty, staff, and website visitors. This Privacy Policy outlines our practices with respect to the collection, use, and disclosure of personal information.
                    </p>

                    {/* Personal Information We Collect */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Personal Information We Collect
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                            We may collect the following personal information from you when you interact with us:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                            <li>Name, address, email address, and phone number</li>
                            <li>Date of birth, gender, and nationality</li>
                            <li>Academic qualifications and work experience</li>
                            <li>Financial information, such as credit card details, when you make payments to the College</li>
                            <li>Any other information you voluntarily provide to us, such as when you fill out an application form or contact us with inquiries</li>
                        </ul>
                    </section>

                    {/* Use of Personal Information */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Use of Personal Information
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                            We may use your personal information for the following purposes:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                            <li>To process and evaluate your application for admission to our programs or for employment</li>
                            <li>To provide educational and support services to our students and faculty</li>
                            <li>To communicate with you about news, events, and other updates related to JKKN Allied Health Science College</li>
                            <li>To conduct research and analysis to improve our programs and services</li>
                            <li>To comply with legal obligations or requests from government authorities</li>
                        </ul>
                    </section>

                    {/* Disclosure of Personal Information */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Disclosure of Personal Information
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                            We do not disclose your personal information to third parties without your consent, except in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-700">
                            <li>When required by law or legal process</li>
                            <li>To contractors or service providers who assist us in the operation of our College or in the provision of our programs and services</li>
                        </ul>
                    </section>

                    {/* Security of Personal Information */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Security of Personal Information
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use encryption, firewalls, and other security measures to protect your personal information stored on our servers. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.
                        </p>
                    </section>

                    {/* Retention of Personal Information */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Retention of Personal Information
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Your Rights
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            You have the right to access and correct your personal information, and to request that we delete your personal information. To exercise these rights, please contact us using the contact information below.
                        </p>
                    </section>

                    {/* Updates to Privacy Policy */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Updates to Privacy Policy
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes to this Privacy Policy will be posted on our website with the updated effective date.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className="mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
                            Contact Us
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy, please contact us at JKKN Allied Health Science College.
                        </p>
                        <div className="space-y-2 text-sm sm:text-base text-gray-700">
                            <p>
                                <span className="font-semibold">Call:</span> +91 4344 274 741
                                <span className="ml-4 font-semibold">Email:</span> alliedhealth@jkkn.ac.in
                            </p>
                            <p>
                                <span className="font-semibold">Address:</span> JKKN Allied Health Science College, B, Komarapalayam, Namakkal District, Tamil Nadu, India – 638183.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
