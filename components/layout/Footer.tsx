// components/Footer.tsx
"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-8 md:px-20 relative">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Branding / Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#00ADB5]">Ida Bagus Dwi Putra Purnawa</h2>
                    <p className="text-sm text-gray-400 mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-6 text-xl">
                    <a
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00ADB5] transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00ADB5] transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00ADB5] transition-colors"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Optional Divider */}
            <div className="border-t border-gray-700 mt-8"></div>

            {/* Bottom Navigation */}
            <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 text-gray-400 text-sm">
                <a href="#about" className="hover:text-[#00ADB5] transition-colors">About</a>
                <a href="#skills" className="hover:text-[#00ADB5] transition-colors">Skills</a>
                <a href="#portfolio" className="hover:text-[#00ADB5] transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-[#00ADB5] transition-colors">Contact</a>
            </div>
        </footer>
    );
}
