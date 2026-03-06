"use client";

import { ArrowUpRight, SunIcon, MoonIcon, Code2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const handleScroll = (id: string) => {
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    if (!mounted) return null;

    return (
        <nav
            className="sticky top-0 z-50 p-4 backdrop-blur-md shadow-md flex items-center justify-between"
            style={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
            }}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
                <Code2
                    className="w-8 h-8 text-[#00ADB5] transition-all duration-500
            group-hover:-translate-y-1 group-hover:scale-125
            group-hover:rotate-12
            group-hover:drop-shadow-[0_0_15px_#00ADB5]"
                />
                <span className="font-bold tracking-tight text-lg text-[var(--color-foreground)]">
                    Ida Bagus Dwi <span className="text-[#00ADB5]">Putra Purnawa</span>
                </span>
            </Link>

            {/* Menu */}
            <ul className="hidden md:flex gap-6 font-semibold text-[var(--color-foreground)]">
                {[
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" },
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
                hover:text-[#0097A0] hover:-translate-y-0.5 hover:scale-105"
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
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-3 rounded-xl transition-transform duration-300 hover:scale-110"
                >
                    {theme === "dark" ? (
                        <MoonIcon className="w-6 h-6 text-[#00ADB5] hover:text-[#0097A0] transition-all duration-500 hover:rotate-180 hover:drop-shadow-[0_0_8px_#00ADB5]" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-[#00ADB5] hover:text-[#0097A0] transition-all duration-500 hover:rotate-180 hover:drop-shadow-[0_0_8px_#00ADB5]" />
                    )}
                </button>

                {/* Contact Button */}
                <button
                    className="p-3 px-5 text-white rounded-xl flex gap-2 items-center bg-[#00ADB5] 
            hover:bg-[#0097A0] transition-all duration-300"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("#contact");
                    }}
                >
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300" />
                </button>
            </div>
        </nav>
    );
}
