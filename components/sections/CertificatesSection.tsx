// components/sections/CertificatesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const MAIN_COLOR = "#00ADB5";

const certificates = [
    {
        title: "Sertifikat Kompetensi BNSP – Junior Web Developer",
        issuer: "BNSP",
        year: "2021",
        status: "expired", // expired | active
    },
    {
        title: "The Complete React Developer Course",
        issuer: "Udemy",
        year: "2024",
        status: "active",
        link: "https://udemy-certificate-url.com/xxxxx",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function CertificatesSection() {
    return (
        <section id="certificates" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Judul */}
                <motion.h2
                    className="relative inline-block text-4xl md:text-5xl font-extrabold mb-16 text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Certificates
                    <span
                        className="absolute left-1/2 -bottom-2 w-1/3 h-1 rounded -translate-x-1/2"
                        style={{ backgroundColor: MAIN_COLOR }}
                    />
                </motion.h2>

                {/* List */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -6, boxShadow: "0px 12px 25px rgba(0,0,0,0.1)" }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className={`relative bg-white rounded-2xl p-6 border ${cert.status === "expired"
                                ? "border-gray-300 opacity-80"
                                : "border-gray-200"
                                }`}
                        >
                            {/* Icon */}
                            <div
                                className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
                                style={{
                                    backgroundColor:
                                        cert.status === "expired" ? "#9CA3AF" : MAIN_COLOR,
                                }}
                            >
                                <Award className="w-6 h-6 text-white" />
                            </div>

                            {/* Title (link kalau ada) */}
                            {cert.link ? (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-gray-900 hover:underline hover:text-[#00ADB5]"
                                >
                                    {cert.title}
                                </a>
                            ) : (
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {cert.title}
                                </h3>
                            )}

                            <p className="text-gray-500">
                                {cert.issuer} • {cert.year}
                            </p>

                            {/* Status */}
                            {cert.status === "expired" ? (
                                <span className="mt-2 inline-block text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-600 font-medium">
                                    Expired
                                </span>
                            ) : (
                                <span className="mt-2 inline-block text-sm px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                                    Active
                                </span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
