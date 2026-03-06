'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from '@/types/index';

const MAIN_COLOR = "#00ADB5";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function PortfolioList({ projects }: { projects: Project[] }) {
    return (
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Heading */}
            <motion.h2
                className="relative text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Portfolio
                <span
                    className="absolute left-1/2 -bottom-2 w-20 h-1 rounded-full -translate-x-1/2"
                    style={{ backgroundColor: MAIN_COLOR }}
                ></span>
            </motion.h2>

            {/* Project Grid */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="rounded-2xl shadow-lg overflow-hidden group flex flex-col transition-all duration-500 hover:shadow-2xl"
                        style={{ backgroundColor: "var(--card-color)" }}
                    >
                        {/* Image */}
                        <div className="relative w-full h-56">
                            <Image
                                src={project.image ?? ""}
                                alt={project.title}
                                fill
                                className="object-contain transition-transform duration-500"
                            />
                        </div>


                        {/* Content */}
                        <div className="p-4 md:p-6 flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm mb-4" style={{ color: "var(--sub-text)" }}>Client: {project.client}</p>
                                <p className="mb-6">{project.description}</p>
                            </div>

                            {/* <a
                                href={`/projects/${project.slug}`}
                                className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium text-white transition-all duration-300"
                                style={{ backgroundColor: MAIN_COLOR }}
                            >
                                Lihat Detail
                                <ArrowUpRightFromSquare className="w-4 h-4 ml-2" />
                            </a> */}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
