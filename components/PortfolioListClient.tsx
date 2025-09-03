'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from '@/types/index'
import { ArrowUpRightFromSquare } from "lucide-react";

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

export default function PortfolioLIstClient({ projects }: { projects: Project[] }) {

    return (
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.h2
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Portfolio
            </motion.h2>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Konten dengan flex-col + justify-between */}
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">Client: {project.client}</p>
                                <p className="text-gray-700 mb-6">{project.description}</p>
                            </div>
                            <a
                                href={`/projects/${project.slug}`}
                                className="mt-auto inline-block px-4 py-2 rounded-xl bg-[#00ADB5] text-white font-medium hover:bg-[#00939b] transition"
                            >
                                Lihat Detail

                                <ArrowUpRightFromSquare className="w-4 h-4 inline-block ml-2" />

                            </a>
                        </div>
                    </motion.div>

                ))}
            </motion.div>


        </div>
    );

}