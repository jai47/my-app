import React from 'react';
import { HiOutlineShieldCheck, HiOutlineCpuChip } from 'react-icons/hi2';
import { FiCloud, FiZap } from 'react-icons/fi';

const CorePillars = () => {
    const pillars = [
        {
            title: 'Sovereign Cloud',
            description:
                'Geo-fenced AI infra with data sovereignty and regulatory compliance.',
            icon: <HiOutlineShieldCheck className="w-6 h-6 text-cyan-400" />,
        },
        {
            title: 'GPU Efficiency',
            description:
                'Optimize AI/ML workloads with dynamic GPU provisioning.',
            icon: <HiOutlineCpuChip className="w-6 h-6 text-cyan-400" />,
        },
        {
            title: 'Multi-Cloud Freedom',
            description:
                'Break free from vendor lock-in with true hybrid orchestration.',
            icon: <FiCloud className="w-6 h-6 text-cyan-400" />,
        },
        {
            title: 'Edge Readiness',
            description:
                'Deploy workloads closer to users with ultra-low latency.',
            icon: <FiZap className="w-6 h-6 text-cyan-400" />,
        },
    ];

    return (
        <section className="bg-black text-white py-24 px-6 flex flex-col items-center">
            <div className="max-w-7xl mx-auto text-center px-6 mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold">
                    Built on Four Core Pillars
                </h2>
                <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                    What sets Coredge apart in the sovereign cloud landscape
                </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-350">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="group bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:bg-[#111111] hover:border-white/20"
                    >
                        {/* Icon Container */}
                        <div className="bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center mb-12 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                            {pillar.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-semibold mb-5 text-gray-100 tracking-wide">
                            {pillar.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-light text-[17px]">
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CorePillars;
