'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Using react-icons

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Products', href: '#' },
        { name: 'Solutions', href: '#' },
        { name: 'Resources', href: '#' },
        { name: 'Company', href: '#' },
        { name: 'Services', href: '#' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <div className="flex items-center gap-2 shrink-0">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="logo"
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                    <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white">
                        COREDGE
                    </span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="hover:text-[#0095B6] transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Action Buttons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="border border-white/40 hover:border-white rounded-md px-5 py-2 text-sm transition-all">
                        Request a Demo
                    </button>
                    <button className="rounded-md px-5 py-2 text-sm bg-[#0095B6] hover:bg-[#007a96] transition-all text-white">
                        Get in Touch
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-3xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Sidebar/Drawer */}
            <div
                className={`
                fixed top-[72px] left-0 w-full h-screen bg-black transition-transform duration-300 ease-in-out lg:hidden
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            >
                <ul className="flex flex-col p-6 gap-6 text-xl font-semibold border-t border-white/10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-white border-b border-white/5 pb-4"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <div className="flex flex-col gap-4 mt-4">
                        <button className="w-full border border-white rounded-md py-3 text-white">
                            Request a Demo
                        </button>
                        <button className="w-full rounded-md py-3 bg-[#0095B6] text-white">
                            Get in Touch
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
