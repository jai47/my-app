'use client';

import Image from 'next/image';
import { useRef } from 'react';

const cards = [
    {
        title: 'Sovereign AI',
        desc: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        img: '/assets/dealing.png',
        cta: 'Explore Platform',
    },
    {
        title: 'Cloud Orbiter',
        desc: 'Unified cloud orchestration across hybrid and edge environments.',
        img: '/assets/south-asian-healthcare.png',
        cta: 'Explore Platform',
    },
    {
        title: 'Cirrus Cloud Platform',
        desc: 'Highly scalable sovereign cloud platform for enterprises.',
        img: '/assets/low-angle-view-capital-against-sky.png',
        cta: 'Explore Platform',
    },
    {
        title: 'Kubernetes Platform',
        desc: 'Enterprise-grade Kubernetes with full lifecycle automation.',
        img: '/assets/server-room-laptop-technician.png',
        cta: 'Explore Platform',
    },
    {
        title: 'Cloud Analytics',
        desc: 'Real-time monitoring, metrics, and AI-powered insights.',
        img: '/assets/graph.png',
        cta: 'Explore Platform',
    },
];

export default function Trustedby() {
    const sliderRef = useRef(null);

    const scroll = (dir) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === 'left' ? -380 : 380,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative w-full bg-black py-28 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center px-6">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Trusted by Industry Leaders
                </h2>
                <p className="mt-4 text-gray-400 max-w-3xl mx-auto font-light">
                    See how organizations achieve measurable results with
                    Coredge
                </p>
            </div>

            <div className="w-full">
                <div
                    ref={sliderRef}
                    className="mt-16 flex gap-6 px-10 overflow-x-auto scrollbar-hide scroll-smooth pb-10"
                >
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group relative w-[320px] h-[440px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border border-white/5"
                        >
                            {/* Background Image with Blur Effect */}
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                            />

                            {/* Overlay Gradient that darkens on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500" />

                            {/* Content Wrapper */}
                            <div className="relative h-full w-full p-8 flex flex-col justify-end overflow-hidden">
                                {/* Title - Anchored to bottom, slides up as group is hovered */}
                                <h3 className="text-xl font-bold text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                                    {card.title}
                                </h3>

                                {/* Description Wrapper - Controlled by max-height for a smooth "unrolling" slide */}
                                <div className="max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100">
                                    {card.desc && (
                                        <p className="mt-4 text-[17px] text-gray-200 leading-relaxed font-light">
                                            {card.desc}
                                        </p>
                                    )}

                                    {card.cta && (
                                        <button className="mt-6 inline-block rounded-md bg-[#0095B6] px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500 transition-colors">
                                            {card.cta}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-6 flex justify-center gap-4">
                <button
                    onClick={() => scroll('left')}
                    className="h-10 w-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition active:scale-95"
                >
                    <span className="text-xl">←</span>
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="h-10 w-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition active:scale-95"
                >
                    <span className="text-xl">→</span>
                </button>
            </div>
        </section>
    );
}
