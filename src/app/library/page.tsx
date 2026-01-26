"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Users, Lightbulb, Globe, Sparkles, Award, Layers, Database } from 'lucide-react';

export default function Library() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fbfbee] font-sans">
            <Navbar />

            <main className="flex-grow pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#0b6d41] font-bold hover:underline transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>

                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-6 border border-gray-100"
                        >
                            <BookOpen className="w-4 h-4 text-[#0b6d41] fill-[#0b6d41]" />
                            <span className="text-xs font-black tracking-widest text-[#0b6d41] uppercase">Academic Excellence</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-7xl font-black text-[#0b6d41] mb-4 uppercase tracking-tight"
                        >
                            Library
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 font-medium text-lg max-w-3xl mx-auto"
                        >
                            A Living Laboratory of Thought - Fusing Foundational Doctrines with Emergent Discourses
                        </motion.p>
                    </div>

                    {/* Main Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl border border-white/60 relative overflow-hidden max-w-6xl mx-auto mb-16"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffde59]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b6d41]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 space-y-8">
                            {/* Introduction */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                    Within the purlieu of Allied Health Science, the library emerges as an academic crucible, fusing foundational doctrines with emergent discourses. Our repository encapsulates not merely textbooks but a dynamic constellation of peer-reviewed papers, digital narratives, and toolkits for a myriad of health science verticals.
                                </p>
                            </div>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                <FeatureCard
                                    icon={<Layers className="w-8 h-8" />}
                                    title="The Architecture of Thought"
                                    description="Our academic landscape is topographically nuanced to host an array of learning environments. From sequestered alcoves for solitary rumination to dynamic hubs for cross-disciplinary dialogues, the spatial heterogeneity nurtures diverse cognitive needs."
                                />

                                <FeatureCard
                                    icon={<Globe className="w-8 h-8" />}
                                    title="Digitization—The Forward March"
                                    description="In heeding our Mission to enable exponential opportunities through bioconvergence, the library offers a salient arsenal of digital resources. Stay abreast of contemporary methodologies and healthcare paradigms through our online diaspora of e-journals, e-books, and multimedia vignettes."
                                />

                                <FeatureCard
                                    icon={<Users className="w-8 h-8" />}
                                    title="Sages Amidst Shelves"
                                    description="Our librarians serve not just as custodians of printed wisdom but as intellectual sommeliers. They curate literature, offer statistical tutelage, and assist in the arcane craft of scholarly citation, thereby ushering you through your academic voyage."
                                />

                                <FeatureCard
                                    icon={<Lightbulb className="w-8 h-8" />}
                                    title="Fora of Knowledge and Praxis"
                                    description="Webinars, workshops, and panel discussions on health science innovation and ethics embellish our pedagogical repertoire. These are cerebral conclaves that cultivate a culture of continuous learning and ethical ponderance, synchronous with our Values of Commitment to Excellence and Integrity."
                                />

                                <FeatureCard
                                    icon={<Sparkles className="w-8 h-8" />}
                                    title="A Commune of Inquisitive Minds"
                                    description="In alignment with our commitment to Teamwork, the library instigates community. Peer-to-peer learning modules, group debates, and case-study forums animate the space, transcending it from a repository to a living laboratory of thought."
                                />

                                <FeatureCard
                                    icon={<Database className="w-8 h-8" />}
                                    title="Reflection and The Tapestry of Health Science"
                                    description="Pause and introspect in designated serenity zones, or undertake a temporal journey through the archives that document the historical underpinnings of health sciences. Herein lies a salutation to the rich tapestry that composes the field."
                                />
                            </div>

                            {/* Membership Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12 pt-8 border-t border-gray-200"
                            >
                                <div className="bg-gradient-to-br from-[#0b6d41]/5 to-[#ffde59]/10 rounded-3xl p-8 md:p-10">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 bg-white p-4 rounded-2xl shadow-md">
                                            <Award className="w-10 h-10 text-[#0b6d41]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black text-[#0b6d41] mb-4">Membership as Covenant</h3>
                                            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
                                                To indulge in an unbridled quest for health science acumen, consider library membership. This bond unfurls an array of exclusive provisions: special access rights, preferential borrowing conditions, and front-row seats in our scholastic activities.
                                            </p>
                                            <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium">
                                                So, at the Allied Health Science Library, the invitation is not just to read but to immerse, to question, and to synthesize. Come, be part of a dynamic knowledge ecology that celebrates the endless curiosity and pioneering spirit that define the realm of Allied Health Sciences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <StatsCard
                            icon={<BookOpen className="w-8 h-8 text-[#0b6d41]" />}
                            value="10,000+"
                            label="Books & Journals"
                        />
                        <StatsCard
                            icon={<Globe className="w-8 h-8 text-[#0b6d41]" />}
                            value="Digital"
                            label="E-Resources"
                        />
                        <StatsCard
                            icon={<Users className="w-8 h-8 text-[#0b6d41]" />}
                            value="Expert"
                            label="Librarians"
                        />
                        <StatsCard
                            icon={<Sparkles className="w-8 h-8 text-[#0b6d41]" />}
                            value="Modern"
                            label="Infrastructure"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all hover:shadow-xl group"
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#0b6d41]/10 p-3 rounded-xl group-hover:bg-[#0b6d41] transition-colors">
                    <div className="text-[#0b6d41] group-hover:text-white transition-colors">
                        {icon}
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-black text-[#0b6d41] mb-3 leading-tight">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

function StatsCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center transition-all hover:shadow-xl"
        >
            <div className="bg-[#f0fdf4] p-4 rounded-2xl mb-6">
                {icon}
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2 text-center">{value}</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">{label}</div>
        </motion.div>
    );
}
