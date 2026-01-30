"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, Users, Building2, Activity, ArrowRight, CheckCircle2,
    Download, Calendar, Laptop, Sparkles, Wind,
    Stethoscope, FileText, ChevronDown, Plus, Minus
} from 'lucide-react';

export default function RespiratoryTherapy() {
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
                        B.Sc <span className="text-[#0b6d41]">Respiratory Therapy</span>
                    </h1>
                    <p className="text-gray-900 text-lg mb-8 leading-relaxed">
                        Embark on a transformative journey into respiratory healthcare. Our comprehensive 3 Years + 1 Year Internship program prepares learners to become skilled respiratory therapists, mastering pulmonary diagnostics, mechanical ventilation, critical care respiratory management, and cardiopulmonary rehabilitation.
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
                            src="/images/departments/respiratory-therapy-hero.png"
                            alt="Respiratory Therapy Department"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#064225] to-transparent opacity-60"></div>
                        <span className="absolute bottom-6 left-6 font-bold text-xl letter-spacing-wide text-white">Respiratory Care Lab</span>
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
                    <h2 className="text-3xl font-black text-[#0b6d41] mb-6">What is B.Sc Respiratory Therapy?</h2>
                    <div className="text-gray-900 leading-relaxed text-lg space-y-6 text-justify">
                        <p>
                            B.Sc Respiratory Therapy is a specialized undergraduate program designed to train healthcare professionals in the assessment, treatment, and management of patients with respiratory and cardiopulmonary disorders. This program combines theoretical knowledge with extensive practical training, preparing learners to work alongside pulmonologists, intensivists, and critical care physicians in various healthcare settings.
                        </p>
                        <p>
                            The curriculum covers essential areas including respiratory anatomy and physiology, pulmonary function testing, mechanical ventilation, airway management, arterial blood gas analysis, oxygen therapy, nebulization techniques, and cardiopulmonary rehabilitation. Learners gain hands-on experience through clinical rotations in leading hospitals, ICUs, and respiratory care units.
                        </p>
                        <p>
                            With the increasing prevalence of respiratory diseases such as COPD, asthma, and the growing need for critical care services, the demand for skilled respiratory therapists continues to rise globally. Our program ensures graduates are well-equipped with the latest therapeutic techniques and technologies used in modern respiratory care facilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        {[
                            { title: "Advanced Ventilation", icon: <Activity />, desc: "Training in ventilators, ABG analysis & ICU protocols" },
                            { title: "Clinical Excellence", icon: <Stethoscope />, desc: "2000+ hours of hands-on clinical training" },
                            { title: "Modern Equipment", icon: <Laptop />, desc: "Latest ventilators & diagnostic equipment" },
                            { title: "Expert Faculty", icon: <Wind />, desc: "Learn from experienced pulmonologists" },
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
                                { label: "Intake", value: "5 Seats" },
                                { label: "Session", value: "2026-2027" },
                                { label: "Approval", value: "UGC Approved" },
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
                    <p className="text-gray-900 mt-2">Ensure the academic qualifications required to apply for the B.Sc Respiratory Therapy program</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#ffde59]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffde59]" /> Academic Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Passed +2 or equivalent examination from a recognized board",
                                "Physics, Chemistry, and Biology/Mathematics as core subjects",
                                "Minimum 50% aggregate marks (40% for SC/ST/OBC categories)",
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
                                "Valid entrance exam score (if applicable to state regulations)",
                                "Medical fitness certificate from registered medical practitioner",
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
    const years = ['Year 1', 'Year 2', 'Year 3'];

    const getSubjectType = (hasTheory: boolean, hasPractical: boolean) => {
        if (hasTheory && hasPractical) return 'THEORY + PRACTICAL';
        if (hasTheory) return 'THEORY';
        if (hasPractical) return 'PRACTICAL';
        return 'THEORY';
    };

    const syllabus = {
        'Year 1': {
            sem: 'Year 1 Subjects',
            subjects: [
                { name: 'Anatomy and Physiology', hasTheory: true, hasPractical: true },
                { name: 'Microbiology and Pathology', hasTheory: true, hasPractical: true },
                { name: 'Biochemistry and Pharmacology', hasTheory: true, hasPractical: true },
                { name: 'Biostatistics and Physics', hasTheory: true, hasPractical: true }
            ]
        },
        'Year 2': {
            sem: 'Year 2 Subjects',
            subjects: [
                { name: 'Respiratory Diseases', hasTheory: true, hasPractical: true },
                { name: 'Cardiovascular Diseases', hasTheory: true, hasPractical: true },
                { name: 'Diagnostic Techniques in Cardio-Respiratory Diseases', hasTheory: true, hasPractical: true },
                { name: 'Equipments in Respiratory Care', hasTheory: true, hasPractical: true }
            ]
        },
        'Year 3': {
            sem: 'Year 3 Subjects',
            subjects: [
                { name: 'Respiratory Therapy Techniques 1', hasTheory: true, hasPractical: true },
                { name: 'Respiratory Therapy Techniques 2', hasTheory: true, hasPractical: true },
                { name: 'Life Support System', hasTheory: true, hasPractical: true },
                { name: 'Cardio Pulmonary Rehabilitation', hasTheory: true, hasPractical: true }
            ]
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2">Academic Path</span>
                    <h2 className="text-3xl font-black text-[#0b6d41]">Program Structure & Syllabus</h2>
                    <p className="text-gray-900 mt-2">Comprehensive curriculum designed to ensure mastery in respiratory care</p>
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
                                            <span className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-md whitespace-nowrap tracking-wide ${type === 'THEORY + PRACTICAL' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
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
        { title: "Respiratory Therapist", desc: "Provide respiratory care to patients with breathing disorders in hospitals, clinics, and home care settings.", salary: "₹3 - 6 LPA", icon: <Activity /> },
        { title: "ICU Ventilator Specialist", desc: "Manage mechanical ventilation for critically ill patients in intensive care units under physician guidance.", salary: "₹5 - 10 LPA", icon: <Wind /> },
        { title: "Pulmonary Function Technologist", desc: "Conduct pulmonary function tests to diagnose and monitor respiratory conditions like asthma and COPD.", salary: "₹3 - 6 LPA", icon: <Stethoscope /> },
        { title: "Sleep Lab Technician", desc: "Perform sleep studies and polysomnography to diagnose sleep disorders including sleep apnea.", salary: "₹4 - 7 LPA", icon: <Clock /> },
        { title: "Neonatal Respiratory Care Specialist", desc: "Provide specialized respiratory care for newborns and premature infants in NICUs.", salary: "₹4 - 8 LPA", icon: <Activity /> },
        { title: "Cardiopulmonary Rehabilitation Specialist", desc: "Design rehabilitation programs for patients recovering from heart and lung conditions.", salary: "₹4 - 8 LPA", icon: <Users /> },
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
                            <p className="text-gray-900 text-sm leading-relaxed mb-4">{job.desc}</p>
                            <span className="inline-block bg-[#0b6d41]/10 text-[#0b6d41] px-3 py-1 rounded-full text-xs font-bold">{job.salary}</span>
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
                        { title: "PFT Lab", color: "bg-[#0b6d41]", text: "text-white", desc: "Equipped with advanced spirometers, plethysmographs, and diffusion testing equipment for comprehensive training." },
                        { title: "Ventilator Lab", color: "bg-[#ffde59]", text: "text-[#0b6d41]", desc: "Modern ICU ventilators, BIPAP, CPAP machines with patient simulators for realistic training." },
                        { title: "Sleep Lab", color: "bg-[#163a4a]", text: "text-white", desc: "Fully equipped polysomnography suite for sleep study training and diagnosis of sleep disorders." },
                        { title: "Library", color: "bg-white", text: "text-[#0b6d41] border border-[#0b6d41]/10", desc: "Access to e-journals, medical databases, and extensive collection of pulmonology resources." },
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
                <p className="text-gray-900 mt-2">Simple steps to kickstart your journey towards becoming a respiratory therapy professional.</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 -z-10"></div>

                {[
                    { step: 1, title: "Online Application", desc: "Complete the online application form on our official website. Upload required documents including 10+2 mark sheets, identification proof, and passport-size photographs." },
                    { step: 2, title: "Document Verification", desc: "Submit original documents for verification at the admissions office. Our team will verify your academic credentials and eligibility criteria." },
                    { step: 3, title: "Fee Payment", desc: "Upon selection, pay the admission fee and complete the enrollment formalities. Receive your admission letter and welcome kit for the upcoming academic session." }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center w-full md:w-1/4">
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
        { q: "What is B.Sc Respiratory Therapy and what does it involve?", a: "B.Sc Respiratory Therapy is a 4-year undergraduate degree program that trains healthcare professionals in respiratory care, pulmonary diagnostics, and cardiopulmonary management. The program covers pulmonary function testing, mechanical ventilation, oxygen therapy, arterial blood gas analysis, airway management, critical care respiratory therapy, and cardiopulmonary rehabilitation. Graduates work as respiratory therapists in hospitals, ICUs, diagnostic centers, and rehabilitation facilities, assisting pulmonologists and critical care physicians in managing patients with breathing disorders." },
        { q: "What is the eligibility criteria for B.Sc Respiratory Therapy?", a: "To be eligible for B.Sc Respiratory Therapy, candidates must have passed 10+2 or equivalent examination with Physics, Chemistry, and Biology/Mathematics as core subjects from a recognized board. A minimum of 50% aggregate marks is required (45% for SC/ST/OBC candidates). Applicants must be at least 17 years of age as on December 31st of the admission year and possess a medical fitness certificate." },
        { q: "What is the salary of a Respiratory Therapist in India?", a: "Entry-level respiratory therapists in India typically earn between ₹3-5 lakhs per annum. With 3-5 years of experience and specialization in areas like critical care or neonatal respiratory care, salaries can range from ₹6-12 lakhs per annum. Senior respiratory therapists in corporate hospitals and those working abroad can earn ₹15-25 lakhs or more per annum. Salaries vary based on location, hospital type, and specialized skills in mechanical ventilation and critical care." },
        { q: "What are the career opportunities after B.Sc Respiratory Therapy?", a: "Graduates can pursue diverse career paths including Respiratory Therapist, ICU Ventilator Specialist, Pulmonary Function Technologist, Sleep Lab Technician, Neonatal Respiratory Care Specialist, Cardiopulmonary Rehabilitation Specialist, Home Care Respiratory Therapist, and Medical Equipment Sales Representative. Employment opportunities exist in multi-specialty hospitals, ICUs, pulmonary function laboratories, sleep centers, neonatal units, rehabilitation centers, home healthcare companies, and medical device organizations." },
        { q: "Can I pursue higher education after B.Sc Respiratory Therapy?", a: "Yes, graduates can pursue M.Sc in Respiratory Therapy, M.Sc in Critical Care Technology, MBA in Healthcare Management, or MPH (Master of Public Health). Research-oriented individuals can pursue Ph.D. in Respiratory Sciences. International certifications such as Registered Respiratory Therapist (RRT) from the National Board for Respiratory Care (USA) can significantly enhance career prospects globally. Many graduates also pursue specialized certifications in mechanical ventilation, sleep medicine, and neonatal respiratory care." },
        { q: "What is the difference between Respiratory Therapy and Pulmonology?", a: "Pulmonology is a medical specialty requiring an MBBS degree followed by MD specialization, enabling physicians to diagnose and treat lung diseases independently. Respiratory Therapy is an allied health program that trains therapists to administer respiratory treatments, manage ventilators, perform pulmonary function tests, and provide respiratory care under medical supervision. While pulmonologists make clinical decisions and prescribe treatments, respiratory therapists execute therapeutic interventions and provide hands-on patient care support." },
        { q: "Is B.Sc Respiratory Therapy a good career choice?", a: "Yes, B.Sc Respiratory Therapy offers excellent career prospects due to the rising prevalence of respiratory diseases like COPD, asthma, and lung infections globally. The COVID-19 pandemic has highlighted the critical importance of respiratory care professionals, leading to increased demand for skilled respiratory therapists. The field offers job stability, competitive salaries, opportunities for specialization in critical care and neonatal care, and the satisfaction of saving lives. With technological advancements in respiratory care, the scope continues to expand across healthcare settings." },
        { q: "What practical training is included in the program?", a: "Our program includes over 1500 hours of clinical training across pulmonary function laboratories, intensive care units, respiratory care units, sleep laboratories, and neonatal intensive care units. Learners gain hands-on experience with spirometry, arterial blood gas analysis, mechanical ventilator operation (invasive and non-invasive), oxygen therapy administration, nebulization techniques, airway management, chest physiotherapy, and polysomnography. Clinical rotations in partnered hospitals ensure exposure to real-world patient care scenarios and emergency respiratory protocols." },
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
                    <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Start Your Career in Respiratory Therapy?</h2>
                    <p className="font-medium opacity-90 text-gray-900">Join JKKN College and become a skilled respiratory therapy professional.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-3 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-colors">Apply Now</button>
                    <button className="px-8 py-3 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41] hover:text-white transition-colors">Contact Admission</button>
                </div>
            </div>
        </section>
    );
}
