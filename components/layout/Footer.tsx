// components/Footer.tsx
"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/dwiputrapurnawa", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ida-bagus-dwi-putra-purnawa-5a929b174/", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/idabagusdwiputrapurnawa", label: "Instagram" },
];

const navLinks = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" }, // gabungan About + Stats + Skills
    { href: "#services", name: "Services" },
    { href: "#experience", name: "Experience" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#certificates", name: "Certificates" },
    { href: "#contact", name: "Contact" },
];

// Variants
const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeSlideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeSlideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } } };

export default function Footer() {
    return (
        <motion.footer
            className="bg-gray-900 text-white py-12 px-8 md:px-20"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Branding */}
                <motion.div className="text-center md:text-left" variants={fadeSlideLeft}>
                    <div className="flex gap-2 items-center justify-center md:justify-start">
                        <Code2 className="w-8 h-8 text-[#ffffff]" />
                        <h2 className="text-2xl font-bold text-[#00ADB5]">Ida Bagus Dwi Putra Purnawa</h2>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
                </motion.div>

                {/* Social Links */}
                <motion.div className="flex gap-6 text-xl" variants={fadeSlideRight}>
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${link.label}`}
                            className="hover:text-[#00ADB5] transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Divider */}
            <motion.div
                className="border-t border-gray-700 mt-8"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
            />

            {/* Bottom Navigation */}
            <motion.div className="mt-6 flex flex-col md:flex-row justify-center gap-4 text-gray-400 text-sm" variants={fadeIn}>
                {navLinks.map((link, idx) => (
                    <a key={idx} href={link.href} className="hover:text-[#00ADB5] transition-colors">
                        {link.name}
                    </a>
                ))}
            </motion.div>
        </motion.footer>
    );
}
