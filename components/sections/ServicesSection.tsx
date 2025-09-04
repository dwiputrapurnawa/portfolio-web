// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Code, MonitorSmartphone, Paintbrush } from "lucide-react";

const MAIN_COLOR = "#00ADB5";

const services = [
    {
        title: "Web Development",
        description:
            "Membangun website modern, cepat, dan responsif dengan teknologi terbaru.",
        icon: <Code className="w-10 h-10" style={{ color: MAIN_COLOR }} />,
    },
    {
        title: "UI/UX Design",
        description:
            "Mendesain antarmuka yang elegan dan mudah digunakan, fokus pada pengalaman pengguna.",
        icon: <Paintbrush className="w-10 h-10" style={{ color: MAIN_COLOR }} />,
    },
    {
        title: "Mobile Friendly",
        description:
            "Optimasi website agar tampil sempurna di semua perangkat, baik desktop maupun mobile.",
        icon: (
            <MonitorSmartphone className="w-10 h-10" style={{ color: MAIN_COLOR }} />
        ),
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
                {/* Judul */}
                <motion.h2
                    className="relative inline-block text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Services
                    <span
                        className="absolute left-1/2 -bottom-2 w-1/2 h-1 rounded -translate-x-1/2"
                        style={{ backgroundColor: MAIN_COLOR }}
                    />
                </motion.h2>



                {/* Card Services */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer border border-gray-200 hover:shadow-2xl transition"
                            style={{
                                borderColor: "transparent",
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex justify-center mb-6"
                            >
                                {service.icon}
                            </motion.div>
                            <h3
                                className="text-xl font-semibold mb-4"
                                style={{ color: MAIN_COLOR }}
                            >
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
