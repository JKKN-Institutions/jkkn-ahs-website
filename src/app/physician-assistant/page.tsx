"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, Users, Building2, Activity, ArrowRight, CheckCircle2,
    Download, Calendar, Laptop, Sparkles, Heart,
    Stethoscope, FileText, ChevronDown, Plus, Minus, UserCheck,
    Shield, Syringe, ClipboardList, UserCog, Microscope, HeartPulse
} from 'lucide-react';

export default function PhysicianAssistant() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#fbfbee]">
            <Navbar />

            <main className="flex-grow pt-20">
                <HeroSection />
                <StatsSection />
                <AboutSection />
                <EligibilitySection />
                <SyllabusSection />
                <CareerSection />
                <FacilitiesSection />
                <AdmissionProcessSection />
                <FAQSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}

// 1. Hero Section
function HeroSection() {
    return (
        <section className="bg-[#fbfbee] text-[#0b6d41] py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-4 block p-1 bg-[#0b6d41]/10 w-fit rounded">Allied Health Sciences</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        B.Sc <span className="text-[#0b6d41]">Physician Assistant</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Embark on a rewarding healthcare career as a Physician Assistant. Our comprehensive 3 Years + 1 Year Internship program prepares Learners to become skilled clinical professionals, mastering patient assessment, medical diagnosis support, therapeutic procedures, and comprehensive patient care across diverse medical specialties.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-[#095c37] transition-all transform hover:-translate-y-1 inline-block"
                        >
                            Apply Now →
                        </a>
                        <button
                            onClick={() => {
                                const syllabusSection = document.getElementById('academic-curriculum');
                                syllabusSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="px-8 py-3.5 bg-white text-[#0b6d41] border border-[#0b6d41]/20 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-all"
                        >
                            View Curriculum
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border-4 border-white group">
                        <Image
                            src="/allied health science main image8.png"
                            alt="Physician Assistant"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#064225] to-transparent opacity-40"></div>
                        <span className="absolute bottom-6 left-6 font-bold text-xl letter-spacing-wide text-white z-10">Physician Assistant</span>
                    </div>
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffde59]/10 -skew-x-12 transform origin-top translate-x-20 -z-0"></div>
        </section>
    );
}

// 2. Stats Section
function StatsSection() {
    const stats = [
        { label: "Years Duration", value: "3+1", icon: <Clock className="w-5 h-5" /> },
        { label: "Placement Rate", value: "95%", icon: <Users className="w-5 h-5" /> },
        { label: "Hospital Partners", value: "25+", icon: <Building2 className="w-5 h-5" /> },
        { label: "Clinical Hours", value: "2000+", icon: <Activity className="w-5 h-5" /> },
    ];

    return (
        <section className="relative z-20 -mt-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-b-4 border-[#0b6d41]"
                    >
                        <div className="text-3xl md:text-4xl font-black text-[#0b6d41] mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// 3. About Section with Sidebar
function AboutSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded">Program Overview</span>
                <h2 className="text-3xl font-black text-[#0b6d41] mb-6">What is B.Sc Physician Assistant?</h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-6 text-justify">
                    <p>
                        B.Sc Physician Assistant is a specialized undergraduate program designed to train healthcare professionals who work alongside physicians in diagnosing illnesses, developing treatment plans, and providing patient care. Physician Assistants are licensed medical professionals who practice medicine under the supervision of physicians, extending healthcare access to more patients.
                    </p>
                    <p>
                        The curriculum covers clinical medicine fundamentals, patient assessment techniques, diagnostic reasoning, pharmacology, medical procedures, emergency care, surgical assistance, and patient management across various specialties. Learners gain expertise in physical examinations, ordering diagnostic tests, interpreting results, prescribing medications, and counseling patients.
                    </p>
                    <p>
                        With India's growing healthcare demands and shortage of physicians, especially in rural areas, Physician Assistants play a crucial role in expanding healthcare delivery. Our program ensures graduates are equipped with clinical skills, medical knowledge, and professional competencies to excel in diverse healthcare settings.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {[
                        { title: "Clinical Excellence", icon: <Stethoscope />, desc: "Comprehensive patient care training" },
                        { title: "Diagnostic Skills", icon: <ClipboardList />, desc: "Patient assessment & diagnosis support" },
                        { title: "Hands-on Training", icon: <Shield />, desc: "2000+ hours clinical experience" },
                        { title: "Expert Faculty", icon: <UserCog />, desc: "Learn from physicians & specialists" },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-100">
                            <div className="p-3 bg-[#0b6d41]/10 rounded-lg text-[#0b6d41] shrink-0">
                                {React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-5 h-5" })}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b6d41]">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/3">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 sticky top-24 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0b6d41]/5 opacity-50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4 text-[#0b6d41]">Quick Course Information</h3>
                    <ul className="space-y-4 text-sm">
                        {[
                            { label: "Duration", value: "3 + 1" },
                            { label: "Degree", value: "B.Sc" },
                            { label: "Intake", value: "10 Seats" },
                            { label: "Session", value: "2026-2027" },
                            { label: "Approval", value: "UGC Approved" },
                            { label: "Fee", value: "Contact Us" },
                        ].map((item, i) => (
                            <li key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                <span className="text-gray-500 font-medium">{item.label}</span>
                                <span className="font-bold text-[#0b6d41]">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full mt-8 py-3 bg-[#0b6d41] text-white font-bold rounded-xl shadow-lg hover:bg-[#095c37] transition-all flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" /> Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
}

// 4. Eligibility Section
function EligibilitySection() {
    return (
        <section className="py-20 bg-[#fbfbee]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Admission Requirements</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Eligibility Criteria</h2>
                    <p className="text-gray-500 mt-2">Review the academic qualifications needed to apply for the B.Sc Physician Assistant program</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#ffde59]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffde59]" /> Academic Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Passed +2 or equivalent from a recognized board",
                                "Physics, Chemistry, and Biology as core subjects",
                                "Minimum 50% aggregate marks (40% for SC/ST/OBC)",
                                "English as a compulsory subject in +2"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b6d41] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#0b6d41]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-[#0b6d41]" /> Additional Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Age: Minimum 17 years as on December 31st",
                                "Valid entrance exam score (if applicable)",
                                "Medical fitness certificate from registered practitioner",
                                "Character certificate from last attended institution"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b6d41] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 5. Syllabus Section
function SyllabusSection() {
    const [activeYear, setActiveYear] = useState('Year 1');
    const years = ['Year 1', 'Year 2', 'Year 3'];

    const syllabus = {
        'Year 1': {
            semester: 'Semester 1 & 2',
            theoryOnly: [
                'INTRODUCTION TO COMPUTER',
                'TECHNICAL REPORT WRITING/SPOKEN ENGLISH/COMPREHENSIVE PATIENT ORIENTED COMMUNICATION SKILL'
            ],
            theoryPractical: [
                'ANATOMY, PHYSIOLOGY, BIOCHEMISTRY'
            ]
        },
        'Year 2': {
            semester: 'Semester 3 & 4',
            theoryOnly: [],
            theoryPractical: [
                'GENERAL MEDICINE & PHARMACOLOGY',
                'PEDIATRICS & GERIATRICS, CLINICAL MICROBIOLOGY',
                'OBSTETRICS & GYNAECOLOGY, SURGERY'
            ]
        },
        'Year 3': {
            semester: 'Semester 5 & 6',
            theoryOnly: [],
            theoryPractical: [
                'CARDIOLOGY & CARDIAC SURGERY, NEUROLOGY',
                'NEPHROLOGY, ORTHOPEDICS, PULMONOLOGY, GASTROENTEROLOGY'
            ]
        }
    };

    return (
        <section id="academic-curriculum" className="py-24 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2">Academic Curriculum</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Program Structure & Syllabus</h2>
                <p className="text-gray-500 mt-2">Comprehensive curriculum with strong foundation in clinical medicine and extensive practical training</p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-12 bg-white p-2 rounded-full shadow-md w-fit mx-auto">
                {years.map(year => (
                    <button
                        key={year}
                        onClick={() => setActiveYear(year)}
                        className={`px-8 py-2 rounded-full font-bold transition-all ${activeYear === year ? 'bg-[#0b6d41] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
            >
                <div className="w-full max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="bg-[#0b6d41] text-white p-6 text-center">
                            <h4 className="font-bold text-2xl">{(syllabus as any)[activeYear].semester}</h4>
                            <p className="text-sm text-white/80 mt-1">{activeYear} Curriculum</p>
                        </div>
                        <div className="p-8">
                            {/* Curriculum Table */}
                            <div className="mb-8">
                                <h5 className="text-lg font-bold text-[#0b6d41] mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5" />
                                    Course Syllabus
                                </h5>

                                {/* Complete Curriculum Table */}
                                <div className="overflow-x-auto rounded-lg border-2 border-gray-200">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-6 py-3 text-left font-bold text-gray-700">SUBJECT</th>
                                                <th className="border border-gray-300 px-6 py-3 text-center font-bold text-gray-700">THEORY</th>
                                                <th className="border border-gray-300 px-6 py-3 text-center font-bold text-gray-700">PRACTICAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Theory + Practical Subjects */}
                                            {(syllabus as any)[activeYear].theoryPractical.map((subject: string, idx: number) => (
                                                <tr key={`tp-${idx}`} className="hover:bg-gray-50">
                                                    <td className="border border-gray-300 px-6 py-4 text-gray-700">{subject}</td>
                                                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold text-green-600">YES</td>
                                                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold text-green-600">YES</td>
                                                </tr>
                                            ))}
                                            {/* Theory Only Subjects */}
                                            {(syllabus as any)[activeYear].theoryOnly.map((subject: string, idx: number) => (
                                                <tr key={`t-${idx}`} className="hover:bg-gray-50">
                                                    <td className="border border-gray-300 px-6 py-4 text-gray-700">{subject}</td>
                                                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold text-green-600">YES</td>
                                                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold text-red-600">NO</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Theory Only Section */}
                            {(syllabus as any)[activeYear].theoryOnly.length > 0 && (
                                <div className="mb-8">
                                    <h5 className="text-lg font-bold text-[#0b6d41] mb-4 flex items-center gap-2">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs uppercase font-bold">Theory</span>
                                        Theory Only Subjects
                                    </h5>
                                    <div className="bg-blue-50/30 rounded-lg p-6 border-2 border-blue-200">
                                        <ul className="space-y-3">
                                            {(syllabus as any)[activeYear].theoryOnly.map((subject: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 font-medium">{subject}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Theory + Practical Section */}
                            <div>
                                <h5 className="text-lg font-bold text-[#0b6d41] mb-4 flex items-center gap-2">
                                    <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs uppercase font-bold">Theory + Practical</span>
                                    Theory & Practical Subjects
                                </h5>
                                <div className="bg-yellow-50/30 rounded-lg p-6 border-2 border-yellow-200">
                                    <ul className="space-y-3">
                                        {(syllabus as any)[activeYear].theoryPractical.map((subject: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium">{subject}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="mt-8 flex justify-center">
                                <button className="px-8 py-3 bg-[#0b6d41] text-white font-bold rounded-full shadow-lg hover:bg-[#095c37] transition-all flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download {activeYear} Syllabus PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// 6. Career Section
function CareerSection() {
    const jobs = [
        { title: "Clinical Physician Assistant", desc: "Provide direct patient care, conduct examinations, and assist physicians in diagnosis and treatment.", salary: "₹4 - 8 LPA", icon: <Stethoscope /> },
        { title: "Emergency Care Assistant", desc: "Work in emergency departments, assess critical patients, and provide immediate medical care.", salary: "₹5 - 10 LPA", icon: <HeartPulse /> },
        { title: "Surgical Assistant", desc: "Assist surgeons in operations, pre-operative care, and post-operative patient management.", salary: "₹5 - 12 LPA", icon: <UserCog /> },
        { title: "ICU/Critical Care Assistant", desc: "Monitor critically ill patients and support intensive care medical teams.", salary: "₹5 - 11 LPA", icon: <Activity /> },
        { title: "OPD Coordinator", desc: "Manage outpatient departments, conduct preliminary assessments, and coordinate patient flow.", salary: "₹4 - 9 LPA", icon: <ClipboardList /> },
        { title: "Community Health Officer", desc: "Provide primary healthcare in community settings and rural health programs.", salary: "₹3 - 8 LPA", icon: <Heart /> },
    ];

    return (
        <section className="bg-[#fbfbee] py-24 text-[#0b6d41]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Future Pathways</span>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#0b6d41]">Career Opportunities</h2>
                <p className="text-gray-500 mb-16 max-w-3xl mx-auto">B.Sc Physician Assistant graduates enjoy diverse career paths across the healthcare sector</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, i) => (
                        <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl text-left hover:shadow-xl transition-all hover:-translate-y-2 shadow-sm">
                            <div className="w-12 h-12 bg-[#0b6d41] rounded-xl flex items-center justify-center mb-6 text-white">
                                {React.cloneElement(job.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#0b6d41]">{job.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.desc}</p>
                            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                                💰 {job.salary}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 7. Facilities Section
function FacilitiesSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 text-center">
            <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Infrastructure</span>
            <h2 className="text-3xl font-black text-[#0b6d41] mb-4">World-Class Facilities with Tie-up Hospitals</h2>
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto">State-of-the-art infrastructure for hands-on experience with industry-standard clinical training</p>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { title: "Clinical Skills Lab", color: "bg-[#0b6d41]", text: "text-white", desc: "Advanced patient simulation and examination training." },
                    { title: "Diagnostic Lab ", color: "bg-[#ffde59]", text: "text-[#0b6d41]", desc: "Laboratories including Anatomy, Physiology, Biochemistry, Microbiology, Pathology, Hematology" },
                    { title: "Emergency Care Unit ", color: "bg-[#163a4a]", text: "text-white", desc: "Emergency medicine and trauma care simulation." },
                    { title: "Digital Library", color: "bg-white", text: "text-[#0b6d41] border border-[#0b6d41]/10", desc: "Medical journals and clinical resources access." },
                ].map((fac, i) => (
                    <div key={i} className={`${fac.color} ${fac.text} rounded-[2rem] p-8 text-left h-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all`}>
                        <h3 className="text-2xl font-black mb-6">{fac.title}</h3>
                        <p className={`text-sm opacity-90 leading-relaxed font-medium`}>{fac.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 8. Admission Process
function AdmissionProcessSection() {
    return (
        <section className="py-24 bg-[#fbfbee]">
            <div className="max-w-4xl mx-auto px-4 text-center mb-16">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">How to Apply</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Admission Process</h2>
                <p className="text-gray-500 mt-2">Simple steps to begin your journey towards becoming a Physician Assistant professional</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 -z-10"></div>

                {[
                    { step: 1, title: "Online Application", desc: "Complete the online form and upload documents." },
                    { step: 2, title: "Document Verification", desc: "Submit originals for verification at office." },
                    { step: 3, title: "Counseling Session", desc: "Attend counseling about program details." },
                    { step: 4, title: "Fee Payment", desc: "Pay fees and complete enrollment." },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center w-full md:w-1/4">
                        <div className="w-20 h-20 rounded-full bg-[#0b6d41] text-white flex items-center justify-center text-2xl font-black shadow-xl ring-8 ring-[#fbfbee] mb-6">
                            {item.step}
                        </div>
                        <h4 className="font-bold text-[#0b6d41] text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-500 px-4">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 9. FAQ Section
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        {
            q: "What is B.Sc Physician Assistant?",
            a: "B.Sc Physician Assistant is a 3 years + 1 year internship program that trains healthcare professionals to work alongside physicians in clinical settings. Physician Assistants are skilled in patient assessment, diagnosis support, medical procedures, treatment planning, and patient care management across various medical specialties including general medicine, surgery, emergency care, and community health."
        },
        {
            q: "What is the eligibility criteria?",
            a: "Candidates must have passed +2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (45% for reserved categories). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
        },
        {
            q: "What is the salary of a Physician Assistant in India?",
            a: "Entry-level Physician Assistants earn ₹3-5 lakhs per annum. With 3-5 years of experience, salaries range from ₹6-10 lakhs. Senior Physician Assistants and those in specialized roles at corporate hospitals can earn ₹12-20 lakhs per annum. International opportunities offer significantly higher packages."
        },
        {
            q: "What are the career opportunities?",
            a: "Graduates can work as Clinical Physician Assistant, Emergency Care Assistant, Surgical Assistant, ICU/Critical Care Assistant, OPD Coordinator, Community Health Officer, Primary Care Provider, and Clinical Research Associate in hospitals, clinics, community health centers, and pharmaceutical companies."
        },
        {
            q: "Is B.Sc Physician Assistant a good career choice?",
            a: "Yes, B.Sc Physician Assistant is an excellent career choice due to growing demand for mid-level healthcare providers in India, competitive salaries, diverse work environments, opportunities for specialization, and the fulfilling nature of patient care. With India's expanding healthcare infrastructure, PAs are increasingly recognized as vital healthcare team members."
        },
        {
            q: "Can I pursue higher education after this course?",
            a: "Yes, graduates can pursue M.Sc in Physician Assistant Studies, M.Sc in Clinical Medicine, M.Sc in Public Health (MPH), MBA in Healthcare Management, or specialized certifications in Emergency Medicine, Critical Care, or specific medical specialties for advanced career opportunities."
        },
        {
            q: "What practical training is included?",
            a: "The program includes 2000+ hours of clinical training across OPD, emergency departments, ICU, operation theaters, and community health settings with hands-on experience in patient assessment, medical procedures, diagnostic interpretations, and clinical rotations in multiple specialties including medicine, surgery, pediatrics, and emergency care."
        },
        {
            q: "What is the difference between a Physician Assistant and a Doctor?",
            a: "Physician Assistants practice medicine under the supervision of physicians. While doctors have independent practice rights, PAs work as part of a healthcare team. PAs can diagnose, treat, and prescribe medications but always collaborate with physicians for complex cases. The 4-year PA program focuses on clinical practice, while medical doctors complete 5.5 years of MBBS."
        },
    ];

    return (
        <section className="py-20 max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">Common Questions</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Frequently Asked Questions</h2>
                <p className="text-gray-500 mt-2">Find answers to common questions about B.Sc Physician Assistant program</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-bold text-[#0b6d41]">{faq.q}</span>
                            {openIndex === i ? <Minus className="w-5 h-5 text-[#ffde59]" /> : <Plus className="w-5 h-5 text-gray-400" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 10. CTA Section
function CTASection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[#0b6d41] text-center md:text-left gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Start Your Career as a Physician Assistant?</h2>
                    <p className="font-medium opacity-90 text-[#0b6d41]">Join JKKN College and become a skilled clinical healthcare professional.</p>
                </div>
                <div className="flex gap-4">
                    <a
                        href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-colors inline-block"
                    >
                        Apply Now
                    </a>
                    <a
                        href="tel:91 9345855001"
                        className="px-8 py-3 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41] hover:text-white transition-colors inline-block"
                    >
                        Contact Admissions
                    </a>
                </div>
            </div>
        </section>
    );
}
