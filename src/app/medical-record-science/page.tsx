"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, Users, Building2, Activity, ArrowRight, CheckCircle2,
    Download, Calendar, Laptop, Sparkles, FileText,
    Stethoscope, ChevronDown, Plus, Minus, Database,
    Shield, BarChart3, ClipboardList, Code2, FolderOpen
} from 'lucide-react';

export default function MedicalRecordScience() {
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
                        B.Sc <span className="text-[#ffde59]">Medical Record Science</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Embark on a rewarding career in health information management. Our comprehensive 3 years + 1 year internship program prepares Learners to become skilled professionals in medical coding, health records administration, ICD classification, healthcare data analytics, and hospital information systems management.
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
                        <FolderOpen className="w-24 h-24 text-white/80 group-hover:scale-110 transition-transform duration-700" />
                        <span className="absolute bottom-6 left-6 font-bold text-xl letter-spacing-wide text-white">Medical Record Science</span>
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
                <h2 className="text-3xl font-black text-[#0b6d41] mb-6">What is B.Sc Medical Record Science?</h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-6 text-justify">
                    <p>
                        B.Sc Medical Record Science is a specialized undergraduate program designed to train healthcare professionals in health information management (HIM). This program equips Learners with expertise in managing patient health records, medical coding, disease classification systems, healthcare data analytics, and hospital information systems.
                    </p>
                    <p>
                        The curriculum covers medical terminology, anatomy and physiology, ICD-10 coding systems, CPT coding, health records management, healthcare statistics, legal aspects of medical records, quality assurance, and healthcare informatics. Learners gain proficiency in electronic health records (EHR) systems used across the healthcare industry.
                    </p>
                    <p>
                        With healthcare organizations worldwide digitizing patient records and requiring accurate data for reimbursement, research, and quality improvement, the demand for qualified medical record professionals continues to grow exponentially. This program opens doors to diverse career opportunities in hospitals, insurance companies, pharmaceutical firms, and healthcare IT organizations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {[
                        { title: "Medical Coding Mastery", icon: <Code2 />, desc: "ICD-10 & CPT coding expertise" },
                        { title: "Health Records Management", icon: <FolderOpen />, desc: "2000+ hours practical training" },
                        { title: "Healthcare Analytics", icon: <BarChart3 />, desc: "Data-driven decision making" },
                        { title: "Industry Recognized", icon: <Shield />, desc: "Certification eligible programs" },
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
                    <p className="text-gray-500 mt-2">Review the academic qualifications needed to apply for the B.Sc Medical Record Science program</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-l-[6px] border-[#ffde59]">
                        <h3 className="text-xl font-bold text-[#0b6d41] mb-6 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffde59]" /> Academic Requirements
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Passed 10+2 or equivalent from a recognized board",
                                "Physics, Chemistry, and Biology/Mathematics as core subjects",
                                "Minimum 50% aggregate marks (45% for SC/ST/OBC)",
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
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

    const syllabus = {
        'Year 1': [
            {
                sem: 'Semester 1',
                credits: '22 Credits',
                subjects: [
                    { name: 'Human Anatomy', type: 'Theory' },
                    { name: 'Human Physiology', type: 'Theory' },
                    { name: 'Medical Terminology', type: 'Theory' },
                    { name: 'English Communication', type: 'Theory' },
                    { name: 'Computer Applications', type: 'Practical' },
                    { name: 'Anatomy Practical', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 2',
                credits: '24 Credits',
                subjects: [
                    { name: 'Pathology', type: 'Theory' },
                    { name: 'Microbiology', type: 'Theory' },
                    { name: 'Medical Record Systems - I', type: 'Theory' },
                    { name: 'Healthcare Systems', type: 'Theory' },
                    { name: 'Medical Terminology Lab', type: 'Practical' },
                    { name: 'Physiology Practical', type: 'Practical' }
                ]
            }
        ],
        'Year 2': [
            {
                sem: 'Semester 3',
                credits: '24 Credits',
                subjects: [
                    { name: 'Pharmacology', type: 'Theory' },
                    { name: 'ICD-10 Coding - I', type: 'Theory' },
                    { name: 'Health Records Management - I', type: 'Theory' },
                    { name: 'Healthcare Statistics', type: 'Theory' },
                    { name: 'Medical Coding Lab', type: 'Practical' },
                    { name: 'Database Management', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 4',
                credits: '26 Credits',
                subjects: [
                    { name: 'ICD-10 Coding - II', type: 'Theory' },
                    { name: 'CPT Coding', type: 'Theory' },
                    { name: 'Health Records Management - II', type: 'Theory' },
                    { name: 'Medical Record Science Ethics', type: 'Theory' },
                    { name: 'Advanced Coding Lab', type: 'Practical' },
                    { name: 'EHR Systems Training', type: 'Practical' }
                ]
            }
        ],
        'Year 3': [
            {
                sem: 'Semester 5',
                credits: '26 Credits',
                subjects: [
                    { name: 'Healthcare Quality Management', type: 'Theory' },
                    { name: 'Health Insurance & Reimbursement', type: 'Theory' },
                    { name: 'Medical Transcription', type: 'Theory' },
                    { name: 'Healthcare Data Analytics', type: 'Theory' },
                    { name: 'Clinical Practicum - I', type: 'Practical' },
                    { name: 'Quality Assurance Lab', type: 'Practical' }
                ]
            },
            {
                sem: 'Semester 6',
                credits: '28 Credits',
                subjects: [
                    { name: 'Healthcare Informatics', type: 'Theory' },
                    { name: 'Legal Aspects of Health Records', type: 'Theory' },
                    { name: 'Disease Classification Systems', type: 'Theory' },
                    { name: 'Research Methodology', type: 'Theory' },
                    { name: 'Clinical Practicum - II', type: 'Practical' },
                    { name: 'Medical Audit Training', type: 'Practical' }
                ]
            }
        ],
        'Year 4': [
            {
                sem: 'Semester 7',
                credits: '28 Credits',
                subjects: [
                    { name: 'Hospital Administration', type: 'Theory' },
                    { name: 'Healthcare IT Systems', type: 'Theory' },
                    { name: 'Medical Records Department Mgmt', type: 'Theory' },
                    { name: 'Accreditation Standards', type: 'Theory' },
                    { name: 'Clinical Internship - I', type: 'Practical' },
                    { name: 'HIM Software Training', type: 'Practical' }
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
                    { name: 'Industry Placement', type: 'Practical' }
                ]
            }
        ]
    };

    return (
        <section className="py-24 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2">Academic Curriculum</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Program Structure & Syllabus</h2>
                <p className="text-gray-500 mt-2">Comprehensive curriculum with strong foundation in health information management and extensive practical training</p>
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
        { title: "Medical Records Technician", desc: "Manage and maintain patient health records, ensuring accuracy and confidentiality.", salary: "₹2.5 - 5 LPA", icon: <FolderOpen /> },
        { title: "Medical Coder", desc: "Assign ICD, CPT codes for diagnosis and procedures for billing and reimbursement.", salary: "₹3 - 8 LPA", icon: <Code2 /> },
        { title: "Health Information Manager", desc: "Oversee health information departments, ensure regulatory compliance and data security.", salary: "₹5 - 12 LPA", icon: <Database /> },
        { title: "Clinical Data Analyst", desc: "Analyze healthcare data to improve patient outcomes and operational efficiency.", salary: "₹4 - 10 LPA", icon: <BarChart3 /> },
        { title: "Medical Transcriptionist", desc: "Convert voice recordings of healthcare providers into written medical reports.", salary: "₹3 - 6 LPA", icon: <FileText /> },
        { title: "Healthcare IT Specialist", desc: "Implement and manage electronic health record systems in healthcare facilities.", salary: "₹4 - 12 LPA", icon: <Laptop /> },
    ];

    return (
        <section className="bg-[#fbfbee] py-24 text-[#0b6d41]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 block p-1 bg-[#0b6d41]/10 w-fit rounded inline-block">Future Pathways</span>
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#0b6d41]">Career Opportunities</h2>
                <p className="text-gray-500 mb-16 max-w-3xl mx-auto">B.Sc Medical Record Science graduates enjoy diverse career paths in health information management across various healthcare settings</p>

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
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto">State-of-the-art infrastructure for hands-on experience with industry-standard health information management systems</p>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { title: "Computer Lab", color: "bg-[#0b6d41]", text: "text-white", desc: "Latest systems with HIM software and EHR platforms." },
                    { title: "Coding Lab (Tieup Hospitals)", color: "bg-[#ffde59]", text: "text-[#0b6d41]", desc: "ICD-10, CPT coding practice stations." },
                    { title: "MRD Simulation (Tieup Hospitals)", color: "bg-[#163a4a]", text: "text-white", desc: "Medical Records Department simulation setup." },
                    { title: "Digital Library", color: "bg-white", text: "text-[#0b6d41] border border-[#0b6d41]/10", desc: "Healthcare journals and coding resources." },
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
                <p className="text-gray-500 mt-2">Simple steps to begin your journey towards becoming a health information management professional</p>
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
            q: "What is B.Sc Medical Record Science?",
            a: "B.Sc Medical Record Science is a 3 years + 1 year internship program that trains professionals in health information management, medical coding, ICD classification, health records administration, healthcare data analytics, and hospital information systems. Graduates manage patient health records and ensure data accuracy for quality healthcare delivery."
        },
        {
            q: "What is the eligibility criteria?",
            a: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 50% aggregate marks (45% for reserved categories). Minimum age is 17 years as on December 31st of the admission year."
        },
        {
            q: "What is the salary of a Medical Record Science professional?",
            a: "Entry-level medical record technicians earn ₹2.5-4 lakhs per annum. With experience, salaries range from ₹5-10 lakhs. Senior Health Information Managers and Certified Coders in corporate hospitals, insurance companies, and international organizations earn ₹12-20 lakhs per annum."
        },
        {
            q: "What are the career opportunities?",
            a: "Graduates can work as Medical Record Technician, Health Information Manager, Medical Coder, Clinical Data Analyst, Medical Transcriptionist, Quality Assurance Officer, Medical Auditor, and Healthcare IT Specialist in hospitals, diagnostic centers, insurance companies, pharmaceutical firms, and healthcare IT organizations."
        },
        {
            q: "Is medical coding covered in this course?",
            a: "Yes, comprehensive medical coding training is a core component of the program. Students learn ICD-10 coding for diagnoses, CPT coding for procedures, and other classification systems like ICD-O for oncology. The curriculum includes extensive hands-on practice with real medical records and coding scenarios."
        },
        {
            q: "Can I work abroad after this course?",
            a: "Yes, medical record science professionals are in high demand globally. Countries like USA, UK, Canada, Australia, and Gulf nations hire trained medical coders and health information managers. Additional certifications like RHIT (Registered Health Information Technician) or CPC (Certified Professional Coder) increase international job opportunities."
        },
        {
            q: "Can I pursue higher education after this course?",
            a: "Yes, graduates can pursue M.Sc in Medical Record Science, M.Sc in Health Informatics, MBA in Healthcare Management, or professional certifications like RHIA (Registered Health Information Administrator), CCS (Certified Coding Specialist), or CCA (Certified Coding Associate) for advanced career opportunities."
        },
        {
            q: "What practical training is included?",
            a: "The program includes 2000+ hours of practical training in medical record departments, coding laboratories, health information management systems, and hospital internships. Students gain hands-on experience with electronic health records (EHR), medical coding software, health information systems, and real-world medical record management."
        },
    ];

    return (
        <section className="py-20 max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#0b6d41] font-bold tracking-widest uppercase text-xs mb-2 p-1 bg-white rounded inline-block">Common Questions</span>
                <h2 className="text-3xl font-black text-[#0b6d41]">Frequently Asked Questions</h2>
                <p className="text-gray-500 mt-2">Find answers to common questions about B.Sc Medical Record Science program</p>
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
                    <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Start Your Career in Medical Record Science?</h2>
                    <p className="font-medium opacity-90 text-[#0b6d41]">Join JKKN College and become a skilled health information management professional.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-3 bg-[#0b6d41] text-white rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-colors">Apply Now</button>
                    <button className="px-8 py-3 border-2 border-[#0b6d41] text-[#0b6d41] rounded-full font-bold hover:bg-[#0b6d41] hover:text-white transition-colors">Contact Admissions</button>
                </div>
            </div>
        </section>
    );
}
