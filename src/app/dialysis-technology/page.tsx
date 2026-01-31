"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    Clock, Users, Building2, Activity, ArrowRight, CheckCircle2,
    Download, Calendar, Laptop, Sparkles, Droplet,
    Stethoscope, FileText, ChevronDown, Plus, Minus, FlaskConical,
    Shield, Heart, Monitor, Filter
} from 'lucide-react';

export default function DialysisTechnology() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee]">
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
                        B.Sc <span className="text-[#0b6d41]">Dialysis Technology</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Embark on a rewarding journey into renal healthcare. Our comprehensive 3 Years + 1 Year Internship program prepares Learners to become skilled dialysis technologists, mastering hemodialysis procedures, peritoneal dialysis techniques, water treatment systems, and advanced kidney patient care management.
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
                            src="/dialysis-technology-hero.png"
                            alt="Dialysis Technology Lab"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#064225] to-transparent opacity-40"></div>
                        <span className="absolute bottom-6 left-6 font-bold text-xl letter-spacing-wide text-white z-10">Dialysis Technology Lab</span>
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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
                <div className="lg:w-2/3">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded">Program Overview</span>
                    <h2 className="text-3xl font-black text-[#0b6d41] mb-6">What is B.Sc Dialysis Technology?</h2>
                    <div className="text-gray-600 leading-relaxed text-lg space-y-6 text-justify">
                        <p>
                            B.Sc Dialysis Technology is a specialized undergraduate program designed to train healthcare professionals in the management of patients with kidney diseases requiring dialysis therapy. This program combines theoretical knowledge with extensive practical training, preparing Learners to work alongside nephrologists and renal care teams in providing life-sustaining treatments.
                        </p>
                        <p>
                            The curriculum covers renal anatomy and physiology, principles of hemodialysis and peritoneal dialysis, dialysis machine operations, water treatment systems, vascular access management, patient assessment, infection control, and emergency management in dialysis settings.
                        </p>
                        <p>
                            With chronic kidney disease affecting over 10% of the global population and the growing need for dialysis services in India, skilled dialysis technologists are in high demand. Our program ensures graduates are well-equipped with the latest dialysis techniques and patient care protocols.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        {[
                            { title: "Clinical Excellence", icon: <Shield />, desc: "2000+ hours hands-on training" },
                            { title: "Expert Guidance", icon: <Stethoscope />, desc: "Learn from nephrologists" },
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
                                { label: "Intake", value: "5Seats" },
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
                    <p className="text-gray-500 mt-2">Review the academic qualifications needed to apply for the B.Sc Dialysis Technology program</p>
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
                                "Age:  Candidates should have completed 17 years of age as on 31st December 2025.",
                                "Valid entrance exam score (if applicable)",
                                "Medical fitness certificate from registered practitioner",
                                "Conduct certificate from last attended institution"
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

    const getSubjectType = (hasTheory: boolean, hasPractical: boolean) => {
        if (hasTheory && hasPractical) return 'THEORY + PRACTICAL';
        if (hasTheory) return 'THEORY';
        if (hasPractical) return 'PRACTICAL';
        return 'THEORY';
    };

    const syllabus = {
        'Year 1': {
            sem: 'Semester',
            subjects: [
                { name: 'Anatomy Physiology, Biochemistry', hasTheory: true, hasPractical: true },
                { name: 'Nutrition and Principles of Nursing', hasTheory: true, hasPractical: true }
            ]
        },
        'Year 2': {
            sem: 'Semester',
            subjects: [
                { name: 'Microbiology, Pathology I&II & Pharmacology', hasTheory: true, hasPractical: false },
                { name: 'Community Medicine & Basic Medical Electronics', hasTheory: true, hasPractical: false }
            ]
        },
        'Year 3': {
            sem: 'Semester',
            subjects: [
                { name: 'Dialysis Technology', hasTheory: true, hasPractical: true },
                { name: 'Renal Disease Therapeutics', hasTheory: true, hasPractical: true }
            ]
        }
    };

    return (
        <section id="academic-curriculum" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2">Academic Curriculum</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Program Structure & Syllabus</h2>
                    <p className="text-gray-500 mt-2">Comprehensive curriculum with strong foundation in renal sciences and extensive practical training</p>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-12 bg-white p-2 rounded-full shadow-md w-fit mx-auto">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${activeYear === year ? 'bg-[#0b6d41] text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
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
                    className="flex justify-center"
                >
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-3xl w-full">
                        <div className="bg-[#0b6d41] text-white px-6 py-4">
                            <h4 className="font-bold text-lg">{(syllabus as any)[activeYear].sem}</h4>
                        </div>
                        <div className="p-8 bg-[#fbfbee]">
                            <ul className="space-y-4">
                                {(syllabus as any)[activeYear].subjects.map((sub: any, idx: number) => {
                                    const type = getSubjectType(sub.hasTheory, sub.hasPractical);
                                    return (
                                        <li key={idx} className="flex items-center justify-between gap-4 text-gray-800 py-2">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div className={`w-2 h-2 rounded-full shrink-0 ${type === 'THEORY + PRACTICAL' ? 'bg-purple-600' : 'bg-orange-500'}`}></div>
                                                <span className="font-medium text-[15px]">{sub.name}</span>
                                            </div>
                                            <span className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-md whitespace-nowrap tracking-wide ${
                                                type === 'THEORY + PRACTICAL' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                                {type}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// 6. Career Section
function CareerSection() {
    const jobs = [
        { title: "Dialysis Technician", desc: "Operate dialysis machines and provide direct patient care during hemodialysis treatments.", salary: "₹2.5 - 5 LPA", icon: <Droplet /> },
        { title: "Hemodialysis Specialist", desc: "Specialize in advanced hemodialysis procedures and patient management.", salary: "₹4 - 8 LPA", icon: <Monitor /> },
        { title: "Peritoneal Dialysis Tech", desc: "Train patients and manage peritoneal dialysis programs at home and clinics.", salary: "₹3.5 - 7 LPA", icon: <Heart /> },
        { title: "Renal Care Coordinator", desc: "Coordinate patient care across nephrology departments and dialysis units.", salary: "₹5 - 10 LPA", icon: <Shield /> },
        { title: "Dialysis Unit Supervisor", desc: "Manage dialysis unit operations, staff, and quality assurance programs.", salary: "₹8 - 15 LPA", icon: <Users /> },
        { title: "Clinical Research Associate", desc: "Participate in nephrology research and clinical trials for new treatments.", salary: "₹5 - 12 LPA", icon: <FlaskConical /> },
    ];

    return (
        <section className="bg-[#fbfbee] py-24 text-[#0b6d41]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Future Pathways</span>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#0b6d41]">Career Opportunities</h2>
                <p className="text-gray-500 mb-16 max-w-3xl mx-auto">B.Sc Dialysis Technology graduates enjoy diverse career paths in the growing renal healthcare sector</p>

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
        <section className="py-24 bg-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-[#0b6d41]/10 rounded inline-block">Infrastructure</span>
                <h2 className="text-3xl font-black text-[#0b6d41] mb-4">World-Class Facilities with Tie-up Hospitals</h2>
                <p className="text-gray-500 mb-12 max-w-3xl mx-auto">State-of-the-art infrastructure for hands-on experience with industry-standard dialysis equipment</p>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Hemodialysis Unit ", color: "bg-[#0b6d41]", text: "text-white", desc: "Multi-station hemodialysis machines and monitors." },
                        { title: "PD Training Lab ", color: "bg-[#ffde59]", text: "text-[#0b6d41]", desc: "CAPD and APD equipment for peritoneal dialysis." },
                        { title: "Water Treatment Plant ", color: "bg-[#163a4a]", text: "text-white", desc: "RO system and water quality testing facility." },
                        { title: "Simulation Lab", color: "bg-white", text: "text-[#0b6d41] border border-[#0b6d41]/10", desc: "Advanced simulators for procedure practice." },
                    ].map((fac, i) => (
                        <div key={i} className={`${fac.color} ${fac.text} rounded-[2rem] p-8 text-left h-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all`}>
                            <h3 className="text-2xl font-black mb-6">{fac.title}</h3>
                            <p className={`text-sm opacity-90 leading-relaxed font-medium`}>{fac.desc}</p>
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
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">How to Apply</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Admission Process</h2>
                <p className="text-gray-500 mt-2">Simple steps to begin your journey towards becoming a dialysis technology professional</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 -z-10"></div>

                {[
                    { step: 1, title: "Online Application", desc: "Complete the online form and upload documents." },
                    { step: 2, title: "Document Verification", desc: "Submit originals for verification at office." },
                    { step: 3, title: "Fee Payment", desc: "Pay fees and complete enrollment." },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center w-full md:w-1/3">
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
            q: "What is B.Sc Dialysis Technology?",
            a: "B.Sc Dialysis Technology is a 3 years + 1 year internship program that trains professionals in renal replacement therapy. It covers hemodialysis, peritoneal dialysis, water treatment systems, vascular access management, patient care, and dialysis unit operations. Graduates become qualified to operate dialysis equipment and provide critical care to patients with kidney failure."
        },
        {
            q: "What is the eligibility criteria?",
            a: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 50% aggregate marks (45% for reserved categories). Minimum age is 17 years as on December 31st of the admission year. A medical fitness certificate is also required."
        },
        {
            q: "What is the salary of a Dialysis Technologist?",
            a: "Entry-level dialysis technologists earn ₹2.5-4 lakhs per annum. With 3-5 years experience, salaries range from ₹5-10 lakhs. Senior positions like Dialysis Unit Supervisors or Coordinators in corporate hospitals offer ₹12-20 lakhs per annum. International opportunities offer even higher remuneration."
        },
        {
            q: "What are the career opportunities?",
            a: "Graduates can work as Dialysis Technicians, Hemodialysis Specialists, Peritoneal Dialysis Technicians, Renal Care Coordinators, Dialysis Unit Supervisors, and Research Associates in hospitals, standalone dialysis centers, nephrology departments, and research institutions. There are also opportunities in medical equipment companies and healthcare consulting."
        },
        {
            q: "Can I pursue higher education after this course?",
            a: "Yes, graduates can pursue M.Sc in Dialysis Technology, M.Sc in Renal Sciences, M.Sc in Medical Technology, MBA in Healthcare Management, or specialized certifications in advanced dialysis techniques like CRRT (Continuous Renal Replacement Therapy) for enhanced career opportunities."
        },
        {
            q: "What practical training is included?",
            a: "The program includes 2000+ hours of clinical training in hemodialysis units, peritoneal dialysis centers, and nephrology departments with hands-on experience in machine operations, vascular access cannulation, patient monitoring, water treatment system management, and emergency response procedures."
        },
        {
            q: "Is there a demand for Dialysis Technologists in India?",
            a: "Yes, the demand is rapidly growing. India has over 2 lakh patients requiring regular dialysis, with the number increasing by 10-15% annually due to rising diabetes and hypertension cases. The government's initiatives to establish dialysis centers in every district further increase employment opportunities. Globally, the dialysis market is expected to reach $135 billion by 2028."
        },
        {
            q: "What is the difference between Hemodialysis and Peritoneal Dialysis?",
            a: "Hemodialysis uses an external machine to filter blood through a dialyzer, typically performed at a dialysis center 3 times weekly for 4 hours. Peritoneal Dialysis uses the patient's peritoneal membrane as a natural filter, with dialysate fluid introduced into the abdomen. It can be done at home daily. Our program covers both modalities comprehensively."
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">Common Questions</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Frequently Asked Questions</h2>
                    <p className="text-gray-500 mt-2">Find answers to common questions about B.Sc Dialysis Technology program</p>
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
                    <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Start Your Career in Dialysis Technology?</h2>
                    <p className="font-medium opacity-90 text-[#0b6d41]">Join JKKN College and become a skilled dialysis technology professional.</p>
                </div>
                <div className="flex flex-nowrap gap-3 items-center justify-center shrink-0">
                    <a
                        href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 md:px-8 py-3 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm md:text-base"
                    >
                        Apply Now
                    </a>
                    <a
                        href="tel:91 9345855001"
                        className="px-6 md:px-8 py-3 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41] hover:text-white transition-colors whitespace-nowrap text-sm md:text-base"
                    >
                        Contact Admissions
                    </a>
                </div>
            </div>
        </section>
    );
}
