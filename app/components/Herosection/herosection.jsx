import React from 'react';
import Slider from './slider';

const Herosection = () => {
    return (
        <div className="w-full flex flex-col bg-[url('/wavegraphics.png')] bg-cover bg-center">
            <div className="relative w-full bg-black/80 text-white py-28 px-6 overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium leading-tight tracking-tight">
                        Sovereign Cloud & AI Infrastructure
                        <br />
                        <span className="block mt-2 font-medium">
                            For The Modern Enterprise
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl mx-auto text-gray-300 text-base md:text-[0.9rem] leading-relaxed">
                        Deploy secure, scalable, and compliant cloud
                        infrastructure with full data sovereignty. From
                        GPU-powered AI workloads to edge computing—all
                        orchestrated from a single platform.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition">
                            Discover Products
                        </button>

                        <button className="px-8 py-3 rounded-lg border border-white/40 hover:border-white text-white transition">
                            Request a Demo
                        </button>
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    );
};

export default Herosection;
