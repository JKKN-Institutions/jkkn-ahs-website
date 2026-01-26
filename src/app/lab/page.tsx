"use client";

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Labs() {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    {/* Header Section */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0b6d41] mb-8">
                        Labs
                    </h1>

                    {/* Three Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src="/lab/lab-1.webp"
                                alt="Allied Health Science Lab with wooden desks and equipment"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src="/lab/lab-2.png"
                                alt="Students in lab coats with books"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src="/lab/lab-3.png"
                                alt="Student reading in library"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 text-gray-700 text-base leading-relaxed max-w-full">
                        <p className="text-justify">
                            The JKKN Allied Health Science Lab is a cutting-edge facility designed to support practical learning and skill development for students pursuing various disciplines in allied health sciences. Here is an overview of what you can expect to find and experience in this state-of-the-art lab:
                        </p>

                        <p className="text-justify">
                            <strong>Advanced Equipment:</strong> The lab is equipped with advanced and specialized equipment tailored to the needs of allied health science programs. These tools and machines enable students to gain hands-on experience and practical skills that are essential in their respective fields.
                        </p>

                        <p className="text-justify">
                            <strong>Discipline-Specific Labs:</strong> Depending on the specific allied health science program you are enrolled in, you may have access to discipline-specific labs. These labs cater to areas like medical technology, radiology, respiratory therapy, physical therapy, and more. Each lab is equipped with equipment and resources relevant to the discipline.
                        </p>

                        <p className="text-justify">
                            <strong>Practical Skill Development:</strong> In the lab, you will have the opportunity to develop practical skills that are directly applicable to your chosen field. Whether it's conducting diagnostic tests, using medical imaging equipment, or performing therapeutic procedures, the lab provides a safe and controlled environment for hands-on learning.
                        </p>

                        <p className="text-justify">
                            <strong>Simulated Patient Encounters:</strong> Some allied health science programs may incorporate simulated patient encounters into their curriculum. These simulations allow students to practice patient interaction, clinical assessments, and treatment procedures in a controlled setting.
                        </p>

                        <p className="text-justify">
                            <strong>Interdisciplinary Learning:</strong> The lab encourages interdisciplinary learning and collaboration. Students from different allied health science programs may interact and collaborate on projects or scenarios that mimic real-world healthcare environments. This fosters teamwork and prepares students for integrated healthcare practice.
                        </p>

                        <p className="text-justify">
                            <strong>Safety Protocols:</strong> Safety is a top priority in the lab. Students are trained in proper safety procedures and infection control measures, ensuring a safe and hygienic environment for both learning and patient care.
                        </p>

                        <p className="text-justify">
                            <strong>Research Opportunities:</strong> Depending on your program and academic level, you may have the chance to engage in research projects within the lab. This provides opportunities to contribute to advancements in allied health sciences and gain research experience.
                        </p>

                        <p className="text-justify">
                            <strong>Expert Guidance:</strong> Lab instructors and faculty members with expertise in allied health sciences are available to provide guidance, supervision, and mentorship. They help students navigate the practical aspects of their education and offer insights into the latest developments in their respective fields.
                        </p>

                        <p className="text-justify">
                            Overall, the JKKN Allied Health Science Lab is a hub of practical learning and skill development for students pursuing careers in various allied health disciplines. It provides the tools, resources, and support necessary to excel in these fields and make meaningful contributions to healthcare.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
