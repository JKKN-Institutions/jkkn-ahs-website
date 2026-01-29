'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function MobileHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm shadow-sm",
                "lg:hidden"  // Show only on mobile
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                {/* Logo - Centered on mobile */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/ahs-logo.svg"
                        alt="JKKN Allied Health Sciences"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>
            </div>
        </header>
    );
}
