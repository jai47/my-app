import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const resources = [
    {
        title: 'Complete Platform Docs',
        desc: 'In-depth guides, API references, and quickstart tutorials for all Coredge products.',
        img: '/assets/dealing.png',
        linkText: 'Browse Docs',
        href: '#',
    },
    {
        title: 'Sovereign AI in Practice',
        desc: 'Learn how enterprises are deploying compliant AI infra without sacrificing performance.',
        img: '/assets/south-asian-healthcare.png',
        linkText: 'Browse PDF',
        href: '#',
    },
    {
        title: 'Edge-to-Cloud Orchestration',
        desc: 'Watch our architects demonstrate hybrid deployments.',
        img: '/assets/low-angle-view-capital-against-sky.png',
        linkText: 'Watch Now',
        href: '#',
    },
    {
        title: 'Healthcare AI Compliance',
        desc: 'See how leading healthcare providers deploy HIPAA-compliant AI at the edge.',
        img: '/assets/server-room-laptop-technician.png',
        linkText: 'View Video',
        href: '#',
    },
];

const LearningCenter = () => {
    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        Learning Center
                    </h2>
                    <p className="text-gray-400 text-lg font-light">
                        Resources to help you get started and scale
                    </p>
                </div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((res, index) => (
                        <div
                            key={index}
                            className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-all group"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={res.img}
                                    alt={res.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold mb-3 text-gray-100">
                                    {res.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                                    {res.desc}
                                </p>

                                {/* Text Link with Underline Effect */}
                                <Link
                                    href={res.href}
                                    className="text-sm font-medium text-white border-b border-white/20 pb-1 w-fit hover:border-white transition-colors flex items-center gap-2 group/link"
                                >
                                    {res.linkText}
                                    <HiOutlineArrowRight className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningCenter;
