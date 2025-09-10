// components/sections/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const MAIN_COLOR = "#00ADB5";

const experiences = [
    {
        role: "Quality Assurance Engineer (Intern)",
        company: "Dinas Komunikasi, Informatika dan Statistik Provinsi Bali",
        period: "Oct 2021 - Jan 2022",
        description:
            "Melakukan pengujian aplikasi web dan mobile untuk memastikan kualitas, menemukan bug, serta menyusun laporan hasil uji untuk perbaikan sistem.",
    },
    {
        role: "Web Developer",
        company: "PT. Guna Teknologi Nusantara",
        period: "Feb 2024 - Present",
        description:
            "Membangun dan mengembangkan sistem ERP, landing page, serta sistem operasional perusahaan dengan fokus pada fungsionalitas, performa, dan kemudahan penggunaan.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Judul */}
                <motion.h2
                    className="relative inline-block text-4xl md:text-5xl font-extrabold mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Experience
                    <span
                        className="absolute left-1/2 -bottom-2 w-1/3 h-1 rounded -translate-x-1/2"
                        style={{ backgroundColor: MAIN_COLOR }}
                    />
                </motion.h2>

                <div className="relative">
                    {/* Garis timeline animasi */}
                    <motion.div
                        className="absolute left-3 top-0 w-1 h-full rounded"
                        style={{ backgroundColor: MAIN_COLOR }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                    {/* Timeline */}
                    <motion.div
                        className="relative pl-10 space-y-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
                                style={{ backgroundColor: "var(--card-color)", borderColor: "var(--border-card-color)" }}
                            >
                                {/* Icon animasi */}
                                <motion.div
                                    className="absolute -left-[38px] flex items-center justify-center w-8 h-8 rounded-full shadow-md"
                                    style={{ backgroundColor: MAIN_COLOR }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                >
                                    <Briefcase className="w-4 h-4 text-white" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold">
                                    {exp.role}
                                </h3>
                                <p className="font-medium mb-2" style={{ color: "var(--sub-text)" }}>
                                    {exp.company} • {exp.period}
                                </p>
                                <p>{exp.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
