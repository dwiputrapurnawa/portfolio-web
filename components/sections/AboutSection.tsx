// components/AboutAnimated.tsx
"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-8 md:px-20 bg-white">
            {/* Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 relative inline-block"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me
                <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-[#00ADB5] rounded-full -translate-x-1/2"></span>
            </motion.h2>

            <div className="flex flex-col md:flex-row items-start gap-12 mt-8">
                {/* Teks */}
                <motion.div
                    className="md:w-3/5 space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-lg md:text-xl text-gray-800 leading-relaxed"
                        variants={itemVariants}
                    >
                        Hi, I'm <span className="font-semibold text-[#00ADB5]">Ida Bagus Dwi Putra Purnawa</span>, a <span className="font-semibold text-[#00ADB5]">Full Stack Web Developer</span> focused on creating modern, responsive, and high-performance web applications.
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl text-gray-800 leading-relaxed"
                        variants={itemVariants}
                    >
                        I specialize in frontend and backend development with <span className="text-[#00ADB5] font-medium">React, Next.js, Node.js, Express</span>, and databases like <span className="text-[#00ADB5] font-medium">MongoDB & MySQL</span>. I focus on clean, efficient, and maintainable code.
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl text-gray-800 leading-relaxed"
                        variants={itemVariants}
                    >
                        I enjoy solving complex problems, learning new technologies, and building applications that help clients succeed.
                    </motion.p>

                    {/* Icon Teknologi */}
                    <motion.div
                        className="flex gap-6 mt-4 text-2xl text-gray-600"
                        variants={itemVariants}
                    >
                        <motion.span
                            whileHover={{ scale: 1.2 }}
                            className="text-[#61DAFB] cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_12px_#00ADB5]"
                        >
                            <FaReact />
                        </motion.span>
                        <motion.span
                            whileHover={{ scale: 1.2 }}
                            className="text-[#3C873A] cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_12px_#00ADB5]"
                        >
                            <FaNodeJs />
                        </motion.span>
                        <motion.span
                            whileHover={{ scale: 1.2 }}
                            className="text-[#f29111] cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_0_12px_#00ADB5]"
                        >
                            <FaDatabase />
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Ilustrasi */}
                <motion.div
                    className="md:w-2/5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.img
                        src="/coding-3-75.svg"
                        alt="Full Stack Developer Illustration"
                        className="w-full rounded-lg"
                        whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0 8px 20px rgba(0,173,181,0.3)" }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
