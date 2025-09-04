// components/sections/StatsSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MAIN_COLOR = "#00ADB5";

// Custom hook counter animasi
function useCounter(target: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = target / (duration / 16);
            const counter = setInterval(() => {
                start += increment;
                if (start >= target) {
                    clearInterval(counter);
                    setCount(target);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
        }
    }, [inView, target, duration]);

    return { count, ref, inView };
}

const stats = [
    { label: "Years of Learning", value: 2, suffix: "+" },
    { label: "Projects Completed", value: 8, suffix: "+" },
    { label: "Tech Stack Mastered", value: 6, suffix: "+" },
    { label: "Internships", value: 2, suffix: "" },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-white" id="stats">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Judul */}
                <motion.h2
                    className="relative inline-block text-4xl md:text-5xl font-extrabold mb-16 text-gray-900"
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
                    {stats.map((stat, index) => {
                        const { count, ref, inView } = useCounter(stat.value);

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
                                className="bg-white p-6 rounded-2xl shadow-md cursor-pointer"
                            >
                                <motion.h3
                                    className="text-4xl font-extrabold"
                                    style={{ color: MAIN_COLOR }}
                                    animate={
                                        inView
                                            ? { scale: [1, 1.2, 1], transition: { delay: 1, duration: 0.6 } }
                                            : {}
                                    }
                                >
                                    {count}
                                    {stat.suffix}
                                </motion.h3>
                                <p className="mt-2 text-gray-600 font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
