import React from 'react';
import Slider from '../components/Herosection/slider';
import Image from 'next/image';

const PartnersEcosystem = () => {
    return (
        <div className="w-full h-[70vh] flex flex-col justify-center items-center relative bg-black text-white py-28 px-6 overflow-hidden gap-16">
            {/* Background Vector Image */}
            <div
                className="
                        absolute inset-0 z-0 pointer-events-none opacity-90
                        bg-[url('/assets/Vector.png')]
                        bg-no-repeat
                        bg-[length:75%]
                    "
                style={{
                    backgroundPosition: 'center',
                }}
            />

            {/* Content - Elevated with z-10 */}
            <div className="relative z-10 max-w-6xl">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium leading-tight tracking-tight">
                    The Power of Our Partners Ecosystem
                </h1>

                <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-base md:text-[1.1rem] leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>

            {/* Slider - Also sits above the background */}
            <div className="relative z-10">
                <Slider />
            </div>
        </div>
    );
};

export default PartnersEcosystem;
