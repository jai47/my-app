import React from 'react';
import Slider from '../components/Herosection/slider';
import Image from 'next/image';

const PartnersEcosystem = () => {
    return (
        <div className="w-full flex flex-col">
            {/* Main Container */}
            <div className="relative w-full bg-black text-white py-28 px-6 overflow-hidden">
                {/* Background Vector Image */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-40">
                    <Image
                        src="/assets/Vector.png"
                        width={1000} // Increased size to act as a backdrop
                        height={1000}
                        alt="background vector"
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Content - Elevated with z-10 */}
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium leading-tight tracking-tight">
                        The Power of Our Partners Ecosystem
                    </h1>

                    <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-base md:text-[1.1rem] leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </div>

                {/* Slider - Also sits above the background */}
                <div className="relative z-10 mt-20">
                    <Slider />
                </div>
            </div>
        </div>
    );
};

export default PartnersEcosystem;
