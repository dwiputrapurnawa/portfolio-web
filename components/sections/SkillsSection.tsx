// components/SkillsVerticalCompactUpdated.jsx
"use client";

import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaDatabase, FaGitAlt, FaDocker, FaLaravel
} from "react-icons/fa";

const skillIcons = {
    HTML: <FaHtml5 className="w-5 h-5 mr-2 text-white" />,
    CSS: <FaCss3Alt className="w-5 h-5 mr-2 text-white" />,
    JavaScript: <FaJs className="w-5 h-5 mr-2 text-white" />,
    React: <FaReact className="w-5 h-5 mr-2 text-white" />,
    "Next.js": <FaReact className="w-5 h-5 mr-2 text-white" />,
    "Tailwind CSS": <FaCss3Alt className="w-5 h-5 mr-2 text-white" />,
    Git: <FaGitAlt className="w-5 h-5 mr-2 text-white" />,
    Node: <FaNodeJs className="w-5 h-5 mr-2 text-white" />,
    MongoDB: <FaDatabase className="w-5 h-5 mr-2 text-white" />,
    MySQL: <FaDatabase className="w-5 h-5 mr-2 text-white" />,
    Docker: <FaDocker className="w-5 h-5 mr-2 text-white" />,
    Laravel: <FaLaravel className="w-5 h-5 mr-2 text-white" />,
    "CodeIgniter": <FaLaravel className="w-5 h-5 mr-2 text-white" />, // Laravel icon reused
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
            className="py-16 px-8 md:px-16 bg-white relative overflow-hidden"
        >
            {/* Optional subtle background pattern */}
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5 pointer-events-none"></div>

            <div className="flex flex-col items-center gap-10 relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 relative inline-block">
                        My Skills
                        <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-[#00ADB5] rounded-full -translate-x-1/2"></span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        These are the technologies and tools I frequently use. Hover over each skill for subtle interactions and animations.
                    </p>
                </div>

                {/* Skill Cards */}
                <motion.div
                    className="flex flex-col md:flex-row flex-wrap justify-center gap-4 max-w-5xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00ADB5]/90 to-[#00ADB5]/70 text-white font-medium shadow-md cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -2, scale: 1.06 }}
                        >
                            {skillIcons[skill] || null} {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
