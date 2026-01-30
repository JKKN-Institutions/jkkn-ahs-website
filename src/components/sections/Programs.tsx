"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, HeartPulse, Clock, Droplet, ShieldCheck, Wind, Stethoscope, Heart, FileText, Ambulance } from 'lucide-react';

const programs = [
    {
        title: "B.Sc. Cardiac Technology",
        icon: <HeartPulse className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Learn ECG, echocardiography, cardiac catheterization, and pacemaker programming. Critical role in cardiovascular healthcare.",
        careers: "Cardiac Technologist, ECG Technician, Echo Cardiographer, Cath Lab Technician",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/cardiac-technology"
    },
    {
        title: "B.Sc. Radiography & Imaging Technology",
        icon: <Activity className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Master X-ray, CT scan, MRI, ultrasound, and nuclear medicine imaging. High-demand field with excellent career prospects.",
        careers: "Radiographer, CT Technologist, MRI Technologist, Sonographer",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/radiology-imaging-technology"
    },
    {
        title: "B.Sc. Dialysis Technology",
        icon: <Droplet className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Specialize in hemodialysis, peritoneal dialysis, and renal care. Growing demand with India's increasing kidney disease burden.",
        careers: "Dialysis Technician, Renal Care Specialist, Nephrology Assistant",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/dialysis-technology"
    },
    {
        title: "B.Sc. Operation Theatre & Anaesthesia Technology",
        icon: <ShieldCheck className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Learn surgical assistance, sterilization, instrument handling, and perioperative care. Essential role in every surgical team.",
        careers: "OT Technician, Surgical Assistant, Scrub Technologist, CSSD Manager",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/operation-theatre-anaesthesia"
    },
    {
        title: "B.Sc. Respiratory Therapy",
        icon: <Wind className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Master ventilator management, pulmonary care, and critical care support. Increased demand post-pandemic in ICU settings.",
        careers: "Respiratory Therapist, ICU Support, Pulmonary Function Tech, Sleep Lab Tech",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/respiratory-therapy"
    },
    {
        title: "B.Sc. Physician Assistant",
        icon: <Stethoscope className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Train to assist physicians in patient examination, diagnosis, and treatment planning. Bridge the doctor-patient gap in healthcare.",
        careers: "Physician Assistant, Clinical Associate, Medical Assistant, Healthcare Coordinator",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/physician-assistant"
    },
    {
        title: "B.Sc. Critical Care Technology",
        icon: <Heart className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Master ICU equipment, ventilator management, and critical patient monitoring. Essential for intensive care and emergency settings.",
        careers: "Critical Care Technologist, ICU Technician, Intensive Care Specialist, Emergency Care Tech",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/critical-care-technology"
    },
    {
        title: "B.Sc. Medical Record Science",
        icon: <FileText className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Specialize in health information management, medical coding, and healthcare data analytics. Growing field in digital healthcare.",
        careers: "Medical Records Officer, Health Information Manager, Medical Coder, Data Analyst",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/medical-record-science"
    },
    {
        title: "B.Sc. Accident & Emergency Care Technology",
        icon: <Ambulance className="w-8 h-8" />,
        duration: "3 Years + 1 Year Internship",
        description: "Train in emergency response, trauma care, and pre-hospital emergency services. Critical role in saving lives during emergencies.",
        careers: "Emergency Medical Technician, Trauma Care Specialist, Paramedic, Emergency Care Provider",
        popular: false,
        bgColor: "bg-[#0b6d41]",
        link: "/accident-emergency-care"
    }
];

export function Programs() {
    return (
        <section id="programs" className="py-12 sm:py-16 md:py-24 bg-[#fbfbee] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <span className="text-[#0b6d41] font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">OUR PROGRAMS</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b6d41] leading-tight mb-4 sm:mb-6">
                    Allied Health Sciences Programs
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base px-4">
                    Choose from 9 specialized B.Sc. programs designed to launch your healthcare career with practical training and hospital internships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                    {programs.map((program, index) => (
                        <Link key={index} href={program.link} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all relative cursor-pointer h-full flex flex-col ${program.popular ? 'border-2 border-[#0b6d41]' : 'border border-gray-100'
                                    }`}
                            >
                                {program.popular && (
                                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6">
                                        <span className="bg-[#0b6d41] text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full uppercase tracking-wide">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${program.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4`}>
                                    {program.icon}
                                </div>

                                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#0b6d41] mb-2 leading-tight">
                                    {program.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                    <span className="text-xs sm:text-sm text-gray-600 font-medium">{program.duration}</span>
                                </div>

                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-grow">
                                    {program.description}
                                </p>

                                <div className="pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                                    <p className="text-xs font-bold text-[#0b6d41] mb-1 sm:mb-2">Careers:</p>
                                    <p className="text-xs text-gray-600 leading-relaxed">{program.careers}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
