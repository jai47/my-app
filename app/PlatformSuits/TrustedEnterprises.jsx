import React from 'react';
import Image from 'next/image';

const logos = [
    '/trusted/1.png',
    '/trusted/2.png',
    '/trusted/3.png',
    '/trusted/4.png',
    '/trusted/5.png',
];

const TrustedEnterprises = () => {
    return (
        <section className="bg-[#0D0D0D] w-full h-[50vh] py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-medium text-white text-center mb-16 tracking-tight">
                    Trusted by Leading Enterprises
                </h2>

                {/* Logo Grid */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-20 h-20 md:w-52 md:h-32 bg-[#1515154F] border border-[#3F3F3F] rounded-xl flex items-center justify-center p-6 hover:border-white/20 transition-all group"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={logo}
                                    alt={`Enterprise Partner ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedEnterprises;
