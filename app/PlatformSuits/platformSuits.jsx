'use client';

import Image from 'next/image';
import { useRef } from 'react';

const cards = [
    {
        title: 'Sovereign AI',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: '/assets/server-room-laptop-technician.png',
        cta: 'Explore Platform',
    },
    {
        title: 'Cloud Orbiter',
        desc: 'Unified cloud orchestration across hybrid and edge environments.',
        img: '/assets/server-room-laptop-technician.png',
        cta: 'Explore Platform',
    },
    {
        title: 'Cirrus Cloud Platform',
        desc: 'Highly scalable sovereign cloud platform for enterprises.',
        img: '/assets/server-room-laptop-technician.png',
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
        img: '/assets/server-room-laptop-technician.png',
        cta: 'Explore Platform',
    },
];

export default function PlatformSuite() {
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
                <h2 className="text-4xl md:text-5xl font-semibold">
                    Comprehensive Platform Suite
                </h2>
                <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                    Everything you need to build, deploy, and manage sovereign
                    cloud infrastructure at scale
                </p>
            </div>

            <div className="w-full items-center justify-center">
                <div
                    ref={sliderRef}
                    className="mt-16 flex gap-8 px-10 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group relative
             w-[300px] hover:w-[420px]
             h-[460px]
             flex-shrink-0
             rounded-2xl overflow-hidden
             bg-zinc-900 shadow-xl
             transition-all duration-500 ease-in-out
             cursor-pointer"
                        >
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />

                            <div
                                className="absolute inset-0 bg-linear-to-t
               from-black via-black/70 to-transparent
               opacity-0 group-hover:opacity-100
               transition-opacity duration-300"
                            />

                            <div
                                className="absolute bottom-0 p-6
               translate-y-10 opacity-0
               group-hover:translate-y-0 group-hover:opacity-100
               transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold">
                                    {card.title}
                                </h3>

                                {card.desc && (
                                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                                        {card.desc}
                                    </p>
                                )}

                                {card.cta && (
                                    <button
                                        className="mt-5 inline-block rounded-md 
                   bg-cyan-500 px-5 py-2 text-sm font-semibold
                   hover:bg-cyan-400 transition"
                                    >
                                        {card.cta}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 flex justify-center gap-4">
                <button
                    onClick={() => scroll('left')}
                    className="h-8 w-16 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                    ←
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="h-8 w-16 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                    →
                </button>
            </div>
        </section>
    );
}
