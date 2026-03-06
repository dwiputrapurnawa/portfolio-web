// components/sections/StatsSection.tsx
"use client";

import { motion } from "framer-motion";
import StatItem from "../StatItem";

const MAIN_COLOR = "#00ADB5";

const stats = [
    { label: "Years of Learning", value: 7, suffix: "+" },
    { label: "Projects Completed", value: 3, suffix: "+" },
    { label: "Tech Stack Mastered", value: 14, suffix: "+" },
    { label: "Internships", value: 1, suffix: "" },
];

export default function StatsSection() {
    return (
        <section className="py-20" id="stats" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Judul */}
                <motion.h2
                    className="relative inline-block text-4xl md:text-5xl font-extrabold mb-16 "
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Stats
                    <span
                        className="absolute left-1/2 -bottom-2 w-1/3 h-1 rounded -translate-x-1/2"
                        style={{ backgroundColor: MAIN_COLOR }}
                    />
                </motion.h2>

                {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} index={index} />
    ))}
</div>
            </div>
        </section>
    );
}
