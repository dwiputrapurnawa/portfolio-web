"use client";

import { ArrowUpRight, SunIcon, MoonIcon, Code2 } from "lucide-react";
import { useState } from "react";

const MAIN_COLOR = "#00ADB5";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const handleScroll = (id: string) => {
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="sticky top-0 z-50 p-4 bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
                <Code2
                    className="w-8 h-8 text-[#00ADB5] transition-all duration-500
            group-hover:-translate-y-1 group-hover:scale-125
            group-hover:rotate-12
            group-hover:drop-shadow-[0_0_15px_#00ADB5]"
                />

                <span
                    className="font-bold tracking-tight text-lg leading-tight
            bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
            bg-clip-text text-transparent 
            transition-all duration-700 ease-in-out
            group-hover:translate-x-1 group-hover:tracking-wide
            animate-gradient-x"
                >
                    Ida Bagus Dwi{" "}
                    <span
                        className="relative text-[#00ADB5]
              after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px]
              after:h-[2px] after:w-0 after:bg-[#00ADB5]
              after:transition-all after:duration-500 after:ease-out
              group-hover:after:left-0 group-hover:after:w-full"
                    >
                        Putra Purnawa
                    </span>
                </span>
            </a>

            {/* Menu */}
            <ul className="hidden md:flex gap-6 font-semibold text-gray-700">
                {[
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" }, // gabungan About + Stats + Skills
                    { href: "#services", label: "Services" },
                    { href: "#experience", label: "Experience" },
                    { href: "#portfolio", label: "Portfolio" },
                    { href: "#certificates", label: "Certificates" },
                    { href: "#contact", label: "Contact" },
                ].map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(item.href);
                            }}
                            className="relative inline-block transition-all duration-300 
                hover:text-[#0097A0] hover:-translate-y-0.5 hover:scale-105
                after:content-[''] after:absolute after:left-0 after:bottom-[-6px] 
                after:h-[2px] after:w-full after:scale-x-0 after:bg-[#0097A0] 
                after:origin-left after:transition-transform after:duration-300 
                hover:after:scale-x-100"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Actions */}
            <div className="flex gap-4 items-center">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 rounded-xl transition-transform duration-300 hover:scale-110"
                >
                    {darkMode ? (
                        <MoonIcon className="w-6 h-6 text-[#00ADB5] hover:text-[#0097A0] transition-all duration-500 hover:rotate-180 hover:drop-shadow-[0_0_8px_#00ADB5]" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-[#00ADB5] hover:text-[#0097A0] transition-all duration-500 hover:rotate-180 hover:drop-shadow-[0_0_8px_#00ADB5]" />
                    )}
                </button>

                {/* Contact Button */}
                <button
                    className="p-3 px-5 text-white rounded-xl flex gap-2 items-center bg-[#00ADB5] 
            hover:bg-[#0097A0] transition-all duration-300 group"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("#contact");
                    }}
                >
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </div>
        </nav>
    );
}
