"use client";

import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaDatabase, FaGitAlt, FaDocker, FaLaravel
} from "react-icons/fa";

const MAIN_COLOR = "#00ADB5";

const skillIcons = {
    HTML: <FaHtml5 className="w-5 h-5 mr-2" />,
    CSS: <FaCss3Alt className="w-5 h-5 mr-2" />,
    JavaScript: <FaJs className="w-5 h-5 mr-2" />,
    React: <FaReact className="w-5 h-5 mr-2" />,
    "Next.js": <FaReact className="w-5 h-5 mr-2" />,
    "Tailwind CSS": <FaCss3Alt className="w-5 h-5 mr-2" />,
    Git: <FaGitAlt className="w-5 h-5 mr-2" />,
    Node: <FaNodeJs className="w-5 h-5 mr-2" />,
    MongoDB: <FaDatabase className="w-5 h-5 mr-2" />,
    MySQL: <FaDatabase className="w-5 h-5 mr-2" />,
    Docker: <FaDocker className="w-5 h-5 mr-2" />,
    Laravel: <FaLaravel className="w-5 h-5 mr-2" />,
    "CodeIgniter": <FaLaravel className="w-5 h-5 mr-2" />,
    TypeScript: <FaJs className="w-5 h-5 mr-2" />,
};

export default function SkillsSection() {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Next.js",
        "Tailwind CSS", "Git", "Node", "MongoDB", "MySQL",
        "Docker", "Laravel", "CodeIgniter", "TypeScript"
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="skills"
            className="py-16 px-8 md:px-16 relative overflow-hidden" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Optional subtle background pattern */}
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5 pointer-events-none"></div>

            <div className="flex flex-col items-center gap-10 relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 relative inline-block">
                        My Skills
                        <span
                            className="absolute left-1/2 -bottom-2 w-20 h-1 rounded-full -translate-x-1/2"
                            style={{ backgroundColor: MAIN_COLOR }}
                        ></span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        These are the technologies and tools I frequently use. Hover over each skill for subtle interactions.
                    </p>
                </div>

                {/* Skill Cards */}
                <motion.div
                    className="flex flex-row flex-wrap md:flex-wrap justify-center gap-4 max-w-5xl overflow-x-auto md:overflow-visible px-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            title={skill}
                            className="flex items-center px-6 py-3 rounded-lg text-white font-medium shadow-md cursor-pointer transition-transform duration-300"
                            style={{
                                background: `linear-gradient(90deg, ${MAIN_COLOR}CC, ${MAIN_COLOR}99)`,
                            }}
                            variants={itemVariants}
                            whileHover={{
                                y: -2,
                                scale: 1.06,
                                boxShadow: `0 8px 20px rgba(0,173,181,0.4)`,
                            }}
                        >
                            {skillIcons[skill] || null} {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
