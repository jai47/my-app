import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="relative bg-black text-gray-300 overflow-hidden w-full">
            <div className="relative z-10 max-w-8xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-20">
                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        Platforms
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li>Sovereign AI</li>
                        <li>Cloud Orbiter</li>
                        <li>Cirrus Cloud Platform</li>
                        <li>Coreedge Kubernetes</li>
                        <li>Cirrus Cloud Suite</li>
                        <li>Corobots</li>
                        <li>Dflare AI</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        Industry
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li>Telecom</li>
                        <li>Healthcare</li>
                        <li>Finance</li>
                        <li>Private Sector</li>
                        <li>Mid-Size Enterprise</li>
                        <li>Government</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        Company
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Company</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-6">
                        Get in Touch
                    </h3>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-md bg-zinc-900 hover:bg-zinc-800 transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-md bg-zinc-900 hover:bg-zinc-800 transition"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-md bg-zinc-900 hover:bg-zinc-800 transition"
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center opacity-[0.14] pointer-events-none select-none gap-20">
                <Image
                    src="/logo.png"
                    width={120}
                    height={120}
                    alt="logo"
                    className="brightness-0 invert opacity-90 h-72 w-72"
                />
                <span className="text-[13rem] font-bold tracking-widest text-white">
                    COREDGE
                </span>
            </div>

            <div className="relative z-10 border-t border-white/10 py-6 text-sm text-gray-400">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="flex gap-6">
                        <p>© 2026 Coreedge. All Rights Reserved</p>

                        <a href="#" className="hover:text-white transition">
                            Terms & Conditions
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
