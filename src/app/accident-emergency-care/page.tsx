"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, Users, Building2, Activity, ArrowRight, CheckCircle2,
    Download, Calendar, Laptop, Sparkles, Heart,
    Stethoscope, FileText, ChevronDown, Plus, Minus, Siren,
    Shield, Zap, ClipboardList, UserCog, Microscope, Ambulance, HeartPulse
} from 'lucide-react';

export default function AccidentEmergencyCare() {
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
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-[#0b6d41]">
                        B.Sc Accident & Emergency Care Technology
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Embark on a life-saving career in emergency medicine. Our comprehensive 3 years + 1 year internship program prepares Learners to become skilled emergency care technologists, mastering trauma management, emergency response, critical care, advanced life support, disaster management, and pre-hospital emergency care.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-3.5 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-[#095c37] transition-all transform hover:-translate-y-1">
                            Apply Now →
                        </button>
                        <button className="px-8 py-3.5 bg-white text-[#0b6d41] border border-[#0b6d41]/20 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-all">
                            View Curriculum
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border-4 border-white bg-[#0b6d41] flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#064225] to-transparent opacity-60"></div>
                        <Siren className="w-24 h-24 text-white/80 group-hover:scale-110 transition-transform duration-700" />
                        <span className="absolute bottom-6 left-6 font-bold text-xl letter-spacing-wide text-white">Emergency Care</span>
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
                <h2 className="text-3xl font-black text-[#0b6d41] mb-6">What is B.Sc Accident & Emergency Care Technology?</h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-6 text-justify">
                    <p>
                        B.Sc Accident and Emergency Care Technology is a specialized undergraduate program designed to train healthcare professionals in emergency medical services, trauma care, and critical care management. This program combines theoretical knowledge with extensive practical training, preparing Learners to work as first responders and emergency care specialists in hospitals, trauma centers, and pre-hospital settings.
                    </p>
                    <p>
                        The curriculum covers emergency medicine fundamentals, trauma assessment and management, advanced cardiac life support (ACLS), advanced trauma life support (ATLS), disaster management, pre-hospital care, emergency pharmacology, airway management, shock management, and emergency medical procedures. Learners gain expertise in rapid patient assessment, triage, life-saving interventions, and emergency response coordination.
                    </p>
                    <p>
                        With increasing road accidents, natural disasters, and medical emergencies globally, skilled emergency care technologists are critical in saving lives. Our program ensures graduates are well-equipped with cutting-edge emergency care competencies to handle any medical crisis effectively.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {[
                        { title: "Emergency Response Training", icon: <Siren />, desc: "Rapid assessment & intervention" },
                        { title: "Advanced Life Support", icon: <HeartPulse />, desc: "ACLS & ATLS certification" },
                        { title: "Clinical Excellence", icon: <Shield />, desc: "2000+ hours hands-on training" },
                        { title: "Expert Faculty", icon: <Stethoscope />, desc: "Learn from emergency physicians" },
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
                            { label: "Session", value: "2025-2026" },
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
                    <p className="text-gray-500 mt-2">Review the academic qualifications needed to apply for the B.Sc Accident and Emergency Care Technology program</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#ffde59]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffde59]" /> Academic Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Passed 10+2 or equivalent from a recognized board",
                                "Physics, Chemistry, and Biology as core subjects",
                                "Minimum 50% aggregate marks (40% for SC/ST/OBC)",
                                "English as a compulsory subject in 10+2"
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
                                "Medical fitness certificate",
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
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

    const syllabus = {
        'Year 1': [
            {
                sem: 'Semester 1',
                credits: '22 Credits',
                subjects: [
                    { name: 'Human Anatomy', type: 'Theory' },
                    { name: 'Human Physiology', type: 'Theory' },
                    { name: 'Biochemistry', type: 'Theory' },
                    { name: 'English Communication', type: 'Theory' },
                    { name: 'Computer Applications', type: 'Practical' },
                    { name: 'Anatomy Practical', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 2',
                credits: '24 Credits',
                subjects: [
                    { name: 'Emergency Medicine Fundamentals', type: 'Theory' },
                    { name: 'Pathology Basics', type: 'Theory' },
                    { name: 'Microbiology', type: 'Theory' },
                    { name: 'First Aid Principles', type: 'Theory' },
                    { name: 'Basic Life Support (BLS)', type: 'Practical' },
                    { name: 'Physiology Practical', type: 'Practical' }
                ]
            }
        ],
        'Year 2': [
            {
                sem: 'Semester 3',
                credits: '24 Credits',
                subjects: [
                    { name: 'Emergency Pharmacology', type: 'Theory' },
                    { name: 'Trauma Assessment', type: 'Theory' },
                    { name: 'Medical Emergencies - I', type: 'Theory' },
                    { name: 'Emergency Nursing Basics', type: 'Theory' },
                    { name: 'Emergency Care Lab - I', type: 'Practical' },
                    { name: 'Cardiopulmonary Resuscitation', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 4',
                credits: '26 Credits',
                subjects: [
                    { name: 'Medical Emergencies - II', type: 'Theory' },
                    { name: 'Trauma Management', type: 'Theory' },
                    { name: 'Advanced Cardiac Life Support', type: 'Theory' },
                    { name: 'Emergency Radiology', type: 'Theory' },
                    { name: 'ACLS Training Lab', type: 'Practical' },
                    { name: 'Emergency Care Lab - II', type: 'Practical' }
                ]
            }
        ],
        'Year 3': [
            {
                sem: 'Semester 5',
                credits: '26 Credits',
                subjects: [
                    { name: 'Advanced Trauma Life Support', type: 'Theory' },
                    { name: 'Pediatric Emergency Care', type: 'Theory' },
                    { name: 'Toxicology & Poisoning', type: 'Theory' },
                    { name: 'Disaster Management', type: 'Theory' },
                    { name: 'ATLS Training', type: 'Practical' },
                    { name: 'Emergency Department Rotation', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 6',
                credits: '28 Credits',
                subjects: [
                    { name: 'Pre-Hospital Emergency Care', type: 'Theory' },
                    { name: 'Emergency Ventilation', type: 'Theory' },
                    { name: 'Burns & Wound Management', type: 'Theory' },
                    { name: 'Research Methodology', type: 'Theory' },
                    { name: 'Ambulance Training', type: 'Practical' },
                    { name: 'Trauma Center Posting', type: 'Practical' }
                ]
            }
        ],
        'Year 4': [
            {
                sem: 'Semester 7',
                credits: '28 Credits',
                subjects: [
                    { name: 'Critical Care in Emergency', type: 'Theory' },
                    { name: 'Triage & Mass Casualty', type: 'Theory' },
                    { name: 'Emergency Procedures', type: 'Theory' },
                    { name: 'Quality Management in Emergency', type: 'Theory' },
                    { name: 'Clinical Internship - I', type: 'Practical' },
                    { name: 'Emergency Simulation', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 8',
                credits: '30 Credits',
                subjects: [
                    { name: 'Professional Ethics', type: 'Theory' },
                    { name: 'Healthcare Management', type: 'Theory' },
                    { name: 'Clinical Internship - II', type: 'Practical' },
                    { name: 'Project & Dissertation', type: 'Practical' },
                    { name: 'Comprehensive Viva', type: 'Practical' },
                    { name: 'Hospital Placement', type: 'Practical' }
                ]
            }
        ]
    };

    return (
        <section className="py-24 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2">Academic Curriculum</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Program Structure & Syllabus</h2>
                <p className="text-gray-500 mt-2">Comprehensive curriculum with strong foundation in emergency medicine and extensive practical training</p>
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8"
            >
                {(syllabus as any)[activeYear].map((sem: any, i: number) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:border-[#0b6d41] transition-colors">
                        <div className="bg-[#0b6d41] text-white p-4 flex justify-between items-center">
                            <h4 className="font-bold">{sem.sem}</h4>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3">
                                {sem.subjects.map((sub: any, idx: number) => (
                                    <li key={idx} className="flex items-center justify-between gap-3 text-gray-700 p-2 rounded hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${sub.type === 'Theory' ? 'bg-[#ffde59]' : 'bg-[#cc5500]'}`}></div>
                                            <span className="font-medium">{sub.name}</span>
                                        </div>
                                        <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${sub.type === 'Theory' ? 'bg-blue-50 text-blue-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                            {sub.type}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

// 6. Career Section
function CareerSection() {
    const jobs = [
        { title: "Emergency Medical Technician", desc: "Provide immediate care to patients in emergency situations and during ambulance transport.", salary: "₹3 - 6 LPA", icon: <Ambulance /> },
        { title: "Trauma Care Specialist", desc: "Manage trauma patients and provide specialized care in trauma centers.", salary: "₹4 - 9 LPA", icon: <HeartPulse /> },
        { title: "Emergency Room Technician", desc: "Work in emergency departments and provide critical care to ER patients.", salary: "₹4 - 10 LPA", icon: <Siren /> },
        { title: "Critical Care Technologist", desc: "Monitor and support critically ill patients in ICU and emergency settings.", salary: "₹5 - 11 LPA", icon: <Activity /> },
        { title: "Disaster Management Officer", desc: "Coordinate emergency response during disasters and mass casualty events.", salary: "₹5 - 12 LPA", icon: <Shield /> },
        { title: "Ambulance Service Manager", desc: "Manage ambulance operations, coordinate emergency response teams.", salary: "₹6 - 15 LPA", icon: <ClipboardList /> },
    ];

    return (
        <section className="bg-[#fbfbee] py-24 text-[#0b6d41]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Future Pathways</span>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#0b6d41]">Career Opportunities</h2>
                <p className="text-gray-500 mb-16 max-w-3xl mx-auto">B.Sc Accident and Emergency Care Technology graduates enjoy diverse career paths in emergency healthcare</p>

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
            <h2 className="text-3xl font-black text-[#0b6d41] mb-4">World-Class Facilities</h2>
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto">State-of-the-art infrastructure for hands-on experience with emergency care equipment and protocols</p>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Trauma Care Unit", color: "bg-[#ffde59]", text: "text-[#0b6d41]", desc: "Advanced trauma management equipment." },
                    { title: "Ambulance Training", color: "bg-[#163a4a]", text: "text-white", desc: "Pre-hospital care and transport training." },
                    { title: "ACLS/ATLS Lab", color: "bg-white", text: "text-[#0b6d41] border border-[#0b6d41]/10", desc: "Advanced life support certification training." },
                    { title: "Incubation", color: "bg-[#0b6d41]", text: "text-white", desc: "Innovation and startup support for healthcare ventures." },
                    { title: "Simulation Lab (Tieup Hospitals)", color: "bg-[#0b6d41]", text: "text-white", desc: "High-fidelity emergency scenarios with partner hospitals." },
                    { title: "Ambulance Simulator (Tieup Hospitals)", color: "bg-[#163a4a]", text: "text-white", desc: "Pre-hospital emergency care simulation with hospital partners." },
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
                <p className="text-gray-500 mt-2">Simple steps to begin your journey towards becoming an emergency care technology professional</p>
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
            q: "What is B.Sc Accident and Emergency Care Technology?",
            a: "B.Sc Accident and Emergency Care Technology is a 3 years + 1 year internship undergraduate degree program that trains professionals in emergency medical services, trauma care, critical care management, advanced life support, disaster management, and emergency response coordination. Graduates become skilled first responders and emergency care specialists capable of handling any medical crisis."
        },
        {
            q: "What is the eligibility criteria?",
            a: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (40% for reserved categories). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
        },
        {
            q: "What is the salary of an Emergency Care Technologist?",
            a: "Entry-level emergency care technologists earn ₹3-5 lakhs per annum. With 3-5 years experience, salaries range from ₹6-10 lakhs. Senior positions in corporate hospitals and emergency services offer ₹12-20 lakhs per annum. International opportunities offer significantly higher packages."
        },
        {
            q: "What are the career opportunities?",
            a: "Graduates can work as Emergency Medical Technicians, Trauma Care Specialists, Critical Care Technologists, Disaster Management Coordinators, Emergency Room Technicians, Ambulance Service Managers, and Research Associates in hospitals, trauma centers, and emergency services."
        },
        {
            q: "What certifications will I receive?",
            a: "The program includes certifications in Basic Life Support (BLS), Advanced Cardiac Life Support (ACLS), Advanced Trauma Life Support (ATLS), Pediatric Advanced Life Support (PALS), and Pre-Hospital Trauma Life Support (PHTLS), making graduates highly qualified for emergency care positions."
        },
        {
            q: "Can I pursue higher education after this course?",
            a: "Yes, graduates can pursue M.Sc in Emergency Medicine, M.Sc in Critical Care, M.Sc in Disaster Management, MBA in Healthcare Management, or specialized certifications in trauma care, disaster management, or emergency medical services for advanced career opportunities."
        },
        {
            q: "What practical training is included?",
            a: "The program includes 2000+ hours of clinical training in emergency departments, trauma centers, ICUs, ambulance services, and disaster management units with hands-on experience in patient assessment, triage, CPR, airway management, trauma care, and all major emergency medical procedures."
        },
        {
            q: "Is this a physically demanding career?",
            a: "Yes, emergency care requires physical stamina, quick thinking, and emotional resilience. The program includes physical fitness training and prepares students to handle high-stress situations, long shifts, and physically demanding tasks. However, the rewarding nature of saving lives makes it a fulfilling career choice."
        },
    ];

    return (
        <section className="py-20 max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">Common Questions</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Frequently Asked Questions</h2>
                <p className="text-gray-500 mt-2">Find answers to common questions about B.Sc Accident and Emergency Care Technology program</p>
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
                    <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Start Your Career in Emergency Care Technology?</h2>
                    <p className="font-medium opacity-90 text-[#0b6d41]">Join JKKN College and become a skilled emergency care professional saving lives.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-3 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-colors">Apply Now</button>
                    <button className="px-8 py-3 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41] hover:text-white transition-colors">Contact Admissions</button>
                </div>
            </div>
        </section>
    );
}
