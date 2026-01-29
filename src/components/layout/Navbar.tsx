"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
    name: string;
    href: string;
    submenu?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
    {
        name: 'ABOUT',
        href: '/#about',
        submenu: [
            { name: 'Our Trust', href: '/our-trust' },
            { name: 'Our Management', href: '/our-management' },
            { name: 'Principal Message', href: '/principal-message' },
            { name: 'Vision & Mission', href: '/vision-mission' }
        ]
    },
    {
        name: 'DEPARTMENTS',
        href: '/departments',
        submenu: [
            { name: 'B.SC - Accident and Emergency Care Technology', href: '/accident-emergency-care' },
            { name: 'B.SC - Cardiac Technology', href: '/cardiac-technology' },
            { name: 'B.SC - Critical Care Technology', href: '/critical-care-technology' },
            { name: 'B.SC - Dialysis Technology', href: '/dialysis-technology' },
            { name: 'B.SC - Medical Record Science', href: '/medical-record-science' },
            { name: 'B.SC - Operation Theatre & Anaesthesia Technology', href: '/operation-theatre-anaesthesia' },
            { name: 'B.SC - Physician Assistant', href: '/physician-assistant' },
            { name: 'B.SC - Radiogrphy & Imaging Technology', href: '/radiology-imaging-technology' },
            { name: 'B.SC - Respiratory Therapy', href: '/respiratory-therapy' }
        ]
    },
    {
        name: 'FACILITIES',
        href: '/facilities',
        submenu: [
            { name: 'Class Room', href: '/classroom' },
            { name: 'Library', href: '/library' },
            { name: 'Lab', href: '/lab' },
            { name: 'Food Court', href: '/food-court' },
            { name: 'Hostel', href: '/hostel' },
            { name: 'Ambulance Service', href: '/ambulance-service' },
            { name: 'Transport', href: '/transport' },
            { name: 'Wi-Fi', href: '/wifi' },
            { name: 'Bank & Post Office', href: '/bank-post-office' }
        ]
    },
    { name: 'NIRF', href: '/pdfs/nirf-report.pdf' },
    {
        name: 'OTHERS',
        href: '/others',
        submenu: [
            { name: 'NAAC', href: '/NAAC' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Academic Calendar', href: '/academic-calendar' }
        ]
    },
    { name: 'CONTACT', href: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm shadow-sm",
                "hidden lg:block"  // Hide on mobile, show on desktop only
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/ahs-logo.svg"
                        alt="JKKN Allied Health Sciences"
                        width={180}
                        height={60}
                        className="h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.submenu && setHoveredDropdown(link.name)}
                            onMouseLeave={() => link.submenu && setHoveredDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 hover:text-primary"
                            >
                                {link.name}
                                {link.submenu && <ChevronDown className="w-5 h-5" />}
                            </Link>

                            {/* Desktop Dropdown */}
                            <AnimatePresence>
                                {link.submenu && hoveredDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg p-2 border border-gray-100 overflow-hidden"
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0b6d41] hover:text-white rounded-md transition-colors"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <Link
                        href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm py-2 px-6 bg-[#0b6d41] text-white rounded-full font-semibold transition-all hover:bg-[#085231] hover:shadow-lg"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
