"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, Users, Building2, Activity, ArrowRight, CheckCircle2,
    Download, Calendar, Laptop, Sparkles, HeartPulse,
    Stethoscope, FileText, ChevronDown, Plus, Minus
} from 'lucide-react';

export default function CardiacTechnology() {
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
                        B.Sc <span className="text-[#0b6d41]">Cardiac Technology</span>
                    </h1>
                    <p className="text-gray-900 text-lg mb-8 leading-relaxed">
                        Embark on a transformative journey into cardiovascular healthcare. Our comprehensive 3 Years + 1 Year Internship program prepares learners to master refined cardiac technologies, mastering ECG interpretation, echocardiography, cardiac catheterization, and advanced cardiovascular diagnostics.
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
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border-4 border-white group">
                        <Image
                            src="/cardiac-technology-hero.png"
                            alt="Cardiac Technology Lab"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#064225] to-transparent opacity-40"></div>
                        <span className="absolute bottom-6 left-6 font-bold text-xl letter-spacing-wide text-white z-10">Cardiac Technology Lab</span>
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
        { label: "Years Duration", value: "3 + 1", icon: <Clock className="w-5 h-5" /> },
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
                        <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// 3. About Section with Sidebar
function AboutSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
                <div className="lg:w-2/3">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded">Program Overview</span>
                    <h2 className="text-3xl font-black text-[#0b6d41] mb-6">What is B.Sc Cardiac Technology?</h2>
                    <div className="text-gray-900 leading-relaxed text-lg space-y-6 text-justify">
                        <p>
                            B.Sc Cardiac Technology is a specialized undergraduate program designed to train healthcare professionals in the diagnosis, monitoring, and treatment support for patients with cardiovascular diseases. This program combines theoretical knowledge with extensive practical training, preparing graduates to work alongside cardiologists and cardiac surgeons.
                        </p>
                        <p>
                            The curriculum covers performing cardiovascular anatomy and physiology, pharmacology, ECG, echocardiography, cardiac catheterization procedures, pacemaker technology, and intensive cardiac monitoring.
                        </p>
                        <p>
                            As cardiovascular diseases remain a leading cause of mortality worldwide, the demand for skilled cardiac technologists continues to grow. Our program ensures graduates are well-equipped with the latest diagnostic techniques.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {[
                            { title: "Advanced Diagnostics", icon: <Activity />, desc: "Training in ECG, Echo & Cath Lab" },
                            { title: "Clinical Excellence", icon: <Stethoscope />, desc: "2000+ hours of clinical training" },
                            { title: "Expert Guidance", icon: <HeartPulse />, desc: "Learn from Cardiologists" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-100">
                                <div className="p-3 bg-[#0b6d41]/10 rounded-lg text-[#0b6d41] shrink-0">
                                    {React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-5 h-5" })}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0b6d41]">{item.title}</h4>
                                    <p className="text-sm text-gray-900">{item.desc}</p>
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
                                { label: "Intake", value: "7 Seats" },
                                { label: "Mode", value: "Full-time" },
                                { label: "Eligibility", value: "+2 Pass (Science)" },
                                { label: "Fee", value: "Contact Us" },
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                    <span className="text-gray-900 font-medium">{item.label}</span>
                                    <span className="font-bold text-[#0b6d41]">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-8 py-3 bg-[#0b6d41] text-white font-bold rounded-xl shadow-lg hover:bg-[#095c37] transition-all flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" /> Download Brochure
                        </button>
                    </div>
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
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/5 rounded shadow-sm inline-block">Join our Department</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Eligibility Criteria</h2>
                    <p className="text-gray-900 mt-2">Ensure the academic qualifications required to apply for the B.Sc Cardiac Technology program</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#ffde59]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffde59]" /> Academic Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Passed +2 or equivalent from a recognized board",
                                "Physics, Chemistry, and Biology/Mathematics as core subjects",
                                "Minimum 50% aggregate marks (40% for SC/ST/OBC)",
                                "English as a compulsory subject in +2"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-900">
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
                                "Age: Candidates should have completed 17 years of age as on 31st December 2025.",
                                "Valid entrance exam score (if applicable)",
                                "Medical fitness certificate from registered practitioner",
                                "Conduct certificate from last attended institution"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-900">
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

                subjects: [
                    { name: 'Cardiovascular Anatomy', type: 'Theory' },
                    { name: 'Cardiovascular Physiology', type: 'Theory' },
                    { name: 'Pathology Basics', type: 'Theory' },
                    { name: 'Microbiology', type: 'Theory' },
                    { name: 'Introduction to ECG', type: 'Practical' },
                    { name: 'Physiology Practical', type: 'Practical' }
                ]
            }
        ],
        'Year 2': [
            {
                sem: 'Semester 3',

                subjects: [
                    { name: 'Pharmacology', type: 'Theory' },
                    { name: 'Electrocardiography - I', type: 'Theory' },
                    { name: 'Medical Electronics', type: 'Theory' },
                    { name: 'Clinical Cardiology - I', type: 'Theory' },
                    { name: 'ECG Recording', type: 'Practical' },
                    { name: 'Basic Life Support', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 4',

                subjects: [
                    { name: 'Electrocardiography - II', type: 'Theory' },
                    { name: 'Echocardiography Basics', type: 'Theory' },
                    { name: 'Clinical Cardiology - II', type: 'Theory' },
                    { name: 'Cardiac Imaging', type: 'Theory' },
                    { name: 'Echocardiography Lab', type: 'Practical' },
                    { name: 'Holter Monitoring', type: 'Practical' }
                ]
            }
        ],
        'Year 3': [
            {
                sem: 'Semester 5',

                subjects: [
                    { name: 'Advanced Echocardiography', type: 'Theory' },
                    { name: 'Cardiac Catheterization - I', type: 'Theory' },
                    { name: 'Pacemaker Technology', type: 'Theory' },
                    { name: 'Stress Testing', type: 'Theory' },
                    { name: 'Cath Lab Practical', type: 'Practical' },
                    { name: 'Treadmill Test Lab', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 6',

                subjects: [
                    { name: 'Cardiac Catheterization - II', type: 'Theory' },
                    { name: 'Interventional Cardiology', type: 'Theory' },
                    { name: 'Pediatric Cardiology', type: 'Theory' },
                    { name: 'Research Methodology', type: 'Theory' },
                    { name: 'Angiography Lab', type: 'Practical' },
                    { name: 'Pediatric Echo Lab', type: 'Practical' }
                ]
            }
        ],
        'Year 4': [
            {
                sem: 'Semester 7',

                subjects: [
                    { name: 'Cardiac Rehabilitation', type: 'Theory' },
                    { name: 'Electrophysiology Studies', type: 'Theory' },
                    { name: 'Advanced Cardiac Life Support', type: 'Theory' },
                    { name: 'Healthcare Management', type: 'Theory' },
                    { name: 'EP Lab Practical', type: 'Practical' },
                    { name: 'Clinical Internship - I', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 8',

                subjects: [
                    { name: 'Professional Ethics', type: 'Theory' },
                    { name: 'Quality Management', type: 'Theory' },
                    { name: 'Clinical Internship - II', type: 'Practical' },
                    { name: 'Project & Dissertation', type: 'Practical' },
                    { name: 'Comprehensive Viva', type: 'Practical' },
                    { name: 'Industry Placement', type: 'Practical' }
                ]
            }
        ]
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2">Academic Path</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Program Structure & Syllabus</h2>
                    <p className="text-gray-900 mt-2">Comprehensive curriculum designed to ensure mastery in cardiac systems</p>
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
                                <span className="text-xs bg-white/20 px-2 py-1 rounded">{sem.credits}</span>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {sem.subjects.map((sub: any, idx: number) => (
                                        <li key={idx} className="flex items-center justify-between gap-3 text-gray-900 p-2 rounded hover:bg-gray-50 transition-colors">
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
            </div>
        </section>
    );
}

// 6. Career Section
function CareerSection() {
    const jobs = [
        { title: "ECG Technician", desc: "Perform electrocardiograms to monitor heart rhythms.", icon: <Activity /> },
        { title: "Echo Technologist", desc: "Use ultrasound imaging of the heart to detect defects.", icon: <HeartPulse /> },
        { title: "Cath Lab Technologist", desc: "Assist in cardiac catheterization and angioplasty procedures.", icon: <Hospital /> },
        { title: "Pacemaker Technician", desc: "Monitor and program artificial pacemakers for patients.", icon: <Settings /> },
        { title: "Cardiac Rehab Specialist", desc: "Design exercise programs for heart patient recovery.", icon: <Dumbbell /> },
        { title: "Research Associate", desc: "Contribute to cardiovascular research and clinical trials.", icon: <Microscope /> },
    ];

    return (
        <section className="bg-[#fbfbee] py-24 text-[#0b6d41]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Career Pathways</span>
                <h2 className="text-3xl md:text-5xl font-black mb-16 text-[#0b6d41]">Career Opportunities</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, i) => (
                        <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl text-left hover:shadow-xl transition-all hover:-translate-y-2 shadow-sm">
                            <div className="w-12 h-12 bg-[#0b6d41] rounded-xl flex items-center justify-center mb-6 text-white">
                                {React.cloneElement(job.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#0b6d41]">{job.title}</h3>
                            <p className="text-gray-900 text-sm leading-relaxed">{job.desc}</p>
                            <button className="text-[#0b6d41] text-xs font-bold uppercase tracking-wider mt-6 hover:text-[#095c37] transition-colors border-b border-[#0b6d41] pb-1 w-fit">Read More</button>
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
        <section className="py-24 bg-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Infrastructure</span>
                <h2 className="text-3xl font-black text-[#0b6d41] mb-12">World-Class Facilities with Tie-up Hospitals</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "ECG Lab", color: "bg-[#0b6d41]", text: "text-white", desc: "RPM Scholarship. Modern monitoring machines for student learning." },
                        { title: "Echo Suite", color: "bg-[#ffde59]", text: "text-[#0b6d41]", desc: "Echo Suits. Latest portable and console echo units with partner hospitals." },
                        { title: "Cath Lab ", color: "bg-[#163a4a]", text: "text-white", desc: "Cath Lab. Simulation based training for procedures with partner hospitals." },
                        { title: "Library", color: "bg-white", text: "text-[#0b6d41] border border-[#0b6d41]/10", desc: "Digital Library. Vast collection of medical references." },
                    ].map((fac, i) => (
                        <div key={i} className={`${fac.color} ${fac.text} rounded-[2rem] p-8 text-left h-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all`}>
                            <h3 className="text-2xl font-black mb-6">{fac.title}</h3>
                            <p className={`text-sm opacity-90 leading-relaxed font-medium ${fac.text === 'text-white' ? 'text-white/90' : 'text-gray-900'}`}>{fac.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 8. Admission Process
function AdmissionProcessSection() {
    return (
        <section className="py-24 bg-[#fbfbee]">
            <div className="max-w-4xl mx-auto px-4 text-center mb-16">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">Easy Steps</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Admission Process</h2>
                <p className="text-gray-900 mt-2">Simple steps to kickstart your journey towards becoming a cardiac technology professional.</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 -z-10"></div>

                {[
                    { step: 1, title: "Online Application", desc: "Complete the online form and upload documents." },
                    { step: 2, title: "Document Verification", desc: "Submitting proofs for verification at office." },
                    { step: 3, title: "Fee Payment", desc: "Pay fees and complete enrollment." },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center w-full md:w-1/3">
                        <div className="w-20 h-20 rounded-full bg-[#0b6d41] text-white flex items-center justify-center text-2xl font-black shadow-xl ring-8 ring-[#fbfbee] mb-6">
                            {item.step}
                        </div>
                        <h4 className="font-bold text-[#0b6d41] text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-900 px-4">{item.desc}</p>
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
        { q: "What is B.Sc Cardiac Technology?", a: "B.Sc Cardiac Technology is an allied health science course that deals with the diagnosis and treatment of heart-related problems using advanced medical equipment." },
        { q: "What is the eligibility criteria?", a: "Students must have passed 10+2 with Physics, Chemistry, and Biology/Maths with a minimum of 50% aggregate marks." },
        { q: "What is the scope of Cardiac Technology?", a: "Scope is vast, including roles in hospitals, cath labs, cardiac rehabilitation centers, and medical device companies." },
        { q: "What are the career opportunities?", a: "Graduates can work as Cardiovascular Technologists, Echo Technicians, Cath Lab Technicians, and Application Specialists." },
        { q: "Can I pursue higher education after this course?", a: "Yes, you can pursue M.Sc in Cardiac Technology or other varied specializations in public health or hospital administration." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">Common Questions</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Frequently Asked Questions</h2>
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
                                        <div className="p-6 pt-0 text-gray-900 text-sm leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 10. CTA Section
function CTASection() {
    return (
        <section className="bg-[#fbfbee] py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[#0b6d41] text-center md:text-left gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Start Your Career in Cardiac Technology?</h2>
                    <p className="font-medium opacity-90 text-gray-900">Join JKKN College and become a skilled cardiac technology professional.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-3 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-colors">Apply Now</button>
                    <button className="px-8 py-3 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41] hover:text-white transition-colors">Contact Admission</button>
                </div>
            </div>
        </section>
    );
}

// Helper icons for career section
const Hospital = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-9" /><path d="M9 21V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v14" /><path d="M4 10a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" /></svg>;
const Settings = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>;
const Dumbbell = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></svg>;
const Microscope = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></svg>;
