"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiLaravel, SiCodeigniter } from "react-icons/si";

const MAIN_COLOR = "#00ADB5";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
    const handleScroll = (id: string) => {
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="about" className="py-16 px-8 md:px-20" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8 text-center relative inline-block"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me
                <span
                    className="absolute left-1/2 -bottom-2 w-20 h-1 rounded-full -translate-x-1/2"
                    style={{ backgroundColor: MAIN_COLOR }}
                ></span>
            </motion.h2>

            <div className="flex flex-col md:flex-row items-start gap-12">
                {/* Text */}
                <motion.div
                    className="md:w-3/5 space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        Hi, I'm{" "}
                        <span className="font-semibold" style={{ color: MAIN_COLOR }}>
                            Ida Bagus Dwi Putra Purnawa
                        </span>
                        , a{" "}
                        <span className="font-semibold" style={{ color: MAIN_COLOR }}>
                            Full Stack Web Developer
                        </span>{" "}
                        focused on creating modern, responsive, and high-performance web applications.
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        I specialize in frontend and backend development with{" "}
                        <span
                            className="font-medium cursor-pointer"
                            style={{ color: MAIN_COLOR }}
                            onClick={() => handleScroll("#portfolio")}
                        >
                            React, Next.js, Node.js, Express
                        </span>
                        , and backend frameworks like{" "}
                        <span className="font-medium" style={{ color: MAIN_COLOR }}>
                            Laravel & CodeIgniter
                        </span>
                        , as well as databases like{" "}
                        <span className="font-medium" style={{ color: MAIN_COLOR }}>
                            MongoDB & MySQL
                        </span>. I focus on clean, efficient, and maintainable code.
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl leading-relaxed"
                        variants={itemVariants}
                    >
                        I enjoy solving complex problems, learning new technologies, and building applications that help clients succeed.
                    </motion.p>

                    {/* Download CV */}
                    <motion.div variants={itemVariants}>
                        <a
                            href="/CV.pdf"
                            download
                            className="px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
                            style={{
                                backgroundColor: MAIN_COLOR,
                                color: "#fff",
                            }}
                        >
                            Download CV
                        </a>
                    </motion.div>

                    {/* Technology Icons */}
                    <motion.div
                        className="flex gap-6 mt-4 text-2xl"
                        variants={itemVariants}
                    >
                        <motion.span
                            title="React"
                            whileHover={{ scale: 1.2 }}
                            className="cursor-pointer transition-shadow duration-300"
                            style={{ color: MAIN_COLOR }}
                        >
                            <FaReact />
                        </motion.span>
                        <motion.span
                            title="Node.js"
                            whileHover={{ scale: 1.2 }}
                            className="cursor-pointer transition-shadow duration-300"
                            style={{ color: MAIN_COLOR }}
                        >
                            <FaNodeJs />
                        </motion.span>
                        <motion.span
                            title="Database"
                            whileHover={{ scale: 1.2 }}
                            className="cursor-pointer transition-shadow duration-300"
                            style={{ color: MAIN_COLOR }}
                        >
                            <FaDatabase />
                        </motion.span>
                        <motion.span
                            title="Laravel"
                            whileHover={{ scale: 1.2 }}
                            className="cursor-pointer transition-shadow duration-300"
                            style={{ color: MAIN_COLOR }}
                        >
                            <SiLaravel />
                        </motion.span>
                        <motion.span
                            title="CodeIgniter"
                            whileHover={{ scale: 1.2 }}
                            className="cursor-pointer transition-shadow duration-300"
                            style={{ color: MAIN_COLOR }}
                        >
                            <SiCodeigniter />
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Illustration */}
                <motion.div
                    className="md:w-2/5 w-full max-w-[300px] md:max-w-none self-start relative"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.img
                        src="/coding-3-75.svg"
                        alt="Illustration of a developer coding on laptop"
                        className="w-full rounded-lg"
                        whileHover={{
                            scale: 1.05,
                            rotate: 2,
                            boxShadow: `0 8px 20px rgba(0,173,181,0.3)`,
                        }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
