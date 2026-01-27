import React from 'react';
import Image from 'next/image';

const logos = [
    '/logo/cisco.png',
    '/logo/dell.png',
    '/logo/google.png',
    '/logo/qualcomm.png',
    '/logo/broadcom.png',
];

const TrustedEnterprises = () => {
    return (
        <section className="bg-black py-24 px-6 overflow-hidden">
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
                            className="w-30 h-20 md:w-52 md:h-32 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center p-6 hover:border-white/20 transition-all group"
                        >
                            <div className="relative w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
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
