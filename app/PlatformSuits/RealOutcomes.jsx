import React from 'react';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi2';

const solutions = [
    {
        tag: 'By Use Case',
        title: 'AI/ML Training & Inference',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: '/assets/graph.png',
    },
    {
        tag: 'By Industry',
        title: 'AI/ML Training & Inference',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: '/assets/graph.png',
    },
    {
        tag: 'By Role',
        title: 'AI/ML Training & Inference',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: '/assets/graph.png',
    },
];

const RealOutcomes = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center bg-[#0D0D0D] text-white">
            <div className="max-w-7xl mx-auto text-center mb-20 pt-20">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                    Solutions That Drive Real Outcomes
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Purpose-built for your industry and use case
                </p>
            </div>

            <div className="w-[90%]">
                {solutions.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center border-t border-white/10 ${
                            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="w-full lg:w-1/2 p-10 md:p-16">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="hidden lg:block w-px h-[400px] bg-white/10" />

                        <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                            <span className="text-gray-400 text-sm mb-4 block font-light">
                                {item.tag}
                            </span>
                            <h3 className="text-3xl md:text-3xl font-bold mb-6 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-8 font-light max-w-xl">
                                {item.description}
                            </p>
                            <button className="text-white hover:text-cyan-400 transition-colors w-fit">
                                <HiArrowRight size={28} />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="border-b border-white/10 w-full" />
            </div>
        </section>
    );
};

export default RealOutcomes;
