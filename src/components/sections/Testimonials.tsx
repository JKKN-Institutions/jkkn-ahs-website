"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Priya Krishnan",
        role: "B.Sc. MLT 2022 | Apollo Hospitals",
        initials: "PK",
        content: "The practical training at JKKN prepared me thoroughly for my role at Apollo. The Learning Facilitators' real-world experience made all the difference in understanding complex procedures.",
        bgColor: "bg-[#0b6d41]"
    },
    {
        name: "Rajesh Sundaram",
        role: "B.Sc. Optometry 2021 | Own Practice",
        initials: "RS",
        content: "JKKN's optometry program and clinical exposure helped me start my own eye care practice within 2 years of graduation. The foundation was exceptional.",
        bgColor: "bg-[#0b6d41]"
    },
    {
        name: "Anitha Mohan",
        role: "B.Sc. Cardiac Tech 2023 | MIOT",
        initials: "AM",
        content: "From state-of-the-art cardiac simulation labs to hospital internship at MIOT, JKKN gave me everything I needed to become a confident cardiac technologist.",
        bgColor: "bg-[#0b6d41]"
    }
];

export function Testimonials() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-6 sm:mb-8 md:mb-16">
                    <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">LEARNER VOICES</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                        What Our Learners Say
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
                        Hear from our alumni who are now healthcare professionals across India and abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="mb-4 sm:mb-6">
                                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#0b6d41]" />
                            </div>

                            <p className="text-gray-700 italic mb-6 sm:mb-8 text-sm leading-relaxed">
                                {testimonial.content}
                            </p>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0`}>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
