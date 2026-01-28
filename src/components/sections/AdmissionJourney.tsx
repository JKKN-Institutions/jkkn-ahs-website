"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Phone, Mail } from 'lucide-react';

export function AdmissionJourney() {
    const eligibilityCriteria = [
        "+2 with Physics, Chemistry & Biology (PCB)",
        "Minimum 50% aggregate marks (40% for reserved categories)",
        "Age: 17-25 years as on 31st December 2025",
        "Indian nationals and NRI candidates eligible",
        "NEET score not mandatory (merit-based admission)"
    ];

    const admissionProcess = [
        {
            step: "1",
            title: "Online Application",
            desc: "Fill form at www.jkkn.ac.in/apply with documents"
        },
        {
            step: "2",
            title: "Document Verification",
            desc: "Submit originals for verification online/in-person"
        },
        {
            step: "3",
            title: "Fee Payment",
            desc: "Complete enrollment and begin your journey"
        },
    ];

    return (
        <section id="admissions" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-6 sm:mb-8 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        Start Your Healthcare Journey
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Applications are open for the 2026-27 academic year. Secure your seat in Tamil Nadu's leading Allied Health Sciences institution.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                    {/* Eligibility Criteria */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0b6d41] rounded-lg sm:rounded-xl flex items-center justify-center text-white shrink-0">
                                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-[#0b6d41]">Eligibility Criteria</h3>
                        </div>
                        <ul className="space-y-3 sm:space-y-4">
                            {eligibilityCriteria.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <div className="mt-1 w-5 h-5 bg-[#0b6d41] rounded-full flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Admission Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0b6d41] rounded-lg sm:rounded-xl flex items-center justify-center text-white shrink-0">
                                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-[#0b6d41]">Admission Process</h3>
                        </div>
                        <div className="space-y-4 sm:space-y-6">
                            {admissionProcess.map((item, i) => (
                                <div key={i} className="flex gap-3 sm:gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0b6d41] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0b6d41] text-sm sm:text-base mb-1">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                    <a
                        href="tel:+914288274747"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#0b6d41] text-white rounded-full font-bold text-sm hover:bg-[#085231] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                        Call: +91 4288 274747
                    </a>
                    <a
                        href="mailto:admissions@jkkn.ac.in"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0b6d41] rounded-full font-bold text-sm border-2 border-[#0b6d41] hover:bg-[#0b6d41] hover:text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                        Email Admissions
                    </a>
                </div>
            </div>
        </section>
    );
}
