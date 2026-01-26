"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function BankPostOffice() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee] font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0b6d41] uppercase tracking-tight">
                            BANK & POST OFFICE
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl space-y-8">
                        {/* Introduction Paragraph */}
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                            Our bank offers a comprehensive range of financial services to fulfill your banking needs. Our courteous and knowledgeable staff can assist you with opening new accounts, making deposits or withdrawals, and providing financial guidance. With various products and services, such as personal loans, mortgages, and credit cards, our bank caters to all your financial requirements.
                        </p>

                        {/* Banking Facilities Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">
                                BANKING FACILITIES:
                            </h2>
                            <ul className="space-y-3 pl-5">
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    Our campus has a fully-functional branch of a popular bank, so you can handle all your banking needs right here on campus.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    The bank offers a range of services, including account opening, cash deposits and withdrawals, fund transfers, and more.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    You can also avail of special offers and discounts exclusively for JKKN students and staff.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    With our banking facility, you can save time and effort, and focus on your studies and work without worrying about your financial transactions.
                                </li>
                            </ul>
                        </div>

                        {/* Postal Services Section */}
                        <div className="space-y-4">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">
                                POSTAL SERVICES:
                            </h2>
                            <ul className="space-y-3 pl-5">
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    We have a dedicated post office on campus, so you can easily send and receive mail and packages without having to leave the campus.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    Our post office offers a range of services, including domestic and international mail, registered post, speed post, parcel delivery, and more.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    You can also avail of additional services such as post office savings schemes, money orders, and postal life insurance.
                                </li>
                                <li className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc">
                                    With our postal services, you can stay connected with your loved ones and business associates, and manage your important documents and packages with ease.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
